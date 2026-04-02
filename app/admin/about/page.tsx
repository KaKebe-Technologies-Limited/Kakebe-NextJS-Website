'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

interface Milestone { year: number; title: string; description: string }

export default function AboutPage() {
  const [form, setForm] = useState({ story: '', mission: '', vision: '', milestones: [] as Milestone[] })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [tab, setTab] = useState<'text' | 'milestones'>('text')

  useEffect(() => {
    fetch('/api/admin/about').then(r => r.json()).then(d => { if (d) setForm(d); setLoading(false) })
  }, [])

  function addMilestone() { setForm(f => ({ ...f, milestones: [...f.milestones, { year: new Date().getFullYear(), title: '', description: '' }] })) }
  function updateMs(i: number, key: keyof Milestone, value: string | number) { setForm(f => ({ ...f, milestones: f.milestones.map((m, idx) => idx === i ? { ...m, [key]: value } : m) })) }
  function removeMs(i: number) { setForm(f => ({ ...f, milestones: f.milestones.filter((_, idx) => idx !== i) })) }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const res = await fetch('/api/admin/about', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('About page saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  const ta = (value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void) => (
    <textarea value={value} onChange={onChange} rows={5}
      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
  )

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="About Page" description="Edit your story, mission, vision, and milestones" action={<SaveButton loading={saving} />} />
      <div className="flex gap-2 mb-6">
        {(['text', 'milestones'] as const).map(t => (
          <button key={t} type="button" onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-lg text-sm capitalize transition-colors ${tab === t ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
            {t === 'text' ? 'Story & Mission' : 'Milestones'}
          </button>
        ))}
      </div>

      {tab === 'text' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4">
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Our Story</label>{ta(form.story, e => setForm(f => ({ ...f, story: e.target.value })))}</div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Mission</label>{ta(form.mission, e => setForm(f => ({ ...f, mission: e.target.value })))}</div>
            <div><label className="block text-sm font-medium text-gray-300 mb-1">Vision</label>{ta(form.vision, e => setForm(f => ({ ...f, vision: e.target.value })))}</div>
          </div>
        </div>
      )}

      {tab === 'milestones' && (
        <div className="space-y-3">
          {form.milestones.map((ms, i) => (
            <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 text-sm">Milestone {i + 1}</span>
                <button type="button" onClick={() => removeMs(i)} className="text-gray-500 hover:text-red-400 text-xs">Remove</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Year</label>
                  <input type="number" value={ms.year} onChange={e => updateMs(i, 'year', Number(e.target.value))}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
                </div>
                <div className="col-span-3">
                  <label className="block text-xs text-gray-400 mb-1">Title</label>
                  <input value={ms.title} onChange={e => updateMs(i, 'title', e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
                </div>
                <div className="col-span-4">
                  <label className="block text-xs text-gray-400 mb-1">Description</label>
                  <input value={ms.description} onChange={e => updateMs(i, 'description', e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={addMilestone} className="text-red-400 hover:text-red-300 text-sm">+ Add milestone</button>
        </div>
      )}
    </form>
  )
}
