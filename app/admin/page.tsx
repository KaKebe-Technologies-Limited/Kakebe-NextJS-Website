import { prisma } from '@/lib/db'
import PageHeader from '@/components/admin/PageHeader'
import Link from 'next/link'

async function getStats() {
  const [team, programs, projects, innovators, logs] = await Promise.all([
    prisma.teamMember.count(),
    prisma.program.count(),
    prisma.project.count(),
    prisma.innovator.count(),
    prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ])
  return { team, programs, projects, innovators, logs }
}

const statCards = [
  { label: 'Team Members', href: '/admin/team', color: 'bg-blue-600' },
  { label: 'Programs', href: '/admin/programs', color: 'bg-purple-600' },
  { label: 'Projects', href: '/admin/projects', color: 'bg-green-600' },
  { label: 'Innovators', href: '/admin/innovators', color: 'bg-orange-600' },
]

const quickActions = [
  { label: 'Add Team Member', href: '/admin/team/new' },
  { label: 'Add Project', href: '/admin/projects/new' },
  { label: 'Edit Site Settings', href: '/admin/settings' },
  { label: 'Manage Hero', href: '/admin/hero' },
]

export default async function AdminDashboard() {
  const stats = await getStats()
  const statValues = [stats.team, stats.programs, stats.projects, stats.innovators]

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back. Here's what's on your site."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card, i) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <p className="text-gray-400 text-sm mb-1">{card.label}</p>
            <p className="text-white text-3xl font-bold">{statValues[i]}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
          <h2 className="text-white font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm text-white"
              >
                {action.label}
                <span className="text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
          <h2 className="text-white font-semibold mb-4">Recent Activity</h2>
          {stats.logs.length === 0 ? (
            <p className="text-gray-500 text-sm">No activity yet. Start editing content!</p>
          ) : (
            <ul className="space-y-2">
              {stats.logs.map((log) => (
                <li key={log.id} className="text-sm">
                  <span className="text-white">{log.action}</span>
                  <span className="text-gray-500"> · {log.section}</span>
                  <p className="text-gray-600 text-xs">
                    {new Date(log.createdAt).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
