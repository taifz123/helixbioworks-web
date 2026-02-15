# Helix BioWorks

A modern, premium biotech e-commerce website built with React 19, Tailwind CSS 4, and TypeScript. Designed for selling peptides and SARMs with a focus on scientific credibility and professional aesthetics.

## Overview

Helix BioWorks is a static-generated website featuring a responsive design with modern biotech minimalism. The site includes a hero section with animated DNA helix imagery, product showcase, feature highlights, and comprehensive about section.

**Design Philosophy**: Scientific clarity, sophisticated minimalism, and molecular storytelling with a navy, teal, and sage green color palette.

## Features

- **Responsive Navigation**: Sticky header with search, cart, and wishlist functionality
- **Hero Section**: Full-width gradient background with DNA helix imagery and compelling CTAs
- **Product Grid**: Showcase of lab-certified peptides and SARMs with purity badges
- **Feature Highlights**: Lab certification, premium quality, and research-grade assurance
- **About Section**: Company information with laboratory imagery and trust indicators
- **Call-to-Action Sections**: Multiple conversion opportunities throughout
- **Footer**: Comprehensive navigation and legal links

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Build Tool**: Vite
- **Server**: Express.js (for production deployment)
- **Package Manager**: pnpm

## Project Structure

```
helixbioworks-web/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles and design tokens
│   └── index.html          # HTML template
├── server/
│   └── index.ts            # Express server for production
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (v22.13.0 recommended)
- pnpm 10.4.1+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd helixbioworks-web

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Server will be available at http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview

# Start production server
pnpm start
```

## Design System

### Color Palette

- **Primary Navy**: `#1a3a52` — Trust, professionalism, scientific authority
- **Accent Teal**: `#00b4d8` — Innovation, energy, forward-thinking
- **Secondary Sage**: `#7cb342` — Natural origins, wellness
- **Neutrals**: Off-white (`#f8f9fa`), Light gray (`#e8eaed`), Charcoal (`#2c3e50`)

### Typography

- **Display Font**: Playfair Display (serif) — Elegant, premium headings
- **Body Font**: Inter (sans-serif) — Clean, readable body text
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Radius

- **Base Radius**: 0.65rem with variants (sm, md, lg, xl)
- **Container**: Auto-centered with responsive padding (1rem mobile, 1.5rem tablet, 2rem desktop)

## GitHub Integration

This project is optimized for GitHub export and version control:

- **MIT License**: Included for open-source compatibility
- **Git-ready**: `.gitignore` configured to exclude node_modules and build artifacts
- **Semantic Commits**: Follow conventional commit messages for clarity
- **Build Artifacts**: `dist/` folder is generated during build and can be deployed directly

### Exporting to GitHub

1. Use the Manus Management UI to export code to GitHub
2. Select your GitHub owner and repository name
3. The project will be pushed with full git history

## WordPress Integration

This static site is compatible with WordPress in multiple ways:

### Option 1: Static Site Plugin
Use a WordPress static site plugin to host the built files:
- Export the `dist/public/` folder contents
- Upload to WordPress using a static site hosting plugin

### Option 2: Headless WordPress
Use this as a headless frontend with a WordPress backend:
- Keep the React frontend separate
- Connect to WordPress API for dynamic content
- Requires backend API integration (upgrade to `web-db-user` feature)

### Option 3: Manual Integration
- Convert React components to WordPress template files
- Use the design system CSS and typography
- Migrate content to WordPress posts/pages

## Customization

### Adding Products

Edit `client/src/pages/Home.tsx` and update the `products` array:

```typescript
const products = [
  {
    id: 1,
    name: "Product Name",
    category: "Category",
    price: "$99.99",
    image: "image-url",
    purity: "99.5%",
    certified: true,
  },
  // ... more products
];
```

### Updating Colors

Modify CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #1a3a52;
  --accent: #00b4d8;
  --secondary: #7cb342;
  /* ... more variables */
}
```

### Changing Typography

Update font imports in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:

```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

## Performance

- **Vite**: Fast build times and optimized bundle splitting
- **Tailwind CSS 4**: Minimal CSS output with PurgeCSS
- **Image Optimization**: All images are web-optimized (WebP format)
- **Code Splitting**: Lazy-loaded components for faster initial load

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

## Deployment

### Manus Hosting
The project is ready to deploy on Manus with built-in hosting:
1. Click "Publish" in the Manus Management UI
2. Configure custom domain if needed
3. Site is live with automatic HTTPS

### External Hosting
For external hosting (Vercel, Netlify, etc.):
1. Push to GitHub
2. Connect repository to hosting platform
3. Set build command: `pnpm build`
4. Set output directory: `dist/public`

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
- Check the [FAQ section](#faqs) in the website
- Review component documentation in `client/src/components/`
- Consult design system in `client/src/index.css`

## Future Enhancements

Potential features for future development:

- **Dynamic Product Management**: Upgrade to `web-db-user` for database integration
- **User Accounts**: Add authentication and user profiles
- **Shopping Cart**: Implement full e-commerce functionality with Stripe payments
- **Blog Section**: Add content management for research articles
- **Customer Reviews**: Implement review system with ratings
- **Email Notifications**: Add transactional email support
- **Analytics Dashboard**: Track user behavior and conversions

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Built with**: React 19, Tailwind CSS 4, TypeScript
