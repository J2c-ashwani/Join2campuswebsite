"use client"

import Link from "next/link"

export default function PrivacyPolicySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h2>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            This Privacy Policy describes how Join2Campus collects, uses, and discloses your personal information when
            you visit our website and use our services. We are committed to protecting your privacy and handling your
            data in an open and transparent manner.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h3>
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Personal Identifiable Information:</strong> Such as your name, email address, phone number, and
              other contact details when you fill out forms or contact us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information on how the service is accessed and used (e.g., IP address,
              browser type, pages visited, time spent on pages).
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to
              track the activity on our service and hold certain information.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
          <p>Join2Campus uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>To provide and maintain our service.</li>
            <li>To notify you about changes to our service.</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our service.</li>
            <li>To monitor the usage of our service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>
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
