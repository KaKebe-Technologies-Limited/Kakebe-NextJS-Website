import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const members = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(members.map((m) => ({ ...m, categories: JSON.parse(m.categories) })))
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { name, role, categories, image, bio, linkedin, twitter, order } = await request.json()
  const member = await prisma.teamMember.create({
    data: { name, role, categories: JSON.stringify(categories ?? []), image: image ?? '', bio: bio ?? '', linkedin: linkedin ?? '', twitter: twitter ?? '', order: order ?? 0 },
  })
  await logActivity('Created', 'Team', name)
  return NextResponse.json(member)
}
