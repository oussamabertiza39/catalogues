import companyData from '@/data/company.json'
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  const iconMap = {
    Innovation: Zap,
    Quality: Award,
    Sustainability: Heart,
    'Customer Focus': Users,
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            Learn more about our company, mission, and the values that drive us forward.
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {companyData.description}
              </p>
              <p className="text-lg text-gray-600">
                Our team of dedicated engineers, designers, and innovators work tirelessly to create products that solve real-world problems and enhance the way people live and work. From smart home automation to industrial IoT solutions, we are committed to excellence in everything we do.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-2xl blur-3xl opacity-10"></div>
              <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">15+</div>
                    <div className="text-primary-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">500+</div>
                    <div className="text-primary-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-primary-200">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">100+</div>
                    <div className="text-primary-200">Products Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                {companyData.mission}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                {companyData.vision}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.values.map((value, index) => {
              const Icon = iconMap[value.title as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            We'd love to hear from you. Reach out to us with any questions or inquiries.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
