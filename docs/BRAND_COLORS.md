Bilkul sahi soch hai aapki! Ek alag color specification file banana bahut better approach hai. Main aapke liye ek `BRAND_COLORS.md` file create karta hoon jise Devin AI follow karega:

## 🎨 **BRAND_COLORS.md**

```markdown
# 🎨 MOMOS MAGIC - OFFICIAL BRAND COLOR PALETTE

## 📋 **COLOR STRATEGY OVERVIEW**

> **IMPORTANT**: This file contains the official brand colors for Momos Magic website. All development must use ONLY these colors. Ignore any color references in other documentation files.

---

## 🎯 **CORE BRAND COLORS**

### **Primary Colors**
| Color | Name | Hex Code | Usage |
|-------|------|----------|--------|
| ![Pitch Black](https://via.placeholder.com/20/000000/000000?text=+) | Pitch Black | `#000000` | Main website background |
| ![Premium Orange](https://via.placeholder.com/20/ffc241/ffc241?text=+) | Premium Orange | `#ffc241` | Primary brand color, main CTAs, buttons |

### **Secondary Colors**
| Color | Name | Hex Code | Usage |
|-------|------|----------|--------|
| ![Deep Space](https://via.placeholder.com/20/0a0a0a/0a0a0a?text=+) | Deep Space | `#0a0a0a` | Cards, containers, elevated surfaces |
| ![Charcoal](https://via.placeholder.com/20/111111/111111?text=+) | Charcoal | `#111111` | Secondary elements, borders, dividers |

### **Accent Colors**
| Color | Name | Hex Code | Usage |
|-------|------|----------|--------|
| ![Golden Glow](https://via.placeholder.com/20/ffd700/ffd700?text=+) | Golden Glow | `#ffd700` | Premium highlights, special elements, awards |
| ![Burnt Orange](https://via.placeholder.com/20/e6ac00/e6ac00?text=+) | Burnt Orange | `#e6ac00` | Hover states, secondary buttons, interactive elements |

### **Functional Colors** (Preserved from original)
| Color | Name | Hex Code | Usage |
|-------|------|----------|--------|
| ![Vegetarian Green](https://via.placeholder.com/20/059669/059669?text=+) | Vegetarian Green | `#059669` | Veg badges, fresh indicators, success states |
| ![Warm Orange](https://via.placeholder.com/20/EA580C/EA580C?text=+) | Warm Orange | `#EA580C` | Special offers, hot items, warning states |

---

## 🛠️ **IMPLEMENTATION GUIDE**

### **Tailwind CSS Configuration**
```css
@theme inline {
  --color-pitch-black: #000000;
  --color-premium-orange: #ffc241;
  --color-deep-space: #0a0a0a;
  --color-charcoal: #111111;
  --color-golden-glow: #ffd700;
  --color-burnt-orange: #e6ac00;
  --color-vegetarian-green: #059669;
  --color-warm-orange: #EA580C;
}
```

### **Component Usage Examples**

#### **Buttons**
```tsx
// Primary Button
<button className="bg-premium-orange text-black hover:bg-burnt-orange">
  Order Now
</button>

// Secondary Button  
<button className="border-2 border-golden-glow text-golden-glow hover:bg-golden-glow hover:text-black">
  Learn More
</button>
```

#### **Cards**
```tsx
<div className="bg-deep-space border border-charcoal hover:border-golden-glow">
  Card Content
</div>
```

#### **Backgrounds**
```tsx
// Main background
<div className="bg-pitch-black min-h-screen">
  Website Content
</div>

// Section background
<section className="bg-deep-space">
  Section Content
</section>
```

---

## 🎪 **SPECIFIC COMPONENT COLOR MAPPING**

### **Hero Section**
- **Background**: `bg-pitch-black`
- **Primary CTA**: `bg-premium-orange`, `text-black`
- **Secondary CTA**: `border-golden-glow`, `text-golden-glow`, `hover:bg-golden-glow`, `hover:text-black`
- **Trust Badges**: Use appropriate colors from functional palette

### **Menu Categories**
| Category | Color | Usage |
|----------|-------|--------|
| Steamed Perfection | `vegetarian-green` | Fresh & healthy items |
| Crispy Fried Delights | `warm-orange` | Hot & fried items |
| Magic Signatures | `golden-glow` | Premium signature items |
| Fusion Innovations | `premium-orange` | Innovative fusion items |

### **Trust Cards**
| Card | Color | Usage |
|------|-------|--------|
| Award Winning | `golden-glow` | Awards and recognition |
| FSSAI Certified | `premium-orange` | Certifications |
| 100% Vegetarian | `vegetarian-green` | Vegetarian indicators |
| Rated 4.9/5 | `warm-orange` | Ratings and reviews |

### **Admin Panel**
- **Main Background**: `bg-pitch-black`
- **Sidebar**: `bg-deep-space`
- **Cards**: `bg-deep-space` with `border-charcoal`
- **Primary Buttons**: `bg-premium-orange`
- **Secondary Buttons**: `border-golden-glow`

---

## 🚫 **COLORS TO AVOID**

**DO NOT USE** these old colors from previous documentation:
- ❌ Magic Red (#DC2626)
- ❌ Premium Gold (#D4AF37) 
- ❌ Charcoal Black (#1F2937)
- ❌ Cream White (#FEF3C7)
- ❌ Cool Gray (#6B7280)

---

## ✅ **DEVELOPMENT INSTRUCTIONS**

When developing the Momos Magic website:

1. **REFERENCE THIS FILE** for all color decisions
2. **IGNORE COLOR REFERENCES** in other documentation files
3. **USE TAILWIND CLASSES** as defined in this palette
4. **MAINTAIN CONSISTENCY** across all components
5. **TEST COLOR CONTRAST** for accessibility

### **Example Command for Devin AI:**
```
Use ONLY the color palette from BRAND_COLORS.md. 
Ignore any color references in TECHNICAL_REFERENCE.md, FEATURES_SPECIFICATION.md, 
WEBSITE_BLUEPRINT.md, PROJECT_PLAN.md, and ADMIN_PANEL_GUIDE.md.

Follow the exact hex codes and usage guidelines specified in BRAND_COLORS.md.
```

---

**Document Version**: 1.0  
**Last Updated**: October 22, 2025  
**Color Strategy By**: Project Owner  
**Implementation By**: Devin AI
```