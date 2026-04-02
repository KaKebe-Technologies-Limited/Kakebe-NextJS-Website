import Sidebar from '@/components/admin/Sidebar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Kakebe Admin',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#1f2937', color: '#fff', border: '1px solid #374151' },
          success: { iconTheme: { primary: '#dc2626', secondary: '#fff' } },
        }}
      />
    </div>
  )
}
