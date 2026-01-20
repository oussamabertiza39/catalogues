import Link from 'next/link'
import products from '@/data/products.json'
import partners from '@/data/partners.json'
import companyData from '@/data/company.json'
import ProductCard from '@/components/ProductCard'
import type { Product, Partner } from '@/types'

export default function Home() {
  const featuredProducts = products.slice(0, 3) as Product[]
  const featuredPartners = partners.slice(0, 4) as Partner[]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {companyData.tagline}
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
                {companyData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors shadow-lg"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400 rounded-full blur-3xl opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold">200+</div>
                      <div className="text-sm text-primary-100 mt-1">Devices Supported</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold">99.9%</div>
                      <div className="text-sm text-primary-100 mt-1">Uptime</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-sm text-primary-100 mt-1">Years Experience</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-sm text-primary-100 mt-1">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our innovative smart technology solutions designed to transform your home and business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with leading companies worldwide to deliver exceptional smart technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">LOGO</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-center">{partner.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Meet Our Partners
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our smart technology solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
