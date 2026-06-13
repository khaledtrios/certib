import React from 'react'

export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '2px 0', overflow: 'visible' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="CRTI-B"
        style={{ height: '32px', width: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Logo
