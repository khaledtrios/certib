import type { CollectionAfterChangeHook } from 'payload'

/**
 * Hook para revalidar páginas no frontend após mudanças
 */
export const revalidatePage: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  const { payload } = req

  // Apenas revalidar em produção ou se configurado
  const frontendUrl = process.env.FRONTEND_URL
  const revalidateSecret = process.env.REVALIDATE_SECRET

  if (!frontendUrl || !revalidateSecret) {
    payload.logger.warn(
      'Frontend revalidation not configured. Set FRONTEND_URL and REVALIDATE_SECRET.',
    )
    return doc
  }

  // Apenas revalidar em create/update de páginas publicadas
  if (operation === 'create' || operation === 'update') {
    try {
      const slug = doc.slug || ''
      const path = slug === 'home' ? '/' : `/${slug}`

      payload.logger.info(`Revalidating frontend path: ${path}`)

      const response = await fetch(`${frontendUrl}/api/revalidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: revalidateSecret,
          path,
        }),
      })

      if (!response.ok) {
        throw new Error(`Revalidation failed: ${response.statusText}`)
      }

      const result = await response.json()
      payload.logger.info(
        { path, result },
        'Successfully revalidated frontend',
      )
    } catch (error) {
      payload.logger.error({ error }, 'Error revalidating frontend')
      // Não falhar a operação se a revalidação falhar
    }
  }

  return doc
}
