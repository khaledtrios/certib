import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
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
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
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
      unique: true,
      index: true,
      label: { fr: 'URL de la Page', en: 'Page URL' },
      admin: {
        description: {
          fr: 'URL amicale pour la page',
          en: 'Friendly URL for the page (e.g. our-history)',
        },
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
        description: {
          en: 'Position in the menu (lowest number appears first)',
          fr: 'Position dans le menu (le numéro le plus bas apparaît en premier)',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'icon',
      type: 'select',
      label: { en: 'Menu Icon', fr: 'Icône du Menu' },
      admin: {
        description: {
          en: 'Icon displayed next to the title in the navigation menu',
          fr: 'Icône affichée à côté du titre dans le menu de navigation',
        },
      },
      options: [
        { label: { en: 'Person', fr: 'Personne' }, value: 'user' },
        { label: { en: 'Document', fr: 'Document' }, value: 'document' },
        { label: { en: 'Globe / Digitalization', fr: 'Globe / Numérisation' }, value: 'globe' },
        { label: { en: 'Leaf / Sustainability', fr: 'Feuille / Durabilité' }, value: 'leaf' },
        { label: { en: 'Calendar / Events', fr: 'Calendrier / Événements' }, value: 'calendar' },
        { label: { en: 'Building', fr: 'Bâtiment' }, value: 'building' },
        { label: { en: 'Book / Library', fr: 'Livre / Bibliothèque' }, value: 'book' },
        {
          label: { en: 'Graduation / Education', fr: 'Graduation / Formation' },
          value: 'graduation',
        },
        { label: { en: 'External Link', fr: 'Lien Externe' }, value: 'external-link' },
        { label: { en: 'Star', fr: 'Étoile' }, value: 'star' },
        { label: { en: 'Gear', fr: 'Engrenage' }, value: 'settings' },
        { label: { en: 'List', fr: 'Liste' }, value: 'list' },
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
              minRows: 1,
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
                  required: true,
                  label: 'Título',
                },
              ],
            },
            {
              name: 'autoPlayMs',
              type: 'number',
              label: 'Intervalo (ms)',
              defaultValue: 5000,
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
              minRows: 1,
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
              minRows: 1,
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
              minRows: 1,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
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
              minRows: 1,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: { en: 'Title', fr: 'Titre' },
                },
                { name: 'href', type: 'text', required: true, label: { en: 'Link', fr: 'Lien' } },
                {
                  name: 'icon',
                  type: 'text',
                  label: { en: 'Icon (emoji or symbol)', fr: 'Icône (emoji ou symbole)' },
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
              name: 'root',
              type: 'group',
              label: { en: 'Root Node', fr: 'Nœud racine' },
              fields: [
                { name: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom' } },
                { name: 'role', type: 'text', label: { en: 'Role', fr: 'Rôle' } },
                {
                  name: 'photo',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'Photo', fr: 'Photo' },
                },
                {
                  name: 'children',
                  type: 'array',
                  label: { en: 'Direct Reports', fr: 'Subordonnés directs' },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      label: { en: 'Name', fr: 'Nom' },
                    },
                    { name: 'role', type: 'text', label: { en: 'Role', fr: 'Rôle' } },
                    {
                      name: 'photo',
                      type: 'upload',
                      relationTo: 'media',
                      label: { en: 'Photo', fr: 'Photo' },
                    },
                    {
                      name: 'children',
                      type: 'array',
                      label: { en: 'Sub-reports', fr: 'Sous-subordonnés' },
                      fields: [
                        {
                          name: 'name',
                          type: 'text',
                          required: true,
                          label: { en: 'Name', fr: 'Nom' },
                        },
                        { name: 'role', type: 'text', label: { en: 'Role', fr: 'Rôle' } },
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
              minRows: 1,
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
              minRows: 1,
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
              minRows: 1,
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
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: { fr: 'Contenu', en: 'Content' },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
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
                    name: 'href',
                    type: 'text',
                    label: { en: 'Link URL', fr: 'URL du lien' },
                    admin: {
                      description: {
                        en: 'Optional: wrap the image in a clickable link',
                        fr: "Optionnel : rendre l'image cliquable",
                      },
                    },
                  },
                ],
              },
            },
          }),
          BlocksFeature({
            blocks: [
              {
                slug: 'callout',
                labels: {
                  singular: { en: 'Callout', fr: 'Mise en évidence' },
                  plural: { en: 'Callouts', fr: 'Mises en évidence' },
                },
                fields: [
                  {
                    name: 'type',
                    type: 'select',
                    defaultValue: 'info',
                    options: [
                      { label: { en: 'Info', fr: 'Info' }, value: 'info' },
                      { label: { en: 'Warning', fr: 'Avertissement' }, value: 'warning' },
                      { label: { en: 'Success', fr: 'Succès' }, value: 'success' },
                      { label: { en: 'Error', fr: 'Erreur' }, value: 'error' },
                    ],
                    label: { en: 'Type', fr: 'Type' },
                  },
                  {
                    name: 'content',
                    type: 'richText',
                    editor: lexicalEditor({}),
                    required: true,
                    label: { en: 'Conteúdo', fr: 'Conteúdo' },
                  },
                ],
              },
              {
                slug: 'accordion',
                labels: {
                  singular: { en: 'Accordion', fr: 'Accordion' },
                  plural: { en: 'Accordions', fr: 'Accordions' },
                },
                fields: [
                  {
                    name: 'items',
                    type: 'array',
                    label: { en: 'Accordion Items', fr: "Éléments de l'accordéon" },
                    required: true,
                    minRows: 1,
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
                        editor: lexicalEditor({}),
                        required: true,
                        label: { en: 'Content', fr: 'Contenu' },
                      },
                    ],
                  },
                ],
              },
              {
                slug: 'photoHeroCarousel',
                labels: {
                  singular: 'Hero de Fotos',
                  plural: 'Heros de Fotos',
                },
                fields: [
                  {
                    name: 'slides',
                    type: 'array',
                    label: 'Slides',
                    minRows: 1,
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
                        required: true,
                        label: 'Título',
                      },
                    ],
                  },
                  {
                    name: 'autoPlayMs',
                    type: 'number',
                    label: 'Intervalo (ms)',
                    defaultValue: 5000,
                  },
                ],
              },
              {
                slug: 'videoCards',
                labels: {
                  singular: { en: 'Video Section', fr: 'Section de Vidéos' },
                  plural: { en: 'Video Sections', fr: 'Sections de Vidéos' },
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
                    label: { en: 'Videos', fr: 'Videos' },
                    minRows: 1,
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
                          {
                            label: { en: 'Internal File', fr: 'Fichier interne' },
                            value: 'internal',
                          },
                        ],
                      },
                      {
                        name: 'src',
                        type: 'text',
                        required: true,
                        label: { en: 'Video URL or Embed', fr: 'URL de la vidéo ou intégration' },
                      },
                    ],
                  },
                ],
              },
              {
                slug: 'activityReports',
                labels: {
                  singular: { en: 'Activity Report', fr: "Rapport d'Activité" },
                  plural: { en: 'Activity Reports', fr: "Rapports d'Activité" },
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
                    label: { en: 'Reports', fr: 'Rapports' },
                    minRows: 1,
                    fields: [
                      {
                        name: 'year',
                        type: 'text',
                        required: true,
                        label: { en: 'Year', fr: 'Année' },
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
                    label: { en: 'Partners Title', fr: 'Titre des partenaires' },
                    defaultValue: 'Partenaires',
                  },
                  {
                    name: 'associationsTitle',
                    type: 'text',
                    label: { en: 'Associations Title', fr: 'Titre des associations' },
                    defaultValue: 'En association',
                  },
                  {
                    name: 'partners',
                    type: 'array',
                    label: { en: 'Partners', fr: 'Partenaires' },
                    fields: [
                      {
                        name: 'name',
                        type: 'text',
                        required: true,
                        label: { en: 'Name', fr: 'Nom' },
                      },
                      {
                        name: 'logo',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'Logo', fr: 'Logo' },
                      },
                      {
                        name: 'href',
                        type: 'text',
                        label: { en: 'External Link', fr: 'Lien externe' },
                      },
                    ],
                  },
                  {
                    name: 'associations',
                    type: 'array',
                    label: { en: 'Associations', fr: 'Associations' },
                    fields: [
                      {
                        name: 'name',
                        type: 'text',
                        required: true,
                        label: { en: 'Name', fr: 'Nom' },
                      },
                      {
                        name: 'logo',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'Logo', fr: 'Logo' },
                      },
                      {
                        name: 'href',
                        type: 'text',
                        label: { en: 'External Link', fr: 'Lien externe' },
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
                    defaultValue: 'AUTRES ACTUALITES',
                  },
                  {
                    name: 'maxItems',
                    type: 'number',
                    label: { en: 'Max Items', fr: "Maximum d'éléments" },
                    defaultValue: 2,
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
                    label: { en: 'CTA Button Link', fr: 'Lien du bouton CTA' },
                    defaultValue: '/actualites',
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
                    name: 'options',
                    type: 'array',
                    label: { en: 'Select Options', fr: 'Options du select' },
                    fields: [
                      {
                        name: 'label',
                        type: 'text',
                        required: true,
                        label: { en: 'Option', fr: 'Option' },
                      },
                    ],
                  },
                  {
                    name: 'results',
                    type: 'array',
                    label: { en: 'Fixed Results', fr: 'Résultats fixes' },
                    fields: [
                      {
                        name: 'label',
                        type: 'text',
                        required: true,
                        label: { en: 'Description', fr: 'Description' },
                      },
                      {
                        name: 'value',
                        type: 'text',
                        required: true,
                        label: { en: 'Value', fr: 'Valeur' },
                      },
                    ],
                  },
                ],
              },
              {
                slug: 'htmlBlock',
                labels: {
                  singular: { en: 'Custom HTML', fr: 'HTML personnalisé' },
                  plural: { en: 'Custom HTML', fr: 'HTML personnalisés' },
                },
                fields: [
                  {
                    name: 'html',
                    type: 'textarea',
                    required: true,
                    label: { en: 'HTML', fr: 'HTML' },
                    admin: {
                      description: {
                        en: 'Custom HTML for special components',
                        fr: 'HTML personnalisé pour les composants spéciaux',
                      },
                    },
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
                    minRows: 1,
                    fields: [
                      {
                        name: 'year',
                        type: 'text',
                        required: true,
                        label: { en: 'Year', fr: 'Année' },
                      },
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
                    label: {
                      en: 'Highlight Last Item',
                      fr: 'Mettre en évidence le dernier élément',
                    },
                    defaultValue: true,
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
                    minRows: 1,
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
                        label: {
                          en: 'Values (JSON: { "colId": value })',
                          fr: 'Valeurs (JSON: { "colId": valeur })',
                        },
                        required: true,
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
                    minRows: 1,
                    fields: [
                      {
                        name: 'numero',
                        type: 'text',
                        required: true,
                        label: { en: 'N°', fr: 'N°' },
                      },
                      {
                        name: 'titulo',
                        type: 'text',
                        required: true,
                        label: { en: 'Title', fr: 'Titre' },
                      },
                      {
                        name: 'data',
                        type: 'date',
                        required: true,
                        label: { en: 'Date', fr: 'Date' },
                      },
                      { name: 'versao', type: 'text', label: { en: 'Version', fr: 'Version' } },
                      {
                        name: 'pdf',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'PDF File', fr: 'Fichier PDF' },
                      },
                      {
                        name: 'rtf',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'RTF File', fr: 'Fichier RTF' },
                      },
                      {
                        name: 'doc',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'DOC File', fr: 'Fichier DOC' },
                      },
                      {
                        name: 'xls',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'XLS File', fr: 'Fichier XLS' },
                      },
                      {
                        name: 'zip',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'ZIP File', fr: 'Fichier ZIP' },
                      },
                    ],
                  },
                  {
                    name: 'pageSize',
                    type: 'number',
                    label: { en: 'Items per page', fr: 'Éléments par page' },
                    defaultValue: 10,
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
                    minRows: 1,
                    fields: [
                      {
                        name: 'label',
                        type: 'text',
                        required: true,
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
                    name: 'root',
                    type: 'group',
                    label: { en: 'Root Node', fr: 'Nœud racine' },
                    fields: [
                      {
                        name: 'name',
                        type: 'text',
                        required: true,
                        label: { en: 'Name', fr: 'Nom' },
                      },
                      { name: 'role', type: 'text', label: { en: 'Role', fr: 'Rôle' } },
                      {
                        name: 'photo',
                        type: 'upload',
                        relationTo: 'media',
                        label: { en: 'Photo', fr: 'Photo' },
                      },
                      {
                        name: 'children',
                        type: 'array',
                        label: { en: 'Direct Reports', fr: 'Subordonnés directs' },
                        fields: [
                          {
                            name: 'name',
                            type: 'text',
                            required: true,
                            label: { en: 'Name', fr: 'Nom' },
                          },
                          { name: 'role', type: 'text', label: { en: 'Role', fr: 'Rôle' } },
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
                ],
              },
            ],
          }),
        ],
      }),
      required: false,
      admin: {
        description: {
          en: 'Content with text, images and mixed custom components',
          fr: 'Contenu avec texte, images et composants personnalisés mélangés',
        },
      },
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
    afterChange: [revalidatePage],
  },
}
