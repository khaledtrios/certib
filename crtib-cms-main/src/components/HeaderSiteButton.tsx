'use client'
import React, { useEffect, useRef, useState } from 'react'

const LOCAL_URL = 'http://localhost:3001'
const PROD_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://crtib.org'

export function HeaderSiteButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const ExternalIcon = () => (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: 'auto', color: '#d1d5db', flexShrink: 0 }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 11px',
          height: '30px',
          background: open
            ? 'linear-gradient(135deg, #068a6c 0%, #07976f 100%)'
            : 'linear-gradient(135deg, #08AA86 0%, #31af91 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.01em',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
          boxShadow: '0 1px 4px rgba(8,170,134,0.3)',
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        Visitez le site
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '36px',
            right: 0,
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            boxShadow: '0 10px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            minWidth: '230px',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              padding: '9px 14px 8px',
              borderBottom: '1px solid #f3f4f6',
              background: 'linear-gradient(135deg, rgba(8,170,134,0.05) 0%, transparent 100%)',
            }}
          >
            <p
              style={{
                fontSize: '10px',
                fontWeight: '700',
                color: '#9ca3af',
                margin: 0,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
              }}
            >
              Environnements
            </p>
          </div>

          <a
            href={LOCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              textDecoration: 'none',
              color: '#374151',
              fontSize: '13px',
              fontWeight: '500',
              borderBottom: '1px solid #f9fafb',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'rgba(8,170,134,0.06)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'transparent')
            }
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                flexShrink: 0,
                boxShadow: '0 0 0 2px rgba(34,197,94,0.2)',
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: '600', color: '#111827', fontSize: '13px' }}>
                Local
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '11px',
                  color: '#9ca3af',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {LOCAL_URL}
              </p>
            </div>
            <ExternalIcon />
          </a>

          <a
            href={PROD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px 12px',
              textDecoration: 'none',
              color: '#374151',
              fontSize: '13px',
              fontWeight: '500',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'rgba(8,170,134,0.06)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'transparent')
            }
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#08AA86',
                display: 'inline-block',
                flexShrink: 0,
                boxShadow: '0 0 0 2px rgba(8,170,134,0.2)',
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: '600', color: '#111827', fontSize: '13px' }}>
                Production
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '11px',
                  color: '#9ca3af',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {PROD_URL}
              </p>
            </div>
            <ExternalIcon />
          </a>
        </div>
      )}
    </div>
  )
}

export default HeaderSiteButton
