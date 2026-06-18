'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@payloadcms/ui'

interface StatItem {
  slug: string
  label: { fr: string; en: string }
  icon: string
  accent: string
}

const STATS: StatItem[] = [
  { slug: 'pages', label: { fr: 'Pages', en: 'Pages' }, icon: '📄', accent: '#6366f1' },
  { slug: 'news', label: { fr: 'Actualités', en: 'News' }, icon: '📰', accent: '#f59e0b' },
  { slug: 'formations', label: { fr: 'Formations', en: 'Trainings' }, icon: '🎓', accent: '#08AA86' },
  { slug: 'media', label: { fr: 'Médias', en: 'Media' }, icon: '🖼️', accent: '#8b5cf6' },
  { slug: 'partners', label: { fr: 'Partenaires', en: 'Partners' }, icon: '🤝', accent: '#3b82f6' },
  { slug: 'videos', label: { fr: 'Vidéos', en: 'Videos' }, icon: '🎬', accent: '#ef4444' },
  {
    slug: 'activity-reports',
    label: { fr: 'Rapports', en: 'Reports' },
    icon: '📊',
    accent: '#10b981',
  },
  {
    slug: 'timeline-items',
    label: { fr: 'Chronologie', en: 'Timeline' },
    icon: '🕐',
    accent: '#f97316',
  },
  {
    slug: 'newsletter-subscribers',
    label: { fr: 'Abonnés', en: 'Subscribers' },
    icon: '📧',
    accent: '#0ea5e9',
  },
  { slug: 'users', label: { fr: 'Utilisateurs', en: 'Users' }, icon: '👤', accent: '#64748b' },
]

const GROUPS = [
  {
    label: { fr: 'Pages', en: 'Pages' },
    collections: [
      {
        slug: 'pages',
        label: { fr: 'Pages', en: 'Pages' },
        description: { fr: 'Pages du site et menu', en: 'Site pages and menu' },
        icon: '📄',
      },
    ],
  },
  {
    label: { fr: 'Actualités', en: 'News' },
    collections: [
      {
        slug: 'news',
        label: { fr: 'Actualités', en: 'News' },
        description: { fr: 'Articles et communiqués', en: 'Articles and press releases' },
        icon: '📰',
      },
    ],
  },
  {
    label: { fr: 'Multimédia', en: 'Multimedia' },
    collections: [
      {
        slug: 'media',
        label: { fr: 'Médias', en: 'Media' },
        description: { fr: 'Images et documents', en: 'Images and documents' },
        icon: '🖼️',
      },
      {
        slug: 'videos',
        label: { fr: 'Vidéos', en: 'Videos' },
        description: { fr: 'Gestion des vidéos', en: 'Video management' },
        icon: '🎬',
      },
    ],
  },
  {
    label: { fr: 'Institutionnel', en: 'Institutional' },
    collections: [
      {
        slug: 'partners',
        label: { fr: 'Partenaires', en: 'Partners' },
        description: { fr: 'Organisations partenaires', en: 'Partner organizations' },
        icon: '🤝',
      },
      {
        slug: 'activity-reports',
        label: { fr: 'Rapports', en: 'Reports' },
        description: { fr: "Rapports d'activité", en: 'Activity reports' },
        icon: '📊',
      },
      {
        slug: 'timeline-items',
        label: { fr: 'Chronologie', en: 'Timeline' },
        description: { fr: 'Chronologie historique', en: 'Historical timeline' },
        icon: '🕐',
      },
    ],
  },
  {
    label: { fr: 'Formations', en: 'Trainings' },
    collections: [
      {
        slug: 'formations',
        label: { fr: 'Formations', en: 'Trainings' },
        description: {
          fr: 'Gérer les formations et inscriptions',
          en: 'Manage trainings and registrations',
        },
        icon: '🎓',
      },
    ],
  },
  {
    label: { fr: 'Administration', en: 'Administration' },
    collections: [
      {
        slug: 'users',
        label: { fr: 'Utilisateurs', en: 'Users' },
        description: { fr: 'Gestion des utilisateurs', en: 'User management' },
        icon: '👤',
      },
      {
        slug: 'newsletter-subscribers',
        label: { fr: 'Abonnés newsletter', en: 'Newsletter subscribers' },
        description: { fr: 'Abonnés à la newsletter', en: 'Newsletter subscribers' },
        icon: '📧',
      },
    ],
  },
]

export default function Dashboard() {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  const t = (obj: any) => obj[lang] || obj['fr'] || ''

  const [counts, setCounts] = useState<Record<string, number | null>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCounts = async () => {
      const results = await Promise.allSettled(
        STATS.map(({ slug }) =>
          fetch(`/api/${slug}?limit=0&depth=0`)
            .then((r) => r.json())
            .then((data) => ({ slug, count: typeof data.totalDocs === 'number' ? data.totalDocs : 0 })),
        ),
      )
      const map: Record<string, number | null> = {}
      results.forEach((result, i) => {
        if (result.status === 'fulfilled') {
          map[result.value.slug] = result.value.count
        } else {
          map[STATS[i].slug] = null
        }
      })
      setCounts(map)
      setLoading(false)
    }
    fetchCounts()
  }, [])

  const SectionHeader = ({ label }: { label: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
      <span
        style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#2c8c5b',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--theme-elevation-100, #e4e4e7)' }} />
    </div>
  )

  return (
    <div style={{ padding: '36px 32px', maxWidth: '960px' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
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
        <p style={{ fontSize: '13px', color: 'var(--theme-text)', opacity: 0.5, margin: 0 }}>
          {t({
            fr: 'Bienvenue sur le CMS CRTIB. Sélectionnez une zone pour gérer le contenu du site.',
            en: 'Welcome to the CRTIB CMS. Select an area to manage the website content.',
          })}
        </p>
      </div>

      {/* Stats grid */}
      <div style={{ marginBottom: '36px' }}>
        <SectionHeader label={t({ fr: "Vue d'ensemble", en: 'Overview' })} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '10px',
          }}
        >
          {STATS.map(({ slug, label, icon, accent }) => {
            const count = counts[slug]
            return (
              <Link
                key={slug}
                href={`/admin/collections/${slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: '14px 16px',
                    background: '#fff',
                    border: '1px solid var(--theme-elevation-100, #e5e7eb)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = accent
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 3px ${accent}1a`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'var(--theme-elevation-100, #e5e7eb)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: '18px', marginBottom: '8px', lineHeight: 1 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: loading ? '#d1d5db' : count === null ? '#ef4444' : accent,
                      marginBottom: '2px',
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {loading ? '–' : count === null ? '!' : count}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#6b7280' }}>
                    {t(label)}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Collection groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {GROUPS.map(({ label, collections }) => (
          <div key={label.en}>
            <SectionHeader label={t(label)} />
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
                    style={{ fontSize: '12px', color: 'var(--theme-text)', opacity: 0.5 }}
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
