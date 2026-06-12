import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  LinkFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BlockquoteFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { revalidateNews } from '../hooks/revalidateNews'
import { sendNewsletterOnPublish } from '../hooks/sendNewsletterOnPublish'
import { buildNewsletterEmail } from '../email/newsletterTemplate'

export const News: CollectionConfig = {
  slug: 'news',
  endpoints: [
    {
      path: '/:id/send-newsletter',
      method: 'post',
      handler: async (req) => {
        if (!req.user) {
          return Response.json({ error: 'Non autorisé.' }, { status: 401 })
        }

        const newsId = req.routeParams?.id as string | undefined
        if (!newsId) {
          return Response.json({ error: 'ID manquant.' }, { status: 400 })
        }

        const frontendUrl = process.env.FRONTEND_URL || ''

        const newsDoc = await req.payload.findByID({
          collection: 'news',
          id: newsId,
          overrideAccess: false,
          user: req.user,
        })

        const subscribers = await req.payload.find({
          collection: 'newsletter-subscribers',
          where: { status: { equals: 'active' } },
          limit: 0,
          overrideAccess: true,
        })

        let sent = 0
        let failed = 0

        for (const subscriber of subscribers.docs) {
          try {
            const { subject, html } = buildNewsletterEmail(
              newsDoc,
              subscriber.unsubscribeToken as string,
              frontendUrl,
            )
            await req.payload.sendEmail({
              to: subscriber.email as string,
              subject,
              html,
            })
            sent++
          } catch (error) {
            failed++
            req.payload.logger.error(
              { error, email: subscriber.email },
              'Failed to send newsletter to subscriber',
            )
          }
        }

        await req.payload.update({
          collection: 'news',
          id: newsId,
          data: { newsletterSentAt: new Date().toISOString() },
          overrideAccess: true,
          context: { skipNewsletterHook: true },
        })

        req.payload.logger.info({ sent, failed, newsId }, 'Manual newsletter send complete')

        return Response.json({ sent, failed })
      },
    },
  ],
  labels: {
    singular: { fr: 'Actualité', en: 'News' },
    plural: { fr: 'Actualités', en: 'News' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'updatedAt'],
    group: { fr: 'Actualités', en: 'News' },
    description: {
      fr: 'Gérer les actualités et les communiqués.',
      en: 'Manage the news and press releases displayed on the website.',
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { _status: { equals: 'published' } }
    },
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: { fr: "URL de l'actualité", en: 'News URL' },
      admin: {
        description: {
          fr: 'Généré automatiquement à partir du titre',
          en: 'Automatically generated from the title',
        },
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return (data.title as string)
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
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
      name: 'category',
      type: 'select',
      required: true,
      label: { en: 'Category', fr: 'Catégorie' },
      defaultValue: 'actualite',
      options: [
        { label: { en: 'News', fr: 'Actualité' }, value: 'actualite' },
        { label: { en: 'Press Release', fr: 'Communiqué' }, value: 'communique' },
        { label: { en: 'Event', fr: 'Événement' }, value: 'evenement' },
      ],
    },
    {
      name: 'rubrique',
      type: 'select',
      label: { en: 'Section', fr: 'Rubrique' },
      admin: {
        description: { fr: 'Rubrique du site à laquelle cette actualité appartient', en: 'Site section this news belongs to' },
      },
      options: [
        { label: { fr: 'Marchés publics', en: 'Public procurement' }, value: 'marches-publics' },
        { label: { fr: 'Performance énergétique', en: 'Energy performance' }, value: 'performance-energetique' },
        { label: { fr: 'Construction durable', en: 'Sustainable construction' }, value: 'construction-durable' },
        { label: { fr: 'Digitalisation / BIM', en: 'Digitalisation / BIM' }, value: 'digitalisation-bim' },
        { label: { fr: 'Général', en: 'General' }, value: 'general' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: { en: 'Publish Date', fr: 'Date de publication' },
      admin: {
        description: {
          en: 'Date displayed to the reader. Automatically filled on creation.',
          fr: 'Date affichée au lecteur. Remplie automatiquement à la création.',
        },
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ value, operation }) => {
            if (operation === 'create' && !value) return new Date()
            return value
          },
        ],
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: { en: 'Featured Image', fr: 'Image en vedette' },
      admin: {
        description: {
          en: 'Used on the listing card and at the top of the news.',
          fr: "Utilisée sur la carte de liste et en haut de l'actualité.",
        },
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: { fr: 'Résumé', en: 'Excerpt' },
      admin: {
        description: { fr: 'Texte court', en: 'Short text' },
        rows: 3,
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: { fr: 'Contenu', en: 'Content' },
      editor: lexicalEditor({
        features: () => [
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          LinkFeature({}),
          UnorderedListFeature(),
          OrderedListFeature(),
          BlockquoteFeature(),
          UploadFeature({
            collections: {
              media: {
                fields: [
                  { name: 'caption', type: 'text', label: 'Legenda' },
                  {
                    name: 'position',
                    type: 'select',
                    defaultValue: 'center',
                    options: ['left', 'center', 'right'],
                    label: 'Posição',
                  },
                  {
                    name: 'href',
                    type: 'text',
                    label: 'URL do link',
                    admin: {
                      description: 'Opcional: tornar a imagem clicável',
                    },
                  },
                ],
              },
            },
          }),
        ],
      }),
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: { en: 'Meta Title', fr: 'Méta Titre' },
          admin: {
            description: {
              en: 'If empty, uses the news title.',
              fr: "Si vide, utilise le titre de l'actualité.",
            },
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: { en: 'Meta Description', fr: 'Méta Description' },
          admin: {
            description: { en: 'If empty, uses the excerpt.', fr: 'Si vide, utilise le résumé.' },
          },
        },
      ],
    },
    {
      name: 'newsletterSentAt',
      type: 'date',
      label: { fr: 'Newsletter envoyée le', en: 'Newsletter sent at' },
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: {
          fr: 'Date du dernier envoi de la newsletter pour cette actualité.',
          en: 'Date of the last newsletter send for this article.',
        },
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'sendNewsletterAction',
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          Field: '/components/SendNewsletterButton',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateNews, sendNewsletterOnPublish],
  },
}
