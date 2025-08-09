"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPinned, Send, CheckCircle2, XCircle } from "lucide-react"

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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to expand your study abroad offerings? Partner with Join2Campus today!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <CardTitle className="text-lg text-gray-900 mb-1">Email Us</CardTitle>
              <a href="mailto:support@join2campus.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                support@join2campus.com
              </a>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <CardTitle className="text-lg text-gray-900 mb-1">Call Us</CardTitle>
              <a href="tel:+918058191418" className="text-gray-600 hover:text-purple-600 transition-colors">
                +91-8058191418
              </a>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <MapPinned className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <CardTitle className="text-lg text-gray-900 mb-1">Our Office</CardTitle>
              <p className="text-gray-600">M Dhar Heights, Sola, Science City Road, Ahmedabad, India</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Card */}
        <Card className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-4 md:p-8 shadow-lg mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2 text-center text-gray-800">Send Us a Message</CardTitle>
            <CardDescription className="text-gray-600 text-center">
              Fill out the form below and we'll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition duration-300 font-semibold shadow-md"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              {responseMessage && (
                <div className={`mt-4 flex items-center justify-center text-sm font-medium ${responseMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                  {responseMessage.startsWith('✅') ? <CheckCircle2 className="h-5 w-5 mr-2" /> : <XCircle className="h-5 w-5 mr-2" />}
                  <p>{responseMessage}</p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Closing band (Student Profile link) */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to start your application?</h3>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Create your student profile and let's get you on the path to studying in Europe.
          </p>
          <Link href="/student-profile" passHref>
            <Button
              asChild
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 transition duration-300 font-semibold shadow-md"
            >
              <span className="text-lg">Submit Your Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
