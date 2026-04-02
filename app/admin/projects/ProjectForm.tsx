'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'
import ImageUpload from '@/components/admin/ImageUpload'

interface ProjectFormProps {
  initial?: { id?: number; slug: string; title: string; description: string; category: string; image: string; tags: string[]; innovators: string[]; order: number }
  isNew?: boolean
}

export default function ProjectForm({ initial, isNew }: ProjectFormProps) {
  const router = useRouter()
  const [form, setForm] = useState(initial ?? { slug: '', title: '', description: '', category: 'Internal Projects', image: '', tags: [] as string[], innovators: [] as string[], order: 0 })
  const [saving, setSaving] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  // Auto-generate slug from title
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    setForm(f => ({ ...f, title, ...(isNew ? { slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {}) }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const url = isNew ? '/api/admin/projects' : `/api/admin/projects/${initial?.id}`
      const res = await fetch(url, { method: isNew ? 'POST' : 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success(isNew ? 'Project created!' : 'Saved!')
      router.push('/admin/projects')
    } catch { toast.error('Failed to save'); setSaving(false) }
  }

  return (
    <form onSubmit={handleSave}>
      <PageHeader title={isNew ? 'Add Project' : `Edit — ${form.title}`} action={
        <div className="flex gap-2">
          <Link href="/admin/projects" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">Cancel</Link>
          <SaveButton loading={saving} />
        </div>
      } />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input value={form.title} onChange={handleTitleChange} placeholder="Project name" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Slug</label>
                <input value={form.slug} onChange={set('slug')} placeholder="project-slug" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 font-mono text-xs" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea value={form.description} onChange={set('description')} rows={4} placeholder="Project description…"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <input value={form.category} onChange={set('category')} placeholder="Internal Projects" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tags <span className="text-gray-500 text-xs">(comma-separated)</span></label>
              <input value={form.tags.join(', ')} onChange={e => setForm(f => ({ ...f, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) }))}
                placeholder="Next.js, React, API" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" />
              <div className="flex gap-1 mt-2 flex-wrap">{form.tags.map(t => <span key={t} className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">{t}</span>)}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Innovators <span className="text-gray-500 text-xs">(comma-separated names)</span></label>
              <input value={form.innovators.join(', ')} onChange={e => setForm(f => ({ ...f, innovators: e.target.value.split(',').map(i => i.trim()).filter(Boolean) }))}
                placeholder="Jane Doe, John Smith" className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <ImageUpload
              label="Project Image"
              value={form.image}
              onChange={url => setForm(f => ({ ...f, image: url }))}
              placeholder="/images/projects/…"
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Display Order</label>
              <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))} className="w-24 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
