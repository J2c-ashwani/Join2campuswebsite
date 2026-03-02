import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "./providers"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Join2Campus Partner Portal",
  description: "Agent portal for managing student applications and university partnerships",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${geist.className} ${geistMono.className} font-sans antialiased portal-scope`}>
      <Providers>
        {children}
      </Providers>
    </div>
  )
}
