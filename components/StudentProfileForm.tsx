"use client"

import { useState } from "react"
import Link from "next/link"

export default function StudentProfileForm() {
  const [showEmbedded, setShowEmbedded] = useState(true)

  // Using the correct form URL you provided
  const studentFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdR4NA2sNY8sbpiJl8jpfLefZXUd87xZ63HD7N8Jfzkx2E84A/viewform"
  const embeddedFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdR4NA2sNY8sbpiJl8jpfLefZXUd87xZ63HD7N8Jfzkx2E84A/viewform?embedded=true"

  const handleDirectFormOpen = () => {
    window.open(studentFormUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Submit Your Student Profile</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Please fill out the form below to submit your student profile. Your information will be securely collected in
          our system.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
          {showEmbedded ? (
            <div className="space-y-4">
              {/* Embedded Form */}
              <div className="relative">
                <iframe
                  src={embeddedFormUrl}
                  width="100%"
                  height="1000"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Student Profile Submission Form"
                  className="rounded-lg border border-gray-200"
                  onError={() => {
                    console.log("Iframe failed to load")
                    setShowEmbedded(false)
                  }}
                >
                  Loading form...
                </iframe>
              </div>

              {/* "Fill the form" button - Always visible */}
              <div className="text-center py-4 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Having trouble with the embedded form?</p>
                <button
                  onClick={handleDirectFormOpen}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  📝 Fill the Form (Open in New Tab)
                </button>
              </div>
            </div>
          ) : (
            // Fallback when embedded form fails
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📝</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Profile Form</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Complete our comprehensive form to get personalized guidance for your European education journey. The
                  form will open in a new tab for the best experience.
                </p>

                <button
                  onClick={handleDirectFormOpen}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-full hover:from-indigo-700 hover:to-purple-700 transition duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📝 Fill the Form
                </button>

                <p className="text-gray-500 text-sm mt-4">
                  Form opens in a new tab • Takes 5-10 minutes to complete • Secure & confidential
                </p>

                {/* Option to try embedded again */}
                <button
                  onClick={() => setShowEmbedded(true)}
                  className="mt-4 text-indigo-600 hover:text-indigo-800 underline text-sm"
                >
                  Try embedded form again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Alternative contact methods */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Need Help or Prefer Other Methods?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://wa.me/918058191418?text=Hi! I want to submit my student profile for European universities. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 font-medium text-center flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp Us</span>
            </a>
            <a
              href="mailto:support@join2campus.com?subject=Student Profile Submission&body=Hi, I would like to submit my student profile. Please guide me through the process."
              className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-center flex items-center justify-center space-x-2"
            >
              <span>📧</span>
              <span>Email Details</span>
            </a>
            <a
              href="tel:+918058191418"
              className="bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium text-center flex items-center justify-center space-x-2"
            >
              <span>📞</span>
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Form Information */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What Information Do We Need?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">🎓</span>
              <div>
                <h4 className="font-medium text-gray-800">Academic Background</h4>
                <p className="text-gray-600 text-sm">Your educational qualifications and grades</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">🌍</span>
              <div>
                <h4 className="font-medium text-gray-800">Country Preferences</h4>
                <p className="text-gray-600 text-sm">Which European countries interest you</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 text-xl">📚</span>
              <div>
                <h4 className="font-medium text-gray-800">Course Interests</h4>
                <p className="text-gray-600 text-sm">Your preferred field of study</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 text-xl">📞</span>
              <div>
                <h4 className="font-medium text-gray-800">Contact Information</h4>
                <p className="text-gray-600 text-sm">How we can reach you</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
