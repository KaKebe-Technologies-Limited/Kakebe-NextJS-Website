import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const project = await prisma.project.findUnique({ where: { id: Number(id) } })
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...project, tags: JSON.parse(project.tags), innovators: JSON.parse(project.innovators) })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { slug, title, description, category, image, tags, innovators, order } = await request.json()
  const updated = await prisma.project.update({
    where: { id: Number(id) },
    data: { slug, title, description, category, image, tags: JSON.stringify(tags ?? []), innovators: JSON.stringify(innovators ?? []), order },
  })
  await logActivity('Updated', 'Projects', title)
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const project = await prisma.project.delete({ where: { id: Number(id) } })
  await logActivity('Deleted', 'Projects', project.title)
  return NextResponse.json({ success: true })
}
