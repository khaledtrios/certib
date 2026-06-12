/**
 * Ajoute le bloc formationsSection sur toutes les pages de formation
 * NODE_ENV=production ./node_modules/.bin/tsx ./src/seed-formation-pages.ts
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

const PAGES = [
  { id: 3,  title: 'Formation BIM',                  category: 'digitalisation-bim',        sectionTitle: 'Nos formations BIM & Digitalisation' },
  { id: 5,  title: 'Formation Marchés publics',       category: 'marches-publics',            sectionTitle: 'Nos formations Marchés publics' },
  { id: 8,  title: 'Formation Performance énergétique', category: 'performance-energetique',  sectionTitle: 'Nos formations Performance énergétique' },
]

const run = async () => {
  const payload = await getPayload({ config })

  for (const p of PAGES) {
    // Récupère la page existante
    const page = await payload.findByID({ collection: 'pages', id: p.id, depth: 0 }) as any
    if (!page) { console.log(`  ✗ Page id=${p.id} introuvable`); continue }

    const layout: any[] = page.layout ?? []

    // Retire tout bloc formationsSection déjà présent
    const filtered = layout.filter((b: any) => b.blockType !== 'formationsSection')

    // Insère le bloc formationsSection avant newsletterBlock (ou en dernier)
    const newsletterIdx = filtered.findIndex((b: any) => b.blockType === 'newsletterBlock')
    const insertAt = newsletterIdx >= 0 ? newsletterIdx : filtered.length

    filtered.splice(insertAt, 0, {
      blockType: 'formationsSection',
      title: p.sectionTitle,
      category: p.category,
      showFilters: false,
      limit: 20,
    })

    await payload.update({
      collection: 'pages',
      id: p.id,
      data: { layout: filtered },
    })

    console.log(`  ✓ "${p.title}" → bloc formationsSection (${p.category}) ajouté`)
  }

  // Page "Toutes les formations" – cherche ou crée
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'toutes-les-formations' } },
    limit: 1,
  })

  if (existing.docs.length === 0) {
    // Trouve l'id de la page racine pour parent (ex: 7 = Marchés publics… on crée sans parent)
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Toutes les formations',
        slug: 'toutes-les-formations',
        menuOrder: 5,
        _status: 'published',
        layout: [
          {
            blockType: 'formationsSection',
            title: 'Toutes les formations',
            showFilters: true,
            limit: 50,
          },
        ],
      } as any,
    })
    console.log('  ✓ Page "Toutes les formations" créée avec filtre toutes catégories')
  } else {
    const allPage = existing.docs[0] as any
    const layout: any[] = allPage.layout ?? []
    const filtered = layout.filter((b: any) => b.blockType !== 'formationsSection')
    filtered.unshift({
      blockType: 'formationsSection',
      title: 'Toutes les formations',
      showFilters: true,
      limit: 50,
    })
    await payload.update({
      collection: 'pages',
      id: allPage.id,
      data: { layout: filtered },
    })
    console.log('  ✓ Page "Toutes les formations" mise à jour')
  }

  console.log('\n=== DONE ===')
  process.exit(0)
}

run().catch((e) => { console.error('ERREUR', e); process.exit(1) })
