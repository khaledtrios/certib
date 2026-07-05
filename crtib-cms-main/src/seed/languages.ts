/**
 * Seed: inserts the default French language using the Payload local API.
 *
 * Run with:
 *   pnpm seed:languages
 *   (or: node --import tsx/esm src/seed/languages.ts)
 */
import { getPayload } from 'payload'
import config from '../payload.config.js'

const payload = await getPayload({ config })

try {
  const existing = await payload.find({
    collection: 'site-languages',
    where: { slug: { equals: 'fr' } },
    limit: 1,
  })

  if (existing.docs.length === 0) {
    await payload.create({
      collection: 'site-languages',
      data: {
        name: 'Français',
        slug: 'fr',
        isDefault: true,
        isActive: true,
      },
    })
    console.log('✅ Langue "Français" (fr) créée avec isDefault=true, isActive=true')
  } else {
    const doc = existing.docs[0]
    await payload.update({
      collection: 'site-languages',
      id: doc.id,
      data: { isDefault: true, isActive: true },
    })
    console.log('ℹ️  Langue fr existante : isDefault=true, isActive=true appliqués')
  }
} catch (err) {
  console.error('❌ Erreur seed languages:', err)
  process.exit(1)
}

process.exit(0)
