import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const hero = await prisma.heroSection.findUnique({ where: { id: 1 } })
  return NextResponse.json(hero)
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { headline, subheadline, cta1Label, cta1Href, cta2Label, cta2Href, imageUrl } = await request.json()
  const updated = await prisma.heroSection.update({
    where: { id: 1 },
    data: { headline, subheadline, cta1Label, cta1Href, cta2Label, cta2Href, imageUrl },
  })
  await logActivity('Updated', 'Hero Section')
  return NextResponse.json(updated)
}
