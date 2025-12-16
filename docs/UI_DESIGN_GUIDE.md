# TiCON Global UI Design Guide

## Overview

This guide explains the UI design pattern used in TiCON Global and how to build consistent interfaces using our design system. It also includes instructions for integrating shadcn/ui with the correct colors and design patterns.

---

## 🎨 Color Palette

### Primary Colors

Our design uses a **gradient-based color system** with the following core colors:

```css
/* Primary Brand Colors */
--primary-dark: #322fb3;      /* Deep Purple */
--primary-mid: #417DD2;       /* Medium Blue */
--primary-light: #5BCFF2;     /* Light Cyan */
--accent: #4fcbf1;            /* Bright Cyan */

/* Text Colors */
--text-dark: #343c55;         /* Headings */
--text-body: #717788;         /* Body text */

/* Background Colors */
--bg-light: #f8f9ff;          /* Light background */
--bg-white: #ffffff;          /* White background */
--bg-gradient: #e8f4f8;       /* Gradient background */

/* Border & Input Colors */
--border-light: #e8ecf4;      /* Light borders */
--border-default: #bdbdcc;    /* Default borders */
```

### Gradient Patterns

We use **two main gradient patterns**:

#### Gradient 1 (Primary)
```css
background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
```
**Usage:** Primary buttons, hero sections, call-to-action elements

#### Gradient 2 (Secondary)
```css
background: linear-gradient(-45deg, #00f2fe 0%, #28CFFE 50%, #4facfe 100%);
```
**Usage:** Secondary elements, hover states, accents

#### Text Gradient
```css
background: linear-gradient(to right, #322FB3 39%, #4fcbf1 60%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Usage:** Subtitles, special headings, emphasis text

---

## 🏗️ Design Patterns

### 1. **Animated Background Shapes**

Our design uses floating animated shapes in the background for visual depth:

```tsx
<div className="section-shape">
  <div className="shape shape-1">
    <img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" />
  </div>
  <div className="shape shape-2">
    <img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="Shape" />
  </div>
</div>
```

```css
.section-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### 2. **Card Design Pattern**

Cards use subtle shadows and gradient accents:

```tsx
<div className="card-design">
  {/* Content */}
</div>
```

```css
.card-design {
  background: #ffffff;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 20px 60px rgba(50, 47, 179, 0.1);
  position: relative;
  overflow: hidden;
}

.card-design::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
}
```

### 3. **Button Styles**

#### Primary Button (Gradient)
```tsx
<a href="/link" className="btn-style-one">
  <span>Button Text</span>
</a>
```

#### Outlined Button
```tsx
<a 
  href="/link" 
  className="btn-style-one" 
  style={{
    background: 'transparent', 
    border: '2px solid #4fcbf1', 
    padding: '18px 35px'
  }}
>
  <span style={{color: '#4fcbf1'}}>Button Text</span>
</a>
```

### 4. **Form Input Pattern**

```tsx
<input
  type="text"
  className="form-control login-input"
  placeholder="Enter text"
/>
```

```css
.login-input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e8ecf4;
  border-radius: 10px;
  font-size: 15px;
  color: #343c55;
  transition: all 0.3s ease;
  background: #f8f9ff;
}

.login-input:focus {
  outline: none;
  border-color: #4fcbf1;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(79, 203, 241, 0.1);
}
```

### 5. **Typography Pattern**

```tsx
<div className="heading-one">
  <span className="heading-one-subtitle gradient-text-1">Subtitle</span>
  <h2 className="heading-one-title">Main Heading</h2>
  <p>Description text goes here</p>
</div>
```

**Font Stack:**
- **Headings:** Poppins (700 weight)
- **Body:** Open Sans (400-600 weight)

**Sizes:**
- H1/Title: 60px (responsive: 50px → 40px → 30px)
- H2: 42px
- Subtitle: 18px (uppercase, letter-spacing: 4px)
- Body: 16px

---

## 🚀 Integrating shadcn/ui

### Step 1: Install shadcn/ui

```bash
npx shadcn@latest init
```

When prompted, choose:
- **TypeScript:** Yes
- **Style:** CSS variables
- **Base color:** Slate
- **CSS variables:** Yes

### Step 2: Configure Theme Colors

Edit `app/globals.css` to include TiCON colors:

```css
@layer base {
  :root {
    /* TiCON Brand Colors */
    --primary-dark: 224 73% 45%;      /* #322fb3 */
    --primary-mid: 218 67% 63%;       /* #417DD2 */
    --primary-light: 195 87% 66%;     /* #5BCFF2 */
    --accent: 192 87% 64%;            /* #4fcbf1 */
    
    /* shadcn/ui Variables */
    --background: 0 0% 100%;
    --foreground: 222 47% 29%;        /* #343c55 */
    
    --card: 0 0% 100%;
    --card-foreground: 222 47% 29%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 29%;
    
    --primary: 224 73% 45%;           /* #322fb3 */
    --primary-foreground: 0 0% 100%;
    
    --secondary: 192 87% 64%;         /* #4fcbf1 */
    --secondary-foreground: 0 0% 100%;
    
    --muted: 240 100% 98%;            /* #f8f9ff */
    --muted-foreground: 220 13% 50%;  /* #717788 */
    
    --accent: 192 87% 64%;            /* #4fcbf1 */
    --accent-foreground: 0 0% 100%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    
    --border: 220 26% 92%;            /* #e8ecf4 */
    --input: 220 26% 92%;
    --ring: 192 87% 64%;              /* #4fcbf1 */
    
    --radius: 0.625rem;               /* 10px */
  }
}
```

### Step 3: Add Gradient Utilities

Add these custom utilities to `globals.css`:

```css
@layer utilities {
  .gradient-primary {
    background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
  }
  
  .gradient-secondary {
    background: linear-gradient(-45deg, #00f2fe 0%, #28CFFE 50%, #4facfe 100%);
  }
  
  .gradient-text {
    background: linear-gradient(to right, #322FB3 39%, #4fcbf1 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .card-gradient-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
  }
}
```

### Step 4: Install Components

```bash
# Install commonly used components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Step 5: Customize Button Component

Edit `components/ui/button.tsx` to add gradient variant:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-content-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Add gradient variant
        gradient: "gradient-primary text-white hover:opacity-90 transition-opacity",
        outline: "border-2 border-accent text-accent hover:bg-accent/10",
        // ... other variants
      },
    },
  }
)
```

### Step 6: Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card className="relative overflow-hidden">
      <div className="card-gradient-border" />
      
      <h2 className="text-4xl font-bold text-foreground mb-2">
        Welcome
      </h2>
      <p className="gradient-text text-lg font-semibold mb-4">
        TiCON Global
      </p>
      
      <Input 
        placeholder="Enter email" 
        className="mb-4"
      />
      
      <Button variant="gradient" className="w-full">
        Get Started
      </Button>
    </Card>
  )
}
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
@media only screen and (max-width: 479px) { /* Extra Small */ }
@media only screen and (max-width: 575px) { /* Small */ }
@media only screen and (max-width: 767px) { /* Medium */ }
@media only screen and (min-width: 768px) and (max-width: 991px) { /* Tablet */ }
@media only screen and (min-width: 992px) and (max-width: 1199px) { /* Desktop */ }
@media only screen and (min-width: 1200px) { /* Large Desktop */ }
```

### Spacing Scale

```css
/* Section Spacing */
.section-padding: 120px (desktop) → 80px (tablet) → 60px (mobile)
.section-margin: 120px (desktop) → 80px (tablet) → 60px (mobile)

/* Component Spacing */
.mb-30: 30px margin-bottom
.mb-60: 60px (desktop) → 30px (mobile)
```

---

## 🎯 Best Practices

### 1. **Always Use Gradients for Primary Actions**
```tsx
// ✅ Good
<button className="btn-style-one gradient-primary">
  <span>Primary Action</span>
</button>

// ❌ Avoid
<button style={{backgroundColor: '#322fb3'}}>
  Primary Action
</button>
```

### 2. **Maintain Consistent Border Radius**
- Cards: `20px`
- Buttons: `7px`
- Inputs: `10px`
- Small elements: `5px`

### 3. **Use Proper Shadow Hierarchy**
```css
/* Subtle elevation */
box-shadow: 0 10px 30px rgba(50, 47, 179, 0.08);

/* Medium elevation */
box-shadow: 0 20px 60px rgba(50, 47, 179, 0.1);

/* High elevation */
box-shadow: 0 30px 80px rgba(50, 47, 179, 0.15);
```

### 4. **Animate Thoughtfully**
```css
/* Smooth transitions */
transition: all 0.3s ease;

/* Hover effects */
transform: translateY(-2px);
box-shadow: 0 5px 15px rgba(79, 203, 241, 0.2);
```

### 5. **Typography Hierarchy**
```tsx
<div className="heading-one">
  <span className="heading-one-subtitle gradient-text-1">
    SUBTITLE (Uppercase, Letter-spacing)
  </span>
  <h2 className="heading-one-title">
    Main Heading (Bold, Large)
  </h2>
  <p>
    Body text (Regular weight, readable size)
  </p>
</div>
```

---

## 🔧 Quick Reference

### Component Checklist

When creating a new component, ensure:

- [ ] Uses TiCON color palette
- [ ] Includes gradient accents where appropriate
- [ ] Has proper border radius (20px cards, 10px inputs, 7px buttons)
- [ ] Implements smooth transitions (0.3s ease)
- [ ] Responsive across all breakpoints
- [ ] Uses proper typography (Poppins for headings, Open Sans for body)
- [ ] Includes hover states with subtle animations
- [ ] Has proper shadow hierarchy
- [ ] Follows spacing scale (30px, 60px, 120px)
- [ ] Accessible (proper contrast, focus states)

---

## 📚 Additional Resources

- **Fonts:** [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins) & [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- **Icons:** Font Awesome (included in project)
- **shadcn/ui Docs:** [ui.shadcn.com](https://ui.shadcn.com)
- **Color Tool:** [Coolors.co](https://coolors.co) for gradient generation

---

## 🎨 Example: Building a New Page

```tsx
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function NewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] to-[#e8f4f8] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-10 left-10 animate-float">
          <img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden p-12">
            <div className="card-gradient-border" />
            
            <div className="heading-one text-center mb-8">
              <span className="heading-one-subtitle gradient-text">
                WELCOME TO TICON
              </span>
              <h1 className="heading-one-title">
                Your Page Title
              </h1>
              <p className="text-muted-foreground">
                Description goes here
              </p>
            </div>

            <div className="space-y-4">
              <Input placeholder="Enter your email" />
              <Button variant="gradient" className="w-full">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
```

---

**Last Updated:** December 2025  
**Version:** 1.0  
**Maintained by:** TiCON Global Development Team
