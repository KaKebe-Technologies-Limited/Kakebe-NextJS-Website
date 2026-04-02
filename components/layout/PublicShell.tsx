'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import type { SiteConfig } from '@/lib/types'

interface PublicShellProps {
  children: React.ReactNode
  siteName: string
  siteConfig: SiteConfig
}

export default function PublicShell({ children, siteName, siteConfig }: PublicShellProps) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  return (
    <>
      {!isAdmin && <Header siteName={siteName} />}
      {children}
      {!isAdmin && <Footer siteConfig={siteConfig} />}
    </>
  )
}
