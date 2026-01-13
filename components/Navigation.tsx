"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/services", label: "Our Services" },
    { href: "/countries", label: "Countries" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/indian-institute-of-ai", label: "Institute of AI" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Join2Campus Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-indigo-700">Join2Campus</span>
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition duration-300 ${isActive(href)
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className={`block py-2 text-base transition duration-300 ${isActive(href)
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
