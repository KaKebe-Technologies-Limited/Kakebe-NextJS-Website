'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import PageHeader from '@/components/admin/PageHeader'
import SaveButton from '@/components/admin/SaveButton'

const field = (label: string, el: React.ReactNode) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    {el}
  </div>
)

const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm
               focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
  />
)

const textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    rows={3}
    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm
               focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
  />
)

const section = (title: string, children: React.ReactNode) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
    <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide text-gray-400">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
)

export default function SettingsPage() {
  const [form, setForm] = useState({ name: '', tagline: '', description: '', email: '', phone: '', address: '', twitter: '', linkedin: '', github: '', formspreeId: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(d => { if (d) setForm(d); setLoading(false) })
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true)
    try {
      const res = await fetch('/api/admin/settings', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('Settings saved!')
    } catch { toast.error('Failed to save') }
    finally { setSaving(false) }
  }

  if (loading) return <p className="text-gray-400 text-sm">Loading…</p>

  return (
    <form onSubmit={handleSave}>
      <PageHeader title="Site Settings" description="Manage your site identity and contact info" action={<SaveButton loading={saving} />} />
      <div className="space-y-6">
        {section('Identity', <>
          {field('Site Name', input({ value: form.name, onChange: set('name'), placeholder: 'Kakebe Technologies' }))}
          {field('Tagline', input({ value: form.tagline, onChange: set('tagline'), placeholder: 'Building the Next Gen…' }))}
          {field('Description', textarea({ value: form.description, onChange: set('description'), placeholder: 'Short site description…' }))}
        </>)}
        {section('Contact Info', <>
          {field('Email', input({ type: 'email', value: form.email, onChange: set('email') }))}
          {field('Phone', input({ value: form.phone, onChange: set('phone') }))}
          {field('Address', input({ value: form.address, onChange: set('address') }))}
        </>)}
        {section('Social Links', <>
          {field('Twitter URL', input({ value: form.twitter, onChange: set('twitter'), placeholder: 'https://twitter.com/…' }))}
          {field('LinkedIn URL', input({ value: form.linkedin, onChange: set('linkedin'), placeholder: 'https://linkedin.com/company/…' }))}
          {field('GitHub URL', input({ value: form.github, onChange: set('github'), placeholder: 'https://github.com/…' }))}
        </>)}
        {section('Forms', <>
          {field('Formspree ID', input({ value: form.formspreeId, onChange: set('formspreeId'), placeholder: 'xkorrnno' }))}
          <p className="text-gray-500 text-xs">Contact form submissions are sent via Formspree. Get an ID at formspree.io</p>
        </>)}
      </div>
    </form>
  )
}
