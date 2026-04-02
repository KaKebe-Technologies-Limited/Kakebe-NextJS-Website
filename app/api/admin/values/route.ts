import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const values = await prisma.value.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(values)
}

export async function PUT(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const values: { id?: number; title: string; description: string; icon: string; order: number }[] = await request.json()
  await prisma.value.deleteMany()
  await prisma.value.createMany({ data: values.map(({ id: _id, ...v }) => v) })
  await logActivity('Updated', 'Values')
  return NextResponse.json({ success: true })
}
