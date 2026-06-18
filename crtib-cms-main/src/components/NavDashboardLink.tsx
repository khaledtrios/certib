'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavDashboardLink() {
  const pathname = usePathname()
  const isActive = pathname === '/admin'

  return (
    <div style={{ padding: '8px 8px 4px' }}>
      <Link
        href="/admin"
        className={`nav__link${isActive ? ' nav__link--active' : ''}`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: '8px', flexShrink: 0, opacity: 0.75 }}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Tableau de bord
      </Link>
    </div>
  )
}

export default NavDashboardLink
