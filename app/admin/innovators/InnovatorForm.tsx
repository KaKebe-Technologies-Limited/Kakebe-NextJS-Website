'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'
import ImageUpload from '@/components/admin/ImageUpload'

interface InnovatorFormProps {
  initial?: { id?: number; slug: string; name: string; tagline: string; image: string; bio: string; projects: string[]; skills: string[]; quote: string; featured: boolean; order: number }
  isNew?: boolean
}

export default function InnovatorForm({ initial, isNew }: InnovatorFormProps) {
  const router = useRouter()
  const [form, setForm] = useState(initial ?? { slug: '', name: '', tagline: '', image: '', bio: '', projects: [] as string[], skills: [] as string[], quote: '', featured: false, order: 0 })
  const [saving, setSaving] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value
    setForm(f => ({ ...f, name, ...(isNew ? { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {}) }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const url = isNew ? '/api/admin/innovators' : `/api/admin/innovators/${initial?.id}`
      const res = await fetch(url, { method: isNew ? 'POST' : 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success(isNew ? 'Innovator created!' : 'Saved!')
      router.push('/admin/innovators')
    } catch { toast.error('Failed to save'); setSaving(false) }
  }

  return (
    <form onSubmit={handleSave}>
      <PageHeader title={isNew ? 'Add Innovator' : `Edit — ${form.name}`} action={
        <div className="flex gap-2">
          <Link href="/admin/innovators" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">Cancel</Link>
          <SaveButton loading={saving} />
        </div>
      } />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-300 mb-1">Name</label><input value={form.name} onChange={handleNameChange} placeholder="Full name" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" /></div>
              <div><label className="block text-sm font-medium text-gray-300 mb-1">Slug</label><input value={form.slug} onChange={set('slug')} className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 font-mono text-xs" /></div>
            </div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Tagline</label><input value={form.tagline} onChange={set('tagline')} placeholder="Full-Stack Developer & AI Enthusiast" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" /></div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Bio</label><textarea value={form.bio} onChange={set('bio')} rows={4} className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" /></div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Quote</label><input value={form.quote} onChange={set('quote')} placeholder="Inspirational quote…" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" /></div>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Skills <span className="text-gray-500 text-xs">(comma-separated)</span></label>
              <input value={form.skills.join(', ')} onChange={e => setForm(f => ({ ...f, skills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} placeholder="React, Python, Node.js" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" />
              <div className="flex gap-1 mt-2 flex-wrap">{form.skills.map(s => <span key={s} className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">{s}</span>)}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Projects <span className="text-gray-500 text-xs">(comma-separated)</span></label>
              <input value={form.projects.join(', ')} onChange={e => setForm(f => ({ ...f, projects: e.target.value.split(',').map(p => p.trim()).filter(Boolean) }))} placeholder="Project A, Project B" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <ImageUpload
              label="Photo"
              value={form.image}
              onChange={url => setForm(f => ({ ...f, image: url }))}
              placeholder="/images/innovators/…"
              previewShape="circle"
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Display Order</label>
              <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))} className="w-24 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-600" />
              <span className="text-sm text-gray-300">Featured innovator</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  )
}
