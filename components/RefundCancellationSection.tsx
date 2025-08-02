"use client"

import Link from "next/link"

export default function RefundCancellationSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Refund & Cancellation Policy</h2>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            This Refund and Cancellation Policy outlines the terms and conditions for refunds and cancellations of
            services provided by Join2Campus. Please read this policy carefully before engaging with our services.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Cancellation by User</h3>
          <p>
            If you wish to cancel your application or service request with Join2Campus, please notify us in writing as
            soon as possible. The eligibility for a refund and the amount of refund will depend on the stage of your
            application.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Before Service Commencement:</strong> A full or partial refund may be applicable if the service
              has not yet commenced.
            </li>
            <li>
              <strong>After Service Commencement:</strong> Refunds may be partial or not applicable, depending on the
              extent of services already provided.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Refund Processing</h3>
          <p>
            All refund requests will be processed within business days of approval. The refund will be issued via the
            original method of payment or another mutually agreed-upon method.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Cancellation by Join2Campus</h3>
          <p>
            Join2Campus reserves the right to cancel or terminate services at any time if there is a breach of our Terms
            of Service.
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
