'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'

interface Value { id?: number; title: string; description: string; icon: string; order: number }

export default function ValuesPage() {
  const [values, setValues] = useState<Value[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/values').then(r => r.json()).then(d => { setValues(d); setLoading(false) })
  }, [])

  function update(i: number, key: keyof Value, val: string) {
    setValues(prev => prev.map((v, idx) => idx === i ? { ...v, [key]: val } : v))
  }
  function add() { setValues(prev => [...prev, { title: 'New Value', description: '', icon: '✦', order: prev.length }]) }
  function remove(i: number) { setValues(prev => prev.filter((_, idx) => idx !== i)) }

  async function handleSave() {
    setSaving(true)
    try {
      await fetch('/api/admin/values', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values.map((v, i) => ({ ...v, order: i }))) })
      toast.success('Values saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <div>
      <PageHeader title="Core Values" description="Values displayed on your homepage and about page" action={
        <div className="flex gap-2">
          <button onClick={add} type="button" className="border border-gray-600 text-gray-300 hover:text-white rounded-lg px-4 py-2 text-sm">+ Add</button>
          <button onClick={handleSave} disabled={saving} type="button" className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg px-5 py-2 text-sm">{saving ? 'Saving…' : 'Save'}</button>
        </div>
      } />
      <div className="space-y-3">
        {values.map((v, i) => (
          <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium text-sm">{v.icon} {v.title}</span>
              <button type="button" onClick={() => remove(i)} className="text-gray-500 hover:text-red-400 text-xs">Remove</button>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1">
                <label className="block text-xs text-gray-400 mb-1">Icon</label>
                <input value={v.icon} onChange={e => update(i, 'icon', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 text-center" />
              </div>
              <div className="col-span-3">
                <label className="block text-xs text-gray-400 mb-1">Title</label>
                <input value={v.title} onChange={e => update(i, 'title', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
              </div>
              <div className="col-span-8">
                <label className="block text-xs text-gray-400 mb-1">Description</label>
                <input value={v.description} onChange={e => update(i, 'description', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
