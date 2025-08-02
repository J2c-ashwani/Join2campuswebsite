"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 rounded-t-lg shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Join2Campus. All rights reserved.</p>
        <div className="mt-4 space-x-4 flex flex-wrap justify-center">
          <Link href="/privacy-policy" className="hover:text-indigo-400 transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-indigo-400 transition duration-300">
            Terms of Service
          </Link>
          <Link href="/refund-cancellation" className="hover:text-indigo-400 transition duration-300">
            Refund & Cancellation
          </Link>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/company/join2campus/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <span className="text-2xl">💼</span>
          </a>
          <a
            href="https://www.instagram.com/join2campus_studyabroad?igsh=MWIweThkZHN5eGJ0Mw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <span className="text-2xl">📷</span>
          </a>
          <a
            href="https://www.facebook.com/share/1SBXJUUMMx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <span className="text-2xl">📘</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
