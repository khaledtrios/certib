import type { CollectionConfig } from 'payload'
import { revalidateHome } from '../hooks/revalidateHome'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: {
    singular: { fr: 'Vidéo', en: 'Video' },
    plural: { fr: 'Vidéos', en: 'Videos' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'order', 'updatedAt'],
    group: { fr: 'Multimédia', en: 'Multimedia' },
    description: { fr: 'Gérer les vidéos.', en: 'Manage the videos displayed on the home page.' },
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { fr: 'Titre', en: 'Title' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: { en: 'Type', fr: 'Type' },
      defaultValue: 'youtube',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: { en: 'Internal Video', fr: 'Vidéo interne' }, value: 'internal' },
      ],
    },
    {
      name: 'src',
      type: 'text',
      required: true,
      label: { en: 'URL / Path', fr: 'URL / Chemin' },
      admin: {
        description: { 
          en: 'For YouTube: embed URL (e.g. https://www.youtube.com/embed/ID). For internal: file path (e.g. /videos/my-video.mp4).', 
          fr: "Pour YouTube : URL d'intégration (ex: https://www.youtube.com/embed/ID). Pour interne : chemin du fichier (ex: /videos/ma-video.mp4)." 
        },
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
