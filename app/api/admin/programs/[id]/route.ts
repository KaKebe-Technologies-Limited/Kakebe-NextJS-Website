import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const program = await prisma.program.findUnique({ where: { id: Number(id) } })
  if (!program) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...program, features: JSON.parse(program.features) })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { title, description, icon, features, order } = await request.json()
  const updated = await prisma.program.update({
    where: { id: Number(id) },
    data: { title, description, icon, features: JSON.stringify(features ?? []), order },
  })
  await logActivity('Updated', 'Programs', title)
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const program = await prisma.program.delete({ where: { id: Number(id) } })
  await logActivity('Deleted', 'Programs', program.title)
  return NextResponse.json({ success: true })
}
