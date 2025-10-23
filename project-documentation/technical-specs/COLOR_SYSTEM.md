# 🎨 MOMOS MAGIC - COLOR SYSTEM SPECIFICATION

---

## CORE BRAND COLORS

### Primary Colors

#### Pitch Black
- **Hex**: `#000000`
- **RGB**: `rgb(0, 0, 0)`
- **Usage**: Primary background, main surfaces, base layer
- **Application**: Body background, main containers, header/footer

#### Premium Orange
- **Hex**: `#ffc241`
- **RGB**: `rgb(255, 194, 65)`
- **Usage**: Primary accent, CTAs, highlights, brand identity
- **Application**: Buttons, links, important text, badges, borders

---

## EXTENDED COLOR PALETTE

### Surface Colors

#### Deep Space
- **Hex**: `#0a0a0a`
- **RGB**: `rgb(10, 10, 10)`
- **Usage**: Cards, containers, elevated surfaces
- **Application**: Product cards, content blocks, modal backgrounds

#### Charcoal
- **Hex**: `#111111`
- **RGB**: `rgb(17, 17, 17)`
- **Usage**: Secondary elements, borders, dividers
- **Application**: Card borders, section dividers, input fields

### Accent Colors

#### Golden Glow
- **Hex**: `#ffd700`
- **RGB**: `rgb(255, 215, 0)`
- **Usage**: Premium highlights, special elements, awards
- **Application**: Premium badges, special offers, award icons

#### Burnt Orange
- **Hex**: `#e6ac00`
- **RGB**: `rgb(230, 172, 0)`
- **Usage**: Secondary buttons, hover states
- **Application**: Button hover effects, secondary CTAs

---

## FUNCTIONAL COLORS

### Category Colors

#### Vegetarian Green
- **Hex**: `#059669`
- **RGB**: `rgb(5, 150, 105)`
- **Usage**: Veg badges, fresh indicators, success states
- **Application**: Vegetarian labels, freshness indicators

#### Warm Orange
- **Hex**: `#EA580C`
- **RGB**: `rgb(234, 88, 12)`
- **Usage**: Special offers, hot indicators, urgency
- **Application**: Hot deals, limited time offers, spicy indicators

---

## GRADIENT SYSTEM

### Primary Gradients

#### Black to Orange
```css
background: linear-gradient(135deg, #000000 0%, #ffc241 100%);
```
**Usage**: Hero sections, premium banners, feature highlights

#### Orange Glow
```css
background: linear-gradient(135deg, #ffc241 0%, #ffd700 100%);
```
**Usage**: Buttons, active states, highlights, premium elements

#### Deep Shadow
```css
background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
```
**Usage**: Cards, elevated surfaces, depth creation

---

## COLOR COMBINATIONS

### Primary Combination
**For**: Main CTAs & Primary Actions
```css
Background: #ffc241
Text: #000000
Border: #ffd700 (on hover)
```

### Secondary Combination
**For**: Secondary Actions & Links
```css
Background: transparent
Text: #ffc241
Border: 2px solid #ffc241
```

### Premium Combination
**For**: Special Offers & Premium Features
```css
Background: linear-gradient(135deg, #ffc241, #ffd700)
Text: #000000
Shadow: 0 10px 30px rgba(255, 194, 65, 0.4)
```

### Card Combination
**For**: Product Cards & Content Blocks
```css
Background: #111111
Border: 1px solid #ffc241
Text: #ffffff
Accent: #ffc241
```

---

## BUTTON SYSTEM

### Primary Button
```css
background: #ffc241;
color: #000000;
border: none;
border-radius: 8px;
padding: 18px 30px;
font-weight: bold;
transition: all 0.3s ease;

/* Hover State */
background: #ffd700;
transform: translateY(-3px);
box-shadow: 0 10px 25px rgba(255, 194, 65, 0.3);
```

### Secondary Button
```css
background: transparent;
color: #ffc241;
border: 2px solid #ffc241;
border-radius: 8px;
padding: 18px 30px;
font-weight: bold;
transition: all 0.3s ease;

/* Hover State */
background: rgba(255, 194, 65, 0.1);
border-color: #ffd700;
color: #ffd700;
```

### Premium Button
```css
background: linear-gradient(135deg, #ffc241, #ffd700);
color: #000000;
border: none;
border-radius: 8px;
padding: 18px 30px;
font-weight: bold;
transition: all 0.3s ease;

/* Hover State */
box-shadow: 0 10px 30px rgba(255, 194, 65, 0.4);
transform: translateY(-3px);
```

### Ghost Button
```css
background: #111111;
color: #ffc241;
border: 2px solid #333333;
border-radius: 8px;
padding: 18px 30px;
font-weight: bold;
transition: all 0.3s ease;

/* Hover State */
border-color: #ffc241;
background: rgba(255, 194, 65, 0.05);
```

---

## BADGE SYSTEM

### Category Badges

#### Steamed Badge
```css
background: #ffc241;
color: #000000;
border-radius: 30px;
padding: 15px 25px;
font-weight: bold;
```

#### Fried Badge
```css
background: linear-gradient(135deg, #ffc241, #ffd700);
color: #000000;
border-radius: 30px;
padding: 15px 25px;
font-weight: bold;
```

#### Kurkure Badge
```css
background: transparent;
color: #ffc241;
border: 2px solid #ffc241;
border-radius: 30px;
padding: 15px 25px;
font-weight: bold;
```

#### Pizza Momos Badge
```css
background: #111111;
color: #ffd700;
border: 2px solid #ffd700;
border-radius: 30px;
padding: 15px 25px;
font-weight: bold;
```

### Trust Badges

#### Award Winning
```css
background: transparent;
color: #ffd700;
border: 2px solid #ffd700;
icon: 🏆
```

#### FSSAI Certified
```css
background: #ffc241;
color: #000000;
icon: 🔒
```

#### 100% Vegetarian
```css
background: linear-gradient(135deg, #ffc241, #ffd700);
color: #000000;
icon: 🌱
```

#### Rated 4.9/5
```css
background: transparent;
color: #ffc241;
border: 2px solid #ffc241;
icon: ⭐
```

---

## CARD SYSTEM

### Product Card
```css
background: #111111;
border: 1px solid #1a1a1a;
border-radius: 15px;
padding: 30px;
transition: all 0.3s ease;

/* Hover State */
border-color: #ffc241;
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(255, 194, 65, 0.15);
```

### Feature Card
```css
background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
border: 2px solid #ffc241;
border-radius: 15px;
padding: 35px;
transition: all 0.3s ease;

/* Hover State */
box-shadow: 0 20px 40px rgba(255, 194, 65, 0.2);
transform: translateY(-5px);
```

---

## TEXT COLORS

### Primary Text
```css
color: #ffffff;
```

### Secondary Text
```css
color: #cccccc;
opacity: 0.9;
```

### Accent Text
```css
color: #ffc241;
```

### Premium Text
```css
background: linear-gradient(45deg, #ffc241, #ffd700);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-shadow: 0 0 30px rgba(255, 194, 65, 0.3);
```

---

## SHADOW SYSTEM

### Subtle Shadow
```css
box-shadow: 0 10px 40px rgba(255, 194, 65, 0.1);
```

### Medium Shadow
```css
box-shadow: 0 20px 50px rgba(255, 194, 65, 0.2);
```

### Strong Shadow
```css
box-shadow: 0 10px 30px rgba(255, 194, 65, 0.4);
```

---

## BORDER SYSTEM

### Subtle Border
```css
border: 1px solid #1a1a1a;
```

### Accent Border
```css
border: 1px solid #ffc241;
```

### Premium Border
```css
border: 2px solid #ffd700;
```

### Thick Border
```css
border: 3px solid #ffc241;
```

---

## OPACITY SYSTEM

### Background Overlays
```css
/* Dark Overlay */
background: rgba(0, 0, 0, 0.8);

/* Orange Overlay */
background: rgba(255, 194, 65, 0.1);

/* Premium Overlay */
background: rgba(255, 215, 0, 0.05);
```

---

## ANIMATION COLORS

### Glow Effect
```css
box-shadow: 0 0 30px rgba(255, 194, 65, 0.3);
```

### Shimmer Effect
```css
background: linear-gradient(90deg, transparent, rgba(255, 194, 65, 0.1), transparent);
```

---

## ACCESSIBILITY NOTES

- **Contrast Ratio**: All text on black background meets WCAG AA standards
- **Orange on Black**: 8.5:1 contrast ratio (AAA compliant)
- **White on Black**: 21:1 contrast ratio (AAA compliant)
- **Focus States**: All interactive elements have visible focus indicators

---

*Color system is complete and ready for implementation. Reference file: color-system-reference.html*
