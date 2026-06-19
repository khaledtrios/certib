import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "content";
    ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_content";
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // column was intentionally removed — no rollback
}
