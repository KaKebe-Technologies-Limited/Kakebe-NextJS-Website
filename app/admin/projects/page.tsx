'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Project { id: number; slug: string; title: string; description: string; category: string; image: string; tags: string[]; innovators: string[] }

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const load = () => fetch('/api/admin/projects').then(r => r.json()).then(d => { setProjects(d); setLoading(false) })
  useEffect(() => { load() }, [])

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    toast.success('Deleted')
    load()
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Projects" description={`${projects.length} projects`} action={
        <Link href="/admin/projects/new" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors">+ Add project</Link>
      } />
      <div className="grid grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="h-32 bg-gray-700 relative">
              {p.image && <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />}
            </div>
            <div className="p-4">
              <p className="text-white font-medium text-sm">{p.title}</p>
              <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">{p.description}</p>
              <div className="flex gap-1 mt-2 flex-wrap">
                {p.tags.slice(0, 3).map(t => <span key={t} className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">{t}</span>)}
              </div>
              <div className="flex gap-3 mt-3 border-t border-gray-700 pt-3">
                <Link href={`/admin/projects/${p.id}/edit`} className="text-gray-400 hover:text-white text-xs transition-colors">Edit</Link>
                <button onClick={() => handleDelete(p.id, p.title)} className="text-gray-500 hover:text-red-400 text-xs transition-colors">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
