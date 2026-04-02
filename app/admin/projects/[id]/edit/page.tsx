'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import ProjectForm from '../../ProjectForm'

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/api/admin/projects/${id}`).then(r => r.json()).then(setData)
  }, [id])

  if (!data) return <p className="text-gray-400 text-sm">Loading…</p>
  return <ProjectForm initial={data} />
}
