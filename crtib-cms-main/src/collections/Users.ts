import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: { fr: 'Utilisateur', en: 'User' },
    plural: { fr: 'Utilisateurs', en: 'Users' },
  },
  admin: {
    useAsTitle: 'email',
    group: { fr: 'Administration', en: 'Administration' },
    description: {
      fr: 'Gestion des utilisateurs et des permissions.',
      en: 'Manage users and access permissions.',
    },
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
