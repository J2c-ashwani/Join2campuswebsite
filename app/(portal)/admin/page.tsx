"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, FileText, Clock, CheckCircle, GraduationCap, Settings, BarChart3, Loader2 } from "lucide-react"

interface Stats {
  totalAgents: number
  totalApplications: number
  pendingApplications: number
  acceptedApplications: number
  acceptanceRate: number
  totalUniversities: number
}

export default function AdminDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      const data = await res.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">System-wide Overview — All Agents & Applications</p>
        <p className="text-sm text-gray-500 mt-1">Logged in as: {session?.user?.email}</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
          <span className="ml-3 text-gray-500">Loading dashboard...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Total Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">{stats?.totalAgents ?? 0}</div>
                <p className="text-xs text-gray-500 mt-1">Active partners across network</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">{stats?.totalApplications ?? 0}</div>
                <p className="text-xs text-gray-500 mt-1">Across all agents</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600">{stats?.pendingApplications ?? 0}</div>
                <p className="text-xs text-gray-500 mt-1">Awaiting your action</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Acceptance Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{stats?.acceptanceRate ?? 0}%</div>
                <p className="text-xs text-gray-500 mt-1">Overall success rate</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Admin Actions</CardTitle>
              <CardDescription>System management and oversight</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/admin/applications" className="p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-500 transition cursor-pointer block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">All Applications</h3>
                      <p className="text-sm text-gray-600">Review {stats?.totalApplications ?? 0} applications from all agents</p>
                    </div>
                  </div>
                </Link>

                <Link href="/admin/agents" className="p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-500 transition cursor-pointer block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Manage Agents</h3>
                      <p className="text-sm text-gray-600">View and manage {stats?.totalAgents ?? 0} partner agents</p>
                    </div>
                  </div>
                </Link>

                <Link href="/admin/settings" className="p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-500 transition cursor-pointer block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">System Settings</h3>
                      <p className="text-sm text-gray-600">Configure global parameters</p>
                    </div>
                  </div>
                </Link>

                <Link href="/admin/universities" className="p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-500 transition cursor-pointer block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Partner Universities</h3>
                      <p className="text-sm text-gray-600">Manage {stats?.totalUniversities ?? 0} university partnerships</p>
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
