import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-w-16 aspect-h-12 bg-gray-100 overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-xs font-bold">IMG</span>
            </div>
            <p className="text-xs text-gray-500">Product Image</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
