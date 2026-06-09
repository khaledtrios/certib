import type { CollectionConfig } from 'payload'

export const Clauses: CollectionConfig = {
  slug: 'clauses',
  labels: { singular: 'Clause / CTG', plural: 'Clauses et CTG' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title', 'date', 'version'],
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Numéro (ex: CTG 013)',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
      label: 'Titre',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'version',
      type: 'text',
      label: 'Version (ex: V1, V1.1)',
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      label: 'Fichier PDF',
    },
    {
      name: 'rtf',
      type: 'upload',
      relationTo: 'media',
      label: 'Fichier RTF',
    },
    {
      name: 'doc',
      type: 'upload',
      relationTo: 'media',
      label: 'Fichier DOC',
    },
  ],
}
