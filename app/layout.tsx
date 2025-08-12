import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import WhatsAppChat from "@/components/WhatsAppChat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Join2Campus - Your Gateway to European Education",
  description:
    "Join2Campus is your one-stop destination for European country admission solutions. Partner with us for study abroad consulting in France, Germany, Ireland, Malta, and Cyprus.",
  keywords:
    "study abroad, European education, France, Germany, Ireland, Malta, Cyprus, education consultant",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 font-sans text-gray-800`}
        style={{ margin: 0, padding: 0 }}
      >
        <Navigation />
        <main style={{ margin: 0, padding: 0 }}>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
