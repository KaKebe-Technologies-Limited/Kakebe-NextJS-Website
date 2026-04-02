'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface NavItem { id: number; label: string; href: string; order: number }

export default function NavigationPage() {
  const [items, setItems] = useState<NavItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/navigation').then(r => r.json()).then(d => { setItems(d); setLoading(false) })
  }, [])

  function update(id: number, key: 'label' | 'href', value: string) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, [key]: value } : i))
  }

  async function handleDelete(id: number) {
    if (!confirm('Remove this nav item?')) return
    await fetch(`/api/admin/navigation/${id}`, { method: 'DELETE' })
    setItems(prev => prev.filter(i => i.id !== id))
    toast.success('Removed')
  }

  async function handleAdd() {
    const res = await fetch('/api/admin/navigation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ label: 'New Page', href: '/' }) })
    const newItem = await res.json()
    setItems(prev => [...prev, { ...newItem, categories: undefined }])
    toast.success('Added')
  }

  async function handleSave() {
    setSaving(true)
    try {
      await fetch('/api/admin/navigation', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(items.map((i, idx) => ({ ...i, order: idx }))) })
      toast.success('Navigation saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader
        title="Navigation"
        description="Manage header navigation links"
        action={
          <div className="flex gap-2">
            <button onClick={handleAdd} type="button" className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-lg px-4 py-2 text-sm transition-colors">
              + Add link
            </button>
            <button onClick={handleSave} disabled={saving} type="button" className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg px-5 py-2 text-sm transition-colors">
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        }
      />
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-5 py-2 border-b border-gray-700 text-xs font-medium text-gray-400 uppercase tracking-wide">
          <span className="col-span-1">#</span>
          <span className="col-span-4">Label</span>
          <span className="col-span-5">Path</span>
          <span className="col-span-2"></span>
        </div>
        {items.map((item, i) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 px-5 py-3 items-center border-b border-gray-700 last:border-0">
            <span className="col-span-1 text-gray-500 text-sm">{i + 1}</span>
            <div className="col-span-4">
              <input value={item.label} onChange={e => update(item.id, 'label', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
            </div>
            <div className="col-span-5">
              <input value={item.href} onChange={e => update(item.id, 'href', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
            </div>
            <div className="col-span-2 text-right">
              <button onClick={() => handleDelete(item.id)} type="button" className="text-gray-500 hover:text-red-400 text-sm transition-colors">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
