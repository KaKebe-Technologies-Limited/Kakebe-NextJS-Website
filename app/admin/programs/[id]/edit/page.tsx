'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import ProgramForm from '../../ProgramForm'

export default function EditProgramPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/api/admin/programs/${id}`).then(r => r.json()).then(setData)
  }, [id])

  if (!data) return <p className="text-gray-400 text-sm">Loading…</p>
  return <ProgramForm initial={data} />
}
