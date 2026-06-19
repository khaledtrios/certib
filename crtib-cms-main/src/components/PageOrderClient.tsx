'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Gutter } from '@payloadcms/ui'

interface Page {
  id: string
  title: string
  slug: string
  menuOrder: number
  isHidden: boolean
  parent?: { id: string } | null
  children: Page[]
}

let _drag: { listKey: string; dragIndex: number } | null = null

function buildTree(flat: any[]): Page[] {
  const map = new Map<string, Page>()
  flat.forEach((p) =>
    map.set(p.id, {
      id: p.id,
      title: p.title ?? '(sans titre)',
      slug: p.slug ?? '',
      menuOrder: p.menuOrder ?? 9999,
      isHidden: p.isHidden ?? false,
      parent: p.parent ? { id: typeof p.parent === 'object' ? p.parent.id : p.parent } : null,
      children: [],
    }),
  )
  const roots: Page[] = []
  map.forEach((page) => {
    if (page.parent?.id) {
      const parent = map.get(page.parent.id)
      if (parent) parent.children.push(page)
      else roots.push(page)
    } else {
      roots.push(page)
    }
  })
  const sort = (arr: Page[]) => {
    arr.sort((a, b) => a.menuOrder - b.menuOrder)
    arr.forEach((p) => p.children.length && sort(p.children))
  }
  sort(roots)
  return roots
}

function collectPatches(pages: Page[], acc: { id: string; menuOrder: number }[]) {
  pages.forEach((page, i) => {
    acc.push({ id: page.id, menuOrder: (i + 1) * 10 })
    if (page.children.length) collectPatches(page.children, acc)
  })
}

function updateInTree(pages: Page[], id: string, updater: (p: Page) => Page): Page[] {
  return pages.map((page) => {
    if (page.id === id) return updater(page)
    if (page.children.length)
      return { ...page, children: updateInTree(page.children, id, updater) }
    return page
  })
}

function DragHandle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ color: '#d1d5db', flexShrink: 0 }}>
      <circle cx="9" cy="5" r="1.5" /><circle cx="15" cy="5" r="1.5" />
      <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
      <circle cx="9" cy="19" r="1.5" /><circle cx="15" cy="19" r="1.5" />
    </svg>
  )
}

function EyeIcon({ hidden }: { hidden: boolean }) {
  if (hidden) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    )
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function SortableList({
  listKey,
  items,
  level = 0,
  onReorder,
  onToggleHide,
}: {
  listKey: string
  items: Page[]
  level?: number
  onReorder: (newItems: Page[]) => void
  onToggleHide: (id: string) => void
}) {
  const [overIndex, setOverIndex] = useState<number | null>(null)
  const [, forceUpdate] = useState(0)

  const handleDragStart = (e: React.DragEvent, i: number) => {
    _drag = { listKey, dragIndex: i }
    e.dataTransfer.effectAllowed = 'move'
    e.stopPropagation()
    forceUpdate((n) => n + 1)
  }

  const handleDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (_drag?.listKey === listKey) {
      e.dataTransfer.dropEffect = 'move'
      setOverIndex(i)
    }
  }

  const handleDrop = (e: React.DragEvent, i: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (!_drag || _drag.listKey !== listKey) { setOverIndex(null); return }
    const from = _drag.dragIndex
    _drag = null
    setOverIndex(null)
    if (from === i) return
    const next = [...items]
    const [moved] = next.splice(from, 1)
    next.splice(i, 0, moved)
    onReorder(next)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    e.stopPropagation()
    _drag = null
    setOverIndex(null)
    forceUpdate((n) => n + 1)
  }

  return (
    <div
      style={{
        marginLeft: level > 0 ? '28px' : '0',
        paddingLeft: level > 0 ? '14px' : '0',
        borderLeft: level > 0 ? '2px solid rgba(8,170,134,0.18)' : 'none',
      }}
    >
      {items.map((page, i) => {
        const isOver = overIndex === i && _drag?.listKey === listKey && _drag.dragIndex !== i
        const isDragging = _drag?.listKey === listKey && _drag.dragIndex === i

        return (
          <div key={page.id}>
            {isOver && _drag && _drag.dragIndex > i && (
              <div style={{ height: 2, background: '#08AA86', borderRadius: 1, margin: '2px 0', boxShadow: '0 0 6px rgba(8,170,134,0.5)' }} />
            )}

            <div
              draggable
              onDragStart={(e) => handleDragStart(e, i)}
              onDragOver={(e) => handleDragOver(e, i)}
              onDrop={(e) => handleDrop(e, i)}
              onDragEnd={handleDragEnd}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 12px',
                marginBottom: '3px',
                background: isDragging
                  ? 'rgba(8,170,134,0.06)'
                  : page.isHidden
                  ? 'rgba(249,250,251,0.8)'
                  : '#fff',
                border: isOver
                  ? '1px solid #08AA86'
                  : page.isHidden
                  ? '1px dashed #d1d5db'
                  : '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'grab',
                opacity: isDragging ? 0.55 : page.isHidden ? 0.6 : 1,
                boxShadow: isOver ? '0 0 0 3px rgba(8,170,134,0.12)' : '0 1px 2px rgba(0,0,0,0.04)',
                userSelect: 'none',
                transition: 'border-color 0.1s, box-shadow 0.1s, opacity 0.15s',
              }}
            >
              <DragHandle />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '13px', fontWeight: '600',
                  color: page.isHidden ? '#9ca3af' : '#111827',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  textDecoration: page.isHidden ? 'line-through' : 'none',
                }}>
                  {page.title}
                </div>
                <div style={{ fontSize: '11px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  /{page.slug}
                  {page.isHidden && (
                    <span style={{ marginLeft: '6px', color: '#f59e0b', fontWeight: '600' }}>masqué</span>
                  )}
                </div>
              </div>

              {page.children.length > 0 && (
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#08AA86', background: 'rgba(8,170,134,0.08)', border: '1px solid rgba(8,170,134,0.2)', borderRadius: '10px', padding: '2px 7px', flexShrink: 0 }}>
                  {page.children.length} sous-page{page.children.length > 1 ? 's' : ''}
                </span>
              )}

              {/* Eye toggle */}
              <button
                type="button"
                title={page.isHidden ? 'Afficher dans la navigation' : 'Masquer de la navigation'}
                onClick={(e) => { e.stopPropagation(); onToggleHide(page.id) }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '28px', height: '28px', borderRadius: '6px', border: 'none',
                  background: page.isHidden ? 'rgba(245,158,11,0.1)' : 'transparent',
                  color: page.isHidden ? '#f59e0b' : '#9ca3af',
                  cursor: 'pointer', flexShrink: 0, padding: 0,
                  transition: 'background 0.12s, color 0.12s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = page.isHidden ? 'rgba(245,158,11,0.18)' : 'rgba(8,170,134,0.08)'
                  el.style.color = page.isHidden ? '#d97706' : '#08AA86'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = page.isHidden ? 'rgba(245,158,11,0.1)' : 'transparent'
                  el.style.color = page.isHidden ? '#f59e0b' : '#9ca3af'
                }}
              >
                <EyeIcon hidden={page.isHidden} />
              </button>

              {/* Edit link */}
              <a
                href={`/admin/collections/pages/${page.id}`}
                onClick={(e) => e.stopPropagation()}
                title="Modifier"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', color: '#9ca3af', textDecoration: 'none', flexShrink: 0 }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(8,170,134,0.08)'; el.style.color = '#08AA86' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#9ca3af' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </a>
            </div>

            {isOver && _drag && _drag.dragIndex < i && (
              <div style={{ height: 2, background: '#08AA86', borderRadius: 1, margin: '2px 0', boxShadow: '0 0 6px rgba(8,170,134,0.5)' }} />
            )}

            {page.children.length > 0 && (
              <div style={{ marginBottom: '3px' }}>
                <SortableList
                  listKey={`c-${page.id}`}
                  items={page.children}
                  level={level + 1}
                  onReorder={(newChildren) => {
                    const next = [...items]
                    next[i] = { ...page, children: newChildren }
                    onReorder(next)
                  }}
                  onToggleHide={onToggleHide}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function PageOrderClient() {
  const [tree, setTree] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle')
  const [dirty, setDirty] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('/api/pages?limit=1000&depth=1&sort=menuOrder')
      .then((r) => r.json())
      .then((data) => {
        const docs = data.docs || []
        setTotal(docs.length)
        setTree(buildTree(docs))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleReorder = (newTree: Page[]) => {
    setTree(newTree)
    setDirty(true)
    setStatus('idle')
  }

  const handleToggleHide = useCallback(async (id: string) => {
    // Find current value directly from tree closure
    const findPage = (pages: Page[]): Page | undefined => {
      for (const p of pages) {
        if (p.id === id) return p
        const found = findPage(p.children)
        if (found) return found
      }
    }
    const page = findPage(tree)
    if (!page) return
    const newHidden = !page.isHidden

    // Optimistic UI update
    setTree((prev) => updateInTree(prev, id, (p) => ({ ...p, isHidden: newHidden })))

    try {
      const res = await fetch(`/api/pages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isHidden: newHidden, _status: 'published' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
    } catch {
      // Revert on error
      setTree((prev) => updateInTree(prev, id, (p) => ({ ...p, isHidden: !newHidden })))
    }
  }, [tree])

  const handleSave = async () => {
    setSaving(true)
    setStatus('idle')
    try {
      const patches: { id: string; menuOrder: number }[] = []
      collectPatches(tree, patches)
      const results = await Promise.all(
        patches.map(({ id, menuOrder }) =>
          fetch(`/api/pages/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ menuOrder, _status: 'published' }),
          }),
        ),
      )
      const hasError = results.some((r) => !r.ok)
      if (hasError) throw new Error('One or more pages failed to save')
      setDirty(false)
      setStatus('saved')
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    } finally {
      setSaving(false)
    }
  }

  const hiddenCount = (() => {
    let n = 0
    const count = (pages: Page[]) => pages.forEach((p) => { if (p.isHidden) n++; count(p.children) })
    count(tree)
    return n
  })()

  return (
    <Gutter><div style={{ maxWidth: '720px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--theme-text)', margin: '0 0 5px' }}>
            Ordre des pages
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--theme-text)', opacity: 0.5, margin: 0 }}>
            {loading
              ? 'Chargement…'
              : `${total} page${total !== 1 ? 's' : ''}${hiddenCount > 0 ? ` · ${hiddenCount} masquée${hiddenCount > 1 ? 's' : ''}` : ''}`}
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={!dirty || saving || loading}
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '0 18px', height: '36px', flexShrink: 0,
            background: status === 'saved' ? '#10b981' : status === 'error' ? '#ef4444' : dirty ? 'linear-gradient(135deg,#08AA86,#31af91)' : '#e5e7eb',
            color: dirty || status !== 'idle' ? '#fff' : '#9ca3af',
            border: 'none', borderRadius: '8px',
            cursor: dirty && !saving ? 'pointer' : 'default',
            fontSize: '13px', fontWeight: '600',
            boxShadow: dirty ? '0 2px 8px rgba(8,170,134,0.3)' : 'none',
            transition: 'background 0.2s',
          }}
        >
          {status === 'saved' ? (
            <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Enregistré</>
          ) : saving ? 'Enregistrement…' : status === 'error' ? 'Erreur — réessayer' : (
            <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>Enregistrer l'ordre</>
          )}
        </button>
      </div>

      {/* Legend */}
      {!loading && tree.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', background: 'rgba(8,170,134,0.04)', border: '1px solid rgba(8,170,134,0.12)', borderRadius: '8px', marginBottom: '16px', fontSize: '11px', color: '#6b7280', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <DragHandle /><span>Glisser pour réordonner</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#08AA86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Visible</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            <span>Masqué du menu</span>
          </span>
        </div>
      )}

      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: '#9ca3af', fontSize: '13px' }}>
          Chargement des pages…
        </div>
      )}

      {!loading && tree.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af', fontSize: '13px' }}>
          Aucune page trouvée.
        </div>
      )}

      {!loading && tree.length > 0 && (
        <SortableList listKey="root" items={tree} level={0} onReorder={handleReorder} onToggleHide={handleToggleHide} />
      )}

      {dirty && (
        <div style={{ marginTop: '16px', padding: '8px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '6px', fontSize: '12px', color: '#92400e', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Modifications de l'ordre non sauvegardées — cliquez sur « Enregistrer l'ordre »
        </div>
      )}
    </div></Gutter>
  )
}
