/**
 * Seed: assigns the default language to all content that has no language set.
 * Run BEFORE going live after adding the language field to collections.
 *
 * Run with:
 *   pnpm seed:assign-default-language
 */
import { getPayload } from 'payload'
import config from '../payload.config.js'

const payload = await getPayload({ config })

const langs = await payload.find({
  collection: 'site-languages',
  where: { isDefault: { equals: true } },
  limit: 1,
  overrideAccess: true,
})

const defaultLang = langs.docs[0]
if (!defaultLang) {
  payload.logger.error('Aucune langue par défaut trouvée. Lancez d\'abord pnpm seed:languages.')
  process.exit(1)
}

const langId = defaultLang.id
payload.logger.info({ langId, slug: (defaultLang as any).slug }, 'Assignation de la langue par défaut au contenu legacy')

const COLLECTIONS = [
  'pages',
  'news',
  'formations',
  'formation-categories',
  'actualite-categories',
  'actualite-rubriques',
  'timeline-items',
] as const

for (const col of COLLECTIONS) {
  let page = 1
  let updated = 0
  let skipped = 0

  while (true) {
    const result = await payload.find({
      collection: col as any,
      where: {
        or: [
          { language: { exists: false } },
          { language: { equals: null } },
        ],
      },
      limit: 100,
      page,
      overrideAccess: true,
      depth: 0,
    })

    for (const doc of result.docs) {
      try {
        await payload.update({
          collection: col as any,
          id: (doc as any).id,
          data: { language: langId } as any,
          overrideAccess: true,
          depth: 0,
        })
        updated++
      } catch (err: any) {
        payload.logger.warn(
          { collection: col, id: (doc as any).id, error: err?.message ?? String(err) },
          'Document ignoré (erreur de validation — probablement un brouillon incomplet)',
        )
        skipped++
      }
    }

    if (!result.hasNextPage) break
    page++
  }

  payload.logger.info({ collection: col, updated, skipped }, 'Traité')
}

payload.logger.info('✅ Tout le contenu legacy a été assigné à la langue par défaut.')
process.exit(0)
