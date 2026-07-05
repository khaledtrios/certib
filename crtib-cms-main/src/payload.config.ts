import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { fr } from '@payloadcms/translations/languages/fr'
import { en } from '@payloadcms/translations/languages/en'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { News } from './collections/News'
import { Partners } from './collections/Partners'
import { Videos } from './collections/Videos'
import { ActivityReports } from './collections/ActivityReports'
import { TimelineItems } from './collections/TimelineItems'
import { Clauses } from './collections/Clauses'
import { NewsletterSubscribers } from './collections/NewsletterSubscribers'
import { Formations } from './collections/Formations'
import { FormationCategories } from './collections/FormationCategories'
import { ActualiteCategories } from './collections/ActualiteCategories'
import { ActualiteRubriques } from './collections/ActualiteRubriques'
import { SiteLanguages } from './collections/SiteLanguages'
import { FooterSettings } from './globals/FooterSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'light',
    avatar: { Component: '/components/HeaderAvatarDropdown' },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta: {
      titleSuffix: '– CRTI-B',
      favicon: '/icon.svg',
      ogImage: '/logo.svg',
    } as any,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/Logo',
        Icon: '/components/Icon',
      },
      beforeNavLinks: ['/components/NavDashboardLink'],
      afterNav: ['/components/NavUserFooter'],
      logout: {
        Button: '/components/NavLogoutHidden',
      },
      beforeLogin: ['/components/BeforeLogin'],
      actions: ['/components/HeaderSiteButton'],
      views: {
        dashboard: {
          Component: '/components/Dashboard',
        },
        pageOrder: {
          Component: '/components/PageOrderView',
          path: '/page-order',
        },
      },
    },
  },
  i18n: {
    supportedLanguages: { fr, en },
    fallbackLanguage: 'fr',
  },
  collections: [
    Users,
    Media,
    Pages,
    News,
    ActualiteCategories,
    ActualiteRubriques,
    Formations,
    FormationCategories,
    Partners,
    Videos,
    ActivityReports,
    TimelineItems,
    Clauses,
    NewsletterSubscribers,
    SiteLanguages,
  ],
  email: process.env.SMTP_HOST
    ? nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'no-reply@crtib.org',
        defaultFromName: process.env.SMTP_FROM_NAME || 'CRTIB',
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER || '',
            pass: process.env.SMTP_PASS || '',
          },
        },
      })
    : undefined,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  globals: [FooterSettings],
  plugins: [],
})
