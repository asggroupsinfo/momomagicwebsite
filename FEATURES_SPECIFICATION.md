# 🎯 MOMOS MAGIC - COMPLETE FEATURES SPECIFICATION

## 📋 TABLE OF CONTENTS

1. [Website Features Overview](#website-features-overview)
2. [Admin Panel Features (20 CMS Modules)](#admin-panel-features-20-cms-modules)
3. [UI/UX Specifications](#uiux-specifications)
4. [Animation Specifications](#animation-specifications)
5. [Content Management Capabilities](#content-management-capabilities)
6. [Integration Features](#integration-features)
7. [Performance Features](#performance-features)
8. [Security Features](#security-features)

---

## 🌐 WEBSITE FEATURES OVERVIEW

### **1. PREMIUM HERO SECTION**

#### **Visual Features**:
- **Video Background**: Looping video of Kurkure Momos preparation with steam rising
- **Gradient Overlay**: Dark-to-transparent gradient for text readability
- **Floating Momos Animation**: 3 animated momo emojis (🥟) with rotation and path movement
- **Responsive Fallback**: Static image on mobile devices for performance

#### **Content Features**:
- **Main Headline**: "From Humble Stall to Culinary Legend" (Playfair Display, 48px, bold)
- **Subheadline**: "Experience the Magic That Transformed Sherghati's Street Food Scene" (Inter, 20px)
- **Trust Badges** (4 badges with icons):
  1. "Awarded 'Best Quality Food in City' by District Magistrate"
  2. "FSSAI Certified: 20424201001152"
  3. "100% Pure Vegetarian · Since 2023"
  4. "⭐ 4.9/5 (2000+ Happy Customers)"

#### **Interactive Features**:
- **Primary CTA**: "Taste the Magic → Order Now" (Magic Red button, hover scale animation)
- **Secondary CTA**: "Discover Our Story" (Gold border button, hover fill animation)
- **Scroll Indicator**: Animated down arrow with bounce effect

#### **Technical Specifications**:
- **Component**: `components/sections/Hero.tsx`
- **Type**: Client Component ('use client')
- **Animations**: Framer Motion (fade-in, scale, floating)
- **Performance**: Lazy load video, preload poster image
- **Accessibility**: Alt text for images, ARIA labels for buttons

---

### **2. BRAND STORY SECTION**

#### **Layout Features**:
- **Split-Screen Design**: 50-50 layout on desktop (story text left, visual element right)
- **Responsive Stacking**: Vertical stack on mobile and tablet
- **Scroll-Triggered Animations**: Fade-in as user scrolls

#### **Content Features**:
- **Section Title**: "The Magic Began With a Dream, Not a Recipe"
- **Story Narrative** (4 paragraphs):
  1. Introduction to Dhruv Gupta and his entrepreneurial spirit
  2. The Pita experiment and market learning
  3. The pivot to momos and innovation
  4. Current status and legacy

#### **Interactive Timeline** (6 milestones):
1. **Sep 2023**: "Humble beginnings with small stall"
2. **Nov 2023**: "Pita to Momos transformation"
3. **Jan 2024**: "Exclusive Kurkure Momos introduced"
4. **Jun 2024**: "'Best Quality Food' award from DM Office"
5. **Dec 2024**: "Premium stall redesign"
6. **Mar 2025**: "Pizza Momos innovation launched"

#### **Timeline Features**:
- **Vertical Layout**: Desktop (timeline runs vertically)
- **Horizontal Scroll**: Mobile (timeline scrolls horizontally)
- **Animated Dots**: Pulse animation on active milestone
- **Connecting Lines**: Animated line connecting all milestones
- **Hover Effects**: Scale up on hover, show full description

#### **Philosophy Highlight**:
- **Quote**: "Quantity bhi Mast, Taste bhi Zabardast"
- **Styling**: Premium card with gold border, center-aligned
- **Font**: Playfair Display Italic, 24px

#### **Technical Specifications**:
- **Component**: `components/sections/BrandStory.tsx`
- **Type**: Client Component ('use client')
- **Animations**: Scroll-triggered reveals, timeline animations
- **Responsive**: Breakpoints at 768px and 1024px

---

### **3. MENU HIGHLIGHTS SECTION**

#### **Category Cards** (4 categories):

##### **3.1 Steamed Perfection**
- **Highlight**: "Fresh & Healthy"
- **Items**: Veg Momos, Paneer Momos, Soya Momos, Cheese Corn
- **Icon**: 🥟 (steaming momo)
- **Color Accent**: Vegetarian Green (#059669)

##### **3.2 Crispy Fried Delights**
- **Highlight**: "Golden & Crunchy"
- **Items**: Veg Fried, Paneer Fried, Soya Fried, Cheese Corn Fried
- **Icon**: 🔥 (fire)
- **Color Accent**: Warm Orange (#EA580C)

##### **3.3 Magic Signatures**
- **Highlight**: "Sherghati Exclusive"
- **Items**: Kurkure Momos, Paneer Kurkure, Cheese Kurkure
- **Icon**: ✨ (sparkles)
- **Color Accent**: Premium Gold (#D4AF37)

##### **3.4 Fusion Innovations**
- **Highlight**: "Innovative Fusion"
- **Items**: Veg Pizza Momos, Paneer Pizza, Soya Pizza, Cheese Corn Pizza
- **Icon**: 🍕 (pizza)
- **Color Accent**: Magic Red (#DC2626)

#### **Card Features**:
- **Image**: High-quality food photography (400x300px)
- **Hover Animation**: Lift effect (translateY -8px) + gold border
- **Category Name**: Playfair Display, 24px, bold
- **Highlight Badge**: Small badge with icon and text
- **Item Count**: Display number of items in category
- **Transition**: Smooth 0.3s ease-in-out

#### **CTA Button**:
- **Text**: "View Full Menu"
- **Style**: Primary button (Magic Red background)
- **Link**: `/menu`
- **Animation**: Scale on hover

#### **Technical Specifications**:
- **Component**: `components/sections/MenuHighlights.tsx`
- **Type**: Client Component ('use client')
- **Grid**: 4-col → 2-col → 1-col responsive
- **Animations**: Hover effects, fade-in on scroll

---

### **4. GOOGLE REVIEWS INTEGRATION**

#### **API Integration Features**:
- **Google Places API**: Fetch live reviews from Google Business Profile
- **Place ID**: Configured for Momos Magic business
- **Max Reviews**: Display up to 6 most relevant reviews
- **Sort Order**: Most relevant first
- **Fallback**: Static reviews if API fails or rate limit exceeded

#### **Review Display Features**:
- **Customer Name**: Display reviewer name
- **Star Rating**: Visual 5-star rating display (filled/empty stars)
- **Review Text**: Excerpt (max 200 characters) with "Read more" link
- **Customer Photo**: Display reviewer profile photo if available
- **Review Date**: Relative date (e.g., "2 weeks ago")
- **Verified Badge**: Show "Verified Purchase" badge if applicable

#### **Carousel Features**:
- **Auto-Rotation**: Reviews rotate every 5 seconds
- **Manual Navigation**: Previous/Next buttons
- **Pause on Hover**: Stop auto-rotation when user hovers
- **Indicators**: Dot indicators showing current review
- **Smooth Transitions**: Fade-in/fade-out animations

#### **Social Proof Elements**:
- **Section Title**: "Join 2000+ Happy Customers Who Found Their Magic"
- **Average Rating**: Display overall 4.9/5 rating
- **Total Reviews**: Show total review count
- **CTA Button**: "See all reviews on Google" (links to Google Business Profile)

#### **Technical Specifications**:
- **Component**: `components/sections/Reviews.tsx`
- **Type**: Client Component ('use client')
- **API Route**: `/api/google-reviews`
- **Caching**: 1-hour cache for API responses
- **Error Handling**: Graceful fallback to static reviews

---

### **5. CUSTOMER TESTIMONIALS**

#### **Testimonial Structure**:
- **Customer Name**: Full name with title/location
- **Star Rating**: 5-star rating display
- **Quote**: Customer testimonial text (max 300 characters)
- **Customer Photo**: Profile photo or placeholder avatar
- **Date**: When testimonial was given

#### **Featured Testimonials** (3 testimonials):

##### **Testimonial 1**:
- **Customer**: Rohan, Regular Customer
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Quote**: "The Kurkure Momos are revolutionary! Nobody in Bihar makes them like Momos Magic. Dhruv bhaiya's innovation changed street food forever!"

##### **Testimonial 2**:
- **Customer**: City Food Blog
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Quote**: "Awarded 'Best Quality Food' for a reason! The hygiene, taste, and innovation combination is unmatched in Sherghati."

##### **Testimonial 3**:
- **Customer**: Priya, Local Foodie
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Quote**: "From watching them start with a small stall to becoming the most premium food spot - what a journey! The Pizza Momos are genius!"

#### **Carousel Features**:
- **Manual Navigation**: Previous/Next buttons
- **Indicators**: Dot indicators for each testimonial
- **Smooth Transitions**: Slide animation (300ms)
- **Responsive**: Single testimonial on mobile, multiple on desktop

#### **Technical Specifications**:
- **Component**: `components/sections/Testimonials.tsx`
- **Type**: Client Component ('use client')
- **Animations**: Slide transitions, fade-in
- **CMS Integration**: Editable via admin panel

---

### **6. LOCATION & SERVICES SECTION**

#### **Google Maps Integration**:
- **Embedded Map**: Interactive Google Maps embed
- **Custom Marker**: Branded marker for Momos Magic location
- **Zoom Level**: 15 (street level)
- **Map Style**: Default Google Maps style
- **Responsive**: Full-width on mobile, 50% width on desktop

#### **Location Details**:
- **Business Name**: "Momo Magic"
- **Address Line 1**: "Naya Bazar, Near Post Office"
- **Address Line 2**: "Sherghati, Bihar 824211"
- **Phone**: "+91 9955955191" (click-to-call functionality)
- **Website**: "www.momomegics.com"
- **Hours**: "Monday-Sunday: 10:00 AM - 10:00 PM"

#### **Service Information** (6 services with status):

##### **Service 1: Takeaway**
- **Status**: ✅ Currently Available
- **Icon**: 🛍️ (shopping bag)
- **Description**: "Walk-in and takeaway service available"

##### **Service 2: Delivery**
- **Status**: 🔜 Coming Soon
- **Icon**: 🚗 (delivery vehicle)
- **Description**: "10KM Delivery Radius"

##### **Service 3: Online Ordering**
- **Status**: ✅ Available
- **Icon**: 📱 (mobile phone)
- **Description**: "Order via Momo Magic App"

##### **Service 4: Group Orders**
- **Status**: ✅ Available
- **Icon**: 👥 (group)
- **Description**: "Special Discounts for Bulk Orders"

##### **Service 5: Catering**
- **Status**: ✅ Available
- **Icon**: 🎉 (party)
- **Description**: "Catering Service Booking Available in App"

##### **Service 6: Table Booking**
- **Status**: 🔜 Coming Soon
- **Icon**: 🪑 (chair)
- **Description**: "Reserve your table in advance"

#### **Interactive Features**:
- **Click-to-Call**: Tap phone number to call on mobile
- **Directions**: "Get Directions" button opens Google Maps
- **Service Status Badges**: Color-coded badges (green for available, orange for coming soon)

#### **Technical Specifications**:
- **Component**: `components/sections/LocationServices.tsx`
- **Type**: Client Component ('use client')
- **API**: Google Maps Embed API
- **Responsive**: 2-col → stacked layout

---

### **7. TRUST & ACHIEVEMENTS SECTION**

#### **Trust Factor Cards** (4 cards):

##### **Card 1: Award Winning**
- **Icon**: 🏆 (trophy)
- **Title**: "Award Winning"
- **Description**: "Best Quality Food in City - District Magistrate Office"
- **Color**: Premium Gold (#D4AF37)

##### **Card 2: FSSAI Certified**
- **Icon**: 🔒 (lock)
- **Title**: "FSSAI Certified"
- **Description**: "License: 20424201001152 - Highest Hygiene Standards"
- **Color**: Vegetarian Green (#059669)

##### **Card 3: 100% Vegetarian**
- **Icon**: 🌱 (plant)
- **Title**: "100% Vegetarian"
- **Description**: "Pure Veg Kitchen - No Compromise on Quality"
- **Color**: Vegetarian Green (#059669)

##### **Card 4: Rated 4.9/5**
- **Icon**: ⭐ (star)
- **Title**: "Rated 4.9/5"
- **Description**: "2000+ Happy Customers - Consistent Quality"
- **Color**: Warm Orange (#EA580C)
- **Count-Up Animation**: Animate from 0 to 4.9 on scroll

#### **Card Features**:
- **Layout**: 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Hover Effect**: Scale up (1.05) + shadow increase
- **Icon Size**: 64px with color accent
- **Title**: Playfair Display, 20px, bold
- **Description**: Inter, 14px, gray

#### **Technical Specifications**:
- **Component**: `components/sections/TrustAchievements.tsx`
- **Type**: Client Component ('use client')
- **Animations**: Count-up, fade-in, hover scale
- **Responsive**: 4-col → 2-col → 1-col grid

---

### **8. FULL MENU PAGE FEATURES**

#### **Advanced Filtering System**:

##### **Filter 1: Category**
- **Options**: All, Steamed, Fried, Kurkure, Pizza
- **Type**: Button group (single selection)
- **Default**: All
- **Visual**: Active filter has Magic Red background

##### **Filter 2: Spice Level**
- **Options**: All, Mild, Medium, Hot, Extra Magic
- **Type**: Button group (single selection)
- **Default**: All
- **Visual**: Active filter has Warm Orange background
- **Icons**: 🌶️ (chili pepper) with count (1-4 peppers)

##### **Filter 3: Price Range**
- **Options**: All, Under ₹50, ₹50-₹100, ₹100-₹200, Above ₹200
- **Type**: Button group (single selection)
- **Default**: All
- **Visual**: Active filter has Premium Gold background

#### **Search Functionality**:
- **Input**: Text input with search icon
- **Placeholder**: "Search menu items..."
- **Debounce**: 300ms delay for performance
- **Clear Button**: X button to clear search
- **Results Count**: Display "Showing X of Y items"
- **Highlight**: Highlight matching text in results

#### **Sorting Options**:
- **Option 1**: Popularity (Best Sellers) - Default
- **Option 2**: Price: Low to High
- **Option 3**: Price: High to Low
- **Option 4**: Preparation Time (Fastest First)
- **Type**: Dropdown select
- **Visual**: Dropdown with arrow icon

#### **Menu Item Card Features**:
- **Image**: 400x300px food photo with lazy loading
- **Popular Badge**: "Popular" badge for best sellers (top-right corner)
- **Item Name**: Playfair Display, 20px, bold
- **Description**: Inter, 14px, gray (max 2 lines with ellipsis)
- **Spice Level**: Visual indicator (1-4 chili peppers)
- **Preparation Time**: Clock icon + "15 mins"
- **Pricing**:
  - 5pc price: "₹50 (5pc)" - Inter, 16px, bold
  - 10pc price: "₹100 (10pc)" - Inter, 16px, bold
- **Hover Effect**: Scale up (1.03) + gold border + shadow increase

#### **URL State Management**:
- **Query Parameters**: Filters and search stored in URL
- **Example URL**: `/menu?category=kurkure&spice=hot&price=50-100&search=paneer`
- **Shareable**: Users can share filtered menu views
- **Browser Navigation**: Back/forward buttons work with filters

#### **Technical Specifications**:
- **Component**: `app/menu/page.tsx`
- **Type**: Client Component ('use client')
- **State Management**: React useState + URL query parameters
- **Performance**: Virtual scrolling for large lists (if needed)
- **Responsive**: 4-col → 3-col → 2-col → 1-col grid

---

### **9. ABOUT US PAGE FEATURES**

#### **Founder's Story Section**:
- **Layout**: Split-screen (text left, image right)
- **Founder Image**: High-quality photo of Dhruv Gupta
- **Story Content** (4 sections):
  1. **Introduction**: Background and motivation
  2. **The Journey**: From Pita to Momos
  3. **Innovation**: Kurkure and Pizza Momos creation
  4. **Vision**: Future plans and goals
- **Quote Highlight**: "Better to be a small owner than someone else's employee"

#### **Journey Timeline Section**:
- **Timeline Type**: Vertical with alternating sides
- **Events**: 6 milestones with dates, titles, descriptions
- **Visual**: Animated dots connected by line
- **Scroll Animation**: Reveal events as user scrolls
- **Responsive**: Horizontal scroll on mobile

#### **Quality Commitment Section**:
- **Layout**: 4-column grid
- **Commitments** (4 cards):
  1. **Fresh Ingredients**: "Daily fresh ingredients from local markets"
  2. **Magic Masala**: "Special 'Magic Masala' created in-house"
  3. **Hygiene Standards**: "Hygiene-first kitchen standards"
  4. **Perfected Recipe**: "Third-generation recipe perfected over time"
- **Icons**: Custom food-themed icons
- **Hover Effect**: Scale up + gold border

#### **Gallery Section**:
- **Categories**: Stall (2 images), Food (2 images), Awards (1 image)
- **Layout**: Responsive grid (3-col → 2-col → 1-col)
- **Lightbox**: Click image to open full-screen lightbox
- **Lightbox Features**:
  - Full-screen overlay with dark background
  - Previous/Next navigation buttons
  - Close button (X) and ESC key support
  - Image counter (e.g., "3 of 5")
  - Smooth zoom-in/zoom-out transitions
  - Swipe gestures on mobile

#### **FAQ Accordion**:
- **Questions**: 6 frequently asked questions
- **Accordion Behavior**: Only one section open at a time
- **Expand/Collapse**: Smooth height transition (300ms)
- **Icons**: Plus icon (collapsed), Minus icon (expanded)
- **Keyboard Accessible**: Tab navigation, Enter to toggle

#### **Technical Specifications**:
- **Component**: `app/about/page.tsx`
- **Type**: Client Component ('use client')
- **Gallery Component**: `components/sections/Gallery.tsx`
- **Animations**: Scroll-triggered reveals, lightbox transitions

---

### **10. CONTACT PAGE FEATURES**

#### **Contact Methods Section**:
- **Layout**: 3-column grid
- **Methods** (3 cards):
  1. **Phone**: "+91 9955955191" (click-to-call)
  2. **Location**: "Naya Bazar, Sherghati"
  3. **Hours**: "10:00 AM - 10:00 PM (Every Day)"
- **Icons**: Phone, Map Pin, Clock
- **Hover Effect**: Scale up + gold border

#### **Contact Form**:

##### **Form Fields**:
1. **Full Name**:
   - Type: Text input
   - Required: Yes
   - Validation: Min 3 characters, max 100 characters
   - Error: "Name must be at least 3 characters"

2. **Phone Number**:
   - Type: Tel input
   - Required: Yes
   - Validation: 10-digit Indian phone number
   - Format: +91 XXXXX XXXXX
   - Error: "Please enter a valid 10-digit phone number"

3. **Email Address**:
   - Type: Email input
   - Required: No (optional)
   - Validation: Valid email format
   - Error: "Please enter a valid email address"

4. **Message**:
   - Type: Textarea
   - Required: Yes
   - Validation: Min 10 characters, max 1000 characters
   - Rows: 5
   - Error: "Message must be at least 10 characters"

##### **Form Validation**:
- **Client-Side**: Real-time validation on blur
- **Server-Side**: Validation on API route
- **Error Display**: Red text below field with shake animation
- **Success Display**: Green checkmark icon in field

##### **reCAPTCHA Integration**:
- **Type**: Google reCAPTCHA v3 (invisible)
- **Trigger**: On form submission
- **Score Threshold**: 0.5 (reject if below)
- **Fallback**: Show visible reCAPTCHA if score is low

##### **Form Submission**:
- **Submit Button**: "Send Message" (Magic Red background)
- **Loading State**: Spinner icon + "Sending..." text
- **Success State**: Green checkmark + "Message sent successfully!"
- **Error State**: Red X + "Something went wrong. Please try again."
- **Reset**: Form clears after successful submission

#### **FAQ Accordion**:
- **Questions**: 8 common questions
- **Same Features**: As About page FAQ
- **Topics**: Orders, payments, delivery, customization, catering, hygiene, tracking, refunds

#### **Technical Specifications**:
- **Component**: `app/contact/page.tsx`
- **Type**: Client Component ('use client')
- **API Route**: `/api/contact/submit` (future)
- **Validation**: Client-side + server-side
- **reCAPTCHA**: Google reCAPTCHA v3

---

## 🎛️ ADMIN PANEL FEATURES (20 CMS MODULES)

### **MODULE 1: DASHBOARD & ANALYTICS**

#### **Dashboard Overview**:
- **Visitor Statistics**:
  - Total visitors (today, week, month, year)
  - Unique visitors vs returning visitors
  - Page views per session
  - Average session duration
  - Bounce rate
- **Popular Pages**:
  - Top 5 most visited pages
  - Page views count
  - Average time on page
- **Traffic Sources**:
  - Direct traffic
  - Organic search
  - Social media
  - Referrals
- **Device Breakdown**:
  - Desktop vs mobile vs tablet
  - Browser distribution
  - Operating system distribution

#### **Charts & Visualizations**:
- **Line Chart**: Visitor trends over time
- **Bar Chart**: Page views by page
- **Pie Chart**: Traffic sources distribution
- **Donut Chart**: Device breakdown

#### **Time Range Selector**:
- **Options**: Today, Yesterday, Last 7 Days, Last 30 Days, Last 90 Days, Custom Range
- **Date Picker**: Calendar for custom date range

#### **Export Features**:
- **CSV Export**: Download data as CSV file
- **PDF Export**: Generate PDF report
- **Email Report**: Schedule automated email reports

#### **Technical Specifications**:
- **Component**: `components/admin/AnalyticsDashboard.tsx`
- **Data Source**: Google Analytics 4 API
- **Refresh Rate**: Real-time (updates every 30 seconds)
- **Charts Library**: Recharts or Chart.js

---

### **MODULE 2: HERO SECTION MANAGEMENT**

#### **Editable Fields**:

##### **Headlines**:
- **Main Headline**: Text input (max 100 characters)
- **Subheadline**: Text input (max 200 characters)
- **Preview**: Live preview of headlines

##### **CTAs**:
- **Primary CTA**:
  - Text: Text input (max 30 characters)
  - Link: URL input with validation
  - Style: Color picker for button color
- **Secondary CTA**:
  - Text: Text input (max 30 characters)
  - Link: URL input with validation
  - Style: Color picker for border color

##### **Media**:
- **Video Background**:
  - Upload: Video file upload (max 50MB, MP4/WebM)
  - URL: External video URL input
  - Poster Image: Image upload for video poster
- **Fallback Image**:
  - Upload: Image upload (max 5MB, JPG/PNG/WebP)
  - Alt Text: Text input for accessibility

##### **Trust Badges** (4 badges):
- **Badge 1**: Award badge
  - Icon: Icon selector (1000+ icons)
  - Text: Text input (max 100 characters)
  - Color: Color picker
- **Badge 2**: FSSAI badge
  - Icon: Icon selector
  - Text: Text input (max 100 characters)
  - Color: Color picker
- **Badge 3**: Vegetarian badge
  - Icon: Icon selector
  - Text: Text input (max 100 characters)
  - Color: Color picker
- **Badge 4**: Rating badge
  - Icon: Icon selector
  - Text: Text input (max 100 characters)
  - Color: Color picker

#### **Preview & Publish**:
- **Live Preview**: Real-time preview of changes
- **Save Draft**: Save without publishing
- **Publish**: Publish changes to live site
- **Revert**: Revert to last published version

#### **Technical Specifications**:
- **Component**: `components/admin/HeroCMS.tsx`
- **API Route**: `/api/cms/hero`
- **Storage**: JSON file or database
- **Image Upload**: Next.js Image Optimization API

---

### **MODULE 3: MENU MANAGEMENT**

#### **Menu Items List**:
- **Table View**: Display all menu items in table
- **Columns**: Image, Name, Category, Price (5pc/10pc), Spice Level, Popular, Active, Actions
- **Sorting**: Click column header to sort
- **Pagination**: 20 items per page
- **Search**: Search by item name
- **Filters**: Filter by category, spice level, price range, active status

#### **Add New Item**:
- **Form Fields**:
  1. **Item Name**: Text input (required, max 100 characters)
  2. **Description**: Textarea (required, max 500 characters)
  3. **Category**: Dropdown (Steamed, Fried, Kurkure, Pizza)
  4. **Price (5pc)**: Number input (required, min 1, max 9999)
  5. **Price (10pc)**: Number input (required, min 1, max 9999)
  6. **Spice Level**: Dropdown (Mild, Medium, Hot, Extra Magic)
  7. **Preparation Time**: Number input (minutes, default 15)
  8. **Image**: Image upload (max 5MB, JPG/PNG/WebP)
  9. **Is Popular**: Checkbox (mark as popular item)
  10. **Is Vegetarian**: Checkbox (default checked)
  11. **Is Active**: Checkbox (default checked)

#### **Edit Item**:
- **Same Form**: Pre-filled with existing data
- **Image Preview**: Show current image with option to replace
- **Save Changes**: Update item in database

#### **Delete Item**:
- **Confirmation Modal**: "Are you sure you want to delete this item?"
- **Soft Delete**: Mark as inactive instead of permanent delete
- **Restore**: Option to restore deleted items

#### **Bulk Actions**:
- **Select Multiple**: Checkbox for each item
- **Actions**: Delete, Change Category, Mark as Popular, Activate/Deactivate
- **Confirmation**: Confirm before applying bulk actions

#### **Technical Specifications**:
- **Component**: `components/admin/MenuCMS.tsx`
- **API Route**: `/api/cms/menu`
- **CRUD Operations**: Create, Read, Update, Delete
- **Image Storage**: Upload to `/public/images/menu/`

---

### **MODULE 4: CATEGORIES MANAGEMENT**

#### **Categories List**:
- **Display**: All categories with drag-and-drop reordering
- **Columns**: Icon, Name, Slug, Highlight, Item Count, Display Order, Active, Actions

#### **Add New Category**:
- **Form Fields**:
  1. **Category Name**: Text input (required, max 100 characters)
  2. **Slug**: Text input (auto-generated from name, editable)
  3. **Description**: Textarea (max 500 characters)
  4. **Highlight**: Text input (e.g., "Fresh & Healthy", max 50 characters)
  5. **Icon**: Icon selector (emoji or custom icon)
  6. **Color Accent**: Color picker
  7. **Display Order**: Number input (for sorting)
  8. **Is Active**: Checkbox (default checked)

#### **Edit Category**:
- **Same Form**: Pre-filled with existing data
- **Slug Warning**: Show warning if slug is changed (affects URLs)

#### **Delete Category**:
- **Validation**: Check if category has items
- **Confirmation**: "This category has X items. Are you sure?"
- **Reassign**: Option to reassign items to another category

#### **Drag & Drop Reordering**:
- **Feature**: Drag categories to reorder
- **Visual Feedback**: Highlight drop zone
- **Auto-Save**: Save new order automatically

#### **Technical Specifications**:
- **Component**: `components/admin/CategoriesCMS.tsx`
- **API Route**: `/api/cms/categories`
- **Drag & Drop**: React DnD or dnd-kit library

---

### **MODULE 5: ABOUT US MANAGEMENT**

#### **Founder's Story**:
- **Rich Text Editor**: WYSIWYG editor for story content
- **Formatting**: Bold, italic, underline, headings, lists, links
- **Image Upload**: Insert images inline
- **Preview**: Live preview of formatted content

#### **Journey Timeline**:
- **Timeline Events** (6 events):
  - **Date**: Date picker
  - **Title**: Text input (max 100 characters)
  - **Description**: Textarea (max 500 characters)
  - **Reorder**: Drag and drop to reorder events
  - **Add/Remove**: Add new events or remove existing

#### **Quality Commitment**:
- **Commitments** (4 cards):
  - **Icon**: Icon selector
  - **Title**: Text input (max 50 characters)
  - **Description**: Textarea (max 200 characters)
  - **Reorder**: Drag and drop to reorder

#### **FAQ Management**:
- **FAQ Items** (6 questions):
  - **Question**: Text input (max 200 characters)
  - **Answer**: Rich text editor
  - **Reorder**: Drag and drop to reorder
  - **Add/Remove**: Add new FAQs or remove existing

#### **Technical Specifications**:
- **Component**: `components/admin/AboutCMS.tsx`
- **Rich Text Editor**: `components/admin/RichTextEditor.tsx`
- **API Route**: `/api/cms/about`

---

### **MODULE 6: CONTACT MANAGEMENT**

#### **Business Information**:
- **Business Name**: Text input
- **Address Line 1**: Text input
- **Address Line 2**: Text input
- **City**: Text input
- **State**: Text input
- **Postal Code**: Text input
- **Phone**: Tel input with validation
- **Email**: Email input with validation
- **Website**: URL input with validation

#### **Business Hours**:
- **Days**: Monday-Sunday
- **Hours**: Time picker for open and close times
- **Closed Days**: Checkbox to mark days as closed
- **Special Hours**: Add special hours for holidays

#### **Service Details** (6 services):
- **Service Name**: Text input
- **Icon**: Icon selector
- **Description**: Textarea
- **Status**: Dropdown (Available, Coming Soon, Unavailable)
- **Reorder**: Drag and drop to reorder

#### **FAQ Management**:
- **FAQ Items** (8 questions):
  - **Question**: Text input
  - **Answer**: Rich text editor
  - **Reorder**: Drag and drop to reorder
  - **Add/Remove**: Add new FAQs or remove existing

#### **Contact Form Submissions**:
- **Inbox**: View all form submissions
- **Columns**: Name, Phone, Email, Message, Date, Status
- **Status**: New, Read, Replied
- **Actions**: Mark as read, reply, delete
- **Search**: Search by name, phone, email
- **Filters**: Filter by status, date range

#### **Technical Specifications**:
- **Component**: `components/admin/ContactCMS.tsx`
- **API Route**: `/api/cms/contact`
- **Submissions Storage**: Database or JSON file

---

### **MODULE 7: GALLERY MANAGEMENT**

#### **Gallery Grid**:
- **Display**: All images in grid view
- **Columns**: Thumbnail, Title, Category, Display Order, Actions
- **Sorting**: Sort by date, category, display order
- **Filters**: Filter by category

#### **Upload Images**:
- **Single Upload**: Upload one image at a time
- **Bulk Upload**: Upload multiple images (drag and drop)
- **File Types**: JPG, PNG, WebP, AVIF
- **Max Size**: 5MB per image
- **Auto-Optimization**: Compress and optimize on upload

#### **Image Details**:
- **Title**: Text input (max 100 characters)
- **Description**: Textarea (max 500 characters)
- **Category**: Dropdown (Stall, Food, Awards, Events)
- **Display Order**: Number input
- **Alt Text**: Text input (for accessibility)
- **Is Active**: Checkbox

#### **Image Actions**:
- **Edit**: Edit image details
- **Delete**: Delete image (with confirmation)
- **Copy URL**: Copy image URL to clipboard
- **Download**: Download original image

#### **Drag & Drop Reordering**:
- **Feature**: Drag images to reorder within category
- **Visual Feedback**: Highlight drop zone
- **Auto-Save**: Save new order automatically

#### **Technical Specifications**:
- **Component**: `components/admin/GalleryCMS.tsx`
- **API Route**: `/api/cms/gallery`
- **Image Storage**: `/public/images/gallery/`
- **Optimization**: Next.js Image Optimization API

---

### **MODULE 8: TESTIMONIALS MANAGEMENT**

#### **Testimonials List**:
- **Display**: All testimonials in table
- **Columns**: Customer Name, Rating, Review Excerpt, Featured, Active, Actions
- **Sorting**: Sort by date, rating
- **Filters**: Filter by rating, featured, active

#### **Add New Testimonial**:
- **Form Fields**:
  1. **Customer Name**: Text input (required, max 100 characters)
  2. **Customer Title**: Text input (e.g., "Regular Customer", max 50 characters)
  3. **Rating**: Star selector (1-5 stars)
  4. **Review Text**: Textarea (required, max 1000 characters)
  5. **Customer Photo**: Image upload (optional, max 2MB)
  6. **Date**: Date picker (default today)
  7. **Is Featured**: Checkbox (show on home page)
  8. **Is Active**: Checkbox (default checked)

#### **Edit Testimonial**:
- **Same Form**: Pre-filled with existing data
- **Photo Preview**: Show current photo with option to replace

#### **Delete Testimonial**:
- **Confirmation**: "Are you sure you want to delete this testimonial?"
- **Soft Delete**: Mark as inactive instead of permanent delete

#### **Bulk Actions**:
- **Select Multiple**: Checkbox for each testimonial
- **Actions**: Delete, Mark as Featured, Activate/Deactivate

#### **Technical Specifications**:
- **Component**: `components/admin/TestimonialsCMS.tsx`
- **API Route**: `/api/cms/testimonials`
- **Image Storage**: `/public/images/testimonials/`

---

### **MODULE 9: COMBO DEALS MANAGEMENT**

#### **Combo Deals List**:
- **Display**: All combo deals in table
- **Columns**: Name, Items, Price, Discount, Valid Until, Active, Actions

#### **Add New Combo Deal**:
- **Form Fields**:
  1. **Combo Name**: Text input (required, max 100 characters)
  2. **Description**: Textarea (max 500 characters)
  3. **Items**: Multi-select dropdown (select menu items)
  4. **Regular Price**: Auto-calculated from selected items
  5. **Combo Price**: Number input (required)
  6. **Discount**: Auto-calculated percentage
  7. **Valid From**: Date picker
  8. **Valid Until**: Date picker
  9. **Image**: Image upload (optional)
  10. **Is Active**: Checkbox (default checked)

#### **Edit Combo Deal**:
- **Same Form**: Pre-filled with existing data
- **Price Calculation**: Auto-update discount when prices change

#### **Delete Combo Deal**:
- **Confirmation**: "Are you sure you want to delete this combo deal?"

#### **Technical Specifications**:
- **Component**: `components/admin/ComboDealsCMS.tsx`
- **API Route**: `/api/cms/combo-deals`

---

### **MODULE 10: LOGO & BRANDING**

#### **Logo Management**:
- **Light Logo**: Upload logo for light backgrounds
- **Dark Logo**: Upload logo for dark backgrounds
- **Favicon**: Upload favicon (16x16, 32x32, 64x64)
- **Apple Touch Icon**: Upload icon for iOS (180x180)
- **Preview**: Live preview of logos on different backgrounds

#### **Brand Colors**:
- **Primary Colors** (7 colors):
  1. **Magic Red**: Color picker (#DC2626)
  2. **Premium Gold**: Color picker (#D4AF37)
  3. **Charcoal Black**: Color picker (#1F2937)
  4. **Cream White**: Color picker (#FEF3C7)
  5. **Vegetarian Green**: Color picker (#059669)
  6. **Warm Orange**: Color picker (#EA580C)
  7. **Cool Gray**: Color picker (#6B7280)
- **Preview**: Live preview of color palette

#### **Typography Settings**:
- **Heading Font**: Font selector (Google Fonts)
- **Body Font**: Font selector (Google Fonts)
- **Font Weights**: Select available weights
- **Preview**: Live preview of typography

#### **Technical Specifications**:
- **Component**: `components/admin/LogoCMS.tsx`
- **API Route**: `/api/cms/branding`
- **Logo Storage**: `/public/images/branding/`

---

### **MODULE 11: SOCIAL MEDIA MANAGEMENT**

#### **Social Media Links**:
- **Facebook**: URL input with validation
- **Instagram**: URL input with validation
- **Twitter**: URL input with validation
- **YouTube**: URL input with validation
- **WhatsApp**: Phone number input
- **LinkedIn**: URL input with validation
- **TikTok**: URL input with validation

#### **Link Validation**:
- **Format Check**: Validate URL format
- **Test Connection**: Check if link is accessible
- **Preview**: Show preview of social media profile

#### **Display Settings**:
- **Show in Header**: Checkbox
- **Show in Footer**: Checkbox
- **Icon Style**: Dropdown (Solid, Outline, Color)
- **Icon Size**: Dropdown (Small, Medium, Large)

#### **Technical Specifications**:
- **Component**: `components/admin/SocialMediaCMS.tsx`
- **API Route**: `/api/cms/social-media`

---

### **MODULE 12: API INTEGRATIONS**

#### **Google Maps API**:
- **API Key**: Text input (masked)
- **Place ID**: Text input
- **Test Connection**: Button to test API key
- **Status**: Display connection status (Connected/Error)

#### **Google Places API**:
- **API Key**: Text input (masked)
- **Place ID**: Text input
- **Max Reviews**: Number input (default 6)
- **Test Connection**: Button to test API key
- **Status**: Display connection status

#### **Google Analytics 4**:
- **Measurement ID**: Text input (format: G-XXXXXXXXXX)
- **Test Connection**: Button to verify tracking
- **Status**: Display connection status

#### **reCAPTCHA**:
- **Site Key**: Text input
- **Secret Key**: Text input (masked)
- **Version**: Dropdown (v2, v3)
- **Test**: Button to test reCAPTCHA
- **Status**: Display connection status

#### **Technical Specifications**:
- **Component**: `components/admin/APIConfigCMS.tsx`
- **API Route**: `/api/cms/api-config`
- **Security**: Encrypt API keys before storage

---

### **MODULE 13: CTA MANAGEMENT**

#### **CTA List**:
- **Display**: All CTAs in table
- **Columns**: Text, Link, Style, Location, Active, Actions

#### **Add New CTA**:
- **Form Fields**:
  1. **CTA Text**: Text input (max 30 characters)
  2. **Link**: URL input with validation
  3. **Button Style**: Dropdown (Primary, Secondary, Outline)
  4. **Button Color**: Color picker
  5. **Display Location**: Multi-select (Hero, Menu, About, Contact, Footer)
  6. **Open in New Tab**: Checkbox
  7. **Is Active**: Checkbox

#### **Edit CTA**:
- **Same Form**: Pre-filled with existing data
- **Preview**: Live preview of CTA button

#### **Delete CTA**:
- **Confirmation**: "Are you sure you want to delete this CTA?"

#### **Technical Specifications**:
- **Component**: `components/admin/CTACMS.tsx`
- **API Route**: `/api/cms/cta`

---

### **MODULE 14: MEDIA LIBRARY**

#### **Media Grid**:
- **Display**: All media files in grid view
- **File Types**: Images, Videos, Documents
- **Columns**: Thumbnail, Name, Type, Size, Date, Actions
- **Sorting**: Sort by name, date, size, type
- **Filters**: Filter by type, date range

#### **Upload Media**:
- **Single Upload**: Upload one file at a time
- **Bulk Upload**: Upload multiple files (drag and drop)
- **File Types**: JPG, PNG, WebP, AVIF, MP4, WebM, PDF
- **Max Size**: 50MB per file
- **Progress Bar**: Show upload progress

#### **Folder Organization**:
- **Create Folder**: Create new folders
- **Move Files**: Move files between folders
- **Rename Folder**: Rename existing folders
- **Delete Folder**: Delete empty folders

#### **Media Actions**:
- **Edit**: Edit file name and alt text
- **Delete**: Delete file (with confirmation)
- **Copy URL**: Copy file URL to clipboard
- **Download**: Download original file
- **Replace**: Replace file with new version

#### **Search & Filter**:
- **Search**: Search by file name
- **Filter by Type**: Images, Videos, Documents
- **Filter by Date**: Date range picker
- **Filter by Size**: Size range slider

#### **Technical Specifications**:
- **Component**: `components/admin/MediaLibrary.tsx`
- **Modal**: `components/admin/MediaLibraryModal.tsx`
- **API Route**: `/api/cms/media`
- **Storage**: `/public/media/`

---

### **MODULE 15: SEO MANAGEMENT**

#### **Page SEO Settings**:
- **Pages**: Home, Menu, About, Contact
- **For Each Page**:
  1. **Page Title**: Text input (max 60 characters)
  2. **Meta Description**: Textarea (max 160 characters)
  3. **Meta Keywords**: Text input (comma-separated)
  4. **Canonical URL**: URL input
  5. **Character Count**: Display remaining characters

#### **Open Graph Tags**:
- **OG Title**: Text input (max 60 characters)
- **OG Description**: Textarea (max 160 characters)
- **OG Image**: Image upload (1200x630px recommended)
- **OG URL**: URL input
- **OG Type**: Dropdown (website, article, product)

#### **Twitter Card Tags**:
- **Twitter Card**: Dropdown (summary, summary_large_image)
- **Twitter Title**: Text input (max 60 characters)
- **Twitter Description**: Textarea (max 160 characters)
- **Twitter Image**: Image upload (1200x600px recommended)
- **Twitter Creator**: Text input (@username)

#### **Robots Configuration**:
- **Index**: Checkbox (allow indexing)
- **Follow**: Checkbox (allow following links)
- **Max Image Preview**: Dropdown (none, standard, large)
- **Max Video Preview**: Number input (seconds)
- **Max Snippet**: Number input (characters)

#### **Sitemap Settings**:
- **Generate Sitemap**: Button to regenerate sitemap
- **Last Generated**: Display last generation date
- **Sitemap URL**: Display sitemap URL

#### **Technical Specifications**:
- **Component**: `components/admin/SEOCMS.tsx`
- **API Route**: `/api/cms/seo`
- **Sitemap**: `app/sitemap.ts`

---

### **MODULE 16: MULTI-LANGUAGE MANAGEMENT**

#### **Language Settings**:
- **Default Language**: Dropdown (English, Hindi, Bengali)
- **Available Languages**: Multi-select (add/remove languages)
- **Language Switcher**: Toggle (show/hide on website)

#### **Translation Management**:
- **Language Selector**: Dropdown to select language
- **Translation Keys**: List of all translation keys
- **For Each Key**:
  - **Key**: Display key name (e.g., "hero.headline")
  - **English**: Text input (default language)
  - **Hindi**: Text input (translation)
  - **Bengali**: Text input (translation)
  - **Status**: Display translation status (Complete/Incomplete)

#### **Import/Export**:
- **Export Translations**: Download translations as JSON
- **Import Translations**: Upload JSON file to import
- **Format**: JSON format with nested keys

#### **Translation Progress**:
- **Progress Bar**: Show completion percentage for each language
- **Missing Translations**: Highlight missing translations
- **Auto-Translate**: Button to auto-translate using Google Translate API (optional)

#### **Technical Specifications**:
- **Component**: `components/admin/TranslationsCMS.tsx`
- **API Route**: `/api/cms/translations`
- **Translation Files**: `lib/i18n/translations/`
- **Hook**: `lib/i18n/useTranslation.ts`

---

### **MODULE 17: ADVANCED ANALYTICS**

#### **Conversion Tracking**:
- **Goals**: Define conversion goals (e.g., "View Menu", "Contact Form Submit")
- **Conversion Rate**: Display conversion rate for each goal
- **Funnel Analysis**: Visualize user journey through conversion funnel

#### **User Behavior**:
- **Heat Maps**: Visual heat map of user clicks
- **Scroll Maps**: Show how far users scroll on each page
- **Session Recordings**: Watch recordings of user sessions (privacy-compliant)
- **User Flow**: Visualize path users take through website

#### **Performance Metrics**:
- **Page Load Time**: Average load time for each page
- **Time to Interactive**: Average time to interactive
- **Core Web Vitals**: LCP, FID, CLS scores
- **Performance Score**: Lighthouse performance score

#### **Custom Reports**:
- **Create Report**: Build custom reports with selected metrics
- **Schedule Reports**: Schedule automated email reports
- **Export Reports**: Download reports as PDF or CSV

#### **Technical Specifications**:
- **Component**: `components/admin/AdvancedAnalyticsDashboard.tsx`
- **Data Source**: Google Analytics 4 API + custom tracking
- **Heat Maps**: Hotjar or custom implementation

---

### **MODULE 18: SYSTEM SETTINGS**

#### **General Settings**:
- **Site Name**: Text input
- **Site Tagline**: Text input
- **Admin Email**: Email input
- **Timezone**: Dropdown (select timezone)

#### **Maintenance Mode**:
- **Enable Maintenance**: Toggle switch
- **Maintenance Message**: Rich text editor
- **Allowed IPs**: Text input (comma-separated IPs)

#### **Cache Settings**:
- **Enable Caching**: Toggle switch
- **Cache Duration**: Number input (seconds)
- **Clear Cache**: Button to clear all caches

#### **Email Notifications**:
- **Contact Form**: Toggle (send email on form submission)
- **New Order**: Toggle (send email on new order)
- **Admin Email**: Email input (recipient)

#### **Backup Settings**:
- **Auto Backup**: Toggle switch
- **Backup Frequency**: Dropdown (Daily, Weekly, Monthly)
- **Backup Time**: Time picker
- **Backup Retention**: Number input (days to keep backups)

#### **Technical Specifications**:
- **Component**: `components/admin/SystemSettings.tsx`
- **API Route**: `/api/cms/settings`

---

### **MODULE 19: BACKUP & RESTORE**

#### **Manual Backup**:
- **Create Backup**: Button to create manual backup
- **Backup Type**: Dropdown (Full, Database Only, Media Only)
- **Progress**: Show backup progress
- **Status**: Display backup status (In Progress/Complete/Failed)

#### **Scheduled Backups**:
- **Enable Auto Backup**: Toggle switch
- **Frequency**: Dropdown (Daily, Weekly, Monthly)
- **Time**: Time picker
- **Backup Type**: Dropdown (Full, Database Only, Media Only)

#### **Backup History**:
- **List**: Display all backups in table
- **Columns**: Date, Type, Size, Status, Actions
- **Actions**: Download, Restore, Delete

#### **Restore from Backup**:
- **Select Backup**: Dropdown to select backup
- **Restore Type**: Dropdown (Full, Database Only, Media Only)
- **Confirmation**: "Are you sure? This will overwrite current data."
- **Progress**: Show restore progress

#### **Download Backup**:
- **Format**: ZIP file containing all data
- **Contents**: Database JSON, media files, configuration

#### **Technical Specifications**:
- **Component**: `components/admin/BackupRestore.tsx`
- **API Route**: `/api/cms/backup`
- **Storage**: `/backups/` directory

---

### **MODULE 20: USER MANAGEMENT** (Future)

#### **User List**:
- **Display**: All users in table
- **Columns**: Name, Email, Role, Last Login, Status, Actions

#### **Add New User**:
- **Form Fields**:
  1. **Name**: Text input
  2. **Email**: Email input
  3. **Password**: Password input
  4. **Role**: Dropdown (Admin, Editor)
  5. **Is Active**: Checkbox

#### **Edit User**:
- **Same Form**: Pre-filled with existing data
- **Change Password**: Optional password change

#### **Delete User**:
- **Confirmation**: "Are you sure you want to delete this user?"

#### **Role Permissions**:
- **Admin**: Full access to all modules
- **Editor**: Limited access (no system settings, no user management)

#### **Technical Specifications**:
- **Component**: `components/admin/UserManagement.tsx`
- **API Route**: `/api/cms/users`
- **Authentication**: JWT with role-based access control

---

## 🎨 UI/UX SPECIFICATIONS

### **DESIGN PRINCIPLES**

#### **1. Visual Hierarchy**:
- **Primary Elements**: Large, bold, high contrast (headlines, CTAs)
- **Secondary Elements**: Medium size, moderate contrast (subheadlines, descriptions)
- **Tertiary Elements**: Small, low contrast (captions, metadata)

#### **2. Consistency**:
- **Spacing**: Consistent padding and margins (multiples of 4px)
- **Typography**: Consistent font sizes and weights
- **Colors**: Consistent color usage across components
- **Components**: Reusable components with consistent styling

#### **3. Accessibility**:
- **Color Contrast**: WCAG 2.1 AA compliance (4.5:1 for text)
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus States**: Visible focus indicators for all interactive elements

#### **4. Responsiveness**:
- **Mobile-First**: Design for mobile first, scale up for desktop
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Touch Targets**: Minimum 44x44px for touch targets
- **Readable Text**: Minimum 16px font size on mobile

---

### **COLOR GUIDELINES**

#### **Approved Color Combinations**:

##### **Combination 1: Magic Red + Cream White**
- **Use Case**: Primary CTAs, buttons, highlights
- **Example**: Red button on cream background
- **Contrast Ratio**: 8.2:1 (AAA)

##### **Combination 2: Premium Gold + Charcoal Black**
- **Use Case**: Premium elements, accents, borders
- **Example**: Gold text on black background
- **Contrast Ratio**: 7.1:1 (AAA)

##### **Combination 3: Charcoal Black + Cream White**
- **Use Case**: Text on light backgrounds
- **Example**: Black text on cream background
- **Contrast Ratio**: 12.5:1 (AAA)

##### **Combination 4: Vegetarian Green + White**
- **Use Case**: Veg badges, success messages
- **Example**: Green badge on white background
- **Contrast Ratio**: 4.8:1 (AA)

##### **Combination 5: Warm Orange + White**
- **Use Case**: Special offers, hot items
- **Example**: Orange badge on white background
- **Contrast Ratio**: 5.2:1 (AA)

#### **Prohibited Color Combinations**:

##### **Combination 1: Magic Red + Premium Gold**
- **Reason**: Low contrast, hard to read
- **Alternative**: Use Magic Red + Cream White or Premium Gold + Charcoal Black

##### **Combination 2: Cream White + White**
- **Reason**: No contrast, invisible
- **Alternative**: Use Charcoal Black + Cream White

##### **Combination 3: Cool Gray + Charcoal Black**
- **Reason**: Low contrast for text
- **Alternative**: Use Cool Gray + White or Charcoal Black + Cream White

---

### **TYPOGRAPHY GUIDELINES**

#### **Heading Styles**:

##### **H1 (Page Title)**:
- **Font**: Playfair Display
- **Size**: 48px (desktop), 32px (mobile)
- **Weight**: 700 (bold)
- **Line Height**: 1.2
- **Color**: Charcoal Black (#1F2937)
- **Use Case**: Page titles, hero headlines

##### **H2 (Section Title)**:
- **Font**: Playfair Display
- **Size**: 36px (desktop), 28px (mobile)
- **Weight**: 600 (semi-bold)
- **Line Height**: 1.3
- **Color**: Charcoal Black (#1F2937)
- **Use Case**: Section titles

##### **H3 (Subsection Title)**:
- **Font**: Playfair Display
- **Size**: 24px (desktop), 20px (mobile)
- **Weight**: 600 (semi-bold)
- **Line Height**: 1.4
- **Color**: Charcoal Black (#1F2937)
- **Use Case**: Subsection titles, card titles

##### **H4 (Card Title)**:
- **Font**: Playfair Display
- **Size**: 20px (desktop), 18px (mobile)
- **Weight**: 600 (semi-bold)
- **Line Height**: 1.4
- **Color**: Charcoal Black (#1F2937)
- **Use Case**: Card titles, menu item names

#### **Body Text Styles**:

##### **Body Large**:
- **Font**: Inter
- **Size**: 18px
- **Weight**: 400 (regular)
- **Line Height**: 1.6
- **Color**: Cool Gray (#6B7280)
- **Use Case**: Hero subheadlines, important descriptions

##### **Body Regular**:
- **Font**: Inter
- **Size**: 16px
- **Weight**: 400 (regular)
- **Line Height**: 1.6
- **Color**: Cool Gray (#6B7280)
- **Use Case**: Paragraphs, descriptions

##### **Body Small**:
- **Font**: Inter
- **Size**: 14px
- **Weight**: 400 (regular)
- **Line Height**: 1.5
- **Color**: Cool Gray (#6B7280)
- **Use Case**: Captions, metadata, secondary text

##### **Body Bold**:
- **Font**: Inter
- **Size**: 16px
- **Weight**: 600 (semi-bold)
- **Line Height**: 1.6
- **Color**: Charcoal Black (#1F2937)
- **Use Case**: Emphasized text, labels

---

### **BUTTON STYLES**

#### **Primary Button**:
- **Background**: Magic Red (#DC2626)
- **Text Color**: White (#FFFFFF)
- **Padding**: 12px 24px (desktop), 10px 20px (mobile)
- **Border Radius**: 8px
- **Font**: Inter, 16px, 600 (semi-bold)
- **Hover**: Background darkens to #B91C1C, scale 1.05
- **Active**: Background darkens to #991B1B, scale 0.98
- **Disabled**: Background #E5E7EB, text #9CA3AF, cursor not-allowed
- **Transition**: All 0.3s ease-in-out

#### **Secondary Button**:
- **Background**: Transparent
- **Border**: 2px solid Premium Gold (#D4AF37)
- **Text Color**: Premium Gold (#D4AF37)
- **Padding**: 12px 24px (desktop), 10px 20px (mobile)
- **Border Radius**: 8px
- **Font**: Inter, 16px, 600 (semi-bold)
- **Hover**: Background Premium Gold, text White, scale 1.05
- **Active**: Background #C19A2E, scale 0.98
- **Disabled**: Border #E5E7EB, text #9CA3AF, cursor not-allowed
- **Transition**: All 0.3s ease-in-out

#### **Outline Button**:
- **Background**: Transparent
- **Border**: 2px solid Charcoal Black (#1F2937)
- **Text Color**: Charcoal Black (#1F2937)
- **Padding**: 12px 24px (desktop), 10px 20px (mobile)
- **Border Radius**: 8px
- **Font**: Inter, 16px, 600 (semi-bold)
- **Hover**: Background Charcoal Black, text White, scale 1.05
- **Active**: Background #111827, scale 0.98
- **Disabled**: Border #E5E7EB, text #9CA3AF, cursor not-allowed
- **Transition**: All 0.3s ease-in-out

#### **Ghost Button**:
- **Background**: Transparent
- **Border**: None
- **Text Color**: Magic Red (#DC2626)
- **Padding**: 12px 24px (desktop), 10px 20px (mobile)
- **Border Radius**: 8px
- **Font**: Inter, 16px, 600 (semi-bold)
- **Hover**: Background #FEF2F2, scale 1.05
- **Active**: Background #FEE2E2, scale 0.98
- **Disabled**: Text #9CA3AF, cursor not-allowed
- **Transition**: All 0.3s ease-in-out

---

### **CARD STYLES**

#### **Standard Card**:
- **Background**: White (#FFFFFF)
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Hover**: Shadow 0 10px 25px rgba(0, 0, 0, 0.15), scale 1.02
- **Transition**: All 0.3s ease-in-out

#### **Premium Card**:
- **Background**: White (#FFFFFF)
- **Border**: 2px solid Premium Gold (#D4AF37)
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: 0 4px 6px rgba(212, 175, 55, 0.1)
- **Hover**: Shadow 0 10px 25px rgba(212, 175, 55, 0.2), scale 1.02
- **Transition**: All 0.3s ease-in-out

#### **Image Card**:
- **Background**: White (#FFFFFF)
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 12px
- **Padding**: 0 (image full-width at top)
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Hover**: Border 2px solid Premium Gold, shadow 0 10px 25px rgba(0, 0, 0, 0.15), scale 1.03
- **Transition**: All 0.3s ease-in-out
- **Image**: Border radius 12px 12px 0 0

---

### **FORM STYLES**

#### **Text Input**:
- **Background**: White (#FFFFFF)
- **Border**: 1px solid #D1D5DB
- **Border Radius**: 8px
- **Padding**: 12px 16px
- **Font**: Inter, 16px, 400
- **Placeholder Color**: #9CA3AF
- **Focus**: Border 2px solid Magic Red, shadow 0 0 0 3px rgba(220, 38, 38, 0.1)
- **Error**: Border 2px solid #EF4444, shadow 0 0 0 3px rgba(239, 68, 68, 0.1)
- **Success**: Border 2px solid Vegetarian Green, shadow 0 0 0 3px rgba(5, 150, 105, 0.1)
- **Disabled**: Background #F3F4F6, text #9CA3AF, cursor not-allowed
- **Transition**: All 0.2s ease-in-out

#### **Textarea**:
- **Same as Text Input**
- **Min Height**: 120px
- **Resize**: Vertical only

#### **Select Dropdown**:
- **Same as Text Input**
- **Icon**: Down arrow icon on right
- **Dropdown**: White background, shadow, max height 300px with scroll

#### **Checkbox**:
- **Size**: 20px x 20px
- **Border**: 2px solid #D1D5DB
- **Border Radius**: 4px
- **Checked**: Background Magic Red, white checkmark
- **Focus**: Shadow 0 0 0 3px rgba(220, 38, 38, 0.1)
- **Disabled**: Background #F3F4F6, cursor not-allowed

#### **Radio Button**:
- **Size**: 20px x 20px
- **Border**: 2px solid #D1D5DB
- **Border Radius**: 50% (circle)
- **Checked**: Background Magic Red, white dot (8px)
- **Focus**: Shadow 0 0 0 3px rgba(220, 38, 38, 0.1)
- **Disabled**: Background #F3F4F6, cursor not-allowed

---

### **BADGE STYLES**

#### **Success Badge**:
- **Background**: Vegetarian Green (#059669)
- **Text Color**: White (#FFFFFF)
- **Padding**: 4px 12px
- **Border Radius**: 16px (pill shape)
- **Font**: Inter, 12px, 600 (semi-bold)
- **Use Case**: "Available", "Active", "Verified"

#### **Warning Badge**:
- **Background**: Warm Orange (#EA580C)
- **Text Color**: White (#FFFFFF)
- **Padding**: 4px 12px
- **Border Radius**: 16px (pill shape)
- **Font**: Inter, 12px, 600 (semi-bold)
- **Use Case**: "Coming Soon", "Limited", "Hot"

#### **Info Badge**:
- **Background**: Premium Gold (#D4AF37)
- **Text Color**: Charcoal Black (#1F2937)
- **Padding**: 4px 12px
- **Border Radius**: 16px (pill shape)
- **Font**: Inter, 12px, 600 (semi-bold)
- **Use Case**: "Popular", "Featured", "New"

#### **Neutral Badge**:
- **Background**: Cool Gray (#6B7280)
- **Text Color**: White (#FFFFFF)
- **Padding**: 4px 12px
- **Border Radius**: 16px (pill shape)
- **Font**: Inter, 12px, 600 (semi-bold)
- **Use Case**: "Inactive", "Unavailable"

---

## 🎬 ANIMATION SPECIFICATIONS

### **PAGE TRANSITIONS**

#### **Page Load Animation**:
- **Type**: Fade-in
- **Duration**: 600ms
- **Easing**: ease-in-out
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
>
  {children}
</motion.div>
```

#### **Page Exit Animation**:
- **Type**: Fade-out
- **Duration**: 300ms
- **Easing**: ease-in
- **Implementation**:
```tsx
<motion.div
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeIn' }}
>
  {children}
</motion.div>
```

---

### **SCROLL ANIMATIONS**

#### **Fade-in on Scroll**:
- **Type**: Fade-in + slide up
- **Duration**: 600ms
- **Easing**: ease-out
- **Trigger**: When element is 20% visible
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

#### **Stagger Children**:
- **Type**: Staggered fade-in
- **Duration**: 400ms per child
- **Delay**: 100ms between children
- **Implementation**:
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {children.map((child, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4 }}
    >
      {child}
    </motion.div>
  ))}
</motion.div>
```

---

### **HOVER ANIMATIONS**

#### **Button Hover**:
- **Type**: Scale + background color change
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Scale**: 1.05
- **Implementation**:
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
  {children}
</motion.button>
```

#### **Card Hover**:
- **Type**: Scale + border color + shadow
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Scale**: 1.02
- **Border**: Change to Premium Gold
- **Shadow**: Increase shadow
- **Implementation**:
```tsx
<motion.div
  whileHover={{ 
    scale: 1.02,
    borderColor: '#D4AF37',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
  }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
  {children}
</motion.div>
```

#### **Image Hover**:
- **Type**: Scale (zoom in)
- **Duration**: 400ms
- **Easing**: ease-out
- **Scale**: 1.1
- **Overflow**: Hidden (on parent)
- **Implementation**:
```tsx
<div className="overflow-hidden">
  <motion.img
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    src={imageSrc}
    alt={imageAlt}
  />
</div>
```

---

### **SPECIAL ANIMATIONS**

#### **Floating Momos Animation**:
- **Type**: Continuous floating + rotation
- **Duration**: 10-20 seconds (varies per momo)
- **Easing**: ease-in-out
- **Path**: Circular or figure-8 path
- **Rotation**: 0° to 360°
- **Implementation**:
```tsx
<motion.div
  animate={{
    y: [0, -20, 0],
    rotate: [0, 360],
    x: [0, 10, 0, -10, 0]
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  🥟
</motion.div>
```

#### **Gold Particles Animation**:
- **Type**: Floating particles with fade
- **Duration**: 3-5 seconds
- **Easing**: ease-out
- **Particles**: 10-20 particles
- **Path**: Random upward movement
- **Opacity**: Fade from 1 to 0
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 1, y: 0, x: 0 }}
  animate={{
    opacity: 0,
    y: -100,
    x: Math.random() * 40 - 20
  }}
  transition={{
    duration: 3 + Math.random() * 2,
    ease: 'easeOut'
  }}
>
  ✨
</motion.div>
```

#### **Count-Up Animation**:
- **Type**: Number increment
- **Duration**: 2000ms
- **Easing**: ease-out
- **Trigger**: When element is visible
- **Implementation**:
```tsx
<motion.span
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  onViewportEnter={() => {
    let start = 0;
    const end = 4.9;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start.toFixed(1));
    }, 16);
  }}
>
  {count}
</motion.span>
```

#### **Timeline Dot Pulse**:
- **Type**: Scale pulse
- **Duration**: 2000ms
- **Easing**: ease-in-out
- **Repeat**: Infinite
- **Scale**: 1 to 1.2 to 1
- **Implementation**:
```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
  className="timeline-dot"
/>
```

---

### **LOADING ANIMATIONS**

#### **Spinner**:
- **Type**: Rotation
- **Duration**: 1000ms
- **Easing**: linear
- **Repeat**: Infinite
- **Implementation**:
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: 'linear'
  }}
  className="spinner"
/>
```

#### **Skeleton Loading**:
- **Type**: Shimmer effect
- **Duration**: 1500ms
- **Easing**: ease-in-out
- **Repeat**: Infinite
- **Implementation**:
```tsx
<motion.div
  animate={{
    backgroundPosition: ['200% 0', '-200% 0']
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
  className="skeleton"
  style={{
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%'
  }}
/>
```

---

### **MODAL ANIMATIONS**

#### **Modal Open**:
- **Type**: Fade-in + scale up
- **Duration**: 300ms
- **Easing**: ease-out
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  className="modal"
>
  {children}
</motion.div>
```

#### **Modal Backdrop**:
- **Type**: Fade-in
- **Duration**: 200ms
- **Easing**: ease-in
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2, ease: 'easeIn' }}
  className="modal-backdrop"
/>
```

---

### **CAROUSEL ANIMATIONS**

#### **Slide Transition**:
- **Type**: Slide + fade
- **Duration**: 500ms
- **Easing**: ease-in-out
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
  className="carousel-item"
>
  {children}
</motion.div>
```

#### **Auto-Rotate**:
- **Interval**: 5000ms (5 seconds)
- **Pause on Hover**: Yes
- **Implementation**:
```tsx
useEffect(() => {
  if (!isHovered) {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }
}, [isHovered]);
```

---

### **ACCORDION ANIMATIONS**

#### **Expand/Collapse**:
- **Type**: Height transition
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Implementation**:
```tsx
<motion.div
  initial={false}
  animate={{
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0
  }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
  style={{ overflow: 'hidden' }}
>
  {children}
</motion.div>
```

---

### **TOAST NOTIFICATIONS**

#### **Toast Enter**:
- **Type**: Slide in from right + fade
- **Duration**: 300ms
- **Easing**: ease-out
- **Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 100 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  className="toast"
>
  {children}
</motion.div>
```

#### **Toast Auto-Dismiss**:
- **Duration**: 5000ms (5 seconds)
- **Progress Bar**: Animated from 100% to 0%
- **Implementation**:
```tsx
<motion.div
  initial={{ width: '100%' }}
  animate={{ width: '0%' }}
  transition={{ duration: 5, ease: 'linear' }}
  className="toast-progress"
/>
```

---

## 📊 CONTENT MANAGEMENT CAPABILITIES

### **Dynamic Content**:
- All text content editable via admin panel
- All images replaceable via media library
- All colors customizable via branding settings
- All menu items manageable via menu CMS

### **Multi-Language Support**:
- English (default)
- Hindi
- Bengali
- Easy to add more languages

### **SEO Management**:
- Page titles and meta descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Robots configuration
- Sitemap generation

### **Analytics Integration**:
- Google Analytics 4
- Vercel Analytics
- Custom event tracking
- Conversion tracking

### **Media Management**:
- Upload images and videos
- Organize in folders
- Optimize automatically
- Copy URLs easily

---

**Document Version**: 1.0  
**Last Updated**: October 22, 2025  
**Prepared By**: Devin AI (Lead Developer)  
**Project Owner**: Ansh Shivvay Gupta (shivamkumar14102801@gmail.com)  
**Business Owner**: Dhruv Gupta (Momos Magic Founder)
