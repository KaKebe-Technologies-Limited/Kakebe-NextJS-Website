'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { clsx } from 'clsx'

const navSections = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: '⊞' },
      { label: 'Activity Log', href: '/admin/activity', icon: '◷' },
    ],
  },
  {
    label: 'Identity',
    items: [
      { label: 'Site Settings', href: '/admin/settings', icon: '⚙' },
      { label: 'Branding', href: '/admin/branding', icon: '◈' },
      { label: 'Theme', href: '/admin/theme', icon: '◉' },
      { label: 'SEO', href: '/admin/seo', icon: '◎' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { label: 'Hero Section', href: '/admin/hero', icon: '▣' },
      { label: 'Navigation', href: '/admin/navigation', icon: '☰' },
      { label: 'Footer', href: '/admin/footer', icon: '▤' },
      { label: 'About Page', href: '/admin/about', icon: '◻' },
    ],
  },
  {
    label: 'Content',
    items: [
      { label: 'Team Members', href: '/admin/team', icon: '◫' },
      { label: 'Programs', href: '/admin/programs', icon: '◪' },
      { label: 'Projects', href: '/admin/projects', icon: '◨' },
      { label: 'Innovators', href: '/admin/innovators', icon: '◧' },
      { label: 'Metrics', href: '/admin/metrics', icon: '◦' },
      { label: 'Values', href: '/admin/values', icon: '◇' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-60 shrink-0 bg-gray-950 border-r border-gray-800 flex flex-col h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Kakebe Admin</p>
            <p className="text-gray-500 text-xs">Content Manager</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-5">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider px-2 mb-1">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active =
                  item.href === '/admin'
                    ? pathname === '/admin'
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm transition-colors',
                        active
                          ? 'bg-red-600 text-white font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      )}
                    >
                      <span className="text-base leading-none w-4 text-center">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-800 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <span className="text-base leading-none w-4 text-center">↗</span>
          View Site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-colors"
        >
          <span className="text-base leading-none w-4 text-center">→</span>
          Sign out
        </button>
      </div>
    </aside>
  )
}
