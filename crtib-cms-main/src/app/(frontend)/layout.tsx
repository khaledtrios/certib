import React from 'react'
import './styles.css'

export const metadata = {
  title: 'CRTI-B – Administration',
  description: 'Centre de Ressources des Technologies et de l\'Innovation pour le Bâtiment',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
