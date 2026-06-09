import React from 'react'

export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="34" height="34" rx="7" fill="#2c8c5b" />
        <text
          x="17"
          y="23"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          CR
        </text>
      </svg>
      <div style={{ lineHeight: 1.15 }}>
        <div
          style={{
            fontSize: '15px',
            fontWeight: '800',
            color: 'var(--theme-text)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          CRTIB
        </div>
        <div
          style={{
            fontSize: '9px',
            color: '#2c8c5b',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Gestão de Conteúdo
        </div>
      </div>
    </div>
  )
}

export default Logo
