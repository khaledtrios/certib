'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@payloadcms/ui'

const GROUPS = [
  {
    label: { fr: 'Pages', en: 'Pages' },
    collections: [
      { slug: 'pages', label: { fr: 'Pages', en: 'Pages' }, description: { fr: 'Pages du site et menu', en: 'Site pages and menu' }, icon: '📄' },
    ],
  },
  {
    label: { fr: 'Actualités', en: 'News' },
    collections: [
      { slug: 'news', label: { fr: 'Actualités', en: 'News' }, description: { fr: 'Articles et communiqués', en: 'Articles and press releases' }, icon: '📰' },
    ],
  },
  {
    label: { fr: 'Multimédia', en: 'Multimedia' },
    collections: [
      { slug: 'media', label: { fr: 'Médias', en: 'Media' }, description: { fr: 'Images et documents', en: 'Images and documents' }, icon: '🖼️' },
      { slug: 'videos', label: { fr: 'Vidéos', en: 'Videos' }, description: { fr: 'Gestion des vidéos', en: 'Video management' }, icon: '🎬' },
    ],
  },
  {
    label: { fr: 'Institutionnel', en: 'Institutional' },
    collections: [
      { slug: 'partners', label: { fr: 'Partenaires', en: 'Partners' }, description: { fr: 'Organisations partenaires', en: 'Partner organizations' }, icon: '🤝' },
      {
        slug: 'activity-reports',
        label: { fr: 'Rapports', en: 'Reports' },
        description: { fr: "Rapports d'activité", en: 'Activity reports' },
        icon: '📊',
      },
      { slug: 'timeline-items', label: { fr: 'Chronologie', en: 'Timeline' }, description: { fr: 'Chronologie historique', en: 'Historical timeline' }, icon: '🕐' },
    ],
  },
  {
    label: { fr: 'Administration', en: 'Administration' },
    collections: [
      { slug: 'users', label: { fr: 'Utilisateurs', en: 'Users' }, description: { fr: 'Gestion des utilisateurs', en: 'User management' }, icon: '👤' },
    ],
  },
]

export default function Dashboard() {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'fr'

  const t = (obj: any) => obj[lang] || obj['fr'] || ''

  return (
    <div style={{ padding: '36px 32px', maxWidth: '960px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'var(--theme-text)',
            margin: '0 0 6px 0',
          }}
        >
          {t({ fr: 'Panneau de Gestion', en: 'Management Panel' })}
        </h1>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--theme-text)',
            opacity: 0.5,
            margin: 0,
          }}
        >
          {t({
            fr: 'Bienvenue sur le CMS CRTIB. Sélectionnez une zone pour gérer le contenu du site.',
            en: 'Welcome to the CRTIB CMS. Select an area to manage the website content.',
          })}
        </p>
      </div>

      {/* Groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {GROUPS.map(({ label, collections }) => (
          <div key={label.en}>
            {/* Group header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2c8c5b',
                }}
              >
                {t(label)}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'var(--theme-elevation-100, #e4e4e7)',
                }}
              />
            </div>

            {/* Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
                gap: '10px',
              }}
            >
              {collections.map(({ slug, label: colLabel, description, icon }) => (
                <Link key={slug} href={`/admin/collections/${slug}`} className="crtib-card">
                  <div style={{ fontSize: '22px', marginBottom: '8px', lineHeight: 1 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--theme-text)',
                      marginBottom: '3px',
                    }}
                  >
                    {t(colLabel)}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--theme-text)',
                      opacity: 0.5,
                    }}
                  >
                    {t(description)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
