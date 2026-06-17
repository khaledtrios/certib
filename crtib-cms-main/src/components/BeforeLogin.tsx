'use client'
import React from 'react'

export function BeforeLogin() {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '24px' }}>

      {/* Séparateur vert CRTIB */}
      <div style={{
        width: '44px',
        height: '3px',
        background: 'linear-gradient(90deg, #08AA86 0%, #31af91 100%)',
        borderRadius: '2px',
        margin: '0 auto 16px',
      }} />

      {/* Titre */}
      <p style={{
        fontSize: '19px',
        fontWeight: '700',
        color: '#1f2937',
        margin: '0 0 5px',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
      }}>
        Bienvenue
      </p>

      {/* Sous-titre */}
      <p style={{
        fontSize: '11px',
        color: '#9ca3af',
        margin: 0,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: '500',
      }}>
        Panneau d'administration · CRTI-B
      </p>
    </div>
  )
}

export default BeforeLogin
