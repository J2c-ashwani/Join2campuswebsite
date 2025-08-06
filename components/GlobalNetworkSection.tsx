"use client"

import { globalNetworkData } from "@/lib/data"
import Image from "next/image"

export default function GlobalNetworkSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Global Consultant Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join2Campus operates the largest network of education consultants specializing in European destinations,
            spanning across 5 countries with 285+ active partners.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Country Network Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {globalNetworkData.map((network, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Country Header */}
              <div className="flex items-center mb-6" role="group" aria-label={`${network.country} information`}>
                <Image
                  src={network.flag || "/flags/default.png"}
                  alt={`${network.country} flag`}
                  width={48}
                  height={32}
                  className="mr-4 rounded shadow-sm object-contain bg-gray-100"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{network.country}</h3>
                  <p className="text-gray-600">{network.description}</p>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">{network.consultants}</div>
                  <div className="text-sm text-gray-600">Consultants</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{network.students}</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
              </div>

              {/* Cities */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Major Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {network.cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Tap Into This Network?</h3>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Partner with Join2Campus and gain access to our extensive consultant network across 5 countries. Increase
            your international student enrollment with our proven recruitment system.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Partner With Our Network
          </button>
        </div>
      </div>
    </section>
  )
}
