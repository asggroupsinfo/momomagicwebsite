# 🏗️ MOMOS MAGIC - COMPLETE WEBSITE ARCHITECTURE BLUEPRINT

## 📋 TABLE OF CONTENTS

1. [Project Structure Overview](#project-structure-overview)
2. [Complete File Structure](#complete-file-structure)
3. [Page-by-Page Architecture](#page-by-page-architecture)
4. [Component Hierarchy](#component-hierarchy)
5. [Routing Structure](#routing-structure)
6. [State Management](#state-management)
7. [API Routes](#api-routes)
8. [Data Flow](#data-flow)
9. [Styling Architecture](#styling-architecture)
10. [Performance Optimizations](#performance-optimizations)

---

## 🎯 PROJECT STRUCTURE OVERVIEW

### **Architecture Pattern**: Next.js App Router with Server Components

The Momos Magic website follows a modern Next.js 16.0.0 architecture with:
- **App Router**: File-system based routing with layouts and nested routes
- **Server Components**: Default server-side rendering for optimal performance
- **Client Components**: Interactive components with 'use client' directive
- **API Routes**: Serverless API endpoints for backend functionality
- **TypeScript**: Full type safety across the application

---

## 📁 COMPLETE FILE STRUCTURE

```
momomagicwebsite/
├── app/                                    # Next.js App Router directory
│   ├── layout.tsx                          # Root layout with metadata and providers
│   ├── page.tsx                            # Home page (/)
│   ├── globals.css                         # Global styles and Tailwind configuration
│   ├── favicon.ico                         # Website favicon
│   ├── sitemap.ts                          # Dynamic sitemap generation
│   ├── web-vitals.tsx                      # Web Vitals tracking component
│   │
│   ├── about/                              # About Us page
│   │   └── page.tsx                        # About page component
│   │
│   ├── menu/                               # Full Menu page
│   │   └── page.tsx                        # Menu page with filters and search
│   │
│   ├── contact/                            # Contact page
│   │   └── page.tsx                        # Contact page with form
│   │
│   ├── admin/                              # Admin panel
│   │   └── page.tsx                        # Admin dashboard
│   │
│   └── api/                                # API routes
│       ├── auth/                           # Authentication endpoints
│       │   ├── login/
│       │   │   └── route.ts                # POST /api/auth/login
│       │   ├── logout/
│       │   │   └── route.ts                # POST /api/auth/logout
│       │   └── verify/
│       │       └── route.ts                # GET /api/auth/verify
│       │
│       ├── cms/                            # Content Management System endpoints
│       │   ├── hero/
│       │   │   └── route.ts                # GET/PUT /api/cms/hero
│       │   ├── menu/
│       │   │   └── route.ts                # GET/POST/PUT/DELETE /api/cms/menu
│       │   ├── about/
│       │   │   └── route.ts                # GET/PUT /api/cms/about
│       │   ├── contact/
│       │   │   └── route.ts                # GET/PUT /api/cms/contact
│       │   ├── gallery/
│       │   │   └── route.ts                # GET/POST/DELETE /api/cms/gallery
│       │   ├── testimonials/
│       │   │   └── route.ts                # GET/POST/PUT/DELETE /api/cms/testimonials
│       │   └── combo-deals/
│       │       └── route.ts                # GET/POST/PUT/DELETE /api/cms/combo-deals
│       │
│       └── google-reviews/                 # Google Reviews integration
│           └── route.ts                    # GET /api/google-reviews
│
├── components/                             # React components
│   ├── layout/                             # Layout components
│   │   ├── Header.tsx                      # Site header with navigation
│   │   └── Footer.tsx                      # Site footer with links
│   │
│   ├── sections/                           # Page sections
│   │   ├── Hero.tsx                        # Hero section with video background
│   │   ├── BrandStory.tsx                  # Brand story with timeline
│   │   ├── MenuHighlights.tsx              # Menu category highlights
│   │   ├── Reviews.tsx                     # Google Reviews section
│   │   ├── Testimonials.tsx                # Customer testimonials
│   │   ├── LocationServices.tsx            # Location and services info
│   │   ├── TrustAchievements.tsx           # Trust badges and achievements
│   │   └── Gallery.tsx                     # Image gallery with lightbox
│   │
│   ├── ui/                                 # Reusable UI components
│   │   ├── Button.tsx                      # Button component with variants
│   │   ├── Card.tsx                        # Card component with hover effects
│   │   ├── Loading.tsx                     # Loading spinner component
│   │   ├── PageTransition.tsx              # Page transition animations
│   │   └── ScrollReveal.tsx                # Scroll-triggered reveal animations
│   │
│   ├── admin/                              # Admin panel components
│   │   ├── LoginModal.tsx                  # Admin login modal
│   │   ├── AnalyticsDashboard.tsx          # Analytics dashboard
│   │   ├── HeroCMS.tsx                     # Hero section CMS
│   │   ├── MenuCMS.tsx                     # Menu management CMS
│   │   ├── CategoriesCMS.tsx               # Category management CMS
│   │   ├── AboutCMS.tsx                    # About page CMS
│   │   ├── ContactCMS.tsx                  # Contact page CMS
│   │   ├── GalleryCMS.tsx                  # Gallery management CMS
│   │   ├── TestimonialsCMS.tsx             # Testimonials CMS
│   │   ├── ComboDealsCMS.tsx               # Combo deals CMS
│   │   ├── LogoCMS.tsx                     # Logo and branding CMS
│   │   ├── SocialMediaCMS.tsx              # Social media links CMS
│   │   ├── APIConfigCMS.tsx                # API configuration CMS
│   │   ├── CTACMS.tsx                      # CTA management CMS
│   │   ├── MediaLibrary.tsx                # Media library component
│   │   ├── MediaLibraryModal.tsx           # Media library modal
│   │   ├── ImageInput.tsx                  # Image upload input
│   │   ├── RichTextEditor.tsx              # Rich text editor
│   │   ├── SEOCMS.tsx                      # SEO management CMS
│   │   └── TranslationsCMS.tsx             # Multi-language CMS
│   │
│   ├── GoogleAnalytics.tsx                 # Google Analytics component
│   └── LanguageSwitcher.tsx                # Language switcher component
│
├── lib/                                    # Utility libraries
│   ├── auth/                               # Authentication utilities
│   │   ├── jwt.ts                          # JWT token utilities
│   │   └── middleware.ts                   # Auth middleware
│   │
│   ├── cms/                                # CMS utilities
│   │   ├── storage.ts                      # Data storage utilities
│   │   └── validation.ts                   # Data validation utilities
│   │
│   ├── i18n/                               # Internationalization
│   │   ├── config.ts                       # i18n configuration
│   │   ├── useTranslation.ts               # Translation hook
│   │   └── translations/                   # Translation files
│   │       ├── en.json                     # English translations
│   │       ├── hi.json                     # Hindi translations
│   │       └── bn.json                     # Bengali translations
│   │
│   └── utils/                              # General utilities
│       ├── constants.ts                    # App constants
│       └── helpers.ts                      # Helper functions
│
├── public/                                 # Static assets
│   ├── images/                             # Image assets
│   ├── videos/                             # Video assets
│   ├── icons/                              # Icon assets
│   ├── manifest.json                       # PWA manifest
│   └── robots.txt                          # SEO robots file
│
├── data/                                   # Static data files
│   └── menu.json                           # Menu data (if using JSON)
│
├── backup-data/                            # Backup data storage
│   └── media/                              # Media backups
│       ├── icons/
│       └── videos/
│
├── docs/                                   # Documentation
│   ├── planning/                           # Planning documents
│   │   └── COMPLETE_PLAN.md
│   ├── blueprints/                         # Blueprint documents
│   │   └── COMPLETE_BLUEPRINT.md
│   └── assets/                             # Documentation assets
│
├── utils/                                  # Legacy utilities (to be migrated to lib/)
│
├── next.config.ts                          # Next.js configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
├── package.json                            # Project dependencies
├── .env.local                              # Environment variables (gitignored)
├── .gitignore                              # Git ignore rules
└── README.md                               # Project README

Total Files: 80+ files
Total Lines of Code: 10,000+ lines
```

---

## 📄 PAGE-BY-PAGE ARCHITECTURE

### **1. HOME PAGE** (`/`)

**File**: `app/page.tsx`  
**Type**: Server Component  
**Purpose**: Main landing page showcasing brand and menu

#### **Page Structure**:
```tsx
export default function HomePage() {
  return (
    <>
      <Hero />                    // Hero section with video background
      <BrandStory />              // Brand story with timeline
      <MenuHighlights />          // Menu category highlights
      <Reviews />                 // Google Reviews section
      <Testimonials />            // Customer testimonials
      <LocationServices />        // Location and services
      <TrustAchievements />       // Trust badges
    </>
  );
}
```

#### **Sections Breakdown**:

##### **1.1 Hero Section** (`components/sections/Hero.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - Video background with looping animation
  - Floating momos animation (3 momos with rotation)
  - Trust badges (Award, FSSAI, Vegetarian, Rating)
  - Primary CTA: "Taste the Magic → Order Now"
  - Secondary CTA: "Discover Our Story"
- **Animations**: Framer Motion fade-in, scale, floating
- **Responsive**: Video on desktop, image on mobile

##### **1.2 Brand Story Section** (`components/sections/BrandStory.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - Split-screen layout (story text + visual element)
  - 4 story paragraphs with fade-in animations
  - Interactive timeline (6 milestones)
  - Founder's philosophy highlight
- **Timeline Events**:
  1. Sep 2023: Humble beginnings
  2. Nov 2023: Pita to Momos transformation
  3. Jan 2024: Kurkure Momos introduced
  4. Jun 2024: Award from DM Office
  5. Dec 2024: Premium stall redesign
  6. Mar 2025: Pizza Momos launched
- **Animations**: Scroll-triggered reveals, timeline dots
- **Responsive**: Vertical timeline on desktop, horizontal scroll on mobile

##### **1.3 Menu Highlights Section** (`components/sections/MenuHighlights.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - 4 category cards with images
  - Hover animations (lift + gold border)
  - Category highlights and item counts
  - "View Full Menu" CTA button
- **Categories**:
  1. Steamed Perfection (Fresh & Healthy)
  2. Crispy Fried Delights (Golden & Crunchy)
  3. Magic Signatures (Sherghati Exclusive)
  4. Fusion Innovations (Innovative Fusion)
- **Animations**: Hover scale, border color transition
- **Responsive**: 4-col → 2-col → 1-col grid

##### **1.4 Reviews Section** (`components/sections/Reviews.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - Google Places API integration
  - Fallback to static reviews
  - Review carousel with auto-rotation
  - Star rating display
  - "See all reviews on Google" CTA
- **API Integration**: Google Places API
- **Fallback**: 3 static featured reviews
- **Animations**: Carousel transitions, fade-in
- **Responsive**: Single review on mobile, multiple on desktop

##### **1.5 Testimonials Section** (`components/sections/Testimonials.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - Customer testimonials with photos
  - Star ratings
  - Carousel navigation
  - Quote styling
- **Animations**: Slide transitions, fade-in
- **Responsive**: Single testimonial on mobile, multiple on desktop

##### **1.6 Location & Services Section** (`components/sections/LocationServices.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - Google Maps embed
  - Location details (address, phone, hours)
  - Service information with status indicators
  - Click-to-call functionality
- **API Integration**: Google Maps API
- **Services Listed**:
  - Takeaway Only (Currently Available)
  - 10KM Delivery Radius (Coming Soon)
  - Online Ordering Available
  - Group Order Discounts
  - Catering Service Booking
  - Table Booking (Coming Soon)
- **Animations**: Fade-in on scroll
- **Responsive**: 2-col (map + details) → stacked

##### **1.7 Trust & Achievements Section** (`components/sections/TrustAchievements.tsx`)
- **Type**: Client Component ('use client')
- **Features**:
  - 4 trust factor cards
  - Count-up animations for numbers
  - Icon highlights
  - Hover effects
- **Trust Factors**:
  1. Award Winning (Best Quality Food)
  2. FSSAI Certified (License: 20424201001152)
  3. 100% Vegetarian (Pure Veg Kitchen)
  4. Rated 4.9/5 (2000+ Customers)
- **Animations**: Count-up, fade-in, hover scale
- **Responsive**: 4-col → 2-col → 1-col grid

---

### **2. MENU PAGE** (`/menu`)

**File**: `app/menu/page.tsx`  
**Type**: Client Component ('use client')  
**Purpose**: Full menu with advanced filtering and search

#### **Page Structure**:
```tsx
export default function MenuPage() {
  const [filters, setFilters] = useState({
    category: 'all',
    spiceLevel: 'all',
    priceRange: 'all',
    searchQuery: ''
  });
  
  const [sorting, setSorting] = useState('popularity');
  
  return (
    <div className="container mx-auto py-20">
      {/* Page Header */}
      <PageHeader />
      
      {/* Filters Section */}
      <FiltersBar 
        filters={filters}
        onFilterChange={setFilters}
      />
      
      {/* Sorting Options */}
      <SortingBar 
        sorting={sorting}
        onSortingChange={setSorting}
      />
      
      {/* Menu Grid */}
      <MenuGrid 
        items={filteredAndSortedItems}
      />
    </div>
  );
}
```

#### **Features**:

##### **2.1 Advanced Filtering System**
- **Category Filter**: All, Steamed, Fried, Kurkure, Pizza
- **Spice Level Filter**: All, Mild, Medium, Hot, Extra Magic
- **Price Range Filter**: All, Under ₹50, ₹50-₹100, ₹100-₹200, Above ₹200
- **Real-time Filtering**: Instant results as filters change
- **State Management**: React useState for filter state
- **URL State**: Query parameters for shareable links

##### **2.2 Search Functionality**
- **Real-time Search**: Search by item name
- **Debounced Input**: 300ms delay for performance
- **Clear Button**: Reset search query
- **Results Count**: Display number of matching items
- **Highlight Matches**: Highlight search terms in results

##### **2.3 Sorting Options**
- **Popularity**: Best sellers first
- **Price: Low to High**: Ascending price order
- **Price: High to Low**: Descending price order
- **Preparation Time**: Fastest preparation first

##### **2.4 Menu Item Cards**
- **Item Information**:
  - Name and description
  - Pricing (5pc and 10pc)
  - Spice level indicator
  - Popular item badge
  - Preparation time
  - High-quality image
- **Hover Effects**: Scale animation, gold border
- **Responsive Grid**: 4-col → 3-col → 2-col → 1-col

##### **2.5 Menu Data Structure**
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'steamed' | 'fried' | 'kurkure' | 'pizza';
  price: {
    fivePc: number;
    tenPc: number;
  };
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra_magic';
  isPopular: boolean;
  isVegetarian: boolean;
  preparationTime: number; // in minutes
  imageUrl: string;
  isActive: boolean;
}
```

---

### **3. ABOUT US PAGE** (`/about`)

**File**: `app/about/page.tsx`  
**Type**: Client Component ('use client')  
**Purpose**: Detailed brand story and company information

#### **Page Structure**:
```tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto py-20">
      {/* Page Header */}
      <PageHeader 
        title="Our Story"
        subtitle="From Humble Beginnings to Culinary Excellence"
      />
      
      {/* Founder's Story */}
      <FounderStory />
      
      {/* Journey Timeline */}
      <JourneyTimeline />
      
      {/* Quality Commitment */}
      <QualityCommitment />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}
```

#### **Sections Breakdown**:

##### **3.1 Founder's Story**
- **Content**:
  - Detailed narrative about Dhruv Gupta
  - Journey from Pita to Momos Magic
  - Philosophy: "Better to be a small owner than someone else's employee"
  - Vision for the future
- **Layout**: Split-screen (text + founder image)
- **Animations**: Fade-in on scroll
- **Responsive**: Stacked on mobile

##### **3.2 Journey Timeline**
- **Content**: 6 milestone events with detailed descriptions
- **Layout**: Vertical timeline with alternating sides
- **Animations**: Scroll-triggered reveals, animated dots
- **Responsive**: Horizontal scroll on mobile

##### **3.3 Quality Commitment**
- **Content**: 4 quality promises
  1. Daily fresh ingredients from local markets
  2. Special 'Magic Masala' created in-house
  3. Hygiene-first kitchen standards
  4. Third-generation recipe perfected over time
- **Layout**: 4-column grid with icons
- **Animations**: Fade-in on scroll
- **Responsive**: 4-col → 2-col → 1-col grid

##### **3.4 Gallery Section** (`components/sections/Gallery.tsx`)
- **Content**: 3 gallery categories
  - Stall images (2 images)
  - Food images (2 images)
  - Awards images (1 image)
- **Features**:
  - Lightbox for full-screen view
  - Image navigation (prev/next)
  - Close button and ESC key support
  - Smooth transitions
- **Layout**: Responsive grid
- **Animations**: Zoom-in on click, fade transitions

##### **3.5 FAQ Accordion**
- **Content**: 6 frequently asked questions
  1. What makes Momos Magic special?
  2. Are all items 100% vegetarian?
  3. Do you offer delivery service?
  4. What are your operating hours?
  5. Can I place bulk orders for events?
  6. How do I contact customer support?
- **Features**:
  - Expandable/collapsible sections
  - Only one section open at a time
  - Smooth height transitions
  - Keyboard accessible
- **Animations**: Expand/collapse with smooth transitions
- **Responsive**: Full-width on all devices

---

### **4. CONTACT PAGE** (`/contact`)

**File**: `app/contact/page.tsx`  
**Type**: Client Component ('use client')  
**Purpose**: Contact form and business information

#### **Page Structure**:
```tsx
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  return (
    <div className="container mx-auto py-20">
      {/* Page Header */}
      <PageHeader 
        title="Get in Touch"
        subtitle="We'd love to hear from you"
      />
      
      {/* Contact Methods */}
      <ContactMethods />
      
      {/* Contact Form */}
      <ContactForm 
        formData={formData}
        onSubmit={handleSubmit}
        status={formStatus}
      />
      
      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}
```

#### **Features**:

##### **4.1 Contact Methods**
- **Phone**: +91 9955955191 (click-to-call)
- **Location**: Naya Bazar, Sherghati
- **Hours**: 10:00 AM - 10:00 PM (Every Day)
- **Layout**: 3-column grid with icons
- **Animations**: Fade-in on scroll
- **Responsive**: 3-col → 1-col grid

##### **4.2 Contact Form**
- **Fields**:
  - Full Name (required, text input)
  - Phone Number (required, tel input with validation)
  - Email Address (optional, email input with validation)
  - Message (required, textarea)
- **Validation**:
  - Client-side validation with error messages
  - Server-side validation on API route
  - Real-time validation on blur
  - Form-level validation on submit
- **reCAPTCHA**: Google reCAPTCHA v3 integration
- **Status Messages**:
  - Success: "Thank you! We'll get back to you soon."
  - Error: "Something went wrong. Please try again."
  - Submitting: Loading spinner
- **Animations**: Smooth transitions, error shake
- **Responsive**: Full-width on mobile

##### **4.3 FAQ Accordion**
- **Content**: 8 common questions
  1. How can I place an order?
  2. Do you accept online payments?
  3. What is your delivery area?
  4. Can I customize my order?
  5. Do you cater for events?
  6. What are your hygiene standards?
  7. How do I track my order?
  8. What is your refund policy?
- **Features**: Same as About page FAQ
- **Animations**: Expand/collapse transitions
- **Responsive**: Full-width on all devices

---

### **5. ADMIN PANEL** (`/admin`)

**File**: `app/admin/page.tsx`  
**Type**: Client Component ('use client')  
**Purpose**: Content management system for website

#### **Page Structure**:
```tsx
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  if (!isAuthenticated) {
    return <LoginModal onLogin={handleLogin} />;
  }
  
  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <AdminSidebar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Admin Content */}
      <AdminContent activeTab={activeTab} />
    </div>
  );
}
```

#### **Admin Modules** (20 CMS Modules):

##### **5.1 Dashboard** (`components/admin/AnalyticsDashboard.tsx`)
- **Features**:
  - Website analytics overview
  - Visitor statistics
  - Popular menu items
  - Recent orders (when integrated)
  - Customer feedback summary
- **Charts**: Line charts, bar charts, pie charts
- **Time Ranges**: Today, Week, Month, Year
- **Export**: CSV export functionality

##### **5.2 Hero Section Management** (`components/admin/HeroCMS.tsx`)
- **Editable Fields**:
  - Main headline
  - Subheadline
  - Primary CTA text and link
  - Secondary CTA text and link
  - Video background URL
  - Fallback image URL
  - Trust badges (4 badges)
- **Features**: Rich text editor, image upload, preview

##### **5.3 Menu Management** (`components/admin/MenuCMS.tsx`)
- **Features**:
  - Add/edit/delete menu items
  - Category assignment
  - Price management (5pc and 10pc)
  - Spice level selection
  - Popular item toggle
  - Image upload
  - Preparation time setting
  - Active/inactive toggle
- **Bulk Actions**: Delete multiple items, change category
- **Search**: Search by item name
- **Filters**: Filter by category, spice level, price range

##### **5.4 Categories Management** (`components/admin/CategoriesCMS.tsx`)
- **Features**:
  - Add/edit/delete categories
  - Category name and slug
  - Description and highlight text
  - Icon selection
  - Display order
  - Active/inactive toggle
- **Drag & Drop**: Reorder categories

##### **5.5 About Us Management** (`components/admin/AboutCMS.tsx`)
- **Editable Fields**:
  - Founder's story (rich text)
  - Journey timeline (6 events)
  - Quality commitment (4 promises)
  - FAQ items (6 questions)
- **Features**: Rich text editor, timeline editor

##### **5.6 Contact Management** (`components/admin/ContactCMS.tsx`)
- **Editable Fields**:
  - Business address
  - Phone number
  - Email address
  - Business hours
  - Service details (6 services)
  - FAQ items (8 questions)
- **Features**: Contact form submissions inbox

##### **5.7 Gallery Management** (`components/admin/GalleryCMS.tsx`)
- **Features**:
  - Upload images
  - Organize by category (stall, food, awards)
  - Add titles and descriptions
  - Set display order
  - Delete images
- **Bulk Actions**: Delete multiple images
- **Drag & Drop**: Reorder images

##### **5.8 Testimonials Management** (`components/admin/TestimonialsCMS.tsx`)
- **Features**:
  - Add/edit/delete testimonials
  - Customer name and image
  - Rating (1-5 stars)
  - Review text
  - Featured toggle
  - Active/inactive toggle
- **Bulk Actions**: Delete multiple testimonials

##### **5.9 Combo Deals Management** (`components/admin/ComboDealsCMS.tsx`)
- **Features**:
  - Create combo deals
  - Select items for combo
  - Set combo price
  - Add combo description
  - Set validity period
  - Active/inactive toggle

##### **5.10 Logo & Branding** (`components/admin/LogoCMS.tsx`)
- **Editable Fields**:
  - Site logo (light and dark versions)
  - Favicon
  - Brand colors (7 colors)
  - Typography settings
- **Features**: Color picker, image upload, preview

##### **5.11 Social Media Management** (`components/admin/SocialMediaCMS.tsx`)
- **Editable Fields**:
  - Facebook URL
  - Instagram URL
  - Twitter URL
  - YouTube URL
  - WhatsApp number
- **Features**: Link validation, preview

##### **5.12 API Integrations** (`components/admin/APIConfigCMS.tsx`)
- **Editable Fields**:
  - Google Maps API key
  - Google Places API key
  - Google Analytics ID
  - reCAPTCHA site key and secret
- **Features**: API key validation, test connection

##### **5.13 CTA Management** (`components/admin/CTACMS.tsx`)
- **Editable Fields**:
  - CTA text and link
  - Button style (primary/secondary)
  - Display location
  - Active/inactive toggle
- **Features**: Multiple CTAs, preview

##### **5.14 Media Library** (`components/admin/MediaLibrary.tsx`)
- **Features**:
  - Upload images and videos
  - Organize by folders
  - Search media
  - Filter by type
  - Delete media
  - Copy URL
- **Bulk Actions**: Delete multiple files
- **Drag & Drop**: Upload multiple files

##### **5.15 Analytics** (Advanced Analytics Dashboard)
- **Features**:
  - Real-time visitor tracking
  - Page view statistics
  - Popular pages
  - Traffic sources
  - Device breakdown
  - Geographic data
- **Charts**: Multiple chart types
- **Export**: CSV and PDF export

##### **5.16 SEO Management** (`components/admin/SEOCMS.tsx`)
- **Editable Fields**:
  - Page titles (all pages)
  - Meta descriptions (all pages)
  - Meta keywords (all pages)
  - Open Graph tags
  - Twitter Card tags
  - Canonical URLs
- **Features**: Character count, preview

##### **5.17 Multi-language Management** (`components/admin/TranslationsCMS.tsx`)
- **Features**:
  - Manage translations (English, Hindi, Bengali)
  - Add new languages
  - Edit translation strings
  - Import/export translations
- **Languages**: English (default), Hindi, Bengali

##### **5.18 Advanced Analytics** (Extended Analytics)
- **Features**:
  - Conversion tracking
  - Goal setting
  - Funnel analysis
  - User behavior flow
  - Heat maps
  - Session recordings
- **Integrations**: Google Analytics 4, custom tracking

##### **5.19 System Settings**
- **Editable Fields**:
  - Site name and tagline
  - Maintenance mode toggle
  - Cache settings
  - Email notifications
  - Backup settings
- **Features**: System health check, logs

##### **5.20 Backup & Restore**
- **Features**:
  - Create manual backups
  - Scheduled automatic backups
  - Restore from backup
  - Download backup files
  - Backup history
- **Backup Types**: Full backup, database only, media only

---

## 🧩 COMPONENT HIERARCHY

### **Layout Components**

```
App Layout (app/layout.tsx)
├── GoogleAnalytics
├── Header (components/layout/Header.tsx)
│   ├── Logo
│   ├── Navigation
│   │   ├── NavLink (Home)
│   │   ├── NavLink (Menu)
│   │   ├── NavLink (About)
│   │   └── NavLink (Contact)
│   ├── LanguageSwitcher
│   └── MobileMenu
│       └── Navigation (mobile version)
└── Footer (components/layout/Footer.tsx)
    ├── BusinessInfo
    │   ├── Logo
    │   ├── Description
    │   └── SocialLinks
    ├── QuickLinks
    │   ├── Link (Home)
    │   ├── Link (Menu)
    │   ├── Link (About)
    │   └── Link (Contact)
    ├── ContactInfo
    │   ├── Address
    │   ├── Phone
    │   └── Hours
    └── Copyright
```

### **Home Page Components**

```
HomePage (app/page.tsx)
├── Hero (components/sections/Hero.tsx)
│   ├── VideoBackground
│   ├── FloatingMomos (3 animated momos)
│   ├── HeroContent
│   │   ├── Headline
│   │   ├── Subheadline
│   │   ├── TrustBadges (4 badges)
│   │   └── CTAButtons (2 buttons)
│   └── ScrollIndicator
│
├── BrandStory (components/sections/BrandStory.tsx)
│   ├── SectionTitle
│   ├── StoryContent
│   │   ├── StoryText (4 paragraphs)
│   │   └── VisualElement
│   ├── Timeline
│   │   ├── TimelineEvent (6 events)
│   │   │   ├── Date
│   │   │   ├── Title
│   │   │   ├── Description
│   │   │   └── Dot
│   │   └── TimelineLine
│   └── Philosophy
│
├── MenuHighlights (components/sections/MenuHighlights.tsx)
│   ├── SectionTitle
│   ├── CategoryGrid
│   │   ├── CategoryCard (4 cards)
│   │   │   ├── Image
│   │   │   ├── CategoryName
│   │   │   ├── Highlight
│   │   │   └── ItemCount
│   │   └── HoverEffect
│   └── ViewMenuCTA
│
├── Reviews (components/sections/Reviews.tsx)
│   ├── SectionTitle
│   ├── ReviewsCarousel
│   │   ├── ReviewCard (6 reviews)
│   │   │   ├── CustomerName
│   │   │   ├── Rating (stars)
│   │   │   ├── ReviewText
│   │   │   └── CustomerImage
│   │   ├── PrevButton
│   │   └── NextButton
│   └── ViewAllCTA
│
├── Testimonials (components/sections/Testimonials.tsx)
│   ├── SectionTitle
│   ├── TestimonialsCarousel
│   │   ├── TestimonialCard (3 testimonials)
│   │   │   ├── Quote
│   │   │   ├── CustomerName
│   │   │   ├── Rating
│   │   │   └── CustomerImage
│   │   ├── PrevButton
│   │   └── NextButton
│   └── Indicators
│
├── LocationServices (components/sections/LocationServices.tsx)
│   ├── SectionTitle
│   ├── MapContainer
│   │   └── GoogleMap
│   ├── LocationDetails
│   │   ├── Address
│   │   ├── Phone (click-to-call)
│   │   └── Hours
│   └── ServicesGrid
│       └── ServiceCard (6 services)
│           ├── Icon
│           ├── Title
│           ├── Description
│           └── StatusBadge
│
└── TrustAchievements (components/sections/TrustAchievements.tsx)
    ├── SectionTitle
    └── TrustGrid
        └── TrustCard (4 cards)
            ├── Icon
            ├── Title
            ├── Description
            └── CountUpAnimation
```

### **Menu Page Components**

```
MenuPage (app/menu/page.tsx)
├── PageHeader
│   ├── Title
│   └── Subtitle
│
├── FiltersBar
│   ├── CategoryFilter
│   │   └── FilterButton (5 options)
│   ├── SpiceLevelFilter
│   │   └── FilterButton (5 options)
│   └── PriceRangeFilter
│       └── FilterButton (5 options)
│
├── SearchBar
│   ├── SearchInput
│   ├── ClearButton
│   └── ResultsCount
│
├── SortingBar
│   └── SortButton (4 options)
│
└── MenuGrid
    └── MenuItemCard (16 items)
        ├── Image
        ├── PopularBadge
        ├── ItemName
        ├── Description
        ├── SpiceLevelIndicator
        ├── PreparationTime
        ├── Pricing
        │   ├── Price5pc
        │   └── Price10pc
        └── HoverEffect
```

### **About Page Components**

```
AboutPage (app/about/page.tsx)
├── PageHeader
│   ├── Title
│   └── Subtitle
│
├── FounderStory
│   ├── FounderImage
│   └── StoryText
│
├── JourneyTimeline
│   └── TimelineEvent (6 events)
│       ├── Date
│       ├── Title
│       ├── Description
│       └── Dot
│
├── QualityCommitment
│   └── CommitmentCard (4 cards)
│       ├── Icon
│       ├── Title
│       └── Description
│
├── Gallery (components/sections/Gallery.tsx)
│   ├── GalleryGrid
│   │   └── GalleryImage (5 images)
│   │       ├── Image
│   │       └── ClickHandler
│   └── Lightbox
│       ├── LightboxImage
│       ├── PrevButton
│       ├── NextButton
│       └── CloseButton
│
└── FAQAccordion
    └── FAQItem (6 items)
        ├── Question
        ├── Answer
        └── ExpandIcon
```

### **Contact Page Components**

```
ContactPage (app/contact/page.tsx)
├── PageHeader
│   ├── Title
│   └── Subtitle
│
├── ContactMethods
│   └── ContactCard (3 cards)
│       ├── Icon
│       ├── Label
│       └── Value
│
├── ContactForm
│   ├── FormField (Name)
│   │   ├── Label
│   │   ├── Input
│   │   └── ErrorMessage
│   ├── FormField (Phone)
│   │   ├── Label
│   │   ├── Input
│   │   └── ErrorMessage
│   ├── FormField (Email)
│   │   ├── Label
│   │   ├── Input
│   │   └── ErrorMessage
│   ├── FormField (Message)
│   │   ├── Label
│   │   ├── Textarea
│   │   └── ErrorMessage
│   ├── reCAPTCHA
│   ├── SubmitButton
│   └── StatusMessage
│
└── FAQAccordion
    └── FAQItem (8 items)
        ├── Question
        ├── Answer
        └── ExpandIcon
```

### **Admin Panel Components**

```
AdminPage (app/admin/page.tsx)
├── LoginModal (if not authenticated)
│   ├── LoginForm
│   │   ├── EmailInput
│   │   ├── PasswordInput
│   │   └── SubmitButton
│   └── ErrorMessage
│
└── AdminLayout (if authenticated)
    ├── AdminSidebar
    │   ├── Logo
    │   ├── Navigation
    │   │   ├── NavItem (Dashboard)
    │   │   ├── NavItem (Hero)
    │   │   ├── NavItem (Menu)
    │   │   ├── NavItem (Categories)
    │   │   ├── NavItem (About)
    │   │   ├── NavItem (Contact)
    │   │   ├── NavItem (Gallery)
    │   │   ├── NavItem (Testimonials)
    │   │   ├── NavItem (Combo Deals)
    │   │   ├── NavItem (Logo & Branding)
    │   │   ├── NavItem (Social Media)
    │   │   ├── NavItem (API Config)
    │   │   ├── NavItem (CTA)
    │   │   ├── NavItem (Media Library)
    │   │   ├── NavItem (Analytics)
    │   │   ├── NavItem (SEO)
    │   │   ├── NavItem (Multi-language)
    │   │   ├── NavItem (Advanced Analytics)
    │   │   ├── NavItem (Settings)
    │   │   └── NavItem (Backup & Restore)
    │   └── LogoutButton
    │
    └── AdminContent
        ├── AnalyticsDashboard (if activeTab === 'dashboard')
        ├── HeroCMS (if activeTab === 'hero')
        ├── MenuCMS (if activeTab === 'menu')
        ├── CategoriesCMS (if activeTab === 'categories')
        ├── AboutCMS (if activeTab === 'about')
        ├── ContactCMS (if activeTab === 'contact')
        ├── GalleryCMS (if activeTab === 'gallery')
        ├── TestimonialsCMS (if activeTab === 'testimonials')
        ├── ComboDealsCMS (if activeTab === 'combo-deals')
        ├── LogoCMS (if activeTab === 'logo')
        ├── SocialMediaCMS (if activeTab === 'social-media')
        ├── APIConfigCMS (if activeTab === 'api-config')
        ├── CTACMS (if activeTab === 'cta')
        ├── MediaLibrary (if activeTab === 'media-library')
        ├── AnalyticsDashboard (if activeTab === 'analytics')
        ├── SEOCMS (if activeTab === 'seo')
        ├── TranslationsCMS (if activeTab === 'multi-language')
        ├── AdvancedAnalytics (if activeTab === 'advanced-analytics')
        ├── SystemSettings (if activeTab === 'settings')
        └── BackupRestore (if activeTab === 'backup-restore')
```

### **UI Components**

```
Button (components/ui/Button.tsx)
├── Props: variant, size, onClick, children, disabled, loading
└── Variants: primary, secondary, outline, ghost

Card (components/ui/Card.tsx)
├── Props: children, hover, onClick, className
└── Features: Shadow, border, hover effects

Loading (components/ui/Loading.tsx)
├── Props: size, color
└── Variants: spinner, dots, pulse

PageTransition (components/ui/PageTransition.tsx)
├── Props: children
└── Features: Fade-in animation on page load

ScrollReveal (components/ui/ScrollReveal.tsx)
├── Props: children, direction, delay
└── Features: Reveal animation on scroll
```

---

## 🛣️ ROUTING STRUCTURE

### **Public Routes**

| Route | File | Component | Type | Purpose |
|-------|------|-----------|------|---------|
| `/` | `app/page.tsx` | HomePage | Server | Home page with all sections |
| `/menu` | `app/menu/page.tsx` | MenuPage | Client | Full menu with filters |
| `/about` | `app/about/page.tsx` | AboutPage | Client | Brand story and company info |
| `/contact` | `app/contact/page.tsx` | ContactPage | Client | Contact form and info |
| `/admin` | `app/admin/page.tsx` | AdminPage | Client | Admin panel (protected) |

### **API Routes**

#### **Authentication Endpoints**

| Method | Route | File | Purpose |
|--------|-------|------|---------|
| POST | `/api/auth/login` | `app/api/auth/login/route.ts` | Admin login |
| POST | `/api/auth/logout` | `app/api/auth/logout/route.ts` | Admin logout |
| GET | `/api/auth/verify` | `app/api/auth/verify/route.ts` | Verify JWT token |

#### **CMS Endpoints**

| Method | Route | File | Purpose |
|--------|-------|------|---------|
| GET | `/api/cms/hero` | `app/api/cms/hero/route.ts` | Get hero section data |
| PUT | `/api/cms/hero` | `app/api/cms/hero/route.ts` | Update hero section |
| GET | `/api/cms/menu` | `app/api/cms/menu/route.ts` | Get all menu items |
| POST | `/api/cms/menu` | `app/api/cms/menu/route.ts` | Create menu item |
| PUT | `/api/cms/menu` | `app/api/cms/menu/route.ts` | Update menu item |
| DELETE | `/api/cms/menu` | `app/api/cms/menu/route.ts` | Delete menu item |
| GET | `/api/cms/about` | `app/api/cms/about/route.ts` | Get about page data |
| PUT | `/api/cms/about` | `app/api/cms/about/route.ts` | Update about page |
| GET | `/api/cms/contact` | `app/api/cms/contact/route.ts` | Get contact page data |
| PUT | `/api/cms/contact` | `app/api/cms/contact/route.ts` | Update contact page |
| GET | `/api/cms/gallery` | `app/api/cms/gallery/route.ts` | Get gallery images |
| POST | `/api/cms/gallery` | `app/api/cms/gallery/route.ts` | Upload gallery image |
| DELETE | `/api/cms/gallery` | `app/api/cms/gallery/route.ts` | Delete gallery image |
| GET | `/api/cms/testimonials` | `app/api/cms/testimonials/route.ts` | Get testimonials |
| POST | `/api/cms/testimonials` | `app/api/cms/testimonials/route.ts` | Create testimonial |
| PUT | `/api/cms/testimonials` | `app/api/cms/testimonials/route.ts` | Update testimonial |
| DELETE | `/api/cms/testimonials` | `app/api/cms/testimonials/route.ts` | Delete testimonial |
| GET | `/api/cms/combo-deals` | `app/api/cms/combo-deals/route.ts` | Get combo deals |
| POST | `/api/cms/combo-deals` | `app/api/cms/combo-deals/route.ts` | Create combo deal |
| PUT | `/api/cms/combo-deals` | `app/api/cms/combo-deals/route.ts` | Update combo deal |
| DELETE | `/api/cms/combo-deals` | `app/api/cms/combo-deals/route.ts` | Delete combo deal |

#### **External API Endpoints**

| Method | Route | File | Purpose |
|--------|-------|------|---------|
| GET | `/api/google-reviews` | `app/api/google-reviews/route.ts` | Fetch Google reviews |

### **Navigation Flow**

```
Home (/)
├── Click "View Full Menu" → Menu (/menu)
├── Click "Discover Our Story" → About (/about)
├── Click "Contact Us" → Contact (/contact)
└── Click Logo → Home (/)

Menu (/menu)
├── Click "Home" → Home (/)
├── Click "About" → About (/about)
├── Click "Contact" → Contact (/contact)
└── Click Logo → Home (/)

About (/about)
├── Click "Home" → Home (/)
├── Click "Menu" → Menu (/menu)
├── Click "Contact" → Contact (/contact)
└── Click Logo → Home (/)

Contact (/contact)
├── Click "Home" → Home (/)
├── Click "Menu" → Menu (/menu)
├── Click "About" → About (/about)
└── Click Logo → Home (/)

Admin (/admin)
├── Login → Admin Dashboard
├── Logout → Home (/)
└── Protected routes (require authentication)
```

---

## 🔄 STATE MANAGEMENT

### **Global State** (React Context API)

#### **1. Authentication Context**
```typescript
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyToken: () => Promise<boolean>;
}

// Usage in components
const { isAuthenticated, user, login, logout } = useAuth();
```

#### **2. Language Context**
```typescript
interface LanguageContextType {
  language: 'en' | 'hi' | 'bn';
  setLanguage: (lang: 'en' | 'hi' | 'bn') => void;
  t: (key: string) => string; // Translation function
}

// Usage in components
const { language, setLanguage, t } = useLanguage();
```

#### **3. Theme Context** (Future)
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Usage in components
const { theme, toggleTheme } = useTheme();
```

### **Local State** (React useState)

#### **Menu Page State**
```typescript
// Filters state
const [filters, setFilters] = useState({
  category: 'all',
  spiceLevel: 'all',
  priceRange: 'all',
  searchQuery: ''
});

// Sorting state
const [sorting, setSorting] = useState('popularity');

// Filtered items (derived state)
const filteredItems = useMemo(() => {
  return menuItems
    .filter(item => matchesFilters(item, filters))
    .sort((a, b) => sortItems(a, b, sorting));
}, [menuItems, filters, sorting]);
```

#### **Contact Form State**
```typescript
// Form data state
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  message: ''
});

// Form status state
const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

// Form errors state
const [formErrors, setFormErrors] = useState({
  name: '',
  phone: '',
  email: '',
  message: ''
});
```

#### **Gallery Lightbox State**
```typescript
// Lightbox state
const [isLightboxOpen, setIsLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Navigation functions
const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
```

#### **Admin Panel State**
```typescript
// Active tab state
const [activeTab, setActiveTab] = useState('dashboard');

// CMS data state (example for menu)
const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

// CRUD operations
const createMenuItem = async (item: MenuItem) => { /* ... */ };
const updateMenuItem = async (id: string, item: MenuItem) => { /* ... */ };
const deleteMenuItem = async (id: string) => { /* ... */ };
```

### **URL State** (Query Parameters)

#### **Menu Page URL State**
```typescript
// Example URL: /menu?category=kurkure&spice=hot&price=50-100&search=paneer

// Read from URL
const searchParams = useSearchParams();
const category = searchParams.get('category') || 'all';
const spiceLevel = searchParams.get('spice') || 'all';
const priceRange = searchParams.get('price') || 'all';
const searchQuery = searchParams.get('search') || '';

// Update URL
const router = useRouter();
const updateURL = (newFilters: Filters) => {
  const params = new URLSearchParams();
  if (newFilters.category !== 'all') params.set('category', newFilters.category);
  if (newFilters.spiceLevel !== 'all') params.set('spice', newFilters.spiceLevel);
  if (newFilters.priceRange !== 'all') params.set('price', newFilters.priceRange);
  if (newFilters.searchQuery) params.set('search', newFilters.searchQuery);
  
  router.push(`/menu?${params.toString()}`);
};
```

---

## 🎨 STYLING ARCHITECTURE

### **Tailwind CSS Configuration**

#### **Custom Colors** (`app/globals.css`)
```css
@theme inline {
  --color-magic-red: #DC2626;
  --color-premium-gold: #D4AF37;
  --color-charcoal-black: #1F2937;
  --color-cream-white: #FEF3C7;
  --color-vegetarian-green: #059669;
  --color-warm-orange: #EA580C;
  --color-cool-gray: #6B7280;
}
```

#### **Custom Fonts**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

#### **Responsive Breakpoints**
```css
/* Tailwind default breakpoints */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices (large desktops) */
2xl: 1536px /* 2X Extra large devices (larger desktops) */
```

### **Component Styling Patterns**

#### **Button Variants**
```tsx
// Primary Button
<button className="bg-magic-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
  Primary Button
</button>

// Secondary Button
<button className="border-2 border-premium-gold text-premium-gold px-6 py-3 rounded-lg hover:bg-premium-gold hover:text-white transition-colors">
  Secondary Button
</button>
```

#### **Card Styling**
```tsx
// Standard Card
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  Card Content
</div>

// Card with Gold Border on Hover
<div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-premium-gold transition-colors">
  Card Content
</div>
```

#### **Grid Layouts**
```tsx
// 4-column responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// 2-column responsive grid
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div>Left Content</div>
  <div>Right Content</div>
</div>
```

### **Animation Patterns**

#### **Framer Motion Animations**
```tsx
// Fade-in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Fade-in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Hover scale
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

#### **CSS Animations**
```css
/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## ⚡ PERFORMANCE OPTIMIZATIONS

### **Image Optimization**

#### **Next.js Image Component**
```tsx
import Image from 'next/image';

<Image
  src="/images/menu-item.jpg"
  alt="Menu Item"
  width={400}
  height={300}
  quality={85}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### **Image Configuration** (`next.config.ts`)
```typescript
export default {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};
```

### **Code Splitting**

#### **Dynamic Imports**
```tsx
// Lazy load heavy components
const AdminPanel = dynamic(() => import('@/components/admin/AdminPanel'), {
  loading: () => <Loading />,
  ssr: false
});

// Lazy load with named export
const Gallery = dynamic(() => import('@/components/sections/Gallery').then(mod => mod.Gallery), {
  loading: () => <Loading />
});
```

#### **Route-based Code Splitting**
```
Automatic with Next.js App Router:
- Each page is automatically code-split
- Only the necessary JavaScript is loaded per page
- Shared components are bundled separately
```

### **Caching Strategy**

#### **Browser Caching** (`next.config.ts`)
```typescript
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
      {
        source: '/_next/static/:path*',
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

#### **API Response Caching**
```typescript
// Cache Google Reviews for 1 hour
export async function GET() {
  const reviews = await fetchGoogleReviews();
  
  return NextResponse.json(reviews, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
```

### **Performance Metrics**

#### **Target Metrics**
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

#### **Lighthouse Score Targets**
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

---

## 📊 DATA FLOW

### **Client-Side Data Flow**

```
User Action
    ↓
Component Event Handler
    ↓
State Update (useState/Context)
    ↓
Re-render Component
    ↓
Update UI
```

### **Server-Side Data Flow**

```
Client Request
    ↓
API Route Handler
    ↓
Validate Request
    ↓
Process Data (Database/External API)
    ↓
Format Response
    ↓
Send Response to Client
    ↓
Client Updates State
    ↓
UI Re-renders
```

### **Authentication Flow**

```
1. User enters credentials
    ↓
2. POST /api/auth/login
    ↓
3. Validate credentials
    ↓
4. Generate JWT token
    ↓
5. Set HTTP-only cookie
    ↓
6. Return success response
    ↓
7. Client updates auth state
    ↓
8. Redirect to admin dashboard
```

### **CMS Data Flow**

```
1. Admin edits content in CMS
    ↓
2. PUT /api/cms/[module]
    ↓
3. Validate JWT token
    ↓
4. Validate data
    ↓
5. Save to storage (JSON file/Database)
    ↓
6. Return success response
    ↓
7. Client updates local state
    ↓
8. UI reflects changes
    ↓
9. Public pages fetch updated data
    ↓
10. Users see new content
```

---

## 🔐 SECURITY ARCHITECTURE

### **Authentication**

#### **JWT Token Structure**
```typescript
interface JWTPayload {
  userId: string;
  email: string;
  role: 'admin' | 'editor';
  iat: number; // Issued at
  exp: number; // Expiration
}
```

#### **Token Storage**
- **HTTP-only Cookie**: Secure, not accessible via JavaScript
- **SameSite**: Strict (prevents CSRF attacks)
- **Secure**: Only sent over HTTPS in production
- **Expiration**: 7 days

### **API Security**

#### **Authentication Middleware**
```typescript
export async function verifyAuth(request: Request) {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    throw new Error('Unauthorized');
  }
  
  try {
    const payload = await verifyJWT(token);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
}
```

#### **Input Validation**
```typescript
// Example: Menu item validation
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
```

### **XSS Protection**

- **React**: Automatic escaping of user input
- **DOMPurify**: Sanitize rich text content
- **Content Security Policy**: Restrict script sources

### **CSRF Protection**

- **SameSite Cookies**: Prevent cross-site requests
- **CSRF Tokens**: For form submissions (if needed)

---

**Document Version**: 1.0  
**Last Updated**: October 22, 2025  
**Prepared By**: Devin AI (Lead Developer)  
**Project Owner**: Ansh Shivvay Gupta (shivamkumar14102801@gmail.com)  
**Business Owner**: Dhruv Gupta (Momos Magic Founder)
