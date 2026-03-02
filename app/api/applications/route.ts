import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json([])
    }

    const { getDatabase } = await import('@/lib/mongodb')
    const db = await getDatabase()

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const search = searchParams.get("search")?.toLowerCase()

    const query: any = {}

    // If agent (not admin), only show their own applications
    const role = (session.user as any)?.role
    if (role !== 'admin') {
      query.agentEmail = session.user?.email
    }

    if (status) {
      query.status = status
    }

    if (search) {
      query.$or = [
        { studentName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ]
    }

    const applications = await db.collection('students')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray()

    const formatted = applications.map(app => ({
      id: app._id.toString(),
      studentName: app.studentName || app.name || 'Unknown',
      email: app.email || '',
      country: app.country || app.preferredCountry || '',
      status: app.status || 'pending',
      lastUpdated: app.updatedAt || app.createdAt || new Date().toISOString(),
      course: app.course || app.program || '',
      university: app.university || '',
    }))

    return NextResponse.json(formatted)
  } catch (error: any) {
    console.error('Fetch applications error:', error)
    return NextResponse.json([])
  }
}
