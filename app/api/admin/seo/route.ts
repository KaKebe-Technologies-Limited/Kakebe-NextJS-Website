import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const seoPages = await prisma.pageSEO.findMany({ orderBy: { page: 'asc' } })
  return NextResponse.json(seoPages)
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const updates: { page: string; title: string; description: string; ogImage: string }[] = await request.json()
  await Promise.all(
    updates.map((u) =>
      prisma.pageSEO.upsert({
        where: { page: u.page },
        create: u,
        update: { title: u.title, description: u.description, ogImage: u.ogImage },
      })
    )
  )
  await logActivity('Updated', 'SEO')
  return NextResponse.json({ success: true })
}
