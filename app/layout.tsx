import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import WhatsAppChat from "@/components/WhatsAppChat"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Join2Campus - Your Gateway to European Education",
  description:
    "Join2Campus is your one-stop destination for European country admission solutions. Partner with us for study abroad consulting in France, Germany, Ireland, Malta, and Cyprus.",
  keywords:
    "study abroad, European education, France, Germany, Ireland, Malta, Cyprus, education consultant",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Join2Campus",
              "url": "https://www.join2campus.com",
              "logo": "https://www.join2campus.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/join2campus/?viewAsMember=true",
                "https://www.instagram.com/join2campus_studyabroad?igsh=MWIweThkZHN5eGJ0Mw%3D%3D&utm_source=qr",
                "https://www.facebook.com/share/1SBXJUUMMx/"
              ]
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.join2campus.com",
              "name": "Join2Campus",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.join2campus.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 font-sans text-gray-800`}>
        {/* ✅ Google AdSense Script - runs only on client */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1200907614877581"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Navigation />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
