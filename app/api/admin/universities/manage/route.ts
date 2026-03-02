import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { ObjectId } from 'mongodb'

export const dynamic = 'force-dynamic'

export async function DELETE(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await request.json()

        if (!id) {
            return NextResponse.json({ error: 'University ID is required' }, { status: 400 })
        }

        const { getDatabase } = await import('@/lib/mongodb')
        const db = await getDatabase()

        const result = await db.collection('universities').deleteOne({ _id: new ObjectId(id) })

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'University not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, message: 'University deleted successfully' })
    } catch (error: any) {
        console.error('Delete university error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id, name, country, programs, intakes, tuition, requirements } = await request.json()

        if (!id) {
            return NextResponse.json({ error: 'University ID is required' }, { status: 400 })
        }

        const { getDatabase } = await import('@/lib/mongodb')
        const db = await getDatabase()

        const updateData: any = { updatedAt: new Date() }
        if (name) updateData.name = name
        if (country) updateData.country = country
        if (programs) updateData.programs = programs
        if (intakes) updateData.intakes = intakes
        if (tuition) updateData.tuition = tuition
        if (requirements) updateData.requirements = requirements

        const result = await db.collection('universities').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        )

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'University not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, message: 'University updated successfully' })
    } catch (error: any) {
        console.error('Update university error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
