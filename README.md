# InnovateTech Solutions - Company Website

A modern, professional company website built with Next.js 14 using the App Router, Tailwind CSS, and local JSON files for data storage.

## Features

- **Modern, Responsive Design**: Clean, corporate design optimized for desktop, tablet, and mobile
- **Shared Header and Footer**: Consistent navigation across all pages
- **SEO-Friendly**: Optimized meta tags and semantic HTML structure
- **Dynamic Product Pages**: Individual product pages with detailed information
- **Contact Form**: Frontend form with validation
- **Fast Loading**: Optimized with Next.js best practices

## Pages

- **Home** (`/`): Company introduction, featured products, and partners preview
- **Products Catalog** (`/products`): Grid layout displaying all products
- **Product Detail** (`/products/[slug]`): Dynamic pages for individual products
- **Partners** (`/partners`): Grid layout with partner information
- **About Us** (`/about`): Company mission, vision, and values
- **Contact** (`/contact`): Contact form and company information

## Project Structure

```
company-website/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── partners/            # Partners page
│   ├── products/            # Products pages
│   │   ├── [slug]/         # Dynamic product pages
│   │   └── page.tsx        # Products catalog
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with Header and Footer
│   └── page.tsx            # Home page
├── components/              # Reusable React components
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Site header with navigation
│   └── ProductCard.tsx     # Product card component
├── data/                    # JSON data files
│   ├── company.json        # Company information
│   ├── partners.json       # Partner data
│   └── products.json       # Product catalog
├── public/                  # Static assets
│   └── images/            # Product and partner images
├── types/                  # TypeScript type definitions
│   └── index.ts           # Shared types
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Data Management

All website data is stored in JSON files in the `/data` directory:

### products.json
Each product includes:
- `id`: Unique identifier
- `name`: Product name
- `slug`: URL-friendly identifier for dynamic routes
- `description`: Product description
- `images`: Array of image paths
- `features`: Array of product features
- `cataloguePdf`: Path to downloadable PDF catalogue

### partners.json
Each partner includes:
- `id`: Unique identifier
- `name`: Partner company name
- `logo`: Path to partner logo
- `description`: Brief description of partner

### company.json
Company information including:
- Name, tagline, and description
- Mission and vision statements
- Core company values
- Contact information
- Social media links

## Adding Images

Place your product and partner images in the `public/` directory:

```
public/
├── images/
│   ├── products/        # Product images
│   └── partners/         # Partner logos
└── catalogues/          # PDF catalogues
```

Update the corresponding paths in your JSON data files.

## Customization

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary color palette
      }
    }
  }
}
```

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file
3. The route will automatically be available

Example: Creating a `/blog` page:
```
app/
└── blog/
    └── page.tsx
```

## Scalability

The project is structured for easy migration to a backend:

1. **Data Layer**: JSON files can be replaced with API calls
2. **Components**: Reusable components work with any data source
3. **Type Definitions**: Shared TypeScript types ensure type safety
4. **Next.js Features**: Built-in API routes can be added for backend logic

### Migration to Database

When ready to migrate to a database:

1. Replace JSON imports with API calls
2. Create API routes in `app/api/` directory
3. Update components to fetch data from the API
4. Add server-side rendering (SSR) or static site generation (SSG) as needed

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software of InnovateTech Solutions.

## Support

For questions or support, please contact us at contact@innovatetech.com
