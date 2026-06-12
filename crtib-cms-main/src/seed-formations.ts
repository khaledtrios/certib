/**
 * Seeder formations CRTIB-B
 * node --import=tsx/esm ./src/seed-formations.ts
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

const formations = [
  // ── Marchés publics ───────────────────────────────────────────────────────
  {
    title: 'Marchés publics au Luxembourg – Introduction',
    category: 'marches-publics',
    startDate: '2026-09-10T09:00:00.000Z',
    endDate:   '2026-09-10T17:00:00.000Z',
    duration: '1 jour',
    location: 'Luxembourg-Ville',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'Cahier des charges techniques généraux (CTG)',
    category: 'marches-publics',
    startDate: '2026-09-24T09:00:00.000Z',
    endDate:   '2026-09-25T17:00:00.000Z',
    duration: '2 jours',
    location: 'Luxembourg-Ville',
    price: '490 €',
    maxParticipants: 18,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'Clauses contractuelles et modèles de contrats',
    category: 'marches-publics',
    startDate: '2026-10-08T09:00:00.000Z',
    endDate:   '2026-10-08T17:00:00.000Z',
    duration: '1 jour',
    location: 'Esch-sur-Alzette',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
  },
  {
    title: 'Révision des prix des matériaux',
    category: 'marches-publics',
    startDate: '2026-10-22T09:00:00.000Z',
    endDate:   '2026-10-22T13:00:00.000Z',
    duration: '½ journée',
    location: 'Luxembourg-Ville',
    price: '150 €',
    maxParticipants: 25,
    registrationEmail: 'formation@crtib.lu',
  },

  // ── Performance énergétique ───────────────────────────────────────────────
  {
    title: 'Performance énergétique du bâtiment – Réglementation luxembourgeoise',
    category: 'performance-energetique',
    startDate: '2026-09-17T09:00:00.000Z',
    endDate:   '2026-09-18T17:00:00.000Z',
    duration: '2 jours',
    location: 'Luxembourg-Ville',
    price: '490 €',
    maxParticipants: 16,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'Directive européenne EPBD – Impacts pour le Luxembourg',
    category: 'performance-energetique',
    startDate: '2026-10-15T09:00:00.000Z',
    endDate:   '2026-10-15T17:00:00.000Z',
    duration: '1 jour',
    location: 'Luxembourg-Ville',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
  },
  {
    title: 'Calcul et certification énergétique – Outils et méthodes',
    category: 'performance-energetique',
    startDate: '2026-11-05T09:00:00.000Z',
    endDate:   '2026-11-06T17:00:00.000Z',
    duration: '2 jours',
    location: 'Esch-sur-Alzette',
    price: '490 €',
    maxParticipants: 15,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },

  // ── Construction durable ─────────────────────────────────────────────────
  {
    title: 'Guide de la Construction Durable au Luxembourg',
    category: 'construction-durable',
    startDate: '2026-09-30T09:00:00.000Z',
    endDate:   '2026-09-30T17:00:00.000Z',
    duration: '1 jour',
    location: 'Luxembourg-Ville',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'Matériaux biosourcés et économie circulaire',
    category: 'construction-durable',
    startDate: '2026-10-20T09:00:00.000Z',
    endDate:   '2026-10-21T17:00:00.000Z',
    duration: '2 jours',
    location: 'Luxembourg-Ville',
    price: '490 €',
    maxParticipants: 18,
    registrationEmail: 'formation@crtib.lu',
  },
  {
    title: 'Déconstruction sélective et gestion des déchets de chantier',
    category: 'construction-durable',
    startDate: '2026-11-12T09:00:00.000Z',
    endDate:   '2026-11-12T17:00:00.000Z',
    duration: '1 jour',
    location: 'Esch-sur-Alzette',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },

  // ── Digitalisation / BIM ─────────────────────────────────────────────────
  {
    title: 'Introduction au BIM – Concepts et enjeux',
    category: 'digitalisation-bim',
    startDate: '2026-09-16T09:00:00.000Z',
    endDate:   '2026-09-16T17:00:00.000Z',
    duration: '1 jour',
    location: 'Luxembourg-Ville',
    price: '290 €',
    maxParticipants: 20,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'BIM Management et coordination de projet',
    category: 'digitalisation-bim',
    startDate: '2026-10-06T09:00:00.000Z',
    endDate:   '2026-10-08T17:00:00.000Z',
    duration: '3 jours',
    location: 'Luxembourg-Ville',
    price: '790 €',
    maxParticipants: 15,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'IFC et échange de données BIM',
    category: 'digitalisation-bim',
    startDate: '2026-10-28T09:00:00.000Z',
    endDate:   '2026-10-29T17:00:00.000Z',
    duration: '2 jours',
    location: 'Luxembourg-Ville',
    price: '490 €',
    maxParticipants: 16,
    registrationEmail: 'formation@crtib.lu',
  },
  {
    title: 'BIM IDS – Information Delivery Specification',
    category: 'digitalisation-bim',
    startDate: '2026-11-18T09:00:00.000Z',
    endDate:   '2026-11-18T17:00:00.000Z',
    duration: '1 jour',
    location: 'Luxembourg-Ville',
    price: '290 €',
    maxParticipants: 18,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
  {
    title: 'Revit – Modélisation architecturale niveau 1',
    category: 'digitalisation-bim',
    startDate: '2026-11-25T09:00:00.000Z',
    endDate:   '2026-11-27T17:00:00.000Z',
    duration: '3 jours',
    location: 'Luxembourg-Ville',
    price: '890 €',
    maxParticipants: 12,
    registrationEmail: 'formation@crtib.lu',
    registrationUrl: 'https://crtib.lu',
  },
]

const run = async () => {
  const payload = await getPayload({ config })

  // Wipe existing formations
  await payload.delete({ collection: 'formations', where: { id: { greater_than: 0 } } })
  console.log('Formations existantes supprimées.')

  let created = 0
  for (const f of formations) {
    await payload.create({
      collection: 'formations',
      data: { ...f, _status: 'published' } as any,
    })
    created++
    process.stdout.write(`  ✓ ${f.title}\n`)
  }

  console.log(`\n=== ${created} formations créées ===`)
  process.exit(0)
}

run().catch((e) => {
  console.error('ERREUR', e)
  process.exit(1)
})
