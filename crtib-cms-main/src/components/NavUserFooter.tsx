'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@payloadcms/ui'

export function NavUserFooter() {
  const { user, logOut } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (!user) return null

  const email = (user as any).email || ''
  const initials = email.slice(0, 2).toUpperCase() || 'U'

  return (
    <div
      ref={ref}
      style={{
        padding: '0 8px 16px',
        borderTop: '1px solid #e5e7eb',
        position: 'relative',
        background: 'var(--crtib-sidebar-bg, #f8fafb)',
      }}
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 10px',
          borderRadius: '8px',
          background: open ? 'rgba(8, 170, 134, 0.09)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #08AA86 0%, #31af91 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '11px',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '0.04em',
            boxShadow: '0 1px 4px rgba(8,170,134,0.35)',
          }}
        >
          {initials}
        </div>

        {/* User info */}
        <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#1f2937',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {email}
          </p>
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>Administrateur</p>
        </div>

        {/* Chevron */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2.5"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Dropdown (pops upward) */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% - 4px)',
            left: '8px',
            right: '8px',
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            zIndex: 100,
          }}
        >
          {/* Header info */}
          <div
            style={{
              padding: '12px 14px 10px',
              borderBottom: '1px solid #f3f4f6',
              background: 'linear-gradient(135deg, rgba(8,170,134,0.04) 0%, transparent 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #08AA86 0%, #31af91 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#fff',
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
                <p style={{ fontSize: '11px', color: '#6b7280', margin: '1px 0 0', fontWeight: '500' }}>
                  Administrateur · CRTI-B
                </p>
              </div>
            </div>
          </div>

          {/* Logout button */}
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
              padding: '11px 14px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#ef4444',
              fontWeight: '500',
              transition: 'background 0.12s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#fef2f2')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
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

export default NavUserFooter
