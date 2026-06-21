import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Phase 2 — DROP des colonnes legacy et des types enum
// À lancer UNIQUEMENT après validation des données via Phase 1.
// Vérifier avant : SELECT COUNT(*) FROM news WHERE category_id IS NULL;
//                  SELECT COUNT(*) FROM news WHERE rubrique_id IS NULL AND rubrique_legacy IS NOT NULL;

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Drop legacy columns from news
  await db.execute(sql`
    ALTER TABLE "news"
      DROP COLUMN IF EXISTS "category_legacy",
      DROP COLUMN IF EXISTS "rubrique_legacy";
  `)

  // Drop legacy columns from _news_v
  await db.execute(sql`
    ALTER TABLE "_news_v"
      DROP COLUMN IF EXISTS "version_category_legacy",
      DROP COLUMN IF EXISTS "version_rubrique_legacy";
  `)

  // Drop old enum types
  await db.execute(sql`
    DO $$ BEGIN DROP TYPE "enum_news_category_legacy"; EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN DROP TYPE "enum_news_rubrique_legacy"; EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN DROP TYPE "enum__news_v_version_category_legacy"; EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN DROP TYPE "enum__news_v_version_rubrique_legacy"; EXCEPTION WHEN undefined_object THEN NULL; END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Cannot recreate enum values that were dropped — no rollback
}
