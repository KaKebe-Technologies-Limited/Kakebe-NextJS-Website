'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Member { id: number; name: string; role: string; categories: string[]; image: string; bio: string; order: number }

const CATS = ['All', 'Management', 'Developers', 'Marketing Team', 'Digital Content']

export default function TeamPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  const load = () => fetch('/api/admin/team').then(r => r.json()).then(d => { setMembers(d); setLoading(false) })
  useEffect(() => { load() }, [])

  async function handleDelete(id: number, name: string) {
    if (!confirm(`Delete ${name}?`)) return
    await fetch(`/api/admin/team/${id}`, { method: 'DELETE' })
    toast.success('Deleted')
    load()
  }

  const filtered = filter === 'All' ? members : members.filter(m => m.categories.includes(filter))

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Team Members" description={`${members.length} members`} action={
        <Link href="/admin/team/new" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors">
          + Add member
        </Link>
      } />
      <div className="flex gap-2 mb-5 flex-wrap">
        {CATS.map(c => (
          <button key={c} type="button" onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${filter === c ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-gray-700">
            <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide w-12"></th>
            <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Name</th>
            <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Role</th>
            <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Categories</th>
            <th className="px-5 py-3 w-28"></th>
          </tr></thead>
          <tbody>
            {filtered.map(m => (
              <tr key={m.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-750">
                <td className="px-5 py-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                    <Image src={m.image || '/images/default-avatar.jpg'} alt={m.name} width={32} height={32} className="object-cover w-full h-full" unoptimized />
                  </div>
                </td>
                <td className="px-5 py-3 text-sm text-white font-medium">{m.name}</td>
                <td className="px-5 py-3 text-sm text-gray-400">{m.role}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {m.categories.map(c => <span key={c} className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">{c}</span>)}
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 justify-end">
                    <Link href={`/admin/team/${m.id}/edit`} className="text-gray-400 hover:text-white text-xs transition-colors">Edit</Link>
                    <button onClick={() => handleDelete(m.id, m.name)} className="text-gray-500 hover:text-red-400 text-xs transition-colors">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
