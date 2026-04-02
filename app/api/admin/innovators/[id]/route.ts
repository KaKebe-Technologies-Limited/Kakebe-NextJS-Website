import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const innovator = await prisma.innovator.findUnique({ where: { id: Number(id) } })
  if (!innovator) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...innovator, projects: JSON.parse(innovator.projects), skills: JSON.parse(innovator.skills) })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { slug, name, tagline, image, bio, projects, skills, quote, featured, order } = await request.json()
  const updated = await prisma.innovator.update({
    where: { id: Number(id) },
    data: { slug, name, tagline, image, bio, projects: JSON.stringify(projects ?? []), skills: JSON.stringify(skills ?? []), quote, featured, order },
  })
  await logActivity('Updated', 'Innovators', name)
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const innovator = await prisma.innovator.delete({ where: { id: Number(id) } })
  await logActivity('Deleted', 'Innovators', innovator.name)
  return NextResponse.json({ success: true })
}
