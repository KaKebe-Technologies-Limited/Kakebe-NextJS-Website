'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

interface PageSEO { id: number; page: string; title: string; description: string; ogImage: string }

const PAGE_LABELS: Record<string, string> = { home: 'Homepage', about: 'About', programs: 'Programs', projects: 'Projects', team: 'Team', innovators: 'Innovators', contact: 'Contact' }

export default function SEOPage() {
  const [pages, setPages] = useState<PageSEO[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    fetch('/api/admin/seo').then(r => r.json()).then(d => { setPages(d); setLoading(false) })
  }, [])

  function update(page: string, key: keyof PageSEO, value: string) {
    setPages(prev => prev.map(p => p.page === page ? { ...p, [key]: value } : p))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      await fetch('/api/admin/seo', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(pages) })
      toast.success('SEO saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  const current = pages.find(p => p.page === active)

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="SEO" description="Manage meta titles and descriptions per page" action={<SaveButton loading={saving} />} />
      <div className="flex gap-6">
        <div className="w-40 shrink-0">
          <ul className="space-y-0.5">
            {pages.map(p => (
              <li key={p.page}>
                <button type="button" onClick={() => setActive(p.page)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${active === p.page ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                  {PAGE_LABELS[p.page] ?? p.page}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {current && (
          <div className="flex-1 bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <h2 className="text-white font-semibold">{PAGE_LABELS[current.page] ?? current.page}</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title <span className="text-gray-500 text-xs ml-1">{current.title.length}/60</span></label>
              <input value={current.title} onChange={e => update(current.page, 'title', e.target.value)} maxLength={80}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description <span className="text-gray-500 text-xs ml-1">{current.description.length}/160</span></label>
              <textarea value={current.description} onChange={e => update(current.page, 'description', e.target.value)} rows={3} maxLength={200}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">OG Image URL</label>
              <input value={current.ogImage} onChange={e => update(current.page, 'ogImage', e.target.value)} placeholder="/images/og-home.jpg"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Google preview</p>
              <p className="text-blue-400 text-sm font-medium truncate">{current.title || 'Page Title'}</p>
              <p className="text-green-600 text-xs">kakebe.tech/{current.page === 'home' ? '' : current.page}</p>
              <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">{current.description || 'Meta description…'}</p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
