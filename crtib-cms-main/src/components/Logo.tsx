import React from 'react'

export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '6px 0' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="CRTI-B"
        style={{ height: '36px', width: 'auto' }}
      />
    </div>
  )
}

export default Logo
