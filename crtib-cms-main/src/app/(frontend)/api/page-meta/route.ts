import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json() as { id: string | number; menuOrder?: number; isHidden?: boolean }
    const { id, menuOrder, isHidden } = body

    if (id === undefined || id === null) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    const numericId = typeof id === 'string' ? parseInt(id, 10) : id

    const setClauses: string[] = []
    const values: (number | boolean)[] = []
    let idx = 1

    if (menuOrder !== undefined) {
      setClauses.push(`"menu_order" = $${idx++}`)
      values.push(menuOrder)
    }
    if (isHidden !== undefined) {
      setClauses.push(`"is_hidden" = $${idx++}`)
      values.push(isHidden)
    }

    if (setClauses.length === 0) {
      return NextResponse.json({ ok: true })
    }

    values.push(numericId)

    const payload = await getPayload({ config })
    await (payload.db as any).pool.query(
      `UPDATE pages SET ${setClauses.join(', ')} WHERE id = $${idx}`,
      values,
    )

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Update failed' }, { status: 500 })
  }
}
