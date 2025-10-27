# 📚 MOMOS MAGIC - COMPLETE VISUAL ARCHITECTURE

**Created:** October 23, 2025  
**Project:** Momos Magic Brand Website  
**Website:** https://momosmagic.in (LIVE Production)  
**Client:** Ansh Shivvay Gupta (shivamkumar14102801@gmail.com)  
**Purpose:** Complete visual structure documentation for non-technical owner

---

## 🎯 EXECUTIVE SUMMARY

### **Document Purpose**
This document provides a comprehensive visual structure guide for the Momos Magic brand website. It is designed for non-technical stakeholders to understand exactly how every page, component, and user interaction works on the website.

### **Project Overview**
- **Business:** Momos Magic - Premium Food & Beverage Brand
- **Location:** Naya Bazar, Sherghati, Bihar 824211
- **Founder:** Dhruv Gupta
- **Established:** September 2023
- **Website:** https://momosmagic.in
- **Framework:** Next.js 16 with Turbopack
- **Database:** MySQL
- **Deployment:** Vercel (Live Production)
- **CMS:** 26 modules for complete content management

### **Website Status**
- ✅ All 11 pages deployed and live
- ✅ CMS 26 modules fully functional
- ✅ Mobile responsive design
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant

### **Design System Summary**
- **Primary Color:** #000000 (Rich Black)
- **Secondary Color:** #ffc241 (Premium Orange)
- **Accent Color:** #ffd700 (Golden Yellow)
- **Typography:** Inter (body), Poppins (headings)
- **Style:** Premium, modern, clean, professional

---

# 🏗️ WEBSITE PAGES STRUCTURE (11 Pages)

---

## 1. HOMEPAGE (/)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 HERO BANNER SECTION                                                        │
│ • Background: Slow-motion video of Kurkure Momos being prepared with steam   │
│ • Overlay: Semi-transparent black (#000000 with 40% opacity)                  │
│ • Main Heading: "From Humble Stall to Culinary Legend"                       │
│   - Font: Poppins, 72px, Bold, White color                                   │
│   - Animation: Fade in from bottom (1s delay)                                │
│ • Subheading: "Experience the Magic That Transformed Sherghati's Street Food"│
│   - Font: Inter, 24px, Regular, White color                                  │
│   - Animation: Fade in from bottom (1.5s delay)                              │
│ • Highlights Row (4 badges):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ ✓ Best Quality Food Award | ✓ FSSAI Certified | ✓ 100% Veg | ⭐ 4.9/5│   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│   - Each badge: Orange background, black text, rounded corners              │
│   - Animation: Stagger fade in (2s delay)                                   │
│ • CTA Buttons (2 buttons side by side):                                      │
│   - Primary: "Taste the Magic → Order Now" (Orange bg, black text)         │
│   - Secondary: "Discover Our Story" (Transparent bg, orange border)         │
│   - Hover: Lift effect (translateY -2px) + shadow                           │
│ • Expected: Auto-play video, smooth scroll indicator at bottom               │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📖 BRAND STORY SECTION                                                        │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "The Magic Began With a Dream, Not a Recipe"                │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│   - Centered alignment                                                        │
│ • Story Content (2-column layout):                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT COLUMN:                                                          │   │
│   │ • Founder Photo (400x400px, rounded corners)                         │   │
│   │ • Quote Box: "Why be an employee when you can be an employer?"       │   │
│   │   - Orange border-left (4px), light gray background                  │   │
│   │   - Font: Poppins, 20px, Italic                                      │   │
│   │                                                                       │   │
│   │ RIGHT COLUMN:                                                         │   │
│   │ • Story Excerpt (5 paragraphs):                                      │   │
│   │   - September 2023 humble beginnings                                 │   │
│   │   - Pita experiment and learning                                     │   │
│   │   - Pivot to momos success                                           │   │
│   │   - Innovation and excellence                                        │   │
│   │   - Current status and legacy                                        │   │
│   │ • Font: Inter, 18px, Regular, line-height 1.75                       │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Journey Timeline (Horizontal scroll on mobile):                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Sep 2023 → Nov 2023 → Jan 2024 → Jun 2024 → Dec 2024 → Mar 2025    │   │
│   │ [Stall]   [Pivot]   [Kurkure]  [Award]    [Redesign] [Pizza]       │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│   - Each milestone: Circle icon + text below                                 │
│   - Active milestone: Orange color, others gray                              │
│   - Animation: Scroll-triggered reveal                                       │
│ • CTA Button: "Read Full Story" (Orange, centered)                           │
│ • Expected: Parallax effect on founder photo, timeline scroll animation      │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📊 FEATURED MENU SECTION                                                      │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Our Specialties"                                           │
│   - Font: Poppins, 48px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "Sherghati's First Kurkure & Pizza Momos"                        │
│   - Font: Inter, 20px, Regular, Orange color                                 │
│ • Menu Items Grid (3 columns on desktop, 1 on mobile):                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MENU ITEM CARD (repeated 6 times):                                   │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Item Image (full width, 300px height)                        │   │
│   │ │ • Hover: Zoom in effect (scale 1.1)                            │   │
│   │ │ • Badge: "SIGNATURE" or "NEW" (top-right corner, orange)       │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Item Details:                                                │   │
│   │ │ • Name: "Kurkure Momos" (Poppins, 24px, Bold, White)          │   │
│   │ │ • Description: Short text (Inter, 16px, Gray)                  │   │
│   │ │ • Category Badge: "Signature" (Orange pill shape)              │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Pricing:                                                     │   │
│   │ │ • 5pc: ₹50 | 10pc: ₹100 (Inter, 20px, Bold, Orange)           │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Action Button:                                               │   │
│   │ │ • "Add to Cart" (Full width, Orange bg, Black text)           │   │
│   │ │ • Hover: Darker orange + lift effect                           │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Featured Items:                                                             │
│   1. Kurkure Momos (Signature)                                               │
│   2. Pizza Momos (New)                                                       │
│   3. Paneer Steamed                                                          │
│   4. Cheese Corn Fried                                                       │
│   5. Soya Momos                                                              │
│   6. Veg Fried Momos                                                         │
│ • CTA Button: "View Full Menu →" (Orange, centered, large)                   │
│ • Expected: Card hover effects, smooth add to cart animation, cart icon      │
│   updates with item count                                                    │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 UNIQUE SELLING POINTS SECTION                                              │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "What Makes Our Magic"                                      │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • USP Cards Grid (3 columns on desktop, 1 on mobile):                        │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ USP CARD (repeated 6 times):                                         │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎨 Icon (64x64px, Orange color)                                 │   │
│   │ │ • Animated on scroll (bounce effect)                           │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Title (Poppins, 24px, Bold, Black)                          │   │
│   │ │ • "Sherghati's First Kurkure Momos"                            │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description (Inter, 16px, Regular, Gray)                    │   │
│   │ │ • 2-3 lines explaining the USP                                 │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • USP List:                                                                   │
│   1. Sherghati's First Kurkure Momos Creator                                 │
│   2. Exclusive Pizza Momos Innovation                                        │
│   3. Daily Fresh Preparation Guarantee                                       │
│   4. Secret Spice Blends (Family Recipes)                                    │
│   5. Premium Hygienic Kitchen Standards                                      │
│   6. 100% Vegetarian Commitment                                              │
│ • Recognition Badges Row:                                                     │
│   - "Best Quality Food" Award badge                                          │
│   - FSSAI Certified badge                                                    │
│   - Local Favorite 2024 badge                                                │
│ • Expected: Scroll-triggered animations, icon hover effects                   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ TESTIMONIALS SECTION                                                       │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Join 2000+ Happy Customers Who Found Their Magic"          │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Google Reviews Integration:                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ 🌟 Overall Rating Display:                                            │   │
│   │ • Large: "4.9/5" (Poppins, 64px, Bold, Orange)                       │   │
│   │ • Stars: ⭐⭐⭐⭐⭐ (5 stars, orange color)                              │   │
│   │ • Text: "Based on 2000+ reviews" (Inter, 18px, Gray)                 │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Testimonial Cards Carousel (3 visible, auto-scroll):                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ TESTIMONIAL CARD:                                                     │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 👤 Customer Photo (80x80px, circular)                           │   │
│   │ │ • Name: "Rohan" (Poppins, 20px, Bold, White)                   │   │
│   │ │ • Badge: "Regular Customer" (Orange pill)                       │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ⭐ Rating: 5 stars (Orange)                                     │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 Review Text:                                                 │   │
│   │ │ "The Kurkure Momos are revolutionary! Nobody in Bihar makes    │   │
│   │ │ them like Momos Magic. Dhruv bhaiya's innovation changed       │   │
│   │ │ street food forever!"                                           │   │
│   │ │ • Font: Inter, 16px, Regular, Light Gray                        │   │
│   │ │ • Max 3 lines, "Read more" link if longer                       │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📅 Date: "2 weeks ago" (Inter, 14px, Gray)                     │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Navigation: Dots indicator + arrow buttons                                  │
│ • CTA Button: "See all 200+ reviews on Google →" (Orange, centered)          │
│ • Expected: Auto-scroll every 5 seconds, pause on hover, swipe on mobile     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📍 LOCATION & CONTACT SECTION                                                 │
│ • Background: White (#ffffff)                                                 │
│ • Layout: 2 columns (Map left, Info right)                                   │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT COLUMN - INTERACTIVE MAP:                                        │   │
│   │ • Google Maps Embed (600x400px)                                       │   │
│   │ • Location: Momo Magic, Naya Bazar, Sherghati                        │   │
│   │ • Custom marker: Orange pin with logo                                │   │
│   │ • Features: Zoom, directions, street view                            │   │
│   │ • Button: "Get Directions" (Orange, below map)                       │   │
│   │                                                                       │   │
│   │ RIGHT COLUMN - CONTACT INFO:                                          │   │
│   │ ┌─────────────────────────────────────────────────────────────────┐  │   │
│   │ │ 📍 Address:                                                      │  │   │
│   │ │ Momo Magic, Naya Bazar, Near Post Office                        │  │   │
│   │ │ Sherghati, Bihar 824211                                         │  │   │
│   │ │ • Font: Inter, 18px, Regular, Black                             │  │   │
│   │ ├─────────────────────────────────────────────────────────────────┤  │   │
│   │ │ 📞 Phone:                                                        │  │   │
│   │ │ +91 9955955191                                                  │  │   │
│   │ │ • Click to call functionality                                   │  │   │
│   │ │ • WhatsApp icon link                                            │  │   │
│   │ ├─────────────────────────────────────────────────────────────────┤  │   │
│   │ │ 🕒 Hours:                                                        │  │   │
│   │ │ Monday - Sunday: 10:00 AM - 10:00 PM                           │  │   │
│   │ │ • Status: "🟢 Open Now" or "🔴 Closed Now" (dynamic)           │  │   │
│   │ ├─────────────────────────────────────────────────────────────────┤  │   │
│   │ │ 🌐 Website:                                                      │  │   │
│   │ │ www.momomagics.com                                              │  │   │
│   │ ├─────────────────────────────────────────────────────────────────┤  │   │
│   │ │ 📱 Social Media Icons:                                           │  │   │
│   │ │ [Facebook] [Instagram] [Twitter] [YouTube]                      │  │   │
│   │ │ • Orange color, hover effect                                    │  │   │
│   │ └─────────────────────────────────────────────────────────────────┘  │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Interactive map, click-to-call, real-time open/closed status     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📧 NEWSLETTER SUBSCRIPTION SECTION                                            │
│ • Background: Orange gradient (#ffc241 to #ffb700)                            │
│ • Section Title: "Stay Updated with Momos Magic"                             │
│   - Font: Poppins, 40px, Bold, Black color                                   │
│ • Subtitle: "Get exclusive deals, new menu items, and special offers"        │
│   - Font: Inter, 18px, Regular, Black color                                  │
│ • Subscription Form (Centered, max-width 600px):                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [Email Input Field] [Subscribe Button]                               │   │
│   │ • Input: White bg, black text, placeholder "your@email.com"          │   │
│   │ • Button: Black bg, white text, "Subscribe"                          │   │
│   │ • Inline layout on desktop, stacked on mobile                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Privacy Note: "We respect your privacy. Unsubscribe anytime."              │
│   - Font: Inter, 14px, Regular, Black color                                  │
│ • Expected: Email validation, success message, error handling                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **HOMEPAGE INTERACTIONS:**
- **Scroll Animations:** Fade in, slide up effects on sections
- **Hero Video:** Auto-play, muted, loop
- **Menu Cards:** Hover zoom on images, add to cart animation
- **Testimonials:** Auto-scroll carousel, pause on hover
- **Map:** Interactive, click for directions
- **Newsletter:** Form validation, success/error messages
- **Mobile:** Hamburger menu, touch-friendly buttons, swipe gestures

---

## 2. MENU PAGE (/menu)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 MENU HEADER SECTION                                                        │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Page Title: "Our Complete Menu"                                            │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "Sherghati's Most Loved Momos - 100% Vegetarian"                 │
│   - Font: Inter, 24px, Regular, Orange color                                 │
│ • Quick Stats Row:                                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [20+ Varieties] [Fresh Daily] [FSSAI Certified] [⭐ 4.9/5]           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│   - Each stat: Orange border, white text, pill shape                        │
│ • Expected: Fade in animation on page load                                    │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 MENU FILTER & SEARCH BAR                                                   │
│ • Background: White (#ffffff)                                                 │
│ • Sticky position (stays at top when scrolling)                              │
│ • Layout: Horizontal row with filters and search                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT SIDE - CATEGORY FILTERS:                                         │   │
│   │ [All] [Steamed] [Fried] [Kurkure] [Pizza] [Combos]                  │   │
│   │ • Active filter: Orange bg, black text                                │   │
│   │ • Inactive: White bg, black text, gray border                         │   │
│   │ • Hover: Orange border                                                │   │
│   │                                                                       │   │
│   │ RIGHT SIDE - SEARCH & SORT:                                           │   │
│   │ • Search Input: "Search menu items..." (with icon)                   │   │
│   │ • Sort Dropdown: "Sort by: Price | Popularity | Name"                │   │
│   │ • Cart Icon: Shows item count badge (orange circle)                  │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Real-time filtering, instant search results, smooth transitions   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🥟 STEAMED PERFECTION COLLECTION                                              │
│ • Section Title: "🥟 Steamed Perfection Collection"                           │
│   - Font: Poppins, 36px, Bold, Black color                                   │
│ • Menu Items Grid (4 columns on desktop, 2 on tablet, 1 on mobile):          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MENU ITEM CARD (repeated for each item):                             │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Item Image (full width, 250px height, rounded corners)      │   │
│   │ │ • Hover: Zoom in (scale 1.1) + brightness increase             │   │
│   │ │ • Badge: "POPULAR" or "NEW" (top-right, orange)                │   │
│   │ │ • Wishlist Icon: Heart (top-left, click to save)               │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Item Name: "Veg Momos"                                       │   │
│   │ │ • Font: Poppins, 22px, Bold, Black                             │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description:                                                 │   │
│   │ │ "Fresh vegetables wrapped in soft dough, steamed to perfection"│   │
│   │ │ • Font: Inter, 14px, Regular, Gray                             │   │
│   │ │ • Max 2 lines, ellipsis if longer                              │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🏷️ Tags: [Vegetarian] [Steamed] [Popular]                     │   │
│   │ │ • Small pills, light gray bg, dark gray text                   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Pricing Options:                                             │   │
│   │ │ • Radio buttons: ○ 5pc - ₹25  ○ 10pc - ₹50                   │   │
│   │ │ • Selected: Orange circle, bold price                          │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🔢 Quantity Selector:                                           │   │
│   │ │ [-] [1] [+]                                                    │   │
│   │ │ • Buttons: Orange border, black text                           │   │
│   │ │ • Center number: Bold, larger font                             │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Add to Cart Button:                                          │   │
│   │ │ "Add to Cart - ₹25" (Full width, Orange bg, Black text)       │   │
│   │ │ • Hover: Darker orange + lift effect                           │   │
│   │ │ • Click: Success animation + cart icon update                  │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Items in this category:                                                     │
│   1. Veg Momos - ₹25 (5pc) | ₹50 (10pc)                                     │
│   2. Paneer Momos - ₹35 (5pc) | ₹70 (10pc)                                  │
│   3. Soya Momos - ₹30 (5pc) | ₹60 (10pc)                                    │
│   4. Cheese Corn - ₹50 (5pc) | ₹100 (10pc)                                  │
│ • Expected: Smooth add to cart, quantity updates, price calculation           │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🔥 CRISPY FRIED DELIGHTS                                                      │
│ • Section Title: "🔥 Crispy Fried Delights"                                   │
│   - Font: Poppins, 36px, Bold, Black color                                   │
│ • Same card layout as Steamed Collection                                      │
│ • Items in this category:                                                     │
│   1. Veg Fried - ₹30 (5pc) | ₹60 (10pc)                                     │
│   2. Paneer Fried - ₹46 (5pc) | ₹80 (10pc)                                  │
│   3. Soya Fried - ₹35 (5pc) | ₹70 (10pc)                                    │
│   4. Cheese Corn Fried - ₹55 (5pc) | ₹119 (10pc)                            │
│ • Expected: Same interactions as Steamed Collection                           │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ✨ MAGIC SIGNATURES (Sherghati Exclusives)                                    │
│ • Section Title: "✨ Magic Signatures - Sherghati Exclusives"                 │
│   - Font: Poppins, 36px, Bold, Black color                                   │
│ • Special Badge: "EXCLUSIVE - Only at Momos Magic" (Orange banner)            │
│ • Same card layout with "SIGNATURE" badge on each item                        │
│ • Items in this category:                                                     │
│   1. Kurkure Momos - ₹50 (5pc) | ₹100 (10pc) [MOST POPULAR]                │
│   2. Paneer Kurkure - ₹60 (5pc) | ₹120 (10pc)                               │
│   3. Cheese Kurkure - ₹60 (5pc) | ₹120 (10pc)                               │
│ • Expected: Highlighted cards, special animations, "Signature" badge glow     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🍕 FUSION INNOVATIONS                                                         │
│ • Section Title: "🍕 Fusion Innovations"                                      │
│   - Font: Poppins, 36px, Bold, Black color                                   │
│ • Special Badge: "NEW - Launched March 2025" (Orange banner)                  │
│ • Same card layout with "NEW" badge on each item                              │
│ • Items in this category:                                                     │
│   1. Veg Pizza Momos - ₹80 (5pc) | ₹160 (10pc)                              │
│   2. Paneer Pizza - ₹100 (5pc) | ₹200 (10pc)                                │
│   3. Soya Pizza - ₹90 (5pc) | ₹180 (10pc)                                   │
│   4. Cheese Corn Pizza - ₹120 (5pc) | ₹240 (10pc)                           │
│ • Expected: "New" badge animation, special hover effects                      │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🛒 FLOATING CART SIDEBAR (Right side, fixed position)                         │
│ • Trigger: Cart icon click or auto-open when item added                      │
│ • Slide-in animation from right                                               │
│ • Layout:                                                                     │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ CART HEADER:                                                          │   │
│   │ • Title: "Your Cart (3 items)" (Poppins, 24px, Bold)                │   │
│   │ • Close button: X icon (top-right)                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CART ITEMS LIST (Scrollable):                                        │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ CART ITEM (repeated for each):                                 │   │   │
│   │ │ • Thumbnail image (60x60px)                                    │   │   │
│   │ │ • Name + variant (e.g., "Veg Momos - 5pc")                    │   │   │
│   │ │ • Quantity controls: [-] [2] [+]                               │   │   │
│   │ │ • Price: ₹50 (updates with quantity)                          │   │   │
│   │ │ • Remove button: Trash icon                                    │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CART SUMMARY:                                                         │   │
│   │ • Subtotal: ₹150                                                     │   │
│   │ • Delivery: ₹30 (Free above ₹500)                                   │   │
│   │ • Total: ₹180 (Large, Bold, Orange)                                 │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ PROMO CODE:                                                           │   │
│   │ • Input: "Enter promo code"                                          │   │
│   │ • Apply button                                                       │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CHECKOUT BUTTON:                                                      │   │
│   │ "Proceed to Checkout" (Full width, Orange bg, Black text, Large)    │   │
│   │ • Hover: Darker orange + shadow                                      │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Real-time updates, smooth animations, persistent cart data        │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **MENU PAGE INTERACTIONS:**
- **Category Filters:** Instant filtering, smooth transitions
- **Search:** Real-time search results as you type
- **Add to Cart:** Success animation, cart icon badge update
- **Quantity Controls:** Instant price updates
- **Wishlist:** Save favorites, persist across sessions
- **Cart Sidebar:** Slide in/out, real-time total calculation
- **Mobile:** Swipe to close cart, touch-friendly controls

---

*[Continuing with remaining 9 pages in next section...]*

## 3. ABOUT PAGE (/about)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 ABOUT HERO SECTION                                                         │
│ • Background: Full-width image of Dhruv Gupta at the stall (with overlay)    │
│ • Overlay: Black gradient (bottom to top, 80% to 20% opacity)                 │
│ • Page Title: "The Story Behind the Magic"                                    │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "From ₹0 Investment to Award-Winning Brand"                      │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Scroll Indicator: Animated down arrow                                       │
│ • Expected: Parallax scrolling effect on background image                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📖 FOUNDER'S JOURNEY SECTION                                                  │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Chapter 1: The Dream Begins"                               │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Layout: Alternating left-right content blocks (5 chapters)                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ CHAPTER BLOCK (repeated 5 times, alternating layout):                │   │
│   │                                                                       │   │
│   │ ODD CHAPTERS (1, 3, 5) - Image Left, Text Right:                    │   │
│   │ ┌─────────────────────┬─────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Chapter Image    │ 📝 Chapter Content:                      │   │   │
│   │ │ (500x400px)         │ • Chapter Number: "01" (Large, Orange)  │   │   │
│   │ │ Rounded corners     │ • Title: "The Dream Begins"             │   │   │
│   │ │ Shadow effect       │   (Poppins, 32px, Bold, Black)          │   │   │
│   │ │                     │ • Story Text: 3-4 paragraphs            │   │   │
│   │ │                     │   (Inter, 18px, Regular, line-height    │   │   │
│   │ │                     │   1.75, Gray)                            │   │   │
│   │ │                     │ • Key Highlight Box:                     │   │   │
│   │ │                     │   "September 2023 - The Beginning"      │   │   │
│   │ │                     │   (Orange border-left, light bg)        │   │   │
│   │ └─────────────────────┴─────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ EVEN CHAPTERS (2, 4) - Text Left, Image Right:                      │   │
│   │ ┌─────────────────────────────────────────┬─────────────────────┐   │   │
│   │ │ 📝 Chapter Content (same as above)      │ 🖼️ Chapter Image    │   │   │
│   │ └─────────────────────────────────────────┴─────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 5 Chapters:                                                                 │
│   1. The Dream Begins (Sep 2023 - Starting with small stall)                │
│   2. The Pita Experiment (Nov 2023 - Learning from challenges)              │
│   3. The Magic Transformation (Jan 2024 - Pivot to momos success)           │
│   4. Innovation & Excellence (Jun 2024 - Kurkure momos, DM award)           │
│   5. The Legacy Continues (Mar 2025 - Pizza momos, future vision)           │
│ • Expected: Scroll-triggered fade-in animations, parallax on images          │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🏆 MILESTONES TIMELINE SECTION                                                │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Our Journey in Numbers"                                    │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Interactive Timeline (Horizontal scroll on mobile):                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ TIMELINE LAYOUT:                                                      │   │
│   │                                                                       │   │
│   │ Sep 2023 ──→ Nov 2023 ──→ Jan 2024 ──→ Jun 2024 ──→ Dec 2024 ──→   │   │
│   │    │            │            │            │            │              │   │
│   │    ▼            ▼            ▼            ▼            ▼              │   │
│   │ ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   │   │
│   │ │ 🏪  │   │ 🥟  │   │ ✨  │   │ 🏆  │   │ 🎨  │   │ 🍕  │   │   │
│   │ │Stall │   │Pivot │   │Kurkure│   │Award │   │Redesign│   │Pizza │   │   │
│   │ │Start │   │Momos │   │Launch│   │Winner│   │Premium│   │Launch│   │   │
│   │ └──────┘   └──────┘   └──────┘   └──────┘   └──────┘   └──────┘   │   │
│   │                                                                       │   │
│   │ Each milestone card:                                                  │   │
│   │ • Icon (64x64px, Orange)                                             │   │
│   │ • Date (Poppins, 16px, Bold, Orange)                                 │   │
│   │ • Title (Poppins, 20px, Bold, White)                                 │   │
│   │ • Description (Inter, 14px, Regular, Gray)                           │   │
│   │ • Hover: Scale up, glow effect                                       │   │
│   │ • Click: Expand with more details                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Stats Counter (Animated on scroll):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [2000+ Customers] [20+ Varieties] [4.9★ Rating] [1 Award]           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│   - Numbers count up from 0 when visible                                     │
│ • Expected: Horizontal scroll, click to expand, animated counters             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 💡 PHILOSOPHY & VALUES SECTION                                                │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "What We Believe In"                                        │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Featured Quote Box (Centered, large):                                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ "Why be an employee when you can be an employer?"                    │   │
│   │ • Font: Poppins, 36px, Bold, Italic, Black                           │   │
│   │ • Orange quotation marks (decorative)                                │   │
│   │ • Author: "- Dhruv Gupta, Founder" (Inter, 20px, Orange)            │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Core Values Grid (3 columns):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ VALUE CARD (repeated 6 times):                                        │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎯 Icon (80x80px, Orange, animated on hover)                   │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Value Title:                                                 │   │   │
│   │ │ "Quality Over Quantity"                                         │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description:                                                 │   │   │
│   │ │ "We never compromise on quality, even when demand is high"     │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 6 Core Values:                                                              │
│   1. Quality Over Quantity - "Quantity bhi Mast, Taste bhi Zabardast"       │
│   2. Innovation First - Sherghati's first Kurkure & Pizza momos             │
│   3. Hygiene Standards - FSSAI certified, premium kitchen                    │
│   4. Customer Satisfaction - 4.9/5 rating, 2000+ happy customers            │
│   5. Entrepreneurial Spirit - From employee mindset to employer vision       │
│   6. Community Impact - Creating jobs, inspiring local entrepreneurs         │
│ • Expected: Scroll animations, icon hover effects, card lift on hover        │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🏅 RECOGNITION & AWARDS SECTION                                               │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Recognition & Achievements"                                │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Awards Showcase (Centered):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MAIN AWARD CARD (Large, featured):                                   │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🏆 Award Image/Icon (200x200px, Gold trophy)                   │   │   │
│   │ │ • Animated: Rotate + glow effect                               │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Award Title:                                                 │   │   │
│   │ │ "Best Quality Food in City"                                    │   │   │
│   │ │ • Font: Poppins, 32px, Bold, Orange                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Awarded By:                                                  │   │   │
│   │ │ "District Magistrate Office, Sherghati"                        │   │   │
│   │ │ • Font: Inter, 20px, Regular, White                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📅 Date: "June 2024"                                           │   │   │
│   │ │ • Font: Inter, 18px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Certifications Row (3 badges):                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [FSSAI Certified] [Local Favorite 2024] [4.9★ Google Rating]        │   │
│   │ • Each badge: White bg, black text, icon + text                      │   │
│   │ • Hover: Orange border glow                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Trophy rotation animation, badge hover effects, glow animations   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 👥 TEAM SECTION                                                               │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Meet the Team"                                             │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Team Members Grid (3 columns on desktop, 1 on mobile):                     │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ TEAM MEMBER CARD:                                                     │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 👤 Photo (300x300px, circular, grayscale)                      │   │   │
│   │ │ • Hover: Color + scale up                                      │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Name: "Dhruv Gupta"                                          │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💼 Role: "Founder & Head Chef"                                 │   │   │
│   │ │ • Font: Inter, 18px, Regular, Orange                           │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Bio: Short description (2-3 lines)                          │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Photo hover effects, smooth transitions                           │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📞 CTA SECTION                                                                │
│ • Background: Orange gradient (#ffc241 to #ffb700)                            │
│ • Content (Centered):                                                         │
│   - Title: "Ready to Experience the Magic?"                                  │
│     (Poppins, 40px, Bold, Black)                                             │
│   - Subtitle: "Visit us today or order online"                               │
│     (Inter, 20px, Regular, Black)                                            │
│   - Buttons: [Order Now] [Visit Us] [View Menu]                             │
│     (Black bg, white text, side by side)                                     │
│ • Expected: Button hover effects, smooth transitions                          │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **ABOUT PAGE INTERACTIONS:**
- **Hero Parallax:** Background image moves slower than content
- **Chapter Animations:** Fade in as you scroll
- **Timeline:** Horizontal scroll, click to expand details
- **Stats Counter:** Animated count-up when visible
- **Award Trophy:** Rotation animation on hover
- **Team Photos:** Grayscale to color on hover
- **Mobile:** Stacked layout, touch-friendly timeline scroll

---

## 4. CONTACT PAGE (/contact)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 CONTACT HERO SECTION                                                       │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Page Title: "Get in Touch"                                                 │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "We'd love to hear from you!"                                    │
│   - Font: Inter, 24px, Regular, Orange color                                 │
│ • Quick Contact Row:                                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [📞 Call Us] [💬 WhatsApp] [📧 Email] [📍 Visit Us]                 │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│   - Each button: Orange border, white text, icon + text                     │
│ • Expected: Fade in animation on page load                                    │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📝 CONTACT FORM & INFO SECTION                                                │
│ • Background: White (#ffffff)                                                 │
│ • Layout: 2 columns (Form left 60%, Info right 40%)                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT COLUMN - CONTACT FORM:                                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Form Title: "Send us a Message"                                │   │   │
│   │ │ • Font: Poppins, 32px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Form Fields:                                                 │   │   │
│   │ │                                                                 │   │   │
│   │ │ 1. Name Field:                                                  │   │   │
│   │ │    • Label: "Your Name *" (Inter, 16px, Bold, Black)          │   │   │
│   │ │    • Input: Text field, placeholder "John Doe"                 │   │   │
│   │ │    • Required indicator: Red asterisk                          │   │   │
│   │ │                                                                 │   │   │
│   │ │ 2. Email Field:                                                 │   │   │
│   │ │    • Label: "Email Address *"                                  │   │   │
│   │ │    • Input: Email field, placeholder "john@example.com"        │   │   │
│   │ │    • Validation: Email format check                            │   │   │
│   │ │                                                                 │   │   │
│   │ │ 3. Phone Field:                                                 │   │   │
│   │ │    • Label: "Phone Number *"                                   │   │   │
│   │ │    • Input: Tel field, placeholder "+91 9999999999"           │   │   │
│   │ │    • Validation: 10-digit Indian number                        │   │   │
│   │ │                                                                 │   │   │
│   │ │ 4. Subject Dropdown:                                            │   │   │
│   │ │    • Label: "Subject *"                                        │   │   │
│   │ │    • Options: [General Inquiry] [Order Issue] [Catering]      │   │   │
│   │ │               [Franchise] [Feedback] [Other]                   │   │   │
│   │ │                                                                 │   │   │
│   │ │ 5. Message Field:                                               │   │   │
│   │ │    • Label: "Your Message *"                                   │   │   │
│   │ │    • Textarea: 6 rows, placeholder "Tell us more..."          │   │   │
│   │ │    • Character counter: "0/500" (bottom-right)                 │   │   │
│   │ │                                                                 │   │   │
│   │ │ 6. Checkbox:                                                    │   │   │
│   │ │    ☐ "I agree to receive updates and offers"                  │   │   │
│   │ │                                                                 │   │   │
│   │ │ 7. Submit Button:                                               │   │   │
│   │ │    "Send Message" (Full width, Orange bg, Black text, Large)  │   │   │
│   │ │    • Hover: Darker orange + lift effect                        │   │   │
│   │ │    • Loading state: Spinner + "Sending..."                     │   │   │
│   │ │    • Success: Green checkmark + "Message sent!"                │   │   │
│   │ │    • Error: Red X + "Failed. Please try again."                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ RIGHT COLUMN - CONTACT INFO:                                          │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Info Title: "Contact Information"                              │   │   │
│   │ │ • Font: Poppins, 28px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📍 Address:                                                     │   │   │
│   │ │ • Icon: Location pin (Orange, 24px)                           │   │   │
│   │ │ • Text: "Momo Magic, Naya Bazar, Near Post Office"            │   │   │
│   │ │         "Sherghati, Bihar 824211"                              │   │   │
│   │ │ • Font: Inter, 16px, Regular, Black                            │   │   │
│   │ │ • Button: "Get Directions" (Orange, small)                     │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📞 Phone:                                                       │   │   │
│   │ │ • Icon: Phone (Orange, 24px)                                   │   │   │
│   │ │ • Text: "+91 9955955191"                                       │   │   │
│   │ │ • Click to call functionality                                  │   │   │
│   │ │ • Button: "Call Now" (Orange, small)                           │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 WhatsApp:                                                    │   │   │
│   │ │ • Icon: WhatsApp (Orange, 24px)                                │   │   │
│   │ │ • Text: "+91 9955955191"                                       │   │   │
│   │ │ • Button: "Chat on WhatsApp" (Orange, small)                   │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📧 Email:                                                       │   │   │
│   │ │ • Icon: Email (Orange, 24px)                                   │   │   │
│   │ │ • Text: "info@momomagics.com"                                  │   │   │
│   │ │ • Click to email functionality                                 │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🕒 Business Hours:                                              │   │   │
│   │ │ • Icon: Clock (Orange, 24px)                                   │   │   │
│   │ │ • Text: "Monday - Sunday"                                      │   │   │
│   │ │         "10:00 AM - 10:00 PM"                                  │   │   │
│   │ │ • Status: "🟢 Open Now" (dynamic, updates in real-time)       │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🌐 Social Media:                                                │   │   │
│   │ │ • Title: "Follow Us" (Poppins, 20px, Bold)                    │   │   │
│   │ │ • Icons: [Facebook] [Instagram] [Twitter] [YouTube]           │   │   │
│   │ │ • Each icon: 40x40px, Orange, hover scale effect              │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Form validation, real-time error messages, success animation      │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🗺️ LOCATION MAP SECTION                                                      │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Find Us Here"                                              │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Google Maps Embed (Full width, 500px height):                              │
│   - Location: Momo Magic, Naya Bazar, Sherghati                             │
│   - Custom marker: Orange pin with Momos Magic logo                          │
│   - Features: Zoom controls, directions, street view                         │
│   - Style: Dark mode to match website theme                                  │
│ • Directions Button (Centered below map):                                     │
│   "Open in Google Maps" (Orange bg, Black text, Large)                       │
│ • Expected: Interactive map, click for directions, mobile-friendly            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ❓ FAQ SECTION                                                                │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Frequently Asked Questions"                                │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • FAQ Accordion (Max-width 800px, centered):                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ FAQ ITEM (repeated 8 times):                                          │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ ❓ Question (Clickable):                                        │   │   │
│   │ │ "What are your delivery hours?"                                │   │   │
│   │ │ • Font: Poppins, 20px, Bold, Black                             │   │   │
│   │ │ • Icon: [+] or [-] (right side, Orange)                        │   │   │
│   │ │ • Hover: Orange text color                                     │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 Answer (Expandable):                                         │   │   │
│   │ │ "We currently offer takeaway only. Delivery coming soon!"      │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ │ • Padding: 20px                                                │   │   │
│   │ │ • Animation: Smooth expand/collapse                            │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Common FAQs:                                                                │
│   1. What are your delivery hours?                                           │
│   2. Do you offer catering services?                                         │
│   3. Are all items 100% vegetarian?                                          │
│   4. How can I place a bulk order?                                           │
│   5. Do you have franchise opportunities?                                    │
│   6. What payment methods do you accept?                                     │
│   7. Can I customize my order?                                               │
│   8. How do I track my order?                                                │
│ • Expected: Smooth accordion animation, one open at a time                    │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **CONTACT PAGE INTERACTIONS:**
- **Form Validation:** Real-time validation, error messages
- **Submit States:** Loading spinner, success/error messages
- **Click to Call:** Direct phone dialing on mobile
- **WhatsApp:** Opens WhatsApp chat with pre-filled message
- **Map:** Interactive, zoom, directions, street view
- **FAQ Accordion:** Smooth expand/collapse, one at a time
- **Mobile:** Stacked layout, touch-friendly form fields

---
## 5. COMBO DEALS PAGE (/combo-deals)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 COMBO DEALS HERO SECTION                                                   │
│ • Background: Dark (#0a0a0a) with floating momos animation                    │
│ • Page Title: "Combo Deals & Special Offers"                                 │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "Save More, Taste More!"                                         │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Savings Badge: "Save up to 30%" (Large, animated pulse)                    │
│ • Expected: Floating momos animation, pulsing savings badge                   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎁 FEATURED COMBO SECTION                                                     │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Today's Special Combos"                                    │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Featured Combo Card (Large, centered):                                      │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MEGA COMBO CARD:                                                      │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Combo Image (800x500px, high quality)                       │   │   │
│   │ │ • Badge: "BEST VALUE" (top-right, orange)                      │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Combo Name: "Magic Family Pack"                             │   │   │
│   │ │ • Font: Poppins, 36px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Includes:                                                    │   │   │
│   │ │ • 10pc Steamed Momos                                           │   │   │
│   │ │ • 10pc Kurkure Momos                                           │   │   │
│   │ │ • 10pc Pizza Momos                                             │   │   │
│   │ │ • 3 Dips (Schezwan, Mayo, Green Chutney)                      │   │   │
│   │ │ • 2 Cold Drinks                                                │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Pricing:                                                     │   │   │
│   │ │ • Original: ₹550 (strikethrough, gray)                        │   │   │
│   │ │ • Combo Price: ₹399 (Large, Orange, Bold)                     │   │   │
│   │ │ • Savings: "Save ₹151 (27%)" (Green badge)                    │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Action Buttons:                                              │   │   │
│   │ │ [Add to Cart] [Customize Combo]                                │   │   │
│   │ │ • Orange bg, Black text, Large                                 │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Hover effects, smooth transitions, add to cart animation          │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎉 ALL COMBOS GRID SECTION                                                    │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "All Combo Deals"                                           │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Filter Tabs:                                                                │
│   [All] [Family Packs] [Duo Deals] [Party Combos] [Student Specials]        │
│   - Active tab: Orange underline                                             │
│ • Combo Cards Grid (3 columns):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ COMBO CARD (repeated for each combo):                                │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Image (400x300px)                                            │   │   │
│   │ │ • Badge: "NEW" or "POPULAR" (top-left)                         │   │   │
│   │ │ • Savings badge: "Save 25%" (top-right, green)                 │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Name: "Duo Delight Pack"                                     │   │   │
│   │ │ • Font: Poppins, 24px, Bold, White                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Quick Description: "Perfect for 2 people"                   │   │   │
│   │ │ • Font: Inter, 14px, Regular, Gray                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Price: ₹199 (was ₹250)                                      │   │   │
│   │ │ • Font: Poppins, 28px, Bold, Orange                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Button: "Add to Cart"                                        │   │   │
│   │ │ • Full width, Orange bg, hover effect                          │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 12 Combo Options:                                                           │
│   1. Magic Family Pack (₹399, serves 4-5)                                   │
│   2. Duo Delight Pack (₹199, serves 2)                                      │
│   3. Party Mega Combo (₹899, serves 10-12)                                  │
│   4. Student Special (₹99, serves 1)                                        │
│   5. Kurkure Lovers Pack (₹299, 20pc Kurkure)                              │
│   6. Pizza Momos Feast (₹399, 20pc Pizza)                                  │
│   7. Mixed Flavors Combo (₹349, variety pack)                              │
│   8. Weekend Special (₹449, premium selection)                             │
│   9. Office Lunch Pack (₹599, serves 6-8)                                  │
│   10. Birthday Party Combo (₹1299, serves 15-20)                           │
│   11. Midnight Munchies (₹149, late night special)                         │
│   12. Healthy Steamed Pack (₹249, all steamed)                             │
│ • Expected: Filter animations, card hover effects, smooth grid transitions    │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎊 CUSTOM COMBO BUILDER SECTION                                               │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Build Your Own Combo"                                      │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Interactive Builder (3-step process):                                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STEP 1: Choose Base (Select momos type & quantity)                   │   │
│   │ STEP 2: Add Extras (Dips, drinks, sides)                             │   │
│   │ STEP 3: Review & Save (See total, apply discount)                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Live Price Calculator (right sidebar):                                      │
│   - Shows running total                                                       │
│   - Displays auto-applied discounts                                           │
│   - Savings indicator                                                         │
│ • Expected: Real-time price updates, smooth step transitions                  │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⏰ LIMITED TIME OFFERS SECTION                                                │
│ • Background: Orange gradient (#ffc241 to #ffb700)                            │
│ • Section Title: "Flash Deals - Limited Time!"                               │
│   - Font: Poppins, 40px, Bold, Black color                                   │
│ • Countdown Timer (Large, centered):                                          │
│   [02:45:30] (Hours:Minutes:Seconds)                                         │
│   - Font: Poppins, 48px, Bold, Black                                         │
│   - Animated: Numbers flip on change                                          │
│ • Flash Deal Cards (Horizontal scroll):                                       │
│   - 5 limited-time offers                                                     │
│   - Each with countdown                                                       │
│   - "Grab Now" CTA buttons                                                    │
│ • Expected: Live countdown, urgency animations, scroll effects                │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **COMBO DEALS PAGE INTERACTIONS:**
- **Filter Tabs:** Instant filtering, smooth transitions
- **Custom Builder:** Real-time price calculation, step navigation
- **Countdown Timer:** Live updates, flip animations
- **Add to Cart:** Success animation, cart update
- **Mobile:** Swipe for flash deals, touch-friendly builder

---
## 6. CATERING PAGE (/catering)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 CATERING HERO SECTION                                                      │
│ • Background: Full-width image of catering setup (with overlay)               │
│ • Overlay: Black gradient (bottom to top, 80% to 20% opacity)                 │
│ • Page Title: "Catering Services"                                            │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "Make Your Event Magical with Our Momos"                         │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Quick Stats Row:                                                            │
│   [500+ Events] [10,000+ Guests Served] [4.9★ Rating]                        │
│ • CTA: "Get Quote" (Large, Orange button)                                    │
│ • Expected: Parallax effect, fade-in animations                               │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎉 EVENT TYPES SECTION                                                        │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Perfect for Every Occasion"                                │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Event Type Cards (4 columns):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ EVENT CARD (repeated 8 times):                                        │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎊 Icon (100x100px, Orange)                                     │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Event Type: "Corporate Events"                               │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description: "Office parties, meetings, conferences"        │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Starting at: "₹50/person"                                   │   │   │
│   │ │ • Font: Poppins, 20px, Bold, Orange                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Button: "Get Quote"                                          │   │   │
│   │ │ • Orange border, hover fill effect                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 8 Event Types:                                                              │
│   1. Corporate Events (₹50/person)                                           │
│   2. Birthday Parties (₹40/person)                                           │
│   3. Wedding Functions (₹60/person)                                          │
│   4. College Fests (₹35/person)                                              │
│   5. Family Gatherings (₹45/person)                                          │
│   6. Religious Ceremonies (₹40/person)                                       │
│   7. Sports Events (₹35/person)                                              │
│   8. Community Events (₹30/person)                                           │
│ • Expected: Card hover effects, smooth transitions                            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📦 CATERING PACKAGES SECTION                                                  │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Choose Your Package"                                       │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Package Cards (3 columns):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PACKAGE CARD:                                                         │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🏷️ Badge: "MOST POPULAR" (top, orange)                         │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Package Name: "Premium Package"                              │   │   │
│   │ │ • Font: Poppins, 32px, Bold, White                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Price: "₹60/person"                                          │   │   │
│   │ │ • Font: Poppins, 40px, Bold, Orange                            │   │   │
│   │ │ • Minimum: 50 people                                           │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ✅ Includes:                                                    │   │   │
│   │ │ • 3 Momos varieties (Steamed, Kurkure, Pizza)                 │   │   │
│   │ │ • 3 Dips (Schezwan, Mayo, Green Chutney)                      │   │   │
│   │ │ • Beverages (Cold drinks/Tea)                                  │   │   │
│   │ │ • Disposable plates & cutlery                                  │   │   │
│   │ │ • On-site serving staff                                        │   │   │
│   │ │ • Setup & cleanup                                              │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🛒 Button: "Select Package"                                     │   │   │
│   │ │ • Full width, Orange bg, Large                                 │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 3 Packages:                                                                 │
│   1. Basic Package (₹40/person, min 30 people)                              │
│   2. Premium Package (₹60/person, min 50 people)                            │
│   3. Deluxe Package (₹80/person, min 100 people)                            │
│ • Expected: Package comparison, hover effects, selection animation            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📝 CATERING QUOTE FORM SECTION                                                │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Request a Quote"                                           │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Form Layout (2 columns):                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT COLUMN - Event Details:                                          │   │
│   │ • Event Type (Dropdown)                                               │   │
│   │ • Event Date (Date picker)                                            │   │
│   │ • Event Time (Time picker)                                            │   │
│   │ • Number of Guests (Number input)                                     │   │
│   │ • Event Location (Text + Map picker)                                  │   │
│   │ • Package Selection (Radio buttons)                                   │   │
│   │                                                                       │   │
│   │ RIGHT COLUMN - Contact & Preferences:                                 │   │
│   │ • Name (Text input)                                                   │   │
│   │ • Phone (Tel input)                                                   │   │
│   │ • Email (Email input)                                                 │   │
│   │ • Special Requirements (Textarea)                                     │   │
│   │ • Dietary Preferences (Checkboxes)                                    │   │
│   │ • Budget Range (Slider)                                               │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Live Quote Calculator (Sidebar):                                            │
│   - Shows estimated cost                                                      │
│   - Updates in real-time                                                      │
│   - Breakdown by items                                                        │
│ • Submit Button: "Get Instant Quote" (Full width, Orange, Large)             │
│ • Expected: Real-time validation, instant quote calculation                   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📸 PAST EVENTS GALLERY SECTION                                                │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Our Catering in Action"                                    │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Photo Grid (Masonry layout):                                                │
│   - 20+ event photos                                                          │
│   - Hover: Overlay with event details                                         │
│   - Click: Lightbox view                                                      │
│ • Filter Tags: [All] [Corporate] [Weddings] [Parties] [Festivals]           │
│ • Expected: Smooth filtering, lightbox gallery, lazy loading                  │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ TESTIMONIALS SECTION                                                       │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "What Our Clients Say"                                      │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Testimonial Carousel:                                                       │
│   - Auto-rotating reviews                                                     │
│   - Client name, event type, rating                                           │
│   - Photo + detailed review                                                   │
│ • Expected: Auto-rotate, swipe navigation, smooth transitions                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **CATERING PAGE INTERACTIONS:**
- **Quote Form:** Real-time cost calculation, validation
- **Package Selection:** Compare packages, highlight differences
- **Date Picker:** Check availability, suggest alternatives
- **Gallery:** Filter by event type, lightbox view
- **Mobile:** Touch-friendly form, swipe gallery

---
## 7. GALLERY PAGE (/gallery)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 GALLERY HERO SECTION                                                       │
│ • Background: Dark (#0a0a0a) with subtle pattern                              │
│ • Page Title: "Our Momos Gallery"                                            │
│   - Font: Poppins, 64px, Bold, White color                                   │
│   - Centered alignment                                                        │
│ • Subtitle: "A Visual Journey Through Momos Magic"                           │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Photo Count: "500+ Photos" (Badge, animated counter)                       │
│ • Expected: Fade-in animations, counter animation                             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎨 FILTER & SORT SECTION                                                      │
│ • Background: White (#ffffff)                                                 │
│ • Filter Categories (Horizontal tabs):                                        │
│   [All] [Food] [Kitchen] [Events] [Customers] [Behind the Scenes]           │
│   - Active tab: Orange background, white text                                │
│   - Inactive: White background, black text, orange border                    │
│ • Sort Options (Dropdown, right side):                                        │
│   [Latest First] [Oldest First] [Most Liked] [Most Viewed]                  │
│ • View Toggle (Icon buttons):                                                 │
│   [Grid View] [Masonry View] [List View]                                    │
│ • Expected: Instant filtering, smooth transitions                             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📸 PHOTO GRID SECTION                                                         │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Masonry Grid Layout (Responsive):                                           │
│   - Desktop: 4 columns                                                        │
│   - Tablet: 3 columns                                                         │
│   - Mobile: 2 columns                                                         │
│ • Photo Card (repeated for each image):                                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PHOTO CARD:                                                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🖼️ Image (Variable height, maintains aspect ratio)             │   │   │
│   │ │ • Lazy loading enabled                                         │   │   │
│   │ │ • Hover: Zoom effect + overlay                                 │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ OVERLAY (appears on hover):                                    │   │   │
│   │ │ • 📝 Title: "Kurkure Momos Preparation"                        │   │   │
│   │ │ • 📅 Date: "15 Jan 2025"                                       │   │   │
│   │ │ • 👁️ Views: "1.2K"                                             │   │   │
│   │ │ • ❤️ Likes: "245"                                              │   │   │
│   │ │ • 🔍 Button: "View Full Size"                                  │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Photo Categories:                                                           │
│   1. Food Photos (200+ images):                                              │
│      - Steamed momos close-ups                                               │
│      - Kurkure momos with steam                                              │
│      - Pizza momos plating                                                   │
│      - Combo platters                                                        │
│      - Dips and sauces                                                       │
│   2. Kitchen Photos (100+ images):                                           │
│      - Preparation process                                                   │
│      - Cooking equipment                                                     │
│      - Hygiene standards                                                     │
│      - Team at work                                                          │
│   3. Events Photos (150+ images):                                            │
│      - Catering setups                                                       │
│      - Birthday parties                                                      │
│      - Corporate events                                                      │
│      - Wedding functions                                                     │
│   4. Customer Photos (50+ images):                                           │
│      - Happy customers                                                       │
│      - Food reviews                                                          │
│      - Testimonial moments                                                   │
│ • Expected: Lazy loading, smooth hover effects, lightbox on click             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 LIGHTBOX VIEWER (Opens on photo click)                                     │
│ • Full-screen overlay (Black background, 95% opacity)                         │
│ • Large Image Display:                                                        │
│   - Centered, max 90% viewport                                                │
│   - High-resolution image                                                     │
│   - Pinch to zoom (mobile)                                                    │
│ • Navigation Controls:                                                        │
│   - [← Previous] [Next →] buttons (sides)                                    │
│   - Thumbnail strip (bottom)                                                  │
│   - [X Close] button (top-right)                                             │
│ • Image Info Panel (bottom):                                                  │
│   - Title, date, category                                                     │
│   - Like button, share button                                                 │
│   - Download button (high-res)                                                │
│ • Keyboard Navigation:                                                        │
│   - Arrow keys: Previous/Next                                                 │
│   - Escape: Close                                                             │
│   - Space: Toggle info panel                                                  │
│ • Expected: Smooth transitions, swipe gestures (mobile)                       │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📱 INSTAGRAM FEED SECTION                                                     │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Follow Us on Instagram"                                    │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Instagram Handle: "@momomagicsherghati"                                    │
│   - Font: Inter, 24px, Regular, Orange color                                 │
│ • Live Instagram Feed (Embedded):                                             │
│   - Latest 12 posts                                                           │
│   - Grid layout (4 columns)                                                   │
│   - Click: Opens Instagram post                                               │
│ • Follow Button: "Follow on Instagram"                                       │
│   - Orange bg, white text, Instagram icon                                     │
│ • Expected: Live feed updates, smooth grid layout                             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📤 USER UPLOAD SECTION                                                        │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Share Your Momos Magic Moment"                             │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Upload Form:                                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • 📸 Photo Upload (Drag & drop or click)                              │   │
│   │ • 📝 Caption (Text input, 200 chars max)                              │   │
│   │ • 🏷️ Category (Dropdown selection)                                   │   │
│   │ • 📧 Email (Optional, for notification)                               │   │
│   │ • 🛒 Submit Button: "Share Your Photo"                                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Guidelines:                                                                 │
│   - Max file size: 5MB                                                        │
│   - Formats: JPG, PNG, HEIC                                                   │
│   - Review: Photos reviewed before publishing                                 │
│ • Expected: Drag-drop upload, preview before submit                           │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🏆 FEATURED PHOTOS SECTION                                                    │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Featured This Month"                                       │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Featured Photo Cards (Large, 3 columns):                                    │
│   - Editor's picks                                                            │
│   - Most liked photos                                                         │
│   - Award-winning shots                                                       │
│ • Each card includes:                                                         │
│   - Large image                                                               │
│   - Photographer credit                                                       │
│   - Story behind the photo                                                    │
│   - Social share buttons                                                      │
│ • Expected: Hover effects, smooth transitions                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **GALLERY PAGE INTERACTIONS:**
- **Filter Tabs:** Instant filtering, smooth category switching
- **Lightbox:** Full-screen view, keyboard navigation, swipe gestures
- **Photo Upload:** Drag-drop, preview, validation
- **Instagram Feed:** Live updates, click to open Instagram
- **Mobile:** Touch-friendly, swipe navigation, pinch to zoom

---
## 8. FRANCHISE PAGE (/franchise)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 FRANCHISE HERO SECTION                                                     │
│ • Background: Split screen design                                             │
│   - Left: Success story video/image                                           │
│   - Right: Franchise opportunity content                                      │
│ • Page Title: "Join the Momos Magic Family"                                  │
│   - Font: Poppins, 64px, Bold, White color                                   │
│ • Subtitle: "Own Your Success Story - Franchise Opportunities"               │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Key Stats Row:                                                              │
│   [₹5L+ Monthly Revenue] [95% Success Rate] [50+ Franchises]                │
│ • CTA Buttons:                                                                │
│   [Download Brochure] [Schedule Meeting]                                     │
│   - Orange bg, white text, large                                              │
│ • Expected: Split-screen animation, stats counter animation                   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 💼 WHY FRANCHISE WITH US SECTION                                              │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Why Choose Momos Magic Franchise?"                         │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Benefits Grid (3 columns, 9 cards):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BENEFIT CARD (repeated 9 times):                                      │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎯 Icon (80x80px, Orange)                                       │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Benefit Title: "Proven Business Model"                       │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description: "Tested and successful model with..."          │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 9 Key Benefits:                                                             │
│   1. Proven Business Model (95% success rate)                                │
│   2. Complete Training Program (2-week intensive)                            │
│   3. Marketing Support (Digital + Traditional)                               │
│   4. Supply Chain Management (Direct from HQ)                                │
│   5. Exclusive Territory Rights (Protected area)                             │
│   6. Brand Recognition (Award-winning brand)                                 │
│   7. Ongoing Support (24/7 helpline)                                         │
│   8. Low Investment (Starting ₹10L)                                          │
│   9. Quick ROI (12-18 months)                                                │
│ • Expected: Card hover effects, smooth transitions                            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 💰 INVESTMENT BREAKDOWN SECTION                                               │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Investment & Returns"                                      │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Investment Calculator (Interactive):                                        │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT PANEL - Investment Details:                                      │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 💵 Total Investment: ₹10-15 Lakhs                              │   │   │
│   │ │ • Franchise Fee: ₹2L                                           │   │   │
│   │ │ • Setup Cost: ₹5-8L                                            │   │   │
│   │ │ • Initial Inventory: ₹1L                                       │   │   │
│   │ │ • Working Capital: ₹2-4L                                       │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📊 Monthly Expenses: ₹80K-1.2L                                 │   │   │
│   │ │ • Rent: ₹30-50K                                                │   │   │
│   │ │ • Staff: ₹25-40K                                               │   │   │
│   │ │ • Utilities: ₹10-15K                                           │   │   │
│   │ │ • Supplies: ₹15-20K                                            │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ RIGHT PANEL - Revenue Projections:                                    │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 💰 Expected Monthly Revenue: ₹3-5L                             │   │   │
│   │ │ • Daily Sales: ₹10-15K                                         │   │   │
│   │ │ • Average Order: ₹150                                          │   │   │
│   │ │ • Daily Customers: 70-100                                      │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📈 Profit Margins: 35-40%                                      │   │   │
│   │ │ • Monthly Profit: ₹1.5-2.5L                                   │   │   │
│   │ │ • Annual Profit: ₹18-30L                                      │   │   │
│   │ │ • ROI Period: 12-18 months                                    │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Interactive Slider: Adjust location type to see projections                 │
│   [Tier 1 City] [Tier 2 City] [Tier 3 City] [Small Town]                   │
│ • Expected: Real-time calculation updates, smooth transitions                 │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📋 FRANCHISE PROCESS SECTION                                                  │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Simple 7-Step Process"                                     │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Timeline Visualization (Vertical):                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STEP 1: Initial Inquiry                                               │   │
│   │ • Duration: Day 1                                                     │   │
│   │ • Action: Fill application form                                       │   │
│   │ • Outcome: Receive franchise brochure                                 │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 2: Preliminary Discussion                                        │   │
│   │ • Duration: Day 2-3                                                   │   │
│   │ • Action: Phone/video call with team                                  │   │
│   │ • Outcome: Understand requirements                                    │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 3: Site Visit & Evaluation                                       │   │
│   │ • Duration: Week 1                                                    │   │
│   │ • Action: Visit proposed location                                     │   │
│   │ • Outcome: Site approval/suggestions                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 4: Agreement Signing                                             │   │
│   │ • Duration: Week 2                                                    │   │
│   │ • Action: Sign franchise agreement                                    │   │
│   │ • Outcome: Franchise rights granted                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 5: Setup & Training                                              │   │
│   │ • Duration: Week 3-4                                                  │   │
│   │ • Action: Store setup + staff training                                │   │
│   │ • Outcome: Ready for launch                                           │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 6: Grand Opening                                                 │   │
│   │ • Duration: Week 5                                                    │   │
│   │ • Action: Launch with marketing support                               │   │
│   │ • Outcome: Start operations                                           │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 7: Ongoing Support                                               │   │
│   │ • Duration: Continuous                                                │   │
│   │ • Action: Regular check-ins, updates                                  │   │
│   │ • Outcome: Sustained growth                                           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Scroll-triggered animations, step highlighting                    │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎓 TRAINING & SUPPORT SECTION                                                 │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Comprehensive Training Program"                            │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Training Modules (Accordion style):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MODULE 1: Food Preparation (5 days)                                   │   │
│   │ • Momos making techniques                                             │   │
│   │ • Quality control standards                                           │   │
│   │ • Hygiene & safety protocols                                          │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MODULE 2: Operations Management (3 days)                              │   │
│   │ • Daily operations workflow                                           │   │
│   │ • Inventory management                                                │   │
│   │ • Staff management                                                    │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MODULE 3: Customer Service (2 days)                                   │   │
│   │ • Service excellence                                                  │   │
│   │ • Complaint handling                                                  │   │
│   │ • Customer retention                                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MODULE 4: Marketing & Sales (2 days)                                  │   │
│   │ • Local marketing strategies                                          │   │
│   │ • Social media management                                             │   │
│   │ • Promotional campaigns                                               │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MODULE 5: Financial Management (2 days)                               │   │
│   │ • Bookkeeping basics                                                  │   │
│   │ • Profit optimization                                                 │   │
│   │ • Cost control                                                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Ongoing Support Features:                                                   │
│   - 24/7 helpline                                                             │
│   - Monthly webinars                                                          │
│   - Quarterly site visits                                                     │
│   - Annual conferences                                                        │
│ • Expected: Accordion expand/collapse, smooth transitions                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ SUCCESS STORIES SECTION                                                    │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Franchisee Success Stories"                                │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Success Story Cards (Carousel):                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STORY CARD:                                                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 📸 Franchisee Photo + Store Photo (Side by side)               │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Name: "Rajesh Kumar"                                         │   │   │
│   │ │ • Location: "Patna, Bihar"                                     │   │   │
│   │ │ • Franchise Since: "Jan 2024"                                  │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 Testimonial: "Joining Momos Magic was the best..."          │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📊 Results:                                                     │   │   │
│   │ │ • Monthly Revenue: ₹4.5L                                       │   │   │
│   │ │ • ROI Achieved: 14 months                                      │   │   │
│   │ │ • Staff Employed: 6                                            │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 10 Success Stories (Auto-rotating carousel)                                 │
│ • Expected: Auto-rotate, swipe navigation, smooth transitions                 │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📝 FRANCHISE APPLICATION FORM SECTION                                         │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Apply for Franchise"                                       │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Multi-Step Form (3 steps):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STEP 1: Personal Information                                          │   │
│   │ • Full Name                                                           │   │
│   │ • Email                                                               │   │
│   │ • Phone                                                               │   │
│   │ • Current Occupation                                                  │   │
│   │ • Business Experience                                                 │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 2: Location & Investment                                         │   │
│   │ • Preferred City/Location                                             │   │
│   │ • Available Space (sq ft)                                             │   │
│   │ • Investment Capacity                                                 │   │
│   │ • Preferred Timeline                                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 3: Additional Details                                            │   │
│   │ • Why Momos Magic? (Textarea)                                         │   │
│   │ • Previous Business Experience                                        │   │
│   │ • References (Optional)                                               │   │
│   │ • Upload Documents (ID, Address proof)                                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Progress Indicator (Top): [1] ━━ [2] ━━ [3]                               │
│ • Submit Button: "Submit Application" (Full width, Orange, Large)            │
│ • Expected: Step navigation, validation, file upload preview                  │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📞 CONTACT FRANCHISE TEAM SECTION                                             │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Have Questions? Let's Talk!"                               │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Contact Options (3 columns):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ OPTION 1: Phone                                                       │   │
│   │ • Icon: Phone (Orange)                                                │   │
│   │ • Number: +91 9955955191                                              │   │
│   │ • Timing: Mon-Sat, 10AM-7PM                                           │   │
│   │ • Button: "Call Now"                                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ OPTION 2: Email                                                       │   │
│   │ • Icon: Email (Orange)                                                │   │
│   │ • Email: franchise@momomagic.com                                      │   │
│   │ • Response: Within 24 hours                                           │   │
│   │ • Button: "Send Email"                                                │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ OPTION 3: Schedule Meeting                                            │   │
│   │ • Icon: Calendar (Orange)                                             │   │
│   │ • Action: Book video call                                             │   │
│   │ • Duration: 30 minutes                                                │   │
│   │ • Button: "Book Meeting"                                              │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Click-to-call, email client open, calendar integration            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 DOWNLOAD RESOURCES SECTION                                                 │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Download Franchise Resources"                              │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Resource Cards (2 columns):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ RESOURCE 1: Franchise Brochure                                        │   │
│   │ • PDF icon, file size, page count                                     │   │
│   │ • Button: "Download PDF"                                              │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RESOURCE 2: Investment Calculator                                     │   │
│   │ • Excel icon, file size                                               │   │
│   │ • Button: "Download Excel"                                            │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RESOURCE 3: Sample Agreement                                          │   │
│   │ • PDF icon, file size                                                 │   │
│   │ • Button: "Download PDF"                                              │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RESOURCE 4: FAQ Document                                              │   │
│   │ • PDF icon, file size                                                 │   │
│   │ • Button: "Download PDF"                                              │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Direct download, file size display, download tracking             │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **FRANCHISE PAGE INTERACTIONS:**
- **Investment Calculator:** Real-time projections based on location
- **Application Form:** Multi-step with validation, file upload
- **Timeline:** Scroll-triggered animations
- **Success Stories:** Auto-rotating carousel, swipe navigation
- **Contact Options:** Click-to-call, email, calendar booking
- **Mobile:** Touch-friendly form, swipe carousel, responsive layout

---
## 9. DOWNLOAD APP PAGE (/download-app)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 APP HERO SECTION                                                           │
│ • Background: Gradient (Black to Dark Orange)                                 │
│ • Layout: Split screen (60/40)                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT SIDE (60%):                                                      │   │
│   │ • Page Title: "Order Momos Magic on the Go!"                         │   │
│   │   - Font: Poppins, 64px, Bold, White color                           │   │
│   │ • Subtitle: "Download our app for exclusive deals & faster orders"   │   │
│   │   - Font: Inter, 24px, Regular, Orange color                         │   │
│   │ • App Features (Quick list):                                          │   │
│   │   ✓ Order in 30 seconds                                               │   │
│   │   ✓ Track live delivery                                               │   │
│   │   ✓ Exclusive app-only deals                                          │   │
│   │   ✓ Save favorite orders                                              │   │
│   │   ✓ Earn loyalty points                                               │   │
│   │ • Download Buttons (Large):                                           │   │
│   │   [Download on App Store] [Get it on Google Play]                    │   │
│   │   - Standard store buttons, large size                                │   │
│   │ • QR Code: "Scan to Download"                                         │   │
│   │   - 200x200px, centered below buttons                                 │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RIGHT SIDE (40%):                                                     │   │
│   │ • App Mockup (Floating phone):                                        │   │
│   │   - 3D animated phone mockup                                          │   │
│   │   - Showing app homepage                                              │   │
│   │   - Subtle floating animation                                         │   │
│   │   - Screen carousel (auto-rotating)                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Parallax effect, phone floating animation, screen carousel        │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ✨ KEY FEATURES SECTION                                                       │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Everything You Need in One App"                            │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Features Grid (3 columns, 9 features):                                      │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ FEATURE CARD (repeated 9 times):                                      │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎯 Animated Icon (100x100px, Orange)                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Feature Name: "Quick Ordering"                               │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description: "Order your favorite momos in just..."         │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 9 Key Features:                                                             │
│   1. Quick Ordering (30-second checkout)                                     │
│   2. Live Tracking (Real-time order tracking)                                │
│   3. Multiple Payments (UPI, Cards, Wallets, COD)                           │
│   4. Saved Addresses (Quick address selection)                               │
│   5. Favorite Orders (Reorder with one tap)                                  │
│   6. Loyalty Program (Earn points, get rewards)                              │
│   7. Exclusive Deals (App-only discounts)                                    │
│   8. Order History (View past orders)                                        │
│   9. Push Notifications (Order updates, offers)                              │
│ • Expected: Icon animations on scroll, card hover effects                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📱 APP SCREENSHOTS SECTION                                                    │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Explore the App"                                           │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Screenshot Carousel (Horizontal scroll):                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ SCREENSHOT CARD (repeated for each screen):                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 📱 Phone Frame (400x800px)                                      │   │   │
│   │ │ • Screenshot inside frame                                      │   │   │
│   │ │ • Realistic phone bezel                                        │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Screen Name: "Home Screen"                                   │   │   │
│   │ │ • Font: Poppins, 20px, Bold, White                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description: "Browse menu, see offers..."                   │   │   │
│   │ │ • Font: Inter, 14px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 10 App Screens:                                                             │
│   1. Splash Screen (Logo animation)                                          │
│   2. Home Screen (Menu, offers, categories)                                  │
│   3. Menu Screen (Full menu with filters)                                    │
│   4. Product Detail (Item details, customization)                            │
│   5. Cart Screen (Review order, apply coupons)                               │
│   6. Checkout Screen (Address, payment)                                      │
│   7. Order Tracking (Live map tracking)                                      │
│   8. Order History (Past orders)                                             │
│   9. Profile Screen (User details, settings)                                 │
│   10. Loyalty Screen (Points, rewards)                                       │
│ • Navigation: Swipe/drag, dots indicator                                      │
│ • Expected: Smooth horizontal scroll, snap to center, auto-play               │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎁 APP EXCLUSIVE OFFERS SECTION                                               │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Exclusive App Benefits"                                    │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Offers Grid (2 columns):                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ OFFER CARD:                                                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎁 Icon (Large, Orange)                                         │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Offer Title: "First Order Discount"                          │   │   │
│   │ │ • Font: Poppins, 28px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💰 Discount: "50% OFF"                                          │   │   │
│   │ │ • Font: Poppins, 48px, Bold, Orange                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Details: "Get 50% off on your first order..."              │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🏷️ Coupon Code: "FIRST50"                                      │   │   │
│   │ │ • Copy button, dashed border                                   │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 6 Exclusive Offers:                                                         │
│   1. First Order: 50% OFF (Code: FIRST50)                                   │
│   2. Referral Bonus: ₹100 for you & friend                                  │
│   3. Loyalty Points: 10% back on every order                                │
│   4. Birthday Special: Free momos on birthday                                │
│   5. Weekly Deals: New offers every Monday                                   │
│   6. Free Delivery: On orders above ₹200                                    │
│ • Expected: Copy code animation, hover effects                                │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ USER REVIEWS SECTION                                                       │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "What Users Are Saying"                                     │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • App Store Ratings (Top):                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ [App Store] 4.8★ (2.5K reviews) | [Play Store] 4.7★ (5K reviews)    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Review Cards (Carousel):                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ REVIEW CARD:                                                          │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ ⭐⭐⭐⭐⭐ (5 stars)                                              │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 Review: "Best food delivery app! Super fast..."             │   │   │
│   │ │ • Font: Inter, 16px, Regular, White                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 👤 User: "Priya S."                                             │   │   │
│   │ │ • Date: "2 days ago"                                           │   │   │
│   │ │ • Platform: "iOS"                                              │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 20 Featured Reviews (Auto-rotating)                                         │
│ • Expected: Auto-rotate, swipe navigation, smooth transitions                 │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📊 APP STATS SECTION                                                          │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Join Thousands of Happy Users"                             │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Stats Grid (4 columns):                                                     │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STAT 1: Downloads                                                     │   │
│   │ • Number: "50,000+"                                                   │   │
│   │ • Label: "App Downloads"                                              │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STAT 2: Orders                                                        │   │
│   │ • Number: "1,00,000+"                                                 │   │
│   │ • Label: "Orders Delivered"                                           │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STAT 3: Rating                                                        │   │
│   │ • Number: "4.7★"                                                      │   │
│   │ • Label: "Average Rating"                                             │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STAT 4: Users                                                         │   │
│   │ • Number: "25,000+"                                                   │   │
│   │ • Label: "Active Users"                                               │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Counter animation on scroll, number increment effect              │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📱 DOWNLOAD CTA SECTION                                                       │
│ • Background: Orange gradient (#ffc241 to #ffb700)                            │
│ • Section Title: "Ready to Experience the Magic?"                            │
│   - Font: Poppins, 56px, Bold, Black color                                   │
│ • Subtitle: "Download now and get 50% off your first order!"                 │
│   - Font: Inter, 24px, Regular, Black color                                  │
│ • Download Buttons (Extra Large):                                             │
│   [Download on App Store] [Get it on Google Play]                            │
│   - Standard store buttons, extra large size                                  │
│ • QR Code (Large, centered):                                                  │
│   - 300x300px                                                                 │
│   - Label: "Scan to Download"                                                 │
│ • Social Proof: "Join 50,000+ users"                                         │
│ • Expected: Pulsing buttons, QR code animation                                │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ❓ FAQ SECTION                                                                │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Frequently Asked Questions"                                │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • FAQ Accordion (10 questions):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Q1: Is the app free to download?                                      │   │
│   │ A: Yes, completely free on both iOS and Android                       │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q2: What are the payment options?                                     │   │
│   │ A: UPI, Credit/Debit Cards, Wallets, COD                             │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q3: Is there a minimum order value?                                   │   │
│   │ A: No minimum order, but free delivery above ₹200                    │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q4: How do I track my order?                                          │   │
│   │ A: Real-time tracking available in the app                            │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q5: Can I schedule orders?                                            │   │
│   │ A: Yes, schedule up to 7 days in advance                             │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q6: How do loyalty points work?                                       │   │
│   │ A: Earn 10% back on every order, redeem anytime                      │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q7: Can I cancel my order?                                            │   │
│   │ A: Yes, free cancellation before preparation starts                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q8: Is my data secure?                                                │   │
│   │ A: Yes, 256-bit encryption, no data sharing                          │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q9: What's the delivery time?                                         │   │
│   │ A: Average 30-45 minutes, varies by location                         │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ Q10: How do I contact support?                                        │   │
│   │ A: In-app chat, phone, email - 24/7 support                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Accordion expand/collapse, smooth transitions                     │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **DOWNLOAD APP PAGE INTERACTIONS:**
- **Download Buttons:** Direct links to App Store & Play Store
- **QR Code:** Scannable, opens app store on mobile
- **Screenshot Carousel:** Swipe navigation, auto-play
- **Coupon Codes:** Click to copy, success animation
- **FAQ Accordion:** Expand/collapse, one at a time
- **Mobile:** Touch-friendly, optimized for mobile viewing

---
## 10. LEGAL PAGES (/legal/*)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 LEGAL HUB PAGE (/legal)                                                    │
│ • Background: White (#ffffff)                                                 │
│ • Page Title: "Legal & Policies"                                             │
│   - Font: Poppins, 64px, Bold, Black color                                   │
│ • Subtitle: "Transparency & Trust"                                           │
│   - Font: Inter, 24px, Regular, Orange color                                 │
│ • Legal Documents Grid (2 columns, 6 cards):                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ DOCUMENT CARD:                                                        │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 📄 Icon (Large, Orange)                                         │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Document Title: "Privacy Policy"                             │   │   │
│   │ │ • Font: Poppins, 28px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Summary: "How we collect, use, and protect..."             │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📅 Last Updated: "15 Jan 2025"                                  │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 🔗 Button: "Read Full Document"                                 │   │   │
│   │ │ • Orange border, hover: filled                                 │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 6 Legal Documents:                                                          │
│   1. Privacy Policy                                                           │
│   2. Terms & Conditions                                                       │
│   3. Refund & Cancellation Policy                                            │
│   4. Shipping & Delivery Policy                                              │
│   5. Cookie Policy                                                            │
│   6. FSSAI Compliance                                                         │
│ • Expected: Card hover effects, smooth navigation                             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 PRIVACY POLICY PAGE (/legal/privacy-policy)                               │
│ • Background: White (#ffffff)                                                 │
│ • Page Layout:                                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT SIDEBAR (25%):                                                   │   │
│   │ • Table of Contents (Sticky)                                          │   │
│   │ • Section links with scroll spy                                       │   │
│   │ • Active section highlighted                                          │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MAIN CONTENT (75%):                                                   │   │
│   │ • Document Title: "Privacy Policy"                                    │   │
│   │   - Font: Poppins, 48px, Bold, Black                                 │   │
│   │ • Last Updated: "15 January 2025"                                     │   │
│   │ • Effective Date: "1 January 2025"                                    │   │
│   │                                                                       │   │
│   │ SECTIONS:                                                             │   │
│   │ 1. Introduction                                                       │   │
│   │    - Who we are                                                       │   │
│   │    - Purpose of this policy                                           │   │
│   │                                                                       │   │
│   │ 2. Information We Collect                                             │   │
│   │    - Personal information (name, email, phone)                        │   │
│   │    - Order information (address, payment)                             │   │
│   │    - Device information (IP, browser)                                 │   │
│   │    - Usage data (pages visited, time spent)                           │   │
│   │                                                                       │   │
│   │ 3. How We Use Your Information                                        │   │
│   │    - Order processing                                                 │   │
│   │    - Communication                                                    │   │
│   │    - Service improvement                                              │   │
│   │    - Marketing (with consent)                                         │   │
│   │                                                                       │   │
│   │ 4. Information Sharing                                                │   │
│   │    - We don't sell your data                                          │   │
│   │    - Third-party services (payment, delivery)                         │   │
│   │    - Legal requirements                                               │   │
│   │                                                                       │   │
│   │ 5. Data Security                                                      │   │
│   │    - Encryption standards                                             │   │
│   │    - Secure servers                                                   │   │
│   │    - Access controls                                                  │   │
│   │                                                                       │   │
│   │ 6. Your Rights                                                        │   │
│   │    - Access your data                                                 │   │
│   │    - Correct your data                                                │   │
│   │    - Delete your data                                                 │   │
│   │    - Opt-out of marketing                                             │   │
│   │                                                                       │   │
│   │ 7. Cookies & Tracking                                                 │   │
│   │    - Types of cookies we use                                          │   │
│   │    - How to manage cookies                                            │   │
│   │                                                                       │   │
│   │ 8. Children's Privacy                                                 │   │
│   │    - Age restrictions                                                 │   │
│   │    - Parental consent                                                 │   │
│   │                                                                       │   │
│   │ 9. Changes to This Policy                                             │   │
│   │    - Notification process                                             │   │
│   │    - Version history                                                  │   │
│   │                                                                       │   │
│   │ 10. Contact Us                                                        │   │
│   │     - Email: privacy@momomagic.com                                    │   │
│   │     - Phone: +91 9955955191                                           │   │
│   │     - Address: Naya Bazar, Sherghati                                 │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Typography:                                                                 │
│   - Headings: Poppins, Bold, Black                                           │
│   - Body: Inter, Regular, Dark Gray                                          │
│   - Line height: 1.8 for readability                                         │
│ • Expected: Smooth scroll, scroll spy, back-to-top button                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 TERMS & CONDITIONS PAGE (/legal/terms-conditions)                         │
│ • Same layout as Privacy Policy                                              │
│ • Document Title: "Terms & Conditions"                                       │
│ • SECTIONS:                                                                   │
│   1. Acceptance of Terms                                                      │
│   2. Use of Service                                                           │
│   3. Account Registration                                                     │
│   4. Orders & Payments                                                        │
│   5. Delivery Terms                                                           │
│   6. Cancellation & Refunds                                                   │
│   7. User Conduct                                                             │
│   8. Intellectual Property                                                    │
│   9. Limitation of Liability                                                  │
│   10. Dispute Resolution                                                      │
│   11. Governing Law                                                           │
│   12. Contact Information                                                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 REFUND & CANCELLATION POLICY (/legal/refund-policy)                       │
│ • Same layout as Privacy Policy                                              │
│ • Document Title: "Refund & Cancellation Policy"                             │
│ • SECTIONS:                                                                   │
│   1. Cancellation Policy                                                      │
│      - Before preparation: Full refund                                        │
│      - During preparation: 50% refund                                         │
│      - After dispatch: No refund                                              │
│   2. Refund Process                                                           │
│      - Refund timeline: 5-7 business days                                     │
│      - Refund method: Original payment method                                 │
│   3. Order Issues                                                             │
│      - Wrong order: Full refund + replacement                                 │
│      - Quality issues: Full refund                                            │
│      - Delayed delivery: Partial refund/credit                                │
│   4. Non-Refundable Cases                                                     │
│      - Change of mind after delivery                                          │
│      - Incorrect address provided                                             │
│      - Customer unavailable                                                   │
│   5. How to Request Refund                                                    │
│      - In-app process                                                         │
│      - Customer support contact                                               │
│   6. Contact for Refund Issues                                                │
│      - Email: refunds@momomagic.com                                           │
│      - Phone: +91 9955955191                                                  │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 SHIPPING & DELIVERY POLICY (/legal/shipping-policy)                       │
│ • Same layout as Privacy Policy                                              │
│ • Document Title: "Shipping & Delivery Policy"                               │
│ • SECTIONS:                                                                   │
│   1. Delivery Areas                                                           │
│      - Current: Sherghati & 10KM radius                                       │
│      - Expanding: Check app for updates                                       │
│   2. Delivery Time                                                            │
│      - Standard: 30-45 minutes                                                │
│      - Peak hours: 45-60 minutes                                              │
│      - Scheduled: As per selected time                                        │
│   3. Delivery Charges                                                         │
│      - Free delivery: Orders above ₹200                                      │
│      - Standard: ₹30 for orders below ₹200                                   │
│   4. Order Tracking                                                           │
│      - Real-time tracking in app                                              │
│      - SMS updates                                                            │
│   5. Delivery Instructions                                                    │
│      - Contactless delivery available                                         │
│      - Leave at door option                                                   │
│   6. Failed Delivery                                                          │
│      - Customer unavailable: 2 attempts                                       │
│      - Refund process                                                         │
│   7. Contact Delivery Support                                                 │
│      - Phone: +91 9955955191                                                  │
│      - In-app chat                                                            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 COOKIE POLICY PAGE (/legal/cookie-policy)                                 │
│ • Same layout as Privacy Policy                                              │
│ • Document Title: "Cookie Policy"                                            │
│ • SECTIONS:                                                                   │
│   1. What Are Cookies                                                         │
│   2. Types of Cookies We Use                                                  │
│      - Essential cookies                                                      │
│      - Performance cookies                                                    │
│      - Functional cookies                                                     │
│      - Marketing cookies                                                      │
│   3. How We Use Cookies                                                       │
│   4. Third-Party Cookies                                                      │
│   5. Managing Cookies                                                         │
│      - Browser settings                                                       │
│      - Cookie consent tool                                                    │
│   6. Contact Us                                                               │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 FSSAI COMPLIANCE PAGE (/legal/fssai-compliance)                           │
│ • Same layout as Privacy Policy                                              │
│ • Document Title: "FSSAI Compliance & Food Safety"                           │
│ • SECTIONS:                                                                   │
│   1. FSSAI License Details                                                    │
│      - License Number: 20424201001152                                         │
│      - License Type: State License                                            │
│      - Valid Until: [Date]                                                    │
│      - License Certificate (Image/PDF)                                        │
│   2. Food Safety Standards                                                    │
│      - Hygiene protocols                                                      │
│      - Quality control measures                                               │
│      - Storage standards                                                      │
│   3. Ingredient Sourcing                                                      │
│      - Supplier certifications                                                │
│      - Quality checks                                                         │
│   4. Kitchen Standards                                                        │
│      - Cleanliness protocols                                                  │
│      - Staff training                                                         │
│      - Regular inspections                                                    │
│   5. Allergen Information                                                     │
│      - Common allergens                                                       │
│      - Cross-contamination prevention                                         │
│   6. Nutritional Information                                                  │
│      - Calorie information                                                    │
│      - Ingredient lists                                                       │
│   7. Contact Food Safety Officer                                              │
│      - Name: [Officer Name]                                                   │
│      - Email: foodsafety@momomagic.com                                        │
│      - Phone: +91 9955955191                                                  │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🔒 COMMON ELEMENTS (All Legal Pages)                                         │
│ • Header:                                                                     │
│   - Breadcrumb navigation                                                     │
│   - Last updated date (prominent)                                             │
│   - Download PDF button                                                       │
│   - Print button                                                              │
│ • Sidebar:                                                                    │
│   - Table of contents (sticky)                                                │
│   - Scroll progress indicator                                                 │
│   - Quick links to other policies                                             │
│ • Footer:                                                                     │
│   - Contact information                                                       │
│   - "Questions?" CTA with contact form                                        │
│   - Related policies links                                                    │
│ • Typography:                                                                 │
│   - H1: Poppins, 48px, Bold                                                   │
│   - H2: Poppins, 32px, Bold                                                   │
│   - H3: Poppins, 24px, SemiBold                                               │
│   - Body: Inter, 16px, Regular                                                │
│   - Line height: 1.8                                                          │
│   - Max width: 800px for readability                                          │
│ • Expected: Smooth scroll, print-friendly, PDF download                        │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **LEGAL PAGES INTERACTIONS:**
- **Table of Contents:** Scroll spy, smooth scroll to sections
- **Download PDF:** Generate and download policy as PDF
- **Print:** Print-optimized layout
- **Search:** Search within document
- **Mobile:** Collapsible sidebar, touch-friendly navigation

---
## 11. CAREERS PAGE (/careers)

### **VISUAL STRUCTURE:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 CAREERS HERO SECTION                                                       │
│ • Background: Dark (#0a0a0a) with team photo overlay                          │
│ • Page Title: "Join the Momos Magic Family"                                  │
│   - Font: Poppins, 64px, Bold, White color                                   │
│ • Subtitle: "Build Your Career with Bihar's Fastest Growing Food Brand"      │
│   - Font: Inter, 28px, Regular, Orange color                                 │
│ • Key Stats Row:                                                              │
│   [50+ Team Members] [10+ Locations] [95% Retention Rate]                   │
│ • CTA Buttons:                                                                │
│   [View Open Positions] [Submit Resume]                                      │
│   - Orange bg, white text, large                                              │
│ • Expected: Parallax effect, stats counter animation                          │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 💼 WHY WORK WITH US SECTION                                                   │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Why Choose Momos Magic?"                                   │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Benefits Grid (3 columns, 9 cards):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BENEFIT CARD (repeated 9 times):                                      │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 🎯 Icon (80x80px, Orange)                                       │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Benefit Title: "Competitive Salary"                          │   │   │
│   │ │ • Font: Poppins, 24px, Bold, Black                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📄 Description: "Industry-leading compensation..."             │   │   │
│   │ │ • Font: Inter, 16px, Regular, Gray                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 9 Key Benefits:                                                             │
│   1. Competitive Salary (Above industry standards)                           │
│   2. Performance Bonuses (Quarterly incentives)                              │
│   3. Career Growth (Clear promotion paths)                                   │
│   4. Training Programs (Skill development)                                   │
│   5. Work-Life Balance (Flexible schedules)                                  │
│   6. Health Insurance (Medical coverage)                                     │
│   7. Free Meals (Unlimited momos!)                                           │
│   8. Team Events (Monthly celebrations)                                      │
│   9. Recognition Programs (Employee of the month)                            │
│ • Expected: Card hover effects, smooth transitions                            │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎓 CAREER PATHS SECTION                                                       │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Career Growth Opportunities"                               │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Career Path Visualization (4 paths):                                        │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PATH 1: Kitchen Team                                                  │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Level 1: Kitchen Helper (₹12-15K/month)                         │   │   │
│   │ │ ↓ (6 months)                                                   │   │   │
│   │ │ Level 2: Junior Chef (₹18-22K/month)                           │   │   │
│   │ │ ↓ (1 year)                                                     │   │   │
│   │ │ Level 3: Senior Chef (₹25-30K/month)                           │   │   │
│   │ │ ↓ (2 years)                                                    │   │   │
│   │ │ Level 4: Head Chef (₹35-45K/month)                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ PATH 2: Service Team                                                  │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Level 1: Service Staff (₹10-12K/month)                         │   │   │
│   │ │ ↓ (6 months)                                                   │   │   │
│   │ │ Level 2: Senior Service Staff (₹15-18K/month)                  │   │   │
│   │ │ ↓ (1 year)                                                     │   │   │
│   │ │ Level 3: Shift Supervisor (₹20-25K/month)                      │   │   │
│   │ │ ↓ (2 years)                                                    │   │   │
│   │ │ Level 4: Store Manager (₹30-40K/month)                         │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ PATH 3: Delivery Team                                                 │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Level 1: Delivery Partner (₹15-20K/month)                      │   │   │
│   │ │ ↓ (1 year)                                                     │   │   │
│   │ │ Level 2: Senior Delivery Partner (₹22-28K/month)               │   │   │
│   │ │ ↓ (2 years)                                                    │   │   │
│   │ │ Level 3: Delivery Supervisor (₹30-35K/month)                   │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ PATH 4: Management Team                                               │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ Level 1: Management Trainee (₹20-25K/month)                    │   │   │
│   │ │ ↓ (1 year)                                                     │   │   │
│   │ │ Level 2: Assistant Manager (₹30-35K/month)                     │   │   │
│   │ │ ↓ (2 years)                                                    │   │   │
│   │ │ Level 3: Manager (₹40-50K/month)                               │   │   │
│   │ │ ↓ (3 years)                                                    │   │   │
│   │ │ Level 4: Regional Manager (₹60-80K/month)                      │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Animated progression arrows, hover details                        │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 💼 OPEN POSITIONS SECTION                                                     │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Current Openings"                                          │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Filter Bar:                                                                 │
│   [All Departments] [Kitchen] [Service] [Delivery] [Management]             │
│   [All Locations] [Sherghati] [Patna] [Gaya] [Other]                        │
│ • Job Listing Cards (List view):                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ JOB CARD:                                                             │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ LEFT SECTION (70%):                                             │   │   │
│   │ │ • 📝 Job Title: "Senior Chef"                                   │   │   │
│   │ │   - Font: Poppins, 28px, Bold, Black                           │   │   │
│   │ │ • 📍 Location: "Sherghati, Bihar"                               │   │   │
│   │ │ • 💼 Department: "Kitchen Team"                                 │   │   │
│   │ │ • ⏰ Type: "Full-time"                                          │   │   │
│   │ │ • 💰 Salary: "₹25-30K/month"                                    │   │   │
│   │ │ • 📅 Posted: "2 days ago"                                       │   │   │
│   │ │                                                                 │   │   │
│   │ │ • 📄 Brief Description:                                         │   │   │
│   │ │   "We're looking for an experienced chef to join..."          │   │   │
│   │ │                                                                 │   │   │
│   │ │ • 🎯 Key Requirements:                                          │   │   │
│   │ │   - 2+ years experience                                        │   │   │
│   │ │   - Momos preparation expertise                                │   │   │
│   │ │   - Team management skills                                     │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ RIGHT SECTION (30%):                                            │   │   │
│   │ │ • Button: "View Details"                                        │   │   │
│   │ │ • Button: "Apply Now"                                           │   │   │
│   │ │   - Orange bg, white text                                      │   │   │
│   │ │ • Badge: "Urgent Hiring" (if applicable)                        │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 15 Job Listings (Paginated, 5 per page)                                    │
│ • Expected: Filter updates, smooth transitions, hover effects                 │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 JOB DETAIL PAGE (/careers/job/[id])                                       │
│ • Background: White (#ffffff)                                                 │
│ • Layout: Two columns (70/30)                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT COLUMN (70%):                                                    │   │
│   │ • Job Title: "Senior Chef"                                            │   │
│   │   - Font: Poppins, 48px, Bold, Black                                 │   │
│   │ • Job Meta:                                                           │   │
│   │   📍 Location | 💼 Department | ⏰ Type | 💰 Salary | 📅 Posted      │   │
│   │                                                                       │   │
│   │ • About the Role:                                                     │   │
│   │   - Detailed job description                                          │   │
│   │   - Day-to-day responsibilities                                       │   │
│   │   - Team structure                                                    │   │
│   │                                                                       │   │
│   │ • Key Responsibilities:                                               │   │
│   │   1. Prepare momos according to recipes                               │   │
│   │   2. Maintain kitchen hygiene standards                               │   │
│   │   3. Train junior kitchen staff                                       │   │
│   │   4. Manage inventory and supplies                                    │   │
│   │   5. Ensure food quality and consistency                              │   │
│   │                                                                       │   │
│   │ • Required Qualifications:                                            │   │
│   │   - 2+ years experience in food preparation                           │   │
│   │   - Expertise in momos/dumplings                                      │   │
│   │   - Knowledge of food safety standards                                │   │
│   │   - Team management experience                                        │   │
│   │                                                                       │   │
│   │ • Preferred Skills:                                                   │   │
│   │   - Multi-cuisine experience                                          │   │
│   │   - FSSAI certification                                               │   │
│   │   - Innovation in recipes                                             │   │
│   │                                                                       │   │
│   │ • What We Offer:                                                      │   │
│   │   - Competitive salary (₹25-30K/month)                               │   │
│   │   - Performance bonuses                                               │   │
│   │   - Health insurance                                                  │   │
│   │   - Free meals                                                        │   │
│   │   - Career growth opportunities                                       │   │
│   │   - Training programs                                                 │   │
│   │                                                                       │   │
│   │ • Work Schedule:                                                      │   │
│   │   - 6 days/week, 1 day off                                           │   │
│   │   - 9-hour shifts                                                     │   │
│   │   - Flexible timing options                                           │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RIGHT COLUMN (30%):                                                   │   │
│   │ • Sticky Application Card:                                            │   │
│   │   ┌────────────────────────────────────────────────────────────┐     │   │
│   │   │ • Job Title                                                 │     │   │
│   │   │ • Location                                                  │     │   │
│   │   │ • Salary Range                                              │     │   │
│   │   ├────────────────────────────────────────────────────────────┤     │   │
│   │   │ • Button: "Apply Now" (Large, Orange)                       │     │   │
│   │   │ • Button: "Save Job" (Outline)                              │     │   │
│   │   │ • Button: "Share Job" (Outline)                             │     │   │
│   │   ├────────────────────────────────────────────────────────────┤     │   │
│   │   │ • Application Deadline: "15 Feb 2025"                       │     │   │
│   │   │ • Positions Available: "3"                                  │     │   │
│   │   │ • Applications Received: "24"                               │     │   │
│   │   └────────────────────────────────────────────────────────────┘     │   │
│   │                                                                       │   │
│   │ • Similar Jobs (3 cards)                                              │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Sticky sidebar, smooth scroll, apply modal                        │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📝 APPLICATION FORM (Modal/Separate Page)                                     │
│ • Background: White modal overlay                                             │
│ • Form Title: "Apply for [Job Title]"                                        │
│ • Multi-Step Form (4 steps):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STEP 1: Personal Information                                          │   │
│   │ • Full Name *                                                         │   │
│   │ • Email *                                                             │   │
│   │ • Phone *                                                             │   │
│   │ • Current Location *                                                  │   │
│   │ • Date of Birth                                                       │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 2: Professional Details                                          │   │
│   │ • Current/Last Job Title                                              │   │
│   │ • Years of Experience *                                               │   │
│   │ • Current/Last Employer                                               │   │
│   │ • Current/Expected Salary *                                           │   │
│   │ • Notice Period                                                       │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 3: Education & Skills                                            │   │
│   │ • Highest Education *                                                 │   │
│   │ • Relevant Certifications                                             │   │
│   │ • Key Skills (Multi-select)                                           │   │
│   │ • Languages Known                                                     │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ STEP 4: Documents & Additional Info                                   │   │
│   │ • Upload Resume * (PDF/DOC, max 2MB)                                  │   │
│   │ • Upload Cover Letter (Optional)                                      │   │
│   │ • Upload Portfolio (Optional)                                         │   │
│   │ • Why do you want to join Momos Magic? * (Textarea)                   │   │
│   │ • How did you hear about us? (Dropdown)                               │   │
│   │ • Available to start from? (Date picker)                              │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Progress Indicator: [1] ━━ [2] ━━ [3] ━━ [4]                              │
│ • Navigation: [Previous] [Next] [Submit Application]                          │
│ • Expected: Step validation, file upload preview, auto-save draft             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ EMPLOYEE TESTIMONIALS SECTION                                              │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Hear from Our Team"                                        │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • Testimonial Cards (Carousel):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ TESTIMONIAL CARD:                                                     │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ 📸 Employee Photo (Circular, 150x150px)                         │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 💬 Testimonial: "Working at Momos Magic has been..."           │   │   │
│   │ │ • Font: Inter, 18px, Regular, White                            │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ 📝 Name: "Rahul Kumar"                                          │   │   │
│   │ │ • Position: "Senior Chef"                                      │   │   │
│   │ │ • Tenure: "2 years with us"                                    │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • 10 Employee Testimonials (Auto-rotating)                                    │
│ • Expected: Auto-rotate, swipe navigation, smooth transitions                 │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📸 LIFE AT MOMOS MAGIC SECTION                                                │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Life at Momos Magic"                                       │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Photo Gallery (Masonry grid):                                               │
│   - Team events photos                                                        │
│   - Training sessions                                                         │
│   - Celebrations                                                              │
│   - Daily work life                                                           │
│   - Team outings                                                              │
│ • Instagram Feed Integration:                                                 │
│   - Latest posts from #MomosMagicTeam                                         │
│ • Expected: Lightbox on click, smooth grid layout                             │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ ❓ CAREERS FAQ SECTION                                                        │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Section Title: "Frequently Asked Questions"                                │
│   - Font: Poppins, 48px, Bold, White color                                   │
│ • FAQ Accordion (12 questions):                                               │
│   1. What is the hiring process?                                             │
│   2. How long does the recruitment take?                                     │
│   3. Do you provide training?                                                │
│   4. What are the working hours?                                             │
│   5. Is accommodation provided?                                              │
│   6. What is the salary structure?                                           │
│   7. Are there growth opportunities?                                         │
│   8. Do you hire freshers?                                                   │
│   9. What benefits do you offer?                                             │
│   10. How do I check my application status?                                  │
│   11. Can I apply for multiple positions?                                    │
│   12. Do you have internship programs?                                       │
│ • Expected: Accordion expand/collapse, smooth transitions                     │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📞 CONTACT HR SECTION                                                         │
│ • Background: White (#ffffff)                                                 │
│ • Section Title: "Still Have Questions?"                                     │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Contact Options (3 columns):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ OPTION 1: Email                                                       │   │
│   │ • Icon: Email (Orange)                                                │   │
│   │ • Email: careers@momomagic.com                                        │   │
│   │ • Response: Within 48 hours                                           │   │
│   │ • Button: "Send Email"                                                │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ OPTION 2: Phone                                                       │   │
│   │ • Icon: Phone (Orange)                                                │   │
│   │ • Number: +91 9955955191                                              │   │
│   │ • Timing: Mon-Sat, 10AM-6PM                                           │   │
│   │ • Button: "Call Now"                                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ OPTION 3: WhatsApp                                                    │   │
│   │ • Icon: WhatsApp (Orange)                                             │   │
│   │ • Number: +91 9955955191                                              │   │
│   │ • Timing: Mon-Sat, 10AM-6PM                                           │   │
│   │ • Button: "Chat on WhatsApp"                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Click-to-call, email client, WhatsApp deep link                   │
└────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│ 📧 JOB ALERTS SECTION                                                         │
│ • Background: Orange gradient (#ffc241 to #ffb700)                            │
│ • Section Title: "Get Job Alerts"                                            │
│   - Font: Poppins, 48px, Bold, Black color                                   │
│ • Subtitle: "Be the first to know about new openings"                        │
│ • Email Subscription Form:                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Email Input (Large)                                                 │   │
│   │ • Department Preference (Multi-select)                                │   │
│   │ • Location Preference (Multi-select)                                  │   │
│   │ • Button: "Subscribe to Job Alerts"                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Privacy Note: "We respect your privacy. Unsubscribe anytime."              │
│ • Expected: Form validation, success message, email confirmation              │
└────────────────────────────────────────────────────────────────────────────────┘
```

### **CAREERS PAGE INTERACTIONS:**
- **Job Filters:** Real-time filtering by department, location
- **Application Form:** Multi-step with validation, file upload, auto-save
- **Job Alerts:** Email subscription with preferences
- **Save Jobs:** Bookmark jobs for later
- **Share Jobs:** Social sharing, WhatsApp, email
- **Mobile:** Touch-friendly forms, swipe carousel, responsive layout

---

## 🎉 ALL 11 PAGES VISUAL STRUCTURE COMPLETED!

**Pages Documented:**
1. ✅ Homepage
2. ✅ Menu Page
3. ✅ About Page
4. ✅ Contact Page
5. ✅ Combo Deals Page
6. ✅ Catering Page
7. ✅ Gallery Page
8. ✅ Franchise Page
9. ✅ Download App Page
10. ✅ Legal Pages (6 sub-pages)
11. ✅ Careers Page

**TASK 2 COMPLETE: ALL 11 PAGES VISUAL STRUCTURE DOCUMENTED!**

---
---

# 🎛️ PART 2: CMS 26 MODULES VISUAL STRUCTURE

## **CMS DASHBOARD OVERVIEW:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎯 CMS MAIN DASHBOARD                                                         │
│ • Background: Dark (#0a0a0a)                                                  │
│ • Layout: Sidebar (20%) + Main Content (80%)                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT SIDEBAR (Fixed, Collapsible):                                    │   │
│   │ • Logo + Brand Name                                                   │   │
│   │ • User Profile Section                                                │   │
│   │ • Navigation Menu (26 modules grouped):                               │   │
│   │   📊 ANALYTICS (1 module)                                             │   │
│   │   🥟 MENU MANAGEMENT (3 modules)                                      │   │
│   │   📦 ORDER MANAGEMENT (2 modules)                                     │   │
│   │   👥 CUSTOMER MANAGEMENT (2 modules)                                  │   │
│   │   🎨 CONTENT MANAGEMENT (5 modules)                                   │   │
│   │   🏪 FRANCHISE MANAGEMENT (2 modules)                                 │   │
│   │   💼 CAREERS MANAGEMENT (2 modules)                                   │   │
│   │   📸 MEDIA MANAGEMENT (2 modules)                                     │   │
│   │   🎁 PROMOTIONS MANAGEMENT (2 modules)                                │   │
│   │   📧 COMMUNICATION (2 modules)                                        │   │
│   │   ⚙️ SETTINGS (3 modules)                                             │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ MAIN CONTENT AREA:                                                    │   │
│   │ • Top Bar: Breadcrumb, Search, Notifications, Profile                │   │
│   │ • Content Area: Module-specific content                               │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│ • Expected: Responsive, collapsible sidebar, smooth transitions                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 1: ANALYTICS DASHBOARD**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📊 ANALYTICS DASHBOARD MODULE                                                 │
│ • Page Title: "Analytics Dashboard"                                          │
│ • Date Range Selector: [Today] [This Week] [This Month] [Custom]             │
│                                                                               │
│ • KEY METRICS CARDS (4 columns):                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ CARD 1: Total Revenue                                                 │   │
│   │ • Value: ₹1,25,000                                                    │   │
│   │ • Change: +12% from last period                                       │   │
│   │ • Icon: Money bag (Orange)                                            │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CARD 2: Total Orders                                                  │   │
│   │ • Value: 450                                                          │   │
│   │ • Change: +8% from last period                                        │   │
│   │ • Icon: Shopping bag (Orange)                                         │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CARD 3: New Customers                                                 │   │
│   │ • Value: 85                                                           │   │
│   │ • Change: +15% from last period                                       │   │
│   │ • Icon: Users (Orange)                                                │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ CARD 4: Average Order Value                                           │   │
│   │ • Value: ₹278                                                         │   │
│   │ • Change: +5% from last period                                        │   │
│   │ • Icon: Chart (Orange)                                                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CHARTS SECTION (2 columns):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT: Revenue Chart (Line chart)                                      │   │
│   │ • X-axis: Time period                                                 │   │
│   │ • Y-axis: Revenue                                                     │   │
│   │ • Interactive: Hover tooltips, zoom                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RIGHT: Orders Chart (Bar chart)                                       │   │
│   │ • X-axis: Time period                                                 │   │
│   │ • Y-axis: Number of orders                                            │   │
│   │ • Interactive: Hover tooltips, zoom                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • TOP SELLING ITEMS TABLE:                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns: Item Name | Category | Units Sold | Revenue | Trend         │   │
│   │ • 10 rows with pagination                                             │   │
│   │ • Sortable columns                                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CUSTOMER INSIGHTS (2 columns):                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LEFT: Customer Demographics (Pie chart)                               │   │
│   │ • Age groups, locations                                               │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ RIGHT: Order Sources (Donut chart)                                    │   │
│   │ • Website, App, Phone                                                 │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Real-time updates, interactive charts, export data (CSV, PDF)     │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 2: MENU ITEMS MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🥟 MENU ITEMS MANAGEMENT MODULE                                               │
│ • Page Title: "Menu Items Management"                                        │
│ • Action Buttons: [+ Add New Item] [Import CSV] [Export CSV]                 │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Categories] [Steamed] [Fried] [Kurkure] [Pizza]                      │
│   [All Status] [Active] [Inactive] [Out of Stock]                           │
│   [Search by name...]                                                         │
│                                                                               │
│ • MENU ITEMS TABLE:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Image (60x60px thumbnail)                                           │   │
│   │ • Item Name                                                           │   │
│   │ • Category                                                            │   │
│   │ • Price (5pc / 10pc)                                                  │   │
│   │ • Status (Active/Inactive badge)                                      │   │
│   │ • Stock Status (In Stock/Out of Stock)                                │   │
│   │ • Actions (Edit | Delete | Duplicate)                                 │   │
│   │                                                                       │   │
│   │ • 50 items with pagination (10 per page)                              │   │
│   │ • Sortable columns                                                    │   │
│   │ • Bulk actions: Delete, Change status, Change category                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT ITEM FORM (Modal):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BASIC INFORMATION:                                                    │   │
│   │ • Item Name *                                                         │   │
│   │ • Category * (Dropdown)                                               │   │
│   │ • Description (Rich text editor)                                      │   │
│   │ • Short Description (For menu cards)                                  │   │
│   │                                                                       │   │
│   │ PRICING:                                                              │   │
│   │ • Price (5 pieces) *                                                  │   │
│   │ • Price (10 pieces) *                                                 │   │
│   │ • Discount (Optional)                                                 │   │
│   │                                                                       │   │
│   │ IMAGES:                                                               │   │
│   │ • Main Image * (Upload, max 2MB)                                      │   │
│   │ • Gallery Images (Multiple upload)                                    │   │
│   │ • Image preview with crop tool                                        │   │
│   │                                                                       │   │
│   │ DETAILS:                                                              │   │
│   │ • Ingredients (Multi-line text)                                       │   │
│   │ • Allergen Information                                                │   │
│   │ • Nutritional Info (Calories, protein, etc.)                          │   │
│   │ • Preparation Time (minutes)                                          │   │
│   │ • Spice Level (Mild/Medium/Hot)                                       │   │
│   │                                                                       │   │
│   │ AVAILABILITY:                                                         │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Stock Status (In Stock/Out of Stock)                                │   │
│   │ • Available Days (Multi-select)                                       │   │
│   │ • Available Time (From - To)                                          │   │
│   │                                                                       │   │
│   │ SEO:                                                                  │   │
│   │ • Meta Title                                                          │   │
│   │ • Meta Description                                                    │   │
│   │ • URL Slug (Auto-generated, editable)                                 │   │
│   │                                                                       │   │
│   │ TAGS:                                                                 │   │
│   │ • Tags (Multi-select: Bestseller, New, Spicy, etc.)                   │   │
│   │                                                                       │   │
│   │ • Buttons: [Save] [Save & Add Another] [Cancel]                       │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Drag-drop image upload, real-time preview, validation             │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 3: MENU CATEGORIES MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📂 MENU CATEGORIES MANAGEMENT MODULE                                          │
│ • Page Title: "Menu Categories"                                              │
│ • Action Buttons: [+ Add New Category] [Reorder Categories]                  │
│                                                                               │
│ • CATEGORIES LIST (Card view):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ CATEGORY CARD (repeated):                                             │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Category Image (200x200px)                                    │   │   │
│   │ │ • Category Name: "Steamed Momos"                                │   │   │
│   │ │ • Description: "Traditional steamed..."                         │   │   │
│   │ │ • Items Count: 8 items                                          │   │   │
│   │ │ • Status: Active/Inactive badge                                 │   │   │
│   │ │ • Display Order: #1                                             │   │   │
│   │ │ • Actions: [Edit] [Delete] [View Items]                         │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT CATEGORY FORM (Modal):                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Category Name *                                                     │   │
│   │ • Description (Rich text)                                             │   │
│   │ • Category Image * (Upload)                                           │   │
│   │ • Icon (Upload SVG/PNG)                                               │   │
│   │ • Display Order (Number)                                              │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • Featured Category (Checkbox)                                        │   │
│   │ • SEO: Meta title, description, slug                                  │   │
│   │ • Buttons: [Save] [Cancel]                                            │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • REORDER CATEGORIES (Drag-drop interface):                                   │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Drag handles on each category                                       │   │
│   │ • Visual feedback while dragging                                      │   │
│   │ • Save button after reordering                                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Drag-drop reordering, image upload, real-time preview             │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 4: COMBO DEALS MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎁 COMBO DEALS MANAGEMENT MODULE                                              │
│ • Page Title: "Combo Deals Management"                                       │
│ • Action Buttons: [+ Create New Combo] [Export Deals]                        │
│                                                                               │
│ • COMBO DEALS TABLE:                                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Image (80x80px)                                                     │   │
│   │ • Combo Name                                                          │   │
│   │ • Items Included (List)                                               │   │
│   │ • Regular Price                                                       │   │
│   │ • Combo Price                                                         │   │
│   │ • Savings (%)                                                         │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Valid Until (Date)                                                  │   │
│   │ • Actions (Edit | Delete | Duplicate)                                 │   │
│   │                                                                       │   │
│   │ • 20 combos with pagination                                           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT COMBO FORM (Modal):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BASIC INFO:                                                           │   │
│   │ • Combo Name *                                                        │   │
│   │ • Description (Rich text)                                             │   │
│   │ • Combo Image * (Upload)                                              │   │
│   │                                                                       │   │
│   │ ITEMS SELECTION:                                                      │   │
│   │ • Select Items (Multi-select dropdown)                                │   │
│   │ • Item 1: [Dropdown] Quantity: [Number]                               │   │
│   │ • Item 2: [Dropdown] Quantity: [Number]                               │   │
│   │ • [+ Add More Items]                                                  │   │
│   │ • Regular Price: ₹XXX (Auto-calculated)                              │   │
│   │                                                                       │   │
│   │ PRICING:                                                              │   │
│   │ • Combo Price * (Manual input)                                        │   │
│   │ • Savings: XX% (Auto-calculated)                                      │   │
│   │                                                                       │   │
│   │ VALIDITY:                                                             │   │
│   │ • Valid From (Date picker)                                            │   │
│   │ • Valid Until (Date picker)                                           │   │
│   │ • Available Days (Multi-select)                                       │   │
│   │ • Available Time (From - To)                                          │   │
│   │                                                                       │   │
│   │ SETTINGS:                                                             │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Featured Combo (Checkbox)                                           │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • Maximum Orders Per Day (Optional)                                   │   │
│   │                                                                       │   │
│   │ • Buttons: [Save] [Cancel]                                            │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Auto-calculate prices, item selection, date validation            │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 5: ORDERS LIST**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📦 ORDERS LIST MODULE                                                         │
│ • Page Title: "Orders Management"                                            │
│ • Action Buttons: [Export Orders] [Print Selected]                           │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Status] [Pending] [Confirmed] [Preparing] [Out for Delivery]         │
│   [Delivered] [Cancelled]                                                     │
│   [Date Range: From - To]                                                     │
│   [Search by Order ID, Customer Name, Phone...]                              │
│                                                                               │
│ • ORDERS TABLE:                                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Order ID (#MM-12345)                                                │   │
│   │ • Customer Name                                                       │   │
│   │ • Phone Number                                                        │   │
│   │ • Items (Count + preview)                                             │   │
│   │ • Total Amount                                                        │   │
│   │ • Payment Status (Paid/Pending badge)                                 │   │
│   │ • Order Status (Dropdown to change)                                   │   │
│   │ • Order Time                                                          │   │
│   │ • Actions (View | Print | Cancel)                                     │   │
│   │                                                                       │   │
│   │ • 100 orders with pagination (20 per page)                            │   │
│   │ • Sortable columns                                                    │   │
│   │ • Bulk actions: Print, Export, Change status                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ORDER DETAIL VIEW (Modal/Slide-in):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ ORDER HEADER:                                                         │   │
│   │ • Order ID: #MM-12345                                                 │   │
│   │ • Order Date: 15 Jan 2025, 2:30 PM                                    │   │
│   │ • Status: Preparing (with timeline)                                   │   │
│   │                                                                       │   │
│   │ CUSTOMER INFO:                                                        │   │
│   │ • Name: Rahul Kumar                                                   │   │
│   │ • Phone: +91 9955955191                                               │   │
│   │ • Email: rahul@example.com                                            │   │
│   │ • Delivery Address: Full address                                      │   │
│   │                                                                       │   │
│   │ ORDER ITEMS:                                                          │   │
│   │ • Item 1: Veg Momos (10pc) × 2 = ₹100                                │   │
│   │ • Item 2: Paneer Kurkure (5pc) × 1 = ₹60                             │   │
│   │ • Subtotal: ₹160                                                      │   │
│   │ • Delivery Charges: ₹30                                               │   │
│   │ • Discount: -₹20                                                      │   │
│   │ • Total: ₹170                                                         │   │
│   │                                                                       │   │
│   │ PAYMENT INFO:                                                         │   │
│   │ • Method: Online (UPI)                                                │   │
│   │ • Transaction ID: TXN123456                                           │   │
│   │ • Status: Paid                                                        │   │
│   │                                                                       │   │
│   │ ORDER TIMELINE:                                                       │   │
│   │ • Order Placed: 2:30 PM ✓                                            │   │
│   │ • Confirmed: 2:32 PM ✓                                               │   │
│   │ • Preparing: 2:35 PM (Current)                                       │   │
│   │ • Out for Delivery: Pending                                          │   │
│   │ • Delivered: Pending                                                 │   │
│   │                                                                       │   │
│   │ ACTIONS:                                                              │   │
│   │ • [Update Status] (Dropdown + Save)                                   │   │
│   │ • [Print Invoice]                                                     │   │
│   │ • [Send SMS Update]                                                   │   │
│   │ • [Cancel Order]                                                      │   │
│   │ • [Contact Customer] (Call/WhatsApp)                                  │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Real-time status updates, print invoice, SMS notifications        │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 6: ORDER TRACKING**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🚚 ORDER TRACKING MODULE                                                      │
│ • Page Title: "Live Order Tracking"                                          │
│ • Real-time Dashboard View                                                    │
│                                                                               │
│ • ACTIVE ORDERS BOARD (Kanban style):                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ COLUMN 1: Pending (5 orders)                                          │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ ORDER CARD:                                                     │   │   │
│   │ │ • Order ID: #MM-12345                                           │   │   │
│   │ │ • Customer: Rahul Kumar                                         │   │   │
│   │ │ • Items: 3 items                                                │   │   │
│   │ │ • Total: ₹170                                                   │   │   │
│   │ │ • Time: 5 mins ago                                              │   │   │
│   │ │ • [Accept] [Reject]                                             │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ COLUMN 2: Preparing (8 orders)                                        │   │
│   │ • Similar cards with timer                                            │   │
│   │ • [Mark Ready] button                                                 │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ COLUMN 3: Ready (3 orders)                                            │   │
│   │ • Similar cards                                                       │   │
│   │ • [Assign Delivery] button                                            │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ COLUMN 4: Out for Delivery (6 orders)                                │   │
│   │ • Similar cards with delivery partner info                            │   │
│   │ • [Mark Delivered] button                                             │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • DELIVERY MAP VIEW:                                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Google Maps integration                                             │   │
│   │ • Store location marker                                               │   │
│   │ • Active delivery markers with order IDs                              │   │
│   │ • Delivery routes                                                     │   │
│   │ • Click marker to see order details                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • SOUND ALERTS:                                                               │
│   • New order notification sound                                              │
│   • Order ready notification                                                  │
│   • Delivery completed notification                                           │
│                                                                               │
│ • Expected: Drag-drop between columns, real-time updates, sound alerts        │
└────────────────────────────────────────────────────────────────────────────────┘
```

---
## **MODULE 7: CUSTOMERS LIST**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 👥 CUSTOMERS LIST MODULE                                                      │
│ • Page Title: "Customer Management"                                          │
│ • Action Buttons: [Export Customers] [Send Bulk SMS] [Send Bulk Email]       │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Customers] [Active] [Inactive] [VIP]                                  │
│   [Registration Date: From - To]                                              │
│   [Search by name, phone, email...]                                           │
│                                                                               │
│ • CUSTOMERS TABLE:                                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Customer ID                                                         │   │
│   │ • Name                                                                │   │
│   │ • Phone                                                               │   │
│   │ • Email                                                               │   │
│   │ • Total Orders                                                        │   │
│   │ • Total Spent                                                         │   │
│   │ • Last Order Date                                                     │   │
│   │ • Status (Active/Inactive badge)                                      │   │
│   │ • Actions (View | Edit | Delete)                                      │   │
│   │                                                                       │   │
│   │ • 500 customers with pagination (25 per page)                         │   │
│   │ • Sortable columns                                                    │   │
│   │ • Bulk actions: Send SMS, Send Email, Export                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CUSTOMER DETAIL VIEW (Modal):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PROFILE INFO:                                                         │   │
│   │ • Name, Phone, Email                                                  │   │
│   │ • Registration Date                                                   │   │
│   │ • Saved Addresses (List)                                              │   │
│   │                                                                       │   │
│   │ ORDER HISTORY:                                                        │   │
│   │ • Total Orders: 25                                                    │   │
│   │ • Total Spent: ₹4,500                                                │   │
│   │ • Average Order Value: ₹180                                          │   │
│   │ • Last Order: 2 days ago                                             │   │
│   │ • Order List (Last 10 orders)                                        │   │
│   │                                                                       │   │
│   │ PREFERENCES:                                                          │   │
│   │ • Favorite Items                                                      │   │
│   │ • Preferred Payment Method                                            │   │
│   │ • Delivery Instructions                                               │   │
│   │                                                                       │   │
│   │ ACTIONS:                                                              │   │
│   │ • [Send SMS] [Send Email] [Call Customer]                             │   │
│   │ • [Add Note] [Mark as VIP] [Block Customer]                           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Quick search, bulk actions, customer insights                     │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 8: CUSTOMER REVIEWS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ⭐ CUSTOMER REVIEWS MODULE                                                    │
│ • Page Title: "Customer Reviews & Ratings"                                   │
│ • Action Buttons: [Export Reviews] [Moderate Reviews]                        │
│                                                                               │
│ • OVERVIEW STATS (4 cards):                                                   │
│   [Average Rating: 4.8/5] [Total Reviews: 2,450] [Pending: 15] [Flagged: 3] │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Reviews] [5 Star] [4 Star] [3 Star] [2 Star] [1 Star]                │
│   [All Status] [Approved] [Pending] [Rejected]                               │
│   [Date Range: From - To]                                                     │
│   [Search by customer, item...]                                               │
│                                                                               │
│ • REVIEWS TABLE:                                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Rating (Stars)                                                      │   │
│   │ • Customer Name                                                       │   │
│   │ • Item Reviewed                                                       │   │
│   │ • Review Text (Truncated)                                             │   │
│   │ • Date                                                                │   │
│   │ • Status (Approved/Pending badge)                                     │   │
│   │ • Actions (View | Approve | Reject | Reply)                           │   │
│   │                                                                       │   │
│   │ • 100 reviews with pagination (20 per page)                           │   │
│   │ • Sortable columns                                                    │   │
│   │ • Bulk actions: Approve, Reject, Delete                               │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • REVIEW DETAIL VIEW (Modal):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Customer: Rahul Kumar                                               │   │
│   │ • Item: Veg Momos (10pc)                                              │   │
│   │ • Rating: ⭐⭐⭐⭐⭐ (5/5)                                              │   │
│   │ • Date: 15 Jan 2025                                                   │   │
│   │ • Review: "Amazing taste! Best momos in town..."                      │   │
│   │ • Photos: [3 uploaded images]                                         │   │
│   │                                                                       │   │
│   │ MODERATION:                                                           │   │
│   │ • Status: Pending                                                     │   │
│   │ • [Approve] [Reject] [Flag as Inappropriate]                          │   │
│   │                                                                       │   │
│   │ REPLY:                                                                │   │
│   │ • Reply Text (Textarea)                                               │   │
│   │ • [Post Reply]                                                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Quick moderation, bulk approve/reject, reply to reviews           │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 9: HOMEPAGE CONTENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎨 HOMEPAGE CONTENT MODULE                                                    │
│ • Page Title: "Homepage Content Management"                                  │
│ • Live Preview: [View Live Site] button                                      │
│                                                                               │
│ • SECTIONS MANAGEMENT (Accordion style):                                      │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ SECTION 1: Hero Banner                                                │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Background Video/Image (Upload)                               │   │   │
│   │ │ • Main Heading (Text input)                                     │   │   │
│   │ │ • Subheading (Text input)                                       │   │   │
│   │ │ • CTA Button 1: Text + Link                                     │   │   │
│   │ │ • CTA Button 2: Text + Link                                     │   │   │
│   │ │ • Show/Hide (Toggle)                                            │   │   │
│   │ │ • [Save Section]                                                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 2: Brand Story                                                │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Section Title (Text input)                                    │   │   │
│   │ │ • Story Text (Rich text editor)                                 │   │   │
│   │ │ • Timeline Items (Add/Edit/Delete)                              │   │   │
│   │ │ • Background Image (Upload)                                     │   │   │
│   │ │ • Show/Hide (Toggle)                                            │   │   │
│   │ │ • [Save Section]                                                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 3: Featured Menu                                              │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Section Title (Text input)                                    │   │   │
│   │ │ • Select Featured Items (Multi-select, max 8)                   │   │   │
│   │ │ • Display Style (Grid/Carousel)                                 │   │   │
│   │ │ • Show/Hide (Toggle)                                            │   │   │
│   │ │ • [Save Section]                                                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 4: Signature Items                                            │   │
│   │ • Similar structure                                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 5: Testimonials                                               │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Section Title (Text input)                                    │   │   │
│   │ │ • Select Reviews to Show (Multi-select)                         │   │   │
│   │ │ • Auto-rotate (Toggle)                                          │   │   │
│   │ │ • Show/Hide (Toggle)                                            │   │   │
│   │ │ • [Save Section]                                                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 6: Location & Contact                                         │   │
│   │ • Similar structure                                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ SECTION 7: Download App                                               │   │
│   │ • Similar structure                                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • REORDER SECTIONS (Drag-drop):                                               │
│   • Drag handles to reorder sections                                          │
│   • Visual feedback while dragging                                            │
│   • [Save Order] button                                                       │
│                                                                               │
│ • Expected: Drag-drop reordering, live preview, rich text editing             │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 10: ABOUT PAGE CONTENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📖 ABOUT PAGE CONTENT MODULE                                                  │
│ • Page Title: "About Page Content"                                           │
│ • Live Preview: [View Live Page] button                                      │
│                                                                               │
│ • CONTENT SECTIONS:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ HERO SECTION:                                                         │   │
│   │ • Page Title (Text input)                                             │   │
│   │ • Subtitle (Text input)                                               │   │
│   │ • Background Image (Upload)                                           │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ BRAND STORY SECTION:                                                  │   │
│   │ • Story Content (Rich text editor)                                    │   │
│   │ • Chapter 1-5 (Expandable editors)                                    │   │
│   │ • Images (Upload multiple)                                            │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ FOUNDER SECTION:                                                      │   │
│   │ • Founder Name (Text input)                                           │   │
│   │ • Founder Photo (Upload)                                              │   │
│   │ • Founder Message (Rich text)                                         │   │
│   │ • Quote (Text input)                                                  │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ VALUES SECTION:                                                       │   │
│   │ • Value 1-6 (Title + Description + Icon)                              │   │
│   │ • [Add More Values]                                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ AWARDS SECTION:                                                       │   │
│   │ • Award 1-N (Title + Description + Image + Date)                      │   │
│   │ • [Add More Awards]                                                   │   │
│   ├──────────────────────────────────────────────────────────────────────┤   │
│   │ TEAM SECTION:                                                         │   │
│   │ • Team Member 1-N (Name + Role + Photo + Bio)                         │   │
│   │ • [Add Team Member]                                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • [Save All Changes] [Preview] [Publish]                                      │
│                                                                               │
│ • Expected: Rich text editing, image upload, live preview                     │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 11: BLOG POSTS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📝 BLOG POSTS MODULE                                                          │
│ • Page Title: "Blog Management"                                              │
│ • Action Buttons: [+ New Post] [Categories] [Tags]                           │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Posts] [Published] [Draft] [Scheduled]                                │
│   [All Categories] [Recipes] [News] [Tips]                                   │
│   [Search by title, content...]                                               │
│                                                                               │
│ • BLOG POSTS TABLE:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Featured Image (80x80px)                                            │   │
│   │ • Title                                                               │   │
│   │ • Category                                                            │   │
│   │ • Author                                                              │   │
│   │ • Status (Published/Draft badge)                                      │   │
│   │ • Views                                                               │   │
│   │ • Published Date                                                      │   │
│   │ • Actions (Edit | Delete | Duplicate)                                 │   │
│   │                                                                       │   │
│   │ • 50 posts with pagination (10 per page)                              │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT POST FORM (Full page editor):                                      │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Post Title * (Large text input)                                     │   │
│   │ • URL Slug (Auto-generated, editable)                                 │   │
│   │ • Content (Rich text editor with media upload)                        │   │
│   │ • Excerpt (Textarea)                                                  │   │
│   │                                                                       │   │
│   │ SIDEBAR:                                                              │   │
│   │ • Featured Image (Upload)                                             │   │
│   │ • Category (Dropdown)                                                 │   │
│   │ • Tags (Multi-select)                                                 │   │
│   │ • Author (Dropdown)                                                   │   │
│   │ • Publish Date (Date picker)                                          │   │
│   │ • Status (Draft/Published)                                            │   │
│   │ • Featured Post (Checkbox)                                            │   │
│   │                                                                       │   │
│   │ SEO:                                                                  │   │
│   │ • Meta Title                                                          │   │
│   │ • Meta Description                                                    │   │
│   │ • Focus Keyword                                                       │   │
│   │                                                                       │   │
│   │ • [Save Draft] [Schedule] [Publish] [Preview]                         │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Rich text editor, media library, SEO tools, scheduling            │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 12: TESTIMONIALS MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 💬 TESTIMONIALS MANAGEMENT MODULE                                             │
│ • Page Title: "Testimonials Management"                                      │
│ • Action Buttons: [+ Add Testimonial] [Import from Reviews]                  │
│                                                                               │
│ • TESTIMONIALS TABLE:                                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Customer Photo (60x60px)                                            │   │
│   │ • Customer Name                                                       │   │
│   │ • Testimonial Text (Truncated)                                        │   │
│   │ • Rating (Stars)                                                      │   │
│   │ • Featured (Yes/No badge)                                             │   │
│   │ • Show on Homepage (Yes/No)                                           │   │
│   │ • Date Added                                                          │   │
│   │ • Actions (Edit | Delete | Feature)                                   │   │
│   │                                                                       │   │
│   │ • 100 testimonials with pagination                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT TESTIMONIAL FORM (Modal):                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Customer Name *                                                     │   │
│   │ • Customer Photo (Upload)                                             │   │
│   │ • Testimonial Text * (Textarea)                                       │   │
│   │ • Rating (Star selector)                                              │   │
│   │ • Customer Location                                                   │   │
│   │ • Date (Date picker)                                                  │   │
│   │ • Featured Testimonial (Checkbox)                                     │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • Display Order (Number)                                              │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Import from reviews, drag-drop reordering, quick feature toggle   │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 13: FAQ MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ❓ FAQ MANAGEMENT MODULE                                                      │
│ • Page Title: "FAQ Management"                                               │
│ • Action Buttons: [+ Add FAQ] [Reorder FAQs]                                 │
│                                                                               │
│ • FAQ CATEGORIES:                                                             │
│   [General] [Orders] [Delivery] [Payment] [Menu] [Franchise]                │
│                                                                               │
│ • FAQ LIST (Grouped by category):                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ FAQ ITEM:                                                             │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Question: "What are your delivery hours?"                     │   │   │
│   │ │ • Answer: "We deliver from 10 AM to 10 PM..."                   │   │   │
│   │ │ • Category: Delivery                                            │   │   │
│   │ │ • Display Order: #3                                             │   │   │
│   │ │ • Status: Active                                                │   │   │
│   │ │ • Actions: [Edit] [Delete] [Move Up] [Move Down]                │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT FAQ FORM (Modal):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Question * (Text input)                                             │   │
│   │ • Answer * (Rich text editor)                                         │   │
│   │ • Category * (Dropdown)                                               │   │
│   │ • Display Order (Number)                                              │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • REORDER FAQs (Drag-drop interface):                                         │
│   • Drag handles on each FAQ                                                  │
│   • Visual feedback while dragging                                            │
│   • [Save Order] button                                                       │
│                                                                               │
│ • Expected: Drag-drop reordering, category filtering, rich text editing       │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 14: FRANCHISE APPLICATIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🏪 FRANCHISE APPLICATIONS MODULE                                              │
│ • Page Title: "Franchise Applications"                                       │
│ • Action Buttons: [Export Applications] [Send Bulk Email]                    │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Status] [New] [Under Review] [Approved] [Rejected] [On Hold]         │
│   [Date Range: From - To]                                                     │
│   [Search by name, location...]                                               │
│                                                                               │
│ • APPLICATIONS TABLE:                                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Application ID                                                      │   │
│   │ • Applicant Name                                                      │   │
│   │ • Phone                                                               │   │
│   │ • Email                                                               │   │
│   │ • Preferred Location                                                  │   │
│   │ • Investment Capacity                                                 │   │
│   │ • Status (Badge)                                                      │   │
│   │ • Applied Date                                                        │   │
│   │ • Actions (View | Update Status | Contact)                            │   │
│   │                                                                       │   │
│   │ • 50 applications with pagination                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • APPLICATION DETAIL VIEW (Modal/Full page):                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PERSONAL INFO:                                                        │   │
│   │ • Name, Phone, Email, Address                                         │   │
│   │ • Date of Birth, Education                                            │   │
│   │                                                                       │   │
│   │ BUSINESS DETAILS:                                                     │   │
│   │ • Preferred Location                                                  │   │
│   │ • Investment Capacity                                                 │   │
│   │ • Business Experience                                                 │   │
│   │ • Why Franchise (Text)                                                │   │
│   │                                                                       │   │
│   │ DOCUMENTS:                                                            │   │
│   │ • Resume (Download link)                                              │   │
│   │ • ID Proof (Download link)                                            │   │
│   │ • Financial Proof (Download link)                                     │   │
│   │                                                                       │   │
│   │ STATUS MANAGEMENT:                                                    │   │
│   │ • Current Status: New                                                 │   │
│   │ • Update Status (Dropdown)                                            │   │
│   │ • Add Note (Textarea)                                                 │   │
│   │ • [Update Status]                                                     │   │
│   │                                                                       │   │
│   │ COMMUNICATION:                                                        │   │
│   │ • [Send Email] [Call] [WhatsApp]                                      │   │
│   │ • Communication History (Timeline)                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Status workflow, document preview, communication tracking         │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 15: FRANCHISE LOCATIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📍 FRANCHISE LOCATIONS MODULE                                                 │
│ • Page Title: "Franchise Locations Management"                               │
│ • Action Buttons: [+ Add Location] [View Map]                                │
│                                                                               │
│ • LOCATIONS TABLE:                                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Location Name                                                       │   │
│   │ • Franchisee Name                                                     │   │
│   │ • Address                                                             │   │
│   │ • Phone                                                               │   │
│   │ • Opening Date                                                        │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Monthly Revenue                                                     │   │
│   │ • Actions (View | Edit | Deactivate)                                  │   │
│   │                                                                       │   │
│   │ • 20 locations with pagination                                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT LOCATION FORM (Modal):                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ LOCATION INFO:                                                        │   │
│   │ • Location Name *                                                     │   │
│   │ • Address * (With map picker)                                         │   │
│   │ • Phone *                                                             │   │
│   │ • Email                                                               │   │
│   │ • Opening Hours                                                       │   │
│   │                                                                       │   │
│   │ FRANCHISEE INFO:                                                      │   │
│   │ • Franchisee Name *                                                   │   │
│   │ • Contact Person                                                      │   │
│   │ • Phone                                                               │   │
│   │ • Email                                                               │   │
│   │                                                                       │   │
│   │ BUSINESS INFO:                                                        │   │
│   │ • Opening Date                                                        │   │
│   │ • Agreement End Date                                                  │   │
│   │ • Monthly Target                                                      │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │                                                                       │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • MAP VIEW:                                                                   │
│   • Google Maps with all franchise locations marked                           │
│   • Click marker to see location details                                      │
│                                                                               │
│ • Expected: Map integration, location picker, status management               │
└────────────────────────────────────────────────────────────────────────────────┘
```

---
## **MODULE 16: JOB POSTINGS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 💼 JOB POSTINGS MODULE                                                        │
│ • Page Title: "Job Postings Management"                                      │
│ • Action Buttons: [+ Post New Job] [Export Jobs]                             │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Jobs] [Active] [Closed] [Draft]                                       │
│   [All Departments] [Kitchen] [Service] [Delivery] [Management]              │
│   [Search by title...]                                                        │
│                                                                               │
│ • JOB POSTINGS TABLE:                                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Job Title                                                           │   │
│   │ • Department                                                          │   │
│   │ • Location                                                            │   │
│   │ • Job Type (Full-time/Part-time)                                      │   │
│   │ • Applications Received                                               │   │
│   │ • Status (Active/Closed badge)                                        │   │
│   │ • Posted Date                                                         │   │
│   │ • Actions (View | Edit | Close | Delete)                              │   │
│   │                                                                       │   │
│   │ • 30 jobs with pagination                                             │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT JOB FORM (Full page):                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BASIC INFO:                                                           │   │
│   │ • Job Title *                                                         │   │
│   │ • Department * (Dropdown)                                             │   │
│   │ • Location * (Dropdown/Multi-select)                                  │   │
│   │ • Job Type * (Full-time/Part-time/Contract)                           │   │
│   │ • Experience Required (Years)                                         │   │
│   │                                                                       │   │
│   │ JOB DESCRIPTION:                                                      │   │
│   │ • Job Summary (Textarea)                                              │   │
│   │ • Responsibilities (Rich text editor)                                 │   │
│   │ • Requirements (Rich text editor)                                     │   │
│   │ • Skills Required (Tags input)                                        │   │
│   │                                                                       │   │
│   │ COMPENSATION:                                                         │   │
│   │ • Salary Range (From - To)                                            │   │
│   │ • Benefits (Multi-line text)                                          │   │
│   │                                                                       │   │
│   │ APPLICATION SETTINGS:                                                 │   │
│   │ • Application Deadline (Date picker)                                  │   │
│   │ • Number of Openings                                                  │   │
│   │ • Status (Active/Closed/Draft)                                        │   │
│   │ • Featured Job (Checkbox)                                             │   │
│   │                                                                       │   │
│   │ • [Save Draft] [Publish] [Preview]                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Rich text editing, application tracking, status management        │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 17: JOB APPLICATIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📄 JOB APPLICATIONS MODULE                                                    │
│ • Page Title: "Job Applications Management"                                  │
│ • Action Buttons: [Export Applications] [Send Bulk Email]                    │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Status] [New] [Shortlisted] [Interview] [Hired] [Rejected]           │
│   [All Jobs] [Kitchen Staff] [Delivery Boy] [Manager]                        │
│   [Date Range: From - To]                                                     │
│   [Search by name, email...]                                                  │
│                                                                               │
│ • APPLICATIONS TABLE:                                                         │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Application ID                                                      │   │
│   │ • Applicant Name                                                      │   │
│   │ • Email                                                               │   │
│   │ • Phone                                                               │   │
│   │ • Applied For (Job title)                                             │   │
│   │ • Experience (Years)                                                  │   │
│   │ • Status (Badge)                                                      │   │
│   │ • Applied Date                                                        │   │
│   │ • Actions (View | Update Status | Contact)                            │   │
│   │                                                                       │   │
│   │ • 100 applications with pagination                                    │   │
│   │ • Bulk actions: Update status, Send email                             │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • APPLICATION DETAIL VIEW (Modal/Full page):                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ APPLICANT INFO:                                                       │   │
│   │ • Name, Email, Phone, Address                                         │   │
│   │ • Date of Birth, Education                                            │   │
│   │                                                                       │   │
│   │ JOB DETAILS:                                                          │   │
│   │ • Applied For: Kitchen Staff                                          │   │
│   │ • Experience: 2 years                                                 │   │
│   │ • Current Salary: ₹15,000                                            │   │
│   │ • Expected Salary: ₹20,000                                           │   │
│   │ • Notice Period: 1 month                                              │   │
│   │                                                                       │   │
│   │ DOCUMENTS:                                                            │   │
│   │ • Resume (Download/View)                                              │   │
│   │ • Cover Letter (View)                                                 │   │
│   │ • Certificates (Download)                                             │   │
│   │                                                                       │   │
│   │ SCREENING QUESTIONS:                                                  │   │
│   │ • Q1: Why do you want to work here?                                   │   │
│   │   A: [Applicant's answer]                                             │   │
│   │ • Q2: What's your availability?                                       │   │
│   │   A: [Applicant's answer]                                             │   │
│   │                                                                       │   │
│   │ STATUS MANAGEMENT:                                                    │   │
│   │ • Current Status: New                                                 │   │
│   │ • Update Status (Dropdown)                                            │   │
│   │ • Interview Date (Date picker)                                        │   │
│   │ • Add Note (Textarea)                                                 │   │
│   │ • [Update Status]                                                     │   │
│   │                                                                       │   │
│   │ COMMUNICATION:                                                        │   │
│   │ • [Send Email] [Call] [Schedule Interview]                            │   │
│   │ • Communication History (Timeline)                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Document preview, status workflow, interview scheduling           │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 18: MEDIA LIBRARY**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📸 MEDIA LIBRARY MODULE                                                       │
│ • Page Title: "Media Library"                                                │
│ • Action Buttons: [Upload Files] [Create Folder] [Bulk Delete]               │
│                                                                               │
│ • VIEW OPTIONS:                                                               │
│   [Grid View] [List View] | [All Media] [Images] [Videos] [Documents]       │
│                                                                               │
│ • FOLDER STRUCTURE (Left sidebar):                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • All Media                                                           │   │
│   │ • Menu Items                                                          │   │
│   │   ├─ Steamed                                                          │   │
│   │   ├─ Fried                                                            │   │
│   │   └─ Kurkure                                                          │   │
│   │ • Blog Posts                                                          │   │
│   │ • Testimonials                                                        │   │
│   │ • Franchise                                                           │   │
│   │ • Gallery                                                             │   │
│   │ • Other                                                               │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • MEDIA GRID (Main area):                                                     │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ MEDIA ITEM (repeated):                                                │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Thumbnail (200x200px)                                         │   │   │
│   │ │ • Filename: momos-image-1.jpg                                   │   │   │
│   │ │ • Size: 245 KB                                                  │   │   │
│   │ │ • Dimensions: 1920x1080                                         │   │   │
│   │ │ • Uploaded: 15 Jan 2025                                         │   │   │
│   │ │ • Checkbox for bulk selection                                   │   │   │
│   │ │ • Actions: [View] [Edit] [Delete] [Copy URL]                    │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ • 50 items per page with pagination                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • UPLOAD INTERFACE (Drag-drop area):                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Drag & drop files here or click to browse                           │   │
│   │ • Multiple file upload support                                        │   │
│   │ • Progress bars for each upload                                       │   │
│   │ • Auto-organize into folders                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • MEDIA DETAIL VIEW (Modal):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Large preview                                                       │   │
│   │ • Filename (Editable)                                                 │   │
│   │ • Alt Text (Editable)                                                 │   │
│   │ • Caption (Editable)                                                  │   │
│   │ • File URL (Copy button)                                              │   │
│   │ • File size, dimensions, upload date                                  │   │
│   │ • Used in: [List of pages/posts using this media]                     │   │
│   │ • [Save Changes] [Delete] [Download]                                  │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Drag-drop upload, folder organization, image editing              │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 19: GALLERY MANAGEMENT**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🖼️ GALLERY MANAGEMENT MODULE                                                  │
│ • Page Title: "Gallery Management"                                           │
│ • Action Buttons: [+ Add Photos] [Create Album] [Reorder Photos]             │
│                                                                               │
│ • ALBUMS LIST (Left sidebar):                                                 │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • All Photos (250)                                                    │   │
│   │ • Food Photography (120)                                              │   │
│   │ • Restaurant Interior (45)                                            │   │
│   │ • Events (35)                                                         │   │
│   │ • Behind the Scenes (30)                                              │   │
│   │ • Customer Photos (20)                                                │   │
│   │ • [+ Create Album]                                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • PHOTOS GRID (Main area):                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ PHOTO ITEM (repeated):                                                │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ • Photo thumbnail (250x250px)                                   │   │   │
│   │ │ • Photo title                                                   │   │   │
│   │ │ • Album: Food Photography                                       │   │   │
│   │ │ • Featured (Star icon)                                          │   │   │
│   │ │ • Checkbox for bulk selection                                   │   │   │
│   │ │ • Actions: [Edit] [Delete] [Feature]                            │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ • 50 photos per page with pagination                                  │   │
│   │ • Drag-drop to reorder                                                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT PHOTO FORM (Modal):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Upload Photo * (Drag-drop or browse)                                │   │
│   │ • Photo Title *                                                       │   │
│   │ • Description (Textarea)                                              │   │
│   │ • Album * (Dropdown)                                                  │   │
│   │ • Tags (Multi-select)                                                 │   │
│   │ • Featured Photo (Checkbox)                                           │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • Display Order (Number)                                              │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CREATE ALBUM FORM (Modal):                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Album Name *                                                        │   │
│   │ • Description (Textarea)                                              │   │
│   │ • Cover Photo (Upload)                                                │   │
│   │ • Display Order (Number)                                              │   │
│   │ • [Create Album]                                                      │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Bulk upload, album organization, drag-drop reordering             │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 20: COUPONS & DISCOUNTS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎁 COUPONS & DISCOUNTS MODULE                                                 │
│ • Page Title: "Coupons & Discounts Management"                               │
│ • Action Buttons: [+ Create Coupon] [Export Coupons]                         │
│                                                                               │
│ • FILTER BAR:                                                                 │
│   [All Coupons] [Active] [Expired] [Scheduled]                               │
│   [All Types] [Percentage] [Fixed Amount] [Free Delivery]                    │
│   [Search by code...]                                                         │
│                                                                               │
│ • COUPONS TABLE:                                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Coupon Code                                                         │   │
│   │ • Description                                                         │   │
│   │ • Discount Type                                                       │   │
│   │ • Discount Value                                                      │   │
│   │ • Min. Order Value                                                    │   │
│   │ • Usage Limit                                                         │   │
│   │ • Times Used                                                          │   │
│   │ • Valid From - To                                                     │   │
│   │ • Status (Active/Expired badge)                                       │   │
│   │ • Actions (Edit | Delete | Duplicate)                                 │   │
│   │                                                                       │   │
│   │ • 50 coupons with pagination                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT COUPON FORM (Modal):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BASIC INFO:                                                           │   │
│   │ • Coupon Code * (Auto-generate option)                                │   │
│   │ • Description *                                                       │   │
│   │ • Coupon Type * (Public/Private)                                      │   │
│   │                                                                       │   │
│   │ DISCOUNT SETTINGS:                                                    │   │
│   │ • Discount Type * (Percentage/Fixed/Free Delivery)                    │   │
│   │ • Discount Value * (Number)                                           │   │
│   │ • Max Discount Amount (For percentage)                                │   │
│   │ • Min. Order Value (Optional)                                         │   │
│   │                                                                       │   │
│   │ USAGE LIMITS:                                                         │   │
│   │ • Total Usage Limit (Optional)                                        │   │
│   │ • Per User Limit (Optional)                                           │   │
│   │ • First Order Only (Checkbox)                                         │   │
│   │                                                                       │   │
│   │ VALIDITY:                                                             │   │
│   │ • Valid From (Date + Time)                                            │   │
│   │ • Valid Until (Date + Time)                                           │   │
│   │ • Available Days (Multi-select)                                       │   │
│   │                                                                       │   │
│   │ APPLICABLE TO:                                                        │   │
│   │ • All Items (Radio)                                                   │   │
│   │ • Specific Categories (Multi-select)                                  │   │
│   │ • Specific Items (Multi-select)                                       │   │
│   │                                                                       │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Auto-generate codes, usage tracking, validity management          │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 21: OFFERS & PROMOTIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎉 OFFERS & PROMOTIONS MODULE                                                 │
│ • Page Title: "Offers & Promotions Management"                               │
│ • Action Buttons: [+ Create Offer] [Schedule Promotion]                      │
│                                                                               │
│ • OFFERS TABLE:                                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Banner Image (100x60px)                                             │   │
│   │ • Offer Title                                                         │   │
│   │ • Offer Type (Flash Sale/BOGO/Discount)                               │   │
│   │ • Discount Details                                                    │   │
│   │ • Valid From - To                                                     │   │
│   │ • Show on Homepage (Yes/No)                                           │   │
│   │ • Status (Active/Scheduled/Expired)                                   │   │
│   │ • Actions (Edit | Delete | Duplicate)                                 │   │
│   │                                                                       │   │
│   │ • 30 offers with pagination                                           │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADD/EDIT OFFER FORM (Modal):                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ BASIC INFO:                                                           │   │
│   │ • Offer Title *                                                       │   │
│   │ • Offer Type * (Flash Sale/BOGO/Discount/Free Item)                   │   │
│   │ • Description (Rich text)                                             │   │
│   │ • Banner Image * (Upload, 1200x400px)                                 │   │
│   │ • Mobile Banner (Upload, 800x600px)                                   │   │
│   │                                                                       │   │
│   │ OFFER DETAILS:                                                        │   │
│   │ • Discount Type (Percentage/Fixed)                                    │   │
│   │ • Discount Value                                                      │   │
│   │ • Min. Order Value (Optional)                                         │   │
│   │ • Max Discount (For percentage)                                       │   │
│   │                                                                       │   │
│   │ APPLICABLE TO:                                                        │   │
│   │ • All Items (Radio)                                                   │   │
│   │ • Specific Categories (Multi-select)                                  │   │
│   │ • Specific Items (Multi-select)                                       │   │
│   │                                                                       │   │
│   │ VALIDITY:                                                             │   │
│   │ • Valid From (Date + Time)                                            │   │
│   │ • Valid Until (Date + Time)                                           │   │
│   │ • Available Days (Multi-select)                                       │   │
│   │ • Available Time (From - To)                                          │   │
│   │                                                                       │   │
│   │ DISPLAY SETTINGS:                                                     │   │
│   │ • Show on Homepage (Checkbox)                                         │   │
│   │ • Show on Menu Page (Checkbox)                                        │   │
│   │ • Featured Offer (Checkbox)                                           │   │
│   │ • Display Order (Number)                                              │   │
│   │                                                                       │   │
│   │ • [Save] [Schedule] [Cancel]                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Banner upload, scheduling, display management                     │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 22: EMAIL CAMPAIGNS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📧 EMAIL CAMPAIGNS MODULE                                                     │
│ • Page Title: "Email Campaigns Management"                                   │
│ • Action Buttons: [+ Create Campaign] [View Templates]                       │
│                                                                               │
│ • CAMPAIGNS TABLE:                                                            │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • Campaign Name                                                       │   │
│   │ • Subject Line                                                        │   │
│   │ • Recipients (Count)                                                  │   │
│   │ • Sent Date                                                           │   │
│   │ • Open Rate (%)                                                       │   │
│   │ • Click Rate (%)                                                      │   │
│   │ • Status (Draft/Sent/Scheduled)                                       │   │
│   │ • Actions (View | Edit | Duplicate | Delete)                          │   │
│   │                                                                       │   │
│   │ • 50 campaigns with pagination                                        │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CREATE CAMPAIGN FORM (Full page):                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ STEP 1: CAMPAIGN DETAILS                                              │   │
│   │ • Campaign Name *                                                     │   │
│   │ • Subject Line *                                                      │   │
│   │ • Preview Text                                                        │   │
│   │ • From Name                                                           │   │
│   │ • From Email                                                          │   │
│   │                                                                       │   │
│   │ STEP 2: SELECT RECIPIENTS                                             │   │
│   │ • All Customers (Radio)                                               │   │
│   │ • Specific Segment (Dropdown)                                         │   │
│   │   - Active Customers                                                  │   │
│   │   - VIP Customers                                                     │   │
│   │   - Inactive Customers                                                │   │
│   │   - First Time Customers                                              │   │
│   │ • Custom List (Upload CSV)                                            │   │
│   │ • Total Recipients: 1,250                                             │   │
│   │                                                                       │   │
│   │ STEP 3: DESIGN EMAIL                                                  │   │
│   │ • Select Template (Gallery)                                           │   │
│   │ • Email Content (Drag-drop email builder)                             │   │
│   │   - Text blocks                                                       │   │
│   │   - Image blocks                                                      │   │
│   │   - Button blocks                                                     │   │
│   │   - Product blocks                                                    │   │
│   │   - Social media blocks                                               │   │
│   │ • Preview (Desktop/Mobile)                                            │   │
│   │                                                                       │   │
│   │ STEP 4: SCHEDULE                                                      │   │
│   │ • Send Now (Radio)                                                    │   │
│   │ • Schedule for Later (Date + Time picker)                             │   │
│   │                                                                       │   │
│   │ • [Save Draft] [Send Test Email] [Schedule/Send]                      │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CAMPAIGN ANALYTICS (View):                                                  │
│   • Total Sent, Delivered, Bounced                                            │
│   • Open Rate, Click Rate, Unsubscribe Rate                                   │
│   • Top Clicked Links                                                         │
│   • Engagement Timeline Chart                                                 │
│                                                                               │
│ • Expected: Drag-drop email builder, segmentation, analytics                  │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 23: SMS NOTIFICATIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 💬 SMS NOTIFICATIONS MODULE                                                   │
│ • Page Title: "SMS Notifications Management"                                 │
│ • Action Buttons: [+ Send SMS] [View Templates] [SMS Credits: 5,000]         │
│                                                                               │
│ • SMS HISTORY TABLE:                                                          │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ Columns:                                                              │   │
│   │ • SMS Type (Order/Promo/Alert)                                        │   │
│   │ • Message Preview                                                     │   │
│   │ • Recipients (Count)                                                  │   │
│   │ • Sent Date                                                           │   │
│   │ • Delivery Rate (%)                                                   │   │
│   │ • Credits Used                                                        │   │
│   │ • Status (Sent/Failed/Scheduled)                                      │   │
│   │ • Actions (View | Resend Failed)                                      │   │
│   │                                                                       │   │
│   │ • 100 SMS with pagination                                             │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • SEND SMS FORM (Modal):                                                      │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ SELECT RECIPIENTS:                                                    │   │
│   │ • All Customers (Radio)                                               │   │
│   │ • Specific Segment (Dropdown)                                         │   │
│   │ • Custom Numbers (Textarea, comma-separated)                          │   │
│   │ • Total Recipients: 500                                               │   │
│   │                                                                       │   │
│   │ MESSAGE:                                                              │   │
│   │ • Use Template (Dropdown)                                             │   │
│   │ • Message Text * (Textarea, 160 chars)                                │   │
│   │ • Character Count: 85/160                                             │   │
│   │ • Credits Required: 500                                               │   │
│   │                                                                       │   │
│   │ SCHEDULE:                                                             │   │
│   │ • Send Now (Radio)                                                    │   │
│   │ • Schedule for Later (Date + Time)                                    │   │
│   │                                                                       │   │
│   │ • [Send Test SMS] [Schedule/Send]                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • SMS TEMPLATES:                                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Order Confirmation                                                  │   │
│   │ • Order Out for Delivery                                              │   │
│   │ • Order Delivered                                                     │   │
│   │ • Promotional Offer                                                   │   │
│   │ • New Menu Item                                                       │   │
│   │ • Birthday Wishes                                                     │   │
│   │ • [+ Create Template]                                                 │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • AUTOMATED SMS SETTINGS:                                                     │
│   • Order Confirmation (Toggle On/Off)                                        │
│   • Order Status Updates (Toggle On/Off)                                      │
│   • Delivery Updates (Toggle On/Off)                                          │
│   • Promotional SMS (Toggle On/Off)                                           │
│                                                                               │
│ • Expected: Template management, scheduling, delivery tracking                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---
## **MODULE 24: SITE SETTINGS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ⚙️ SITE SETTINGS MODULE                                                       │
│ • Page Title: "Site Settings"                                                │
│ • Tabs: [General] [Contact] [Social Media] [SEO] [Advanced]                  │
│                                                                               │
│ • GENERAL TAB:                                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ SITE IDENTITY:                                                        │   │
│   │ • Site Name *                                                         │   │
│   │ • Site Tagline                                                        │   │
│   │ • Site Logo (Upload, 200x80px)                                        │   │
│   │ • Favicon (Upload, 32x32px)                                           │   │
│   │                                                                       │   │
│   │ BUSINESS HOURS:                                                       │   │
│   │ • Monday: [10:00 AM] - [10:00 PM] [Closed checkbox]                   │   │
│   │ • Tuesday: [10:00 AM] - [10:00 PM] [Closed checkbox]                  │   │
│   │ • ... (All 7 days)                                                    │   │
│   │                                                                       │   │
│   │ TIMEZONE & LANGUAGE:                                                  │   │
│   │ • Timezone (Dropdown)                                                 │   │
│   │ • Language (Dropdown)                                                 │   │
│   │ • Date Format (Dropdown)                                              │   │
│   │ • Currency (Dropdown)                                                 │   │
│   │                                                                       │   │
│   │ MAINTENANCE MODE:                                                     │   │
│   │ • Enable Maintenance Mode (Toggle)                                    │   │
│   │ • Maintenance Message (Textarea)                                      │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • CONTACT TAB:                                                                │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Business Name *                                                     │   │
│   │ • Address Line 1 *                                                    │   │
│   │ • Address Line 2                                                      │   │
│   │ • City *                                                              │   │
│   │ • State *                                                             │   │
│   │ • Postal Code *                                                       │   │
│   │ • Phone Number *                                                      │   │
│   │ • WhatsApp Number                                                     │   │
│   │ • Email *                                                             │   │
│   │ • Support Email                                                       │   │
│   │ • Google Maps Embed Code (Textarea)                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • SOCIAL MEDIA TAB:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Facebook URL                                                        │   │
│   │ • Instagram URL                                                       │   │
│   │ • Twitter URL                                                         │   │
│   │ • YouTube URL                                                         │   │
│   │ • LinkedIn URL                                                        │   │
│   │ • Pinterest URL                                                       │   │
│   │ • TikTok URL                                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • SEO TAB:                                                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Meta Title *                                                        │   │
│   │ • Meta Description * (Textarea, 160 chars)                            │   │
│   │ • Meta Keywords (Tags input)                                          │   │
│   │ • Google Analytics ID                                                 │   │
│   │ • Google Search Console Code                                          │   │
│   │ • Facebook Pixel ID                                                   │   │
│   │ • Robots.txt (Textarea)                                               │   │
│   │ • Sitemap URL (Auto-generated, display only)                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ADVANCED TAB:                                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Custom CSS (Code editor)                                            │   │
│   │ • Custom JavaScript (Code editor)                                     │   │
│   │ • Header Scripts (Textarea)                                           │   │
│   │ • Footer Scripts (Textarea)                                           │   │
│   │ • Enable HTTPS (Toggle)                                               │   │
│   │ • Enable Caching (Toggle)                                             │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • [Save All Settings] button at bottom                                        │
│                                                                               │
│ • Expected: Tab navigation, validation, auto-save drafts                      │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 25: PAYMENT SETTINGS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 💳 PAYMENT SETTINGS MODULE                                                    │
│ • Page Title: "Payment Settings"                                             │
│ • Tabs: [Payment Methods] [Payment Gateway] [Transactions]                   │
│                                                                               │
│ • PAYMENT METHODS TAB:                                                        │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ AVAILABLE PAYMENT METHODS:                                            │   │
│   │                                                                       │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ CASH ON DELIVERY                                                │   │   │
│   │ │ • Enable (Toggle) ✓                                             │   │   │
│   │ │ • Display Name: "Cash on Delivery"                              │   │   │
│   │ │ • Instructions: "Pay with cash upon delivery"                   │   │   │
│   │ │ • Min Order Value: ₹0                                          │   │   │
│   │ │ • Max Order Value: ₹5,000                                      │   │   │
│   │ │ • [Save]                                                        │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ ONLINE PAYMENT (UPI/Cards)                                      │   │   │
│   │ │ • Enable (Toggle) ✓                                             │   │   │
│   │ │ • Display Name: "Pay Online"                                    │   │   │
│   │ │ • Instructions: "Pay securely with UPI, Cards, Net Banking"     │   │   │
│   │ │ • Processing Fee: 2% (Optional)                                 │   │   │
│   │ │ • [Save]                                                        │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ WALLET PAYMENT                                                  │   │   │
│   │ │ • Enable (Toggle)                                               │   │   │
│   │ │ • Display Name: "Wallet Payment"                                │   │   │
│   │ │ • Instructions: "Pay using your wallet balance"                 │   │   │
│   │ │ • [Save]                                                        │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • PAYMENT GATEWAY TAB:                                                        │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ SELECT PAYMENT GATEWAY:                                               │   │
│   │ • Razorpay (Radio) ✓                                                  │   │
│   │ • PayU                                                                │   │
│   │ • Paytm                                                               │   │
│   │ • PhonePe                                                             │   │
│   │ • Stripe                                                              │   │
│   │                                                                       │   │
│   │ RAZORPAY CONFIGURATION:                                               │   │
│   │ • API Key * (Text input)                                              │   │
│   │ • API Secret * (Password input)                                       │   │
│   │ • Webhook Secret (Text input)                                         │   │
│   │ • Test Mode (Toggle)                                                  │   │
│   │ • [Test Connection] [Save]                                            │   │
│   │                                                                       │   │
│   │ WEBHOOK URL (Display only):                                           │   │
│   │ • https://momomagics.com/api/payment/webhook                         │   │
│   │ • [Copy URL]                                                          │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • TRANSACTIONS TAB:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ FILTER BAR:                                                           │   │
│   │ [All Status] [Success] [Failed] [Pending] [Refunded]                 │   │
│   │ [Date Range: From - To]                                               │   │
│   │ [Search by Order ID, Transaction ID...]                               │   │
│   │                                                                       │   │
│   │ TRANSACTIONS TABLE:                                                   │   │
│   │ Columns:                                                              │   │
│   │ • Transaction ID                                                      │   │
│   │ • Order ID                                                            │   │
│   │ • Customer Name                                                       │   │
│   │ • Amount                                                              │   │
│   │ • Payment Method                                                      │   │
│   │ • Status (Badge)                                                      │   │
│   │ • Date & Time                                                         │   │
│   │ • Actions (View | Refund)                                             │   │
│   │                                                                       │   │
│   │ • 100 transactions with pagination                                    │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Gateway integration, test mode, transaction tracking              │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **MODULE 26: USER ROLES & PERMISSIONS**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 👤 USER ROLES & PERMISSIONS MODULE                                            │
│ • Page Title: "User Roles & Permissions"                                     │
│ • Tabs: [Users] [Roles] [Activity Log]                                       │
│                                                                               │
│ • USERS TAB:                                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Action Buttons: [+ Add User] [Export Users]                         │   │
│   │                                                                       │   │
│   │ USERS TABLE:                                                          │   │
│   │ Columns:                                                              │   │
│   │ • User ID                                                             │   │
│   │ • Name                                                                │   │
│   │ • Email                                                               │   │
│   │ • Role (Badge)                                                        │   │
│   │ • Last Login                                                          │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • Actions (Edit | Delete | Reset Password)                            │   │
│   │                                                                       │   │
│   │ • 50 users with pagination                                            │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│   • ADD/EDIT USER FORM (Modal):                                               │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Full Name *                                                         │   │
│   │ • Email *                                                             │   │
│   │ • Password * (For new user)                                           │   │
│   │ • Confirm Password *                                                  │   │
│   │ • Role * (Dropdown)                                                   │   │
│   │ • Status (Active/Inactive)                                            │   │
│   │ • [Save] [Cancel]                                                     │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ROLES TAB:                                                                  │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Action Buttons: [+ Create Role]                                     │   │
│   │                                                                       │   │
│   │ ROLES LIST:                                                           │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ ROLE: Super Admin                                               │   │   │
│   │ │ • Users: 2                                                      │   │   │
│   │ │ • Permissions: All (Full access)                                │   │   │
│   │ │ • [Edit] [Delete]                                               │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ROLE: Admin                                                     │   │   │
│   │ │ • Users: 5                                                      │   │   │
│   │ │ • Permissions: 45/50                                            │   │   │
│   │ │ • [Edit] [Delete]                                               │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ROLE: Manager                                                   │   │   │
│   │ │ • Users: 8                                                      │   │   │
│   │ │ • Permissions: 30/50                                            │   │   │
│   │ │ • [Edit] [Delete]                                               │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ROLE: Staff                                                     │   │   │
│   │ │ • Users: 15                                                     │   │   │
│   │ │ • Permissions: 15/50                                            │   │   │
│   │ │ • [Edit] [Delete]                                               │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│   • CREATE/EDIT ROLE FORM (Full page):                                       │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ • Role Name *                                                         │   │
│   │ • Description (Textarea)                                              │   │
│   │                                                                       │   │
│   │ PERMISSIONS (Grouped by module):                                      │   │
│   │                                                                       │   │
│   │ ┌────────────────────────────────────────────────────────────────┐   │   │
│   │ │ DASHBOARD                                                       │   │   │
│   │ │ ☑ View Dashboard                                                │   │   │
│   │ │ ☑ View Analytics                                                │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ MENU MANAGEMENT                                                 │   │   │
│   │ │ ☑ View Menu Items                                               │   │   │
│   │ │ ☑ Add Menu Items                                                │   │   │
│   │ │ ☑ Edit Menu Items                                               │   │   │
│   │ │ ☑ Delete Menu Items                                             │   │   │
│   │ │ ☑ Manage Categories                                             │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ ORDER MANAGEMENT                                                │   │   │
│   │ │ ☑ View Orders                                                   │   │   │
│   │ │ ☑ Update Order Status                                           │   │   │
│   │ │ ☑ Cancel Orders                                                 │   │   │
│   │ │ ☑ Print Invoices                                                │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ CUSTOMER MANAGEMENT                                             │   │   │
│   │ │ ☑ View Customers                                                │   │   │
│   │ │ ☑ Edit Customers                                                │   │   │
│   │ │ ☑ Delete Customers                                              │   │   │
│   │ │ ☑ View Reviews                                                  │   │   │
│   │ │ ☑ Moderate Reviews                                              │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ CONTENT MANAGEMENT                                              │   │   │
│   │ │ ☑ Manage Homepage                                               │   │   │
│   │ │ ☑ Manage About Page                                             │   │   │
│   │ │ ☑ Manage Blog Posts                                             │   │   │
│   │ │ ☑ Manage Testimonials                                           │   │   │
│   │ │ ☑ Manage FAQ                                                    │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ FRANCHISE MANAGEMENT                                            │   │   │
│   │ │ ☑ View Applications                                             │   │   │
│   │ │ ☑ Manage Applications                                           │   │   │
│   │ │ ☑ Manage Locations                                              │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ CAREERS MANAGEMENT                                              │   │   │
│   │ │ ☑ Manage Job Postings                                           │   │   │
│   │ │ ☑ View Applications                                             │   │   │
│   │ │ ☑ Manage Applications                                           │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ MEDIA MANAGEMENT                                                │   │   │
│   │ │ ☑ View Media Library                                            │   │   │
│   │ │ ☑ Upload Media                                                  │   │   │
│   │ │ ☑ Delete Media                                                  │   │   │
│   │ │ ☑ Manage Gallery                                                │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ PROMOTIONS                                                      │   │   │
│   │ │ ☑ Manage Coupons                                                │   │   │
│   │ │ ☑ Manage Offers                                                 │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ COMMUNICATION                                                   │   │   │
│   │ │ ☑ Send Email Campaigns                                          │   │   │
│   │ │ ☑ Send SMS                                                      │   │   │
│   │ ├────────────────────────────────────────────────────────────────┤   │   │
│   │ │ SETTINGS                                                        │   │   │
│   │ │ ☑ Manage Site Settings                                          │   │   │
│   │ │ ☑ Manage Payment Settings                                       │   │   │
│   │ │ ☑ Manage Users & Roles                                          │   │   │
│   │ └────────────────────────────────────────────────────────────────┘   │   │
│   │                                                                       │   │
│   │ • [Select All] [Deselect All]                                         │   │
│   │ • [Save Role] [Cancel]                                                │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • ACTIVITY LOG TAB:                                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐   │
│   │ FILTER BAR:                                                           │   │
│   │ [All Users] [All Actions] [Date Range: From - To]                     │   │
│   │                                                                       │   │
│   │ ACTIVITY LOG TABLE:                                                   │   │
│   │ Columns:                                                              │   │
│   │ • User                                                                │   │
│   │ • Action (Created/Updated/Deleted)                                    │   │
│   │ • Module (Orders/Menu/Customers)                                      │   │
│   │ • Details (What was changed)                                          │   │
│   │ • IP Address                                                          │   │
│   │ • Date & Time                                                         │   │
│   │                                                                       │   │
│   │ • 200 logs with pagination (50 per page)                              │   │
│   │ • Export logs (CSV)                                                   │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
│ • Expected: Granular permissions, activity tracking, role templates           │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎉 **ALL 26 CMS MODULES COMPLETE!**

### **MODULE SUMMARY:**

**📊 ANALYTICS (1 module):**
1. Analytics Dashboard

**🥟 MENU MANAGEMENT (3 modules):**
2. Menu Items Management
3. Menu Categories Management
4. Combo Deals Management

**📦 ORDER MANAGEMENT (2 modules):**
5. Orders List
6. Order Tracking

**👥 CUSTOMER MANAGEMENT (2 modules):**
7. Customers List
8. Customer Reviews

**🎨 CONTENT MANAGEMENT (5 modules):**
9. Homepage Content
10. About Page Content
11. Blog Posts
12. Testimonials Management
13. FAQ Management

**🏪 FRANCHISE MANAGEMENT (2 modules):**
14. Franchise Applications
15. Franchise Locations

**💼 CAREERS MANAGEMENT (2 modules):**
16. Job Postings
17. Job Applications

**📸 MEDIA MANAGEMENT (2 modules):**
18. Media Library
19. Gallery Management

**🎁 PROMOTIONS MANAGEMENT (2 modules):**
20. Coupons & Discounts
21. Offers & Promotions

**📧 COMMUNICATION (2 modules):**
22. Email Campaigns
23. SMS Notifications

**⚙️ SETTINGS (3 modules):**
24. Site Settings
25. Payment Settings
26. User Roles & Permissions

---

**TOTAL: 26 MODULES DOCUMENTED ✅**
---

# **🔄 USER FLOW DIAGRAMS**

## **USER FLOW 1: CUSTOMER ORDERING FLOW**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🛒 CUSTOMER ORDERING FLOW                                                     │
│                                                                               │
│ START: Customer visits website                                               │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 1: HOMEPAGE                                                        │  │
│ │ • View hero banner with brand story                                     │  │
│ │ • See featured menu items                                               │  │
│ │ • View current offers/promotions                                        │  │
│ │ • Decision: Browse Menu OR Order Now                                    │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 2: MENU PAGE                                                       │  │
│ │ • Browse all menu categories                                            │  │
│ │ • Filter by: Steamed/Fried/Kurkure/Pizza                                │  │
│ │ • View item details (price, description, image)                         │  │
│ │ • Select quantity                                                       │  │
│ │ • Click "Add to Cart"                                                   │  │
│ │ • Decision: Continue Shopping OR Go to Cart                             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 3: CART PAGE                                                       │  │
│ │ • View all cart items                                                   │  │
│ │ • Update quantities                                                     │  │
│ │ • Remove items                                                          │  │
│ │ • Apply coupon code                                                     │  │
│ │ • View order summary (subtotal, discount, total)                        │  │
│ │ • Click "Proceed to Checkout"                                           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4: CHECKOUT PAGE                                                   │  │
│ │ • Login/Register OR Guest Checkout                                      │  │
│ │ • Enter delivery address                                                │  │
│ │ • Enter contact details (name, phone, email)                            │  │
│ │ • Select delivery time (ASAP or Schedule)                               │  │
│ │ • Add special instructions (optional)                                   │  │
│ │ • Select payment method (COD/Online)                                    │  │
│ │ • Review order summary                                                  │  │
│ │ • Click "Place Order"                                                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 5: PAYMENT (If Online Payment Selected)                            │  │
│ │ • Redirect to payment gateway                                           │  │
│ │ • Select payment method (UPI/Card/Net Banking)                          │  │
│ │ • Complete payment                                                      │  │
│ │ • Payment Success/Failure                                               │  │
│ │ • Redirect back to website                                              │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 6: ORDER CONFIRMATION                                              │  │
│ │ • Display order confirmation message                                    │  │
│ │ • Show order ID and details                                             │  │
│ │ • Display estimated delivery time                                       │  │
│ │ • Send confirmation email                                               │  │
│ │ • Send confirmation SMS                                                 │  │
│ │ • Option to track order                                                 │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 7: ORDER TRACKING                                                  │  │
│ │ • View order status (Pending → Preparing → Ready → Out for Delivery)    │  │
│ │ • View estimated delivery time                                          │  │
│ │ • View delivery person details (if assigned)                            │  │
│ │ • Live tracking on map (if available)                                   │  │
│ │ • Receive SMS updates on status changes                                 │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 8: ORDER DELIVERED                                                 │  │
│ │ • Receive order                                                         │  │
│ │ • Mark as delivered in system                                           │  │
│ │ • Send delivery confirmation SMS                                        │  │
│ │ • Prompt to rate & review                                               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 9: POST-DELIVERY                                                   │  │
│ │ • Customer rates order (1-5 stars)                                      │  │
│ │ • Customer writes review                                                │  │
│ │ • Customer uploads photos (optional)                                    │  │
│ │ • Submit review                                                         │  │
│ │ • Earn loyalty points (if applicable)                                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ END: Order complete, customer satisfied                                       │
│                                                                               │
│ **ALTERNATIVE PATHS:**                                                        │
│ • Payment Failure → Retry Payment OR Cancel Order                            │
│ • Out of Stock → Remove Item OR Substitute Item                              │
│ • Delivery Issue → Contact Support OR Cancel Order                           │
│ • Order Cancellation → Refund Process (if paid online)                       │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **USER FLOW 2: FRANCHISE APPLICATION FLOW**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🏪 FRANCHISE APPLICATION FLOW                                                 │
│                                                                               │
│ START: Potential franchisee visits website                                   │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 1: HOMEPAGE/FRANCHISE PAGE                                         │  │
│ │ • View "Franchise Opportunity" section                                  │  │
│ │ • Read about franchise benefits                                         │  │
│ │ • View investment details                                               │  │
│ │ • View success stories                                                  │  │
│ │ • Click "Apply for Franchise"                                           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 2: FRANCHISE INFORMATION PAGE                                      │  │
│ │ • View detailed franchise information                                   │  │
│ │ • Investment breakdown                                                  │  │
│ │ • ROI expectations                                                      │  │
│ │ • Support provided                                                      │  │
│ │ • Training details                                                      │  │
│ │ • Download franchise brochure (PDF)                                     │  │
│ │ • Click "Start Application"                                             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 3: APPLICATION FORM (Multi-step)                                   │  │
│ │                                                                         │  │
│ │ STEP 3A: PERSONAL INFORMATION                                           │  │
│ │ • Full Name                                                             │  │
│ │ • Date of Birth                                                         │  │
│ │ • Phone Number                                                          │  │
│ │ • Email Address                                                         │  │
│ │ • Current Address                                                       │  │
│ │ • Education Qualification                                               │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3B: BUSINESS DETAILS                                               │  │
│ │ • Preferred Location (City/Area)                                        │  │
│ │ • Investment Capacity                                                   │  │
│ │ • Business Experience (Years)                                           │  │
│ │ • Previous Business Details (if any)                                    │  │
│ │ • Why do you want this franchise? (Essay)                               │  │
│ │ • Expected Start Date                                                   │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3C: DOCUMENTS UPLOAD                                               │  │
│ │ • Upload Resume/CV                                                      │  │
│ │ • Upload ID Proof (Aadhar/PAN)                                          │  │
│ │ • Upload Financial Proof (Bank Statement/ITR)                           │  │
│ │ • Upload Business Plan (Optional)                                       │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3D: REVIEW & SUBMIT                                                │  │
│ │ • Review all entered information                                        │  │
│ │ • Edit if needed                                                        │  │
│ │ • Accept Terms & Conditions                                             │  │
│ │ • Click "Submit Application"                                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4: APPLICATION SUBMITTED                                           │  │
│ │ • Display confirmation message                                          │  │
│ │ • Show application ID                                                   │  │
│ │ • Send confirmation email                                               │  │
│ │ • Send confirmation SMS                                                 │  │
│ │ • Display next steps                                                    │  │
│ │ • Expected response time: 3-5 business days                             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 5: ADMIN REVIEW (Backend)                                          │  │
│ │ • Admin receives notification                                           │  │
│ │ • Admin reviews application                                             │  │
│ │ • Admin checks documents                                                │  │
│ │ • Admin verifies financial capacity                                     │  │
│ │ • Admin updates status: Under Review                                    │  │
│ │ • Applicant receives "Under Review" email                               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 6: INITIAL SCREENING CALL                                          │  │
│ │ • Admin schedules call with applicant                                   │  │
│ │ • Send call invitation email                                            │  │
│ │ • Conduct 30-minute screening call                                      │  │
│ │ • Discuss expectations, investment, location                            │  │
│ │ • Answer applicant's questions                                          │  │
│ │ • Admin adds notes to application                                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 7: DECISION                                                        │  │
│ │                                                                         │  │
│ │ PATH A: APPROVED                                                        │  │
│ │ • Admin updates status: Approved                                        │  │
│ │ • Send approval email with next steps                                   │  │
│ │ • Schedule in-person meeting                                            │  │
│ │ • Send franchise agreement draft                                        │  │
│ │ • Proceed to STEP 8                                                     │  │
│ │                                                                         │  │
│ │ PATH B: REJECTED                                                        │  │
│ │ • Admin updates status: Rejected                                        │  │
│ │ • Send polite rejection email with reasons                              │  │
│ │ • Suggest reapplication after improvements                              │  │
│ │ • END                                                                   │  │
│ │                                                                         │  │
│ │ PATH C: ON HOLD                                                         │  │
│ │ • Admin updates status: On Hold                                         │  │
│ │ • Send email explaining reasons                                         │  │
│ │ • Request additional information/documents                              │  │
│ │ • Return to STEP 5 after receiving info                                 │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 8: IN-PERSON MEETING                                               │  │
│ │ • Schedule meeting at head office                                       │  │
│ │ • Site visit to existing location                                       │  │
│ │ • Discuss franchise agreement details                                   │  │
│ │ • Finalize location                                                     │  │
│ │ • Discuss training schedule                                             │  │
│ │ • Answer all questions                                                  │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 9: AGREEMENT SIGNING                                               │  │
│ │ • Review final franchise agreement                                      │  │
│ │ • Sign franchise agreement                                              │  │
│ │ • Pay franchise fee                                                     │  │
│ │ • Receive welcome kit                                                   │  │
│ │ • Receive training schedule                                             │  │
│ │ • Receive setup guidelines                                              │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 10: TRAINING & SETUP                                               │  │
│ │ • Attend 2-week training program                                        │  │
│ │ • Learn operations, recipes, quality standards                          │  │
│ │ • Setup location with brand guidelines                                  │  │
│ │ • Install equipment                                                     │  │
│ │ • Hire and train staff                                                  │  │
│ │ • Conduct trial runs                                                    │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 11: GRAND OPENING                                                  │  │
│ │ • Schedule grand opening date                                           │  │
│ │ • Marketing & promotion support                                         │  │
│ │ • Head office team present for opening                                  │  │
│ │ • Launch with special offers                                            │  │
│ │ • Add location to website                                               │  │
│ │ • Ongoing support begins                                                │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ END: Franchise successfully launched                                          │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **USER FLOW 3: JOB APPLICATION FLOW**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 💼 JOB APPLICATION FLOW                                                       │
│                                                                               │
│ START: Job seeker visits website                                             │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 1: CAREERS PAGE                                                    │  │
│ │ • View "Join Our Team" section                                          │  │
│ │ • Read about company culture                                            │  │
│ │ • View employee benefits                                                │  │
│ │ • View current job openings                                             │  │
│ │ • Filter jobs by: Department, Location, Job Type                        │  │
│ │ • Click on job listing to view details                                  │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 2: JOB DETAILS PAGE                                                │  │
│ │ • View full job description                                             │  │
│ │ • View responsibilities                                                 │  │
│ │ • View requirements                                                     │  │
│ │ • View salary range                                                     │  │
│ │ • View benefits                                                         │  │
│ │ • View application deadline                                             │  │
│ │ • Click "Apply Now"                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 3: APPLICATION FORM (Multi-step)                                   │  │
│ │                                                                         │  │
│ │ STEP 3A: PERSONAL INFORMATION                                           │  │
│ │ • Full Name                                                             │  │
│ │ • Date of Birth                                                         │  │
│ │ • Phone Number                                                          │  │
│ │ • Email Address                                                         │  │
│ │ • Current Address                                                       │  │
│ │ • Education Qualification                                               │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3B: PROFESSIONAL DETAILS                                           │  │
│ │ • Total Experience (Years)                                              │  │
│ │ • Current Company                                                       │  │
│ │ • Current Designation                                                   │  │
│ │ • Current Salary                                                        │  │
│ │ • Expected Salary                                                       │  │
│ │ • Notice Period                                                         │  │
│ │ • Skills (Multi-select)                                                 │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3C: DOCUMENTS UPLOAD                                               │  │
│ │ • Upload Resume/CV (Required)                                           │  │
│ │ • Upload Cover Letter (Optional)                                        │  │
│ │ • Upload Certificates (Optional)                                        │  │
│ │ • Upload Portfolio (Optional)                                           │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3D: SCREENING QUESTIONS                                            │  │
│ │ • Why do you want to work here? (Essay)                                 │  │
│ │ • What's your availability? (Dropdown)                                  │  │
│ │ • Are you willing to relocate? (Yes/No)                                 │  │
│ │ • Additional questions specific to job                                  │  │
│ │ • Click "Next"                                                          │  │
│ │                                                                         │  │
│ │ STEP 3E: REVIEW & SUBMIT                                                │  │
│ │ • Review all entered information                                        │  │
│ │ • Edit if needed                                                        │  │
│ │ • Accept Terms & Conditions                                             │  │
│ │ • Click "Submit Application"                                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4: APPLICATION SUBMITTED                                           │  │
│ │ • Display confirmation message                                          │  │
│ │ • Show application ID                                                   │  │
│ │ • Send confirmation email                                               │  │
│ │ • Display next steps                                                    │  │
│ │ • Expected response time: 7-10 business days                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 5: HR SCREENING (Backend)                                          │  │
│ │ • HR receives notification                                              │  │
│ │ • HR reviews application                                                │  │
│ │ • HR checks resume and documents                                        │  │
│ │ • HR verifies qualifications                                            │  │
│ │ • HR updates status: Under Review                                       │  │
│ │ • Applicant receives "Under Review" email                               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 6: DECISION - SHORTLISTING                                         │  │
│ │                                                                         │  │
│ │ PATH A: SHORTLISTED                                                     │  │
│ │ • HR updates status: Shortlisted                                        │  │
│ │ • Send shortlist email                                                  │  │
│ │ • Schedule interview                                                    │  │
│ │ • Send interview details (date, time, location/link)                    │  │
│ │ • Proceed to STEP 7                                                     │  │
│ │                                                                         │  │
│ │ PATH B: REJECTED                                                        │  │
│ │ • HR updates status: Rejected                                           │  │
│ │ • Send polite rejection email                                           │  │
│ │ • Thank for interest                                                    │  │
│ │ • Encourage to apply for future openings                                │  │
│ │ • END                                                                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 7: INTERVIEW PROCESS                                               │  │
│ │                                                                         │  │
│ │ ROUND 1: HR INTERVIEW (30 minutes)                                      │  │
│ │ • Conduct HR interview (phone/video)                                    │  │
│ │ • Assess communication skills                                           │  │
│ │ • Discuss expectations, salary, notice period                           │  │
│ │ • HR adds interview notes                                               │  │
│ │ • Decision: Pass → Round 2 OR Reject                                    │  │
│ │                                                                         │  │
│ │ ROUND 2: TECHNICAL/MANAGER INTERVIEW (45 minutes)                       │  │
│ │ • Conduct technical/manager interview                                   │  │
│ │ • Assess skills and experience                                          │  │
│ │ • Discuss role responsibilities                                         │  │
│ │ • Manager adds interview notes                                          │  │
│ │ • Decision: Pass → Round 3 OR Reject                                    │  │
│ │                                                                         │  │
│ │ ROUND 3: FINAL INTERVIEW (30 minutes)                                   │  │
│ │ • Conduct final interview with senior management                        │  │
│ │ • Discuss company culture and values                                    │  │
│ │ • Answer candidate's questions                                          │  │
│ │ • Final assessment                                                      │  │
│ │ • Decision: Hire OR Reject                                              │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 8: FINAL DECISION                                                  │  │
│ │                                                                         │  │
│ │ PATH A: HIRED                                                           │  │
│ │ • HR updates status: Hired                                              │  │
│ │ • Send offer letter email                                               │  │
│ │ • Call candidate with good news                                         │  │
│ │ • Discuss joining date                                                  │  │
│ │ • Send formal offer letter                                              │  │
│ │ • Proceed to STEP 9                                                     │  │
│ │                                                                         │  │
│ │ PATH B: REJECTED                                                        │  │
│ │ • HR updates status: Rejected                                           │  │
│ │ • Send polite rejection email                                           │  │
│ │ • Provide feedback if requested                                         │  │
│ │ • END                                                                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 9: OFFER ACCEPTANCE                                                │  │
│ │ • Candidate reviews offer letter                                        │  │
│ │ • Candidate accepts/rejects offer                                       │  │
│ │ • If accepted: Sign offer letter                                        │  │
│ │ • Confirm joining date                                                  │  │
│ │ • Submit required documents                                             │  │
│ │ • Receive onboarding checklist                                          │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 10: ONBOARDING                                                     │  │
│ │ • Join on agreed date                                                   │  │
│ │ • Complete onboarding formalities                                       │  │
│ │ • Receive employee ID and credentials                                   │  │
│ │ • Attend orientation program                                            │  │
│ │ • Meet team members                                                     │  │
│ │ • Begin training                                                        │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ END: Successfully hired and onboarded                                         │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **USER FLOW 4: ADMIN ORDER MANAGEMENT FLOW**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📦 ADMIN ORDER MANAGEMENT FLOW                                                │
│                                                                               │
│ START: New order received                                                    │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 1: ORDER NOTIFICATION                                              │  │
│ │ • System receives new order                                             │  │
│ │ • Play sound alert in CMS                                               │  │
│ │ • Show desktop notification                                             │  │
│ │ • Send SMS to admin                                                     │  │
│ │ • Add order to "Pending" column in Order Tracking                       │  │
│ │ • Auto-send confirmation email to customer                              │  │
│ │ • Auto-send confirmation SMS to customer                                │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 2: ORDER REVIEW                                                    │  │
│ │ • Admin opens order detail                                              │  │
│ │ • View customer details (name, phone, address)                          │  │
│ │ • View order items and quantities                                       │  │
│ │ • View payment method (COD/Online)                                      │  │
│ │ • View payment status (Paid/Pending)                                    │  │
│ │ • View special instructions                                             │  │
│ │ • View delivery time preference                                         │  │
│ │ • Decision: Accept OR Reject                                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 3: ORDER ACCEPTANCE/REJECTION                                      │  │
│ │                                                                         │  │
│ │ PATH A: ACCEPT ORDER                                                    │  │
│ │ • Click "Accept Order"                                                  │  │
│ │ • Order status changes to "Accepted"                                    │  │
│ │ • Send acceptance SMS to customer                                       │  │
│ │ • Estimated time auto-calculated (30-45 mins)                           │  │
│ │ • Proceed to STEP 4                                                     │  │
│ │                                                                         │  │
│ │ PATH B: REJECT ORDER                                                    │  │
│ │ • Click "Reject Order"                                                  │  │
│ │ • Select rejection reason (Out of stock/Closed/Other)                   │  │
│ │ • Add custom message                                                    │  │
│ │ • Send rejection SMS to customer                                        │  │
│ │ • If online payment: Initiate refund                                    │  │
│ │ • END                                                                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4: PREPARATION                                                     │  │
│ │ • Drag order card to "Preparing" column                                 │  │
│ │ • Print kitchen order ticket (KOT)                                      │  │
│ │ • Kitchen staff receives order                                          │  │
│ │ • Kitchen starts preparing items                                        │  │
│ │ • Send "Preparing" SMS to customer                                      │  │
│ │ • Update estimated time if needed                                       │  │
│ │ • Monitor preparation progress                                          │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 5: QUALITY CHECK                                                   │  │
│ │ • Kitchen completes preparation                                         │  │
│ │ • Quality check by supervisor                                           │  │
│ │ • Verify all items are correct                                          │  │
│ │ • Check quantity and quality                                            │  │
│ │ • Pack order properly                                                   │  │
│ │ • Add sauces, napkins, cutlery                                          │  │
│ │ • Seal package                                                          │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 6: READY FOR DELIVERY                                              │  │
│ │ • Drag order card to "Ready" column                                     │  │
│ │ • Send "Ready" SMS to customer                                          │  │
│ │ • Assign delivery person                                                │  │
│ │ • Print delivery bill/invoice                                           │  │
│ │ • Hand over order to delivery person                                    │  │
│ │ • Delivery person confirms pickup                                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 7: OUT FOR DELIVERY                                                │  │
│ │ • Drag order card to "Out for Delivery" column                          │  │
│ │ • Send "Out for Delivery" SMS to customer                               │  │
│ │ • Include delivery person name and phone                                │  │
│ │ • Enable live tracking (if available)                                   │  │
│ │ • Monitor delivery progress                                             │  │
│ │ • Delivery person navigates to address                                  │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 8: DELIVERY COMPLETION                                             │  │
│ │ • Delivery person reaches customer                                      │  │
│ │ • Hand over order to customer                                           │  │
│ │ • Collect payment (if COD)                                              │  │
│ │ • Mark order as "Delivered" in app                                      │  │
│ │ • Upload delivery proof (photo/signature)                               │  │
│ │ • Return to restaurant                                                  │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 9: ORDER CLOSURE (Backend)                                         │  │
│ │ • System receives delivery confirmation                                 │  │
│ │ • Update order status to "Delivered"                                    │  │
│ │ • Send delivery confirmation SMS to customer                            │  │
│ │ • If COD: Update payment status to "Paid"                               │  │
│ │ • Update inventory (reduce stock)                                       │  │
│ │ • Update analytics (revenue, orders count)                              │  │
│ │ • Send review request to customer (after 1 hour)                        │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 10: POST-DELIVERY                                                  │  │
│ │ • Customer receives review request                                      │  │
│ │ • Customer submits rating and review                                    │  │
│ │ • Admin receives review notification                                    │  │
│ │ • Admin moderates review                                                │  │
│ │ • Approve/Reject review                                                 │  │
│ │ • If approved: Display on website                                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ END: Order successfully completed                                             │
│                                                                               │
│ **ALTERNATIVE PATHS:**                                                        │
│ • Delivery Issue → Contact customer → Resolve OR Cancel                      │
│ • Customer Not Available → Retry → Return to restaurant                      │
│ • Wrong Address → Contact customer → Get correct address                     │
│ • Order Cancellation → Refund (if paid) → Update status                      │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## **USER FLOW 5: CONTENT MANAGEMENT FLOW**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 🎨 CONTENT MANAGEMENT FLOW                                                    │
│                                                                               │
│ START: Admin wants to update website content                                 │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 1: CMS LOGIN                                                       │  │
│ │ • Admin navigates to /admin                                             │  │
│ │ • Enter email and password                                              │  │
│ │ • Click "Login"                                                         │  │
│ │ • System verifies credentials                                           │  │
│ │ • Redirect to CMS Dashboard                                             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 2: CMS DASHBOARD                                                   │  │
│ │ • View dashboard with analytics                                         │  │
│ │ • View recent activities                                                │  │
│ │ • View pending tasks                                                    │  │
│ │ • Select content module to manage                                       │  │
│ │ • Options: Homepage, Menu, About, Blog, etc.                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 3: SELECT CONTENT TYPE                                             │  │
│ │                                                                         │  │
│ │ OPTION A: UPDATE HOMEPAGE CONTENT                                       │  │
│ │ • Navigate to "Homepage Content" module                                 │  │
│ │ • Proceed to STEP 4A                                                    │  │
│ │                                                                         │  │
│ │ OPTION B: MANAGE MENU ITEMS                                             │  │
│ │ • Navigate to "Menu Items" module                                       │  │
│ │ • Proceed to STEP 4B                                                    │  │
│ │                                                                         │  │
│ │ OPTION C: WRITE BLOG POST                                               │  │
│ │ • Navigate to "Blog Posts" module                                       │  │
│ │ • Proceed to STEP 4C                                                    │  │
│ │                                                                         │  │
│ │ OPTION D: MANAGE TESTIMONIALS                                           │  │
│ │ • Navigate to "Testimonials" module                                     │  │
│ │ • Proceed to STEP 4D                                                    │  │
│ │                                                                         │  │
│ │ OPTION E: UPDATE ABOUT PAGE                                             │  │
│ │ • Navigate to "About Page" module                                       │  │
│ │ • Proceed to STEP 4E                                                    │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4A: UPDATE HOMEPAGE CONTENT                                        │  │
│ │ • View all homepage sections (accordion)                                │  │
│ │ • Expand section to edit (e.g., Hero Banner)                            │  │
│ │ • Edit heading text                                                     │  │
│ │ • Edit subheading text                                                  │  │
│ │ • Upload new background image/video                                     │  │
│ │ • Update CTA button text and links                                      │  │
│ │ • Toggle section visibility (Show/Hide)                                 │  │
│ │ • Click "Save Section"                                                  │  │
│ │ • Preview changes                                                       │  │
│ │ • If satisfied: Click "Publish"                                         │  │
│ │ • If not: Continue editing                                              │  │
│ │ • Proceed to STEP 5                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4B: MANAGE MENU ITEMS                                              │  │
│ │ • View all menu items in table                                          │  │
│ │ • Click "+ Add Item" to create new                                      │  │
│ │ • Fill form:                                                            │  │
│ │   - Item Name                                                           │  │
│ │   - Category (Dropdown)                                                 │  │
│ │   - Description (Rich text)                                             │  │
│ │   - Price (5pc and 10pc)                                                │  │
│ │   - Upload image                                                        │  │
│ │   - Ingredients (Tags)                                                  │  │
│ │   - Allergens (Tags)                                                    │  │
│ │   - Nutritional info                                                    │  │
│ │   - Availability (Toggle)                                               │  │
│ │   - Featured (Checkbox)                                                 │  │
│ │ • Click "Save"                                                          │  │
│ │ • Item added to menu                                                    │  │
│ │ • Preview on website                                                    │  │
│ │ • Proceed to STEP 5                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4C: WRITE BLOG POST                                                │  │
│ │ • Click "+ New Post"                                                    │  │
│ │ • Enter post title                                                      │  │
│ │ • URL slug auto-generated (editable)                                    │  │
│ │ • Write content in rich text editor                                     │  │
│ │ • Format text (bold, italic, headings)                                  │  │
│ │ • Insert images from media library                                      │  │
│ │ • Add links                                                             │  │
│ │ • Write excerpt                                                         │  │
│ │ • Upload featured image                                                 │  │
│ │ • Select category                                                       │  │
│ │ • Add tags                                                              │  │
│ │ • Fill SEO fields (meta title, description)                             │  │
│ │ • Click "Save Draft" (auto-saves every 30 seconds)                      │  │
│ │ • Click "Preview" to see how it looks                                   │  │
│ │ • If satisfied: Click "Publish"                                         │  │
│ │ • If schedule: Select date/time and click "Schedule"                    │  │
│ │ • Proceed to STEP 5                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4D: MANAGE TESTIMONIALS                                            │  │
│ │ • View all testimonials in table                                        │  │
│ │ • Option 1: Import from reviews                                         │  │
│ │   - Click "Import from Reviews"                                         │  │
│ │   - Select reviews to import                                            │  │
│ │   - Click "Import Selected"                                             │  │
│ │ • Option 2: Add manually                                                │  │
│ │   - Click "+ Add Testimonial"                                           │  │
│ │   - Enter customer name                                                 │  │
│ │   - Upload customer photo                                               │  │
│ │   - Enter testimonial text                                              │  │
│ │   - Select rating (stars)                                               │  │
│ │   - Enter location                                                      │  │
│ │   - Mark as featured (checkbox)                                         │  │
│ │   - Show on homepage (checkbox)                                         │  │
│ │   - Click "Save"                                                        │  │
│ │ • Reorder testimonials (drag-drop)                                      │  │
│ │ • Preview on website                                                    │  │
│ │ • Proceed to STEP 5                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 4E: UPDATE ABOUT PAGE                                              │  │
│ │ • View About page content sections                                      │  │
│ │ • Edit hero section (title, subtitle, image)                            │  │
│ │ • Edit brand story (rich text editor)                                   │  │
│ │ • Update founder section:                                               │  │
│ │   - Edit founder name                                                   │  │
│ │   - Upload new photo                                                    │  │
│ │   - Edit founder message                                                │  │
│ │   - Update quote                                                        │  │
│ │ • Edit values section:                                                  │  │
│ │   - Update existing values                                              │  │
│ │   - Add new values                                                      │  │
│ │   - Delete values                                                       │  │
│ │ • Edit awards section:                                                  │  │
│ │   - Add new awards                                                      │  │
│ │   - Upload award images                                                 │  │
│ │ • Click "Save All Changes"                                              │  │
│ │ • Preview changes                                                       │  │
│ │ • Click "Publish"                                                       │  │
│ │ • Proceed to STEP 5                                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 5: PUBLISH & VERIFY                                                │  │
│ │ • Content published to live website                                     │  │
│ │ • System clears cache                                                   │  │
│ │ • Display success message                                               │  │
│ │ • Click "View Live Site" to verify                                      │  │
│ │ • Check changes on live website                                         │  │
│ │ • If issues: Return to CMS and edit                                     │  │
│ │ • If good: Content update complete                                      │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ ┌─────────────────────────────────────────────────────────────────────────┐  │
│ │ STEP 6: ACTIVITY LOG                                                    │  │
│ │ • System logs activity:                                                 │  │
│ │   - User: Admin Name                                                    │  │
│ │   - Action: Updated/Created/Deleted                                     │  │
│ │   - Module: Homepage/Menu/Blog/etc.                                     │  │
│ │   - Details: What was changed                                           │  │
│ │   - Timestamp: Date and time                                            │  │
│ │   - IP Address: Admin's IP                                              │  │
│ │ • Activity visible in Activity Log module                               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│   │                                                                           │
│   ▼                                                                           │
│ END: Content successfully updated                                             │
│                                                                               │
│ **ADDITIONAL FEATURES:**                                                      │
│ • Auto-save drafts every 30 seconds                                           │
│ • Version history (rollback to previous versions)                             │
│ • Preview before publish                                                      │
│ • Schedule content for future publish                                         │
│ • Bulk actions (delete, publish, unpublish)                                   │
│ • Media library for image management                                          │
│ • SEO optimization tools                                                      │
│ • Mobile preview                                                              │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎉 **ALL 5 USER FLOWS COMPLETE!**

### **USER FLOW SUMMARY:**

1. **Customer Ordering Flow** - Complete journey from browsing to delivery
2. **Franchise Application Flow** - From application to franchise launch
3. **Job Application Flow** - From job posting to hiring and onboarding
4. **Admin Order Management Flow** - Backend order processing workflow
5. **Content Management Flow** - CMS content update workflow

---

**TASK 3 (CMS 26 MODULES) ✅ COMPLETE**
**TASK 4 (5 USER FLOWS) ✅ COMPLETE**

**TOTAL DOCUMENTATION:**
- 11 Pages Visual Structure ✅
- 26 CMS Modules Visual Structure ✅
- 5 User Flow Diagrams ✅
