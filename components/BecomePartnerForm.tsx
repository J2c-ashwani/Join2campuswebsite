"use client"

import Link from "next/link"

export default function BecomePartnerForm() {
  const partnerFormUrl = "https://forms.gle/4zikgFJFxoPtKyMa8"
  const embeddablePartnerFormUrl = `${partnerFormUrl}?embedded=true`

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Become a Partner</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Interested in partnering with Join2Campus? Please fill out the form below, and our team will get in touch with
          you.
        </p>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
          <iframe
            src={embeddablePartnerFormUrl}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Become a Partner Form"
            className="rounded-lg"
          >
            Loading...
          </iframe>
        </div>
        <Link
          href="/"
          className="mt-8 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
