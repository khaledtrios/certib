import type { CollectionAfterChangeHook } from 'payload'

/**
 * Hook para revalidar notícias no frontend após mudanças no CMS.
 * Revalida a página de detalhe da notícia e a listagem /actualites.
 */
export const revalidateNews: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
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
    const slug = doc.slug || ''
    const pathsToRevalidate = ['/actualites', `/actualites/${slug}`]

    await Promise.allSettled(
      pathsToRevalidate.map(async (path) => {
        try {
          payload.logger.info(`Revalidating news path: ${path}`)
          const response = await fetch(`${frontendUrl}/api/revalidate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret: revalidateSecret, path }),
          })
          if (!response.ok) {
            throw new Error(`Revalidation failed: ${response.statusText}`)
          }
          const result = await response.json()
          payload.logger.info({ path, result }, 'Successfully revalidated news path')
        } catch (error) {
          payload.logger.error({ error, path }, 'Error revalidating news path')
        }
      }),
    )
  }

  return doc
}
