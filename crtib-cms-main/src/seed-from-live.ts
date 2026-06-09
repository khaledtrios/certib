/**
 * Reconstruction du contenu du site EN LIGNE vers le CMS LOCAL, via l'API publique.
 * - Médias insérés en SQL avec leurs IDs d'origine (les pages les référencent par ID).
 * - Pages + collections recréées via l'API locale Payload.
 * - Hiérarchie de menu (parent) recalculée en 2 passes.
 *
 * Lancement (depuis crtib-cms-main) :
 *   NODE_ENV=production ./node_modules/.bin/tsx ./src/seed-from-live.ts
 */
import 'dotenv/config'
import fs from 'fs'
import { getPayload } from 'payload'
import config from './payload.config'

const BASE = 'https://crtib-front.zfpyy7.easypanel.host'

async function fetchAll(collection: string): Promise<any[]> {
  const res = await fetch(`${BASE}/api/cms/${collection}?limit=500&depth=0`)
  if (!res.ok) throw new Error(`fetch ${collection} -> ${res.status}`)
  const json = await res.json()
  return (json.docs as any[]) || []
}

/**
 * Nettoie un doc pour le recréer :
 * - supprime les `id` de type string (identifiants de lignes de blocs/tableaux,
 *   régénérés par Payload) ; garde les `id` numériques (références média).
 * - ne touche PAS au champ `content` (richtext Lexical opaque).
 */
function clean(value: any, key?: string): any {
  if (key === 'content') return value
  if (Array.isArray(value)) return value.map((v) => clean(v))
  if (value && typeof value === 'object') {
    const out: Record<string, any> = {}
    for (const [k, v] of Object.entries(value)) {
      if (k === 'id' && typeof v === 'string') continue
      out[k] = clean(v, k)
    }
    return out
  }
  return value
}

const run = async () => {
  const payload = await getPayload({ config })
  const db: any = payload.db
  const query = (text: string, params?: any[]) => db.pool.query(text, params)

  // 1) WIPE des collections de contenu (on garde les users)
  for (const col of ['pages', 'news', 'partners', 'videos', 'timeline-items', 'clauses']) {
    try {
      const r = await payload.delete({ collection: col as any, where: { id: { greater_than: 0 } } })
      console.log(`wipe ${col}: ${(r as any)?.docs?.length ?? '?'} supprimés`)
    } catch (e: any) {
      console.log(`wipe ${col} WARN: ${e.message?.slice(0, 120)}`)
    }
  }

  // 2) MEDIA en SQL avec IDs d'origine
  const mediaMeta = JSON.parse(fs.readFileSync('media_meta.json', 'utf8')).docs as any[]
  await query('DELETE FROM media')
  for (const m of mediaMeta) {
    await query(
      `INSERT INTO media (id, alt, filename, mime_type, filesize, width, height, focal_x, focal_y, url, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, now(), now()) ON CONFLICT (id) DO NOTHING`,
      [m.id, m.alt ?? null, m.filename ?? null, m.mimeType ?? null, m.filesize ?? null,
        m.width ?? null, m.height ?? null, m.focalX ?? 50, m.focalY ?? 50, m.url ?? null],
    )
  }
  await query(`SELECT setval('media_id_seq', GREATEST((SELECT COALESCE(MAX(id),1) FROM media),1))`)
  console.log(`media: ${mediaMeta.length} lignes insérées (IDs préservés)`)

  // 3) Collections simples
  for (const col of ['partners', 'videos', 'timeline-items', 'clauses', 'news']) {
    const docs = await fetchAll(col)
    let n = 0
    for (const d of docs) {
      const { id, createdAt, updatedAt, ...rest } = d
      const data = clean(rest)
      if (data._status == null) data._status = 'published'
      try {
        await payload.create({ collection: col as any, data })
        n++
      } catch (e: any) {
        console.log(`  WARN ${col} id${id}: ${e.message?.slice(0, 140)}`)
      }
    }
    console.log(`${col}: ${n}/${docs.length} créés`)
  }

  // 4) PAGES — passe 1 : création sans parent + map des IDs
  const pages = (await fetchAll('pages')).filter((p) => p.slug)
  const idMap = new Map<number, number>()
  for (const p of pages) {
    const { id, createdAt, updatedAt, parent, ...rest } = p
    const data = clean(rest)
    if (data._status == null) data._status = 'published'
    try {
      const c = await payload.create({ collection: 'pages', data })
      idMap.set(id, c.id as number)
    } catch (e: any) {
      console.log(`  WARN page "${p.slug}": ${e.message?.slice(0, 180)}`)
    }
  }
  // passe 2 : rétablir la hiérarchie de menu (parent)
  let parents = 0
  for (const p of pages) {
    if (p.parent != null && idMap.has(p.id) && idMap.has(p.parent)) {
      try {
        await payload.update({ collection: 'pages', id: idMap.get(p.id)!, data: { parent: idMap.get(p.parent)! } })
        parents++
      } catch (e: any) {
        console.log(`  WARN parent page "${p.slug}": ${e.message?.slice(0, 120)}`)
      }
    }
  }
  console.log(`pages: ${idMap.size}/${pages.length} créées, ${parents} parents rétablis`)

  console.log('=== SEED TERMINÉ ===')
  process.exit(0)
}

run().catch((e) => {
  console.error('FATAL', e)
  process.exit(1)
})
