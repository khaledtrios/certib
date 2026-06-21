import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Adds filterCategories + filterRubriques relationship columns to pages_rels
// and _pages_v_rels so the newsSection block can filter news by category/rubrique.
// Safe to run on existing data: columns are nullable, no rows are touched.

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // ── pages_rels ────────────────────────────────────────────────────────────────
  await db.execute(sql`
    ALTER TABLE "pages_rels"
      ADD COLUMN IF NOT EXISTS "actualite_categories_id" integer,
      ADD COLUMN IF NOT EXISTS "actualite_rubriques_id"  integer;
  `)

  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "pages_rels"
        ADD CONSTRAINT "pages_rels_actualite_categories_fk"
        FOREIGN KEY ("actualite_categories_id")
        REFERENCES "public"."actualite_categories"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "pages_rels"
        ADD CONSTRAINT "pages_rels_actualite_rubriques_fk"
        FOREIGN KEY ("actualite_rubriques_id")
        REFERENCES "public"."actualite_rubriques"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  `)

  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "pages_rels_actualite_categories_id_idx"
      ON "pages_rels" USING btree ("actualite_categories_id");
    CREATE INDEX IF NOT EXISTS "pages_rels_actualite_rubriques_id_idx"
      ON "pages_rels" USING btree ("actualite_rubriques_id");
  `)

  // ── _pages_v_rels (drafts / versions) ────────────────────────────────────────
  await db.execute(sql`
    ALTER TABLE "_pages_v_rels"
      ADD COLUMN IF NOT EXISTS "actualite_categories_id" integer,
      ADD COLUMN IF NOT EXISTS "actualite_rubriques_id"  integer;
  `)

  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "_pages_v_rels"
        ADD CONSTRAINT "_pages_v_rels_actualite_categories_fk"
        FOREIGN KEY ("actualite_categories_id")
        REFERENCES "public"."actualite_categories"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "_pages_v_rels"
        ADD CONSTRAINT "_pages_v_rels_actualite_rubriques_fk"
        FOREIGN KEY ("actualite_rubriques_id")
        REFERENCES "public"."actualite_rubriques"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  `)

  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "_pages_v_rels_actualite_categories_id_idx"
      ON "_pages_v_rels" USING btree ("actualite_categories_id");
    CREATE INDEX IF NOT EXISTS "_pages_v_rels_actualite_rubriques_id_idx"
      ON "_pages_v_rels" USING btree ("actualite_rubriques_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_rels"
      DROP COLUMN IF EXISTS "actualite_categories_id",
      DROP COLUMN IF EXISTS "actualite_rubriques_id";

    ALTER TABLE "_pages_v_rels"
      DROP COLUMN IF EXISTS "actualite_categories_id",
      DROP COLUMN IF EXISTS "actualite_rubriques_id";
  `)
}
