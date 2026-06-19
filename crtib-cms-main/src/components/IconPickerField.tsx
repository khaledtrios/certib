'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@payloadcms/ui'

// ── Inline SVG paths extracted from lucide-react v0.577 ──────────────────────
const ICONS: { name: string; label: string; svg: string }[] = [
  { name: 'Building2', label: 'Bâtiment', svg: `<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>` },
  { name: 'HardHat', label: 'Casque chantier', svg: `<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>` },
  { name: 'Hammer', label: 'Marteau', svg: `<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>` },
  { name: 'Ruler', label: 'Règle', svg: `<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>` },
  { name: 'Wrench', label: 'Clé', svg: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>` },
  { name: 'Factory', label: 'Usine', svg: `<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>` },
  { name: 'Scale', label: 'Balance / Droit', svg: `<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>` },
  { name: 'FileText', label: 'Document texte', svg: `<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>` },
  { name: 'Clipboard', label: 'Formulaire', svg: `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>` },
  { name: 'BookOpen', label: 'Guide / Livre', svg: `<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>` },
  { name: 'Award', label: 'Certification', svg: `<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>` },
  { name: 'GraduationCap', label: 'Formation', svg: `<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>` },
  { name: 'Briefcase', label: 'Professionnel', svg: `<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>` },
  { name: 'Cpu', label: 'Numérique / BIM', svg: `<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>` },
  { name: 'Monitor', label: 'Ecran / Cours', svg: `<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>` },
  { name: 'Globe', label: 'International', svg: `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>` },
  { name: 'Database', label: 'Données', svg: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>` },
  { name: 'Server', label: 'Serveur', svg: `<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>` },
  { name: 'Sprout', label: 'Durable / Vert', svg: `<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"/><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"/><path d="M5 21h14"/>` },
  { name: 'Leaf', label: 'Ecologie', svg: `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>` },
  { name: 'Zap', label: 'Energie', svg: `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>` },
  { name: 'Wind', label: 'Ventilation', svg: `<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>` },
  { name: 'Thermometer', label: 'Température', svg: `<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>` },
  { name: 'Droplets', label: 'Eau', svg: `<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>` },
  { name: 'Sun', label: 'Solaire', svg: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>` },
  { name: 'Users', label: 'Equipe / Partenaires', svg: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>` },
  { name: 'Handshake', label: 'Partenariat', svg: `<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>` },
  { name: 'BarChart3', label: 'Statistiques', svg: `<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>` },
  { name: 'PieChart', label: 'Graphique', svg: `<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>` },
  { name: 'TrendingUp', label: 'Performance', svg: `<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>` },
  { name: 'Activity', label: 'Activité', svg: `<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>` },
  { name: 'Search', label: 'Recherche', svg: `<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>` },
  { name: 'MapPin', label: 'Localisation', svg: `<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>` },
  { name: 'Calendar', label: 'Calendrier', svg: `<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>` },
  { name: 'Phone', label: 'Téléphone', svg: `<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>` },
  { name: 'Mail', label: 'Email', svg: `<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>` },
  { name: 'Home', label: 'Accueil', svg: `<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>` },
  { name: 'Download', label: 'Téléchargement', svg: `<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>` },
  { name: 'Shield', label: 'Sécurité', svg: `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>` },
  { name: 'Target', label: 'Objectif', svg: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>` },
  { name: 'Lightbulb', label: 'Innovation', svg: `<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>` },
  { name: 'Video', label: 'Vidéo', svg: `<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>` },
  { name: 'File', label: 'Fichier', svg: `<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>` },
  { name: 'Folder', label: 'Dossier', svg: `<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>` },
  { name: 'Flag', label: 'Drapeau', svg: `<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>` },
  { name: 'Clock', label: 'Temps', svg: `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>` },
  { name: 'CheckCircle', label: 'Validé', svg: `<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>` },
  { name: 'ArrowRight', label: 'Navigation', svg: `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>` },
  { name: 'Star', label: 'Vedette', svg: `<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>` },
  { name: 'ExternalLink', label: 'Lien externe', svg: `<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>` },
]

function IconSVG({ svg, size = 20 }: { svg: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export function IconPickerField() {
  const { value, setValue } = useField<string>()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  const selected = ICONS.find((ic) => ic.name === value) ?? null

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const filtered = search
    ? ICONS.filter(
        (ic) =>
          ic.name.toLowerCase().includes(search.toLowerCase()) ||
          ic.label.toLowerCase().includes(search.toLowerCase()),
      )
    : ICONS

  return (
    <div ref={ref} style={{ position: 'relative', marginBottom: '2px' }}>
      {/* Label */}
      <label
        style={{
          display: 'block',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--theme-text, #374151)',
          marginBottom: '6px',
          letterSpacing: '0.01em',
        }}
      >
        Icône
      </label>

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          padding: '8px 12px',
          background: 'var(--theme-bg, #fff)',
          border: open
            ? '1px solid #08AA86'
            : '1px solid var(--theme-elevation-200, #d1d5db)',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '13px',
          color: selected ? 'var(--theme-text, #374151)' : '#9ca3af',
          textAlign: 'left',
          transition: 'border-color 0.15s',
          boxShadow: open ? '0 0 0 3px rgba(8,170,134,0.15)' : 'none',
        }}
      >
        {selected ? (
          <>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(8,170,134,0.1)',
                color: '#08AA86',
                flexShrink: 0,
              }}
            >
              <IconSVG svg={selected.svg} size={16} />
            </span>
            <span style={{ flex: 1, fontWeight: '500' }}>
              {selected.label}{' '}
              <span style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '400' }}>
                ({selected.name})
              </span>
            </span>
          </>
        ) : (
          <>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </svg>
            </span>
            Sélectionner une icône…
          </>
        )}

        {/* Chevron */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            marginLeft: 'auto',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s',
            flexShrink: 0,
            color: '#9ca3af',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            background: 'var(--theme-bg, #fff)',
            border: '1px solid var(--theme-elevation-200, #e5e7eb)',
            borderRadius: '10px',
            boxShadow: '0 10px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          {/* Search */}
          <div style={{ padding: '10px 12px', borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ position: 'relative' }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: 'absolute', left: '9px', top: '50%', transform: 'translateY(-50%)' }}
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <input
                autoFocus
                type="text"
                placeholder="Rechercher une icône…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '6px 10px 6px 30px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px',
                  outline: 'none',
                  background: '#f9fafb',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* Icon grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: '4px',
              padding: '10px',
              maxHeight: '280px',
              overflowY: 'auto',
            }}
          >
            {/* Clear option */}
            {value && (
              <button
                type="button"
                onClick={() => { setValue(''); setOpen(false); setSearch(''); }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 4px',
                  border: '1px dashed #e5e7eb',
                  borderRadius: '6px',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: '10px',
                  color: '#9ca3af',
                  transition: 'background 0.1s, border-color 0.1s',
                  gridColumn: 'span 1',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#fef2f2'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#ef4444'
                  ;(e.currentTarget as HTMLElement).style.color = '#ef4444'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'
                  ;(e.currentTarget as HTMLElement).style.color = '#9ca3af'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span>Aucune</span>
              </button>
            )}

            {filtered.map((icon) => {
              const isSelected = value === icon.name
              return (
                <button
                  key={icon.name}
                  type="button"
                  title={`${icon.label} (${icon.name})`}
                  onClick={() => {
                    setValue(icon.name)
                    setOpen(false)
                    setSearch('')
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 4px',
                    border: isSelected ? '1px solid #08AA86' : '1px solid transparent',
                    borderRadius: '6px',
                    background: isSelected ? 'rgba(8,170,134,0.08)' : 'transparent',
                    cursor: 'pointer',
                    color: isSelected ? '#08AA86' : 'var(--theme-text, #374151)',
                    fontSize: '10px',
                    fontWeight: isSelected ? '600' : '400',
                    transition: 'background 0.1s, border-color 0.1s, color 0.1s',
                    lineHeight: 1.3,
                    textAlign: 'center',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(8,170,134,0.06)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(8,170,134,0.3)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
                    }
                  }}
                >
                  <IconSVG svg={icon.svg} size={18} />
                  <span
                    style={{
                      maxWidth: '72px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontSize: '9px',
                    }}
                  >
                    {icon.label}
                  </span>
                </button>
              )
            })}

            {filtered.length === 0 && (
              <div
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '20px',
                  color: '#9ca3af',
                  fontSize: '12px',
                }}
              >
                Aucune icône trouvée
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default IconPickerField
