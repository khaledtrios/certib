import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_news_rubrique" AS ENUM('marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'general');
  CREATE TYPE "public"."enum__news_v_version_rubrique" AS ENUM('marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'general');
  ALTER TABLE "news" ADD COLUMN "rubrique" "enum_news_rubrique";
  ALTER TABLE "_news_v" ADD COLUMN "version_rubrique" "enum__news_v_version_rubrique";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "news" DROP COLUMN "rubrique";
  ALTER TABLE "_news_v" DROP COLUMN "version_rubrique";
  DROP TYPE "public"."enum_news_rubrique";
  DROP TYPE "public"."enum__news_v_version_rubrique";`)
}
