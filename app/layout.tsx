import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import WhatsAppChat from "@/components/WhatsAppChat"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const BASE_URL = "https://www.join2campus.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Join2Campus - Your Gateway to European Education",
    template: "%s | Join2Campus",
  },
  description:
    "Join2Campus is your one-stop destination for European country admission solutions. Partner with us for study abroad consulting in France, Germany, Ireland, Malta, and Cyprus.",
  keywords:
    "study abroad, European education, France, Germany, Ireland, Malta, Cyprus, education consultant, student visa, masters abroad",
  generator: "Next.js",
  applicationName: "Join2Campus",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Join2Campus",
    title: "Join2Campus - Your Gateway to European Education",
    description: "Your one-stop destination for European country admission solutions. Study in France, Germany, Ireland, Malta, and Cyprus.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Join2Campus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join2Campus - Your Gateway to European Education",
    description: "Study abroad consulting for France, Germany, Ireland, Malta, and Cyprus.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        {/* Preconnect for faster external resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#4F46E5" />

        {/* ✅ Google Site Verification (optional, helps AdSense verification) */}
        <meta name="google-site-verification" content="YOUR_UNIQUE_CODE_HERE" />

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
        {/* Navigation and main content */}
        <Navigation />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppChat />

        {/* Optional: load AdSense client-side script again if needed for dynamic ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1200907614877581"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
