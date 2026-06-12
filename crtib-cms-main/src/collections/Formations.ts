import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  LinkFeature,
  UnorderedListFeature,
  OrderedListFeature,
} from '@payloadcms/richtext-lexical'

export const Formations: CollectionConfig = {
  slug: 'formations',
  labels: {
    singular: { fr: 'Formation', en: 'Training' },
    plural: { fr: 'Formations', en: 'Trainings' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'startDate', 'location', '_status'],
    hidden: true,
  },
  access: {
    read: () => true,
  },
  versions: { drafts: true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { fr: 'Titre', en: 'Title' },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      label: { fr: 'Slug (URL)', en: 'Slug (URL)' },
      admin: { description: { fr: 'Identifiant unique dans l\'URL', en: 'Unique URL identifier' } },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { fr: 'Image', en: 'Image' },
    },
    {
      name: 'category',
      type: 'select',
      label: { fr: 'Catégorie', en: 'Category' },
      options: [
        { label: { fr: 'Marchés publics', en: 'Public procurement' }, value: 'marches-publics' },
        { label: { fr: 'Performance énergétique', en: 'Energy performance' }, value: 'performance-energetique' },
        { label: { fr: 'Construction durable', en: 'Sustainable construction' }, value: 'construction-durable' },
        { label: { fr: 'Digitalisation / BIM', en: 'Digitalisation / BIM' }, value: 'digitalisation-bim' },
        { label: { fr: 'Autre', en: 'Other' }, value: 'autre' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startDate',
          type: 'date',
          label: { fr: 'Date de début', en: 'Start date' },
          admin: {
            date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd/MM/yyyy HH:mm' },
            width: '50%',
          },
        },
        {
          name: 'endDate',
          type: 'date',
          label: { fr: 'Date de fin', en: 'End date' },
          admin: {
            date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd/MM/yyyy HH:mm' },
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'duration',
          type: 'text',
          label: { fr: 'Durée (ex: 2 jours)', en: 'Duration (e.g. 2 days)' },
          admin: { width: '33%' },
        },
        {
          name: 'location',
          type: 'text',
          label: { fr: 'Lieu', en: 'Location' },
          admin: { width: '34%' },
        },
        {
          name: 'price',
          type: 'text',
          label: { fr: 'Prix (ex: 350 €)', en: 'Price (e.g. 350 €)' },
          admin: { width: '33%' },
        },
      ],
    },
    {
      name: 'maxParticipants',
      type: 'number',
      label: { fr: 'Nombre max de participants', en: 'Max participants' },
    },
    {
      name: 'description',
      type: 'richText',
      label: { fr: 'Description', en: 'Description' },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          LinkFeature({}),
          UnorderedListFeature(),
          OrderedListFeature(),
        ],
      }),
    },
    {
      name: 'registrationUrl',
      type: 'text',
      label: { fr: 'Lien d\'inscription', en: 'Registration link' },
    },
    {
      name: 'registrationEmail',
      type: 'email',
      label: { fr: 'Email d\'inscription', en: 'Registration email' },
    },
  ],
}
