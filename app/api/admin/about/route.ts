import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const about = await prisma.aboutContent.findUnique({ where: { id: 1 } })
  if (!about) return NextResponse.json(about)
  return NextResponse.json({ ...about, milestones: JSON.parse(about.milestones || '[]') })
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { story, mission, vision, milestones } = await request.json()
  const updated = await prisma.aboutContent.update({
    where: { id: 1 },
    data: { story, mission, vision, milestones: JSON.stringify(milestones ?? []) },
  })
  await logActivity('Updated', 'About Page')
  return NextResponse.json(updated)
}
