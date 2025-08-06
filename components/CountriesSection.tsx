"use client"

import { useState } from "react"
import { countriesData } from "@/lib/data"
import Link from "next/link"
import CountryInfoModal from "./CountryInfoModal"
import Image from "next/image"

export default function CountriesSection() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Safe number parsing (handles formats like "2,500+")
  const parseNumber = (str: string) => {
    const match = str.replace(/,/g, "").match(/\d+/) // remove commas, extract digits
    return match ? Number(match[0]) : 0
  }

  // Calculate totals
  const totalUniversities = countriesData.reduce((sum, country) => sum + parseNumber(country.universities), 0)
  const totalStudents = countriesData.reduce((sum, country) => sum + parseNumber(country.students), 0)

  return (
    <section id="countries" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            16 Premium European Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            {totalUniversities}+ Partner Universities across 16 European countries. Over{" "}
            {Math.floor(totalStudents / 100) * 100}+ students successfully placed across our comprehensive European
            network.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard number="16" label="European Countries" color="indigo" />
          <StatCard number={`${totalUniversities}+`} label="Partner Universities" color="purple" />
          <StatCard number={`${Math.floor(totalStudents / 100) * 100}+`} label="Students Placed" color="green" />
          <StatCard number="98%" label="Visa Success Rate" color="orange" />
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {countriesData.map((country, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Country Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20 transform rotate-12">
                  <Image
                    src={country.flag || "/flags/placeholder.png"}
                    alt={`${country.name} flag`}
                    width={48}
                    height={32}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Image
                      src={country.flag || "/flags/placeholder.png"}
                      alt={`${country.name} flag`}
                      width={24}
                      height={16}
                      className="mr-2 object-cover rounded-sm"
                      loading="lazy"
                    />
                    <h3 className="text-lg font-bold">{country.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <SmallStat number={country.universities} label="Universities" />
                    <SmallStat number={country.students} label="Students" />
                  </div>
                </div>
              </div>

              {/* Country Content */}
              <div className="p-4">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{country.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {country.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedCountry(country.name)}
                  aria-label={`Explore more about ${country.name}`}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-center block group-hover:shadow-lg text-sm"
                >
                  Explore {country.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Breakdown */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Complete European Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <RegionBlock title="Western Europe" countries="France, Germany, Netherlands, Belgium, Austria" />
            <RegionBlock title="Northern Europe" countries="Ireland, Denmark, Sweden" />
            <RegionBlock title="Southern Europe" countries="Spain, Italy, Portugal, Malta, Cyprus" />
            <RegionBlock title="Central Europe" countries="Poland, Czech Republic, Hungary" />
          </div>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            From the tech hubs of Netherlands to the historic universities of Italy, we cover every major European
            education destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/become-partner"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Partner With Our Network
            </Link>
          </div>
        </div>
      </div>

      {/* Country Info Modal */}
      <CountryInfoModal
        country={selectedCountry || ""}
        isOpen={!!selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </section>
  )
}

// Small reusable components
function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border text-center border-${color}-100`}>
      <div className={`text-4xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

function SmallStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-sm font-bold">{number}</div>
      <div className="text-xs text-indigo-200">{label}</div>
    </div>
  )
}

function RegionBlock({ title, countries }: { title: string; countries: string }) {
  return (
    <div>
      <div className="text-2xl font-bold mb-2">{title}</div>
      <div className="text-indigo-200 text-sm">{countries}</div>
    </div>
  )
}
