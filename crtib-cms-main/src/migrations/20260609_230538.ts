import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_formations_section_category" AS ENUM('all', 'marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'autre');
  CREATE TYPE "public"."enum__pages_v_blocks_formations_section_category" AS ENUM('all', 'marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'autre');
  CREATE TYPE "public"."enum_formations_category" AS ENUM('marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'autre');
  CREATE TYPE "public"."enum_formations_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__formations_v_version_category" AS ENUM('marches-publics', 'performance-energetique', 'construction-durable', 'digitalisation-bim', 'autre');
  CREATE TYPE "public"."enum__formations_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_formations_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Formations',
  	"category" "enum_pages_blocks_formations_section_category",
  	"show_filters" boolean DEFAULT true,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE "pages_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_formations_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Formations',
  	"category" "enum__pages_v_blocks_formations_section_category",
  	"show_filters" boolean DEFAULT true,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "formations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"image_id" integer,
  	"category" "enum_formations_category",
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"duration" varchar,
  	"location" varchar,
  	"price" varchar,
  	"max_participants" numeric,
  	"description" jsonb,
  	"registration_url" varchar,
  	"registration_email" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_formations_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_formations_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_image_id" integer,
  	"version_category" "enum__formations_v_version_category",
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_duration" varchar,
  	"version_location" varchar,
  	"version_price" varchar,
  	"version_max_participants" numeric,
  	"version_description" jsonb,
  	"version_registration_url" varchar,
  	"version_registration_email" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__formations_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "pages_blocks_organogram_root_children_children" ADD COLUMN "department" varchar;
  ALTER TABLE "pages_blocks_organogram_root_children_children" ADD COLUMN "phone" varchar;
  ALTER TABLE "pages_blocks_organogram_root_children_children" ADD COLUMN "email" varchar;
  ALTER TABLE "pages_blocks_organogram_root_children" ADD COLUMN "department" varchar;
  ALTER TABLE "pages_blocks_organogram_root_children" ADD COLUMN "phone" varchar;
  ALTER TABLE "pages_blocks_organogram_root_children" ADD COLUMN "email" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" ADD COLUMN "department" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" ADD COLUMN "phone" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" ADD COLUMN "email" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children" ADD COLUMN "department" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children" ADD COLUMN "phone" varchar;
  ALTER TABLE "_pages_v_blocks_organogram_root_children" ADD COLUMN "email" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "formations_id" integer;
  ALTER TABLE "pages_blocks_formations_section" ADD CONSTRAINT "pages_blocks_formations_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_block" ADD CONSTRAINT "pages_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_block_items" ADD CONSTRAINT "pages_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_block" ADD CONSTRAINT "pages_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_formations_section" ADD CONSTRAINT "_pages_v_blocks_formations_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_block" ADD CONSTRAINT "_pages_v_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion_block_items" ADD CONSTRAINT "_pages_v_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion_block" ADD CONSTRAINT "_pages_v_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "formations" ADD CONSTRAINT "formations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_formations_v" ADD CONSTRAINT "_formations_v_parent_id_formations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."formations"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_formations_v" ADD CONSTRAINT "_formations_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_formations_section_order_idx" ON "pages_blocks_formations_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_formations_section_parent_id_idx" ON "pages_blocks_formations_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_formations_section_path_idx" ON "pages_blocks_formations_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_block_order_idx" ON "pages_blocks_text_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_block_parent_id_idx" ON "pages_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_block_path_idx" ON "pages_blocks_text_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_block_items_order_idx" ON "pages_blocks_accordion_block_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_block_items_parent_id_idx" ON "pages_blocks_accordion_block_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_block_order_idx" ON "pages_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_block_parent_id_idx" ON "pages_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_block_path_idx" ON "pages_blocks_accordion_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_formations_section_order_idx" ON "_pages_v_blocks_formations_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_formations_section_parent_id_idx" ON "_pages_v_blocks_formations_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_formations_section_path_idx" ON "_pages_v_blocks_formations_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_block_order_idx" ON "_pages_v_blocks_text_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_block_parent_id_idx" ON "_pages_v_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_block_path_idx" ON "_pages_v_blocks_text_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_accordion_block_items_order_idx" ON "_pages_v_blocks_accordion_block_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_block_items_parent_id_idx" ON "_pages_v_blocks_accordion_block_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_block_order_idx" ON "_pages_v_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_block_parent_id_idx" ON "_pages_v_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_block_path_idx" ON "_pages_v_blocks_accordion_block" USING btree ("_path");
  CREATE UNIQUE INDEX "formations_slug_idx" ON "formations" USING btree ("slug");
  CREATE INDEX "formations_image_idx" ON "formations" USING btree ("image_id");
  CREATE INDEX "formations_updated_at_idx" ON "formations" USING btree ("updated_at");
  CREATE INDEX "formations_created_at_idx" ON "formations" USING btree ("created_at");
  CREATE INDEX "formations__status_idx" ON "formations" USING btree ("_status");
  CREATE INDEX "_formations_v_parent_idx" ON "_formations_v" USING btree ("parent_id");
  CREATE INDEX "_formations_v_version_version_slug_idx" ON "_formations_v" USING btree ("version_slug");
  CREATE INDEX "_formations_v_version_version_image_idx" ON "_formations_v" USING btree ("version_image_id");
  CREATE INDEX "_formations_v_version_version_updated_at_idx" ON "_formations_v" USING btree ("version_updated_at");
  CREATE INDEX "_formations_v_version_version_created_at_idx" ON "_formations_v" USING btree ("version_created_at");
  CREATE INDEX "_formations_v_version_version__status_idx" ON "_formations_v" USING btree ("version__status");
  CREATE INDEX "_formations_v_created_at_idx" ON "_formations_v" USING btree ("created_at");
  CREATE INDEX "_formations_v_updated_at_idx" ON "_formations_v" USING btree ("updated_at");
  CREATE INDEX "_formations_v_latest_idx" ON "_formations_v" USING btree ("latest");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_formations_fk" FOREIGN KEY ("formations_id") REFERENCES "public"."formations"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_formations_id_idx" ON "payload_locked_documents_rels" USING btree ("formations_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_formations_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_text_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accordion_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accordion_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_formations_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_text_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_accordion_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_accordion_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "formations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_formations_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_formations_section" CASCADE;
  DROP TABLE "pages_blocks_text_block" CASCADE;
  DROP TABLE "pages_blocks_accordion_block_items" CASCADE;
  DROP TABLE "pages_blocks_accordion_block" CASCADE;
  DROP TABLE "_pages_v_blocks_formations_section" CASCADE;
  DROP TABLE "_pages_v_blocks_text_block" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion_block_items" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion_block" CASCADE;
  DROP TABLE "formations" CASCADE;
  DROP TABLE "_formations_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_formations_fk";
  
  DROP INDEX "payload_locked_documents_rels_formations_id_idx";
  ALTER TABLE "pages_blocks_organogram_root_children_children" DROP COLUMN "department";
  ALTER TABLE "pages_blocks_organogram_root_children_children" DROP COLUMN "phone";
  ALTER TABLE "pages_blocks_organogram_root_children_children" DROP COLUMN "email";
  ALTER TABLE "pages_blocks_organogram_root_children" DROP COLUMN "department";
  ALTER TABLE "pages_blocks_organogram_root_children" DROP COLUMN "phone";
  ALTER TABLE "pages_blocks_organogram_root_children" DROP COLUMN "email";
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" DROP COLUMN "department";
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" DROP COLUMN "phone";
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" DROP COLUMN "email";
  ALTER TABLE "_pages_v_blocks_organogram_root_children" DROP COLUMN "department";
  ALTER TABLE "_pages_v_blocks_organogram_root_children" DROP COLUMN "phone";
  ALTER TABLE "_pages_v_blocks_organogram_root_children" DROP COLUMN "email";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "formations_id";
  DROP TYPE "public"."enum_pages_blocks_formations_section_category";
  DROP TYPE "public"."enum__pages_v_blocks_formations_section_category";
  DROP TYPE "public"."enum_formations_category";
  DROP TYPE "public"."enum_formations_status";
  DROP TYPE "public"."enum__formations_v_version_category";
  DROP TYPE "public"."enum__formations_v_version_status";`)
}
