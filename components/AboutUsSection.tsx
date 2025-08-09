"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  Users,
  MapPinned,
  BookOpen,
  HeartHandshake,
  Sparkles,
  Compass,
  Layers,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

function StatCard({
  number,
  label,
  color = "indigo",
}: {
  number: string
  label: string
  color?: "indigo" | "purple" | "green" | "orange"
}) {
  const colorMap = {
    indigo: { text: "text-indigo-600", border: "border-indigo-100" },
    purple: { text: "text-purple-600", border: "border-purple-100" },
    green: { text: "text-green-600", border: "border-green-100" },
    orange: { text: "text-orange-600", border: "border-orange-100" },
  }[color]

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border text-center ${colorMap.border}`}>
      <div className={`text-4xl font-bold ${colorMap.text} mb-2`}>{number}</div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  )
}

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            We connect qualified students with European universities using transparent counseling and a disciplined
            process aligned to ECTS, intake calendars, and language requirements.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard number="150+" label="Partner Institutions" color="indigo" />
          <StatCard number="3,500+" label="ECTS‑Aligned Programs" color="purple" />
          <StatCard number="2,000+" label="Applications / Year" color="green" />
          <StatCard number="10+" label="European Destinations" color="orange" />
        </div>

        {/* Pillars */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-indigo-600" />
                <CardTitle className="text-lg text-gray-900">Outcome‑Aligned Guidance</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Shortlists that balance eligibility, budget, language needs, and post‑study goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700">
              We use eligibility matrices and checklists to reduce rework and improve offer rates.
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-lg text-gray-900">Transparent Operations</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Central tracking, documented milestones, and proactive communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700">
              Clear SLAs and escalation paths ensure predictability for students and partners.
            </CardContent>
          </Card>
        </div>

        {/* Mission & Values (new) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Our Mission & Values</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mt-2">
            We align every recommendation to student outcomes while operating with integrity and continuous improvement.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Student‑First Integrity",
                desc: "Advice that prioritizes fit, transparency, and realistic pathways—no overpromises.",
                color: "text-indigo-600",
              },
              {
                icon: Layers,
                title: "Process Discipline",
                desc: "Repeatable checklists and documentation standards reduce rework and delays.",
                color: "text-purple-600",
              },
              {
                icon: RefreshCw,
                title: "Continuous Improvement",
                desc: "We refine our playbooks each intake based on decisions, visas, and feedback.",
                color: "text-indigo-600",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-white border border-gray-100 rounded-2xl shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <CardTitle className="text-base text-gray-900">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{item.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional coverage band */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">European Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              {
                country: "France",
                desc: "Public/private universities • Sep/Jan intakes • EN/FR programs",
              },
              {
                country: "Germany",
                desc: "FH/Universität routes • APS (where applicable) • Language pathways",
              },
              {
                country: "Ireland",
                desc: "STEM & business strengths • Post‑study options",
              },
              {
                country: "Malta",
                desc: "English‑medium programs • Affordability • Multiple intakes",
              },
              {
                country: "Cyprus",
                desc: "Scholarships • D‑type visa guidance • English programs",
              },
              {
                country: "More EU",
                desc: "Netherlands, Spain, Portugal • Foundation & pathway options",
              },
            ].map((item) => (
              <div key={item.country} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                <div className="flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-indigo-100" />
                  <div className="font-semibold">{item.country}</div>
                </div>
                <p className="mt-2 text-indigo-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            {
              icon: BookOpen,
              title: "Evidence‑Based Counseling",
              desc: "Intake calendars, eligibility matrices, and document checklists—no guesswork.",
            },
            {
              icon: HeartHandshake,
              title: "Student Wellbeing",
              desc: "Pre‑departure guidance on accommodation, insurance, and arrival checklists.",
            },
            {
              icon: Sparkles,
              title: "Clear Communication",
              desc: "No hidden costs or vague timelines—just documented steps and updates.",
            },
          ].map((d) => (
            <Card key={d.title} className="bg-white border border-gray-100 rounded-2xl shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <d.icon className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-sm text-gray-900">{d.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">{d.desc}</CardContent>
            </Card>
          ))}
        </div>

        {/* Accreditations & Compliance (new) */}
        <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg mb-16">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-indigo-600" />
              <CardTitle className="text-lg text-gray-900">Accreditations & Compliance</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Built‑in safeguards to keep applications accurate, timely, and compliant.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700">
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "GDPR‑aligned handling of student data",
                "ECTS and Bologna‑process alignment",
                "APS readiness where applicable (e.g., Germany)",
                "Embassy‑ready document packaging and checklists",
                "Transparent fee schedules and reconciliations",
                "Escalation paths and SLAs across each stage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Closing band (page endcap) */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to plan your European admission?</h3>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Let’s shortlist programs and intakes aligned to your budget, language preferences, and post‑study goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-block">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-6">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/#countries" className="inline-block">
              <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-indigo-600 rounded-full px-6">
                Explore Countries
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
