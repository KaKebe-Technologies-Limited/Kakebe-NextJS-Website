import { prisma } from '@/lib/db'
import PageHeader from '@/components/admin/PageHeader'

export default async function ActivityPage() {
  const logs = await prisma.activityLog.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })

  return (
    <div>
      <PageHeader title="Activity Log" description="Recent admin actions" />
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm p-6">No activity yet.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Time</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Section</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Action</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-750">
                  <td className="px-5 py-3 text-xs text-gray-500 whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">{log.section}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-white">{log.action}</td>
                  <td className="px-5 py-3 text-sm text-gray-400">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
