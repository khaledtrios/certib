import type { CollectionAfterChangeHook } from 'payload'
import type { News } from '../payload-types'
import { buildNewsletterEmail } from '../email/newsletterTemplate'

export const sendNewsletterOnPublish: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
  req,
  context,
}) => {
  // Prevent re-entry from the newsletterSentAt update below
  if (context?.skipNewsletterHook) return doc

  const isNowPublished = doc._status === 'published' && previousDoc?._status !== 'published'

  if (!isNowPublished) return doc
  if (doc.newsletterSentAt) return doc

  const frontendUrl = process.env.FRONTEND_URL || ''

  try {
    const subscribers = await req.payload.find({
      collection: 'newsletter-subscribers',
      where: { status: { equals: 'active' } },
      limit: 0,
      overrideAccess: true,
    })

    if (!subscribers.docs.length) {
      req.payload.logger.info('No active newsletter subscribers found. Skipping send.')
      return doc
    }

    req.payload.logger.info(
      { count: subscribers.docs.length, newsId: doc.id },
      'Sending newsletter to subscribers',
    )

    let sent = 0
    let failed = 0

    for (const subscriber of subscribers.docs) {
      try {
        const { subject, html } = buildNewsletterEmail(
          doc as News,
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

    req.payload.logger.info({ sent, failed, newsId: doc.id }, 'Newsletter send complete')

    // Record send timestamp to prevent duplicate sends
    await req.payload.update({
      collection: 'news',
      id: doc.id,
      data: { newsletterSentAt: new Date().toISOString() },
      req,
      context: { ...context, skipNewsletterHook: true },
    })
  } catch (error) {
    req.payload.logger.error({ error, newsId: doc.id }, 'Error in sendNewsletterOnPublish hook')
  }

  return doc
}
