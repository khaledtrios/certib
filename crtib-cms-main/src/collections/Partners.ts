import type { CollectionConfig } from 'payload'
import { revalidateHome } from '../hooks/revalidateHome'

export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: { fr: 'Partenaire', en: 'Partner' },
    plural: { fr: 'Partenaires', en: 'Partners' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'order', 'updatedAt'],
    group: { fr: 'Institutionnel', en: 'Institutional' },
    description: {
      fr: 'Gérer les partenaires.',
      en: 'Manage the partners and associations displayed on the homepage.',
    },
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
      label: { en: 'Name', fr: 'Nom' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: { en: 'Type', fr: 'Type' },
      defaultValue: 'partner',
      options: [
        { label: { en: 'Partner', fr: 'Partenaire' }, value: 'partner' },
        { label: { en: 'Association', fr: 'Association' }, value: 'association' },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Logo', fr: 'Logo' },
      admin: {
        description: { en: 'Partner logo image.', fr: 'Image du logo du partenaire.' },
      },
    },
    {
      name: 'href',
      type: 'text',
      label: { en: 'URL', fr: 'URL' },
      admin: {
        description: { en: 'Partner website link (optional).', fr: 'Lien du site web du partenaire (optionnel).' },
      },
    },
    {
      name: 'order',
      type: 'number',
      label: { en: 'Order', fr: 'Ordre' },
      defaultValue: 0,
      admin: {
        description: { en: 'Display order. Lower number appears first.', fr: "Ordre d'affichage. Le nombre le plus bas apparaît en premier." },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
