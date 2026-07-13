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
import { revalidatePage } from '../hooks/revalidateFrontend'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: { fr: 'Page', en: 'Page' },
    plural: { fr: 'Pages', en: 'Pages' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'language', 'slug', 'status', 'updatedAt'],
    group: { fr: 'Pages', en: 'Pages' },
    description: {
      fr: 'Gérer les pages du site.',
      en: 'Website pages, organized in a menu hierarchy.',
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { fr: 'Titre de la Page', en: 'Page Title' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      // unique removed: slug uniqueness is per (slug + language), not global.
      index: true,
      label: { fr: 'URL de la Page', en: 'Page URL' },
      admin: {
        description: {
          fr: 'URL amicale. Doit être unique par langue (/fr/mpu ET /de/mpu sont deux pages différentes).',
          en: 'Friendly URL. Must be unique per language (/fr/mpu and /de/mpu can coexist).',
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate: async (value: any, { data, id, req }: any) => {
        if (!value) return true

        // During a duplicate operation the beforeDuplicate hook handles slug
        // uniqueness. Skip validation here to avoid a false conflict.
        const reqUrl: string = req?.url ?? ''
        if (reqUrl.includes('/duplicate')) return true

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const langId: string | null = (data as any)?.language ?? null
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const andConditions: any[] = [
          { slug: { equals: value } },
          ...(id ? [{ id: { not_equals: id } }] : []),
        ]
        if (langId) {
          andConditions.push({ language: { equals: langId } })
        } else {
          andConditions.push({
            or: [{ language: { exists: false } }, { language: { equals: null } }],
          })
        }
        const existing = await req.payload.find({
          collection: 'pages',
          where: { and: andConditions },
          limit: 1,
        })
        if (existing.docs.length > 0) {
          return langId
            ? 'Ce slug est déjà utilisé pour cette langue.'
            : 'Ce slug est déjà utilisé (sans langue assignée).'
        }
        return true
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              // Gera slug automaticamente a partir do título
              return data.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remove acentos
                .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
                .replace(/\s+/g, '-') // Substitui espaços por hífens
                .replace(/--+/g, '-') // Remove hífens duplicados
                .trim()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      label: { en: 'Parent Page', fr: 'Page Parente' },
      admin: {
        description: {
          en: 'Leave blank if it is a root page',
          fr: 'Laissez vide pour une page racine',
        },
      },
    },
    {
      name: 'menuOrder',
      type: 'number',
      label: { en: 'Menu Order', fr: 'Ordre du Menu' },
      defaultValue: 100,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'isHidden',
      type: 'checkbox',
      label: { en: 'Hide from navigation', fr: 'Masquer de la navigation' },
      defaultValue: false,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'headerImage',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Header Image', fr: 'Image d\'en-tête' },
      admin: {
        description: {
          en: 'Optional image displayed in the page header (replaces the green dot).',
          fr: 'Image optionnelle affichée dans l\'en-tête de la page (remplace le point vert).',
        },
      },
    },
    {
      name: 'language',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'site-languages' as any,
      label: { fr: 'Langue de la page', en: 'Page language' },
      admin: {
        position: 'sidebar',
        description: {
          fr: 'Détermine le préfixe d\'URL (ex : /fr/ma-page, /de/ma-page). Toutes les langues ont un préfixe.',
          en: 'Sets the URL prefix (e.g. /fr/my-page, /de/my-page). All languages have a prefix.',
        },
      },
    },
    {
      name: 'linkedTranslations',
      type: 'array',
      label: { fr: 'Traductions liées', en: 'Linked translations' },
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'language',
          type: 'relationship',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          relationTo: 'site-languages' as any,
          required: true,
          label: { fr: 'Langue', en: 'Language' },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          label: { fr: 'Page liée', en: 'Linked page' },
          admin: {
            description: {
              fr: 'La page correspondante dans cette langue.',
              en: 'The corresponding page in this language.',
            },
          },
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      label: { fr: 'Sections de la page', en: 'Page Sections' },
      admin: {
        description: {
          fr: 'Constructeur de pages',
          en: 'Page builder: add, order, and configure each section.',
        },
      },
      blocks: [
        {
          slug: 'photoHeroCarousel',
          labels: { singular: 'Hero de Fotos', plural: 'Heros de Fotos' },
          fields: [
            {
              name: 'slides',
              type: 'array',
              label: 'Slides',
              minRows: 0,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Imagem',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Texto alternativo',
                },
                {
                  name: 'eyebrow',
                  type: 'text',
                  label: 'Linha superior (opcional)',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: { fr: 'Titre (optionnel)', en: 'Title (optional)' },
                },
              ],
            },
            {
              name: 'autoPlayMs',
              type: 'number',
              label: 'Intervalo (ms)',
              defaultValue: 5000,
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'newsSection',
          labels: {
            singular: { en: 'News Section', fr: "Section d'Actualités" },
            plural: { en: 'News Sections', fr: "Sections d'Actualités" },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Title', fr: 'Titre' },
              defaultValue: 'Actualités',
            },
            {
              name: 'maxItems',
              type: 'number',
              label: { en: 'Max Items', fr: "Maximum d'éléments" },
              defaultValue: 3,
            },
            {
              name: 'variant',
              type: 'select',
              label: { en: 'Visual Variant', fr: 'Variante visuelle' },
              defaultValue: 'default',
              options: [
                { label: { en: 'Default', fr: 'Défaut' }, value: 'default' },
                { label: { en: 'Block (Green BG)', fr: 'Bloc (fond vert)' }, value: 'block' },
              ],
            },
            {
              name: 'ctaHref',
              type: 'text',
              label: { en: 'CTA Link', fr: 'Lien CTA' },
              defaultValue: '/actualites',
            },
            {
              name: 'filterCategories',
              type: 'relationship',
              relationTo: 'actualite-categories',
              hasMany: true,
              required: false,
              label: { en: 'Filter by categories', fr: 'Filtrer par catégories' },
              admin: {
                description: {
                  en: 'Leave empty to show all categories.',
                  fr: 'Laisser vide = toutes les catégories.',
                },
              },
            },
            {
              name: 'filterRubriques',
              type: 'relationship',
              relationTo: 'actualite-rubriques',
              hasMany: true,
              required: false,
              label: { en: 'Filter by sections', fr: 'Filtrer par rubriques' },
              admin: {
                description: {
                  en: 'Leave empty to show all sections.',
                  fr: 'Laisser vide = toutes les rubriques.',
                },
              },
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'documentsSection',
          labels: {
            singular: { en: 'Documents Section', fr: 'Section de Documents' },
            plural: { en: 'Documents Sections', fr: 'Sections de Documents' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Title', fr: 'Titre' },
              defaultValue: 'Documents',
            },
            {
              name: 'items',
              type: 'array',
              label: { en: 'Documents / Videos', fr: 'Documents / Vidéos' },
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  label: { en: 'Type', fr: 'Type' },
                  options: [
                    { label: { en: 'PDF', fr: 'PDF' }, value: 'pdf' },
                    { label: { en: 'Video', fr: 'Vidéo' }, value: 'video' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: { en: 'Title', fr: 'Titre' },
                },
                {
                  name: 'triggerLabel',
                  type: 'text',
                  label: { en: 'Button Text (PDF)', fr: 'Texte du bouton (PDF)' },
                  defaultValue: 'Voir le PDF',
                },
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'PDF File', fr: 'Fichier PDF' },
                },
                {
                  name: 'videoUrl',
                  type: 'text',
                  label: { en: 'Video URL (Embed)', fr: 'URL de la vidéo (intégration)' },
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'calculator',
          labels: {
            singular: { en: 'Calculator', fr: 'Calculatrice' },
            plural: { en: 'Calculators', fr: 'Calculatrices' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Title', fr: 'Titre' },
              defaultValue: 'Calculateur',
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'clausesGrid',
          labels: {
            singular: { en: 'Clauses & CTG', fr: 'Clauses et CTG' },
            plural: { en: 'Clauses & CTG', fr: 'Clauses et CTG' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Section Title', fr: 'Titre de la section' },
            },
            {
              name: 'clauses',
              type: 'relationship',
              relationTo: 'clauses',
              hasMany: true,
              required: true,
              label: { en: 'Clauses / CTG', fr: 'Clauses / CTG' },
            },
            {
              name: 'redirectLabel',
              type: 'text',
              label: { en: 'Button Text (optional)', fr: 'Texte du bouton (optionnel)' },
            },
            {
              name: 'redirectHref',
              type: 'text',
              label: { en: 'Button Link (optional)', fr: 'Lien du bouton (optionnel)' },
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'dynamicGrid',
          labels: {
            singular: { en: 'Dynamic Table', fr: 'Tableau Dynamique' },
            plural: { en: 'Dynamic Tables', fr: 'Tableaux Dynamiques' },
          },
          fields: [
            { name: 'title', type: 'text', label: { en: 'Title', fr: 'Titre' } },
            {
              name: 'columns',
              type: 'array',
              label: { en: 'Columns', fr: 'Colonnes' },
              minRows: 0,
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  required: true,
                  label: { en: 'ID (no spaces)', fr: 'ID (sans espaces)' },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: { en: 'Header', fr: 'En-tête' },
                },
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  label: { en: 'Type', fr: 'Type' },
                  options: [
                    { label: { en: 'Text', fr: 'Texte' }, value: 'text' },
                    { label: { en: 'Number', fr: 'Numéro' }, value: 'number' },
                    { label: { en: 'Percentage', fr: 'Pourcentage' }, value: 'percentage' },
                    { label: { en: 'Date', fr: 'Date' }, value: 'date' },
                  ],
                },
                {
                  name: 'precision',
                  type: 'number',
                  label: { en: 'Decimals', fr: 'Décimales' },
                  defaultValue: 2,
                },
                {
                  name: 'currency',
                  type: 'text',
                  label: { en: 'Currency (e.g. €)', fr: 'Devise (ex: €)' },
                },
              ],
            },
            {
              name: 'rows',
              type: 'array',
              label: { en: 'Rows', fr: 'Lignes' },
              fields: [
                {
                  name: 'values',
                  type: 'json',
                  label: { en: 'Values { "colId": value }', fr: 'Valeurs { "colId": valeur }' },
                  required: true,
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'downloadGrid',
          labels: {
            singular: { en: 'Download Grid', fr: 'Téléchargements (Grille)' },
            plural: { en: 'Download Grids', fr: 'Grilles de Téléchargements' },
          },
          fields: [
            {
              name: 'documents',
              type: 'array',
              label: { en: 'Documents', fr: 'Documents' },
              minRows: 0,
              fields: [
                { name: 'numero', type: 'text', required: true, label: { en: 'N°', fr: 'N°' } },
                {
                  name: 'titulo',
                  type: 'text',
                  required: true,
                  label: { en: 'Title', fr: 'Titre' },
                },
                { name: 'data', type: 'date', required: true, label: { en: 'Date', fr: 'Date' } },
                { name: 'versao', type: 'text', label: { en: 'Version', fr: 'Version' } },
                {
                  name: 'pdf',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'PDF', fr: 'PDF' },
                },
                {
                  name: 'rtf',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'RTF', fr: 'RTF' },
                },
                {
                  name: 'doc',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'DOC', fr: 'DOC' },
                },
                {
                  name: 'xls',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'XLS', fr: 'XLS' },
                },
                {
                  name: 'zip',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'ZIP', fr: 'ZIP' },
                },
              ],
            },
            {
              name: 'pageSize',
              type: 'number',
              label: { en: 'Items per page', fr: 'Éléments par page' },
              defaultValue: 10,
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'downloadLinks',
          labels: {
            singular: { en: 'Download Links', fr: 'Liens de Téléchargement' },
            plural: { en: 'Download Links', fr: 'Liens de Téléchargement' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Title (optional)', fr: 'Titre (optionnel)' },
            },
            {
              name: 'items',
              type: 'array',
              label: { en: 'Items', fr: 'Éléments' },
              minRows: 0,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: { en: 'Label', fr: 'Libellé' },
                },
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'File', fr: 'Fichier' },
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'quickLinks',
          labels: {
            singular: { en: 'Quick Links', fr: 'Liens Rapides' },
            plural: { en: 'Sections Liens Rapides', fr: 'Sections Liens Rapides' },
          },
          fields: [
            {
              name: 'items',
              type: 'array',
              label: { en: 'Items', fr: 'Éléments' },
              minRows: 0,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: { en: 'Title', fr: 'Titre' },
                },
                { name: 'href', type: 'text', label: { en: 'Link', fr: 'Lien' } },
                {
                  name: 'icon',
                  type: 'text',
                  label: { en: 'Icon', fr: 'Icône' },
                  admin: {
                    components: {
                      Field: '/components/IconPickerField',
                    },
                  },
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'organogram',
          labels: {
            singular: { en: 'Organization Chart', fr: 'Organigramme' },
            plural: { en: 'Organization Charts', fr: 'Organigrammes' },
          },
          fields: [
            {
              name: 'members',
              type: 'array',
              label: { en: 'Members', fr: 'Membres' },
              fields: [
                { name: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom' } },
                { name: 'role', type: 'text', label: { en: 'Role / Function', fr: 'Rôle / Fonction' } },
                { name: 'department', type: 'text', label: { en: 'Department', fr: 'Département' } },
                { name: 'phone', type: 'text', label: { en: 'Phone', fr: 'Téléphone' } },
                { name: 'email', type: 'email', label: { en: 'Email', fr: 'Email' } },
                {
                  name: 'photo',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'Photo', fr: 'Photo' },
                },
                {
                  name: 'children',
                  type: 'array',
                  label: { en: 'Sub-members', fr: 'Sous-membres' },
                  fields: [
                    { name: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom' } },
                    { name: 'role', type: 'text', label: { en: 'Role / Function', fr: 'Rôle / Fonction' } },
                    { name: 'department', type: 'text', label: { en: 'Department', fr: 'Département' } },
                    { name: 'phone', type: 'text', label: { en: 'Phone', fr: 'Téléphone' } },
                    { name: 'email', type: 'email', label: { en: 'Email', fr: 'Email' } },
                    {
                      name: 'photo',
                      type: 'upload',
                      relationTo: 'media',
                      label: { en: 'Photo', fr: 'Photo' },
                    },
                  ],
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'timeline',
          labels: {
            singular: { en: 'Our History', fr: 'Notre Histoire' },
            plural: { en: 'Timelines', fr: 'Lignes du temps' },
          },
          fields: [
            {
              name: 'items',
              type: 'array',
              label: { en: 'Items', fr: 'Éléments' },
              minRows: 0,
              fields: [
                { name: 'year', type: 'text', required: true, label: { en: 'Year', fr: 'Année' } },
                {
                  name: 'title',
                  type: 'text',
                  label: { en: 'Title (optional)', fr: 'Titre (optionnel)' },
                },
              ],
            },
            {
              name: 'highlightLast',
              type: 'checkbox',
              label: { en: 'Highlight Last Item', fr: 'Mettre en évidence le dernier élément' },
              defaultValue: true,
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'partners',
          labels: {
            singular: { en: 'Partners Section', fr: 'Section de Partenaires' },
            plural: { en: 'Partners Sections', fr: 'Sections de Partenaires' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Partners Title', fr: 'Titre partenaires' },
              defaultValue: 'Partenaires',
            },
            {
              name: 'associationsTitle',
              type: 'text',
              label: { en: 'Associations Title', fr: 'Titre associations' },
              defaultValue: 'En association',
            },
            {
              name: 'partners',
              type: 'array',
              label: { en: 'Partners', fr: 'Partenaires' },
              fields: [
                { name: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom' } },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'Logo', fr: 'Logo' },
                },
                { name: 'href', type: 'text', label: { en: 'External Link', fr: 'Lien externe' } },
              ],
            },
            {
              name: 'associations',
              type: 'array',
              label: { en: 'Associations', fr: 'Associations' },
              fields: [
                { name: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom' } },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'Logo', fr: 'Logo' },
                },
                { name: 'href', type: 'text', label: { en: 'External Link', fr: 'Lien externe' } },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'videoCards',
          labels: {
            singular: { en: 'Video Gallery', fr: 'Galerie de Vidéos' },
            plural: { en: 'Video Galleries', fr: 'Galeries de Vidéos' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Section Title', fr: 'Titre de la section' },
            },
            {
              name: 'videos',
              type: 'array',
              label: { en: 'Videos', fr: 'Vidéos' },
              minRows: 0,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: { en: 'Video Title', fr: 'Titre de la vidéo' },
                },
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  label: { en: 'Type', fr: 'Type' },
                  options: [
                    {
                      label: { en: 'YouTube (embed URL)', fr: 'YouTube (embed URL)' },
                      value: 'youtube',
                    },
                    { label: { en: 'Internal File', fr: 'Fichier interne' }, value: 'internal' },
                  ],
                },
                {
                  name: 'src',
                  type: 'text',
                  required: true,
                  label: { en: 'Video URL (Embed)', fr: 'URL de la vidéo (intégration)' },
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'videoEmbed',
          labels: {
            singular: { en: 'Featured Video', fr: 'Grande Vidéo' },
            plural: { en: 'Featured Videos', fr: 'Grandes Vidéos' },
          },
          fields: [
            { name: 'title', type: 'text', label: { en: 'Video Title', fr: 'Titre de la vidéo' } },
            {
              name: 'type',
              type: 'select',
              required: true,
              label: { en: 'Type', fr: 'Type' },
              defaultValue: 'youtube',
              options: [
                { label: { en: 'YouTube', fr: 'YouTube' }, value: 'youtube' },
                {
                  label: { en: 'Internal File (Upload)', fr: 'Fichier interne (upload)' },
                  value: 'internal',
                },
              ],
            },
            {
              name: 'src',
              type: 'text',
              required: true,
              label: { en: 'YouTube URL or File Link', fr: 'URL YouTube ou lien du fichier' },
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'activityReports',
          labels: {
            singular: { en: 'Clickable Dates — Reports', fr: 'Dates Cliquables — Rapports' },
            plural: { en: 'Clickable Dates Sections', fr: 'Sections de Dates Cliquables' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Section Title', fr: 'Titre de la section' },
            },
            {
              name: 'reports',
              type: 'array',
              label: { en: 'Reports (Year -> PDF)', fr: 'Rapports (année → PDF)' },
              minRows: 0,
              fields: [
                {
                  name: 'year',
                  type: 'text',
                  required: true,
                  label: { en: 'Year (e.g. 2024)', fr: 'Année (ex: 2024)' },
                },
                {
                  name: 'pdf',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: { en: 'PDF File', fr: 'Fichier PDF' },
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'newsletterBlock',
          labels: {
            singular: { en: 'Newsletter', fr: 'Newsletter' },
            plural: { en: 'Newsletter Blocks', fr: 'Blocs Newsletter' },
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              label: { en: 'Heading', fr: 'Titre' },
            },
            {
              name: 'description',
              type: 'textarea',
              label: { en: 'Description', fr: 'Description' },
            },
            {
              name: 'buttonLabel',
              type: 'text',
              label: { en: 'Button label', fr: 'Texte du bouton' },
              defaultValue: "S'abonner",
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'formationsSection',
          labels: {
            singular: { en: 'Formations', fr: 'Formations' },
            plural: { en: 'Formations Sections', fr: 'Sections Formations' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { fr: 'Titre de la section', en: 'Section title' },
              defaultValue: 'Formations',
            },
            {
              name: 'category',
              type: 'select',
              label: { fr: 'Filtrer par catégorie', en: 'Filter by category' },
              admin: { description: { fr: 'Laisser vide pour afficher toutes les formations', en: 'Leave empty to show all formations' } },
              options: [
                { label: { fr: 'Toutes', en: 'All' }, value: 'all' },
                { label: { fr: 'Marchés publics', en: 'Public procurement' }, value: 'marches-publics' },
                { label: { fr: 'Performance énergétique', en: 'Energy performance' }, value: 'performance-energetique' },
                { label: { fr: 'Construction durable', en: 'Sustainable construction' }, value: 'construction-durable' },
                { label: { fr: 'Digitalisation / BIM', en: 'Digitalisation / BIM' }, value: 'digitalisation-bim' },
                { label: { fr: 'Autre', en: 'Other' }, value: 'autre' },
              ],
            },
            {
              name: 'showFilters',
              type: 'checkbox',
              label: { fr: 'Afficher les filtres de catégorie', en: 'Show category filters' },
              defaultValue: true,
            },
            {
              name: 'limit',
              type: 'number',
              label: { fr: 'Nombre max de formations affichées', en: 'Max formations to show' },
              defaultValue: 12,
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'contactBlock',
          labels: {
            singular: { en: 'Contact Page', fr: 'Page Contact' },
            plural: { en: 'Contact Pages', fr: 'Pages Contact' },
          },
          fields: [
            {
              name: 'phone',
              type: 'text',
              label: { fr: 'Téléphone', en: 'Phone' },
              defaultValue: '+352 24 52 73 11',
            },
            {
              name: 'email',
              type: 'email',
              label: { fr: 'Email', en: 'Email' },
              defaultValue: 'contact@crtib.lu',
            },
            {
              name: 'address',
              type: 'textarea',
              label: { fr: 'Adresse', en: 'Address' },
              defaultValue: '2, Circuit de la Foire Internationale\nL-1347 Luxembourg\nBP 1604 – L-1016 Luxembourg',
            },
            {
              name: 'hours',
              type: 'text',
              label: { fr: 'Horaires', en: 'Opening hours' },
              defaultValue: 'Lundi – Vendredi · 8h30 – 17h30',
            },
            {
              name: 'mapsEmbedUrl',
              type: 'text',
              label: { fr: 'URL Google Maps (embed)', en: 'Google Maps embed URL' },
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'textBlock',
          labels: {
            singular: { en: 'Text Block', fr: 'Bloc de texte' },
            plural: { en: 'Text Blocks', fr: 'Blocs de texte' },
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: { en: 'Content', fr: 'Contenu' },
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures.filter((f: any) => f.key !== 'upload'),
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
                  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  BoldFeature(),
                  ItalicFeature(),
                  UnderlineFeature(),
                  LinkFeature({}),
                  UnorderedListFeature(),
                  OrderedListFeature(),
                  BlockquoteFeature(),
                ],
              }),
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          slug: 'accordionBlock',
          labels: {
            singular: { en: 'Accordion', fr: 'Accordéon' },
            plural: { en: 'Accordions', fr: 'Accordéons' },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Section title (optional)', fr: 'Titre de section (optionnel)' },
            },
            {
              name: 'items',
              type: 'array',
              label: { en: 'Items', fr: 'Éléments' },
              minRows: 0,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: { en: 'Title', fr: 'Titre' },
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: { en: 'Content', fr: 'Contenu' },
                  editor: lexicalEditor({
                    features: ({ defaultFeatures }) => [
                      ...defaultFeatures.filter((f: any) => f.key !== 'upload'),
                      UploadFeature({
                        collections: {
                          media: {
                            fields: [
                              { name: 'caption', type: 'text', label: { en: 'Caption', fr: 'Légende' } },
                              { name: 'position', type: 'select', defaultValue: 'center', options: ['left', 'center', 'right'], label: { en: 'Position', fr: 'Position' } },
                              { name: 'width', type: 'select', defaultValue: '100', options: [
                                { label: '25%', value: '25' }, { label: '33%', value: '33' },
                                { label: '50%', value: '50' }, { label: '75%', value: '75' },
                                { label: '100%', value: '100' },
                              ], label: { en: 'Width', fr: 'Largeur' } },
                              { name: 'href', type: 'text', label: { en: 'Link URL', fr: 'URL du lien' } },
                            ],
                          },
                        },
                      }),
                      BoldFeature(),
                      ItalicFeature(),
                      UnderlineFeature(),
                      LinkFeature({}),
                      UnorderedListFeature(),
                      OrderedListFeature(),
                    ],
                  }),
                },
              ],
            },

            {
              name: 'visibility',
              type: 'group',
              label: { en: 'Visibility', fr: 'Visibilité' },
              admin: {
                description: {
                  en: 'Control on which devices this section is visible.',
                  fr: 'Contrôler sur quels appareils cette section est visible.',
                },
              },
              fields: [
                {
                  name: 'hideOnMobile',
                  type: 'checkbox',
                  label: { en: 'Hide on Mobile', fr: 'Masquer sur mobile' },
                  defaultValue: false,
                },
                {
                  name: 'hideOnDesktop',
                  type: 'checkbox',
                  label: { en: 'Hide on Desktop', fr: 'Masquer sur bureau' },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: { en: 'SEO', fr: 'SEO' },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: { en: 'Meta Title', fr: 'Méta Titre' },
          admin: {
            description: {
              en: 'Title for SEO (if empty, uses the page title)',
              fr: 'Titre pour le SEO (si vide, utilise le titre de la page)',
            },
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: { en: 'Meta Description', fr: 'Méta Description' },
          admin: {
            description: {
              en: 'Description for search engines',
              fr: 'Description pour les moteurs de recherche',
            },
          },
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          label: { en: 'Share Image', fr: 'Image de Partage' },
          admin: {
            description: {
              en: 'Image for when the page is shared on social networks',
              fr: 'Image pour le partage sur les réseaux sociaux',
            },
          },
        },
      ],
    },
  ],
  hooks: {
    // When duplicating a page, auto-append -2, -3, … to the slug so it's
    // unique within the same language and our validate() doesn't block it.
    beforeDuplicate: [
      async ({ data, req }) => {
        const base = typeof data.slug === 'string' ? data.slug : ''
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const langId: string | null = (data as any).language ?? null

        for (let suffix = 2; suffix < 200; suffix++) {
          const candidate = `${base}-${suffix}`
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const andConditions: any[] = [{ slug: { equals: candidate } }]
          if (langId) andConditions.push({ language: { equals: langId } })

          const existing = await req.payload.find({
            collection: 'pages',
            where: { and: andConditions },
            limit: 1,
          })

          if (existing.docs.length === 0) {
            return { ...data, slug: candidate }
          }
        }

        // Fallback: should never happen in practice
        return data
      },
    ],
    afterChange: [revalidatePage],
  },
}
