'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

interface Link { label: string; href: string }

export default function FooterPage() {
  const [form, setForm] = useState({ brandText: '', copyrightName: '', exploreLinks: [] as Link[], programLinks: [] as Link[] })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/footer').then(r => r.json()).then(d => {
      if (d) setForm({ ...d, exploreLinks: JSON.parse(d.exploreLinks || '[]'), programLinks: JSON.parse(d.programLinks || '[]') })
      setLoading(false)
    })
  }, [])

  function updateLink(key: 'exploreLinks' | 'programLinks', i: number, field: 'label' | 'href', value: string) {
    setForm(f => ({ ...f, [key]: f[key].map((l, idx) => idx === i ? { ...l, [field]: value } : l) }))
  }
  function addLink(key: 'exploreLinks' | 'programLinks') {
    setForm(f => ({ ...f, [key]: [...f[key], { label: 'New link', href: '/' }] }))
  }
  function removeLink(key: 'exploreLinks' | 'programLinks', i: number) {
    setForm(f => ({ ...f, [key]: f[key].filter((_, idx) => idx !== i) }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const res = await fetch('/api/admin/footer', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('Footer saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  const inp = (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder?: string) => (
    <input value={value} onChange={onChange} placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-gray-500" />
  )

  const LinkList = ({ keyName }: { keyName: 'exploreLinks' | 'programLinks' }) => (
    <div className="space-y-2">
      {form[keyName].map((link, i) => (
        <div key={i} className="flex gap-2 items-center">
          {inp(link.label, e => updateLink(keyName, i, 'label', e.target.value), 'Label')}
          {inp(link.href, e => updateLink(keyName, i, 'href', e.target.value), '/path')}
          <button type="button" onClick={() => removeLink(keyName, i)} className="text-gray-500 hover:text-red-400 text-xs shrink-0">✕</button>
        </div>
      ))}
      <button type="button" onClick={() => addLink(keyName)} className="text-red-400 hover:text-red-300 text-xs">+ Add link</button>
    </div>
  )

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="Footer" description="Edit footer content and links" action={<SaveButton loading={saving} />} />
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Brand Description</label>
            <textarea value={form.brandText} onChange={e => setForm(f => ({ ...f, brandText: e.target.value }))} rows={2}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Copyright Name</label>
            {inp(form.copyrightName, e => setForm(f => ({ ...f, copyrightName: e.target.value })), 'Kakebe Technologies')}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h2 className="text-white font-medium mb-3">Explore Links</h2>
            <LinkList keyName="exploreLinks" />
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h2 className="text-white font-medium mb-3">Program Links</h2>
            <LinkList keyName="programLinks" />
          </div>
        </div>
      </div>
    </form>
  )
}
