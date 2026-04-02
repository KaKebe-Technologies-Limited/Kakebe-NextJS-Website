import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const items = await prisma.navItem.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(items)
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { label, href } = await request.json()
  const count = await prisma.navItem.count()
  const item = await prisma.navItem.create({ data: { label, href, order: count } })
  await logActivity('Added nav item', 'Navigation', label)
  return NextResponse.json(item)
}

export async function PUT(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const items: { id: number; label: string; href: string; order: number }[] = await request.json()
  await Promise.all(
    items.map((item) =>
      prisma.navItem.update({ where: { id: item.id }, data: { label: item.label, href: item.href, order: item.order } })
    )
  )
  await logActivity('Updated', 'Navigation')
  return NextResponse.json({ success: true })
}
