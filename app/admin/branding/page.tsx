'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'
import ImageUpload from '@/components/admin/ImageUpload'

export default function BrandingPage() {
  const [form, setForm] = useState({ faviconUrl: '', logoUrl: '', primaryColor: '#dc2626' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(d => {
      if (d) setForm({ faviconUrl: d.faviconUrl ?? '', logoUrl: d.logoUrl ?? '', primaryColor: d.primaryColor ?? '#dc2626' })
      setLoading(false)
    })
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const res = await fetch('/api/admin/settings', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('Branding saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="Branding" description="Favicon, logo, and primary color" action={<SaveButton loading={saving} />} />
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Favicon</h2>
          <ImageUpload
            label="Favicon (.png or .ico)"
            value={form.faviconUrl}
            onChange={url => setForm(f => ({ ...f, faviconUrl: url }))}
            placeholder="/favicon.png"
            previewShape="rect"
          />
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Logo Image (optional)</h2>
          <ImageUpload
            label="Logo (leave blank for text logo)"
            value={form.logoUrl}
            onChange={url => setForm(f => ({ ...f, logoUrl: url }))}
            placeholder="/images/logo.png"
            previewShape="rect"
          />
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Primary Color</h2>
          <div className="flex items-center gap-4">
            <input type="color" value={form.primaryColor} onChange={e => setForm(f => ({ ...f, primaryColor: e.target.value }))}
              className="w-12 h-10 rounded cursor-pointer border border-gray-600 bg-transparent" />
            <input value={form.primaryColor} onChange={e => setForm(f => ({ ...f, primaryColor: e.target.value }))}
              placeholder="#dc2626"
              className="w-36 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-mono" />
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-5 h-5 rounded" style={{ background: form.primaryColor }} />
              Used for buttons, accents, and hover states
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
