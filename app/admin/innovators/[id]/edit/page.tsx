'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import InnovatorForm from '../../InnovatorForm'

export default function EditInnovatorPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/api/admin/innovators/${id}`).then(r => r.json()).then(setData)
  }, [id])

  if (!data) return <p className="text-gray-400 text-sm">Loading…</p>
  return <InnovatorForm initial={data} />
}
