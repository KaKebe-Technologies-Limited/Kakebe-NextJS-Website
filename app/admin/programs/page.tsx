'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Program { id: number; title: string; description: string; icon: string; features: string[]; order: number }

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)

  const load = () => fetch('/api/admin/programs').then(r => r.json()).then(d => { setPrograms(d); setLoading(false) })
  useEffect(() => { load() }, [])

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    await fetch(`/api/admin/programs/${id}`, { method: 'DELETE' })
    toast.success('Deleted')
    load()
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Programs" description={`${programs.length} programs`} action={
        <Link href="/admin/programs/new" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors">+ Add program</Link>
      } />
      <div className="space-y-2">
        {programs.map(p => (
          <div key={p.id} className="bg-gray-800 rounded-xl border border-gray-700 px-5 py-4 flex items-center gap-4">
            <span className="text-2xl w-10 text-center">{p.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">{p.title}</p>
              <p className="text-gray-400 text-xs truncate mt-0.5">{p.description}</p>
              <p className="text-gray-600 text-xs mt-0.5">{p.features.length} features</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href={`/admin/programs/${p.id}/edit`} className="text-gray-400 hover:text-white text-xs transition-colors">Edit</Link>
              <button onClick={() => handleDelete(p.id, p.title)} className="text-gray-500 hover:text-red-400 text-xs transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
