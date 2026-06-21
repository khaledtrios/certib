import type { CollectionConfig } from 'payload'

export const FormationCategories: CollectionConfig = {
  slug: 'formation-categories',
  labels: {
    singular: { fr: 'Catégorie de formation', en: 'Training category' },
    plural: { fr: 'Catégories de formations', en: 'Training categories' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
    group: { fr: 'Formations', en: 'Trainings' },
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: { fr: 'Nom', en: 'Name' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { fr: 'Slug', en: 'Slug' },
      admin: {
        description: {
          fr: 'Identifiant unique dans l\'URL (ex: marches-publics)',
          en: 'Unique URL identifier (e.g. marches-publics)',
        },
      },
    },
  ],
}
