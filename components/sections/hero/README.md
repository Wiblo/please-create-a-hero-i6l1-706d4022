# Hero Sections

## PhysiotherapyHero

A custom hero section designed for Pro-Active Therapy physiotherapy website.

### Features

- **Split Layout**: Content on left, image on right (responsive - stacks on mobile)
- **Logo Display**: Prominent logo placement with business name
- **Compelling Headline**: "Move Better, Feel Better, Live Better"
- **Dual CTAs**: Primary booking button + secondary phone call button
- **Trust Indicators**: Three checkmark badges showing credentials
- **Decorative Elements**: Subtle pulse animation (respects `prefers-reduced-motion`)
- **Professional Aesthetic**: Clean, modern design with health/wellness feel

### Usage

```tsx
import { PhysiotherapyHero } from "@/components/sections/hero/PhysiotherapyHero"

export default function HomePage() {
  return <PhysiotherapyHero />
}
```

### Customization

All content is configurable via props or by editing the `heroContent` object at the top of the file:

```tsx
<PhysiotherapyHero
  businessName="Your Clinic Name"
  tagline="Your Custom Tagline"
  description="Your custom description"
  ctaText="Book Now"
  ctaUrl="/booking"
/>
```

### Design Decisions

- **Color Scheme**: Uses existing blue theme tokens from `globals.css` while incorporating the purple logo
- **Typography**: Geist Sans (from brand guide) for consistency
- **Animations**: Staggered fade-in entrance effects using `tw-animate-css`
- **Accessibility**:
  - Respects `prefers-reduced-motion`
  - Proper focus states on CTAs
  - Semantic HTML structure
  - Alt text on images
- **Responsive**: Mobile-first design, stacks vertically on small screens
- **Performance**: Uses Next.js Image optimization with proper `priority` and `sizes`

### Background Image

The default background image uses Unsplash (configured in `next.config.ts`). To use a local image:

1. Place image in `public/images/`
2. Update `backgroundImage` in `heroContent` or pass as prop

### Trust Indicators

The three trust badges can be customized by editing the SVG icons and text at the bottom of the content column.
