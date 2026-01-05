# Premium Spice & Agricultural Export Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from premium e-commerce (Shopify, high-end food brands) and agricultural showcase sites. Focus on product photography as hero, trust-building through visual storytelling, and elegant simplicity that conveys quality.

## Typography System
- **Primary Font**: Playfair Display (serif) - for headlines and premium product names
- **Secondary Font**: Inter (sans-serif) - for body text, descriptions, and UI elements
- **Scale**: 
  - Hero headlines: text-6xl to text-7xl (60-72px)
  - Section headers: text-4xl to text-5xl (36-48px)
  - Product titles: text-2xl to text-3xl (24-30px)
  - Body text: text-base to text-lg (16-18px)
  - Small text/labels: text-sm (14px)

## Layout & Spacing System
**Spacing Units**: Consistently use 4, 8, 12, 16, 20, 24, and 32 (py-4, px-8, gap-12, etc.)
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Container: max-w-7xl with px-6 to px-8
- Card spacing: p-8 to p-12
- Grid gaps: gap-8 to gap-12

## Page Structure (7 Sections)

### 1. Hero Section (80vh)
Full-width immersive hero with high-quality image of spice market/farm landscape. Overlay with subtle gradient for text readability. Centered headline + subheadline + dual CTA buttons (blurred background on buttons: backdrop-blur-md with semi-transparent background).

### 2. Product Categories Grid (3-Column Desktop, 1-Column Mobile)
Large product category cards featuring close-up spice/product photography. Each card: full-bleed image, category name overlay, subtle hover scale effect. Grid layout with equal heights.

### 3. Premium Product Showcase (Alternating 2-Column Layout)
4-5 featured products with alternating image-left/content-right layout. Each: large product photo, detailed description, origin information, quality certifications badge, "Learn More" link.

### 4. Trust & Certifications Bar
Single row with 5-6 certification badges/logos (organic, fair trade, ISO, export certifications). Centered layout with even spacing. Include brief trust statement above badges.

### 5. Global Reach Map Section
Interactive-style world map graphic showing export destinations. Side panel with key statistics: countries served, tons exported annually, years in business. 2-column layout (map 60%, stats 40%).

### 6. Testimonials Grid (3-Column Desktop, 1-Column Mobile)
Client testimonials with company logos, quote text, client name/position. Include small flag icons for international diversity. Cards with subtle elevation.

### 7. Contact & CTA Section
2-column split: Left side with large headline "Partner With Us" + supporting text + primary CTA button. Right side with quick contact information grid (email, phone, address, business hours). Include small trust element: "Responding to inquiries within 24 hours".

## Component Library

### Navigation
Transparent-to-solid header on scroll. Logo left, horizontal menu center, language selector + contact button right. Sticky positioning.

### Buttons
- Primary: Rounded-lg, px-8 py-4, medium weight text
- Secondary: Outlined variant with same sizing
- On-image buttons: backdrop-blur-md with bg-opacity-20

### Cards
- Product cards: Rounded-xl, overflow-hidden, shadow-lg on hover
- Testimonial cards: Rounded-lg, p-8, border styling, subtle shadow
- Category cards: Rounded-2xl, full-bleed images with overlay text

### Footer
4-column layout: Company info, Product categories, Quick links, Newsletter signup. Bottom bar with social icons, copyright, legal links.

## Images Section

**Large Hero Image**: Full-width dramatic landscape of spice farm at golden hour or bustling spice market with vibrant product displays (80vh height)

**Product Category Images** (3): Close-up shots of spices in burlap sacks, fresh herbs/vegetables, premium packaged products

**Featured Product Images** (4-5): Individual high-quality product photography on neutral backgrounds - turmeric roots, cardamom pods, coffee beans, tea leaves, etc.

**Map Graphic**: Stylized world map illustration showing export routes/destinations

**Client Logos**: 6-8 international company logos for testimonial section

**Certification Badges**: Organic, Fair Trade, ISO, Export quality certification icons

## Animation Strategy
Minimal, purposeful animations only:
- Subtle parallax scroll on hero image
- Fade-in-up on scroll for section content
- Gentle scale on card hover (scale-105)
- Smooth header background transition on scroll

## Responsive Behavior
- Navigation: Hamburger menu below lg breakpoint
- Grids: 3-col → 2-col (md) → 1-col (base)
- Hero text: Reduce font sizes by 30-40% on mobile
- Alternating layouts: Stack vertically on mobile with image first
- Footer: 4-col → 2-col (md) → 1-col (base)