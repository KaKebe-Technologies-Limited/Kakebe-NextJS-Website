import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const programs = await prisma.program.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(programs.map((p) => ({ ...p, features: JSON.parse(p.features) })))
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { title, description, icon, features, order } = await request.json()
  const program = await prisma.program.create({
    data: { title, description: description ?? '', icon: icon ?? '', features: JSON.stringify(features ?? []), order: order ?? 0 },
  })
  await logActivity('Created', 'Programs', title)
  return NextResponse.json(program)
}
