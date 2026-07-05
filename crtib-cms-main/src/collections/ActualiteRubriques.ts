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
      label: { fr: 'Slug', en: 'Slug' },
      admin: {
        description: {
          fr: 'Identifiant — utilisé dans les filtres (ex: marches-publics)',
          en: 'Identifier — used in filters (e.g. marches-publics)',
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
    {
      name: 'language',
      type: 'relationship',
      relationTo: 'site-languages',
      required: false,
      label: { fr: 'Langue', en: 'Language' },
      admin: {
        position: 'sidebar',
        description: {
          fr: 'Langue de cette rubrique. Laisser vide = français (par défaut).',
          en: 'Language of this section. Leave empty = French (default).',
        },
      },
    },
  ],
}
