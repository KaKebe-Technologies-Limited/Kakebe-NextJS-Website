'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'
import ImageUpload from '@/components/admin/ImageUpload'

export default function HeroPage() {
  const [form, setForm] = useState({ headline: '', subheadline: '', cta1Label: '', cta1Href: '', cta2Label: '', cta2Href: '', imageUrl: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/hero').then(r => r.json()).then(d => { if (d) setForm(d); setLoading(false) })
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const res = await fetch('/api/admin/hero', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('Hero section saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  const inp = (k: string, placeholder?: string) => (
    <input value={(form as Record<string,string>)[k]} onChange={set(k)} placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
  )

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="Hero Section" description="The first thing visitors see on your homepage" action={<SaveButton loading={saving} />} />
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Headline</label>
            {inp('headline', 'Building the Next Gen of Innovators')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Subheadline</label>
            <textarea value={form.subheadline} onChange={set('subheadline')} rows={3} placeholder="Supporting description…"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500" />
          </div>
          <ImageUpload
            label="Background Image"
            value={form.imageUrl}
            onChange={url => setForm(f => ({ ...f, imageUrl: url }))}
            placeholder="/images/hero/hero.jpg"
          />
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">CTA Buttons</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-white text-sm font-medium">Primary Button</p>
              <div><label className="block text-xs text-gray-400 mb-1">Label</label>{inp('cta1Label', 'Explore Programs')}</div>
              <div><label className="block text-xs text-gray-400 mb-1">Link</label>{inp('cta1Href', '/programs')}</div>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm font-medium">Secondary Button</p>
              <div><label className="block text-xs text-gray-400 mb-1">Label</label>{inp('cta2Label', 'Meet Our Team')}</div>
              <div><label className="block text-xs text-gray-400 mb-1">Link</label>{inp('cta2Href', '/team')}</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <p className="text-gray-400 text-xs">Preview</p>
          <div className="mt-2 bg-gray-900 rounded-lg p-6 text-center">
            <h3 className="text-white text-xl font-bold">{form.headline || 'Headline'}</h3>
            <p className="text-gray-400 text-sm mt-1">{form.subheadline || 'Subheadline…'}</p>
            <div className="flex gap-2 justify-center mt-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-xs">{form.cta1Label || 'CTA 1'}</span>
              <span className="border border-gray-500 text-gray-300 px-3 py-1 rounded text-xs">{form.cta2Label || 'CTA 2'}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
