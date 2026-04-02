'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

const PRESET_COLORS = [
  { name: 'Red (default)', hex: '#dc2626' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Purple', hex: '#7c3aed' },
  { name: 'Teal', hex: '#0d9488' },
  { name: 'Pink', hex: '#db2777' },
  { name: 'Amber', hex: '#d97706' },
]

export default function ThemePage() {
  const [color, setColor] = useState('#dc2626')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(d => { if (d?.primaryColor) setColor(d.primaryColor); setLoading(false) })
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      await fetch('/api/admin/settings', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ primaryColor: color }) })
      toast.success('Theme saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="Theme" description="Customize your site accent color" action={<SaveButton loading={saving} />} />
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Accent Color</h2>
          <div className="flex items-center gap-4 mb-6">
            <input type="color" value={color} onChange={e => setColor(e.target.value)}
              className="w-12 h-10 rounded cursor-pointer border border-gray-600 bg-transparent" />
            <input value={color} onChange={e => setColor(e.target.value)}
              className="w-28 bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 font-mono" />
          </div>
          <p className="text-gray-400 text-xs mb-3">Presets</p>
          <div className="flex flex-wrap gap-2">
            {PRESET_COLORS.map(p => (
              <button key={p.hex} type="button" onClick={() => setColor(p.hex)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-colors ${color === p.hex ? 'border-white text-white' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                <span className="w-3 h-3 rounded-full" style={{ background: p.hex }} />
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Preview</h2>
          <div className="space-y-3">
            <div className="flex gap-2">
              <button type="button" style={{ background: color }} className="text-white px-4 py-2 rounded-lg text-sm font-medium">Primary Button</button>
              <button type="button" style={{ borderColor: color, color }} className="border-2 px-4 py-2 rounded-lg text-sm font-medium bg-transparent">Outline Button</button>
            </div>
            <p className="text-sm" style={{ color }}>This is an accent-colored link</p>
            <div className="flex gap-2">
              <span style={{ background: color }} className="text-white px-2 py-0.5 rounded text-xs">Badge</span>
              <span style={{ background: color + '20', color }} className="px-2 py-0.5 rounded text-xs">Subtle badge</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
