"use client"

import Link from "next/link"

export default function TermsOfServiceSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h2>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Welcome to Join2Campus. These Terms of Service ("Terms") govern your use of our website and services. By
            accessing or using our services, you agree to be bound by these Terms.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Use of Service</h3>
          <p>
            You agree to use the service only for lawful purposes and in a way that does not infringe the rights of,
            restrict or inhibit anyone else's use and enjoyment of the service.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h3>
          <p>
            The service and its original content, features and functionality are and will remain the exclusive property
            of Join2Campus and its licensors.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h3>
          <p>
            Our service may contain links to third-party web sites or services that are not owned or controlled by
            Join2Campus.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Termination</h3>
          <p>
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason
            whatsoever.
          </p>
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
