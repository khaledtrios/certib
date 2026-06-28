import type { GlobalConfig } from 'payload'

export const FooterSettings: GlobalConfig = {
  slug: 'footer-settings',
  label: { en: 'Footer Settings', fr: 'Paramètres du pied de page' },
  admin: {
    group: { en: 'Settings', fr: 'Paramètres' },
    description: {
      en: 'Manage the footer content (contact info, links, description).',
      fr: 'Gérer le contenu du pied de page (coordonnées, liens, description).',
    },
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: { en: 'Description', fr: 'Description' },
      defaultValue: 'Centre de Ressources des Technologies et de l\'Innovation pour le Bâtiment',
      admin: {
        description: { en: 'Short text displayed under the logo', fr: 'Texte court affiché sous le logo' },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: { en: 'Phone', fr: 'Téléphone' },
          defaultValue: '+352 24 52 73 11',
          admin: { width: '50%' },
        },
        {
          name: 'email',
          type: 'email',
          label: { en: 'Email', fr: 'Email' },
          defaultValue: 'contact@crtib.lu',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'address',
      type: 'textarea',
      label: { en: 'Address', fr: 'Adresse' },
      defaultValue: '2, Circuit de la Foire Internationale\nL-1347 Luxembourg',
      admin: {
        description: { en: 'Physical address (line breaks supported)', fr: 'Adresse physique (sauts de ligne supportés)' },
      },
    },
    {
      name: 'addressUrl',
      type: 'text',
      label: { en: 'Google Maps URL', fr: 'URL Google Maps' },
      defaultValue: 'https://maps.google.com/?q=2+Circuit+de+la+Foire+Internationale+L-1347+Luxembourg',
    },
    {
      name: 'links',
      type: 'array',
      label: { en: 'Useful Links', fr: 'Liens utiles' },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: { en: 'Label', fr: 'Libellé' },
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: { en: 'URL', fr: 'URL' },
        },
      ],
      defaultValue: [
        { label: 'Contact', href: '/contact' },
        { label: 'Formations', href: '/toutes-les-formations' },
        { label: 'Mentions légales', href: '/mentions-legales' },
      ],
    },
    {
      name: 'copyrightName',
      type: 'text',
      label: { en: 'Copyright Name', fr: 'Nom du copyright' },
      defaultValue: 'CRTI-B',
      admin: {
        description: { en: 'Displayed as "© 2025 [name] – Tous droits réservés"', fr: 'Affiché comme "© 2025 [nom] – Tous droits réservés"' },
      },
    },
  ],
}
