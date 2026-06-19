import React from 'react'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { PageOrderClient } from './PageOrderClient'

export default function PageOrderView(props: any) {
  const { payload, i18n, params, searchParams, viewActions, initPageResult } = props

  // Payload passes visibleEntities, req, permissions, locale inside initPageResult — not top-level
  const { req, permissions, locale, visibleEntities } = initPageResult ?? {}

  const safeVisibleEntities = {
    collections: Array.isArray(visibleEntities?.collections)
      ? visibleEntities.collections
      : (payload?.config?.collections ?? []).map((c: any) => c.slug),
    globals: Array.isArray(visibleEntities?.globals)
      ? visibleEntities.globals
      : (payload?.config?.globals ?? []).map((g: any) => g.slug),
  }

  return (
    <DefaultTemplate
      payload={payload}
      i18n={i18n}
      user={req?.user}
      req={req}
      permissions={permissions}
      visibleEntities={safeVisibleEntities}
      locale={locale}
      params={params}
      searchParams={searchParams}
      viewActions={viewActions}
    >
      <PageOrderClient />
    </DefaultTemplate>
  )
}
