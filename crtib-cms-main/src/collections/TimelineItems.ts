import type { CollectionConfig } from 'payload'
import { revalidateHome } from '../hooks/revalidateHome'

export const TimelineItems: CollectionConfig = {
  slug: 'timeline-items',
  labels: {
    singular: { fr: 'Événement Historique', en: 'Timeline Item' },
    plural: { fr: 'Événements Historiques', en: 'Timeline Items' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['year', 'title', 'updatedAt'],
    group: { fr: 'Institutionnel', en: 'Institutional' },
    description: { fr: "Gérer l'historique.", en: 'Manage the historical milestones displayed on the homepage timeline.' },
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
      label: { en: 'Year', fr: 'Année' },
      admin: {
        description: { en: 'E.g. 1990', fr: 'Ex : 1990' },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { fr: 'Titre', en: 'Title' },
      admin: {
        description: { fr: "Description de l'événement.", en: 'Event or historical milestone description.' },
      },
    },
    {
      name: 'order',
      type: 'number',
      label: { en: 'Order', fr: 'Ordre' },
      defaultValue: 0,
      index: true,
      admin: {
        description: { en: 'Display order. Lower number appears first.', fr: "Ordre d'affichage. Le nombre le plus bas apparaît en premier." },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
