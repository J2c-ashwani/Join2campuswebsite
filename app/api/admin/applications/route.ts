import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    // Only admins can view all applications
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { getDatabase } = await import('@/lib/mongodb')
    const db = await getDatabase()
    
    // Fetch all applications
    const applications = await db.collection('students')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ 
      success: true,
      applications: applications.map(app => ({
        id: app._id.toString(),
        applicationId: app.applicationId,
        agentEmail: app.agentEmail,
        studentName: app.studentName,
        email: app.email,
        phone: app.phone,
        country: app.country,
        course: app.course,
        status: app.status,
        adminNotes: app.adminNotes || '',
        createdAt: app.createdAt,
      }))
    })
  } catch (error: any) {
    console.error('Fetch applications error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
