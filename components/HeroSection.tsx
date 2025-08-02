"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative text-white py-24 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Background Image - EU Flag */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/eu-flag-background.jpg"
          alt="Join2Campus - Join 2 Campus - European Union flag background - Study in Europe"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-blue-800/60"></div>
      </div>

      {/* Floating EU Stars Animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-30">
          <div className="text-yellow-300 text-4xl animate-pulse">⭐</div>
        </div>
        <div className="absolute top-32 right-20 opacity-25">
          <div className="text-yellow-300 text-3xl animate-pulse delay-300">⭐</div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-30">
          <div className="text-yellow-300 text-5xl animate-pulse delay-700">⭐</div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-25">
          <div className="text-yellow-300 text-3xl animate-pulse delay-500">⭐</div>
        </div>

        {/* Floating Education Icons */}
        <div className="absolute top-1/4 right-1/4 opacity-40 animate-float">
          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30">
            <span className="text-white text-xl">🎓</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-40 animate-float delay-1000">
          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30">
            <span className="text-white text-xl">🌍</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main Headline with SEO keywords */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-yellow-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            Join2Campus - Europe's Leading
            <br />
            Education Network
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-white max-w-4xl mx-auto drop-shadow-lg font-medium">
            Join 2 Campus - Connecting 285+ Education Consultants Across 5 Countries
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            Your Gateway to 6,200+ Annual Student Placements in 16 European Destinations
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/25 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <span className="text-yellow-200 text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white drop-shadow-md">285+</div>
            <div className="text-sm text-blue-100 font-medium">Partner Consultants</div>
          </div>
          <div className="bg-white/25 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <span className="text-yellow-200 text-2xl">🌍</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white drop-shadow-md">16</div>
            <div className="text-sm text-blue-100 font-medium">European Countries</div>
          </div>
          <div className="bg-white/25 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <span className="text-yellow-200 text-2xl">🎓</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white drop-shadow-md">6,200+</div>
            <div className="text-sm text-blue-100 font-medium">Students Annually</div>
          </div>
          <div className="bg-white/25 backdrop-blur-lg rounded-xl p-6 border border-white/50 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <span className="text-yellow-200 text-2xl">📈</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white drop-shadow-md">98%</div>
            <div className="text-sm text-blue-100 font-medium">Visa Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/become-partner"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
          >
            Partner With Join2Campus
          </Link>
          <Link
            href="/countries"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-xl backdrop-blur-sm"
          >
            Explore 16 Destinations
          </Link>
        </div>

        {/* Trust Indicators - European Countries */}
        <div className="mt-16 text-center">
          <p className="text-white mb-8 text-lg drop-shadow-md font-medium flex items-center justify-center gap-2">
            <span className="text-yellow-300">🇪🇺</span>
            Trusted by Universities and Consultants Across Europe - Join2Campus Network
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {[
              { flag: "🇫🇷", name: "France" },
              { flag: "🇩🇪", name: "Germany" },
              { flag: "🇮🇪", name: "Ireland" },
              { flag: "🇪🇸", name: "Spain" },
              { flag: "🇳🇱", name: "Netherlands" },
              { flag: "🇮🇹", name: "Italy" },
              { flag: "🇵🇱", name: "Poland" },
              { flag: "🇵🇹", name: "Portugal" },
              { flag: "🇨🇿", name: "Czech Rep." },
              { flag: "🇦🇹", name: "Austria" },
              { flag: "🇧🇪", name: "Belgium" },
              { flag: "🇭🇺", name: "Hungary" },
              { flag: "🇩🇰", name: "Denmark" },
              { flag: "🇸🇪", name: "Sweden" },
              { flag: "🇨🇾", name: "Cyprus" },
              { flag: "🇲🇹", name: "Malta" },
            ].map((country, index) => (
              <div
                key={index}
                className="flex flex-col items-center opacity-90 hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-md rounded-lg p-3 hover:bg-white/25 hover:scale-105 border border-white/30"
              >
                <span className="text-2xl mb-1">{country.flag}</span>
                <span className="text-xs text-white font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
