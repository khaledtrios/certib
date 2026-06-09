import type { CollectionConfig } from 'payload'

export const NewsletterSubscribers: CollectionConfig = {
  slug: 'newsletter-subscribers',
  labels: {
    singular: { fr: 'Abonné Newsletter', en: 'Newsletter Subscriber' },
    plural: { fr: 'Abonnés Newsletter', en: 'Newsletter Subscribers' },
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'createdAt'],
    group: { fr: 'Administration', en: 'Administration' },
    description: {
      fr: 'Gérer les abonnés à la newsletter.',
      en: 'Manage newsletter subscribers.',
    },
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  endpoints: [
    {
      path: '/unsubscribe/:token',
      method: 'patch',
      handler: async (req) => {
        const token = req.routeParams?.token as string | undefined

        if (!token) {
          return Response.json({ error: 'Token manquant.' }, { status: 400 })
        }

        const result = await req.payload.find({
          collection: 'newsletter-subscribers',
          where: { unsubscribeToken: { equals: token } },
          limit: 1,
          overrideAccess: true,
        })

        if (!result.docs.length) {
          return Response.json({ error: 'Token invalide.' }, { status: 404 })
        }

        const subscriber = result.docs[0]

        await req.payload.update({
          collection: 'newsletter-subscribers',
          id: subscriber.id,
          data: { status: 'unsubscribed' },
          overrideAccess: true,
        })

        return Response.json({ success: true })
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.unsubscribeToken = crypto.randomUUID()
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation !== 'create') return doc

        const frontendUrl = process.env.FRONTEND_URL || ''

        try {
          const { subject, html } = buildWelcomeEmail(
            doc.email as string,
            frontendUrl,
            doc.unsubscribeToken as string,
          )
          await req.payload.sendEmail({
            to: doc.email as string,
            subject,
            html,
          })
          req.payload.logger.info({ email: doc.email }, 'Welcome email sent to new subscriber')
        } catch (error) {
          req.payload.logger.error({ error, email: doc.email }, 'Failed to send welcome email')
        }

        return doc
      },
    ],
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      label: { fr: 'Adresse e-mail', en: 'Email address' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      label: { fr: 'Statut', en: 'Status' },
      options: [
        { label: { fr: 'Actif', en: 'Active' }, value: 'active' },
        { label: { fr: 'Désabonné', en: 'Unsubscribed' }, value: 'unsubscribed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'unsubscribeToken',
      type: 'text',
      unique: true,
      index: true,
      label: { fr: 'Token de désabonnement', en: 'Unsubscribe token' },
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: {
          fr: 'Généré automatiquement. Utilisé dans le lien de désabonnement.',
          en: 'Auto-generated. Used in the unsubscribe link.',
        },
      },
    },
  ],
  timestamps: true,
}

function buildWelcomeEmail(
  email: string,
  frontendUrl: string,
  unsubscribeToken: string,
): { subject: string; html: string } {
  const unsubscribeUrl = `${frontendUrl}/newsletter/unsubscribe?token=${unsubscribeToken}`

  return {
    subject: 'Bienvenue à notre newsletter | CRTIB',
    html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenue à notre newsletter</title>
</head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#1a365d;padding:24px 32px;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">CRTIB</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h2 style="color:#1a365d;font-size:20px;margin:0 0 16px;">Bienvenue à notre newsletter !</h2>
              <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 16px;">
                Merci de vous être abonné(e) à la newsletter du CRTIB. Vous recevrez désormais nos dernières actualités directement dans votre boîte mail.
              </p>
              <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0;">
                Si vous ne souhaitez plus recevoir nos e-mails, vous pouvez vous désabonner à tout moment via le lien ci-dessous.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;border-top:1px solid #e2e8f0;">
              <p style="color:#a0aec0;font-size:12px;margin:24px 0 0;">
                Vous recevez cet e-mail car vous vous êtes abonné(e) avec l'adresse ${email}.<br/>
                <a href="${unsubscribeUrl}" style="color:#a0aec0;">Se désabonner</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  }
}
