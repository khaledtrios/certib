import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_news_section_variant" AS ENUM('default', 'block');
  CREATE TYPE "public"."enum_pages_blocks_documents_section_items_type" AS ENUM('pdf', 'video');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_grid_columns_type" AS ENUM('text', 'number', 'percentage', 'date');
  CREATE TYPE "public"."enum_pages_blocks_video_cards_videos_type" AS ENUM('youtube', 'internal');
  CREATE TYPE "public"."enum_pages_blocks_video_embed_type" AS ENUM('youtube', 'internal');
  CREATE TYPE "public"."enum_pages_icon" AS ENUM('user', 'document', 'globe', 'leaf', 'calendar', 'building', 'book', 'graduation', 'external-link', 'star', 'settings', 'list');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_news_section_variant" AS ENUM('default', 'block');
  CREATE TYPE "public"."enum__pages_v_blocks_documents_section_items_type" AS ENUM('pdf', 'video');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_grid_columns_type" AS ENUM('text', 'number', 'percentage', 'date');
  CREATE TYPE "public"."enum__pages_v_blocks_video_cards_videos_type" AS ENUM('youtube', 'internal');
  CREATE TYPE "public"."enum__pages_v_blocks_video_embed_type" AS ENUM('youtube', 'internal');
  CREATE TYPE "public"."enum__pages_v_version_icon" AS ENUM('user', 'document', 'globe', 'leaf', 'calendar', 'building', 'book', 'graduation', 'external-link', 'star', 'settings', 'list');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_news_category" AS ENUM('actualite', 'communique', 'evenement');
  CREATE TYPE "public"."enum_news_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__news_v_version_category" AS ENUM('actualite', 'communique', 'evenement');
  CREATE TYPE "public"."enum__news_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_partners_type" AS ENUM('partner', 'association');
  CREATE TYPE "public"."enum_videos_type" AS ENUM('youtube', 'internal');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "pages_blocks_photo_hero_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"eyebrow" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_photo_hero_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"auto_play_ms" numeric DEFAULT 5000,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_news_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Actualités',
  	"max_items" numeric DEFAULT 3,
  	"variant" "enum_pages_blocks_news_section_variant" DEFAULT 'default',
  	"cta_href" varchar DEFAULT '/actualites',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_documents_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_documents_section_items_type",
  	"title" varchar,
  	"trigger_label" varchar DEFAULT 'Voir le PDF',
  	"file_id" integer,
  	"video_url" varchar
  );
  
  CREATE TABLE "pages_blocks_documents_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Documents',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_calculator" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Calculateur',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_clauses_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"redirect_label" varchar,
  	"redirect_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dynamic_grid_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"type" "enum_pages_blocks_dynamic_grid_columns_type",
  	"precision" numeric DEFAULT 2,
  	"currency" varchar
  );
  
  CREATE TABLE "pages_blocks_dynamic_grid_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"values" jsonb
  );
  
  CREATE TABLE "pages_blocks_dynamic_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_download_grid_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numero" varchar,
  	"titulo" varchar,
  	"data" timestamp(3) with time zone,
  	"versao" varchar,
  	"pdf_id" integer,
  	"rtf_id" integer,
  	"doc_id" integer,
  	"xls_id" integer,
  	"zip_id" integer
  );
  
  CREATE TABLE "pages_blocks_download_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_size" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_download_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"file_id" integer
  );
  
  CREATE TABLE "pages_blocks_download_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quick_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"icon" varchar
  );
  
  CREATE TABLE "pages_blocks_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_organogram_root_children_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "pages_blocks_organogram_root_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "pages_blocks_organogram" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"root_name" varchar,
  	"root_role" varchar,
  	"root_photo_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight_last" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_partners_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_partners_associations" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Partenaires',
  	"associations_title" varchar DEFAULT 'En association',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_cards_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" "enum_pages_blocks_video_cards_videos_type",
  	"src" varchar
  );
  
  CREATE TABLE "pages_blocks_video_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" "enum_pages_blocks_video_embed_type" DEFAULT 'youtube',
  	"src" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_activity_reports_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"pdf_id" integer
  );
  
  CREATE TABLE "pages_blocks_activity_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"parent_id" integer,
  	"menu_order" numeric DEFAULT 100,
  	"icon" "enum_pages_icon",
  	"content" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"clauses_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_photo_hero_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"eyebrow" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_photo_hero_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"auto_play_ms" numeric DEFAULT 5000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_news_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Actualités',
  	"max_items" numeric DEFAULT 3,
  	"variant" "enum__pages_v_blocks_news_section_variant" DEFAULT 'default',
  	"cta_href" varchar DEFAULT '/actualites',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_documents_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_documents_section_items_type",
  	"title" varchar,
  	"trigger_label" varchar DEFAULT 'Voir le PDF',
  	"file_id" integer,
  	"video_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_documents_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Documents',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_calculator" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Calculateur',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_clauses_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"redirect_label" varchar,
  	"redirect_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_grid_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"label" varchar,
  	"type" "enum__pages_v_blocks_dynamic_grid_columns_type",
  	"precision" numeric DEFAULT 2,
  	"currency" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_grid_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"values" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_download_grid_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"numero" varchar,
  	"titulo" varchar,
  	"data" timestamp(3) with time zone,
  	"versao" varchar,
  	"pdf_id" integer,
  	"rtf_id" integer,
  	"doc_id" integer,
  	"xls_id" integer,
  	"zip_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_download_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"page_size" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_download_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"file_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_download_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quick_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"icon" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_organogram_root_children_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_organogram_root_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_organogram" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"root_name" varchar,
  	"root_role" varchar,
  	"root_photo_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight_last" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_partners_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_partners_associations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Partenaires',
  	"associations_title" varchar DEFAULT 'En association',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_cards_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" "enum__pages_v_blocks_video_cards_videos_type",
  	"src" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" "enum__pages_v_blocks_video_embed_type" DEFAULT 'youtube',
  	"src" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_activity_reports_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"pdf_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_activity_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_parent_id" integer,
  	"version_menu_order" numeric DEFAULT 100,
  	"version_icon" "enum__pages_v_version_icon",
  	"version_content" jsonb,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_seo_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"clauses_id" integer
  );
  
  CREATE TABLE "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"category" "enum_news_category" DEFAULT 'actualite',
  	"published_at" timestamp(3) with time zone,
  	"featured_image_id" integer,
  	"excerpt" varchar,
  	"content" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_news_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_news_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_category" "enum__news_v_version_category" DEFAULT 'actualite',
  	"version_published_at" timestamp(3) with time zone,
  	"version_featured_image_id" integer,
  	"version_excerpt" varchar,
  	"version_content" jsonb,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__news_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_partners_type" DEFAULT 'partner' NOT NULL,
  	"logo_id" integer,
  	"href" varchar,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"type" "enum_videos_type" DEFAULT 'youtube' NOT NULL,
  	"src" varchar NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "activity_reports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"pdf_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "timeline_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "clauses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"version" varchar,
  	"pdf_id" integer,
  	"rtf_id" integer,
  	"doc_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"news_id" integer,
  	"partners_id" integer,
  	"videos_id" integer,
  	"activity_reports_id" integer,
  	"timeline_items_id" integer,
  	"clauses_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_hero_carousel_slides" ADD CONSTRAINT "pages_blocks_photo_hero_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_hero_carousel_slides" ADD CONSTRAINT "pages_blocks_photo_hero_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_photo_hero_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_hero_carousel" ADD CONSTRAINT "pages_blocks_photo_hero_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_news_section" ADD CONSTRAINT "pages_blocks_news_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_documents_section_items" ADD CONSTRAINT "pages_blocks_documents_section_items_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_documents_section_items" ADD CONSTRAINT "pages_blocks_documents_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_documents_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_documents_section" ADD CONSTRAINT "pages_blocks_documents_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calculator" ADD CONSTRAINT "pages_blocks_calculator_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_clauses_grid" ADD CONSTRAINT "pages_blocks_clauses_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_grid_columns" ADD CONSTRAINT "pages_blocks_dynamic_grid_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dynamic_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_grid_rows" ADD CONSTRAINT "pages_blocks_dynamic_grid_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dynamic_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_grid" ADD CONSTRAINT "pages_blocks_dynamic_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_rtf_id_media_id_fk" FOREIGN KEY ("rtf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_xls_id_media_id_fk" FOREIGN KEY ("xls_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_zip_id_media_id_fk" FOREIGN KEY ("zip_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid_documents" ADD CONSTRAINT "pages_blocks_download_grid_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_download_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_grid" ADD CONSTRAINT "pages_blocks_download_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_links_items" ADD CONSTRAINT "pages_blocks_download_links_items_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_links_items" ADD CONSTRAINT "pages_blocks_download_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_download_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_download_links" ADD CONSTRAINT "pages_blocks_download_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_links_items" ADD CONSTRAINT "pages_blocks_quick_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quick_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_links" ADD CONSTRAINT "pages_blocks_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram_root_children_children" ADD CONSTRAINT "pages_blocks_organogram_root_children_children_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram_root_children_children" ADD CONSTRAINT "pages_blocks_organogram_root_children_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_organogram_root_children"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram_root_children" ADD CONSTRAINT "pages_blocks_organogram_root_children_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram_root_children" ADD CONSTRAINT "pages_blocks_organogram_root_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_organogram"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram" ADD CONSTRAINT "pages_blocks_organogram_root_photo_id_media_id_fk" FOREIGN KEY ("root_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_organogram" ADD CONSTRAINT "pages_blocks_organogram_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items" ADD CONSTRAINT "pages_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_partners" ADD CONSTRAINT "pages_blocks_partners_partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_partners" ADD CONSTRAINT "pages_blocks_partners_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_associations" ADD CONSTRAINT "pages_blocks_partners_associations_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_associations" ADD CONSTRAINT "pages_blocks_partners_associations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners" ADD CONSTRAINT "pages_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_cards_videos" ADD CONSTRAINT "pages_blocks_video_cards_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_cards" ADD CONSTRAINT "pages_blocks_video_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_embed" ADD CONSTRAINT "pages_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_activity_reports_reports" ADD CONSTRAINT "pages_blocks_activity_reports_reports_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_activity_reports_reports" ADD CONSTRAINT "pages_blocks_activity_reports_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_activity_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_activity_reports" ADD CONSTRAINT "pages_blocks_activity_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_meta_image_id_media_id_fk" FOREIGN KEY ("seo_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_clauses_fk" FOREIGN KEY ("clauses_id") REFERENCES "public"."clauses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_hero_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_photo_hero_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_hero_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_photo_hero_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_photo_hero_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_hero_carousel" ADD CONSTRAINT "_pages_v_blocks_photo_hero_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_news_section" ADD CONSTRAINT "_pages_v_blocks_news_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_documents_section_items" ADD CONSTRAINT "_pages_v_blocks_documents_section_items_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_documents_section_items" ADD CONSTRAINT "_pages_v_blocks_documents_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_documents_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_documents_section" ADD CONSTRAINT "_pages_v_blocks_documents_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_calculator" ADD CONSTRAINT "_pages_v_blocks_calculator_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_clauses_grid" ADD CONSTRAINT "_pages_v_blocks_clauses_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_grid_columns" ADD CONSTRAINT "_pages_v_blocks_dynamic_grid_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_grid_rows" ADD CONSTRAINT "_pages_v_blocks_dynamic_grid_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_grid" ADD CONSTRAINT "_pages_v_blocks_dynamic_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_rtf_id_media_id_fk" FOREIGN KEY ("rtf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_xls_id_media_id_fk" FOREIGN KEY ("xls_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_zip_id_media_id_fk" FOREIGN KEY ("zip_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid_documents" ADD CONSTRAINT "_pages_v_blocks_download_grid_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_download_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_grid" ADD CONSTRAINT "_pages_v_blocks_download_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_links_items" ADD CONSTRAINT "_pages_v_blocks_download_links_items_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_links_items" ADD CONSTRAINT "_pages_v_blocks_download_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_download_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_download_links" ADD CONSTRAINT "_pages_v_blocks_download_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quick_links_items" ADD CONSTRAINT "_pages_v_blocks_quick_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_quick_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quick_links" ADD CONSTRAINT "_pages_v_blocks_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" ADD CONSTRAINT "_pages_v_blocks_organogram_root_children_children_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram_root_children_children" ADD CONSTRAINT "_pages_v_blocks_organogram_root_children_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_organogram_root_children"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram_root_children" ADD CONSTRAINT "_pages_v_blocks_organogram_root_children_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram_root_children" ADD CONSTRAINT "_pages_v_blocks_organogram_root_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_organogram"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram" ADD CONSTRAINT "_pages_v_blocks_organogram_root_photo_id_media_id_fk" FOREIGN KEY ("root_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_organogram" ADD CONSTRAINT "_pages_v_blocks_organogram_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners_partners" ADD CONSTRAINT "_pages_v_blocks_partners_partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners_partners" ADD CONSTRAINT "_pages_v_blocks_partners_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners_associations" ADD CONSTRAINT "_pages_v_blocks_partners_associations_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners_associations" ADD CONSTRAINT "_pages_v_blocks_partners_associations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners" ADD CONSTRAINT "_pages_v_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_cards_videos" ADD CONSTRAINT "_pages_v_blocks_video_cards_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_cards" ADD CONSTRAINT "_pages_v_blocks_video_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_embed" ADD CONSTRAINT "_pages_v_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_activity_reports_reports" ADD CONSTRAINT "_pages_v_blocks_activity_reports_reports_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_activity_reports_reports" ADD CONSTRAINT "_pages_v_blocks_activity_reports_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_activity_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_activity_reports" ADD CONSTRAINT "_pages_v_blocks_activity_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_meta_image_id_media_id_fk" FOREIGN KEY ("version_seo_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_clauses_fk" FOREIGN KEY ("clauses_id") REFERENCES "public"."clauses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_parent_id_news_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "activity_reports" ADD CONSTRAINT "activity_reports_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clauses" ADD CONSTRAINT "clauses_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clauses" ADD CONSTRAINT "clauses_rtf_id_media_id_fk" FOREIGN KEY ("rtf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clauses" ADD CONSTRAINT "clauses_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_activity_reports_fk" FOREIGN KEY ("activity_reports_id") REFERENCES "public"."activity_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_timeline_items_fk" FOREIGN KEY ("timeline_items_id") REFERENCES "public"."timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_clauses_fk" FOREIGN KEY ("clauses_id") REFERENCES "public"."clauses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "pages_blocks_photo_hero_carousel_slides_order_idx" ON "pages_blocks_photo_hero_carousel_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_photo_hero_carousel_slides_parent_id_idx" ON "pages_blocks_photo_hero_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_photo_hero_carousel_slides_image_idx" ON "pages_blocks_photo_hero_carousel_slides" USING btree ("image_id");
  CREATE INDEX "pages_blocks_photo_hero_carousel_order_idx" ON "pages_blocks_photo_hero_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_photo_hero_carousel_parent_id_idx" ON "pages_blocks_photo_hero_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_photo_hero_carousel_path_idx" ON "pages_blocks_photo_hero_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_news_section_order_idx" ON "pages_blocks_news_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_news_section_parent_id_idx" ON "pages_blocks_news_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_news_section_path_idx" ON "pages_blocks_news_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_documents_section_items_order_idx" ON "pages_blocks_documents_section_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_documents_section_items_parent_id_idx" ON "pages_blocks_documents_section_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_documents_section_items_file_idx" ON "pages_blocks_documents_section_items" USING btree ("file_id");
  CREATE INDEX "pages_blocks_documents_section_order_idx" ON "pages_blocks_documents_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_documents_section_parent_id_idx" ON "pages_blocks_documents_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_documents_section_path_idx" ON "pages_blocks_documents_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_calculator_order_idx" ON "pages_blocks_calculator" USING btree ("_order");
  CREATE INDEX "pages_blocks_calculator_parent_id_idx" ON "pages_blocks_calculator" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_path_idx" ON "pages_blocks_calculator" USING btree ("_path");
  CREATE INDEX "pages_blocks_clauses_grid_order_idx" ON "pages_blocks_clauses_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_clauses_grid_parent_id_idx" ON "pages_blocks_clauses_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_clauses_grid_path_idx" ON "pages_blocks_clauses_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_dynamic_grid_columns_order_idx" ON "pages_blocks_dynamic_grid_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_grid_columns_parent_id_idx" ON "pages_blocks_dynamic_grid_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_grid_rows_order_idx" ON "pages_blocks_dynamic_grid_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_grid_rows_parent_id_idx" ON "pages_blocks_dynamic_grid_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_grid_order_idx" ON "pages_blocks_dynamic_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_grid_parent_id_idx" ON "pages_blocks_dynamic_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_grid_path_idx" ON "pages_blocks_dynamic_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_download_grid_documents_order_idx" ON "pages_blocks_download_grid_documents" USING btree ("_order");
  CREATE INDEX "pages_blocks_download_grid_documents_parent_id_idx" ON "pages_blocks_download_grid_documents" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_download_grid_documents_pdf_idx" ON "pages_blocks_download_grid_documents" USING btree ("pdf_id");
  CREATE INDEX "pages_blocks_download_grid_documents_rtf_idx" ON "pages_blocks_download_grid_documents" USING btree ("rtf_id");
  CREATE INDEX "pages_blocks_download_grid_documents_doc_idx" ON "pages_blocks_download_grid_documents" USING btree ("doc_id");
  CREATE INDEX "pages_blocks_download_grid_documents_xls_idx" ON "pages_blocks_download_grid_documents" USING btree ("xls_id");
  CREATE INDEX "pages_blocks_download_grid_documents_zip_idx" ON "pages_blocks_download_grid_documents" USING btree ("zip_id");
  CREATE INDEX "pages_blocks_download_grid_order_idx" ON "pages_blocks_download_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_download_grid_parent_id_idx" ON "pages_blocks_download_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_download_grid_path_idx" ON "pages_blocks_download_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_download_links_items_order_idx" ON "pages_blocks_download_links_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_download_links_items_parent_id_idx" ON "pages_blocks_download_links_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_download_links_items_file_idx" ON "pages_blocks_download_links_items" USING btree ("file_id");
  CREATE INDEX "pages_blocks_download_links_order_idx" ON "pages_blocks_download_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_download_links_parent_id_idx" ON "pages_blocks_download_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_download_links_path_idx" ON "pages_blocks_download_links" USING btree ("_path");
  CREATE INDEX "pages_blocks_quick_links_items_order_idx" ON "pages_blocks_quick_links_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_links_items_parent_id_idx" ON "pages_blocks_quick_links_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_links_order_idx" ON "pages_blocks_quick_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_links_parent_id_idx" ON "pages_blocks_quick_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_links_path_idx" ON "pages_blocks_quick_links" USING btree ("_path");
  CREATE INDEX "pages_blocks_organogram_root_children_children_order_idx" ON "pages_blocks_organogram_root_children_children" USING btree ("_order");
  CREATE INDEX "pages_blocks_organogram_root_children_children_parent_id_idx" ON "pages_blocks_organogram_root_children_children" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_organogram_root_children_children_photo_idx" ON "pages_blocks_organogram_root_children_children" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_organogram_root_children_order_idx" ON "pages_blocks_organogram_root_children" USING btree ("_order");
  CREATE INDEX "pages_blocks_organogram_root_children_parent_id_idx" ON "pages_blocks_organogram_root_children" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_organogram_root_children_photo_idx" ON "pages_blocks_organogram_root_children" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_organogram_order_idx" ON "pages_blocks_organogram" USING btree ("_order");
  CREATE INDEX "pages_blocks_organogram_parent_id_idx" ON "pages_blocks_organogram" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_organogram_path_idx" ON "pages_blocks_organogram" USING btree ("_path");
  CREATE INDEX "pages_blocks_organogram_root_root_photo_idx" ON "pages_blocks_organogram" USING btree ("root_photo_id");
  CREATE INDEX "pages_blocks_timeline_items_order_idx" ON "pages_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_parent_id_idx" ON "pages_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX "pages_blocks_partners_partners_order_idx" ON "pages_blocks_partners_partners" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_partners_parent_id_idx" ON "pages_blocks_partners_partners" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_partners_logo_idx" ON "pages_blocks_partners_partners" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_partners_associations_order_idx" ON "pages_blocks_partners_associations" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_associations_parent_id_idx" ON "pages_blocks_partners_associations" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_associations_logo_idx" ON "pages_blocks_partners_associations" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_partners_order_idx" ON "pages_blocks_partners" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_parent_id_idx" ON "pages_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_path_idx" ON "pages_blocks_partners" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_cards_videos_order_idx" ON "pages_blocks_video_cards_videos" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_cards_videos_parent_id_idx" ON "pages_blocks_video_cards_videos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_cards_order_idx" ON "pages_blocks_video_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_cards_parent_id_idx" ON "pages_blocks_video_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_cards_path_idx" ON "pages_blocks_video_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_embed_order_idx" ON "pages_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_embed_parent_id_idx" ON "pages_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_embed_path_idx" ON "pages_blocks_video_embed" USING btree ("_path");
  CREATE INDEX "pages_blocks_activity_reports_reports_order_idx" ON "pages_blocks_activity_reports_reports" USING btree ("_order");
  CREATE INDEX "pages_blocks_activity_reports_reports_parent_id_idx" ON "pages_blocks_activity_reports_reports" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_activity_reports_reports_pdf_idx" ON "pages_blocks_activity_reports_reports" USING btree ("pdf_id");
  CREATE INDEX "pages_blocks_activity_reports_order_idx" ON "pages_blocks_activity_reports" USING btree ("_order");
  CREATE INDEX "pages_blocks_activity_reports_parent_id_idx" ON "pages_blocks_activity_reports" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_activity_reports_path_idx" ON "pages_blocks_activity_reports" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX "pages_seo_seo_meta_image_idx" ON "pages" USING btree ("seo_meta_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_clauses_id_idx" ON "pages_rels" USING btree ("clauses_id");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_slides_order_idx" ON "_pages_v_blocks_photo_hero_carousel_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_slides_parent_id_idx" ON "_pages_v_blocks_photo_hero_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_slides_image_idx" ON "_pages_v_blocks_photo_hero_carousel_slides" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_order_idx" ON "_pages_v_blocks_photo_hero_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_parent_id_idx" ON "_pages_v_blocks_photo_hero_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_photo_hero_carousel_path_idx" ON "_pages_v_blocks_photo_hero_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_news_section_order_idx" ON "_pages_v_blocks_news_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_news_section_parent_id_idx" ON "_pages_v_blocks_news_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_news_section_path_idx" ON "_pages_v_blocks_news_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_documents_section_items_order_idx" ON "_pages_v_blocks_documents_section_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_documents_section_items_parent_id_idx" ON "_pages_v_blocks_documents_section_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_documents_section_items_file_idx" ON "_pages_v_blocks_documents_section_items" USING btree ("file_id");
  CREATE INDEX "_pages_v_blocks_documents_section_order_idx" ON "_pages_v_blocks_documents_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_documents_section_parent_id_idx" ON "_pages_v_blocks_documents_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_documents_section_path_idx" ON "_pages_v_blocks_documents_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_calculator_order_idx" ON "_pages_v_blocks_calculator" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_calculator_parent_id_idx" ON "_pages_v_blocks_calculator" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_calculator_path_idx" ON "_pages_v_blocks_calculator" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_clauses_grid_order_idx" ON "_pages_v_blocks_clauses_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_clauses_grid_parent_id_idx" ON "_pages_v_blocks_clauses_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_clauses_grid_path_idx" ON "_pages_v_blocks_clauses_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_columns_order_idx" ON "_pages_v_blocks_dynamic_grid_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_columns_parent_id_idx" ON "_pages_v_blocks_dynamic_grid_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_rows_order_idx" ON "_pages_v_blocks_dynamic_grid_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_rows_parent_id_idx" ON "_pages_v_blocks_dynamic_grid_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_order_idx" ON "_pages_v_blocks_dynamic_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_parent_id_idx" ON "_pages_v_blocks_dynamic_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_grid_path_idx" ON "_pages_v_blocks_dynamic_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_order_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_parent_id_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_pdf_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("pdf_id");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_rtf_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("rtf_id");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_doc_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("doc_id");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_xls_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("xls_id");
  CREATE INDEX "_pages_v_blocks_download_grid_documents_zip_idx" ON "_pages_v_blocks_download_grid_documents" USING btree ("zip_id");
  CREATE INDEX "_pages_v_blocks_download_grid_order_idx" ON "_pages_v_blocks_download_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_download_grid_parent_id_idx" ON "_pages_v_blocks_download_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_download_grid_path_idx" ON "_pages_v_blocks_download_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_download_links_items_order_idx" ON "_pages_v_blocks_download_links_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_download_links_items_parent_id_idx" ON "_pages_v_blocks_download_links_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_download_links_items_file_idx" ON "_pages_v_blocks_download_links_items" USING btree ("file_id");
  CREATE INDEX "_pages_v_blocks_download_links_order_idx" ON "_pages_v_blocks_download_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_download_links_parent_id_idx" ON "_pages_v_blocks_download_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_download_links_path_idx" ON "_pages_v_blocks_download_links" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_quick_links_items_order_idx" ON "_pages_v_blocks_quick_links_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quick_links_items_parent_id_idx" ON "_pages_v_blocks_quick_links_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quick_links_order_idx" ON "_pages_v_blocks_quick_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quick_links_parent_id_idx" ON "_pages_v_blocks_quick_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quick_links_path_idx" ON "_pages_v_blocks_quick_links" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_children_order_idx" ON "_pages_v_blocks_organogram_root_children_children" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_children_parent_id_idx" ON "_pages_v_blocks_organogram_root_children_children" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_children_photo_idx" ON "_pages_v_blocks_organogram_root_children_children" USING btree ("photo_id");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_order_idx" ON "_pages_v_blocks_organogram_root_children" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_parent_id_idx" ON "_pages_v_blocks_organogram_root_children" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_organogram_root_children_photo_idx" ON "_pages_v_blocks_organogram_root_children" USING btree ("photo_id");
  CREATE INDEX "_pages_v_blocks_organogram_order_idx" ON "_pages_v_blocks_organogram" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_organogram_parent_id_idx" ON "_pages_v_blocks_organogram" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_organogram_path_idx" ON "_pages_v_blocks_organogram" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_organogram_root_root_photo_idx" ON "_pages_v_blocks_organogram" USING btree ("root_photo_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_order_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_partners_partners_order_idx" ON "_pages_v_blocks_partners_partners" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_partners_partners_parent_id_idx" ON "_pages_v_blocks_partners_partners" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_partners_logo_idx" ON "_pages_v_blocks_partners_partners" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_partners_associations_order_idx" ON "_pages_v_blocks_partners_associations" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_partners_associations_parent_id_idx" ON "_pages_v_blocks_partners_associations" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_associations_logo_idx" ON "_pages_v_blocks_partners_associations" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_partners_order_idx" ON "_pages_v_blocks_partners" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_partners_parent_id_idx" ON "_pages_v_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_path_idx" ON "_pages_v_blocks_partners" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_cards_videos_order_idx" ON "_pages_v_blocks_video_cards_videos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_cards_videos_parent_id_idx" ON "_pages_v_blocks_video_cards_videos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_cards_order_idx" ON "_pages_v_blocks_video_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_cards_parent_id_idx" ON "_pages_v_blocks_video_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_cards_path_idx" ON "_pages_v_blocks_video_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_embed_order_idx" ON "_pages_v_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_embed_parent_id_idx" ON "_pages_v_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_embed_path_idx" ON "_pages_v_blocks_video_embed" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_activity_reports_reports_order_idx" ON "_pages_v_blocks_activity_reports_reports" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_activity_reports_reports_parent_id_idx" ON "_pages_v_blocks_activity_reports_reports" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_activity_reports_reports_pdf_idx" ON "_pages_v_blocks_activity_reports_reports" USING btree ("pdf_id");
  CREATE INDEX "_pages_v_blocks_activity_reports_order_idx" ON "_pages_v_blocks_activity_reports" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_activity_reports_parent_id_idx" ON "_pages_v_blocks_activity_reports" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_activity_reports_path_idx" ON "_pages_v_blocks_activity_reports" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_seo_version_seo_meta_image_idx" ON "_pages_v" USING btree ("version_seo_meta_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_clauses_id_idx" ON "_pages_v_rels" USING btree ("clauses_id");
  CREATE UNIQUE INDEX "news_slug_idx" ON "news" USING btree ("slug");
  CREATE INDEX "news_featured_image_idx" ON "news" USING btree ("featured_image_id");
  CREATE INDEX "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX "news__status_idx" ON "news" USING btree ("_status");
  CREATE INDEX "_news_v_parent_idx" ON "_news_v" USING btree ("parent_id");
  CREATE INDEX "_news_v_version_version_slug_idx" ON "_news_v" USING btree ("version_slug");
  CREATE INDEX "_news_v_version_version_featured_image_idx" ON "_news_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_news_v_version_version_updated_at_idx" ON "_news_v" USING btree ("version_updated_at");
  CREATE INDEX "_news_v_version_version_created_at_idx" ON "_news_v" USING btree ("version_created_at");
  CREATE INDEX "_news_v_version_version__status_idx" ON "_news_v" USING btree ("version__status");
  CREATE INDEX "_news_v_created_at_idx" ON "_news_v" USING btree ("created_at");
  CREATE INDEX "_news_v_updated_at_idx" ON "_news_v" USING btree ("updated_at");
  CREATE INDEX "_news_v_latest_idx" ON "_news_v" USING btree ("latest");
  CREATE INDEX "_news_v_autosave_idx" ON "_news_v" USING btree ("autosave");
  CREATE INDEX "partners_logo_idx" ON "partners" USING btree ("logo_id");
  CREATE INDEX "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX "activity_reports_year_idx" ON "activity_reports" USING btree ("year");
  CREATE INDEX "activity_reports_pdf_idx" ON "activity_reports" USING btree ("pdf_id");
  CREATE INDEX "activity_reports_updated_at_idx" ON "activity_reports" USING btree ("updated_at");
  CREATE INDEX "activity_reports_created_at_idx" ON "activity_reports" USING btree ("created_at");
  CREATE INDEX "timeline_items_order_idx" ON "timeline_items" USING btree ("order");
  CREATE INDEX "timeline_items_updated_at_idx" ON "timeline_items" USING btree ("updated_at");
  CREATE INDEX "timeline_items_created_at_idx" ON "timeline_items" USING btree ("created_at");
  CREATE UNIQUE INDEX "clauses_number_idx" ON "clauses" USING btree ("number");
  CREATE INDEX "clauses_title_idx" ON "clauses" USING btree ("title");
  CREATE INDEX "clauses_pdf_idx" ON "clauses" USING btree ("pdf_id");
  CREATE INDEX "clauses_rtf_idx" ON "clauses" USING btree ("rtf_id");
  CREATE INDEX "clauses_doc_idx" ON "clauses" USING btree ("doc_id");
  CREATE INDEX "clauses_updated_at_idx" ON "clauses" USING btree ("updated_at");
  CREATE INDEX "clauses_created_at_idx" ON "clauses" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX "payload_locked_documents_rels_activity_reports_id_idx" ON "payload_locked_documents_rels" USING btree ("activity_reports_id");
  CREATE INDEX "payload_locked_documents_rels_timeline_items_id_idx" ON "payload_locked_documents_rels" USING btree ("timeline_items_id");
  CREATE INDEX "payload_locked_documents_rels_clauses_id_idx" ON "payload_locked_documents_rels" USING btree ("clauses_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_photo_hero_carousel_slides" CASCADE;
  DROP TABLE "pages_blocks_photo_hero_carousel" CASCADE;
  DROP TABLE "pages_blocks_news_section" CASCADE;
  DROP TABLE "pages_blocks_documents_section_items" CASCADE;
  DROP TABLE "pages_blocks_documents_section" CASCADE;
  DROP TABLE "pages_blocks_calculator" CASCADE;
  DROP TABLE "pages_blocks_clauses_grid" CASCADE;
  DROP TABLE "pages_blocks_dynamic_grid_columns" CASCADE;
  DROP TABLE "pages_blocks_dynamic_grid_rows" CASCADE;
  DROP TABLE "pages_blocks_dynamic_grid" CASCADE;
  DROP TABLE "pages_blocks_download_grid_documents" CASCADE;
  DROP TABLE "pages_blocks_download_grid" CASCADE;
  DROP TABLE "pages_blocks_download_links_items" CASCADE;
  DROP TABLE "pages_blocks_download_links" CASCADE;
  DROP TABLE "pages_blocks_quick_links_items" CASCADE;
  DROP TABLE "pages_blocks_quick_links" CASCADE;
  DROP TABLE "pages_blocks_organogram_root_children_children" CASCADE;
  DROP TABLE "pages_blocks_organogram_root_children" CASCADE;
  DROP TABLE "pages_blocks_organogram" CASCADE;
  DROP TABLE "pages_blocks_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "pages_blocks_partners_partners" CASCADE;
  DROP TABLE "pages_blocks_partners_associations" CASCADE;
  DROP TABLE "pages_blocks_partners" CASCADE;
  DROP TABLE "pages_blocks_video_cards_videos" CASCADE;
  DROP TABLE "pages_blocks_video_cards" CASCADE;
  DROP TABLE "pages_blocks_video_embed" CASCADE;
  DROP TABLE "pages_blocks_activity_reports_reports" CASCADE;
  DROP TABLE "pages_blocks_activity_reports" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_photo_hero_carousel_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_photo_hero_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_news_section" CASCADE;
  DROP TABLE "_pages_v_blocks_documents_section_items" CASCADE;
  DROP TABLE "_pages_v_blocks_documents_section" CASCADE;
  DROP TABLE "_pages_v_blocks_calculator" CASCADE;
  DROP TABLE "_pages_v_blocks_clauses_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_grid_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_grid_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_download_grid_documents" CASCADE;
  DROP TABLE "_pages_v_blocks_download_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_download_links_items" CASCADE;
  DROP TABLE "_pages_v_blocks_download_links" CASCADE;
  DROP TABLE "_pages_v_blocks_quick_links_items" CASCADE;
  DROP TABLE "_pages_v_blocks_quick_links" CASCADE;
  DROP TABLE "_pages_v_blocks_organogram_root_children_children" CASCADE;
  DROP TABLE "_pages_v_blocks_organogram_root_children" CASCADE;
  DROP TABLE "_pages_v_blocks_organogram" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_partners_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_partners_associations" CASCADE;
  DROP TABLE "_pages_v_blocks_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_video_cards_videos" CASCADE;
  DROP TABLE "_pages_v_blocks_video_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_video_embed" CASCADE;
  DROP TABLE "_pages_v_blocks_activity_reports_reports" CASCADE;
  DROP TABLE "_pages_v_blocks_activity_reports" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "_news_v" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "activity_reports" CASCADE;
  DROP TABLE "timeline_items" CASCADE;
  DROP TABLE "clauses" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_news_section_variant";
  DROP TYPE "public"."enum_pages_blocks_documents_section_items_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_grid_columns_type";
  DROP TYPE "public"."enum_pages_blocks_video_cards_videos_type";
  DROP TYPE "public"."enum_pages_blocks_video_embed_type";
  DROP TYPE "public"."enum_pages_icon";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_news_section_variant";
  DROP TYPE "public"."enum__pages_v_blocks_documents_section_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_grid_columns_type";
  DROP TYPE "public"."enum__pages_v_blocks_video_cards_videos_type";
  DROP TYPE "public"."enum__pages_v_blocks_video_embed_type";
  DROP TYPE "public"."enum__pages_v_version_icon";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_news_category";
  DROP TYPE "public"."enum_news_status";
  DROP TYPE "public"."enum__news_v_version_category";
  DROP TYPE "public"."enum__news_v_version_status";
  DROP TYPE "public"."enum_partners_type";
  DROP TYPE "public"."enum_videos_type";`)
}
