'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavDashboardLink() {
  const pathname = usePathname()

  const items = [
    {
      href: '/admin',
      label: 'Tableau de bord',
      active: pathname === '/admin',
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      href: '/admin/page-order',
      label: 'Ordre des pages',
      active: pathname === '/admin/page-order',
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
          <path d="m16 2 4 4-4 4" />
          <path d="m8 22-4-4 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <div style={{ padding: '8px 8px 4px', display: 'flex', gap: '4px' }}>
      {items.map(({ href, label, active, icon }) => (
        <Link
          key={href}
          href={href}
          title={label}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            padding: '7px 6px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '11px',
            fontWeight: active ? '700' : '500',
            color: active ? 'var(--crtib-primary, #08AA86)' : '#374151',
            background: active ? 'var(--crtib-primary-light, rgba(8,170,134,0.09))' : 'transparent',
            border: active ? '1px solid rgba(8,170,134,0.2)' : '1px solid #e5e7eb',
            transition: 'background 0.12s, color 0.12s, border-color 0.12s',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            if (!active) {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--crtib-primary-light, rgba(8,170,134,0.09))'
              el.style.color = 'var(--crtib-primary-dark, #068a6c)'
              el.style.borderColor = 'rgba(8,170,134,0.25)'
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = '#374151'
              el.style.borderColor = '#e5e7eb'
            }
          }}
        >
          <span style={{ opacity: active ? 1 : 0.65, flexShrink: 0 }}>{icon}</span>
          <span style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default NavDashboardLink
