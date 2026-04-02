import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const projects = await prisma.project.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(projects.map((p) => ({ ...p, tags: JSON.parse(p.tags), innovators: JSON.parse(p.innovators) })))
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { slug, title, description, category, image, tags, innovators, order } = await request.json()
  const project = await prisma.project.create({
    data: { slug, title, description: description ?? '', category: category ?? '', image: image ?? '', tags: JSON.stringify(tags ?? []), innovators: JSON.stringify(innovators ?? []), order: order ?? 0 },
  })
  await logActivity('Created', 'Projects', title)
  return NextResponse.json(project)
}
