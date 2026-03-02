import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { getDatabase } = await import('@/lib/mongodb')
    const db = await getDatabase()

    const { searchParams } = new URL(request.url)
    const country = searchParams.get("country")?.toLowerCase()
    const search = searchParams.get("search")?.toLowerCase()

    const query: any = {}

    if (country) {
      query.country = { $regex: new RegExp(`^${country}$`, 'i') }
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { country: { $regex: search, $options: 'i' } },
      ]
    }

    const universities = await db.collection('universities')
      .find(query)
      .sort({ name: 1 })
      .toArray()

    const formatted = universities.map(u => ({
      id: u._id.toString(),
      name: u.name,
      country: u.country,
      programs: u.programs || [],
      intakeDates: u.intakes || u.intakeDates || [],
      description: u.description || u.requirements || '',
      studentCapacity: u.studentCapacity || 0,
      applicationDeadline: u.applicationDeadline || '',
    }))

    return NextResponse.json(formatted)
  } catch (error: any) {
    console.error('Fetch universities error:', error)
    return NextResponse.json([])
  }
}
