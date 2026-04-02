'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'
import ImageUpload from '@/components/admin/ImageUpload'

interface TeamFormProps {
  initial?: { id?: number; name: string; role: string; categories: string[]; image: string; bio: string; linkedin: string; twitter: string; order: number }
  isNew?: boolean
}

const ALL_CATS = ['Management', 'Developers', 'Marketing Team', 'Digital Content']

export default function TeamForm({ initial, isNew }: TeamFormProps) {
  const router = useRouter()
  const [form, setForm] = useState(initial ?? { name: '', role: '', categories: [] as string[], image: '', bio: '', linkedin: '', twitter: '', order: 0 })
  const [saving, setSaving] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  function toggleCat(cat: string) {
    setForm(f => ({ ...f, categories: f.categories.includes(cat) ? f.categories.filter(c => c !== cat) : [...f.categories, cat] }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const url = isNew ? '/api/admin/team' : `/api/admin/team/${initial?.id}`
      const method = isNew ? 'POST' : 'PATCH'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success(isNew ? 'Member added!' : 'Saved!')
      router.push('/admin/team')
    } catch { toast.error('Failed to save'); setSaving(false) }
  }

  const inp = (k: string, placeholder?: string, type = 'text') => (
    <input type={type} value={(form as Record<string,unknown>)[k] as string} onChange={set(k)} placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
  )

  return (
    <form onSubmit={handleSave}>
      <PageHeader
        title={isNew ? 'Add Team Member' : `Edit — ${form.name}`}
        action={
          <div className="flex gap-2">
            <Link href="/admin/team" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">Cancel</Link>
            <SaveButton loading={saving} />
          </div>
        }
      />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>{inp('name', 'Jane Doe')}</div>
              <div><label className="block text-sm font-medium text-gray-300 mb-1">Role / Title</label>{inp('role', 'Software Developer')}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
              <textarea value={form.bio} onChange={set('bio')} rows={3} placeholder="Short biography…"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Social Links</h2>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn URL</label>{inp('linkedin', 'https://linkedin.com/in/…')}</div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Twitter URL</label>{inp('twitter', 'https://twitter.com/…')}</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <ImageUpload
              label="Photo"
              value={form.image}
              onChange={url => setForm(f => ({ ...f, image: url }))}
              placeholder="/images/team/…"
              previewShape="circle"
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Display Order</label>
              <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">Categories</label>
            <div className="space-y-2">
              {ALL_CATS.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.categories.includes(cat)} onChange={() => toggleCat(cat)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-600 focus:ring-offset-gray-800" />
                  <span className="text-sm text-gray-300">{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
