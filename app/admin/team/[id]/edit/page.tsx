'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import TeamForm from '../../TeamForm'

export default function EditTeamMemberPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/api/admin/team/${id}`).then(r => r.json()).then(setData)
  }, [id])

  if (!data) return <p className="text-gray-400 text-sm">Loading…</p>
  return <TeamForm initial={data} />
}
