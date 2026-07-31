# AI Website Builder Design System

> A reusable design framework for generating premium modern websites via AI. Provides industry visual guidelines, typography rules, color systems, layout patterns, motion principles, and UI composition standards.

**Version:** v1.0.0

---

## Overview

AI Website Builder Design System is a structured, rule-based design framework that guides AI in generating production-ready websites. Instead of relying on vague aesthetic preferences, every design decision is grounded in industry-specific rules, real brand analysis, and proven layout patterns.

### What This System Provides

| Module | Location | Description |
|--------|----------|-------------|
| Industry Guidelines | `industries/` | Per-industry visual language, tone, and reference brands |
| Typography | `typography/` | Font family, heading scale, body text, letter spacing |
| Color System | `color-system/` | Per-industry color tokens with HEX/RGB values |
| Layout System | `layout-system/` | Hero, landing page, and conversion layout patterns |
| Motion System | `motion-system/` | Entrance, interaction, scroll, and background animations |
| Component Library | `components/` | Reusable UI component specs |

### Design Quality Goals

Every generated website must be:

- **Professional** — matches industry standards, not template-looking
- **Consistent** — follows a unified design language throughout
- **Responsive** — works seamlessly across desktop, tablet, and mobile
- **Brand-oriented** — reflects the product's unique positioning
- **Production-ready** — clean code, performant, accessible

---

## Design Philosophy

### Principle 1: Design First, Not Random UI

AI should not generate random UI. Every website follows a top-down design decision chain:

```
Industry Context
      ↓
Brand Positioning
      ↓
Visual Language
      ↓
Component System
      ↓
Final Interface
```

**Rule:** Before writing any code, AI must first identify the industry, load the corresponding design tokens, select a layout template, and then compose components.

### Principle 2: Avoid Generic AI Style

Generated websites must actively avoid common AI-generated pitfalls:

| Avoid | Prefer |
|-------|--------|
| Excessive gradients (purple-blue default) | Purposeful, brand-aligned color |
| Random glass cards everywhere | Glassmorphism only when contextually appropriate |
| Overused AI symbols (atoms, brains, robots) | Real product screenshots and storytelling |
| Unnecessary animations on every element | Purposeful motion that aids understanding |
| Template-like, cookie-cutter layouts | Unique compositions based on content needs |

**Instead, prefer:**

- Clear visual hierarchy (typography-driven, not decoration-driven)
- Strong typographic contrast (900 vs 400, 120px vs 16px)
- Purposeful motion (every animation serves a function)
- Real product storytelling (problem → solution → conversion)

### Principle 3: Product-Driven Design

Website design communicates a clear narrative arc:

```
User Problem → Product Value → Solution → Conversion
```

Every section on the page maps to a stage in this narrative. The user should feel they are experiencing a product, not reading a webpage.

### Principle 4: Motion Serves Understanding

> **Not a webpage, but a product experience animation.**

All animations must satisfy at least one of:

- Enhance understanding of the product
- Elevate brand perception
- Guide user toward conversion

Animations that exist purely for visual spectacle are prohibited.

---

## Design System Structure

```
design-system/
├── industries/
│   ├── technology.md          # Tech/AI SaaS industry rules
│   ├── medical.md             # Healthcare industry rules
│   ├── ecommerce.md           # E-commerce platform rules
│   └── cross-border.md        # Cross-border DTC rules
├── typography/
│   ├── heading.md             # Heading scale & font rules
│   └── body.md                # Body text & paragraph rules
├── color-system/
│   ├── technology.md          # Tech color tokens
│   ├── medical.md             # Medical color tokens
│   ├── ecommerce.md           # Ecommerce color tokens
│   └── cross-border.md        # Cross-border color tokens
├── layout-system/
│   ├── hero-layout.md         # Hero section layout patterns
│   ├── landing-layout.md      # Full landing page structure
│   └── conversion-layout.md   # Conversion-optimized layout
├── motion-system/
│   ├── hero-motion.md         # Hero animation rules
│   ├── scroll-animation.md    # Scroll-driven animation
│   ├── background-effects.md  # Background effect patterns
│   ├── interaction.md         # Interaction design patterns
│   └── 3d-animation.md        # 3D animation guidelines
├── case-studies/
│   ├── technology.md          # Linear / Vercel / Stripe analysis
│   ├── medical.md             # Ro.co / Mayo Clinic analysis
│   ├── ecommerce.md           # Shopify / Etsy analysis
│   └── cross-border.md        # Gymshark / Nothing / Allbirds analysis
└── README.md                  # This file
```

---

## Industries

Each industry has a dedicated design language file defining visual tone, reference brands, and applicable patterns.

### Technology

**Suitable for:** AI SaaS, cloud platforms, developer tools, Web3, infrastructure

**Visual characteristics:**

| Attribute | Specification |
|-----------|--------------|
| Tone | Futuristic, intelligent, dynamic |
| Background | Dark mode preferred (#0A0A0B, #111827) |
| Accent | Purple/blue gradient, single brand highlight |
| Motion | Interactive, particle effects, 3D elements |
| Layout | Bento Grid, full-screen Hero, minimal |
| Reference | Linear, Vercel, OpenAI, Stripe, Figma |

**Default components:** GradientBackground, ParticleBackground, TextReveal, GlassCard, FloatingCard, MagneticButton, ThreeScene

---

### Medical

**Suitable for:** Healthcare, medical AI, hospital services, telemedicine, pharma

**Visual characteristics:**

| Attribute | Specification |
|-----------|--------------|
| Tone | Trustworthy, clean, professional, human-centered |
| Background | White/light (#FFFFFF, #F8FAFC, #FAF9F6) |
| Accent | Blue (#0056B3), teal (#009688), natural green (#2D6A4F) |
| Motion | Soft fade, smooth scroll, floating illustrations |
| Layout | Centered Hero, clear information hierarchy |
| Reference | Mayo Clinic, Ro.co, Oscar Health,丁香园 |

**Default components:** SoftFadeIn, ScrollReveal, TrustBadge, FloatingIllustration, AccordionFAQ

**Special rules:**

- WCAG AAA contrast ratio recommended (stricter than standard AA)
- Avoid neon colors, heavy particles, cyber-style effects
- Trust signals (certifications, doctor profiles) must be prominent

---

### Ecommerce

**Suitable for:** Brand websites, product landing pages, DTC stores, marketplace platforms

**Visual characteristics:**

| Attribute | Specification |
|-----------|--------------|
| Tone | Product-focused, conversion-driven, premium |
| Background | White or brand-specific, product-heroic |
| Accent | Brand color + red/orange CTA (#EF4444, #FF9900) |
| Motion | Product hover zoom, carousel, smooth transitions |
| Layout | Product showcase Hero, review sections, strong CTA |
| Reference | Shopify, Amazon, SHEIN, Anker, Gymshark |

**Default components:** ProductCard, ImageZoom, Carousel, ReviewCard, CountdownTimer, AddToCart

**Special rules:**

- Product imagery is the primary visual element
- CTA buttons must be visually dominant
- Social proof (reviews, ratings) placed near conversion points
- Promotion colors (red/orange) used sparingly for urgency

---

### Cross-Border (DTC)

**Suitable for:** Shopify stores, international brands, lifestyle products, premium DTC

**Visual characteristics:**

| Attribute | Specification |
|-----------|--------------|
| Tone | Global, premium, lifestyle-driven, brand storytelling |
| Background | Warm white (#FAF9F6, #FFF8F0) or dark (#0A0A0A) |
| Accent | Brand-specific, product-color-driven, muted earth tones |
| Motion | Parallax storytelling, video backgrounds, smooth scroll |
| Layout | Large imagery, editorial/magazine style, full-bleed sections |
| Reference | Allbirds, Glossier, Patagonia, Nothing Phone, Fenty Beauty |

**Default components:** ParallaxSection, VideoHero, LookbookGallery, BrandStory, Newsletter

**Special rules:**

- Design must adapt to target market cultural preferences (see color-system/)
- Product colors should inform the page color palette
- Brand storytelling takes priority over hard conversion tactics
- Video/lifestyle photography is preferred over studio product shots

---

## Typography System

**Location:** `typography/`

### Font Family

| Priority | English Font | Chinese Font | Use Case |
|----------|-------------|-------------|----------|
| 1 | Inter | HarmonyOS Sans | Body text, UI elements |
| 2 | Plus Jakarta Sans | PingFang SC | Headings, display |
| 3 | Geist | Noto Sans SC | Developer tools, code |

**Rule:** Maximum 2 font families per website (1 heading + 1 body).

### Heading Scale

| Level | Desktop Size | Weight | Letter Spacing | Line Height |
|-------|-------------|--------|-----------------|-------------|
| Hero | 72px - 120px | 700 - 900 | -0.03em | 1.0 - 1.1 |
| H1 | 48px - 72px | 700 - 800 | -0.02em | 1.1 - 1.2 |
| H2 | 36px - 56px | 700 | -0.02em | 1.2 |
| H3 | 24px - 32px | 600 - 700 | -0.01em | 1.3 |
| H4 | 20px - 28px | 600 | 0 | 1.3 |
| Body | 16px - 18px | 400 | 0 | 1.6 - 1.8 |

**Detailed rules:** See `typography/heading.md` and `typography/body.md`

### Key Rules

- Hero titles must be short (1-2 lines, max 3)
- Negative letter spacing for headings (-0.03em ~ -0.02em)
- Body text max-width: 600px - 720px
- Body color: never pure black (#000), use #374151 (light) or #a0a0a0 (dark)
- Responsive sizing via `clamp()`: e.g., `font-size: clamp(2.5rem, 5vw, 4.5rem)`

---

## Color System

**Location:** `color-system/`

Each industry has independent color tokens. All colors include HEX, RGB, and CSS variable names.

### Per-Industry Summary

| Industry | Background | Primary Accent | Trust Color | CTA Color |
|----------|-----------|---------------|-------------|-----------|
| Technology | #0A0A0B (dark) | Brand gradient | — | Brand highlight |
| Medical | #FFFFFF (white) | #0056B3 (blue) | #009688 (teal) | #0056B3 |
| Ecommerce | #FFFFFF / brand | Brand color | — | #EF4444 / #FF9900 |
| Cross-border | #FAF9F6 / #0A0A0A | Brand-specific | — | Brand primary |

### Universal Rules

- **60-30-10 rule:** 60% background, 30% secondary, 10% accent
- **Contrast:** WCAG AA minimum 4.5:1 for body text
- **Dark mode:** Never use pure #000; use #0A0A0B or #111827
- **Gradients:** Prefer mesh gradients over linear; avoid generic purple-blue defaults

**Detailed tokens:** See `color-system/technology.md`, `medical.md`, `ecommerce.md`, `cross-border.md`

---

## Layout System

**Location:** `layout-system/`

### Hero Layout

Defines the first-screen layout pattern. Selection depends on industry and product type.

| Type | Structure | Best For |
|------|-----------|----------|
| Center Hero | Title + Description + CTA (centered) + Product Visual below | AI SaaS, developer tools |
| Split Hero | Text (left) \| Image/Product (right) | Medical, enterprise, ecommerce |
| Product Showcase | Title + Dashboard/3D Demo (full-width) | SaaS products, data platforms |
| Fullscreen Visual | Video/Image background + Overlay text | Lifestyle, luxury, creative |

**Detailed specs:** See `layout-system/hero-layout.md`

### Landing Page Layout

Standard page structure for a complete landing page:

```
┌─────────────────────────────┐
│  1. Navbar                  │  Fixed, transparent → solid on scroll
├─────────────────────────────┤
│  2. Hero                    │  First impression, core value
├─────────────────────────────┤
│  3. Social Proof            │  Logo wall, data highlights
├─────────────────────────────┤
│  4. Features                │  3-6 core capabilities
├─────────────────────────────┤
│  5. Workflow                │  Step-by-step process
├─────────────────────────────┤
│  6. Product Demo             │  Screenshot / video / 3D
├─────────────────────────────┤
│  7. Testimonials            │  3-6 customer reviews
├─────────────────────────────┤
│  8. Pricing                 │  Plan comparison
├─────────────────────────────┤
│  9. FAQ                     │  Accordion, 5-10 questions
├─────────────────────────────┤
│  10. Footer                 │  Links, social, legal
└─────────────────────────────┘
```

**Section spacing:** 80-120px (Desktop), 48-80px (Mobile). Alternating background colors between sections.

**Detailed specs:** See `layout-system/landing-layout.md`

### Conversion Layout

Optimized for user conversion with strategic CTA placement and trust elements.

**User path model:**

```
Awareness (Hero) → Interest (Features) → Trust (Testimonials) → Action (CTA)
```

**CTA placement rule:**

| Position | Instance | Style | Purpose |
|----------|----------|-------|---------|
| Hero | 1st CTA | Primary, large | Initial engagement |
| Mid-page | 2nd CTA | Secondary, medium | Reinforce after value shown |
| Footer / Sticky | Final CTA | Primary or banner | Last-chance conversion |

**Detailed specs:** See `layout-system/conversion-layout.md`

---

## Motion System

**Location:** `motion-system/`

Motion should improve product understanding, not distract from it.

### Animation Categories

| Category | Examples | Duration | Purpose |
|----------|---------|----------|---------|
| Entrance | Fade In, Slide Up, Text Reveal, Blur Reveal | 0.4-1.0s | Page load, section entry |
| Interaction | Hover Scale, Magnetic Button, Floating Card, 3D Tilt | 0.2-0.4s | User engagement feedback |
| Scroll | Scroll Reveal, Parallax, Progress Bar | Triggered | Narrative progression |
| Background | Gradient Movement, Particle Animation, Aurora | Continuous | Atmosphere, immersion |

### Motion Rules

**Must follow:**

- Every animation serves a purpose (understanding, brand, conversion)
- Respect `prefers-reduced-motion` — provide graceful degradation
- Animate only `transform` and `opacity` for GPU performance
- Entry animations: ease-out; Exit animations: ease-in
- Scroll-triggered: use Intersection Observer or CSS Scroll-Driven Animations

**Must avoid:**

- Animations that delay user access to content (>1s before content is visible)
- Bouncing, spinning, or pulsing elements without purpose
- Multiple competing animations on the same element simultaneously
- Full-page reload transitions when SPA navigation suffices

**Detailed specs:** See `motion-system/hero-motion.md`, `scroll-animation.md`, `background-effects.md`, `interaction.md`, `3d-animation.md`

---

## Case Studies

**Location:** `case-studies/`

Real-world website analyses that inform the design rules. Each case study includes CSS-extracted color values, font detections, layout structure analysis, and aesthetic psychology.

| File | Brands Analyzed | Industry |
|------|----------------|----------|
| `technology.md` | Linear, Vercel, Stripe | Technology |
| `medical.md` | Ro.co, Mayo Clinic, Oscar Health | Medical |
| `ecommerce.md` | Shopify, Etsy, Wayfair | Ecommerce |
| `cross-border.md` | Gymshark, Nothing Phone, Allbirds | Cross-border |

---

## AI Generation Rules

When generating a website, follow this 5-step process:

### Step 1: Identify Industry

```
User input analysis
      ↓
Industry classification
      ↓
Example: "AI SaaS product" → Technology
```

### Step 2: Load Industry Design System

```
Industry: Technology
      ↓
Load: industries/technology.md
Load: color-system/technology.md
Load: typography rules (heading + body)
```

### Step 3: Select Layout Template

```
Product type: SaaS Dashboard
      ↓
Layout: Product Showcase Hero
      ↓
Sections: Hero → Social Proof → Features → Demo → Pricing → FAQ → Footer
```

### Step 4: Apply Components

```
Hero:       AnimatedHero + TextReveal + MagneticButton
Features:   GlassCard + ScrollReveal
Demo:       FloatingCard + ThreeScene
Pricing:    PricingCard (3-column)
CTA:        GradientButton + StickyBottom (optional)
```

### Step 5: Generate Implementation

Output clean, responsive React + Tailwind CSS code.

```yaml
requirements:
  hero:
    - include entrance animation (TextReveal or FadeIn)
    - include background motion (Gradient or Particle)
  sections:
    - scroll-triggered reveal animations
    - alternating section backgrounds
  buttons:
    - hover interaction feedback
    - magnetic effect for primary CTA
  page:
    - responsive (mobile-first)
    - max-width container (1200-1400px)
  motion:
    - serve product expression
    - avoid unnecessary effects
    - respect prefers-reduced-motion
```

---

## Design Quality Checklist

Before completing any generation, verify:

### Visual

- [ ] Visual hierarchy is clear (typography-driven, not decoration-driven)
- [ ] Colors are consistent with industry design tokens
- [ ] No generic AI aesthetic (purple-blue gradient, random glass cards)
- [ ] Brand identity is distinguishable

### UX

- [ ] CTA is obvious and accessible within 3 seconds
- [ ] Navigation is simple (4-6 items max)
- [ ] Mobile responsive (tested at 375px, 768px, 1440px)
- [ ] Content max-width respected (body text ≤720px)

### Motion

- [ ] All animations are purposeful
- [ ] Entry animations complete within 1.4s
- [ ] `prefers-reduced-motion` handled
- [ ] No animation blocks content access

### Code

- [ ] Components are reusable and properly named
- [ ] CSS follows the design token system
- [ ] Semantic HTML structure
- [ ] No hardcoded values where tokens exist

---

## Tech Stack Recommendations

| Layer | Recommended | Alternative |
|-------|------------|-------------|
| Framework | Next.js (React) | Astro, Nuxt 3 |
| Styling | Tailwind CSS v4 | Panda CSS, CSS Modules |
| Animation | Framer Motion | GSAP, CSS native |
| Scroll | Lenis + GSAP ScrollTrigger | CSS Scroll-Driven |
| 3D | Three.js / React Three Fiber | Spline |
| Smooth Scroll | Lenis | Native smooth |
| Font | Google Fonts / Self-hosted variable | Adobe Fonts |
| Icons | Lucide Icons | Heroicons |
| Deployment | Vercel | Cloudflare Pages |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2026-07 | Initial release |

---

## Maintainer

AI Website Builder Design System Team
