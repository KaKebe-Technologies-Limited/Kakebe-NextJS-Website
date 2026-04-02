'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Innovator { id: number; name: string; tagline: string; image: string; skills: string[]; featured: boolean }

export default function InnovatorsPage() {
  const [innovators, setInnovators] = useState<Innovator[]>([])
  const [loading, setLoading] = useState(true)

  const load = () => fetch('/api/admin/innovators').then(r => r.json()).then(d => { setInnovators(d); setLoading(false) })
  useEffect(() => { load() }, [])

  async function handleDelete(id: number, name: string) {
    if (!confirm(`Delete ${name}?`)) return
    await fetch(`/api/admin/innovators/${id}`, { method: 'DELETE' })
    toast.success('Deleted')
    load()
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Innovators" description={`${innovators.length} innovators`} action={
        <Link href="/admin/innovators/new" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors">+ Add innovator</Link>
      } />
      <div className="grid grid-cols-2 gap-4">
        {innovators.map(inv => (
          <div key={inv.id} className="bg-gray-800 rounded-xl border border-gray-700 p-5 flex gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-700 overflow-hidden shrink-0">
              {inv.image && <Image src={inv.image} alt={inv.name} width={56} height={56} className="object-cover w-full h-full" unoptimized />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-white font-medium text-sm">{inv.name}</p>
                {inv.featured && <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded">Featured</span>}
              </div>
              <p className="text-gray-400 text-xs mt-0.5">{inv.tagline}</p>
              <div className="flex gap-1 mt-2 flex-wrap">
                {inv.skills.slice(0, 4).map(s => <span key={s} className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
              <div className="flex gap-3 mt-3">
                <Link href={`/admin/innovators/${inv.id}/edit`} className="text-gray-400 hover:text-white text-xs">Edit</Link>
                <button onClick={() => handleDelete(inv.id, inv.name)} className="text-gray-500 hover:text-red-400 text-xs">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
