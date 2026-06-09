import type { CollectionConfig } from 'payload'
import { revalidateHome } from '../hooks/revalidateHome'

export const ActivityReports: CollectionConfig = {
  slug: 'activity-reports',
  labels: {
    singular: { fr: 'Rapport d\'activité', en: 'Activity Report' },
    plural: { fr: 'Rapports d\'activité', en: 'Activity Reports' },
  },
  admin: {
    useAsTitle: 'year',
    defaultColumns: ['year', 'updatedAt'],
    group: { fr: 'Institutionnel', en: 'Institutional' },
    description: { fr: 'Gérer les rapports.', en: 'Manage the annual activity reports displayed on the homepage.' },
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: { en: 'Year', fr: 'Année' },
      admin: {
        description: { en: 'E.g. 2024', fr: 'Ex : 2024' },
      },
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: { en: 'Report PDF', fr: 'PDF du Rapport' },
      admin: {
        description: { en: 'Activity report PDF file.', fr: "Fichier PDF du rapport d'activité." },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
