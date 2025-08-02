"use client"

import Link from "next/link"

export default function UniversityPartnershipSection() {
  const partnershipStats = [
    { icon: "🏢", number: "100+", label: "Partner Universities", color: "text-blue-600" },
    { icon: "👥", number: "285+", label: "Active Consultants", color: "text-green-600" },
    { icon: "🌍", number: "35+", label: "Major Cities", color: "text-purple-600" },
    { icon: "📈", number: "4,800+", label: "Annual Placements", color: "text-orange-600" },
  ]

  const networkHighlights = [
    {
      country: "🇮🇳 India",
      consultants: "150+",
      cities: "15+",
      students: "2,500+",
      growth: "+45% YoY",
    },
    {
      country: "🇳🇵 Nepal",
      consultants: "45+",
      cities: "8+",
      students: "800+",
      growth: "+38% YoY",
    },
    {
      country: "🇱🇰 Sri Lanka",
      consultants: "35+",
      cities: "6+",
      students: "600+",
      growth: "+52% YoY",
    },
    {
      country: "🇬🇭 Ghana",
      consultants: "25+",
      cities: "4+",
      students: "400+",
      growth: "+65% YoY",
    },
    {
      country: "🇵🇭 Philippines",
      consultants: "30+",
      cities: "5+",
      students: "500+",
      growth: "+42% YoY",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        {/* Header for Universities */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FOR UNIVERSITIES & COLLEGES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Scale Your International
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Recruitment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Join2Campus operates the largest specialized network for European education recruitment. Partner with us to
            access 285+ vetted consultants across 5 countries and 4,800+ annual student placements.
          </p>
        </div>

        {/* Impressive Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnershipStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                <span className={stat.color + " text-2xl"}>{stat.icon}</span>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Network Breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Global Consultant Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkHighlights.map((network, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">{network.country}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {network.growth}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{network.consultants}</div>
                    <div className="text-xs text-gray-600">Consultants</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{network.cities}</div>
                    <div className="text-xs text-gray-600">Cities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{network.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why 100+ Universities Choose Join2Campus</h3>
            <p className="text-xl text-blue-100">The numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Visa Success Rate</div>
              <div className="text-sm text-blue-200 mt-2">Industry leading approval rates</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">⏰</span>
              </div>
              <div className="text-3xl font-bold mb-2">72hrs</div>
              <div className="text-blue-100">Response Time</div>
              <div className="text-sm text-blue-200 mt-2">Fast application processing</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">⭐</span>
              </div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Partner Rating</div>
              <div className="text-sm text-blue-200 mt-2">Exceptional satisfaction scores</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/become-partner"
              className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors duration-300 shadow-2xl hover:shadow-3xl inline-block transform hover:scale-105"
            >
              Partner With Our Network Today
            </Link>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">What You Get</h4>
            <div className="space-y-4">
              {[
                "Access to 285+ vetted education consultants",
                "Guaranteed minimum student numbers",
                "Dedicated account management team",
                "Marketing support and co-branding",
                "Real-time application tracking system",
                "24/7 support for urgent matters",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h4>
            <div className="space-y-4">
              {[
                "Quality students with genuine academic intent",
                "Complete documentation and visa support",
                "Pre-departure orientation programs",
                "Ongoing student support services",
                "Regular performance reporting",
                "Continuous network expansion",
              ].map((commitment, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-blue-500 mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
