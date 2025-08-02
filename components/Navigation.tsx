"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link href="/" className="text-2xl font-bold text-indigo-700 cursor-pointer">
          Join2Campus
        </Link>
        <div className="space-x-4 hidden md:flex">
          <Link
            href="/"
            className={`transition duration-300 ${
              isActive("/") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition duration-300 ${
              isActive("/about") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/team"
            className={`transition duration-300 ${
              isActive("/team") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Our Team
          </Link>
          <Link
            href="/services"
            className={`transition duration-300 ${
              isActive("/services") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/countries"
            className={`transition duration-300 ${
              isActive("/countries") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Countries
          </Link>
          <Link
            href="/testimonials"
            className={`transition duration-300 ${
              isActive("/testimonials") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={`transition duration-300 ${
              isActive("/contact") ? "text-indigo-700 font-semibold" : "text-gray-600 hover:text-indigo-700"
            }`}
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button (for future implementation) */}
        <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}
