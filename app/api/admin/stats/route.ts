import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { getDatabase } = await import('@/lib/mongodb')
        const db = await getDatabase()

        const [
            totalAgents,
            totalApplications,
            pendingApplications,
            acceptedApplications,
            totalUniversities,
        ] = await Promise.all([
            db.collection('agents').countDocuments({ role: { $ne: 'admin' } }),
            db.collection('students').countDocuments({}),
            db.collection('students').countDocuments({ status: { $in: ['pending', 'under_review', 'submitted'] } }),
            db.collection('students').countDocuments({ status: { $in: ['accepted', 'approved'] } }),
            db.collection('universities').countDocuments({}),
        ])

        const acceptanceRate = totalApplications > 0
            ? Math.round((acceptedApplications / totalApplications) * 100)
            : 0

        return NextResponse.json({
            success: true,
            stats: {
                totalAgents,
                totalApplications,
                pendingApplications,
                acceptedApplications,
                acceptanceRate,
                totalUniversities,
            }
        })
    } catch (error: any) {
        console.error('Fetch admin stats error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
