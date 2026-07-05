import type { CollectionConfig } from 'payload'

export const SiteLanguages: CollectionConfig = {
  slug: 'site-languages',
  labels: {
    singular: { fr: 'Langue', en: 'Language' },
    plural: { fr: 'Langues', en: 'Languages' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'isDefault', 'isActive'],
    group: { fr: 'Configuration', en: 'Configuration' },
    description: {
      fr: 'Gérer les langues du site. Toutes les langues actives ont un préfixe URL (ex : /fr/page, /de/page).',
      en: 'Manage site languages. Every active language has a URL prefix (e.g. /fr/page, /de/page).',
    },
  },
  access: { read: () => true },
  hooks: {
    // After a language is saved as default, clear isDefault on all others
    afterChange: [
      async ({ doc, req }) => {
        if (doc.isDefault !== true) return doc
        const others = await req.payload.find({
          collection: 'site-languages',
          where: {
            and: [
              { isDefault: { equals: true } },
              { id: { not_equals: doc.id } },
            ],
          },
          limit: 100,
        })
        for (const lang of others.docs) {
          await req.payload.update({
            collection: 'site-languages',
            id: lang.id,
            data: { isDefault: false },
          })
        }
        return doc
      },
    ],
    // Block deletion of the default language
    beforeDelete: [
      async ({ id, req }) => {
        const lang = await req.payload.findByID({ collection: 'site-languages', id })
        if (lang?.isDefault) {
          throw new Error('Impossible de supprimer la langue par défaut. Désignez d\'abord une autre langue par défaut.')
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: { fr: 'Nom de la langue', en: 'Language name' },
      admin: {
        description: { fr: 'Ex : Français, Deutsch, English', en: 'e.g. Français, Deutsch, English' },
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: { fr: 'Code langue (ISO 639-1)', en: 'Language code (ISO 639-1)' },
      admin: {
        description: { fr: 'Ex : fr, de, en, lu', en: 'e.g. fr, de, en, lu' },
      },
    },
    {
      name: 'isDefault',
      type: 'checkbox',
      label: { fr: 'Langue par défaut', en: 'Default language' },
      defaultValue: false,
      admin: {
        description: {
          fr: 'Une seule langue peut être par défaut. Sauvegarder cette option retire le statut aux autres.',
          en: 'Only one language can be default. Saving this removes the status from others.',
        },
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: { fr: 'Langue active', en: 'Active language' },
      defaultValue: true,
      admin: {
        description: {
          fr: 'Seules les langues actives sont proposées sur le site. La langue par défaut ne peut pas être désactivée.',
          en: 'Only active languages appear on the site. The default language cannot be deactivated.',
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate: async (value: any, { data, id, req }: any) => {
        if (value !== false) return true

        // Protect default language from being deactivated
        const isDefaultInForm = (data as any)?.isDefault === true
        if (isDefaultInForm) {
          return 'La langue par défaut ne peut pas être désactivée.'
        }

        // Also check in DB in case isDefault was set in a prior save
        if (id) {
          const existing = await req.payload.findByID({
            collection: 'site-languages',
            id: String(id),
          })
          if (existing?.isDefault === true) {
            return 'La langue par défaut ne peut pas être désactivée.'
          }
        }

        return true
      },
    },
  ],
}
