# 🥟 MOMOS MAGIC - COMPLETE WEBSITE BLUEPRINT

**Saved Date:** October 23, 2025  
**Updated:** October 23, 2025 (Complete Design System Added)  
**Source:** Client-provided data  
**Client:** Ansh Shivvay Gupta (shivamkumar14102801@gmail.com)

---

## **📋 PROJECT OVERVIEW**

| **Aspect** | **Details** |
|------------|-------------|
| **Project Name** | Momos Magic - Premium Branding Website |
| **Business Type** | Food & Beverage (Momos Speciality) |
| **Location** | Naya Bazar, Sherghati, Bihar 824211 |
| **Founder** | Dhruv Gupta |
| **Established** | September 2023 |
| **Target** | Momos Lovers (All Age Groups) |
| **Primary Goal** | Brand Building + Takeaway Orders |
| **Secondary Goal** | Future App Integration |
| **Website** | https://momosmagic.in (LIVE Production) |
| **Framework** | Next.js 16 with Turbopack |
| **Database** | MySQL |
| **Deployment** | Vercel |
| **CMS** | 26 modules for content management |

---

## **🎨 DESIGN SYSTEM & BRAND GUIDELINES**

### **Color Palette** (Black & Orange Premium Theme)

```css
/* Primary Colors */
--color-primary: #000000;           /* Rich Black - Main background */
--color-secondary: #ffc241;         /* Premium Orange - Brand accent */
--color-accent: #ffd700;            /* Golden Yellow - Highlights */

/* Background Colors */
--color-background-dark: #0a0a0a;   /* Deep Space - Sections background */
--color-background-light: #ffffff;  /* White - Alternate sections */
--color-background-gray: #f5f5f5;   /* Light Gray - Subtle backgrounds */

/* Text Colors */
--color-text-primary: #ffffff;      /* White - On dark backgrounds */
--color-text-secondary: #000000;    /* Black - On light backgrounds */
--color-text-muted: #666666;        /* Gray - Secondary text */
--color-text-light: #999999;        /* Light Gray - Tertiary text */

/* Interactive Colors */
--color-hover: #ffb700;             /* Darker Orange - Hover states */
--color-active: #ffa500;            /* Deep Orange - Active states */
--color-focus: #ffc241;             /* Premium Orange - Focus rings */

/* Status Colors */
--color-success: #10b981;           /* Green - Success messages */
--color-error: #ef4444;             /* Red - Error messages */
--color-warning: #f59e0b;           /* Amber - Warning messages */
--color-info: #3b82f6;              /* Blue - Info messages */

/* Border & Divider Colors */
--color-border: #333333;            /* Dark Gray - Borders on dark bg */
--color-border-light: #e5e5e5;      /* Light Gray - Borders on light bg */
--color-divider: #1a1a1a;           /* Subtle dividers */

/* Overlay Colors */
--color-overlay-dark: rgba(0, 0, 0, 0.8);      /* Dark overlay */
--color-overlay-light: rgba(255, 255, 255, 0.9); /* Light overlay */
```

---

### **Typography System**

#### **Font Families**
```css
/* Primary Font - Modern Sans-Serif */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Secondary Font - Display/Headings */
--font-display: 'Poppins', 'Inter', sans-serif;

/* Monospace Font - Code/Technical */
--font-mono: 'Fira Code', 'Courier New', monospace;
```

#### **Font Sizes**
```css
/* Display Sizes - Hero sections */
--text-display-xl: 4.5rem;    /* 72px - Main hero */
--text-display-lg: 3.75rem;   /* 60px - Section heroes */
--text-display-md: 3rem;      /* 48px - Page titles */

/* Heading Sizes */
--text-h1: 2.5rem;            /* 40px */
--text-h2: 2rem;              /* 32px */
--text-h3: 1.75rem;           /* 28px */
--text-h4: 1.5rem;            /* 24px */
--text-h5: 1.25rem;           /* 20px */
--text-h6: 1.125rem;          /* 18px */

/* Body Sizes */
--text-body-xl: 1.25rem;      /* 20px - Large body */
--text-body-lg: 1.125rem;     /* 18px - Default body */
--text-body-md: 1rem;         /* 16px - Standard */
--text-body-sm: 0.875rem;     /* 14px - Small text */
--text-body-xs: 0.75rem;      /* 12px - Captions */
```

#### **Font Weights**
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

#### **Line Heights**
```css
--line-height-tight: 1.2;     /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form content */
--line-height-loose: 2;       /* Spacious content */
```

#### **Letter Spacing**
```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

---

### **Spacing System**

```css
/* Base spacing unit: 4px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

---

### **Border Radius**

```css
--radius-none: 0;
--radius-sm: 0.25rem;     /* 4px - Subtle rounding */
--radius-md: 0.5rem;      /* 8px - Standard buttons */
--radius-lg: 0.75rem;     /* 12px - Cards */
--radius-xl: 1rem;        /* 16px - Large cards */
--radius-2xl: 1.5rem;     /* 24px - Hero sections */
--radius-full: 9999px;    /* Full circle/pill */
```

---

### **Shadows**

```css
/* Elevation Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Glow Effects */
--shadow-glow-orange: 0 0 20px rgba(255, 194, 65, 0.5);
--shadow-glow-gold: 0 0 20px rgba(255, 215, 0, 0.5);
```

---

### **Component Specifications**

#### **Buttons**

```css
/* Primary Button */
.button-primary {
  background: var(--color-secondary);
  color: var(--color-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md);
  transition: all 0.3s ease;
}

.button-primary:hover {
  background: var(--color-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Secondary Button */
.button-secondary {
  background: transparent;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md);
  transition: all 0.3s ease;
}

.button-secondary:hover {
  background: var(--color-secondary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* Button Sizes */
.button-sm { padding: var(--space-2) var(--space-4); font-size: var(--text-body-sm); }
.button-md { padding: var(--space-3) var(--space-6); font-size: var(--text-body-md); }
.button-lg { padding: var(--space-4) var(--space-8); font-size: var(--text-body-lg); }
```

#### **Form Inputs**

```css
/* Text Input */
.input-text {
  background: var(--color-background-light);
  border: 2px solid var(--color-border-light);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-body-md);
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.input-text:focus {
  border-color: var(--color-focus);
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 194, 65, 0.1);
}

/* Textarea */
.input-textarea {
  min-height: 120px;
  resize: vertical;
}

/* Select Dropdown */
.input-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Dropdown arrow */
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  padding-right: var(--space-10);
}
```

#### **Cards**

```css
/* Standard Card */
.card {
  background: var(--color-background-light);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Dark Card */
.card-dark {
  background: var(--color-background-dark);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

/* Menu Item Card */
.card-menu-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.card-menu-item:hover .card-image {
  transform: scale(1.1);
}
```

#### **Navigation**

```css
/* Header Navigation */
.nav-header {
  background: var(--color-primary);
  padding: var(--space-4) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-md);
}

/* Nav Links */
.nav-link {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  padding: var(--space-2) var(--space-4);
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--color-secondary);
}

.nav-link.active {
  color: var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
}
```

---

### **Animation & Transitions**

```css
/* Timing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Duration */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Common Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

---

### **Breakpoints (Responsive Design)**

```css
/* Mobile First Approach */
--breakpoint-xs: 320px;   /* Small phones */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

---

### **Grid System**

```css
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Grid Layouts */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

### **Z-Index Layers**

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## **🎯 BRAND GUIDELINES**

### **Logo Usage**
- **Primary Logo:** Full color on light backgrounds
- **Inverse Logo:** White on dark backgrounds
- **Minimum Size:** 120px width
- **Clear Space:** Minimum 20px around logo
- **File Formats:** SVG (preferred), PNG (fallback)

### **Photography Style**
- **Food Photography:** Close-up, steam visible, vibrant colors
- **Behind-the-Scenes:** Kitchen cleanliness, preparation process
- **Customer Moments:** Authentic, candid shots
- **Lighting:** Natural light preferred, warm tones
- **Composition:** Rule of thirds, focus on product

### **Iconography**
- **Style:** Line icons, 2px stroke weight
- **Size:** 24px standard, scalable
- **Color:** Match text color or use brand orange
- **Library:** Heroicons, Lucide, or custom

### **Voice & Tone**
- **Inspirational:** Highlighting entrepreneurial journey
- **Premium:** Emphasizing quality and innovation
- **Authentic:** Real story, real achievements
- **Friendly:** Approachable and welcoming
- **Confident:** Proud of accomplishments

---

## **📱 RESPONSIVE DESIGN PRINCIPLES**

### **Mobile First**
- Design for mobile screens first
- Progressive enhancement for larger screens
- Touch-friendly targets (minimum 44px)
- Simplified navigation on mobile

### **Tablet Optimization**
- 2-column layouts where appropriate
- Optimized image sizes
- Adjusted typography scale
- Touch and mouse support

### **Desktop Experience**
- Full navigation visible
- Multi-column layouts
- Hover states and animations
- Keyboard navigation support

---

## **♿ ACCESSIBILITY STANDARDS**

### **WCAG 2.1 Level AA Compliance**
- Color contrast ratio minimum 4.5:1
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators visible
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed

---

## **🚀 PERFORMANCE GUIDELINES**

### **Loading Performance**
- Images: WebP format, lazy loading
- Fonts: Subset, preload critical fonts
- CSS: Critical CSS inline, defer non-critical
- JavaScript: Code splitting, lazy loading
- Target: < 3s First Contentful Paint

### **Runtime Performance**
- Smooth 60fps animations
- Debounced scroll handlers
- Optimized re-renders
- Efficient state management

---

**Document Status:** ✅ COMPLETE  
**Last Updated:** October 23, 2025  
**Purpose:** Complete design system reference for Momos Magic brand website
