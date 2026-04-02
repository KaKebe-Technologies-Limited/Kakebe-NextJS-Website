import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const config = await prisma.siteConfig.findUnique({ where: { id: 1 } })
  return NextResponse.json(config)
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { name, tagline, description, email, phone, address, twitter, linkedin, github, formspreeId } = await request.json()
  const updated = await prisma.siteConfig.update({
    where: { id: 1 },
    data: { name, tagline, description, email, phone, address, twitter, linkedin, github, formspreeId },
  })
  await logActivity('Updated', 'Site Settings')
  return NextResponse.json(updated)
}
