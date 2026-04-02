'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

interface ProgramFormProps {
  initial?: { id?: number; title: string; description: string; icon: string; features: string[]; order: number }
  isNew?: boolean
}

export default function ProgramForm({ initial, isNew }: ProgramFormProps) {
  const router = useRouter()
  const [form, setForm] = useState(initial ?? { title: '', description: '', icon: '', features: [''], order: 0 })
  const [saving, setSaving] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  function updateFeature(i: number, val: string) { setForm(f => ({ ...f, features: f.features.map((ft, idx) => idx === i ? val : ft) })) }
  function addFeature() { setForm(f => ({ ...f, features: [...f.features, ''] })) }
  function removeFeature(i: number) { setForm(f => ({ ...f, features: f.features.filter((_, idx) => idx !== i) })) }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const url = isNew ? '/api/admin/programs' : `/api/admin/programs/${initial?.id}`
      const res = await fetch(url, { method: isNew ? 'POST' : 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, features: form.features.filter(f => f.trim()) }) })
      if (!res.ok) throw new Error()
      toast.success(isNew ? 'Program created!' : 'Saved!')
      router.push('/admin/programs')
    } catch { toast.error('Failed to save'); setSaving(false) }
  }

  return (
    <form onSubmit={handleSave}>
      <PageHeader title={isNew ? 'Add Program' : `Edit — ${form.title}`} action={
        <div className="flex gap-2">
          <Link href="/admin/programs" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">Cancel</Link>
          <SaveButton loading={saving} />
        </div>
      } />
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">Icon</label>
              <input value={form.icon} onChange={set('icon')} placeholder="🎵" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 text-center text-lg" />
            </div>
            <div className="col-span-11">
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input value={form.title} onChange={set('title')} placeholder="Program name" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={set('description')} rows={3} placeholder="What is this program about?"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Display Order</label>
            <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))} className="w-24 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-300">Features / Highlights</label>
            <button type="button" onClick={addFeature} className="text-red-400 hover:text-red-300 text-xs">+ Add</button>
          </div>
          <div className="space-y-2">
            {form.features.map((ft, i) => (
              <div key={i} className="flex gap-2">
                <input value={ft} onChange={e => updateFeature(i, e.target.value)} placeholder={`Feature ${i + 1}`}
                  className="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" />
                <button type="button" onClick={() => removeFeature(i)} className="text-gray-500 hover:text-red-400 text-sm">✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  )
}
