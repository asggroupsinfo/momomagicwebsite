# 🔧 MOMOS MAGIC - TECHNICAL REFERENCE

## 📋 TABLE OF CONTENTS

1. [API Documentation](#api-documentation)
2. [Database Schema](#database-schema)
3. [Environment Setup](#environment-setup)
4. [Deployment Guide](#deployment-guide)
5. [Development Workflow](#development-workflow)
6. [Testing Guide](#testing-guide)
7. [Performance Optimization](#performance-optimization)
8. [Security Implementation](#security-implementation)

---

## 🌐 API DOCUMENTATION

### **Authentication Endpoints**

#### **POST /api/auth/login**

**Purpose**: Authenticate admin user and create session

**Request**:
```typescript
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@momomegics.com",
  "password": "SecurePassword123!"
}
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "uuid-string",
    "email": "admin@momomegics.com",
    "name": "Admin User",
    "role": "admin"
  },
  "token": "jwt-token-string"
}
```

**Response (Error - 401)**:
```typescript
{
  "success": false,
  "message": "Invalid email or password",
  "error": "INVALID_CREDENTIALS"
}
```

**Implementation**:
```typescript
// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password required' },
        { status: 400 }
      );
    }
    
    // Find user (from database or JSON file)
    const user = await findUserByEmail(email);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Generate JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ 
      userId: user.id,
      email: user.email,
      role: user.role
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret);
    
    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
    
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

#### **POST /api/auth/logout**

**Purpose**: Logout admin user and clear session

**Request**:
```typescript
POST /api/auth/logout
Cookie: auth-token=jwt-token-string
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "message": "Logout successful"
}
```

**Implementation**:
```typescript
// app/api/auth/logout/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.json({
    success: true,
    message: 'Logout successful'
  });
  
  // Clear auth cookie
  response.cookies.delete('auth-token');
  
  return response;
}
```

---

#### **GET /api/auth/verify**

**Purpose**: Verify JWT token and get current user

**Request**:
```typescript
GET /api/auth/verify
Cookie: auth-token=jwt-token-string
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "user": {
    "id": "uuid-string",
    "email": "admin@momomegics.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

**Response (Error - 401)**:
```typescript
{
  "success": false,
  "message": "Unauthorized",
  "error": "INVALID_TOKEN"
}
```

**Implementation**:
```typescript
// app/api/auth/verify/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Verify JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    
    // Get user details
    const user = await findUserById(payload.userId as string);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 401 }
    );
  }
}
```

---

### **CMS Endpoints**

#### **GET /api/cms/hero**

**Purpose**: Get hero section content

**Request**:
```typescript
GET /api/cms/hero
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "data": {
    "headline": "From Humble Stall to Culinary Legend",
    "subheadline": "Experience the Magic That Transformed Sherghati's Street Food Scene",
    "primaryCTA": {
      "text": "Taste the Magic → Order Now",
      "link": "/menu",
      "color": "#DC2626"
    },
    "secondaryCTA": {
      "text": "Discover Our Story",
      "link": "/about",
      "color": "#D4AF37"
    },
    "videoUrl": "/videos/hero-background.mp4",
    "posterImage": "/images/hero-poster.jpg",
    "fallbackImage": "/images/hero-fallback.jpg",
    "trustBadges": [
      {
        "icon": "trophy",
        "text": "Awarded 'Best Quality Food in City'",
        "color": "#D4AF37"
      },
      {
        "icon": "shield-check",
        "text": "FSSAI Certified: 20424201001152",
        "color": "#059669"
      },
      {
        "icon": "leaf",
        "text": "100% Pure Vegetarian · Since 2023",
        "color": "#059669"
      },
      {
        "icon": "star",
        "text": "⭐ 4.9/5 (2000+ Happy Customers)",
        "color": "#EA580C"
      }
    ]
  }
}
```

**Implementation**:
```typescript
// app/api/cms/hero/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'hero.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const heroData = JSON.parse(data);
    
    return NextResponse.json({
      success: true,
      data: heroData
    });
  } catch (error) {
    console.error('Get hero error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get hero data' },
      { status: 500 }
    );
  }
}
```

---

#### **PUT /api/cms/hero**

**Purpose**: Update hero section content

**Request**:
```typescript
PUT /api/cms/hero
Cookie: auth-token=jwt-token-string
Content-Type: application/json

{
  "headline": "New Headline",
  "subheadline": "New Subheadline",
  "primaryCTA": {
    "text": "Order Now",
    "link": "/menu",
    "color": "#DC2626"
  },
  // ... other fields
}
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "message": "Hero section updated successfully",
  "data": {
    // Updated hero data
  }
}
```

**Response (Error - 401)**:
```typescript
{
  "success": false,
  "message": "Unauthorized",
  "error": "INVALID_TOKEN"
}
```

**Implementation**:
```typescript
// app/api/cms/hero/route.ts
export async function PUT(request: NextRequest) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get request body
    const body = await request.json();
    
    // Validate data
    const validatedData = validateHeroData(body);
    
    // Save to file
    const dataPath = path.join(process.cwd(), 'data', 'hero.json');
    await fs.writeFile(dataPath, JSON.stringify(validatedData, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Hero section updated successfully',
      data: validatedData
    });
  } catch (error) {
    console.error('Update hero error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update hero data' },
      { status: 500 }
    );
  }
}
```

---

#### **GET /api/cms/menu**

**Purpose**: Get all menu items

**Request**:
```typescript
GET /api/cms/menu?category=kurkure&active=true
```

**Query Parameters**:
- `category` (optional): Filter by category (steamed, fried, kurkure, pizza)
- `active` (optional): Filter by active status (true, false)
- `popular` (optional): Filter by popular status (true, false)
- `search` (optional): Search by item name

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "data": [
    {
      "id": "uuid-1",
      "name": "Kurkure Veg Momos",
      "description": "Crispy, crunchy momos with our special kurkure coating",
      "category": "kurkure",
      "price": {
        "fivePc": 50,
        "tenPc": 100
      },
      "spiceLevel": "medium",
      "isPopular": true,
      "isVegetarian": true,
      "preparationTime": 15,
      "imageUrl": "/images/menu/kurkure-veg.jpg",
      "isActive": true,
      "createdAt": "2024-01-15T10:00:00Z",
      "updatedAt": "2024-03-20T15:30:00Z"
    },
    // ... more items
  ],
  "total": 16,
  "page": 1,
  "limit": 20
}
```

**Implementation**:
```typescript
// app/api/cms/menu/route.ts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const active = searchParams.get('active');
    const popular = searchParams.get('popular');
    const search = searchParams.get('search');
    
    // Load menu data
    const dataPath = path.join(process.cwd(), 'data', 'menu.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    let menuItems = JSON.parse(data);
    
    // Apply filters
    if (category) {
      menuItems = menuItems.filter(item => item.category === category);
    }
    
    if (active !== null) {
      menuItems = menuItems.filter(item => item.isActive === (active === 'true'));
    }
    
    if (popular !== null) {
      menuItems = menuItems.filter(item => item.isPopular === (popular === 'true'));
    }
    
    if (search) {
      menuItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return NextResponse.json({
      success: true,
      data: menuItems,
      total: menuItems.length,
      page: 1,
      limit: 20
    });
  } catch (error) {
    console.error('Get menu error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get menu items' },
      { status: 500 }
    );
  }
}
```

---

#### **POST /api/cms/menu**

**Purpose**: Create new menu item

**Request**:
```typescript
POST /api/cms/menu
Cookie: auth-token=jwt-token-string
Content-Type: application/json

{
  "name": "Cheese Kurkure Momos",
  "description": "Crispy kurkure momos with melted cheese filling",
  "category": "kurkure",
  "price": {
    "fivePc": 60,
    "tenPc": 120
  },
  "spiceLevel": "medium",
  "isPopular": false,
  "isVegetarian": true,
  "preparationTime": 15,
  "imageUrl": "/images/menu/cheese-kurkure.jpg",
  "isActive": true
}
```

**Response (Success - 201)**:
```typescript
{
  "success": true,
  "message": "Menu item created successfully",
  "data": {
    "id": "uuid-new",
    "name": "Cheese Kurkure Momos",
    // ... all fields with generated id and timestamps
  }
}
```

**Implementation**:
```typescript
// app/api/cms/menu/route.ts
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get request body
    const body = await request.json();
    
    // Validate data
    const validatedData = validateMenuItemData(body);
    
    // Generate ID and timestamps
    const newItem = {
      id: generateUUID(),
      ...validatedData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Load existing menu
    const dataPath = path.join(process.cwd(), 'data', 'menu.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const menuItems = JSON.parse(data);
    
    // Add new item
    menuItems.push(newItem);
    
    // Save to file
    await fs.writeFile(dataPath, JSON.stringify(menuItems, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Menu item created successfully',
      data: newItem
    }, { status: 201 });
  } catch (error) {
    console.error('Create menu item error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create menu item' },
      { status: 500 }
    );
  }
}
```

---

#### **PUT /api/cms/menu**

**Purpose**: Update existing menu item

**Request**:
```typescript
PUT /api/cms/menu
Cookie: auth-token=jwt-token-string
Content-Type: application/json

{
  "id": "uuid-1",
  "name": "Updated Name",
  "price": {
    "fivePc": 55,
    "tenPc": 110
  },
  // ... other fields to update
}
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "message": "Menu item updated successfully",
  "data": {
    // Updated menu item
  }
}
```

---

#### **DELETE /api/cms/menu**

**Purpose**: Delete menu item (soft delete)

**Request**:
```typescript
DELETE /api/cms/menu?id=uuid-1
Cookie: auth-token=jwt-token-string
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "message": "Menu item deleted successfully"
}
```

---

#### **GET /api/google-reviews**

**Purpose**: Fetch Google reviews from Places API

**Request**:
```typescript
GET /api/google-reviews
```

**Response (Success - 200)**:
```typescript
{
  "success": true,
  "data": {
    "reviews": [
      {
        "author_name": "John Doe",
        "author_url": "https://www.google.com/maps/contrib/...",
        "profile_photo_url": "https://lh3.googleusercontent.com/...",
        "rating": 5,
        "relative_time_description": "2 weeks ago",
        "text": "Amazing momos! The Kurkure variety is a must-try.",
        "time": 1710345600
      },
      // ... more reviews
    ],
    "rating": 4.9,
    "user_ratings_total": 2000
  }
}
```

**Implementation**:
```typescript
// app/api/google-reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    
    if (!apiKey || !placeId) {
      // Return fallback reviews
      return NextResponse.json({
        success: true,
        data: {
          reviews: getFallbackReviews(),
          rating: 4.9,
          user_ratings_total: 2000
        }
      });
    }
    
    // Fetch from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );
    
    const data = await response.json();
    
    if (data.status === 'OK') {
      return NextResponse.json({
        success: true,
        data: {
          reviews: data.result.reviews || [],
          rating: data.result.rating || 4.9,
          user_ratings_total: data.result.user_ratings_total || 2000
        }
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      });
    } else {
      // Return fallback reviews on API error
      return NextResponse.json({
        success: true,
        data: {
          reviews: getFallbackReviews(),
          rating: 4.9,
          user_ratings_total: 2000
        }
      });
    }
  } catch (error) {
    console.error('Get reviews error:', error);
    // Return fallback reviews on error
    return NextResponse.json({
      success: true,
      data: {
        reviews: getFallbackReviews(),
        rating: 4.9,
        user_ratings_total: 2000
      }
    });
  }
}

function getFallbackReviews() {
  return [
    {
      author_name: "Rohan",
      rating: 5,
      text: "The Kurkure Momos are revolutionary! Nobody in Bihar makes them like Momos Magic.",
      relative_time_description: "2 weeks ago"
    },
    {
      author_name: "City Food Blog",
      rating: 5,
      text: "Awarded 'Best Quality Food' for a reason! The hygiene, taste, and innovation combination is unmatched.",
      relative_time_description: "1 month ago"
    },
    {
      author_name: "Priya",
      rating: 5,
      text: "From watching them start with a small stall to becoming the most premium food spot - what a journey!",
      relative_time_description: "3 weeks ago"
    }
  ];
}
```

---

## 🗄️ DATABASE SCHEMA

### **Current Implementation: JSON File Storage**

The current implementation uses JSON files for data storage. This is suitable for:
- Small to medium data volumes
- Simple CRUD operations
- Easy backup and version control
- No database server required

**Data Storage Structure**:
```
data/
├── hero.json           # Hero section content
├── menu.json           # Menu items
├── categories.json     # Menu categories
├── about.json          # About page content
├── contact.json        # Contact information
├── gallery.json        # Gallery images
├── testimonials.json   # Customer testimonials
├── combo-deals.json    # Combo deals
├── settings.json       # System settings
└── users.json          # Admin users (hashed passwords)
```

---

### **Future Database Schema: PostgreSQL/MongoDB**

For scalability and advanced features, here's the recommended database schema:

#### **Users Table**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'editor')),
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

**TypeScript Interface**:
```typescript
interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: 'admin' | 'editor';
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Menu Items Table**

```sql
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('steamed', 'fried', 'kurkure', 'pizza')),
  price_5pc DECIMAL(10, 2) NOT NULL,
  price_10pc DECIMAL(10, 2) NOT NULL,
  spice_level VARCHAR(50) NOT NULL CHECK (spice_level IN ('mild', 'medium', 'hot', 'extra_magic')),
  is_popular BOOLEAN DEFAULT false,
  is_vegetarian BOOLEAN DEFAULT true,
  preparation_time INTEGER DEFAULT 15,
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_menu_items_category ON menu_items(category);
CREATE INDEX idx_menu_items_active ON menu_items(is_active);
CREATE INDEX idx_menu_items_popular ON menu_items(is_popular);
CREATE INDEX idx_menu_items_display_order ON menu_items(display_order);
```

**TypeScript Interface**:
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'steamed' | 'fried' | 'kurkure' | 'pizza';
  price5pc: number;
  price10pc: number;
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra_magic';
  isPopular: boolean;
  isVegetarian: boolean;
  preparationTime: number;
  imageUrl: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Categories Table**

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  highlight VARCHAR(255),
  icon VARCHAR(100),
  color_accent VARCHAR(7),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_display_order ON categories(display_order);
```

**TypeScript Interface**:
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  highlight: string;
  icon: string;
  colorAccent: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Gallery Images Table**

```sql
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255),
  description TEXT,
  image_url VARCHAR(500) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('stall', 'food', 'awards', 'events')),
  display_order INTEGER DEFAULT 0,
  alt_text VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_gallery_category ON gallery_images(category);
CREATE INDEX idx_gallery_display_order ON gallery_images(display_order);
```

**TypeScript Interface**:
```typescript
interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'stall' | 'food' | 'awards' | 'events';
  displayOrder: number;
  altText: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Testimonials Table**

```sql
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name VARCHAR(255) NOT NULL,
  customer_title VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  customer_image_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  testimonial_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);
```

**TypeScript Interface**:
```typescript
interface Testimonial {
  id: string;
  customerName: string;
  customerTitle: string;
  rating: number;
  reviewText: string;
  customerImageUrl?: string;
  isFeatured: boolean;
  isActive: boolean;
  testimonialDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Contact Messages Table**

```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_contact_created_at ON contact_messages(created_at);
```

**TypeScript Interface**:
```typescript
interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}
```

---

#### **Settings Table**

```sql
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(50) DEFAULT 'string' CHECK (type IN ('string', 'number', 'boolean', 'json')),
  description TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_settings_key ON settings(key);
```

**TypeScript Interface**:
```typescript
interface Setting {
  id: string;
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json';
  description: string;
  updatedAt: Date;
}
```

---

## 🛠️ ENVIRONMENT SETUP

### **Prerequisites**

#### **Required Software**
1. **Node.js**: Version 20.x or higher
2. **npm**: Version 10.x or higher (comes with Node.js)
3. **Git**: Latest version
4. **Code Editor**: VS Code recommended

#### **Optional Software**
1. **PostgreSQL**: If using database instead of JSON files
2. **Docker**: For containerized development
3. **Postman**: For API testing

---

### **Local Development Setup**

#### **Step 1: Clone Repository**

```bash
# Clone the repository
git clone https://github.com/asggroupsinfo/momomagicwebsite.git

# Navigate to project directory
cd momomagicwebsite
```

---

#### **Step 2: Install Dependencies**

```bash
# Install all dependencies
npm install

# This will install:
# - Next.js 16.0.0
# - React 19.2.0
# - Tailwind CSS 4.0
# - Framer Motion 12.23.24
# - TypeScript 5.x
# - And all other dependencies
```

---

#### **Step 3: Environment Variables**

Create `.env.local` file in the root directory:

```env
# Application
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Google APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your-google-places-api-key
GOOGLE_PLACE_ID=your-google-business-place-id

# Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key

# Database (if using PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/momomagic

# Email (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Admin Credentials (for initial setup)
ADMIN_EMAIL=admin@momomegics.com
ADMIN_PASSWORD=ChangeThisPassword123!
```

**Security Notes**:
- Never commit `.env.local` to Git
- Use strong, unique values for secrets
- Rotate secrets regularly
- Use different values for production

---

#### **Step 4: Run Development Server**

```bash
# Start development server
npm run dev

# Server will start on http://localhost:3000
# With Turbopack for faster development
```

**Development Server Features**:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- Automatic TypeScript compilation
- Tailwind CSS JIT compilation
- Error overlay for debugging

---

#### **Step 5: Verify Setup**

1. **Open Browser**: Navigate to `http://localhost:3000`
2. **Check Home Page**: Verify home page loads correctly
3. **Check Admin Panel**: Navigate to `http://localhost:3000/admin`
4. **Test Login**: Try logging in with admin credentials
5. **Check Console**: Verify no errors in browser console

---

### **Production Environment Setup**

#### **Environment Variables for Production**

Create `.env.production` file:

```env
# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.momomegics.com

# JWT Authentication (use strong secret)
JWT_SECRET=production-super-secret-jwt-key-min-32-characters

# Google APIs (production keys)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=production-google-maps-api-key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=production-google-places-api-key
GOOGLE_PLACE_ID=production-google-business-place-id

# Google Analytics (production ID)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-PRODUCTION-ID

# reCAPTCHA (production keys)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=production-recaptcha-site-key
RECAPTCHA_SECRET_KEY=production-recaptcha-secret-key

# Database (production connection)
DATABASE_URL=postgresql://user:password@production-host:5432/momomagic

# Email (production SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=production-email@momomegics.com
SMTP_PASSWORD=production-app-password
```

---

## 🚀 DEPLOYMENT GUIDE

### **Vercel Deployment** (Recommended)

#### **Step 1: Prepare for Deployment**

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

#### **Step 2: Connect to Vercel**

1. **Sign Up**: Create account at [vercel.com](https://vercel.com)
2. **Import Project**: Click "New Project"
3. **Connect GitHub**: Authorize Vercel to access your repository
4. **Select Repository**: Choose `momomagicwebsite` repository

---

#### **Step 3: Configure Project**

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (default)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)
6. **Node Version**: 20.x

---

#### **Step 4: Add Environment Variables**

In Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add all production environment variables
3. Set environment: **Production**
4. Click **Save**

**Required Variables**:
- `JWT_SECRET`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

---

#### **Step 5: Deploy**

1. Click **"Deploy"** button
2. Wait for build to complete (2-5 minutes)
3. Vercel will provide a deployment URL
4. Test the deployment URL

---

#### **Step 6: Configure Custom Domain**

1. Go to **Settings** → **Domains**
2. Add custom domain: `www.momomegics.com`
3. Follow DNS configuration instructions
4. Add DNS records to your domain registrar:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com
5. Wait for DNS propagation (5-60 minutes)
6. Verify SSL certificate is issued automatically

---

#### **Step 7: Configure Production Settings**

1. **Analytics**: Enable Vercel Analytics
2. **Speed Insights**: Enable Web Vitals tracking
3. **Caching**: Configure cache headers
4. **Redirects**: Set up www → non-www redirect (or vice versa)
5. **Security Headers**: Enable security headers

---

### **Manual Deployment** (Alternative)

#### **Step 1: Build for Production**

```bash
# Create production build
npm run build

# This creates optimized production build in .next directory
```

---

#### **Step 2: Test Production Build Locally**

```bash
# Start production server locally
npm start

# Test on http://localhost:3000
```

---

#### **Step 3: Deploy to Server**

```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone https://github.com/asggroupsinfo/momomagicwebsite.git
cd momomagicwebsite

# Install dependencies
npm install

# Create .env.production file with production variables

# Build for production
npm run build

# Start with PM2 (process manager)
pm2 start npm --name "momomagic" -- start
pm2 save
pm2 startup
```

---

#### **Step 4: Configure Nginx**

Create Nginx configuration:

```nginx
server {
    listen 80;
    server_name www.momomegics.com momomegics.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable SSL with Let's Encrypt:

```bash
sudo certbot --nginx -d www.momomegics.com -d momomegics.com
```

---

### **Post-Deployment Checklist**

#### **Functionality Testing**
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Menu page filters work
- [ ] Contact form submits successfully
- [ ] Admin panel login works
- [ ] Admin panel CMS functions work
- [ ] Images load correctly
- [ ] Videos play correctly

#### **Performance Testing**
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Core Web Vitals
- [ ] Test page load times
- [ ] Verify image optimization
- [ ] Check mobile performance

#### **SEO Testing**
- [ ] Verify meta tags on all pages
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Test Open Graph tags (social sharing)
- [ ] Submit sitemap to Google Search Console

#### **Security Testing**
- [ ] Verify HTTPS is working
- [ ] Check SSL certificate
- [ ] Test admin authentication
- [ ] Verify API keys are not exposed
- [ ] Check security headers

#### **Analytics Setup**
- [ ] Verify Google Analytics tracking
- [ ] Test event tracking
- [ ] Set up conversion goals
- [ ] Configure alerts

---

## 🔄 DEVELOPMENT WORKFLOW

### **Git Workflow**

#### **Branch Strategy**

```
main (production)
├── develop (staging)
│   ├── feature/hero-section
│   ├── feature/menu-page
│   ├── feature/admin-panel
│   └── bugfix/image-loading
```

**Branch Types**:
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Urgent production fixes

---

#### **Feature Development Workflow**

```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push to remote
git push origin feature/new-feature

# 4. Create pull request on GitHub
# 5. After review and approval, merge to develop
# 6. Delete feature branch
git branch -d feature/new-feature
```

---

#### **Commit Message Convention**

Follow Conventional Commits:

```
feat: add new menu filtering feature
fix: resolve image loading issue
docs: update API documentation
style: format code with prettier
refactor: restructure menu component
test: add unit tests for menu filters
chore: update dependencies
```

---

### **Code Quality Tools**

#### **ESLint Configuration**

```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

Run ESLint:
```bash
npm run lint
```

---

#### **Prettier Configuration**

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

Format code:
```bash
npx prettier --write .
```

---

### **Development Scripts**

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 🧪 TESTING GUIDE

### **Unit Testing**

#### **Jest Configuration**

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
};
```

---

#### **Example Unit Test**

```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-magic-red');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
```

Run tests:
```bash
npm test
```

---

### **Integration Testing**

#### **Example API Test**

```typescript
// __tests__/api/menu.test.ts
import { GET, POST } from '@/app/api/cms/menu/route';
import { NextRequest } from 'next/server';

describe('/api/cms/menu', () => {
  describe('GET', () => {
    it('returns all menu items', async () => {
      const request = new NextRequest('http://localhost:3000/api/cms/menu');
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(Array.isArray(data.data)).toBe(true);
    });

    it('filters by category', async () => {
      const request = new NextRequest('http://localhost:3000/api/cms/menu?category=kurkure');
      const response = await GET(request);
      const data = await response.json();

      expect(data.data.every(item => item.category === 'kurkure')).toBe(true);
    });
  });

  describe('POST', () => {
    it('creates new menu item', async () => {
      const newItem = {
        name: 'Test Momos',
        category: 'steamed',
        price: { fivePc: 50, tenPc: 100 }
      };

      const request = new NextRequest('http://localhost:3000/api/cms/menu', {
        method: 'POST',
        body: JSON.stringify(newItem)
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.data.name).toBe('Test Momos');
    });
  });
});
```

---

### **End-to-End Testing**

#### **Playwright Configuration**

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

---

#### **Example E2E Test**

```typescript
// e2e/menu-page.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Menu Page', () => {
  test('displays all menu items', async ({ page }) => {
    await page.goto('/menu');
    
    const menuItems = await page.locator('.menu-item-card').count();
    expect(menuItems).toBeGreaterThan(0);
  });

  test('filters by category', async ({ page }) => {
    await page.goto('/menu');
    
    await page.click('button:has-text("Kurkure")');
    await page.waitForTimeout(500);
    
    const items = await page.locator('.menu-item-card').all();
    for (const item of items) {
      const category = await item.getAttribute('data-category');
      expect(category).toBe('kurkure');
    }
  });

  test('searches for menu items', async ({ page }) => {
    await page.goto('/menu');
    
    await page.fill('input[placeholder="Search menu items..."]', 'paneer');
    await page.waitForTimeout(500);
    
    const items = await page.locator('.menu-item-card').all();
    for (const item of items) {
      const text = await item.textContent();
      expect(text?.toLowerCase()).toContain('paneer');
    }
  });
});
```

Run E2E tests:
```bash
npx playwright test
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### **Image Optimization**

#### **Next.js Image Component**

```typescript
import Image from 'next/image';

// Optimized image usage
<Image
  src="/images/menu/kurkure-momos.jpg"
  alt="Kurkure Momos"
  width={400}
  height={300}
  quality={85}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

**Benefits**:
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading
- Blur placeholder
- Priority loading for above-fold images

---

#### **Image Optimization Script**

```bash
# Install sharp for image processing
npm install sharp

# Create optimization script
# scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outputPath);
}

// Run optimization
node scripts/optimize-images.js
```

---

### **Code Splitting**

#### **Dynamic Imports**

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('@/components/admin/AdminPanel'), {
  loading: () => <Loading />,
  ssr: false
});

const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  loading: () => <Loading />
});
```

---

### **Caching Strategy**

#### **API Response Caching**

```typescript
// Cache for 1 hour, stale-while-revalidate for 24 hours
export async function GET() {
  const data = await fetchData();
  
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
```

---

#### **Static Asset Caching**

```typescript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

### **Performance Monitoring**

#### **Web Vitals Tracking**

```typescript
// app/web-vitals.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
```

---

## 🔒 SECURITY IMPLEMENTATION

### **Authentication Security**

#### **Password Hashing**

```typescript
import bcrypt from 'bcryptjs';

// Hash password
const saltRounds = 12;
const passwordHash = await bcrypt.hash(password, saltRounds);

// Verify password
const isValid = await bcrypt.compare(password, passwordHash);
```

---

#### **JWT Token Security**

```typescript
import { SignJWT, jwtVerify } from 'jose';

// Generate token
const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const token = await new SignJWT({ userId, email, role })
  .setProtectedHeader({ alg: 'HS256' })
  .setIssuedAt()
  .setExpirationTime('7d')
  .sign(secret);

// Verify token
const { payload } = await jwtVerify(token, secret);
```

---

### **Input Validation**

#### **Zod Schema Validation**

```typescript
import { z } from 'zod';

// Menu item validation schema
const menuItemSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().max(500),
  category: z.enum(['steamed', 'fried', 'kurkure', 'pizza']),
  price: z.object({
    fivePc: z.number().positive(),
    tenPc: z.number().positive()
  }),
  spiceLevel: z.enum(['mild', 'medium', 'hot', 'extra_magic']),
  isPopular: z.boolean(),
  isVegetarian: z.boolean(),
  preparationTime: z.number().positive(),
  imageUrl: z.string().url(),
  isActive: z.boolean()
});

// Validate data
const validatedData = menuItemSchema.parse(data);
```

---

### **XSS Protection**

#### **Content Sanitization**

```typescript
import DOMPurify from 'isomorphic-dompurify';

// Sanitize HTML content
const sanitizedContent = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a'],
  ALLOWED_ATTR: ['href', 'target']
});
```

---

### **CSRF Protection**

#### **CSRF Token Implementation**

```typescript
// Generate CSRF token
import { randomBytes } from 'crypto';

const csrfToken = randomBytes(32).toString('hex');

// Verify CSRF token
if (request.headers.get('x-csrf-token') !== storedToken) {
  return NextResponse.json(
    { error: 'Invalid CSRF token' },
    { status: 403 }
  );
}
```

---

### **Rate Limiting**

#### **API Rate Limiting**

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

// Apply to API routes
export async function POST(request: NextRequest) {
  await limiter(request);
  // ... rest of handler
}
```

---

### **Security Headers**

#### **Next.js Security Headers**

```typescript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  }
};
```

---

## 📚 ADDITIONAL RESOURCES

### **Documentation Links**
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **TypeScript**: https://www.typescriptlang.org/docs

### **API Documentation**
- **Google Maps**: https://developers.google.com/maps/documentation
- **Google Places**: https://developers.google.com/maps/documentation/places/web-service
- **Google Analytics**: https://developers.google.com/analytics

### **Tools**
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Web Vitals**: https://web.dev/vitals

---

**Document Version**: 1.0  
**Last Updated**: October 22, 2025  
**Prepared By**: Devin AI (Lead Developer)  
**Project Owner**: Ansh Shivvay Gupta (shivamkumar14102801@gmail.com)  
**Business Owner**: Dhruv Gupta (Momos Magic Founder)
