import { notFound } from 'next/navigation'
import Link from 'next/link'
import products from '@/data/products.json'
import companyData from '@/data/company.json'
import type { Product } from '@/types'
import { Download, ArrowLeft, Check, FileText, Mail } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const allProducts = products as Product[]
  return allProducts.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: PageProps) {
  const allProducts = products as Product[]
  const product = allProducts.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-primary-600">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                <div className="w-full h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">MAIN</span>
                    </div>
                    <p className="text-gray-500">Product Main Image</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all"
                  >
                    <div className="w-full h-24 flex items-center justify-center">
                      <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <a
                  href={product.cataloguePdf}
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Catalogue
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Make an Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Technical Specifications
              </h3>
              <p className="text-gray-600">
                Detailed technical specifications and compatibility information available in the product catalogue.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamless integration with existing systems and comprehensive API documentation for developers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is available to help with installation, configuration, and troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements and get a customized solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
