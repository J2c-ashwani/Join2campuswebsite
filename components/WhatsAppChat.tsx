"use client"

import { useState } from "react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "918058191418"
  const message = "Hi! I'm interested in studying in Europe. Can you help me with more information?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            aria-label="Open WhatsApp Chat"
          >
            <span className="text-2xl">💬</span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold">Join2Campus Support</h3>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition-colors">
                <span className="text-xl">✕</span>
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 bg-gray-50 max-h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    👋 Hi there! Welcome to Join2Campus - Your Gateway to European Education!
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    🎓 We help students get admitted to 200+ universities across 16 European countries with a 98% visa
                    success rate!
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    💬 Click below to start chatting with our education experts on WhatsApp!
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">💬</span>
                <span>Start WhatsApp Chat</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+91-8058191418"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">📞</span>
                  <span>Call Now</span>
                </a>
                <div className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-xs flex items-center justify-center space-x-1">
                  <span className="text-xs">⏰</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-100 p-3">
              <p className="text-xs text-gray-600 mb-2 font-medium">Quick Actions:</p>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => {
                    const quickMessage = "I want to know about study opportunities in Europe"
                    const encodedMessage = encodeURIComponent(quickMessage)
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className="bg-white text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-50 transition-colors"
                >
                  🇪🇺 Study in Europe
                </button>
                <button
                  onClick={() => {
                    const quickMessage = "I need help with visa application process"
                    const encodedMessage = encodeURIComponent(quickMessage)
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className="bg-white text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-50 transition-colors"
                >
                  📋 Visa Help
                </button>
                <button
                  onClick={() => {
                    const quickMessage = "I want to become a partner consultant"
                    const encodedMessage = encodeURIComponent(quickMessage)
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className="bg-white text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-50 transition-colors"
                >
                  🤝 Partnership
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
