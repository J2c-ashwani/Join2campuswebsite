import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { getDatabase } = await import('@/lib/mongodb')
        const db = await getDatabase()

        const agentEmail = session.user?.email

        const [
            totalApplications,
            pendingApplications,
            acceptedApplications,
            underReviewApplications,
            totalUniversities,
        ] = await Promise.all([
            db.collection('students').countDocuments({ agentEmail }),
            db.collection('students').countDocuments({ agentEmail, status: { $in: ['pending', 'submitted'] } }),
            db.collection('students').countDocuments({ agentEmail, status: { $in: ['accepted', 'approved'] } }),
            db.collection('students').countDocuments({ agentEmail, status: 'under_review' }),
            db.collection('universities').countDocuments({}),
        ])

        return NextResponse.json({
            success: true,
            stats: {
                totalApplications,
                pending: pendingApplications,
                accepted: acceptedApplications,
                underReview: underReviewApplications,
                totalUniversities,
            }
        })
    } catch (error: any) {
        console.error('Fetch dashboard stats error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
