# Project Overview

## Summary

A complete, production-ready company website built with Next.js 14, featuring:

- ✅ Modern, responsive design (mobile, tablet, desktop)
- ✅ Shared Header and Footer components
- ✅ SEO-friendly structure with proper meta tags
- ✅ Six main pages with dynamic routing
- ✅ Local JSON data storage (easily migratable to backend)
- ✅ Reusable component architecture
- ✅ Tailwind CSS styling with custom theme
- ✅ TypeScript with strict type checking
- ✅ Contact form with validation

## Pages Implemented

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured products, partners preview |
| Products | `/products` | Grid layout of all products |
| Product Detail | `/products/[slug]` | Dynamic product pages with gallery and features |
| Partners | `/partners` | Grid layout with partner information |
| About Us | `/about` | Company mission, vision, and values |
| Contact | `/contact` | Contact form and company information |

## Components

| Component | File | Description |
|-----------|------|-------------|
| Header | `components/Header.tsx` | Navigation with responsive mobile menu |
| Footer | `components/Footer.tsx` | Site footer with links and social icons |
| ProductCard | `components/ProductCard.tsx` | Reusable product card component |

## Data Files

| File | Contents |
|------|----------|
| `data/company.json` | Company info, mission, vision, contact details |
| `data/products.json` | 6 sample products with full details |
| `data/partners.json` | 8 sample partners with logos and descriptions |

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **No Database**: Local JSON files (easily migratable)

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet (md) and desktop (lg)
- Collapsible mobile navigation

### SEO Optimization
- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Descriptive page titles

### Performance
- Next.js optimization (static generation where possible)
- Optimized asset loading
- Minimal bundle size

### Scalability
- Clean separation of concerns
- Reusable components
- Type-safe data handling
- Easy migration path to API/Database

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## File Structure

```
company-website/
├── app/                          # Next.js App Router
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── partners/page.tsx        # Partners page
│   └── products/                # Products section
│       ├── [slug]/page.tsx     # Dynamic product pages
│       └── page.tsx            # Products catalog
├── components/                  # Reusable components
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── data/                        # JSON data files
│   ├── company.json
│   ├── partners.json
│   └── products.json
├── public/                      # Static assets
│   ├── images/                  # Product and partner images
│   └── catalogues/              # PDF catalogues
├── types/                       # TypeScript definitions
│   └── index.ts
├── .eslintrc.json              # ESLint config
├── .gitignore                  # Git ignore rules
├── next.config.js              # Next.js config
├── next-env.d.ts               # Next.js type definitions
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── README.md                   # Main documentation
└── IMAGE_SETUP.md              # Image setup guide
```

## Customization

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    // ... more shades
  }
}
```

### Adding New Pages

1. Create folder in `app/`
2. Add `page.tsx`
3. Route auto-generated

Example: `/blog`
```
app/
└── blog/
    └── page.tsx
```

### Adding Data

Edit files in `/data/`:
- `products.json` - Add products
- `partners.json` - Add partners
- `company.json` - Update company info

## Migration to Backend

When ready to add a backend:

1. Create API routes in `app/api/`
2. Replace JSON imports with fetch calls
3. Use Next.js Server Components for data fetching
4. Add database connection in API routes

Example API route:
```typescript
// app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const products = await getProductsFromDB()
  return NextResponse.json(products)
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Deployment

Build and start:
```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel --prod
```

## Support

For detailed information, see:
- `README.md` - Main documentation
- `IMAGE_SETUP.md` - Image setup guide
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
