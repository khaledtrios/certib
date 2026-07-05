import type { CollectionConfig } from 'payload'
import { revalidateFormations } from '../hooks/revalidateFrontend'
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
    group: { fr: 'Formations', en: 'Trainings' },
    hidden: false,
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
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
      label: { fr: 'Slug (URL)', en: 'Slug (URL)' },
      admin: { description: { fr: 'Identifiant unique dans l\'URL', en: 'Unique URL identifier' } },
      validate: async (value: any, { data, id, req }: any) => {
        if (!value) return true
        const reqUrl: string = req?.url ?? ''
        if (reqUrl.includes('/duplicate')) return true
        const langId: string | null = (data as any)?.language ?? null
        const andConditions: any[] = [
          { slug: { equals: value } },
          ...(id ? [{ id: { not_equals: id } }] : []),
        ]
        if (langId) {
          andConditions.push({ language: { equals: langId } })
        } else {
          andConditions.push({ or: [{ language: { exists: false } }, { language: { equals: null } }] })
        }
        const existing = await req.payload.find({ collection: 'formations', where: { and: andConditions }, limit: 1 })
        if (existing.docs.length > 0) return langId ? 'Ce slug est déjà utilisé pour cette langue.' : 'Ce slug est déjà utilisé (sans langue assignée).'
        return true
      },
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
          fr: 'Langue de cette formation. Laisser vide = français (par défaut).',
          en: 'Language of this training. Leave empty = French (default).',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { fr: 'Image', en: 'Image' },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'formation-categories',
      label: { fr: 'Catégorie', en: 'Category' },
    },
    {
      name: 'categoryLegacy',
      type: 'select',
      label: { fr: 'Catégorie (ancien)', en: 'Category (legacy)' },
      admin: { hidden: true },
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
  hooks: {
    beforeDuplicate: [async ({ data, req }) => {
      const base = typeof data.slug === 'string' ? data.slug : ''
      const langId: string | null = (data as any).language ?? null
      for (let suffix = 2; suffix < 200; suffix++) {
        const candidate = `${base}-${suffix}`
        const andConditions: any[] = [{ slug: { equals: candidate } }]
        if (langId) andConditions.push({ language: { equals: langId } })
        const existing = await req.payload.find({ collection: 'formations', where: { and: andConditions }, limit: 1 })
        if (existing.docs.length === 0) return { ...data, slug: candidate }
      }
      return data
    }],
    afterChange: [revalidateFormations],
  },
}
