import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const footer = await prisma.footerConfig.findUnique({ where: { id: 1 } })
  return NextResponse.json(footer)
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { brandText, copyrightName, exploreLinks, programLinks } = await request.json()
  const updated = await prisma.footerConfig.update({
    where: { id: 1 },
    data: {
      brandText,
      copyrightName,
      exploreLinks: JSON.stringify(exploreLinks),
      programLinks: JSON.stringify(programLinks),
    },
  })
  await logActivity('Updated', 'Footer')
  return NextResponse.json(updated)
}
