"use client"

import { useState } from "react"
// Remove the import
// import { MapPin, Users, GraduationCap, TrendingUp } from 'lucide-react'

export default function InteractiveEuropeMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const countries = [
    {
      id: "france",
      name: "France",
      flag: "🇫🇷",
      universities: "25+",
      students: "500+",
      consultants: "45+",
      capital: "Paris",
      highlights: ["Sorbonne University", "Sciences Po", "ESSEC Business School"],
      description:
        "Experience world-class education in the heart of Europe with affordable tuition and rich cultural heritage.",
      position: { x: 48, y: 45 },
    },
    {
      id: "germany",
      name: "Germany",
      flag: "🇩🇪",
      universities: "20+",
      students: "400+",
      consultants: "38+",
      capital: "Berlin",
      highlights: ["Technical University Munich", "Heidelberg University", "RWTH Aachen"],
      description:
        "Study in Europe's economic powerhouse with excellent technical programs and strong industry connections.",
      position: { x: 52, y: 42 },
    },
    {
      id: "ireland",
      name: "Ireland",
      flag: "🇮🇪",
      universities: "15+",
      students: "300+",
      consultants: "25+",
      capital: "Dublin",
      highlights: ["Trinity College Dublin", "University College Dublin", "Dublin City University"],
      description: "English-speaking education hub with globally recognized degrees and vibrant student life.",
      position: { x: 42, y: 38 },
    },
    {
      id: "spain",
      name: "Spain",
      flag: "🇪🇸",
      universities: "18+",
      students: "250+",
      consultants: "30+",
      capital: "Madrid",
      highlights: ["IE Business School", "Universidad Complutense", "ESADE Business School"],
      description:
        "Discover Mediterranean lifestyle while pursuing quality education in one of Europe's most welcoming countries.",
      position: { x: 45, y: 55 },
    },
    {
      id: "netherlands",
      name: "Netherlands",
      flag: "🇳🇱",
      universities: "22+",
      students: "350+",
      consultants: "32+",
      capital: "Amsterdam",
      highlights: ["University of Amsterdam", "Delft University", "Erasmus University"],
      description: "Progressive education system with innovative programs taught in English.",
      position: { x: 50, y: 40 },
    },
    {
      id: "italy",
      name: "Italy",
      flag: "🇮🇹",
      universities: "16+",
      students: "280+",
      consultants: "28+",
      capital: "Rome",
      highlights: ["Bocconi University", "University of Bologna", "Sapienza University"],
      description: "Study in the birthplace of Renaissance with world-renowned universities and rich history.",
      position: { x: 52, y: 50 },
    },
  ]

  const selectedCountryData = countries.find((c) => c.id === selectedCountry)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Explore Our European Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any country to discover universities, student placements, and consultant network details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Interactive Europe Map</h3>

              {/* SVG Map Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl p-6 min-h-96">
                <svg viewBox="0 0 100 80" className="w-full h-full">
                  {/* Europe outline (simplified) */}
                  <path
                    d="M20,20 L80,20 L85,30 L80,40 L85,50 L80,60 L70,65 L60,70 L50,65 L40,70 L30,65 L25,55 L20,45 L15,35 Z"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.5"
                  />

                  {/* Country markers */}
                  {countries.map((country) => (
                    <g key={country.id}>
                      <circle
                        cx={country.position.x}
                        cy={country.position.y}
                        r="3"
                        fill={selectedCountry === country.id ? "#f59e0b" : "#3b82f6"}
                        stroke="white"
                        strokeWidth="1"
                        className="cursor-pointer hover:r-4 transition-all duration-300"
                        onClick={() => setSelectedCountry(country.id)}
                      />
                      <text
                        x={country.position.x}
                        y={country.position.y - 5}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-700 cursor-pointer"
                        onClick={() => setSelectedCountry(country.id)}
                      >
                        {country.flag}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Available Countries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span>Selected Country</span>
                  </div>
                </div>
              </div>

              {/* Country List */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.id)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCountry === country.id
                        ? "bg-amber-500 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                    }`}
                  >
                    <span className="mr-1">{country.flag}</span>
                    {country.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Country Details */}
          <div className="space-y-6">
            {selectedCountryData ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{selectedCountryData.flag}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{selectedCountryData.name}</h3>
                    <p className="text-gray-600">Capital: {selectedCountryData.capital}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedCountryData.description}</p>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <span className="text-blue-600 text-xl mx-auto mb-2 block">🎓</span>
                    <div className="text-2xl font-bold text-blue-600">{selectedCountryData.universities}</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <span className="text-green-600 text-xl mx-auto mb-2 block">👥</span>
                    <div className="text-2xl font-bold text-green-600">{selectedCountryData.students}</div>
                    <div className="text-sm text-gray-600">Students Placed</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <span className="text-purple-600 text-xl mx-auto mb-2 block">📍</span>
                    <div className="text-2xl font-bold text-purple-600">{selectedCountryData.consultants}</div>
                    <div className="text-sm text-gray-600">Consultants</div>
                  </div>
                </div>

                {/* Top Universities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Top Partner Universities:</h4>
                  <div className="space-y-2">
                    {selectedCountryData.highlights.map((university, index) => (
                      <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                        <span className="text-indigo-600 mr-3">📈</span>
                        <span className="text-gray-700">{university}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Explore Programs
                  </button>
                  <button className="flex-1 border border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 text-center">
                <span className="text-gray-400 text-4xl mx-auto mb-4 block">📍</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Select a Country</h3>
                <p className="text-gray-600 mb-6">
                  Click on any country marker on the map or use the buttons below to explore our network details,
                  partner universities, and student placement statistics.
                </p>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">200+</div>
                      <div className="text-sm text-gray-600">Total Universities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">6,200+</div>
                      <div className="text-sm text-gray-600">Students Placed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">285+</div>
                      <div className="text-sm text-gray-600">Total Consultants</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">98%</div>
                      <div className="text-sm text-gray-600">Visa Success</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
