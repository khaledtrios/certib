import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Phase 1 — non destructive
// Creates actualite_categories / actualite_rubriques, renames old enum columns to
// *_legacy, adds FK columns, seeds data, backfills news + _news_v.
// The legacy columns and enum types are left in place until Phase 2 (20260621_200000).

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // ── 1. Create actualite_categories table ─────────────────────────────────────
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "actualite_categories" (
      "id"         serial NOT NULL,
      "name"       varchar NOT NULL,
      "slug"       varchar NOT NULL,
      "order"      numeric,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      CONSTRAINT "actualite_categories_pkey" PRIMARY KEY ("id")
    );
    CREATE UNIQUE INDEX IF NOT EXISTS "actualite_categories_slug_idx"
      ON "actualite_categories" ("slug");
  `)

  // ── 2. Create actualite_rubriques table ──────────────────────────────────────
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "actualite_rubriques" (
      "id"         serial NOT NULL,
      "name"       varchar NOT NULL,
      "slug"       varchar NOT NULL,
      "order"      numeric,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      CONSTRAINT "actualite_rubriques_pkey" PRIMARY KEY ("id")
    );
    CREATE UNIQUE INDEX IF NOT EXISTS "actualite_rubriques_slug_idx"
      ON "actualite_rubriques" ("slug");
  `)

  // ── 3. Rename old enum types to match the new *Legacy field names ─────────────
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TYPE "enum_news_category" RENAME TO "enum_news_category_legacy";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TYPE "enum_news_rubrique" RENAME TO "enum_news_rubrique_legacy";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TYPE "enum__news_v_version_category"
        RENAME TO "enum__news_v_version_category_legacy";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TYPE "enum__news_v_version_rubrique"
        RENAME TO "enum__news_v_version_rubrique_legacy";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;
  `)

  // ── 4. Rename old columns to *_legacy ────────────────────────────────────────
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "news" RENAME COLUMN "category" TO "category_legacy";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "news" RENAME COLUMN "rubrique" TO "rubrique_legacy";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "_news_v" RENAME COLUMN "version_category" TO "version_category_legacy";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "_news_v" RENAME COLUMN "version_rubrique" TO "version_rubrique_legacy";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;
  `)

  // ── 5. Add new FK columns ─────────────────────────────────────────────────────
  await db.execute(sql`
    ALTER TABLE "news"
      ADD COLUMN IF NOT EXISTS "category_id" integer,
      ADD COLUMN IF NOT EXISTS "rubrique_id" integer;

    ALTER TABLE "_news_v"
      ADD COLUMN IF NOT EXISTS "version_category_id" integer,
      ADD COLUMN IF NOT EXISTS "version_rubrique_id" integer;
  `)

  // ── 6. Seed actualite_categories (3 types de contenu) ────────────────────────
  await db.execute(sql`
    INSERT INTO "actualite_categories" ("name", "slug", "order") VALUES
      ('Actualité',  'actualite',  1),
      ('Communiqué', 'communique', 2),
      ('Événement',  'evenement',  3)
    ON CONFLICT ("slug") DO NOTHING;
  `)

  // ── 7. Seed actualite_rubriques (5 rubriques) ─────────────────────────────────
  await db.execute(sql`
    INSERT INTO "actualite_rubriques" ("name", "slug", "order") VALUES
      ('Marchés publics',         'marches-publics',         1),
      ('Performance énergétique', 'performance-energetique', 2),
      ('Construction durable',    'construction-durable',    3),
      ('Digitalisation BIM',      'digitalisation-bim',      4),
      ('Général',                 'general',                 5)
    ON CONFLICT ("slug") DO NOTHING;
  `)

  // ── 8. Backfill news.category_id / rubrique_id ───────────────────────────────
  await db.execute(sql`
    UPDATE "news" n
      SET "category_id" = ac.id
      FROM "actualite_categories" ac
      WHERE n."category_legacy"::text = ac.slug
        AND n."category_legacy" IS NOT NULL;

    UPDATE "news" n
      SET "rubrique_id" = ar.id
      FROM "actualite_rubriques" ar
      WHERE n."rubrique_legacy"::text = ar.slug
        AND n."rubrique_legacy" IS NOT NULL;
  `)

  // ── 9. Backfill _news_v (versions / brouillons) ───────────────────────────────
  await db.execute(sql`
    UPDATE "_news_v" nv
      SET "version_category_id" = ac.id
      FROM "actualite_categories" ac
      WHERE nv."version_category_legacy"::text = ac.slug
        AND nv."version_category_legacy" IS NOT NULL;

    UPDATE "_news_v" nv
      SET "version_rubrique_id" = ar.id
      FROM "actualite_rubriques" ar
      WHERE nv."version_rubrique_legacy"::text = ar.slug
        AND nv."version_rubrique_legacy" IS NOT NULL;
  `)

  // ── 10. FK constraints + indexes ──────────────────────────────────────────────
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "news"
        ADD CONSTRAINT "news_category_id_fk"
        FOREIGN KEY ("category_id") REFERENCES "actualite_categories"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "news"
        ADD CONSTRAINT "news_rubrique_id_fk"
        FOREIGN KEY ("rubrique_id") REFERENCES "actualite_rubriques"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "_news_v"
        ADD CONSTRAINT "_news_v_version_category_id_fk"
        FOREIGN KEY ("version_category_id") REFERENCES "actualite_categories"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "_news_v"
        ADD CONSTRAINT "_news_v_version_rubrique_id_fk"
        FOREIGN KEY ("version_rubrique_id") REFERENCES "actualite_rubriques"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    CREATE INDEX IF NOT EXISTS "news_category_idx"   ON "news" ("category_id");
    CREATE INDEX IF NOT EXISTS "news_rubrique_idx"   ON "news" ("rubrique_id");
    CREATE INDEX IF NOT EXISTS "_news_v_version_category_idx" ON "_news_v" ("version_category_id");
    CREATE INDEX IF NOT EXISTS "_news_v_version_rubrique_idx" ON "_news_v" ("version_rubrique_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Restore FK columns to enum columns on both tables
  await db.execute(sql`
    ALTER TABLE "news" DROP COLUMN IF EXISTS "category_id";
    ALTER TABLE "news" DROP COLUMN IF EXISTS "rubrique_id";
    ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "version_category_id";
    ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "version_rubrique_id";

    DO $$ BEGIN
      ALTER TABLE "news" RENAME COLUMN "category_legacy" TO "category";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "news" RENAME COLUMN "rubrique_legacy" TO "rubrique";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_news_v" RENAME COLUMN "version_category_legacy" TO "version_category";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_news_v" RENAME COLUMN "version_rubrique_legacy" TO "version_rubrique";
    EXCEPTION WHEN undefined_column THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TYPE "enum_news_category_legacy" RENAME TO "enum_news_category";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TYPE "enum_news_rubrique_legacy" RENAME TO "enum_news_rubrique";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TYPE "enum__news_v_version_category_legacy"
        RENAME TO "enum__news_v_version_category";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TYPE "enum__news_v_version_rubrique_legacy"
        RENAME TO "enum__news_v_version_rubrique";
    EXCEPTION WHEN undefined_object THEN NULL; END $$;

    DROP TABLE IF EXISTS "actualite_categories";
    DROP TABLE IF EXISTS "actualite_rubriques";
  `)
}
