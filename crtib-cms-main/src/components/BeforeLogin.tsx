import React from 'react'

export function BeforeLogin() {
  return (
    <div style={{ textAlign: 'center', padding: '28px 0 8px' }}>
      {/* Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="CRTI-B" style={{ height: '48px', width: 'auto' }} />
      </div>

      {/* Séparateur */}
      <div style={{
        width: '40px',
        height: '3px',
        background: 'linear-gradient(90deg, #08AA86 0%, #31af91 100%)',
        borderRadius: '2px',
        margin: '0 auto 14px',
      }} />

      <p style={{
        fontSize: '13px',
        color: '#6b7280',
        margin: 0,
        letterSpacing: '0.02em',
      }}>
        Panneau d'administration CRTI-B
      </p>
    </div>
  )
}

export default BeforeLogin
