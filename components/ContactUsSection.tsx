"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
setResponseMessage("✅ Thank you! Your message has been sent successfully. A member of the Join2Campus team will contact you within 24 hours.")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setResponseMessage("❌ Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setResponseMessage("❌ Something went wrong. Please try later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Ready to expand your study abroad offerings? Partner with Join2Campus today!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex items-center text-gray-700">
            <span className="text-indigo-600 mr-3 text-xl">📧</span>
            <a href="mailto:support@join2campus.com" className="hover:underline">
              support@join2campus.com
            </a>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="text-indigo-600 mr-3 text-xl">📞</span>
            <a href="tel:+918058191418" className="hover:underline">
              +91-8058191418
            </a>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="text-indigo-600 mr-3 text-xl">📍</span>
            <p>M Dhar Heights, Sola, Science City Road, Ahmedabad, India</p>
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 font-semibold shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className="text-center text-sm mt-4 text-gray-700">{responseMessage}</p>
            )}
          </form>
        </div>

        <Link
          href="/student-profile"
          className="mt-8 inline-block bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg"
        >
          Submit Your Profile (Student Form)
        </Link>
      </div>
    </section>
  )
}
