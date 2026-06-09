import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: { fr: 'Médias', en: 'Media' },
    plural: { fr: 'Médias', en: 'Media' },
  },
  admin: {
    group: { fr: 'Multimédia', en: 'Multimedia' },
    description: { fr: 'Images et documents uploadés.', en: 'Images and documents uploaded to the site.' },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      label: { fr: 'Texte alternatif', en: 'Alt Text' },
    },
  ],
  upload: true,
}
