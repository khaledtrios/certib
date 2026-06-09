import type { CollectionAfterChangeHook } from 'payload'

/**
 * Hook para revalidar a home page no frontend após mudanças em
 * collections que aparecem na página inicial (Partners, Videos, ActivityReports, TimelineItems).
 */
export const revalidateHome: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  const { payload } = req

  const frontendUrl = process.env.FRONTEND_URL
  const revalidateSecret = process.env.REVALIDATE_SECRET

  if (!frontendUrl || !revalidateSecret) {
    payload.logger.warn(
      'Frontend revalidation not configured. Set FRONTEND_URL and REVALIDATE_SECRET.',
    )
    return doc
  }

  if (operation === 'create' || operation === 'update') {
    try {
      payload.logger.info('Revalidating home page: /')

      const response = await fetch(`${frontendUrl}/api/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: revalidateSecret, path: '/' }),
      })

      if (!response.ok) {
        throw new Error(`Revalidation failed: ${response.statusText}`)
      }

      const result = await response.json()
      payload.logger.info({ result }, 'Successfully revalidated home page')
    } catch (error) {
      payload.logger.error({ error }, 'Error revalidating home page')
    }
  }

  return doc
}
