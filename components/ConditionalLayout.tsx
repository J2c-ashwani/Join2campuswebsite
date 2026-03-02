"use client"

import { usePathname } from "next/navigation"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import WhatsAppChat from "@/components/WhatsAppChat"

const PORTAL_ROUTES = ["/login", "/dashboard", "/admin"]

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isPortalRoute = PORTAL_ROUTES.some((route) => pathname.startsWith(route))

    if (isPortalRoute) {
        return <>{children}</>
    }

    return (
        <>
            <Navigation />
            <main className="min-h-[70vh]">{children}</main>
            <Footer />
            <WhatsAppChat />
        </>
    )
}
