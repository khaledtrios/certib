import type { CollectionAfterChangeHook } from 'payload'

async function callRevalidate(paths: string[], payload: any) {
  const frontendUrl = process.env.FRONTEND_URL
  const revalidateSecret = process.env.REVALIDATE_SECRET

  if (!frontendUrl || !revalidateSecret) {
    payload.logger.warn('Frontend revalidation not configured. Set FRONTEND_URL and REVALIDATE_SECRET.')
    return
  }

  try {
    const response = await fetch(`${frontendUrl}/api/revalidate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: revalidateSecret, paths }),
    })
    if (!response.ok) throw new Error(`Revalidation failed: ${response.statusText}`)
    payload.logger.info({ paths }, 'Successfully revalidated frontend')
  } catch (error) {
    payload.logger.error({ error }, 'Error revalidating frontend')
  }
}

export const revalidatePage: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const slug = doc.slug || ''
    const path = slug === 'home' ? '/' : `/${slug}`
    await callRevalidate([path, '/'], req.payload)
  }
  return doc
}

export const revalidateNews: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const slug = doc.slug || ''
    await callRevalidate(['/actualites', `/actualites/${slug}`], req.payload)
  }
  return doc
}

export const revalidateFormations: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  if (operation === 'create' || operation === 'update') {
    await callRevalidate(['/toutes-les-formations'], req.payload)
  }
  return doc
}
