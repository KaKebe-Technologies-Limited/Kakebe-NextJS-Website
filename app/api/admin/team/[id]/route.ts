import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const member = await prisma.teamMember.findUnique({ where: { id: Number(id) } })
  if (!member) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...member, categories: JSON.parse(member.categories) })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { name, role, categories, image, bio, linkedin, twitter, order } = await request.json()
  const updated = await prisma.teamMember.update({
    where: { id: Number(id) },
    data: { name, role, categories: JSON.stringify(categories ?? []), image, bio, linkedin, twitter, order },
  })
  await logActivity('Updated', 'Team', name)
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const member = await prisma.teamMember.delete({ where: { id: Number(id) } })
  await logActivity('Deleted', 'Team', member.name)
  return NextResponse.json({ success: true })
}
