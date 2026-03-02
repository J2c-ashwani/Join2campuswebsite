"use client"

import type React from "react"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Globe2, ShieldCheck, Users, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email or password. Please try again.")
      } else if (result?.ok) {
        // Fetch session to get user role for routing
        const res = await fetch("/api/auth/session")
        const session = await res.json()
        const role = session?.user?.role

        if (role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
      }
    } catch {
      setError("Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Join2Campus</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8 max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              Your Partner Portal for
              <span className="block mt-1 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                European Education
              </span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Manage student applications, track admissions, and grow your education consulting business — all in one place.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-medium text-sm">217+ Partner Universities</p>
                  <p className="text-sm text-blue-200">Across 16 European countries</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-medium text-sm">Real-Time Tracking</p>
                  <p className="text-sm text-blue-200">Monitor every application status</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Join2Campus. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Join2Campus</span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-gray-500">
              Sign in to your partner portal account
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="animate-in slide-in-from-top-1 duration-200">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-11 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                  className="h-11 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 pr-10 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-200 group"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <div className="pt-4 text-center">
            <p className="text-sm text-gray-400">
              Need access? Contact your{" "}
              <a href="mailto:support@join2campus.com" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                administrator
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
