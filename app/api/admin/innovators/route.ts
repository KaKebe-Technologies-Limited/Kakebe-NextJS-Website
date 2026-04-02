import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const innovators = await prisma.innovator.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(innovators.map((i) => ({ ...i, projects: JSON.parse(i.projects), skills: JSON.parse(i.skills) })))
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { slug, name, tagline, image, bio, projects, skills, quote, featured, order } = await request.json()
  const innovator = await prisma.innovator.create({
    data: { slug, name, tagline: tagline ?? '', image: image ?? '', bio: bio ?? '', projects: JSON.stringify(projects ?? []), skills: JSON.stringify(skills ?? []), quote: quote ?? '', featured: featured ?? false, order: order ?? 0 },
  })
  await logActivity('Created', 'Innovators', name)
  return NextResponse.json(innovator)
}
