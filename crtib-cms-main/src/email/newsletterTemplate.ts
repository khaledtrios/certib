import type { News, Media } from '../payload-types'

export function buildNewsletterEmail(
  news: News,
  unsubscribeToken: string,
  frontendUrl: string,
): { subject: string; html: string } {
  const articleUrl = `${frontendUrl}/actualites/${news.slug}`
  const unsubscribeUrl = `${frontendUrl}/newsletter/unsubscribe?token=${unsubscribeToken}`

  const imageUrl =
    news.featuredImage && typeof news.featuredImage === 'object'
      ? `${frontendUrl}/api/media/file/${(news.featuredImage as Media).filename}`
      : null

  const categoryLabel: Record<string, string> = {
    actualite: 'Actualité',
    communique: 'Communiqué',
    evenement: 'Événement',
  }

  const category = categoryLabel[news.category] ?? 'Actualité'

  return {
    subject: `[CRTIB] ${news.title}`,
    html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${news.title}</title>
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
          ${
            imageUrl
              ? `
          <tr>
            <td style="padding:0;">
              <img src="${imageUrl}" alt="${news.title}" width="600" style="display:block;width:100%;max-height:300px;object-fit:cover;" />
            </td>
          </tr>`
              : ''
          }
          <tr>
            <td style="padding:32px 32px 16px;">
              <p style="margin:0 0 8px;font-size:12px;color:#718096;text-transform:uppercase;letter-spacing:0.05em;">${category}</p>
              <h2 style="color:#1a365d;font-size:22px;margin:0 0 16px;line-height:1.3;">${news.title}</h2>
              ${news.excerpt ? `<p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 24px;">${news.excerpt}</p>` : ''}
              <a href="${articleUrl}" style="display:inline-block;background-color:#1a365d;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:6px;font-size:14px;font-weight:600;">Lire la suite →</a>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 32px;border-top:1px solid #e2e8f0;margin-top:24px;">
              <p style="color:#a0aec0;font-size:12px;margin:0;">
                Vous recevez cet e-mail car vous êtes abonné(e) à la newsletter du CRTIB.<br/>
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
