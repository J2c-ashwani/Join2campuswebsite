"use client"

import { useState } from "react"
import { countriesData } from "@/lib/data"
import Link from "next/link"
import CountryInfoModal from "./CountryInfoModal"

export default function CountriesSection() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Calculate totals
  const totalUniversities = countriesData.reduce((sum, country) => {
    const num = Number.parseInt(country.universities.split("+")[0])
    return sum + num
  }, 0)

  const totalStudents = countriesData.reduce((sum, country) => {
    const num = Number.parseInt(country.students.split("+")[0])
    return sum + num
  }, 0)

  return (
    <section id="countries" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">16 Premium European Destinations</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            {totalUniversities}+ Partner Universities across 16 European countries. Over{" "}
            {Math.floor(totalStudents / 100) * 100}+ students successfully placed across our comprehensive European
            network.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">16</div>
            <div className="text-gray-600 font-medium">European Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{totalUniversities}+</div>
            <div className="text-gray-600 font-medium">Partner Universities</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{Math.floor(totalStudents / 100) * 100}+</div>
            <div className="text-gray-600 font-medium">Students Placed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Visa Success Rate</div>
          </div>
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
                <div className="absolute top-0 right-0 text-4xl opacity-20 transform rotate-12">{country.flag}</div>
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{country.flag}</span>
                    <h3 className="text-lg font-bold">{country.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="text-center">
                      <div className="text-sm font-bold">{country.universities}</div>
                      <div className="text-xs text-indigo-200">Universities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">{country.students}</div>
                      <div className="text-xs text-indigo-200">Students</div>
                    </div>
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

                {/* Action Button - Updated to open modal */}
                <button
                  onClick={() => setSelectedCountry(country.name)}
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
            <div>
              <div className="text-2xl font-bold mb-2">Western Europe</div>
              <div className="text-indigo-200 text-sm">France, Germany, Netherlands, Belgium, Austria</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Northern Europe</div>
              <div className="text-indigo-200 text-sm">Ireland, Denmark, Sweden</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Southern Europe</div>
              <div className="text-indigo-200 text-sm">Spain, Italy, Portugal, Malta, Cyprus</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Central Europe</div>
              <div className="text-indigo-200 text-sm">Poland, Czech Republic, Hungary</div>
            </div>
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
