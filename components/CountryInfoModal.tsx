"use client"

import Image from "next/image"

interface CountryInfo {
  name: string
  flag: string
  capital: string
  language: string[]
  currency: string
  description: string
  whyChoose: string[]
  popularCourses: string[]
  jobProspects: {
    duringStudy: string
    afterGraduation: string
  }
}

interface CountryInfoModalProps {
  country: string
  isOpen: boolean
  onClose: () => void
}

const countryInfo: Record<string, CountryInfo> = {
  france: {
    name: "France",
    flag: "/flags/fr.png",
    capital: "Paris",
    language: ["French"],
    currency: "Euro (€)",
    description:
      "France is renowned for its world-class education system, vibrant culture, and historical significance. It offers a wide range of programs in English and French.",
    whyChoose: [
      "Affordable tuition fees",
      "Rich cultural experience",
      "Globally recognized degrees",
      "Strong emphasis on research and innovation",
    ],
    popularCourses: ["Business", "Fashion", "Engineering", "Hospitality"],
    jobProspects: {
      duringStudy: "Part-time jobs up to 20 hours/week",
      afterGraduation:
        "Post-study work visa for up to 2 years; opportunities in diverse sectors",
    },
  },
  germany: {
    name: "Germany",
    flag: "/flags/de.png",
    capital: "Berlin",
    language: ["German", "English (in many programs)"],
    currency: "Euro (€)",
    description:
      "Germany is known for its excellent technical education and strong economy. Many universities offer tuition-free education to international students.",
    whyChoose: [
      "No tuition fees at public universities",
      "High-quality education",
      "Strong economy and job market",
      "Courses in English available",
    ],
    popularCourses: ["Engineering", "Computer Science", "Business", "Sciences"],
    jobProspects: {
      duringStudy: "120 full or 240 half days/year",
      afterGraduation:
        "18-month job seeker visa; strong demand for skilled professionals",
    },
  },
  // Add more countries here
}

export default function CountryInfoModal({ country, isOpen, onClose }: CountryInfoModalProps) {
  if (!isOpen) return null

  const info = countryInfo[country.toLowerCase()]
  if (!info) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Image
                src={info.flag}
                alt={`Flag of ${info.name}`}
                width={48}
                height={32}
                className="mr-4 rounded shadow"
              />
              <div>
                <h2 className="text-3xl font-bold">Study in {info.name}</h2>
                <p className="text-indigo-100">
                  Capital: {info.capital} | Currency: {info.currency}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-indigo-200 text-2xl">
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">{info.description}</p>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Languages Spoken</h3>
            <ul className="list-disc list-inside text-gray-700">
              {info.language.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </div>

          {/* Why Choose */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Choose {info.name}?</h3>
            <ul className="list-disc list-inside text-gray-700">
              {info.whyChoose.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Popular Courses</h3>
            <ul className="list-disc list-inside text-gray-700">
              {info.popularCourses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Job Prospects */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Job Prospects</h3>
            <p className="text-gray-700">
              <strong>During Study:</strong> {info.jobProspects.duringStudy}
            </p>
            <p className="text-gray-700">
              <strong>After Graduation:</strong> {info.jobProspects.afterGraduation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
