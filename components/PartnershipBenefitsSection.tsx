"use client"

import { partnershipBenefits } from "@/lib/data"
import Link from "next/link"

export default function PartnershipBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Universities Choose Join2Campus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the 100+ universities that trust our network to deliver high-quality international students
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-indigo-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record Speaks</h3>
            <p className="text-xl text-indigo-100">Numbers that demonstrate our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-indigo-200">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-indigo-200">Partner Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">72hrs</div>
              <div className="text-indigo-200">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Support Available</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/become-partner"
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Start Partnership Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
