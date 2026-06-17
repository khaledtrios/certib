'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@payloadcms/ui'

export function HeaderAvatarDropdown() {
  const { user, logOut } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  if (!user) return null

  const email = (user as any).email || ''
  const initials = email.slice(0, 2).toUpperCase() || 'U'

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen((v) => !v)
  }

  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      style={{ position: 'relative' }}
    >
      {/* Avatar trigger */}
      <button
        onClick={toggle}
        aria-label="Compte"
        title={email}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, #068a6c 0%, #08AA86 100%)'
            : 'linear-gradient(135deg, #08AA86 0%, #31af91 100%)',
          border: '2px solid transparent',
          outline: open ? '2px solid rgba(8,170,134,0.35)' : 'none',
          outlineOffset: '2px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: '700',
          color: '#fff',
          letterSpacing: '0.05em',
          boxShadow: '0 1px 4px rgba(8,170,134,0.4)',
          transition: 'box-shadow 0.15s, outline 0.15s',
          flexShrink: 0,
        }}
      >
        {initials}
      </button>

      {/* Dropdown card */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: '54px',
            right: '12px',
            width: '248px',
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            zIndex: 9999,
          }}
        >
          {/* CRTIB logo + user info */}
          <div
            style={{
              padding: '14px 16px 12px',
              borderBottom: '1px solid #f3f4f6',
              background:
                'linear-gradient(135deg, rgba(8,170,134,0.06) 0%, rgba(49,175,145,0.02) 100%)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="CRTI-B"
              style={{ height: '20px', width: 'auto', display: 'block', marginBottom: '12px', opacity: 0.85 }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #08AA86 0%, #31af91 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#fff',
                  boxShadow: '0 2px 8px rgba(8,170,134,0.4)',
                }}
              >
                {initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {email}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    margin: '2px 0 0',
                    fontWeight: '500',
                  }}
                >
                  Administrateur · CRTI-B
                </p>
              </div>
            </div>
          </div>

          {/* Se déconnecter */}
          <button
            onClick={() => {
              setOpen(false)
              logOut()
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '12px 16px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#ef4444',
              fontWeight: '500',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#fef2f2')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
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
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  )
}

export default HeaderAvatarDropdown
