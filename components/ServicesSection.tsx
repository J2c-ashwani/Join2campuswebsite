"use client"

import type React from "react"
import Link from "next/link" // Import the Link component

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, ClipboardCheck, FileSearch, Landmark, LineChart, Plane, Settings, Star, Users } from "lucide-react"

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-gray-800">
      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
      <span className="text-sm">{children}</span>
    </li>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            A structured lifecycle across discovery, application, decision, visa, and onboarding—measured with SLAs and
            transparent updates.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        {/* SLAs including 24–72h promise */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {[
            {
              title: "Offer Letters",
              desc: "Students or our partners typically receive a university offer letter within 24–72 hours of a complete submission.",
              icon: LineChart,
            },
            {
              title: "Application Review",
              desc: "File completeness checks within 2–3 business days.",
              icon: ClipboardCheck,
            },
            {
              title: "Average Offer Cycle",
              desc: "10–14 days across our European network.",
              icon: Landmark,
            },
          ].map((s) => (
            <Card key={s.title} className="bg-white border border-gray-100 rounded-2xl shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-base text-gray-900">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{s.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personas */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-indigo-600" />
                <CardTitle className="text-lg text-gray-900">For Students</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Personalized guidance to make confident choices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-800">
                <Dot>Profile evaluation and shortlisting aligned to budget and language needs</Dot>
                <Dot>SOP/CV guidance and document completeness checks</Dot>
                <Dot>Offer comparison and acceptance support</Dot>
                <Dot>Visa documentation, appointment prep, and mock interviews</Dot>
                <Dot>Pre‑departure orientation and arrival checklist</Dot>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-lg text-gray-900">For Consultants & Agencies</CardTitle>
              </div>
              <CardDescription className="text-gray-600">Scale with reliable backend operations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-800">
                <Dot>Dedicated Account Manager for Partners</Dot>
                <Dot>Access to an extensive European partner network</Dot>
                <Dot>Marketing collateral, webinars, and intake calendars</Dot>
                <Dot>Centralized tracking for submissions, offers, and visas</Dot>
                <Dot>Clear commission structures and timely reconciliation</Dot>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Operating model */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Operating Model</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mt-2">
            A measured, step‑by‑step journey from discovery to arrival.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: FileSearch, title: "Discover", desc: "Profile review, program discovery, and intake planning." },
              {
                icon: ClipboardCheck,
                title: "Apply",
                desc: "Document packaging and portal submissions with tracking.",
              },
              { icon: Landmark, title: "Offer", desc: "Offer verification, fee schedules, and deposit guidance." },
              { icon: Plane, title: "Visa", desc: "Checklists, financials, and interview preparation." },
              { icon: Settings, title: "Pre‑departure", desc: "Accommodation, insurance, and travel readiness." },
              { icon: Briefcase, title: "Arrival", desc: "Campus registration and early settling support." },
            ].map((step) => (
              <Card key={step.title} className="bg-white border border-gray-100 rounded-2xl shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-indigo-600" />
                    <CardTitle className="text-sm text-gray-900">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{step.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner enablement band (replaces FAQ) */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Partner Enablement & Reporting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Star,
                title: "Co‑Branded Marketing",
                desc: "Brochures, email templates, and social kits for intakes and scholarships.",
              },
              {
                icon: LineChart,
                title: "Pipeline Visibility",
                desc: "Dashboards for submissions, offers, visas, and commissions.",
              },
              {
                icon: Settings,
                title: "Playbooks & Training",
                desc: "EU admissions workshops and documentation best practices.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                <div className="flex items-center gap-2">
                  <v.icon className="h-5 w-5 text-indigo-100" />
                  <div className="font-semibold">{v.title}</div>
                </div>
                <p className="mt-2 text-indigo-100 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* The corrected button with the Link component */}
            <Link href="/contact" passHref>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-6">
                Get Free Consultation
              </Button>
            </Link>
            
            {/* Another corrected button with the Link component */}
            <Link href="/contact" passHref>
              <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-indigo-600 rounded-full px-6">
                Partner With Our Network
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}