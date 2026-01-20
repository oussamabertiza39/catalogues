import partners from '@/data/partners.json'
import type { Partner } from '@/types'

export default function PartnersPage() {
  const allPartners = partners as Partner[]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            We are proud to collaborate with industry-leading companies to deliver exceptional technology solutions.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">LOGO</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership CTA */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We are always looking to expand our network and collaborate with like-minded organizations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
