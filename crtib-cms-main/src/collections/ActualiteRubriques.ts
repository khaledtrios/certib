import type { CollectionConfig } from 'payload'

export const ActualiteRubriques: CollectionConfig = {
  slug: 'actualite-rubriques',
  labels: {
    singular: { fr: "Rubrique d'actualité", en: 'News section' },
    plural: { fr: "Rubriques d'actualités", en: 'News sections' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
    group: { fr: 'Actualités', en: 'News' },
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
          fr: 'Identifiant unique — utilisé dans les filtres (ex: marches-publics)',
          en: 'Unique identifier — used in filters (e.g. marches-publics)',
        },
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return (data.name as string)
                .toLowerCase()
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, '')
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/--+/g, '-')
                .trim()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'order',
      type: 'number',
      label: { fr: 'Ordre d\'affichage', en: 'Display order' },
      admin: { description: { fr: 'Tri dans les filtres (optionnel)', en: 'Sort in filters (optional)' } },
    },
  ],
}
