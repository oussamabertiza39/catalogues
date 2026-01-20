# Image Setup Guide

This document explains how to add product and partner images to the website.

## Directory Structure

Place your images in the following directories under `/public/`:

```
public/
├── images/
│   ├── products/          # Product images
│   │   ├── smart-home-1.jpg
│   │   ├── smart-home-2.jpg
│   │   ├── iot-gateway-1.jpg
│   │   └── ...
│   └── partners/          # Partner logos
│       ├── techcorp.png
│       ├── innovate.png
│       └── ...
└── catalogues/            # PDF catalogues
    ├── smart-home-controller.pdf
    ├── industrial-iot-gateway.pdf
    └── ...
```

## Image Recommendations

### Product Images
- **Format**: JPG or WebP (preferred for photos)
- **Size**: 800x600px minimum
- **File Size**: Under 500KB per image
- **Number**: 3-4 images per product (main image + gallery)

### Partner Logos
- **Format**: PNG (for transparency) or SVG (vector)
- **Size**: 200x200px minimum
- **File Size**: Under 100KB
- **Background**: Transparent PNG recommended

### Product Catalogues
- **Format**: PDF
- **File Size**: Under 5MB if possible

## Adding Images

### Step 1: Organize Images

Place your images in the appropriate directory:

1. **Product Images**: `/public/images/products/`
2. **Partner Logos**: `/public/images/partners/`
3. **Catalogue PDFs**: `/public/catalogues/`

### Step 2: Update JSON Files

After adding images, update the corresponding JSON files:

#### products.json
```json
{
  "id": 1,
  "name": "Product Name",
  "slug": "product-slug",
  "description": "Product description",
  "images": [
    "/images/products/your-image-1.jpg",
    "/images/products/your-image-2.jpg",
    "/images/products/your-image-3.jpg"
  ],
  "features": [...],
  "cataloguePdf": "/catalogues/your-catalogue.pdf"
}
```

#### partners.json
```json
{
  "id": 1,
  "name": "Partner Name",
  "logo": "/images/partners/partner-logo.png",
  "description": "Partner description"
}
```

## Image Naming Convention

Use descriptive, lowercase filenames with hyphens:

- ✅ Good: `smart-home-controller-1.jpg`
- ✅ Good: `iot-gateway-main.png`
- ❌ Bad: `IMG_1234.jpg`
- ❌ Bad: `Product 1.jpg`

## Placeholder Images

Currently, the website uses placeholder divs with gradient backgrounds. Once you add actual images, they will automatically be displayed.

To test with placeholder images, you can use services like:
- https://via.placeholder.com
- https://placehold.co
- https://picsum.photos

## Optimizing Images

For best performance:

1. **Use Next.js Image Component** (recommended):
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/images/products/product.jpg"
     alt="Product name"
     width={800}
     height={600}
   />
   ```

2. **Compress Images**: Use tools like TinyPNG or ImageOptim before uploading

3. **Use WebP Format**: WebP provides better compression than JPG/PNG

## Example: Adding a New Product

1. Add images to `/public/images/products/`:
   - `new-product-1.jpg` (main)
   - `new-product-2.jpg` (gallery)
   - `new-product-3.jpg` (gallery)

2. Add PDF to `/public/catalogues/`:
   - `new-product.pdf`

3. Update `/data/products.json`:
   ```json
   {
     "id": 7,
     "name": "New Product",
     "slug": "new-product",
     "description": "A great new product",
     "images": [
       "/images/products/new-product-1.jpg",
       "/images/products/new-product-2.jpg",
       "/images/products/new-product-3.jpg"
     ],
     "features": ["Feature 1", "Feature 2"],
     "cataloguePdf": "/catalogues/new-product.pdf"
   }
   ```

## Troubleshooting

### Images Not Showing
- Check file paths in JSON files (must start with `/`)
- Verify files exist in the `/public/` directory
- Clear browser cache and restart dev server
- Check console for 404 errors

### Images Too Large
- Compress images using an online tool
- Reduce dimensions to recommended sizes
- Consider using WebP format

### Image Aspect Ratio Issues
- Maintain consistent aspect ratios (e.g., 4:3 or 16:9)
- Use image editing software to crop/resize
- The product cards expect landscape orientation
