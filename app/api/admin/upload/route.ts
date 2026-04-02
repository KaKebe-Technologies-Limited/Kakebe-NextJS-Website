import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { requireAdmin } from '@/lib/admin-auth'
import { logActivity } from '@/lib/admin-log'

export async function POST(request: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file || !file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Invalid file — images only' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large (max 5 MB)' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const ext = path.extname(file.name).toLowerCase() || '.jpg'
    const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'uploads')
    await mkdir(uploadDir, { recursive: true })
    await writeFile(path.join(uploadDir, name), buffer)
    await logActivity('Uploaded image', 'Media', name)

    return NextResponse.json({ url: `/images/uploads/${name}` })
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
