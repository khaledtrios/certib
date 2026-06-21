import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // 1. Create formation_categories table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "formation_categories" (
      "id" serial NOT NULL,
      "name" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      CONSTRAINT "formation_categories_pkey" PRIMARY KEY ("id")
    );
    CREATE UNIQUE INDEX IF NOT EXISTS "formation_categories_slug_idx"
      ON "formation_categories" ("slug");
  `)

  // 2. Rename old enum types to match the new field name (categoryLegacy)
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TYPE "enum_formations_category" RENAME TO "enum_formations_category_legacy";
    EXCEPTION WHEN undefined_object THEN NULL;
    END $$;

    DO $$ BEGIN
      ALTER TYPE "enum__formations_v_version_category"
        RENAME TO "enum__formations_v_version_category_legacy";
    EXCEPTION WHEN undefined_object THEN NULL;
    END $$;
  `)

  // 3. Rename old columns to match the new field name (categoryLegacy)
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "formations" RENAME COLUMN "category" TO "category_legacy";
    EXCEPTION WHEN undefined_column THEN NULL;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "_formations_v" RENAME COLUMN "version_category" TO "version_category_legacy";
    EXCEPTION WHEN undefined_column THEN NULL;
    END $$;
  `)

  // 4. Add new FK columns for the relationship field
  await db.execute(sql`
    ALTER TABLE "formations"
      ADD COLUMN IF NOT EXISTS "category_id" integer;

    ALTER TABLE "_formations_v"
      ADD COLUMN IF NOT EXISTS "version_category_id" integer;
  `)

  // 5. Seed the 5 formation categories
  await db.execute(sql`
    INSERT INTO "formation_categories" ("name", "slug") VALUES
      ('Marchés publics',        'marches-publics'),
      ('Performance énergétique','performance-energetique'),
      ('Construction durable',   'construction-durable'),
      ('Digitalisation / BIM',   'digitalisation-bim'),
      ('Autre',                  'autre')
    ON CONFLICT ("slug") DO NOTHING;
  `)

  // 6. Map existing enum values → FK IDs
  await db.execute(sql`
    UPDATE "formations" f
      SET "category_id" = fc.id
      FROM "formation_categories" fc
      WHERE f."category_legacy"::text = fc.slug
        AND f."category_legacy" IS NOT NULL;

    UPDATE "_formations_v" fv
      SET "version_category_id" = fc.id
      FROM "formation_categories" fc
      WHERE fv."version_category_legacy"::text = fc.slug
        AND fv."version_category_legacy" IS NOT NULL;
  `)

  // 7. Add FK constraints and indexes
  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "formations"
        ADD CONSTRAINT "formations_category_id_fk"
        FOREIGN KEY ("category_id")
        REFERENCES "formation_categories"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "_formations_v"
        ADD CONSTRAINT "_formations_v_version_category_id_fk"
        FOREIGN KEY ("version_category_id")
        REFERENCES "formation_categories"("id")
        ON DELETE SET NULL ON UPDATE NO ACTION;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END $$;

    CREATE INDEX IF NOT EXISTS "formations_category_idx"
      ON "formations" ("category_id");

    CREATE INDEX IF NOT EXISTS "_formations_v_version_category_idx"
      ON "_formations_v" ("version_category_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Intentionally left as no-op — data migration cannot be safely reversed
}
