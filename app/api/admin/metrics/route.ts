import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const metrics = await prisma.metric.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(metrics)
}

export async function PUT(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const metrics: { id?: number; label: string; value: string; suffix: string; prefix: string; order: number }[] = await request.json()
  await prisma.metric.deleteMany()
  await prisma.metric.createMany({ data: metrics.map(({ id: _id, ...m }) => m) })
  await logActivity('Updated', 'Metrics')
  return NextResponse.json({ success: true })
}
