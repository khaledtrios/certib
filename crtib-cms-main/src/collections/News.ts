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
    defaultColumns: ['title', 'category', 'publishedAt', 'expiresAt', 'updatedAt'],
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
      return {
        and: [
          { _status: { equals: 'published' } },
          {
            or: [
              { expiresAt: { exists: false } },
              { expiresAt: { greater_than: new Date().toISOString() } },
            ],
          },
        ],
      }
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
        const existing = await req.payload.find({ collection: 'news', where: { and: andConditions }, limit: 1 })
        if (existing.docs.length > 0) return langId ? 'Ce slug est d\u00e9j\u00e0 utilis\u00e9 pour cette langue.' : 'Ce slug est d\u00e9j\u00e0 utilis\u00e9 (sans langue assign\u00e9e).'
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
          fr: 'Langue de cette actualit\u00e9. Laisser vide = fran\u00e7ais (par d\u00e9faut).',
          en: 'Language of this article. Leave empty = French (default).',
        },
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'actualite-categories',
      required: true,
      label: { fr: 'Catégorie', en: 'Category' },
      admin: { allowCreate: true },
      hooks: {
        beforeValidate: [
          async ({ value, req }) => {
            if (value) return value
            try {
              const result = await req.payload.find({
                collection: 'actualite-categories',
                where: { slug: { equals: 'actualite' } },
                limit: 1,
                depth: 0,
                overrideAccess: true,
              })
              return result.docs[0]?.id ?? value
            } catch {
              return value
            }
          },
        ],
      },
    },
    {
      name: 'rubrique',
      type: 'relationship',
      relationTo: 'actualite-rubriques',
      required: false,
      label: { fr: 'Rubrique', en: 'Section' },
      admin: {
        allowCreate: true,
        description: { fr: 'Rubrique du site à laquelle cette actualité appartient', en: 'Site section this news belongs to' },
      },
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
      name: 'expiresAt',
      type: 'date',
      label: { fr: "Date d'expiration", en: 'Expiry Date' },
      admin: {
        description: {
          fr: "Si renseignée, l'article n'apparaîtra plus sur le site après cette date.",
          en: 'If set, the article will no longer appear on the site after this date.',
        },
        date: {
          pickerAppearance: 'dayAndTime',
        },
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
                  {
                    name: 'caption',
                    type: 'text',
                    label: { en: 'Caption', fr: 'Légende' },
                  },
                  {
                    name: 'position',
                    type: 'select',
                    defaultValue: 'center',
                    options: ['left', 'center', 'right'],
                    label: { en: 'Position', fr: 'Position' },
                  },
                  {
                    name: 'width',
                    type: 'select',
                    defaultValue: '100',
                    options: [
                      { label: '25%', value: '25' },
                      { label: '33%', value: '33' },
                      { label: '50%', value: '50' },
                      { label: '75%', value: '75' },
                      { label: '100%', value: '100' },
                    ],
                    label: { en: 'Width', fr: 'Largeur' },
                  },
                  {
                    name: 'href',
                    type: 'text',
                    label: { en: 'Link URL', fr: 'URL du lien' },
                    admin: {
                      description: { en: 'Optional: make image clickable', fr: 'Optionnel : rendre l\'image cliquable' },
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
    beforeDuplicate: [async ({ data, req }) => {
      const base = typeof data.slug === 'string' ? data.slug : ''
      const langId: string | null = (data as any).language ?? null
      for (let suffix = 2; suffix < 200; suffix++) {
        const candidate = `${base}-${suffix}`
        const andConditions: any[] = [{ slug: { equals: candidate } }]
        if (langId) andConditions.push({ language: { equals: langId } })
        const existing = await req.payload.find({ collection: 'news', where: { and: andConditions }, limit: 1 })
        if (existing.docs.length === 0) return { ...data, slug: candidate }
      }
      return data
    }],
    afterChange: [revalidateNews, sendNewsletterOnPublish],
  },
}
