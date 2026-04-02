'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Metric { id?: number; label: string; value: string; suffix: string; prefix: string; order: number }

export default function MetricsPage() {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/metrics').then(r => r.json()).then(d => { setMetrics(d); setLoading(false) })
  }, [])

  function update(i: number, key: keyof Metric, value: string) {
    setMetrics(prev => prev.map((m, idx) => idx === i ? { ...m, [key]: value } : m))
  }
  function add() { setMetrics(prev => [...prev, { label: 'New Stat', value: '0', suffix: '', prefix: '', order: prev.length }]) }
  function remove(i: number) { setMetrics(prev => prev.filter((_, idx) => idx !== i)) }

  async function handleSave() {
    setSaving(true)
    try {
      await fetch('/api/admin/metrics', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(metrics.map((m, i) => ({ ...m, order: i }))) })
      toast.success('Metrics saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Impact Metrics" description="The stats shown on the homepage" action={
        <div className="flex gap-2">
          <button onClick={add} type="button" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">+ Add</button>
          <button onClick={handleSave} disabled={saving} type="button" className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg px-5 py-2 text-sm">{saving ? 'Saving…' : 'Save'}</button>
        </div>
      } />
      <div className="space-y-3">
        {metrics.map((m, i) => (
          <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium text-sm">{m.prefix}{m.value}{m.suffix} — {m.label}</span>
              <button type="button" onClick={() => remove(i)} className="text-gray-500 hover:text-red-400 text-xs">Remove</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {(['label', 'value', 'prefix', 'suffix'] as const).map(key => (
                <div key={key}>
                  <label className="block text-xs text-gray-400 mb-1 capitalize">{key}</label>
                  <input value={m[key]} onChange={e => update(i, key, e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
