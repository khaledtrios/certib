import React from 'react'

export function BeforeLogin() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '24px 0 4px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '10px',
        }}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="9" fill="#2c8c5b" />
          <text
            x="22"
            y="30"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.5"
          >
            CR
          </text>
        </svg>
        <div style={{ textAlign: 'left' }}>
          <div
            style={{
              fontSize: '22px',
              fontWeight: '800',
              letterSpacing: '0.06em',
              color: 'var(--theme-text)',
              textTransform: 'uppercase',
            }}
          >
            CRTIB
          </div>
          <div
            style={{
              fontSize: '10px',
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
      <p
        style={{
          fontSize: '13px',
          color: 'var(--theme-text)',
          opacity: 0.5,
          margin: 0,
        }}
      >
        Painel de administração do site CRTIB
      </p>
    </div>
  )
}

export default BeforeLogin
