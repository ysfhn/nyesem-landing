# Nyesem Landing Page

Professional landing page for the Nyesem gastronomy social platform.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Custom CSS + Intersection Observer
- **Language:** TypeScript
- **Deployment:** Static export ready (Vercel, Netlify, etc.)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is configured with `output: 'export'` in `next.config.js` for static site generation. You can deploy the `out` directory to any static hosting provider.

### Vercel (Recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Deploy the 'out' folder
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── AnimateOnScroll.tsx  # Scroll animation wrapper
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with phone mockup
│   ├── LogoBar.tsx          # City marquee section
│   ├── Features.tsx         # Feature grid (9 features)
│   ├── FeatureShowcase.tsx  # Detailed feature showcase (AI, Gourmet, Social)
│   ├── HowItWorks.tsx       # 4-step process section
│   ├── Screenshots.tsx      # Interactive screen previews
│   ├── Stats.tsx            # Animated statistics counters
│   ├── Testimonials.tsx     # User testimonials
│   ├── FAQ.tsx              # Accordion FAQ section
│   ├── CTA.tsx              # Call-to-action download section
│   └── Footer.tsx           # Footer with links
```

## Moving to Separate Repository

This landing page is designed to be moved outside the main NyesemApp project:

```bash
# From the nyesem-app directory
mv nyesem-landing /path/to/new/location

# Or create a new git repo
cd nyesem-landing
git init
git add .
git commit -m "Initial landing page"
```
