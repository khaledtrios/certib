--
-- PostgreSQL database dump
--

\restrict G2H13OjjpCppjjSSkMQ9N5f7fXPS25J5VlEBOBTYOdPXaJYvhG7i8fELXKUr8No

-- Dumped from database version 16.14 (Ubuntu 16.14-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.14 (Ubuntu 16.14-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum__formations_v_version_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__formations_v_version_category AS ENUM (
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'autre'
);


ALTER TYPE public.enum__formations_v_version_category OWNER TO postgres;

--
-- Name: enum__formations_v_version_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__formations_v_version_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum__formations_v_version_status OWNER TO postgres;

--
-- Name: enum__news_v_version_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__news_v_version_category AS ENUM (
    'actualite',
    'communique',
    'evenement'
);


ALTER TYPE public.enum__news_v_version_category OWNER TO postgres;

--
-- Name: enum__news_v_version_rubrique; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__news_v_version_rubrique AS ENUM (
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'general'
);


ALTER TYPE public.enum__news_v_version_rubrique OWNER TO postgres;

--
-- Name: enum__news_v_version_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__news_v_version_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum__news_v_version_status OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_documents_section_items_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_documents_section_items_type AS ENUM (
    'pdf',
    'video'
);


ALTER TYPE public.enum__pages_v_blocks_documents_section_items_type OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_dynamic_grid_columns_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_dynamic_grid_columns_type AS ENUM (
    'text',
    'number',
    'percentage',
    'date'
);


ALTER TYPE public.enum__pages_v_blocks_dynamic_grid_columns_type OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_formations_section_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_formations_section_category AS ENUM (
    'all',
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'autre'
);


ALTER TYPE public.enum__pages_v_blocks_formations_section_category OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_news_section_variant; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_news_section_variant AS ENUM (
    'default',
    'block'
);


ALTER TYPE public.enum__pages_v_blocks_news_section_variant OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_video_cards_videos_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_video_cards_videos_type AS ENUM (
    'youtube',
    'internal'
);


ALTER TYPE public.enum__pages_v_blocks_video_cards_videos_type OWNER TO postgres;

--
-- Name: enum__pages_v_blocks_video_embed_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_blocks_video_embed_type AS ENUM (
    'youtube',
    'internal'
);


ALTER TYPE public.enum__pages_v_blocks_video_embed_type OWNER TO postgres;

--
-- Name: enum__pages_v_version_icon; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_version_icon AS ENUM (
    'user',
    'document',
    'globe',
    'leaf',
    'calendar',
    'building',
    'book',
    'graduation',
    'external-link',
    'star',
    'settings',
    'list'
);


ALTER TYPE public.enum__pages_v_version_icon OWNER TO postgres;

--
-- Name: enum__pages_v_version_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum__pages_v_version_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum__pages_v_version_status OWNER TO postgres;

--
-- Name: enum_formations_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_formations_category AS ENUM (
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'autre'
);


ALTER TYPE public.enum_formations_category OWNER TO postgres;

--
-- Name: enum_formations_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_formations_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum_formations_status OWNER TO postgres;

--
-- Name: enum_news_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_category AS ENUM (
    'actualite',
    'communique',
    'evenement'
);


ALTER TYPE public.enum_news_category OWNER TO postgres;

--
-- Name: enum_news_rubrique; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_rubrique AS ENUM (
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'general'
);


ALTER TYPE public.enum_news_rubrique OWNER TO postgres;

--
-- Name: enum_news_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum_news_status OWNER TO postgres;

--
-- Name: enum_newsletter_subscribers_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_newsletter_subscribers_status AS ENUM (
    'active',
    'unsubscribed'
);


ALTER TYPE public.enum_newsletter_subscribers_status OWNER TO postgres;

--
-- Name: enum_pages_blocks_documents_section_items_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_documents_section_items_type AS ENUM (
    'pdf',
    'video'
);


ALTER TYPE public.enum_pages_blocks_documents_section_items_type OWNER TO postgres;

--
-- Name: enum_pages_blocks_dynamic_grid_columns_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_dynamic_grid_columns_type AS ENUM (
    'text',
    'number',
    'percentage',
    'date'
);


ALTER TYPE public.enum_pages_blocks_dynamic_grid_columns_type OWNER TO postgres;

--
-- Name: enum_pages_blocks_formations_section_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_formations_section_category AS ENUM (
    'all',
    'marches-publics',
    'performance-energetique',
    'construction-durable',
    'digitalisation-bim',
    'autre'
);


ALTER TYPE public.enum_pages_blocks_formations_section_category OWNER TO postgres;

--
-- Name: enum_pages_blocks_news_section_variant; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_news_section_variant AS ENUM (
    'default',
    'block'
);


ALTER TYPE public.enum_pages_blocks_news_section_variant OWNER TO postgres;

--
-- Name: enum_pages_blocks_video_cards_videos_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_video_cards_videos_type AS ENUM (
    'youtube',
    'internal'
);


ALTER TYPE public.enum_pages_blocks_video_cards_videos_type OWNER TO postgres;

--
-- Name: enum_pages_blocks_video_embed_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_blocks_video_embed_type AS ENUM (
    'youtube',
    'internal'
);


ALTER TYPE public.enum_pages_blocks_video_embed_type OWNER TO postgres;

--
-- Name: enum_pages_icon; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_icon AS ENUM (
    'user',
    'document',
    'globe',
    'leaf',
    'calendar',
    'building',
    'book',
    'graduation',
    'external-link',
    'star',
    'settings',
    'list'
);


ALTER TYPE public.enum_pages_icon OWNER TO postgres;

--
-- Name: enum_pages_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_pages_status AS ENUM (
    'draft',
    'published'
);


ALTER TYPE public.enum_pages_status OWNER TO postgres;

--
-- Name: enum_partners_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_partners_type AS ENUM (
    'partner',
    'association'
);


ALTER TYPE public.enum_partners_type OWNER TO postgres;

--
-- Name: enum_videos_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_videos_type AS ENUM (
    'youtube',
    'internal'
);


ALTER TYPE public.enum_videos_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _formations_v; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._formations_v (
    id integer NOT NULL,
    parent_id integer,
    version_title character varying,
    version_slug character varying,
    version_image_id integer,
    version_category public.enum__formations_v_version_category,
    version_start_date timestamp(3) with time zone,
    version_end_date timestamp(3) with time zone,
    version_duration character varying,
    version_location character varying,
    version_price character varying,
    version_max_participants numeric,
    version_description jsonb,
    version_registration_url character varying,
    version_registration_email character varying,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__formations_v_version_status DEFAULT 'draft'::public.enum__formations_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    latest boolean
);


ALTER TABLE public._formations_v OWNER TO postgres;

--
-- Name: _formations_v_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._formations_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._formations_v_id_seq OWNER TO postgres;

--
-- Name: _formations_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._formations_v_id_seq OWNED BY public._formations_v.id;


--
-- Name: _news_v; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._news_v (
    id integer NOT NULL,
    parent_id integer,
    version_title character varying,
    version_slug character varying,
    version_category public.enum__news_v_version_category DEFAULT 'actualite'::public.enum__news_v_version_category,
    version_published_at timestamp(3) with time zone,
    version_featured_image_id integer,
    version_excerpt character varying,
    version_content jsonb,
    version_seo_meta_title character varying,
    version_seo_meta_description character varying,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__news_v_version_status DEFAULT 'draft'::public.enum__news_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    latest boolean,
    autosave boolean,
    version_newsletter_sent_at timestamp(3) with time zone,
    version_rubrique public.enum__news_v_version_rubrique
);


ALTER TABLE public._news_v OWNER TO postgres;

--
-- Name: _news_v_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._news_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._news_v_id_seq OWNER TO postgres;

--
-- Name: _news_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._news_v_id_seq OWNED BY public._news_v.id;


--
-- Name: _pages_v; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v (
    id integer NOT NULL,
    parent_id integer,
    version_title character varying,
    version_slug character varying,
    version_parent_id integer,
    version_menu_order numeric DEFAULT 100,
    version_icon public.enum__pages_v_version_icon,
    version_content jsonb,
    version_seo_meta_title character varying,
    version_seo_meta_description character varying,
    version_seo_meta_image_id integer,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__pages_v_version_status DEFAULT 'draft'::public.enum__pages_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    latest boolean,
    autosave boolean
);


ALTER TABLE public._pages_v OWNER TO postgres;

--
-- Name: _pages_v_blocks_accordion_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_accordion_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_accordion_block OWNER TO postgres;

--
-- Name: _pages_v_blocks_accordion_block_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_accordion_block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_accordion_block_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_accordion_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_accordion_block_id_seq OWNED BY public._pages_v_blocks_accordion_block.id;


--
-- Name: _pages_v_blocks_accordion_block_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_accordion_block_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    title character varying,
    content jsonb,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_accordion_block_items OWNER TO postgres;

--
-- Name: _pages_v_blocks_accordion_block_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_accordion_block_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_accordion_block_items_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_accordion_block_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_accordion_block_items_id_seq OWNED BY public._pages_v_blocks_accordion_block_items.id;


--
-- Name: _pages_v_blocks_activity_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_activity_reports (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_activity_reports OWNER TO postgres;

--
-- Name: _pages_v_blocks_activity_reports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_activity_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_activity_reports_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_activity_reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_activity_reports_id_seq OWNED BY public._pages_v_blocks_activity_reports.id;


--
-- Name: _pages_v_blocks_activity_reports_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_activity_reports_reports (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    year character varying,
    pdf_id integer,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_activity_reports_reports OWNER TO postgres;

--
-- Name: _pages_v_blocks_activity_reports_reports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_activity_reports_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_activity_reports_reports_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_activity_reports_reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_activity_reports_reports_id_seq OWNED BY public._pages_v_blocks_activity_reports_reports.id;


--
-- Name: _pages_v_blocks_calculator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_calculator (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying DEFAULT 'Calculateur'::character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_calculator OWNER TO postgres;

--
-- Name: _pages_v_blocks_calculator_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_calculator_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_calculator_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_calculator_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_calculator_id_seq OWNED BY public._pages_v_blocks_calculator.id;


--
-- Name: _pages_v_blocks_clauses_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_clauses_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    redirect_label character varying,
    redirect_href character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_clauses_grid OWNER TO postgres;

--
-- Name: _pages_v_blocks_clauses_grid_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_clauses_grid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_clauses_grid_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_clauses_grid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_clauses_grid_id_seq OWNED BY public._pages_v_blocks_clauses_grid.id;


--
-- Name: _pages_v_blocks_contact_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_contact_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    phone character varying DEFAULT '+352 24 52 73 11'::character varying,
    email character varying DEFAULT 'contact@crtib.lu'::character varying,
    address character varying DEFAULT '2, Circuit de la Foire Internationale
L-1347 Luxembourg
BP 1604 – L-1016 Luxembourg'::character varying,
    hours character varying DEFAULT 'Lundi – Vendredi · 8h30 – 17h30'::character varying,
    maps_embed_url character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_contact_block OWNER TO postgres;

--
-- Name: _pages_v_blocks_contact_block_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_contact_block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_contact_block_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_contact_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_contact_block_id_seq OWNED BY public._pages_v_blocks_contact_block.id;


--
-- Name: _pages_v_blocks_documents_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_documents_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying DEFAULT 'Documents'::character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_documents_section OWNER TO postgres;

--
-- Name: _pages_v_blocks_documents_section_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_documents_section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_documents_section_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_documents_section_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_documents_section_id_seq OWNED BY public._pages_v_blocks_documents_section.id;


--
-- Name: _pages_v_blocks_documents_section_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_documents_section_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    type public.enum__pages_v_blocks_documents_section_items_type,
    title character varying,
    trigger_label character varying DEFAULT 'Voir le PDF'::character varying,
    file_id integer,
    video_url character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_documents_section_items OWNER TO postgres;

--
-- Name: _pages_v_blocks_documents_section_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_documents_section_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_documents_section_items_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_documents_section_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_documents_section_items_id_seq OWNED BY public._pages_v_blocks_documents_section_items.id;


--
-- Name: _pages_v_blocks_download_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_download_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    page_size numeric DEFAULT 10,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_download_grid OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_grid_documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_download_grid_documents (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    numero character varying,
    titulo character varying,
    data timestamp(3) with time zone,
    versao character varying,
    pdf_id integer,
    rtf_id integer,
    doc_id integer,
    xls_id integer,
    zip_id integer,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_download_grid_documents OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_grid_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_download_grid_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_download_grid_documents_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_grid_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_download_grid_documents_id_seq OWNED BY public._pages_v_blocks_download_grid_documents.id;


--
-- Name: _pages_v_blocks_download_grid_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_download_grid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_download_grid_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_grid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_download_grid_id_seq OWNED BY public._pages_v_blocks_download_grid.id;


--
-- Name: _pages_v_blocks_download_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_download_links (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_download_links OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_download_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_download_links_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_download_links_id_seq OWNED BY public._pages_v_blocks_download_links.id;


--
-- Name: _pages_v_blocks_download_links_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_download_links_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    label character varying,
    file_id integer,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_download_links_items OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_links_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_download_links_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_download_links_items_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_download_links_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_download_links_items_id_seq OWNED BY public._pages_v_blocks_download_links_items.id;


--
-- Name: _pages_v_blocks_dynamic_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_dynamic_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_dynamic_grid OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_columns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_dynamic_grid_columns (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    _uuid character varying,
    label character varying,
    type public.enum__pages_v_blocks_dynamic_grid_columns_type,
    "precision" numeric DEFAULT 2,
    currency character varying
);


ALTER TABLE public._pages_v_blocks_dynamic_grid_columns OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_columns_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_dynamic_grid_columns_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_columns_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_columns_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_columns_id_seq OWNED BY public._pages_v_blocks_dynamic_grid_columns.id;


--
-- Name: _pages_v_blocks_dynamic_grid_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_dynamic_grid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_id_seq OWNED BY public._pages_v_blocks_dynamic_grid.id;


--
-- Name: _pages_v_blocks_dynamic_grid_rows; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_dynamic_grid_rows (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    "values" jsonb,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_dynamic_grid_rows OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_rows_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_dynamic_grid_rows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_rows_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_dynamic_grid_rows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_dynamic_grid_rows_id_seq OWNED BY public._pages_v_blocks_dynamic_grid_rows.id;


--
-- Name: _pages_v_blocks_formations_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_formations_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying DEFAULT 'Formations'::character varying,
    category public.enum__pages_v_blocks_formations_section_category,
    show_filters boolean DEFAULT true,
    "limit" numeric DEFAULT 12,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_formations_section OWNER TO postgres;

--
-- Name: _pages_v_blocks_formations_section_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_formations_section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_formations_section_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_formations_section_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_formations_section_id_seq OWNED BY public._pages_v_blocks_formations_section.id;


--
-- Name: _pages_v_blocks_news_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_news_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying DEFAULT 'Actualités'::character varying,
    max_items numeric DEFAULT 3,
    variant public.enum__pages_v_blocks_news_section_variant DEFAULT 'default'::public.enum__pages_v_blocks_news_section_variant,
    cta_href character varying DEFAULT '/actualites'::character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_news_section OWNER TO postgres;

--
-- Name: _pages_v_blocks_news_section_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_news_section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_news_section_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_news_section_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_news_section_id_seq OWNED BY public._pages_v_blocks_news_section.id;


--
-- Name: _pages_v_blocks_newsletter_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_newsletter_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    heading character varying,
    description character varying,
    button_label character varying DEFAULT 'S''abonner'::character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_newsletter_block OWNER TO postgres;

--
-- Name: _pages_v_blocks_newsletter_block_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_newsletter_block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_newsletter_block_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_newsletter_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_newsletter_block_id_seq OWNED BY public._pages_v_blocks_newsletter_block.id;


--
-- Name: _pages_v_blocks_organogram; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_organogram (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    root_name character varying,
    root_role character varying,
    root_photo_id integer,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_organogram OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_organogram_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_organogram_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_organogram_id_seq OWNED BY public._pages_v_blocks_organogram.id;


--
-- Name: _pages_v_blocks_organogram_root_children; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_organogram_root_children (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    name character varying,
    role character varying,
    photo_id integer,
    _uuid character varying,
    department character varying,
    phone character varying,
    email character varying
);


ALTER TABLE public._pages_v_blocks_organogram_root_children OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_root_children_children; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_organogram_root_children_children (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    name character varying,
    role character varying,
    photo_id integer,
    _uuid character varying,
    department character varying,
    phone character varying,
    email character varying
);


ALTER TABLE public._pages_v_blocks_organogram_root_children_children OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_root_children_children_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_organogram_root_children_children_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_organogram_root_children_children_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_root_children_children_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_organogram_root_children_children_id_seq OWNED BY public._pages_v_blocks_organogram_root_children_children.id;


--
-- Name: _pages_v_blocks_organogram_root_children_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_organogram_root_children_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_organogram_root_children_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_organogram_root_children_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_organogram_root_children_id_seq OWNED BY public._pages_v_blocks_organogram_root_children.id;


--
-- Name: _pages_v_blocks_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_partners (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying DEFAULT 'Partenaires'::character varying,
    associations_title character varying DEFAULT 'En association'::character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_partners OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_associations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_partners_associations (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    name character varying,
    logo_id integer,
    href character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_partners_associations OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_associations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_partners_associations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_partners_associations_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_associations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_partners_associations_id_seq OWNED BY public._pages_v_blocks_partners_associations.id;


--
-- Name: _pages_v_blocks_partners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_partners_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_partners_id_seq OWNED BY public._pages_v_blocks_partners.id;


--
-- Name: _pages_v_blocks_partners_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_partners_partners (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    name character varying,
    logo_id integer,
    href character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_partners_partners OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_partners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_partners_partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_partners_partners_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_partners_partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_partners_partners_id_seq OWNED BY public._pages_v_blocks_partners_partners.id;


--
-- Name: _pages_v_blocks_photo_hero_carousel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_photo_hero_carousel (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    auto_play_ms numeric DEFAULT 5000,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_photo_hero_carousel OWNER TO postgres;

--
-- Name: _pages_v_blocks_photo_hero_carousel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_photo_hero_carousel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_photo_hero_carousel_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_photo_hero_carousel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_photo_hero_carousel_id_seq OWNED BY public._pages_v_blocks_photo_hero_carousel.id;


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_photo_hero_carousel_slides (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    image_id integer,
    alt character varying,
    eyebrow character varying,
    title character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_photo_hero_carousel_slides OWNER TO postgres;

--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_photo_hero_carousel_slides_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_photo_hero_carousel_slides_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_photo_hero_carousel_slides_id_seq OWNED BY public._pages_v_blocks_photo_hero_carousel_slides.id;


--
-- Name: _pages_v_blocks_quick_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_quick_links (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_quick_links OWNER TO postgres;

--
-- Name: _pages_v_blocks_quick_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_quick_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_quick_links_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_quick_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_quick_links_id_seq OWNED BY public._pages_v_blocks_quick_links.id;


--
-- Name: _pages_v_blocks_quick_links_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_quick_links_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    title character varying,
    href character varying,
    icon character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_quick_links_items OWNER TO postgres;

--
-- Name: _pages_v_blocks_quick_links_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_quick_links_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_quick_links_items_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_quick_links_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_quick_links_items_id_seq OWNED BY public._pages_v_blocks_quick_links_items.id;


--
-- Name: _pages_v_blocks_text_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_text_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    content jsonb,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_text_block OWNER TO postgres;

--
-- Name: _pages_v_blocks_text_block_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_text_block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_text_block_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_text_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_text_block_id_seq OWNED BY public._pages_v_blocks_text_block.id;


--
-- Name: _pages_v_blocks_timeline; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_timeline (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    highlight_last boolean DEFAULT true,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_timeline OWNER TO postgres;

--
-- Name: _pages_v_blocks_timeline_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_timeline_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_timeline_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_timeline_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_timeline_id_seq OWNED BY public._pages_v_blocks_timeline.id;


--
-- Name: _pages_v_blocks_timeline_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_timeline_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    year character varying,
    title character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_timeline_items OWNER TO postgres;

--
-- Name: _pages_v_blocks_timeline_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_timeline_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_timeline_items_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_timeline_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_timeline_items_id_seq OWNED BY public._pages_v_blocks_timeline_items.id;


--
-- Name: _pages_v_blocks_video_cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_video_cards (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_video_cards OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_video_cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_video_cards_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_video_cards_id_seq OWNED BY public._pages_v_blocks_video_cards.id;


--
-- Name: _pages_v_blocks_video_cards_videos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_video_cards_videos (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id integer NOT NULL,
    title character varying,
    type public.enum__pages_v_blocks_video_cards_videos_type,
    src character varying,
    _uuid character varying
);


ALTER TABLE public._pages_v_blocks_video_cards_videos OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_cards_videos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_video_cards_videos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_video_cards_videos_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_cards_videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_video_cards_videos_id_seq OWNED BY public._pages_v_blocks_video_cards_videos.id;


--
-- Name: _pages_v_blocks_video_embed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_blocks_video_embed (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id integer NOT NULL,
    title character varying,
    type public.enum__pages_v_blocks_video_embed_type DEFAULT 'youtube'::public.enum__pages_v_blocks_video_embed_type,
    src character varying,
    _uuid character varying,
    block_name character varying
);


ALTER TABLE public._pages_v_blocks_video_embed OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_embed_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_blocks_video_embed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_blocks_video_embed_id_seq OWNER TO postgres;

--
-- Name: _pages_v_blocks_video_embed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_blocks_video_embed_id_seq OWNED BY public._pages_v_blocks_video_embed.id;


--
-- Name: _pages_v_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_id_seq OWNER TO postgres;

--
-- Name: _pages_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_id_seq OWNED BY public._pages_v.id;


--
-- Name: _pages_v_rels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._pages_v_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    clauses_id integer
);


ALTER TABLE public._pages_v_rels OWNER TO postgres;

--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public._pages_v_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public._pages_v_rels_id_seq OWNER TO postgres;

--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public._pages_v_rels_id_seq OWNED BY public._pages_v_rels.id;


--
-- Name: activity_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.activity_reports (
    id integer NOT NULL,
    year character varying NOT NULL,
    pdf_id integer NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.activity_reports OWNER TO postgres;

--
-- Name: activity_reports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.activity_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.activity_reports_id_seq OWNER TO postgres;

--
-- Name: activity_reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.activity_reports_id_seq OWNED BY public.activity_reports.id;


--
-- Name: clauses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clauses (
    id integer NOT NULL,
    number character varying NOT NULL,
    title character varying NOT NULL,
    date timestamp(3) with time zone NOT NULL,
    version character varying,
    pdf_id integer,
    rtf_id integer,
    doc_id integer,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.clauses OWNER TO postgres;

--
-- Name: clauses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clauses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clauses_id_seq OWNER TO postgres;

--
-- Name: clauses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clauses_id_seq OWNED BY public.clauses.id;


--
-- Name: formations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.formations (
    id integer NOT NULL,
    title character varying,
    slug character varying,
    image_id integer,
    category public.enum_formations_category,
    start_date timestamp(3) with time zone,
    end_date timestamp(3) with time zone,
    duration character varying,
    location character varying,
    price character varying,
    max_participants numeric,
    description jsonb,
    registration_url character varying,
    registration_email character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_formations_status DEFAULT 'draft'::public.enum_formations_status
);


ALTER TABLE public.formations OWNER TO postgres;

--
-- Name: formations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.formations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.formations_id_seq OWNER TO postgres;

--
-- Name: formations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.formations_id_seq OWNED BY public.formations.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.media (
    id integer NOT NULL,
    alt character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    url character varying,
    thumbnail_u_r_l character varying,
    filename character varying,
    mime_type character varying,
    filesize numeric,
    width numeric,
    height numeric,
    focal_x numeric,
    focal_y numeric
);


ALTER TABLE public.media OWNER TO postgres;

--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.media_id_seq OWNER TO postgres;

--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;


--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying,
    slug character varying,
    category public.enum_news_category DEFAULT 'actualite'::public.enum_news_category,
    published_at timestamp(3) with time zone,
    featured_image_id integer,
    excerpt character varying,
    content jsonb,
    seo_meta_title character varying,
    seo_meta_description character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_news_status DEFAULT 'draft'::public.enum_news_status,
    newsletter_sent_at timestamp(3) with time zone,
    rubrique public.enum_news_rubrique
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.news_id_seq OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: newsletter_subscribers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.newsletter_subscribers (
    id integer NOT NULL,
    email character varying NOT NULL,
    status public.enum_newsletter_subscribers_status DEFAULT 'active'::public.enum_newsletter_subscribers_status NOT NULL,
    unsubscribe_token character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.newsletter_subscribers OWNER TO postgres;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.newsletter_subscribers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.newsletter_subscribers_id_seq OWNER TO postgres;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.newsletter_subscribers_id_seq OWNED BY public.newsletter_subscribers.id;


--
-- Name: pages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages (
    id integer NOT NULL,
    title character varying,
    slug character varying,
    parent_id integer,
    menu_order numeric DEFAULT 100,
    icon public.enum_pages_icon,
    content jsonb,
    seo_meta_title character varying,
    seo_meta_description character varying,
    seo_meta_image_id integer,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_pages_status DEFAULT 'draft'::public.enum_pages_status
);


ALTER TABLE public.pages OWNER TO postgres;

--
-- Name: pages_blocks_accordion_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_accordion_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_accordion_block OWNER TO postgres;

--
-- Name: pages_blocks_accordion_block_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_accordion_block_items (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    title character varying,
    content jsonb
);


ALTER TABLE public.pages_blocks_accordion_block_items OWNER TO postgres;

--
-- Name: pages_blocks_activity_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_activity_reports (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_activity_reports OWNER TO postgres;

--
-- Name: pages_blocks_activity_reports_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_activity_reports_reports (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    year character varying,
    pdf_id integer
);


ALTER TABLE public.pages_blocks_activity_reports_reports OWNER TO postgres;

--
-- Name: pages_blocks_calculator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_calculator (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying DEFAULT 'Calculateur'::character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_calculator OWNER TO postgres;

--
-- Name: pages_blocks_clauses_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_clauses_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    redirect_label character varying,
    redirect_href character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_clauses_grid OWNER TO postgres;

--
-- Name: pages_blocks_contact_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_contact_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    phone character varying DEFAULT '+352 24 52 73 11'::character varying,
    email character varying DEFAULT 'contact@crtib.lu'::character varying,
    address character varying DEFAULT '2, Circuit de la Foire Internationale
L-1347 Luxembourg
BP 1604 – L-1016 Luxembourg'::character varying,
    hours character varying DEFAULT 'Lundi – Vendredi · 8h30 – 17h30'::character varying,
    maps_embed_url character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_contact_block OWNER TO postgres;

--
-- Name: pages_blocks_documents_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_documents_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying DEFAULT 'Documents'::character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_documents_section OWNER TO postgres;

--
-- Name: pages_blocks_documents_section_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_documents_section_items (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    type public.enum_pages_blocks_documents_section_items_type,
    title character varying,
    trigger_label character varying DEFAULT 'Voir le PDF'::character varying,
    file_id integer,
    video_url character varying
);


ALTER TABLE public.pages_blocks_documents_section_items OWNER TO postgres;

--
-- Name: pages_blocks_download_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_download_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    page_size numeric DEFAULT 10,
    block_name character varying
);


ALTER TABLE public.pages_blocks_download_grid OWNER TO postgres;

--
-- Name: pages_blocks_download_grid_documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_download_grid_documents (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    numero character varying,
    titulo character varying,
    data timestamp(3) with time zone,
    versao character varying,
    pdf_id integer,
    rtf_id integer,
    doc_id integer,
    xls_id integer,
    zip_id integer
);


ALTER TABLE public.pages_blocks_download_grid_documents OWNER TO postgres;

--
-- Name: pages_blocks_download_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_download_links (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_download_links OWNER TO postgres;

--
-- Name: pages_blocks_download_links_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_download_links_items (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    label character varying,
    file_id integer
);


ALTER TABLE public.pages_blocks_download_links_items OWNER TO postgres;

--
-- Name: pages_blocks_dynamic_grid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_dynamic_grid (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_dynamic_grid OWNER TO postgres;

--
-- Name: pages_blocks_dynamic_grid_columns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_dynamic_grid_columns (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    label character varying,
    type public.enum_pages_blocks_dynamic_grid_columns_type,
    "precision" numeric DEFAULT 2,
    currency character varying
);


ALTER TABLE public.pages_blocks_dynamic_grid_columns OWNER TO postgres;

--
-- Name: pages_blocks_dynamic_grid_rows; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_dynamic_grid_rows (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    "values" jsonb
);


ALTER TABLE public.pages_blocks_dynamic_grid_rows OWNER TO postgres;

--
-- Name: pages_blocks_formations_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_formations_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying DEFAULT 'Formations'::character varying,
    category public.enum_pages_blocks_formations_section_category,
    show_filters boolean DEFAULT true,
    "limit" numeric DEFAULT 12,
    block_name character varying
);


ALTER TABLE public.pages_blocks_formations_section OWNER TO postgres;

--
-- Name: pages_blocks_news_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_news_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying DEFAULT 'Actualités'::character varying,
    max_items numeric DEFAULT 3,
    variant public.enum_pages_blocks_news_section_variant DEFAULT 'default'::public.enum_pages_blocks_news_section_variant,
    cta_href character varying DEFAULT '/actualites'::character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_news_section OWNER TO postgres;

--
-- Name: pages_blocks_newsletter_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_newsletter_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    heading character varying,
    description character varying,
    button_label character varying DEFAULT 'S''abonner'::character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_newsletter_block OWNER TO postgres;

--
-- Name: pages_blocks_organogram; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_organogram (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    root_name character varying,
    root_role character varying,
    root_photo_id integer,
    block_name character varying
);


ALTER TABLE public.pages_blocks_organogram OWNER TO postgres;

--
-- Name: pages_blocks_organogram_root_children; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_organogram_root_children (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    name character varying,
    role character varying,
    photo_id integer,
    department character varying,
    phone character varying,
    email character varying
);


ALTER TABLE public.pages_blocks_organogram_root_children OWNER TO postgres;

--
-- Name: pages_blocks_organogram_root_children_children; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_organogram_root_children_children (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    name character varying,
    role character varying,
    photo_id integer,
    department character varying,
    phone character varying,
    email character varying
);


ALTER TABLE public.pages_blocks_organogram_root_children_children OWNER TO postgres;

--
-- Name: pages_blocks_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_partners (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying DEFAULT 'Partenaires'::character varying,
    associations_title character varying DEFAULT 'En association'::character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_partners OWNER TO postgres;

--
-- Name: pages_blocks_partners_associations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_partners_associations (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    name character varying,
    logo_id integer,
    href character varying
);


ALTER TABLE public.pages_blocks_partners_associations OWNER TO postgres;

--
-- Name: pages_blocks_partners_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_partners_partners (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    name character varying,
    logo_id integer,
    href character varying
);


ALTER TABLE public.pages_blocks_partners_partners OWNER TO postgres;

--
-- Name: pages_blocks_photo_hero_carousel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_photo_hero_carousel (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    auto_play_ms numeric DEFAULT 5000,
    block_name character varying
);


ALTER TABLE public.pages_blocks_photo_hero_carousel OWNER TO postgres;

--
-- Name: pages_blocks_photo_hero_carousel_slides; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_photo_hero_carousel_slides (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    image_id integer,
    alt character varying,
    eyebrow character varying,
    title character varying
);


ALTER TABLE public.pages_blocks_photo_hero_carousel_slides OWNER TO postgres;

--
-- Name: pages_blocks_quick_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_quick_links (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_quick_links OWNER TO postgres;

--
-- Name: pages_blocks_quick_links_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_quick_links_items (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    title character varying,
    href character varying,
    icon character varying
);


ALTER TABLE public.pages_blocks_quick_links_items OWNER TO postgres;

--
-- Name: pages_blocks_text_block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_text_block (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    content jsonb,
    block_name character varying
);


ALTER TABLE public.pages_blocks_text_block OWNER TO postgres;

--
-- Name: pages_blocks_timeline; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_timeline (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    highlight_last boolean DEFAULT true,
    block_name character varying
);


ALTER TABLE public.pages_blocks_timeline OWNER TO postgres;

--
-- Name: pages_blocks_timeline_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_timeline_items (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    year character varying,
    title character varying
);


ALTER TABLE public.pages_blocks_timeline_items OWNER TO postgres;

--
-- Name: pages_blocks_video_cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_video_cards (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_video_cards OWNER TO postgres;

--
-- Name: pages_blocks_video_cards_videos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_video_cards_videos (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    title character varying,
    type public.enum_pages_blocks_video_cards_videos_type,
    src character varying
);


ALTER TABLE public.pages_blocks_video_cards_videos OWNER TO postgres;

--
-- Name: pages_blocks_video_embed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_blocks_video_embed (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    title character varying,
    type public.enum_pages_blocks_video_embed_type DEFAULT 'youtube'::public.enum_pages_blocks_video_embed_type,
    src character varying,
    block_name character varying
);


ALTER TABLE public.pages_blocks_video_embed OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_id_seq OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_id_seq OWNED BY public.pages.id;


--
-- Name: pages_rels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    clauses_id integer
);


ALTER TABLE public.pages_rels OWNER TO postgres;

--
-- Name: pages_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_rels_id_seq OWNER TO postgres;

--
-- Name: pages_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_rels_id_seq OWNED BY public.pages_rels.id;


--
-- Name: partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partners (
    id integer NOT NULL,
    name character varying NOT NULL,
    type public.enum_partners_type DEFAULT 'partner'::public.enum_partners_type NOT NULL,
    logo_id integer,
    href character varying,
    "order" numeric DEFAULT 0,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.partners OWNER TO postgres;

--
-- Name: partners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.partners_id_seq OWNER TO postgres;

--
-- Name: partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.partners_id_seq OWNED BY public.partners.id;


--
-- Name: payload_kv; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_kv (
    id integer NOT NULL,
    key character varying NOT NULL,
    data jsonb NOT NULL
);


ALTER TABLE public.payload_kv OWNER TO postgres;

--
-- Name: payload_kv_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_kv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_kv_id_seq OWNER TO postgres;

--
-- Name: payload_kv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_kv_id_seq OWNED BY public.payload_kv.id;


--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_locked_documents (
    id integer NOT NULL,
    global_slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_locked_documents OWNER TO postgres;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_locked_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_id_seq OWNER TO postgres;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_locked_documents_id_seq OWNED BY public.payload_locked_documents.id;


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_locked_documents_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer,
    media_id integer,
    pages_id integer,
    news_id integer,
    partners_id integer,
    videos_id integer,
    activity_reports_id integer,
    timeline_items_id integer,
    clauses_id integer,
    newsletter_subscribers_id integer,
    formations_id integer
);


ALTER TABLE public.payload_locked_documents_rels OWNER TO postgres;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_locked_documents_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNER TO postgres;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNED BY public.payload_locked_documents_rels.id;


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_migrations (
    id integer NOT NULL,
    name character varying,
    batch numeric,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_migrations OWNER TO postgres;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_migrations_id_seq OWNER TO postgres;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_migrations_id_seq OWNED BY public.payload_migrations.id;


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_preferences (
    id integer NOT NULL,
    key character varying,
    value jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_preferences OWNER TO postgres;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_id_seq OWNER TO postgres;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_preferences_id_seq OWNED BY public.payload_preferences.id;


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payload_preferences_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer
);


ALTER TABLE public.payload_preferences_rels OWNER TO postgres;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payload_preferences_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNER TO postgres;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNED BY public.payload_preferences_rels.id;


--
-- Name: timeline_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.timeline_items (
    id integer NOT NULL,
    year character varying NOT NULL,
    title character varying NOT NULL,
    "order" numeric DEFAULT 0,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.timeline_items OWNER TO postgres;

--
-- Name: timeline_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.timeline_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.timeline_items_id_seq OWNER TO postgres;

--
-- Name: timeline_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.timeline_items_id_seq OWNED BY public.timeline_items.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    email character varying NOT NULL,
    reset_password_token character varying,
    reset_password_expiration timestamp(3) with time zone,
    salt character varying,
    hash character varying,
    login_attempts numeric DEFAULT 0,
    lock_until timestamp(3) with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_sessions (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    created_at timestamp(3) with time zone,
    expires_at timestamp(3) with time zone NOT NULL
);


ALTER TABLE public.users_sessions OWNER TO postgres;

--
-- Name: videos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.videos (
    id integer NOT NULL,
    title character varying NOT NULL,
    type public.enum_videos_type DEFAULT 'youtube'::public.enum_videos_type NOT NULL,
    src character varying NOT NULL,
    "order" numeric DEFAULT 0,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.videos OWNER TO postgres;

--
-- Name: videos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.videos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.videos_id_seq OWNER TO postgres;

--
-- Name: videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.videos_id_seq OWNED BY public.videos.id;


--
-- Name: _formations_v id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._formations_v ALTER COLUMN id SET DEFAULT nextval('public._formations_v_id_seq'::regclass);


--
-- Name: _news_v id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._news_v ALTER COLUMN id SET DEFAULT nextval('public._news_v_id_seq'::regclass);


--
-- Name: _pages_v id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v ALTER COLUMN id SET DEFAULT nextval('public._pages_v_id_seq'::regclass);


--
-- Name: _pages_v_blocks_accordion_block id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_accordion_block_id_seq'::regclass);


--
-- Name: _pages_v_blocks_accordion_block_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block_items ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_accordion_block_items_id_seq'::regclass);


--
-- Name: _pages_v_blocks_activity_reports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_activity_reports_id_seq'::regclass);


--
-- Name: _pages_v_blocks_activity_reports_reports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports_reports ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_activity_reports_reports_id_seq'::regclass);


--
-- Name: _pages_v_blocks_calculator id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_calculator ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_calculator_id_seq'::regclass);


--
-- Name: _pages_v_blocks_clauses_grid id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_clauses_grid ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_clauses_grid_id_seq'::regclass);


--
-- Name: _pages_v_blocks_contact_block id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_contact_block ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_contact_block_id_seq'::regclass);


--
-- Name: _pages_v_blocks_documents_section id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_documents_section_id_seq'::regclass);


--
-- Name: _pages_v_blocks_documents_section_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section_items ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_documents_section_items_id_seq'::regclass);


--
-- Name: _pages_v_blocks_download_grid id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_download_grid_id_seq'::regclass);


--
-- Name: _pages_v_blocks_download_grid_documents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_download_grid_documents_id_seq'::regclass);


--
-- Name: _pages_v_blocks_download_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_download_links_id_seq'::regclass);


--
-- Name: _pages_v_blocks_download_links_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links_items ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_download_links_items_id_seq'::regclass);


--
-- Name: _pages_v_blocks_dynamic_grid id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_dynamic_grid_id_seq'::regclass);


--
-- Name: _pages_v_blocks_dynamic_grid_columns id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_columns ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_dynamic_grid_columns_id_seq'::regclass);


--
-- Name: _pages_v_blocks_dynamic_grid_rows id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_rows ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_dynamic_grid_rows_id_seq'::regclass);


--
-- Name: _pages_v_blocks_formations_section id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_formations_section ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_formations_section_id_seq'::regclass);


--
-- Name: _pages_v_blocks_news_section id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_news_section ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_news_section_id_seq'::regclass);


--
-- Name: _pages_v_blocks_newsletter_block id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_newsletter_block ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_newsletter_block_id_seq'::regclass);


--
-- Name: _pages_v_blocks_organogram id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_organogram_id_seq'::regclass);


--
-- Name: _pages_v_blocks_organogram_root_children id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_organogram_root_children_id_seq'::regclass);


--
-- Name: _pages_v_blocks_organogram_root_children_children id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children_children ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_organogram_root_children_children_id_seq'::regclass);


--
-- Name: _pages_v_blocks_partners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_partners_id_seq'::regclass);


--
-- Name: _pages_v_blocks_partners_associations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_associations ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_partners_associations_id_seq'::regclass);


--
-- Name: _pages_v_blocks_partners_partners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_partners ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_partners_partners_id_seq'::regclass);


--
-- Name: _pages_v_blocks_photo_hero_carousel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_photo_hero_carousel_id_seq'::regclass);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel_slides ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_photo_hero_carousel_slides_id_seq'::regclass);


--
-- Name: _pages_v_blocks_quick_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_quick_links_id_seq'::regclass);


--
-- Name: _pages_v_blocks_quick_links_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links_items ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_quick_links_items_id_seq'::regclass);


--
-- Name: _pages_v_blocks_text_block id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_text_block ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_text_block_id_seq'::regclass);


--
-- Name: _pages_v_blocks_timeline id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_timeline_id_seq'::regclass);


--
-- Name: _pages_v_blocks_timeline_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline_items ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_timeline_items_id_seq'::regclass);


--
-- Name: _pages_v_blocks_video_cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_video_cards_id_seq'::regclass);


--
-- Name: _pages_v_blocks_video_cards_videos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards_videos ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_video_cards_videos_id_seq'::regclass);


--
-- Name: _pages_v_blocks_video_embed id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_embed ALTER COLUMN id SET DEFAULT nextval('public._pages_v_blocks_video_embed_id_seq'::regclass);


--
-- Name: _pages_v_rels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_rels ALTER COLUMN id SET DEFAULT nextval('public._pages_v_rels_id_seq'::regclass);


--
-- Name: activity_reports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_reports ALTER COLUMN id SET DEFAULT nextval('public.activity_reports_id_seq'::regclass);


--
-- Name: clauses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clauses ALTER COLUMN id SET DEFAULT nextval('public.clauses_id_seq'::regclass);


--
-- Name: formations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formations ALTER COLUMN id SET DEFAULT nextval('public.formations_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: newsletter_subscribers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsletter_subscribers ALTER COLUMN id SET DEFAULT nextval('public.newsletter_subscribers_id_seq'::regclass);


--
-- Name: pages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages ALTER COLUMN id SET DEFAULT nextval('public.pages_id_seq'::regclass);


--
-- Name: pages_rels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_rels ALTER COLUMN id SET DEFAULT nextval('public.pages_rels_id_seq'::regclass);


--
-- Name: partners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partners ALTER COLUMN id SET DEFAULT nextval('public.partners_id_seq'::regclass);


--
-- Name: payload_kv id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_kv ALTER COLUMN id SET DEFAULT nextval('public.payload_kv_id_seq'::regclass);


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_id_seq'::regclass);


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_rels_id_seq'::regclass);


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_migrations ALTER COLUMN id SET DEFAULT nextval('public.payload_migrations_id_seq'::regclass);


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_id_seq'::regclass);


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_rels_id_seq'::regclass);


--
-- Name: timeline_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timeline_items ALTER COLUMN id SET DEFAULT nextval('public.timeline_items_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: videos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videos ALTER COLUMN id SET DEFAULT nextval('public.videos_id_seq'::regclass);


--
-- Data for Name: _formations_v; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._formations_v (id, parent_id, version_title, version_slug, version_image_id, version_category, version_start_date, version_end_date, version_duration, version_location, version_price, version_max_participants, version_description, version_registration_url, version_registration_email, version_updated_at, version_created_at, version__status, created_at, updated_at, latest) FROM stdin;
\.


--
-- Data for Name: _news_v; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._news_v (id, parent_id, version_title, version_slug, version_category, version_published_at, version_featured_image_id, version_excerpt, version_content, version_seo_meta_title, version_seo_meta_description, version_updated_at, version_created_at, version__status, created_at, updated_at, latest, autosave, version_newsletter_sent_at, version_rubrique) FROM stdin;
1	1	Titre 3 Act	titre-3-act	actualite	2026-04-29 16:48:06.263+01	77	flksdfmlksd	\N	\N	\N	2026-06-09 22:39:32.321+01	2026-06-09 22:39:32.321+01	published	2026-06-09 22:39:32.326+01	2026-06-09 22:39:32.326+01	t	f	\N	\N
2	2	Actualité 2	actualite-2	actualite	2026-04-29 16:47:20.609+01	77	resume resume tesume	\N	\N	\N	2026-06-09 22:39:32.353+01	2026-06-09 22:39:32.353+01	published	2026-06-09 22:39:32.356+01	2026-06-09 22:39:32.356+01	t	f	\N	\N
3	3	Actualité 1	actualite-1	actualite	2026-04-29 16:46:22.888+01	76	Resume resume resume	\N	\N	\N	2026-06-09 22:39:32.363+01	2026-06-09 22:39:32.363+01	published	2026-06-09 22:39:32.364+01	2026-06-09 22:39:32.364+01	t	f	\N	\N
4	4	\N	\N	actualite	2026-06-12 00:26:54.287+01	\N	\N	\N	\N	\N	2026-06-12 00:26:54.287+01	2026-06-12 00:26:54.287+01	draft	2026-06-12 00:26:54.297+01	2026-06-12 00:26:54.297+01	t	f	\N	\N
\.


--
-- Data for Name: _pages_v; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v (id, parent_id, version_title, version_slug, version_parent_id, version_menu_order, version_icon, version_content, version_seo_meta_title, version_seo_meta_description, version_seo_meta_image_id, version_updated_at, version_created_at, version__status, created_at, updated_at, latest, autosave) FROM stdin;
7	7	Marchés publics	mpu	\N	100	building	\N	\N	\N	\N	2026-06-09 22:39:32.97+01	2026-06-09 22:39:32.969+01	published	2026-06-09 22:39:32.98+01	2026-06-09 22:39:32.98+01	t	f
10	10	Dictionnaire 	dictionnaire-	\N	100	book	\N	\N	\N	\N	2026-06-09 22:39:33.05+01	2026-06-09 22:39:33.05+01	published	2026-06-09 22:39:33.058+01	2026-06-09 22:39:33.058+01	t	f
14	14	Performance énergétique 	performance-energetique-	\N	100	list	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le département de la performance énergétique du CRTI-B accompagne les acteurs publics et privés dans la transition énergétique du secteur de la construction au Luxembourg, tant pour les bâtiments existants que pour les nouvelles constructions. En lien étroit avec le Ministère de l’Économie, et plus particulièrement la Direction Générale de l’Énergie, il contribue à l’élaboration de solutions concrètes permettant de répondre aux objectifs nationaux et européens de décarbonation, d’efficacité énergétique et de réduction des émissions de CO₂.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ses missions portent notamment sur l’analyse technico-économique des bâtiments et des systèmes énergétiques, l’évaluation du coût optimal des niveaux de performance énergétique au sens de la directive européenne 2024/1275, ainsi que la construction de scénarios intégrant les technologies, les coûts de cycle de vie, la performance énergétique et l’impact carbone. Le département participe également à la définition des hypothèses de calcul, à la rédaction de rapports nationaux et à la traduction des résultats en recommandations destinées à faire évoluer les réglementations, les outils d’aide et les pratiques du secteur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans ce cadre, le département joue un rôle d’interface entre les administrations, les professionnels de la construction et les experts spécialisés. Il anime et coordonne des groupes de travail sur des thématiques émergentes liées à la performance énergétique des bâtiments. Parmi celles-ci figure notamment la ventilation naturelle contrôlée, pour laquelle le CRTI-B souhaite développer des méthodologies, des outils et des références afin d’accompagner l’intégration de concepts innovants dans le cadre réglementaire luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par son approche transversale, sa neutralité et sa capacité à mobiliser les compétences de son réseau de partenaires, le département de la performance énergétique contribue à pérenniser l’innovation et à accompagner l’évolution du secteur de la construction vers un bâti plus sobre, plus performant et plus durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.133+01	2026-06-09 22:39:33.132+01	published	2026-06-09 22:39:33.142+01	2026-06-09 22:39:33.142+01	t	f
20	20	Grandchild page 1	grandchild-page-1	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.294+01	2026-06-09 22:39:33.294+01	published	2026-06-09 22:39:33.302+01	2026-06-09 22:39:33.302+01	t	f
21	21	Edition Father Page 	father-page-1	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.319+01	2026-06-09 22:39:33.319+01	published	2026-06-09 22:39:33.327+01	2026-06-09 22:39:33.327+01	t	f
1	1	Indemnités	indemnites	\N	100	star	\N	\N	\N	\N	2026-06-09 22:39:32.766+01	2026-06-09 22:39:32.765+01	published	2026-06-09 22:39:32.785+01	2026-06-09 22:39:32.785+01	f	f
2	2	Actualités	actualites bim	\N	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:32.842+01	2026-06-09 22:39:32.842+01	published	2026-06-09 22:39:32.856+01	2026-06-09 22:39:32.856+01	f	f
4	4	Actualités	actualites mpu	\N	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:32.895+01	2026-06-09 22:39:32.895+01	published	2026-06-09 22:39:32.904+01	2026-06-09 22:39:32.904+01	f	f
6	6	Documents explicatifs 	documents explicatifs 	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Comprendre les Clauses Contractuelles", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " L'Essentiel des Clauses Contractuelles dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " Les clauses contractuelles constituent le fondement de toute relation dans le cadre de la commande publique. Elles définissent avec précision les droits, les obligations et les responsabilités de chaque partie impliquée (pouvoir adjudicateur et entreprise).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une bonne compréhension et une application rigoureuse de ces clauses sont essentielles pour garantir la bonne exécution des contrats, minimiser les litiges et assurer une collaboration transparente. Vous trouverez ci-dessous notre catalogue de clauses répertoriées par thématique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2003-09-01T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles - Exposé des motifs", "versao": "4"}, {"id": "69fd978bb3250ff904d64fb4", "pdf": 178, "data": "2012-07-12T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles version 10 - Modifications par rapport à la version 9", "versao": "10"}, {"id": "69fd97dab3250ff904d64fb5", "pdf": 180, "data": "2007-01-19T12:00:00.000Z", "numero": "CDC-BET", "titulo": "\\tCahier des charges concernant les travaux de bétonnage", "versao": "10"}, {"id": "69fd9865b3250ff904d64fb6", "pdf": 182, "data": "2004-03-12T12:00:00.000Z", "numero": "CTG0", "titulo": "\\tCTG applicables à tous les corps de métiers - Exposé des motifs", "versao": "3"}, {"id": "69fd98b6b3250ff904d64fb7", "pdf": 183, "data": "2002-05-22T12:00:00.000Z", "numero": "CTG0", "titulo": "CTG applicables à tous les corps de métiers - Commentaire des articles", "versao": "4"}, {"id": "69fd992fb3250ff904d64fb8", "pdf": 184, "data": "2002-06-27T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage - Commentaire des articles", "versao": "2"}, {"id": "69fd996bb3250ff904d64fb9", "pdf": 185, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie - Commentaire des articles", "versao": "3"}, {"id": "69fd99b3b3250ff904d64fba", "pdf": 186, "data": "2002-10-30T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton - Commentaire des articles", "versao": "4"}, {"id": "69fd99e9b3250ff904d64fbb", "pdf": 187, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude - Commentaire des articles", "versao": "3"}, {"id": "69fd9a34b3250ff904d64fbc", "pdf": 188, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires - Commentaire des articles", "versao": "3"}, {"id": "69fd9a6bb3250ff904d64fbd", "pdf": 189, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation - Commentaire des articles", "versao": "3"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:32.945+01	2026-06-09 22:39:32.945+01	published	2026-06-09 22:39:32.954+01	2026-06-09 22:39:32.954+01	f	f
47	9	Actualités	actualites perfomance énergétique	14	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:34.143+01	2026-06-09 22:39:33.026+01	published	2026-06-09 22:39:34.155+01	2026-06-09 22:39:34.155+01	t	f
9	9	Actualités	actualites perfomance énergétique	\N	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.026+01	2026-06-09 22:39:33.026+01	published	2026-06-09 22:39:33.036+01	2026-06-09 22:39:33.036+01	f	f
12	12	Performance énergétique EU 	performance-energetique-eu	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Tour européen des exigences minimales EE,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Objectifs des EM", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Ressources énergétiques, locales, UE", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article UE 2026 -2070 prévisions évolution Meeting Days et Cooling Days", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article indépendance énergétique (MHI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique du bâtiment", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.094+01	2026-06-09 22:39:33.094+01	published	2026-06-09 22:39:33.101+01	2026-06-09 22:39:33.101+01	f	f
13	13	Performance énergétique LU 	performance-energetique-lu-	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance vs Efficacité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Bâtiments autonomes – influences réseau", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Indépendance énergétique Merfindahl Hirschmann Index", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Eff énergétique et la productivité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance énergétique et coûts d’externalités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article incidences territoriales des émissions de polluants liées à la production chaleur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique EU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.112+01	2026-06-09 22:39:33.112+01	published	2026-06-09 22:39:33.12+01	2026-06-09 22:39:33.12+01	f	f
15	15	Soumission public	soumission-public	\N	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les marchés publics jouent un rôle central dans le secteur de la construction. Leur cadre réglementaire peut s’avérer complexe.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B accompagne les acteurs dans la compréhension des procédures, des obligations légales et des bonnes pratiques liées aux marchés publics. Notre objectif est de rendre l’information accessible, claire et structurée, afin de faciliter la participation et l’exécution des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À travers des ressources, des formations et des échanges, le CRTI-B contribue à des marchés publics plus transparents, plus efficaces et mieux maîtrisés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lois et règlements grand-ducaux", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les lois et règlements en vigueur pour le traitement des marchés publics sont rassemblés sur le site internet ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d68", "type": "link", "fields": {"url": "https://marches.public.lu/fr/legislation.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/legislation.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation des avis de marché", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les avis de marché en cours et les dossiers de soumissions à télécharger  peuvent être consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d69", "type": "link", "fields": {"url": "http://www.marches.public.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise des offres de prix", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les dispositions de remise des offres de prix peuvent être  consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6a", "type": "link", "fields": {"url": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques dans le cadre de la nouvelle loi sur les marchés publics La législation sur les marchés publics permet la remise de documents électroniques. Pour le moment, aucun système électronique validé luxembourgeois n'est opérationnel pour réaliser le transfert des données sécurisées depuis l'annonce de la demande d'offre dans la presse jusqu'à l'ouverture électronique de la soumission et au-delà. De ce fait, la nouvelle réglementation prévoit que la passation électronique des marchés publics se fera en plusieurs étapes. Dès à présent, les soumissionnaires peuvent remettre un résumé du bordereau de soumission sur support électronique. Le dépôt d'une telle offre se fera de la même façon que le dépôt d'une offre papier (envoi recommandé ou remise en mains propres). La procédure de remise d'une offre sur support électronique est déterminée à l'article 51 (2) du règlement grand-ducal du 3 août 2009.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cet article stipule que « les soumissionnaires sont autorisés à utiliser pour la remise de leur offre un résumé du bordereau de soumission à condition qu'ils reconnaissent dans une déclaration écrite que seul le texte du bordereau de soumission original imprimé établi par le pouvoir adjudicateur fait foi. Lesdits résumés doivent obligatoirement reprendre dans le même ordre, munis de la même numérotation, toutes les informations demandées telles que fabricants, types, etc., pour toutes les positions du bordereau original en vue d'assurer le contrôle qualitatif et technique. Le résumé peut être remis par le soumissionnaire sous forme électronique. Tout support informatique doit être accompagné d'une version imprimée, laquelle sera marquée à titre de pièce de soumission et laquelle fera foi en cas de divergence ».", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise électronique des offres obligatoire pour les marchés publics au-dessus des seuils européens et DUME", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La loi sur les marches publics du 8 avril 2018 prévoit qu’au-dessus des seuils européens (Livres II et III) la communication électronique devienne obligatoire pour les marchés publics, y compris pour les questions/réponses et le dépôt/ouverture des offres. Un guide technique est disponible sur le portail des marchés publics pour aider les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le DUME (Document Unique de Marché Européen) est une déclaration sur l’honneur créée dans le cadre du plan d’action européen eGovernment 2016-2020, selon le principe « once only ». Il vise à réduire la charge administrative et à faciliter la participation des entreprises, notamment pour les marchés transfrontaliers. Par ce document, l’opérateur économique atteste qu’il ne se trouve pas dans une situation d’exclusion et qu’il respecte les critères de sélection. Le DUME remplace provisoirement les certificats officiels, qui ne seront demandés qu’au soumissionnaire retenu, sauf exception.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Plus d'informations sous le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6b", "type": "link", "fields": {"url": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.16+01	2026-06-09 22:39:33.16+01	published	2026-06-09 22:39:33.17+01	2026-06-09 22:39:33.17+01	f	f
16	16	BIM IDS 	bim-ids-	\N	100	external-link	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "BIM IDS ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le secteur de la construction est en forte croissance mais souffre de problèmes de rentabilité liés aux erreurs de processus et à la fragmentation des échanges. La numérisation, notamment via la technologie BIM, apporte une solution en permettant de modéliser les projets en 3D avec des données géométriques et alphanumériques. Les analyses automatisées des maquettes BIM (détection de clash, vérifications, substitutions graphiques suivant propriétés) réduisent les erreurs de conception et facilitent la compréhension des projets sur chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cependant, malgré ces avantages, des ambiguïtés apparaissent fréquemment dans les échanges d’informations entre partenaires. Chaque acteur utilise le BIM selon ses propres conventions, ce qui complique la collaboration. Les modèles sont parfois incompatibles, incomplets ou structurés différemment, rendant leur réutilisation difficile et entraînant souvent une re-modélisation complète. À cela s’ajoutent les différences de logiciels et de formats de fichiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le format IFC, standard ouvert et normé ISO, permet en théorie un échange universel des maquettes. En pratique, sa mise en œuvre reste complexe : gestion des propriétés, mapping IFC et règles spécifiques demandent un investissement important en configuration, souvent à répéter pour chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Face à ces difficultés, il est nécessaire de disposer d’une référence commune pour tous les acteurs. C’est dans cette optique que Buildwise (Belgique) et le CRTI-B (Luxembourg) ont collaboré afin de définir des règles d’échange harmonisées, basées sur la norme européenne ISO 7817-1:2024. La plateforme BIMids propose ces exigences sous forme de fiches claires et accessibles, facilitant leur compréhension par l’ensemble des professionnels.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"id": "69faed823910505f885ca5fb", "type": "link", "fields": {"url": "http://www.bimids.eu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.bimids.eu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.186+01	2026-06-09 22:39:33.186+01	published	2026-06-09 22:39:33.195+01	2026-06-09 22:39:33.195+01	f	f
17	17	Guide de Formation 	guide-de-formation-	\N	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les formations BIM au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’objectif du volet « formation » est de référencer et centraliser les formations BIM disponibles au Luxembourg. Ce référencement se développe autour d’un cycle de formation modulaire BIM de base mis au point par le CRTI-B et ses partenaires. Les autres formations référencées permettent de compléter le cycle de base. Ceci permettra à terme d’obtenir un catalogue formation couvrant le maximum des besoins en BIM pour le Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules de base CRTI-B", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page reprend en détail chaque module proposé dans le cycle de formation modulaire BIM.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules Outils", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les formations complémentaires organisées ou validées par le CRTI-B dont notamment « prise en main logiciel », ce module est par exemple requis avant de participer à « BIM modeleur ». Et est proposé par différents revendeurs logiciels. Cette page regroupe aussi les formations proposées par des prestataires de service externes (éditeurs et revendeurs logiciels, centres de formation…) qui proposent des formations complémentaires au cycle de base BIM, Au Luxembourg ou sous forme de formation à distance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Equivalence", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les équivalences entre formations académiques / professionnelles et certifications professionnelles BIM du CRTI-B.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Satisfaction des participants", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La qualité des formations est notre priorité. Nous monitorons en permanence les formations dispensées et les retours des participants de manière à pouvoir améliorer de manière continue la qualité des modules proposés. Cette approche nous a permis d’obtenir des évaluations élevées de la part des participants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h6", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Schéma du parcours", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f6", "type": "upload", "value": 81, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Parcours formation BIM par métier et profil professionnel", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"id": "69faebf93910505f885ca5f7", "type": "upload", "value": 82, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f8", "type": "upload", "value": 83, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5f9", "type": "upload", "value": 84, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5fa", "type": "upload", "value": 85, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.21+01	2026-06-09 22:39:33.209+01	published	2026-06-09 22:39:33.22+01	2026-06-09 22:39:33.22+01	f	f
18	18	Guide d'application	guide-dapplication	\N	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Guide d’application", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ère de la digitalisation est en plein essor et a désormais pénétrée l’ensemble de nos secteurs d’activités, parmi lesquels celui de la construction. Cette évolution constitue un défi non négligeable que le secteur de la construction est prêt à relever ; et c’est une réelle chance pour ce secteur d’avancer davantage dans l’intégration du numérique dans ses démarches. Si on parle de « digitalisation » et de « construction », un sujet-clé est incontournable : le « Building Information Modeling », couramment appelé « BIM » qui révolutionnera notre métier, la manière de concevoir un projet et les habitudes de travail d’une manière comparable voire supérieure à ce que fût l’introduction du « dessin assisté par ordinateur » à partir des années ’80.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En effet, le procédé BIM c’est la capacité de créer des plus-values aux différentes étapes d’un projet de construction et d’en optimiser les processus. De cette manière nous arrivons à améliorer la qualité du bâti tout en augmentant l’effectivité des acteurs de la construction et la productivité de tout le secteur. De plus, avec le BIM nous atteindrons à moyen et long terme les objectifs fixés dans le cadre de la Troisième Révolution industrielle, notamment en évoluant vers des bâtiments répondant aux impératifs d’une économie circulaire. Voilà pourquoi, dans le cadre de l’étude Rifkin publié fin 2016, le BIM est désigné comme étant l’un des principaux piliers des futures évolutions dans le domaine de la construction. La transition vers l’ère du « Digital Lëtzebuerg » présente donc de grandes opportunités qu’il s’agira de saisir. Je suis persuadé que la bonne collaboration entre tous les acteurs constituera un atout majeur et profitera pleinement au développement du secteur de la construction et à plus forte raison à notre pays. Cependant, il ne faut pas perdre de vue qu’une telle évolution technologique ne peut réussir que si elle intègre toutes les parties concernées et pas uniquement la maîtrise d’ouvrage et la maîtrise d’œuvre, mais aussi les entreprises et en particulier les PME.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "C’est pourquoi le CRTI-B (Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment) a créé en 2015 un groupe de travail réunissant l’ensemble des acteurs luxembourgeois de la construction avec pour objectif d’élaborer, dans un travail collaboratif, un document de référence pour la collaboration BIM au Luxembourg. Ce « Guide d’application BIM », proposé au secteur luxembourgeois de la construction, constitue la première étape d’un accompagnement dans l’implémentation du BIM et la transition des entreprises vers le numérique. Nous aimerions enfin en profiter pour remercier tous les partenaires, les institutions et fédérations ainsi que toutes les personnes impliquées dans ce projet pour leur apport, leur travail précieux et leurs efforts qui ont permis de faire du projet « BIM au Luxembourg » un véritable travail collaboratif entre tous les acteurs du secteur, ce qui correspond pleinement à l’esprit du CRTI-B ! Aussi, ce Guide est la preuve que le travail collaboratif, le partage et l’échange des compétences permettent d’avancer de manière optimisée en intégrant un haut degré de qualité et à terme de faire évoluer le secteur dans sa globalité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.236+01	2026-06-09 22:39:33.236+01	published	2026-06-09 22:39:33.248+01	2026-06-09 22:39:33.248+01	f	f
19	19	Equipe 	equipe-	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.266+01	2026-06-09 22:39:33.265+01	published	2026-06-09 22:39:33.278+01	2026-06-09 22:39:33.278+01	f	f
58	24	Prestations Standardisées	prestations-standardisees	7	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bibliothèque des prestations standardisées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La bibliothèque des prestations standardisées du CRTI-B met à disposition des acteurs du secteur de la construction des documents de référence destinés à faciliter l’élaboration, l’analyse et la comparaison des bordereaux. En proposant des descriptions harmonisées et reconnues par le secteur, elle constitue un gain concret pour les concepteurs comme pour les entreprises : les concepteurs disposent d’une base commune pour structurer leurs dossiers de soumission, tandis que les entreprises peuvent répondre plus efficacement sans devoir réanalyser en détail, d’un bordereau à l’autre et d’un concepteur à l’autre, des positions susceptibles de varier dans leur formulation, leur contenu ou leur niveau d’exigence. Cette standardisation favorise ainsi une meilleure lisibilité des prestations, réduit les risques d’interprétation divergente et améliore la qualité des offres remises. In fine, elle crée une valeur ajoutée pour les trois grandes catégories d’acteurs réunies au sein du CRTI-B : les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les documents publiés dans cette bibliothèque s’inscrivent dans la mission du CRTI-B de promouvoir la standardisation, la transparence et la simplification des procédures dans le secteur de la construction luxembourgeois. Ils ont vocation à servir de base de travail pour les marchés publics et privés, tout en pouvant être adaptés aux spécificités de chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les positions actuellement disponibles, relatives au gros œuvre et aux infrastructures, sont en cours de mise à jour. Cette révision vise notamment à mieux intégrer les principes de l’économie circulaire, les exigences liées à la réutilisation et à la gestion responsable des ressources, ainsi que l’interopérabilité avec les maquettes BIM. Les travaux en cours porteront également sur l’intégration progressive des prestations standardisées dans la gestion digitale des bordereaux, afin de soutenir la digitalisation des processus et d’améliorer la continuité des données tout au long du cycle de vie des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les prochaines années, la bibliothèque des positions standardisées sera progressivement complétée par des contenus couvrant les métiers du parachèvement et de la finition, ainsi que les installations techniques. Cette extension permettra de renforcer la cohérence des documents de soumission et d’offrir au secteur un référentiel plus complet, couvrant un champ élargi de prestations de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65ce7c0dbbd0b7752bfaf", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d65db2104c1147367b3e4e", "zip": 157, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format GAEB XML", "versao": "5"}, {"id": "69fd86cfb3250ff904d64fa2", "zip": 154, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format HTML", "versao": "5"}, {"id": "69fd86ecb3250ff904d64fa3", "zip": 158, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format RTF", "versao": "5"}, {"id": "69fd872bb3250ff904d64fa4", "zip": 159, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte dans autre colonne", "versao": "5"}, {"id": "69fd875bb3250ff904d64fa5", "zip": 161, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format SYLK Texte en dessous titre", "versao": "5"}, {"id": "69fd8783b3250ff904d64fa6", "zip": 162, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format SYLK Texte dans autre colonne", "versao": "5"}, {"id": "69fd87b8b3250ff904d64fa7", "zip": 163, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format TXT", "versao": "5"}, {"id": "69fd87ebb3250ff904d64fa8", "zip": 168, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format PDF", "versao": "5"}, {"id": "69fd8814b3250ff904d64fa9", "zip": 160, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte en dessous titre", "versao": "5"}, {"id": "69fd884ab3250ff904d64faa", "xls": null, "zip": 166, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tNotes explicatives: Evolution par rapport à la version du 25.04.2008", "versao": "5"}, {"id": "69fd887eb3250ff904d64fab", "xls": null, "zip": 167, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format XML", "versao": "5"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.649+01	2026-06-09 22:39:33.389+01	published	2026-06-09 22:39:34.66+01	2026-06-09 22:39:34.66+01	t	f
60	26	Guide de la Construction durable	guide-de-la-construction-durable	33	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "S'inscrire dans une perspective de développement durable signifie répondre aux besoins des générations actuelles sans compromettre les capacités des générations futures à répondre à leurs propres besoins. Cette approche résulte de la reconnaissance qu'un équilibre écologique ne peut être obtenu qu'en intégrant au même titre l’efficacité économique et l'équité sociale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "Guide de la construction durable", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " s'adresse en premier lieu aux maîtres d'ouvrage et aux maîtres d'oeuvre. Il se veut un outil d'aide destiné à permettre l'intégration des principes du développement durable dès les premiers stades des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Télécharger le guide en version imprimable (PDF, 2 300 Ko)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.763+01	2026-06-09 22:39:33.447+01	published	2026-06-09 22:39:34.772+01	2026-06-09 22:39:34.772+01	t	f
61	27	Projet de CTG: Déconstruction et démolition	projet-de-ctg-deconstruction-et-demolition	33	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En collaboration étroite entre les partenaires du CRTI-B, le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9e", "type": "link", "fields": {"url": "http://www.list.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "LIST ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9f", "type": "link", "fields": {"url": "https://mecdd.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Ministère de l’Environnement, du Climat et du Développement durable", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et une multitude d'opérateurs économique du métier, un 'projet de CTG' a été développé pour structurer et harmoniser les projets de déconstruction et de démolition dans le contexte de marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document s'inscrit dans l'initiative de mieux répondre aux besoins de la législation luxembourgeoise relative aux déchets qui vise non seulement la prévention de ces déchets mais privilégie aussi la considération du réemploi de matériaux .", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document est publié sous forme de 'projet de CTG' et n'a pas de caractère obligatoire.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l'objectif de vouloir améliorer le document de manière constante, le CRTI-B remercie tous les acteurs du secteur de bien vouloir nous faire part des retours pratiques (avec ou sans l'utilisation du projet de CTG).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda0", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_fr_0.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version FR", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda1", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_de.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version DE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte de la déconstruction, de la démolition et du réemploi des matériaux s'inscrit aussi le 'Guide de la déconstruction', publié par le Ministère de l’Environnement, du Climat et du Développement durable en partenariat avec le LIST. Il peut être téléchargé sur ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdda2", "type": "link", "fields": {"url": "https://environnement.public.lu/fr/offall-ressourcen/types-de-dechets/dechets-construction-demolition-dcd/guide-deconstruction.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "emwelt.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.803+01	2026-06-09 22:39:33.469+01	published	2026-06-09 22:39:34.812+01	2026-06-09 22:39:34.812+01	t	f
62	28	Clauses Contractuelles 	contrats-types	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses contractuelles générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses contractuelles générales, ou CCG, constituent le document contractuel de référence pour les marchés publics de travaux. Elles fixent les règles qui organisent la relation entre le maître d’ouvrage et l’entreprise, depuis la remise de l’offre jusqu’à la clôture du marché. Elles encadrent notamment les modalités d’exécution, les délais, les paiements, les modifications de prestations, les décomptes, les pénalités, la réception, les garanties et le traitement des éventuels différends.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Leur importance tient au fait qu’elles traduisent les principes généraux des marchés publics dans un cadre opérationnel directement applicable aux projets de construction. Elles permettent de définir, dès le lancement du marché, les responsabilités de chacun, les procédures à respecter et les conséquences contractuelles des décisions prises en cours d’exécution. À ce titre, les CCG constituent l’un des outils les plus importants pour assurer la bonne gestion administrative, financière et contractuelle d’un marché de travaux.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, notamment son article 51, paragraphe (2), qui prévoit la possibilité d’instituer des cahiers spéciaux des charges standardisés. En application de ce cadre, le règlement ministériel du 20 avril 2018 institue le cahier spécial des charges standardisé relatif aux clauses contractuelles générales applicables à tous les marchés publics de travaux relatifs au secteur du bâtiment. Ces clauses doivent être intégrées dans le dossier de soumission et s’imposent comme référence contractuelle pour les marchés concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour les maîtres d’ouvrage, les CCG offrent un cadre de pilotage fiable pour suivre l’exécution du marché, traiter les adaptations nécessaires et sécuriser les décisions prises tout au long du projet. Pour les concepteurs et les gestionnaires de projets, elles facilitent la préparation des dossiers, l’analyse des situations contractuelles et l’accompagnement du maître d’ouvrage pendant l’exécution. Pour les entreprises, elles apportent une meilleure visibilité sur les conditions dans lesquelles les travaux seront commandés, exécutés, rémunérés, modifiés, contrôlés et réceptionnés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG contribuent ainsi à renforcer la prévisibilité des marchés et à réduire les zones d’incertitude susceptibles de générer des désaccords. En définissant des règles communes et équilibrées, elles favorisent une gestion plus transparente des projets, une meilleure compréhension des droits et obligations de chaque partie et une résolution plus structurée des difficultés pouvant apparaître en cours de chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation entre les représentants des maîtres d’ouvrage, des concepteurs et des entreprises, les CCG reflètent la mission du CRTI-B de produire des documents contractuels équilibrés, adaptés aux pratiques luxembourgeoises et utilisables par l’ensemble du secteur. Elles constituent un instrument essentiel pour renforcer la confiance entre les acteurs, améliorer la qualité des marchés publics de travaux et soutenir une exécution plus efficace et mieux maîtrisée des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2018-10-17T12:00:00.000Z", "numero": "CCG", "titulo": "Clauses contractuelles ", "versao": "10.2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.844+01	2026-06-09 22:39:33.49+01	published	2026-06-09 22:39:34.854+01	2026-06-09 22:39:34.854+01	t	f
5	5	Formation 	formation mpu	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:32.917+01	2026-06-09 22:39:32.916+01	published	2026-06-09 22:39:32.926+01	2026-06-09 22:39:32.926+01	f	f
46	8	Formation 	formation performance énergétique	14	100	\N	\N	\N	\N	\N	2026-06-09 22:39:34.085+01	2026-06-09 22:39:33.001+01	published	2026-06-09 22:39:34.096+01	2026-06-09 22:39:34.096+01	f	f
3	3	Formation 	formation bim	\N	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:32.873+01	2026-06-09 22:39:32.873+01	published	2026-06-09 22:39:32.883+01	2026-06-09 22:39:32.883+01	f	f
32	32	Qui sommes nous ? 	le-crtib-b	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre mission ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "CRTI-B – Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": ", accompagne l’évolution du secteur de la construction au Luxembourg. Plateforme neutre, ouverte et concertée, il réunit les acteurs publics et privés autour d’un objectif commun : construire mieux, plus efficacement et de manière plus durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre rôle est de créer des bases communes. Dans un secteur où de nombreux intervenants travaillent ensemble — maîtres d’ouvrage, administrations, architectes, ingénieurs-conseils, entreprises, artisans et experts techniques — la clarté des règles, des standards et des processus est essentielle. Le CRTI-B développe et met à jour des documents de référence, notamment les clauses contractuelles et les clauses techniques, afin de faciliter les marchés publics et d’améliorer la qualité des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Mais notre mission ne s’arrête pas à la standardisation. Le secteur de la construction évolue rapidement : digitalisation, performance énergétique, économie circulaire, réemploi des matériaux, simplification administrative et interopérabilité des données deviennent des enjeux incontournables. Le CRTI-B aide à transformer ces défis en solutions concrètes, adaptées au contexte luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La digitalisation constitue un levier majeur. Le CRTI-B contribue à la mise en place de méthodes et d’outils permettant de mieux partager les données, de simplifier les démarches et de soutenir le principe du « once only » dans la construction. L’objectif est clair : une information fournie une fois doit pouvoir être réutilisée de manière fiable par les acteurs autorisés, sans multiplication inutile des saisies, documents ou interfaces. L’interopérabilité des données et la coordination entre plateformes, administrations et acteurs privés peut de cette façon éviter la fragmentation des initiatives, réduire les doublons et faciliter les démarches pour tous les intervenants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Nous travaillons avec tous les acteurs du terrain pour identifier les besoins réels et construire des solutions applicables. Cette approche concertée permet de développer des standards acceptés par le secteur et réellement utilisables dans les projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La construction durable est un autre axe fort de notre action. Le CRTI-B soutient le développement de pratiques plus circulaires, notamment la structuration de la filière du réemploi. Mieux valoriser les matériaux existants, réduire les déchets et renforcer l’indépendance du secteur face aux tensions internationales sur les ressources font partie des priorités des années à venir.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Concrètement, le CRTI-B agit pour :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "élaborer et mettre à jour les clauses contractuelles et techniques ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "développer des standards communs pour les marchés, les données et les processus ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "accompagner la digitalisation du secteur, notamment à travers le BIM et les outils collaboratifs ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "favoriser la simplification administrative et l’interopérabilité ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "soutenir la construction durable, l’économie circulaire et le réemploi ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "contribuer aux réflexions sur la performance énergétique des bâtiments ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "organiser des groupes de travail réunissant experts publics et privés ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "informer, former et assister les utilisateurs des documents et outils du CRTI-B.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B est avant tout un espace de travail commun. Sa valeur ajoutée réside dans sa neutralité, sa capacité à fédérer et sa proximité avec les besoins du secteur. En rassemblant les compétences et en facilitant le consensus, il contribue à rendre la construction au Luxembourg plus cohérente, plus efficace, plus résiliente et mieux préparée aux défis de demain.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.587+01	2026-06-09 22:39:33.587+01	published	2026-06-09 22:39:33.598+01	2026-06-09 22:39:33.598+01	t	f
33	33	CONSTRUCTION DURABLE	construction-durable	\N	100	leaf	\N	\N	\N	\N	2026-06-09 22:39:33.614+01	2026-06-09 22:39:33.614+01	published	2026-06-09 22:39:33.621+01	2026-06-09 22:39:33.621+01	t	f
34	34	DIGITATLISATION	bim-au-luxembourg	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le BIM (Building Information Modeling)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ère de la digitalisation est en plein essor et a désormais pénétrée l’ensemble de nos secteurs d’activités, parmi lesquels celui de la construction. Cette évolution constitue un défi non négligeable que le secteur de la construction est prêt à relever ; et c’est une réelle chance pour ce secteur d’avancer davantage dans l’intégration du numérique dans ses démarches. Si on parle de « digitalisation » et de « construction », un sujet-clé est incontournable : le « Building Information Modeling », couramment appelé « BIM » qui révolutionnera notre métier et la manière de concevoir un projet de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les groupes de travail", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B a lancé en 2015 les premières démarches pour le développement et l’implémentation d’une stratégie nationale pour le « Building Information Modeling ». Les groupes de travail BIM au Luxembourg sont sous le guidage du CRTI-B, qui - en tant que plateforme neutre de la construction au Luxembourg - a regroupé une table d'experts composée d'acteurs différents de la construction. L'intention était de créer un groupe de travail trans-sectoriel entre maîtres d'ouvrage, architectes, ingénieurs-conseils, entrepreneurs, artisans, chercheurs scientifiques et projet managers. Au vu du grand intérêt envers le sujet, et compte tenu des différents acteurs économiques impliqués, différents « sous-groupes de travail » ont été créés pour organiser les travaux de développement de manière plus efficiente. Tous les sous-groupes reportent directement au groupe de travail principal.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.633+01	2026-06-09 22:39:33.633+01	published	2026-06-09 22:39:33.642+01	2026-06-09 22:39:33.642+01	t	f
40	1	Indemnités	indemnites	7	100	star	\N	\N	\N	\N	2026-06-09 22:39:33.798+01	2026-06-09 22:39:32.765+01	published	2026-06-09 22:39:33.812+01	2026-06-09 22:39:33.812+01	t	f
41	2	Actualités	actualites bim	34	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.849+01	2026-06-09 22:39:32.842+01	published	2026-06-09 22:39:33.859+01	2026-06-09 22:39:33.859+01	t	f
43	4	Actualités	actualites mpu	7	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.943+01	2026-06-09 22:39:32.895+01	published	2026-06-09 22:39:33.953+01	2026-06-09 22:39:33.953+01	t	f
45	6	Documents explicatifs 	documents explicatifs 	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Comprendre les Clauses Contractuelles", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " L'Essentiel des Clauses Contractuelles dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " Les clauses contractuelles constituent le fondement de toute relation dans le cadre de la commande publique. Elles définissent avec précision les droits, les obligations et les responsabilités de chaque partie impliquée (pouvoir adjudicateur et entreprise).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une bonne compréhension et une application rigoureuse de ces clauses sont essentielles pour garantir la bonne exécution des contrats, minimiser les litiges et assurer une collaboration transparente. Vous trouverez ci-dessous notre catalogue de clauses répertoriées par thématique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2003-09-01T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles - Exposé des motifs", "versao": "4"}, {"id": "69fd978bb3250ff904d64fb4", "pdf": 178, "data": "2012-07-12T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles version 10 - Modifications par rapport à la version 9", "versao": "10"}, {"id": "69fd97dab3250ff904d64fb5", "pdf": 180, "data": "2007-01-19T12:00:00.000Z", "numero": "CDC-BET", "titulo": "\\tCahier des charges concernant les travaux de bétonnage", "versao": "10"}, {"id": "69fd9865b3250ff904d64fb6", "pdf": 182, "data": "2004-03-12T12:00:00.000Z", "numero": "CTG0", "titulo": "\\tCTG applicables à tous les corps de métiers - Exposé des motifs", "versao": "3"}, {"id": "69fd98b6b3250ff904d64fb7", "pdf": 183, "data": "2002-05-22T12:00:00.000Z", "numero": "CTG0", "titulo": "CTG applicables à tous les corps de métiers - Commentaire des articles", "versao": "4"}, {"id": "69fd992fb3250ff904d64fb8", "pdf": 184, "data": "2002-06-27T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage - Commentaire des articles", "versao": "2"}, {"id": "69fd996bb3250ff904d64fb9", "pdf": 185, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie - Commentaire des articles", "versao": "3"}, {"id": "69fd99b3b3250ff904d64fba", "pdf": 186, "data": "2002-10-30T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton - Commentaire des articles", "versao": "4"}, {"id": "69fd99e9b3250ff904d64fbb", "pdf": 187, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude - Commentaire des articles", "versao": "3"}, {"id": "69fd9a34b3250ff904d64fbc", "pdf": 188, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires - Commentaire des articles", "versao": "3"}, {"id": "69fd9a6bb3250ff904d64fbd", "pdf": 189, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation - Commentaire des articles", "versao": "3"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.038+01	2026-06-09 22:39:32.945+01	published	2026-06-09 22:39:34.049+01	2026-06-09 22:39:34.049+01	t	f
23	23	Modèles de contrats	contrats type	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bienvenue dans la bibliothèque officielle des contrats types destinés aux marchés publics. L'utilisation de ces modèles standardisés est fondamentale pour garantir la conformité de vos engagements et assurer une sécurité juridique optimale à toutes les parties (pouvoir adjudicateur et entreprises).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En vous appuyant sur ces documents officiels préétablis, vous facilitez la préparation de vos procédures, réduisez les risques de litiges liés à la rédaction contractuelle et sécurisez la gestion de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d6638ac0dbbd0b7752bfb4", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d6638d104c1147367b3e53", "pdf": 170, "data": "1996-01-21T12:00:00.000Z", "numero": "DNO001", "titulo": "Contrat de coordination", "versao": "1"}, {"id": "69fd90e8b3250ff904d64fac", "pdf": 171, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO002", "titulo": "\\tContrat de sous-traitance", "versao": "1"}, {"id": "69fd9121b3250ff904d64fae", "pdf": 172, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO003", "titulo": "Contrat-type d'association momentanée", "versao": "1"}]}, "format": "", "version": 2}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Conseils d'utilisation et Bonnes Pratiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Afin d'optimiser l'utilisation de ces contrats types, nous vous recommandons de suivre ces quelques directives :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Vérification de la version :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Assurez-vous toujours de télécharger la version la plus récente du contrat sur cette page avant de finaliser vos dossiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnalisation :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Bien que ces contrats soient standardisés, chaque projet est unique. Prêtez une attention particulière au remplissage des annexes et des clauses spécifiques liées à votre marché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Besoin d'aide ?", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " En cas de doute sur l'application juridique d'un modèle précis, référez-vous à nos guides d'accompagnement ou aux circulaires ministérielles en vigueur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.363+01	2026-06-09 22:39:33.363+01	published	2026-06-09 22:39:33.373+01	2026-06-09 22:39:33.373+01	f	f
24	24	Prestations Standardisées	prestations-standardisees	\N	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bibliothèque des prestations standardisées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La bibliothèque des prestations standardisées du CRTI-B met à disposition des acteurs du secteur de la construction des documents de référence destinés à faciliter l’élaboration, l’analyse et la comparaison des bordereaux. En proposant des descriptions harmonisées et reconnues par le secteur, elle constitue un gain concret pour les concepteurs comme pour les entreprises : les concepteurs disposent d’une base commune pour structurer leurs dossiers de soumission, tandis que les entreprises peuvent répondre plus efficacement sans devoir réanalyser en détail, d’un bordereau à l’autre et d’un concepteur à l’autre, des positions susceptibles de varier dans leur formulation, leur contenu ou leur niveau d’exigence. Cette standardisation favorise ainsi une meilleure lisibilité des prestations, réduit les risques d’interprétation divergente et améliore la qualité des offres remises. In fine, elle crée une valeur ajoutée pour les trois grandes catégories d’acteurs réunies au sein du CRTI-B : les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les documents publiés dans cette bibliothèque s’inscrivent dans la mission du CRTI-B de promouvoir la standardisation, la transparence et la simplification des procédures dans le secteur de la construction luxembourgeois. Ils ont vocation à servir de base de travail pour les marchés publics et privés, tout en pouvant être adaptés aux spécificités de chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les positions actuellement disponibles, relatives au gros œuvre et aux infrastructures, sont en cours de mise à jour. Cette révision vise notamment à mieux intégrer les principes de l’économie circulaire, les exigences liées à la réutilisation et à la gestion responsable des ressources, ainsi que l’interopérabilité avec les maquettes BIM. Les travaux en cours porteront également sur l’intégration progressive des prestations standardisées dans la gestion digitale des bordereaux, afin de soutenir la digitalisation des processus et d’améliorer la continuité des données tout au long du cycle de vie des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les prochaines années, la bibliothèque des positions standardisées sera progressivement complétée par des contenus couvrant les métiers du parachèvement et de la finition, ainsi que les installations techniques. Cette extension permettra de renforcer la cohérence des documents de soumission et d’offrir au secteur un référentiel plus complet, couvrant un champ élargi de prestations de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65ce7c0dbbd0b7752bfaf", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d65db2104c1147367b3e4e", "zip": 157, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format GAEB XML", "versao": "5"}, {"id": "69fd86cfb3250ff904d64fa2", "zip": 154, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format HTML", "versao": "5"}, {"id": "69fd86ecb3250ff904d64fa3", "zip": 158, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format RTF", "versao": "5"}, {"id": "69fd872bb3250ff904d64fa4", "zip": 159, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte dans autre colonne", "versao": "5"}, {"id": "69fd875bb3250ff904d64fa5", "zip": 161, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format SYLK Texte en dessous titre", "versao": "5"}, {"id": "69fd8783b3250ff904d64fa6", "zip": 162, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format SYLK Texte dans autre colonne", "versao": "5"}, {"id": "69fd87b8b3250ff904d64fa7", "zip": 163, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format TXT", "versao": "5"}, {"id": "69fd87ebb3250ff904d64fa8", "zip": 168, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format PDF", "versao": "5"}, {"id": "69fd8814b3250ff904d64fa9", "zip": 160, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte en dessous titre", "versao": "5"}, {"id": "69fd884ab3250ff904d64faa", "xls": null, "zip": 166, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tNotes explicatives: Evolution par rapport à la version du 25.04.2008", "versao": "5"}, {"id": "69fd887eb3250ff904d64fab", "xls": null, "zip": 167, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format XML", "versao": "5"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.389+01	2026-06-09 22:39:33.389+01	published	2026-06-09 22:39:33.399+01	2026-06-09 22:39:33.399+01	f	f
26	26	Guide de la Construction durable	guide-de-la-construction-durable	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "S'inscrire dans une perspective de développement durable signifie répondre aux besoins des générations actuelles sans compromettre les capacités des générations futures à répondre à leurs propres besoins. Cette approche résulte de la reconnaissance qu'un équilibre écologique ne peut être obtenu qu'en intégrant au même titre l’efficacité économique et l'équité sociale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "Guide de la construction durable", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " s'adresse en premier lieu aux maîtres d'ouvrage et aux maîtres d'oeuvre. Il se veut un outil d'aide destiné à permettre l'intégration des principes du développement durable dès les premiers stades des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Télécharger le guide en version imprimable (PDF, 2 300 Ko)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.448+01	2026-06-09 22:39:33.447+01	published	2026-06-09 22:39:33.456+01	2026-06-09 22:39:33.456+01	f	f
27	27	Projet de CTG: Déconstruction et démolition	projet-de-ctg-deconstruction-et-demolition	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En collaboration étroite entre les partenaires du CRTI-B, le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9e", "type": "link", "fields": {"url": "http://www.list.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "LIST ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9f", "type": "link", "fields": {"url": "https://mecdd.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Ministère de l’Environnement, du Climat et du Développement durable", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et une multitude d'opérateurs économique du métier, un 'projet de CTG' a été développé pour structurer et harmoniser les projets de déconstruction et de démolition dans le contexte de marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document s'inscrit dans l'initiative de mieux répondre aux besoins de la législation luxembourgeoise relative aux déchets qui vise non seulement la prévention de ces déchets mais privilégie aussi la considération du réemploi de matériaux .", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document est publié sous forme de 'projet de CTG' et n'a pas de caractère obligatoire.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l'objectif de vouloir améliorer le document de manière constante, le CRTI-B remercie tous les acteurs du secteur de bien vouloir nous faire part des retours pratiques (avec ou sans l'utilisation du projet de CTG).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda0", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_fr_0.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version FR", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda1", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_de.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version DE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte de la déconstruction, de la démolition et du réemploi des matériaux s'inscrit aussi le 'Guide de la déconstruction', publié par le Ministère de l’Environnement, du Climat et du Développement durable en partenariat avec le LIST. Il peut être téléchargé sur ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdda2", "type": "link", "fields": {"url": "https://environnement.public.lu/fr/offall-ressourcen/types-de-dechets/dechets-construction-demolition-dcd/guide-deconstruction.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "emwelt.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.469+01	2026-06-09 22:39:33.469+01	published	2026-06-09 22:39:33.477+01	2026-06-09 22:39:33.477+01	f	f
28	28	Clauses Contractuelles 	contrats-types	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses contractuelles générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses contractuelles générales, ou CCG, constituent le document contractuel de référence pour les marchés publics de travaux. Elles fixent les règles qui organisent la relation entre le maître d’ouvrage et l’entreprise, depuis la remise de l’offre jusqu’à la clôture du marché. Elles encadrent notamment les modalités d’exécution, les délais, les paiements, les modifications de prestations, les décomptes, les pénalités, la réception, les garanties et le traitement des éventuels différends.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Leur importance tient au fait qu’elles traduisent les principes généraux des marchés publics dans un cadre opérationnel directement applicable aux projets de construction. Elles permettent de définir, dès le lancement du marché, les responsabilités de chacun, les procédures à respecter et les conséquences contractuelles des décisions prises en cours d’exécution. À ce titre, les CCG constituent l’un des outils les plus importants pour assurer la bonne gestion administrative, financière et contractuelle d’un marché de travaux.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, notamment son article 51, paragraphe (2), qui prévoit la possibilité d’instituer des cahiers spéciaux des charges standardisés. En application de ce cadre, le règlement ministériel du 20 avril 2018 institue le cahier spécial des charges standardisé relatif aux clauses contractuelles générales applicables à tous les marchés publics de travaux relatifs au secteur du bâtiment. Ces clauses doivent être intégrées dans le dossier de soumission et s’imposent comme référence contractuelle pour les marchés concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour les maîtres d’ouvrage, les CCG offrent un cadre de pilotage fiable pour suivre l’exécution du marché, traiter les adaptations nécessaires et sécuriser les décisions prises tout au long du projet. Pour les concepteurs et les gestionnaires de projets, elles facilitent la préparation des dossiers, l’analyse des situations contractuelles et l’accompagnement du maître d’ouvrage pendant l’exécution. Pour les entreprises, elles apportent une meilleure visibilité sur les conditions dans lesquelles les travaux seront commandés, exécutés, rémunérés, modifiés, contrôlés et réceptionnés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG contribuent ainsi à renforcer la prévisibilité des marchés et à réduire les zones d’incertitude susceptibles de générer des désaccords. En définissant des règles communes et équilibrées, elles favorisent une gestion plus transparente des projets, une meilleure compréhension des droits et obligations de chaque partie et une résolution plus structurée des difficultés pouvant apparaître en cours de chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation entre les représentants des maîtres d’ouvrage, des concepteurs et des entreprises, les CCG reflètent la mission du CRTI-B de produire des documents contractuels équilibrés, adaptés aux pratiques luxembourgeoises et utilisables par l’ensemble du secteur. Elles constituent un instrument essentiel pour renforcer la confiance entre les acteurs, améliorer la qualité des marchés publics de travaux et soutenir une exécution plus efficace et mieux maîtrisée des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2018-10-17T12:00:00.000Z", "numero": "CCG", "titulo": "Clauses contractuelles ", "versao": "10.2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.49+01	2026-06-09 22:39:33.49+01	published	2026-06-09 22:39:33.5+01	2026-06-09 22:39:33.5+01	f	f
29	29	Conditions minima de participation à la soumission	conditions-minima-de-participation-a-la-soumission	\N	100	settings	\N	\N	\N	\N	2026-06-09 22:39:33.513+01	2026-06-09 22:39:33.513+01	published	2026-06-09 22:39:33.523+01	2026-06-09 22:39:33.523+01	f	f
30	30	Révision des prix des matériaux pour les marchés publics	revision-des-prix-des-materiaux-pour-les-marches-publics	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des Prix dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Un guide pratique pour comprendre et appliquer correctement les mécanismes de révision des prix des matériaux de construction dans le cadre de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La formule de la \\"révision des prix des matériaux\\", développée par l'Administration des Bâtiments Publics du Luxembourg, permet aux maîtres d'ouvrage de prendre en considération l'évolution des prix des matières premières entre la date de la soumission et celle de la facturation. Pour les marchés publics de travaux, et à la demande de l'entreprise, le maître d'ouvrage procède à cette révision des prix lors du décompte final.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis 2016, le CRTI-B a été mandaté par le Ministère de tutelle pour la mise à jour de la banque de données, la publication des valeurs-seuils et l'assistance aux utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix (dite 'de base')", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Points d'attention :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les valeurs-seuils par corps de métier sont mises à jour ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "tous les trimestres", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lors de l'élaboration de votre offre, veillez à toujours considérer les valeurs-seuils applicables à la date exacte de la soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B met en plus à disposition un simulateur en-ligne du calcul de la révision des prix accessible à tous les acteurs sous", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "autolink", "fields": {"url": "http://revprix.crtib.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "http://revprix.crtib.lu", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "6a0ac9c9276c287ad62ce8a3", "slides": [{"id": "6a0ac9cb9a9a9576a3484c28", "image": 193, "title": "Révision des prix"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "center", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64a7cc0dbbd0b7752bfa1", "rows": [{"id": "69d647e1104c1147367b3e42", "values": {"69d6476b104c1147367b3e3e": "Aménagement extérieur - Ensemble des prestations de construction", "69d64793104c1147367b3e3f": "40", "69d64795104c1147367b3e40": "60", "69d64799104c1147367b3e41": "4.826"}}], "title": "Valeurs-seuils actuels par corps de métier", "columns": [{"id": "69d6476b104c1147367b3e3e", "type": "text", "label": "Nom", "precision": 2}, {"id": "69d64793104c1147367b3e3f", "type": "number", "label": "Main d'oeuvre", "precision": 2}, {"id": "69d64795104c1147367b3e40", "type": "number", "label": "Matériaux", "precision": 2}, {"id": "69d64799104c1147367b3e41", "type": "percentage", "label": "Seuil Spécifique", "precision": 2}], "blockName": "", "blockType": "dynamicGrid"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64b47c0dbbd0b7752bfa2", "items": [{"id": "69d64b4b104c1147367b3e43", "file": 73, "label": "Explication simplifiée de la méthodolohie (Présentation - Démo)"}], "title": "Documents complémentaires", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix extraordinaire (conformément au communiqué ministériel du 31 mars 2022)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Suite à la publication du ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce7", "type": "link", "fields": {"url": "https://marches.public.lu/dam-assets/fr/legislation/circulaires-communications/22-03-31-communication-v3.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "communiqué ministériel relatif à la hausse des matériaux le 31 mars 2022", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et en collaboration étroite entre les partenaires du CRTI-B, une note sur la procédure de révision de prix extraordinaire été développée pour répondre aux hausses des prix des matériaux de construction. Cette note est lié à la note descriptive du CRTI-B qui décrit la procédure de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce8", "type": "link", "fields": {"url": "http://www.crtib.lu/fr/marches-publics-contrats-types/demande-davances-en-liquidites", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "demande d'avances en liquidités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La note est une recommendation développée consensuellement entre", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdce9", "type": "link", "fields": {"url": "http://mmtp.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Ministère de la Mobilité et des Travaux publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcea", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "L’Ordre des Architectes et des Ingénieurs-Conseils", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdceb", "type": "link", "fields": {"url": "http://www.fda.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 4, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcec", "type": "link", "fields": {"url": "http://www.groupement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 5, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdced", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Chambre des Métiers", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcee", "items": [{"id": "69d501d19199ce2a83b07bf7", "file": 26, "label": "Téléchargement de la note, version 2 du 30/03/2023"}, {"id": "69d502039199ce2a83b07bf8", "file": 27, "label": "Téléchargement de l'outil de calcul EXCEL, version du 16/02/2026"}], "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcef", "items": [{"id": "69d502819199ce2a83b07bf9", "file": 28, "label": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022"}], "title": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d64cdcc0dbbd0b7752bfa4", "type": "link", "fields": {"url": "https://youtu.be/NtJjtHhtJQE", "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Lien vers l'enregistrement de la séance d'information du 27 juin 2022 (FR)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.538+01	2026-06-09 22:39:33.538+01	published	2026-06-09 22:39:33.546+01	2026-06-09 22:39:33.546+01	f	f
31	31	Normalisations au Luxembourg	normalisations-au-luxembourg	\N	100	settings	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Normalisation au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au sein de l’Union européenne, les organismes nationaux de normalisation ont l’obligation de mettre en application toute norme européenne sur le plan national dans un délai généralement fixé à 6 mois et de retirer toute norme nationale qui serait éventuellement conflictuelle avec cette dernière. De même, un sujet qui a été traité au niveau européen, ne pourra faire l’objet d’une norme nationale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La transposition au niveau national d’une norme européenne consiste à procéder à l’enregistrement du texte intégral de la norme européenne au Journal officiel national. Cet acte confère ainsi aux normes européennes le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au Grand-Duché de Luxembourg, c’est l’ILNAS, respectivement l’Organisme luxembourgeois de normalisation qui se voit confier la mission de « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "publier au Mémorial les références des normes et autres documents normatifs nationaux transposant des normes et autres documents normatifs élaborés et adoptés par les organismes de normalisation européens et internationaux", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}, {"mode": "normal", "text": " ». La mise en application de nouvelles européennes au Grand-Duché de Luxembourg est promulguée par le Directeur de l’ILNAS sur base d’un relevé périodique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il est entendu que chaque organisme national de normalisation apposera son préfixe devant la référence de la norme européenne qu’il transposera au niveau national (ILNAS = Luxembourg ; NF = France ; DIN = Allemagne ; BS = Royaume-Uni, etc.). Il convient donc, au Grand-Duché de Luxembourg, de se référer aux normes « ILNAS EN » puisque celles-ci ont le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69fb027d5a0b8083b2495da0", "type": "upload", "value": 105, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "(Schéma sur la normalisation internationale, Source: ILNAS) ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A propos de l’ILNAS", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS, en sa qualité d’organisme luxembourgeois de normalisation (OLN), exerce les missions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Exécuter la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc363fd1a2563b27671946", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/strategie-normative-luxembourgeoise-2024-2030.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stratégie normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et les politiques en matière de normalisation (ICT, Construction, Aérospatial, Conformité, Développement durable et Education & Recherche) définies par le Ministre ayant l’Economie dans ses attributions ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Coordonner l'", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3674d1a2563b27671947", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/experts-normalisation.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "élaboration des norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s et autres documents normatifs nationaux avec les acteurs socio-économiques luxembourgeois ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Transposer et publier des normes et autres documents normatifs élaborés par les organismes européens de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Centraliser et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc369fd1a2563b27671948", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "mettre à disposition les norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s nationales, européennes et internationales ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Représenter le Grand-Duché de Luxembourg auprès des organismes européens (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36c7d1a2563b27671949", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CEN", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36e7d1a2563b2767194a", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CENELEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3701d1a2563b2767194b", "type": "link", "fields": {"url": "https://www.etsi.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ETSI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") et internationaux (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3727d1a2563b2767194c", "type": "link", "fields": {"url": "https://www.iso.org/fr/home.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ISO,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3761d1a2563b2767194d", "type": "link", "fields": {"url": "https://www.iec.ch/homepage", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "IEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3781d1a2563b2767194e", "type": "link", "fields": {"url": "https://www.itu.int/fr/Pages/default.aspx#/fr", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ITU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") de normalisation ainsi que dans l’association ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc379ed1a2563b2767194f", "type": "link", "fields": {"url": "https://associationrnf.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "RNF ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ";", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Créer et dissoudre des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37aed1a2563b27671950", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/normes-nationales.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "comités techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " de normalisation nationaux ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37dad1a2563b27671951", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/publications.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Promouvoir la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37f3d1a2563b27671952", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/formations.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " assurer la formation continue en matière de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Faciliter les interactions entre le monde de la", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3818d1a2563b27671953", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/education-recherche/normalisation-recherche.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " recherche", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et celui de la normalisation.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exécution de ses missions relatives à la normalisation l’ILNAS est supporté par l’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3852d1a2563b2767196c", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/acteurs/gie-anec.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Agence pour la normalisation et l’économie de la connaissance (ANEC GIE).\\n (ANEC GIE).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 8}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Achat de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS dispose d’un catalogue en ligne « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d98", "type": "link", "fields": {"url": "https://ilnas.services-publics.lu/ecnor/home.action", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "e-Shop ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "» de plus de 230 000 documents normatifs qui permet à toute personne intéressée de faire une ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "recherche détaillée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " et d’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "acheter les normes nationales ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "(ILNAS et DIN),", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " européennes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (CEN, CENELEC et ETSI) et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (ISO et IEC) au format PDF, en licence unique ou licence réseau (sauf DIN). Ce catalogue est disponible en trois langues : allemand, anglais et français.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De plus, l'ILNAS e-Shop offre la possibilité de rester informé en temps réel des changements liés à une ou plusieurs normes grâce à un système de notification personnalisable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation gratuite de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS offre aux acteurs socio-économiques la possibilité de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "consulter (gratuitement et en lecture seule)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " toutes les ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "normes nationales, européennes et internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " par l'intermédiaire de plusieurs ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38a7d1a2563b2767196d", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stations de lecture  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "(les normes DIN sont uniquement disponibles sur la station de lecture dans les locaux de l'ILNAS).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Service de veille normative ciblée", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Quelles sont les normes techniques publiées ou en développement qui concernent votre activité ? Quels sont les comités techniques de normalisation actifs dans votre secteur d’activité ? Disposez-vous des versions les plus récentes des normes utiles à votre activité ?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ILNAS, avec le support de l’ANEC GIE, propose à tout acteur économique national ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38e7d1a2563b2767196e", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/produits-et-services.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "un service de veille normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " pour répondre à ces questions.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Liens utiles en lien avec le domaine de la construction", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-      ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38fed1a2563b2767196f", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "  Analyse normative sectorielle", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-        ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3917d1a2563b27671970", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Fiches techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-       ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc392dd1a2563b27671971", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/introduction-a-la-normalisation-technique-du-secteur-de-la-construction-v1-0.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " Introduction à la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnes de contact", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Monsieur Jérôme HOEROLD, Chef de département (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9e", "type": "link", "fields": {"url": "mailto:jerome.hoerold@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "jerome.hoerold@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Madame Victoria MLETZAK, Responsable secteur « Construction & Normalisation ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "(", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9f", "type": "link", "fields": {"url": "mailto:victoria.mletzak@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "victoria.mletzak@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.562+01	2026-06-09 22:39:33.562+01	published	2026-06-09 22:39:33.572+01	2026-06-09 22:39:33.572+01	f	f
35	35	Rapport d'activité 	Rappport d activite 	\N	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.657+01	2026-06-09 22:39:33.657+01	published	2026-06-09 22:39:33.668+01	2026-06-09 22:39:33.668+01	f	f
36	36	Notre histoire	notre-histoire	\N	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre histoire", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE, Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment, trouve ses origines en 1990. À cette époque, le secteur luxembourgeois de la construction exprimait déjà un besoin clair : disposer d’un lieu neutre permettant aux acteurs publics et privés de travailler ensemble sur des bases communes.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pendant plus de vingt ans, le CRTI-B a fonctionné au sein du Centre de Recherche Public Henri Tudor. Cette première phase a permis de poser les fondations de son action : développer des documents de référence, structurer les marchés publics de construction et créer un langage commun entre maîtres d’ouvrage, maîtres d’œuvre et entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au fil des années, les groupes de travail du CRTI-B ont élaboré des clauses contractuelles et des clauses techniques couvrant progressivement de nombreux corps de métier du bâtiment, des installations techniques et du parachèvement. Ces documents sont devenus des références importantes pour la préparation et l’exécution des marchés publics, en apportant davantage de clarté, de cohérence et de sécurité aux projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une étape déterminante a été franchie avec le règlement grand-ducal du 24 mars 2014, qui a consacré l’importance des cahiers spéciaux des charges standardisés dans les marchés publics. Cette reconnaissance a renforcé le rôle du CRTI-B comme acteur central de la standardisation dans le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En 2015, le CRTI-B a pris une nouvelle dimension avec la création d’une structure juridique propre sous forme de groupement d’intérêt économique. Les statuts du GIE CRTI-B ont été signés le 1er avril 2015 par ses partenaires fondateurs : l’État du Grand-Duché de Luxembourg, la Chambre des Métiers, l’Ordre des Architectes et des Ingénieurs-Conseils, la Fédération des Artisans et le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics. Cette évolution a permis de doter le CRTI-B d’une gouvernance autonome, mieux adaptée à son rôle de plateforme sectorielle.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a22709c4a771e0531a99915", "type": "upload", "value": 218, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De gauche à droite :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jos DELL, Président de l’Ordre des Architectes et des Ingénieurs – Conseils,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Michel RECKINGER, Président de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean FEYEREISEN, Administrateur honoraire du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Romain SCHMIT, Directeur de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian THIRY, Président du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur François BAUSCH, Ministre du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Nico BIEVER, Vice-Président de la Chambre des Métiers,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Thierry HIRTZ, Président du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 9, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Ricky WOHL, Conseiller de direction 1ère classe, Ministère du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 10, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian REDING, Secrétaire général du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 11, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean LEYDER, Directeur de l’Administration des Bâtiments Publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une direction au service des étapes du CRTI-B GIE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La création du GIE a ouvert une nouvelle phase dans l’organisation du CRTI-B. Lors de la mise en place de cette structure autonome, le secrétariat général était assuré par Christian Reding, dans la continuité des travaux historiques du CRTI-B et de sa transition vers un modèle de gouvernance propre.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À partir de 2016, Moreno Viola a assuré la direction opérationnelle du CRTI-B GIE. Cette période a notamment accompagné la consolidation des activités de standardisation, le développement des travaux autour du BIM et l’élargissement progressif des missions vers la digitalisation et la construction durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis le 1er janvier 2025, la direction du CRTI-B GIE est assurée par Gilles Christnach. Cette nouvelle étape s’inscrit dans une phase de renforcement stratégique de l’institution, avec l’ambition de développer le CRTI-B comme centre de compétences élargi pour le secteur de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis sa transformation en GIE, le CRTI-B a poursuivi son développement en restant fidèle à son principe de base : faire avancer le secteur par la concertation. Ses travaux se sont élargis progressivement, notamment vers les bibliothèques de prestations standardisées, la coopération électronique, le BIM, la construction durable et les échanges de données entre les acteurs d’un projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’évolution du CRTI-B reflète celle du secteur. En 1990, l’enjeu principal était de mieux structurer les marchés et de créer des documents communs pour parler le même langage. Aujourd’hui, le besoin reste le même dans son principe, mais il s’exprime à une autre échelle : connecter les outils, harmoniser les données, simplifier les procédures, intégrer les exigences environnementales et accompagner la transformation numérique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette continuité fait la force du CRTI-B. Né pour standardiser et faciliter, il évolue aujourd’hui vers un centre de compétences capable d’accompagner les grands changements du secteur, tout en conservant ce qui a toujours fait sa valeur : la neutralité, le consensus et la coopération entre les acteurs de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.684+01	2026-06-09 22:39:33.684+01	published	2026-06-09 22:39:33.695+01	2026-06-09 22:39:33.695+01	f	f
37	37	Nos partenaires	nos-partenaires	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "69d500b562d9b95d18ed1568", "items": [{"id": "69d500b9ace1b61978438289", "title": "Ministère de la Mobilité et des Travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les attributions du ministère de la Mobilité et des Travaux publics (MMTP) sont définies par le  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a181196f0d011174c5a5b9d", "type": "link", "fields": {"url": "https://legilux.public.lu/eli/etat/leg/ri/2023/11/27/a779/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "règlement interne du gouvernement.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ministère est responsable de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des transports ainsi que, entre autres, de la planification de la mobilité, les services publics de transport, la circulation routière, les chemins de fer, les transports routiers ou encore la navigation intérieure et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des travaux publics dont les bâtiments de l’État et la voirie de l’État.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"tag": "h4", "type": "heading", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Deux administrations relèvent du Département des travaux publics :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des bâtiments publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'organisation de l'Administration des bâtiments publics (ABP) est déterminée par les compétences qui lui ont été attribuées par la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9e", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2017/03/08/a375/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 8 mars 2017", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " modifiant la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9f", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2004/06/15/n2/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 15 juin 2004", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle est principalement en charge de", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         l’étude et de l’exécution des bâtiments publics nouveaux financés par l’État, y compris leurs équipements et l’aménagement des alentours,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         de l’étude et de la réalisation des travaux de transformation, d’agrandissement et de réhabilitation des bâtiments publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         ainsi que de l’établissement et de la gestion des programmes de maintenance des bâtiments publics, de leurs équipements, alentours et plantations.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des ponts et chaussées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'Administration des ponts et chaussées est chargée, dans les limites fixées par les lois et règlements, de travaux de génie civil pour compte de l'Etat. L'Administration des ponts et chaussées a notamment les attributions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour compte de l'Etat", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, entretien et modernisation du réseau de la grande voirie;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "gestion du trafic sur le réseau de la grande voirie et surveillance de la sécurité dans les tunnels;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, aménagement et entretien de la voirie de l'Etat et de ses dépendances;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "établissement des permissions de voirie et exercice de la police de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "surveillance et entretien des aménagements hydroélectriques de la Haute Sûre et de la Basse Sûre ainsi que des barrages et écluses du chenal navigable;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "mise en place et entretien de l'éclairage public du réseau de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "entretien constructif et courant du chenal navigable et des berges de la Moselle canalisée et du port de Mertert;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction et entretien de certaines infrastructures de l'aéroport de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}], "direction": null}}}, {"id": "69d500fbace1b6197843828c", "title": "Chambre des Métiers", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La Chambre des Métiers est l’une des cinq chambres professionnelles patronales et salariales du Grand-Duché de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "La Chambre des Métiers est constituée en tant qu'établissement public par la loi du 4 avril 1924.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En tant qu'organisme à base élective et à affiliation obligatoire, la Chambre des Métiers est le représentant de l'ensemble des entreprises du secteur de l'Artisanat au Luxembourg. Elle sauvegarde et défend les intérêts des entreprises artisanales, participe à la procédure législative (avis sur les projets de loi et de règlement soumis par le Gouvernement), gère les contrats d'apprentissage et réalise l'organisation matérielle des examens de fin d'apprentissage, organise les cours et examens menant au Brevet de Maîtrise, mène une politique d'assistance et de conseil générale, sectorielle et individuelle au service des entreprises artisanales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par ailleurs la Chambre des Métiers réalise des études et analyses en rapport avec le secteur de l'Artisanat et des petites et moyennes entreprises (PME) en général.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5012f62d9b95d18ed1571", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.cdm.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50130ace1b6197843828d", "title": "Ordre des Architectes et Ingénieurs-conseils (OAI)", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ORDRE DES ARCHITECTES ET DES INGÉNIEURS-CONSEILS (OAI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Définie par la loi luxembourgeoise, la mission de l’Ordre des Architectes et des Ingénieurs-Conseils, consiste à garantir l’application des droits et des devoirs des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "6 professions OAI ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "d’intérêt public :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "architecte, architecte d’intérieur, ingénieur-conseil, urbaniste-aménageur, architecte-paysagiste, et géomètre.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chacun de ces professionnels, qu’il soit une personne physique ou morale, doit être inscrit au tableau de l’Ordre pour exercer sa profession à titre d’indépendant au Grand-Duché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "3 missions OAI : légale, professionnelle, culturelle.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses missions légales, d’organisation professionnelle ainsi que d’intérêt public, l’OAI valorise la véritable dimension du travail de ses membres, au niveau économique, social, artistique et culturel, pour un cadre de vie durable, intelligent et de qualité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Membres OAI = Label de qualité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’essence des professions OAI est constituée notamment de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• La qualification, la compétence, l’expertise, la créativité et l’ingéniosité,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance professionnelle et la déontologie,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• Les responsabilités professionnelles et décennales/biennales,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’obligation de contracter des assurances couvrant ces responsabilités,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance de toute activité commerciale afin d’éviter les conflits d’intérêts,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• la défense de l’intérêt public, du maître d’ouvrage et des utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a1ff9ba9d6e4de0283328b1", "type": "upload", "value": 88, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5014c62d9b95d18ed1573", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.oai.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d5014eace1b6197843828e", "title": "Fédération des Artisans", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Organisation représentative de l’artisanat luxembourgeois", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fondée en 1905, la Fédération des Artisans est l’organisation faîtière de l’artisanat au Luxembourg. Elle regroupe aujourd’hui une trentaine de fédérations professionnelles et représente près de 3.000 entreprises, constituant un acteur central du tissu économique national.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En étroite collaboration avec ses membres, la Fédération définit et porte la politique générale de l’artisanat. Elle s’engage à promouvoir activement les intérêts du secteur, tant auprès des entreprises que des décideurs politiques, des partenaires économiques et du grand public. Reconnue comme un interlocuteur de référence, elle contribue de manière structurée et proactive au débat économique et sociétal.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exercice de ses missions, la Fédération des Artisans :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "représente et défend les intérêts de l’artisanat aux niveaux national et international ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "œuvre à la mise en place de conditions-cadres favorables aux entreprises artisanales et aux indépendants ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "coordonne les actions et les positions des fédérations professionnelles affiliées ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "renforce la cohésion et la solidarité au sein du secteur ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "accompagne et conseille les entreprises dans leurs enjeux quotidiens et stratégiques. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Acteur engagé dans le secteur de la construction, la Fédération soutient activement les entreprises dans les défis liés à la transformation digitale, à l’innovation des processus et à l’amélioration de la qualité et de la productivité, notamment à travers des initiatives favorisant la collaboration entre les différents métiers et partenaires de la filière.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle agit en synergie avec les fédérations membres ainsi qu’avec les institutions partenaires, notamment la Chambre des Métiers, afin de contribuer durablement à la compétitivité, à l’innovation et à la durabilité de l’artisanat luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf1663910505f885ca61d", "type": "upload", "value": 87, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"type": "autolink", "fields": {"url": "https://www.fda.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "www.fda.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50175ace1b6197843828f", "title": "Le Groupement des entrepreneurs du bâtiment et des travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des entrepreneurs du bâtiment et des travaux publics (GEBTP)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics a été fondé en 1946 par un groupe d’entrepreneurs animés par la volonté de créer une association représentative du secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il défend et conserve les intérêts professionnels de ses membres et fait l’analyse économique et sociale des questions relatives à l’industrie de la construction. Il assiste, conseille et informe ses membres sur l’évolution du cadre législatif luxembourgeois et européen. Le Groupement est en contact permanent avec les autorités politiques et économiques ainsi qu’avec les syndicats.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il traite également toute une série de dossiers sectoriels tels que la problématique des décharges pour déchets inertes, la formation continue dans le secteur de la construction, l’amélioration de performances énergétiques et écologiques des bâtiments.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour le Groupement, il importe de soigner l’innovation nationale en mettant l’accent sur l’énorme potentiel du secteur de la construction dans un monde globalisé. Le Groupement des entrepreneurs plaide pour un marché du travail dynamique dans des conditions équitables et exige l’adoption d’un plan d’action contre le dumping social dans la construction et la fraude liée au détachement des travailleurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte du cadre réglementaire, le Groupement pousse tous les acteurs via sa collaboration active dans les groupes de travail du CRTI-B, à améliorer et accélérer les procédures d’autorisation et à simplifier la complexité des règles d’urbanisme afin d’augmenter la prévisibilité des décisions administratives. Il s’agit d’un effort essentiel et nécessaire pour pérenniser le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf17d3910505f885ca61e", "type": "upload", "value": 89, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faf00e3910505f885ca605", "type": "link", "fields": {"url": "http://www.groupement.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.groupement.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}], "blockName": "", "blockType": "accordion"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.713+01	2026-06-09 22:39:33.713+01	published	2026-06-09 22:39:33.723+01	2026-06-09 22:39:33.723+01	f	f
38	38	Organisation	organisation	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre gouvernance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE repose sur une représentation équilibrée des acteurs publics et privés du secteur luxembourgeois de la construction. Cette organisation garantit un fonctionnement neutre, transparent et concerté, dans lequel les décisions sont préparées et prises avec les partenaires concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE fonctionne autour de deux organes principaux : l’Assemblée générale et le Conseil de gérance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale réunit les membres du groupement. Elle constitue l’organe statutaire de référence et valide notamment les comptes annuels, les budgets, les conventions de financement ainsi que les grandes orientations du CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle rassemble les représentants des organismes partenaires :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : Mme Sylvie Siebenborn, représentante effective, et Mme Marie Iacovella-Muller, représentante suppléante ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, représentant effectif, et M. Marc Turpel, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Ponts et Chaussées : M. Gilles Didier, représentant effectif, et M. Frédéric de Oliveira, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Paul Nathan, représentant effectif, et M. Alex Kieffer, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Michelle Friederici, représentante effective, et M. Patrick Nosbusch, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach, représentant effectif, et M. Patrick Koehnen, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz, représentant effectif, et M. Pol Faber, représentant suppléant.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette composition permet de réunir autour d’une même table les principaux points de vue du secteur : pouvoirs publics, maîtres d’ouvrage, concepteurs, artisans et entreprises d’exécution.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance assure la gestion du CRTI-B GIE et suit la mise en œuvre des décisions prises par l’Assemblée générale. Il accompagne les priorités stratégiques, veille au bon déroulement des activités et constitue un lieu de discussion permanent entre les partenaires.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance est composé des représentants suivants :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : M. Claude Pauly et M. Ben Hubert ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, président ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Marc Gross, secrétaire général ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Corinne Stephany et M. Olivier Zirnheld ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par sa composition, le Conseil de gérance assure un lien direct entre les orientations institutionnelles du CRTI-B GIE et les réalités du secteur. Les sujets y sont abordés de manière collégiale, avec la volonté de rechercher des positions équilibrées et applicables.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une gouvernance fondée sur la neutralité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La légitimité du CRTI-B GIE tient à son positionnement unique : il n’est pas l’expression d’un seul acteur, d’une seule profession ou d’une seule administration. Il est un lieu de travail commun, dans lequel les intérêts, les contraintes et les responsabilités de chacun peuvent être mis en discussion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette neutralité est essentielle. Elle permet d’élaborer des décisions et des positions qui tiennent compte des besoins du terrain, des exigences publiques et des réalités économiques. Elle renforce également la confiance entre les partenaires et facilite l’acceptation des travaux portés par le CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une méthode de travail concertée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses organes statutaires, le CRTI-B GIE s’appuie sur des groupes de travail thématiques. Ces groupes réunissent, selon les sujets, des experts techniques, des représentants d’administrations, des concepteurs, des entreprises et des organisations professionnelles.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette méthode permet de traiter les dossiers au plus près de la pratique, avec les personnes directement concernées par leur application. Elle garantit que les décisions ne restent pas théoriques, mais qu’elles puissent être traduites en résultats concrets pour le secteur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE est ainsi à la fois institutionnelle, technique et collaborative. Elle constitue l’une des conditions essentielles pour faire avancer le secteur de manière structurée, cohérente et concertée.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.74+01	2026-06-09 22:39:33.74+01	published	2026-06-09 22:39:33.747+01	2026-06-09 22:39:33.747+01	f	f
39	39	home	home	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.758+01	2026-06-09 22:39:33.758+01	published	2026-06-09 22:39:33.769+01	2026-06-09 22:39:33.769+01	f	f
25	25	Clauses Techniques	clauses-techniques	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses techniques générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses techniques générales, ou CTG, constituent un référentiel technique commun pour les travaux de construction au Luxembourg. Elles définissent, par corps de métier, les exigences applicables à l’exécution des prestations, aux matériaux, aux méthodes de mise en œuvre, aux contrôles, aux principes de mesurage et de décompte, aux tolérances et aux conditions de réception. Elles contribuent ainsi à établir un cadre technique clair, cohérent et partagé entre les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les marchés publics, les CTG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, dont l’article 51, paragraphe (2), prévoit que des règlements grand-ducaux peuvent instituer des cahiers spéciaux des charges standardisés, publiés par voie électronique. En application de ce cadre, le règlement grand-ducal du 24 mars 2014 portant institution de cahiers spéciaux des charges standardisés en matière de marchés publics prévoit, à son article 1er, paragraphe (4), que le recours à ces cahiers spéciaux des charges standardisés est obligatoire. Les CTG constituent dès lors une référence obligatoire pour les marchés publics de travaux concernés, conformément aux règlements ministériels instituant les cahiers spéciaux des charges standardisés par corps de métier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation avec les acteurs du secteur, les CTG reflètent les pratiques reconnues, les évolutions normatives et les spécificités du contexte luxembourgeois. Depuis le 1er janvier 2026, et en collaboration avec le Ministère de la Mobilité et des Travaux publics, les CTG peuvent être révisées selon les besoins et jusqu’à deux fois par an. Cette nouvelle procédure repose notamment sur la publication d’un texte consolidé reprenant l’ensemble des CTG en vigueur, publié par règlement grand-ducal, afin d’améliorer la lisibilité du cadre applicable et de faciliter l’identification de la version en vigueur à la date de publication d’une soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette mise à jour régulière permet d’intégrer plus rapidement les développements techniques, les nouvelles exigences réglementaires, les enjeux de durabilité et les besoins exprimés par le terrain. À travers les CTG, le CRTI-B contribue à renforcer la qualité de la construction, la sécurité juridique et technique des projets, ainsi que la cohérence des pratiques dans le secteur luxembourgeois de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65782c0dbbd0b7752bfac", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69fc5e6f4efe7b6962af4881", "pdf": 151, "data": "2002-03-22T12:00:00.000Z", "numero": "CTG0", "titulo": "Clauses techniques générales applicables à tous les corps de métiers", "versao": "4"}, {"id": "69fc5d444efe7b6962af487d", "pdf": 150, "data": "2002-10-31T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage", "versao": "2"}, {"id": "69fc5d474efe7b6962af487e", "pdf": 149, "data": "2003-01-15T12:00:00.000Z", "numero": "CTG002", "titulo": "Travaux de terrassement", "versao": "3"}, {"id": "69fc5d4a4efe7b6962af487f", "pdf": 148, "data": "2007-12-07T12:00:00.000Z", "numero": "CTG009", "titulo": "Travaux de canalisation", "versao": "4"}, {"id": "69fc5d4e4efe7b6962af4880", "pdf": 147, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG010", "titulo": "Travaux d’aménagement extérieur : Pavages, dallages et bordures", "versao": "1"}, {"id": "69fc5c2c4efe7b6962af4874", "pdf": 146, "data": "2002-10-25T12:00:00.000Z", "numero": "CTG011", "titulo": "Travaux de façades", "versao": "2"}, {"id": "69fc5c374efe7b6962af4875", "pdf": 145, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie", "versao": "3"}, {"id": "69fc5c3c4efe7b6962af4876", "pdf": 144, "data": "2007-07-10T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton", "versao": "6"}, {"id": "69fc5c434efe7b6962af4877", "pdf": 143, "data": "2008-04-24T12:00:00.000Z", "numero": "CTG014", "titulo": "Travaux de pierre naturelle", "versao": "1"}, {"id": "69fc5ab74efe7b6962af486f", "pdf": 142, "data": "2019-05-25T12:00:00.000Z", "numero": "CTG016", "titulo": "Travaux de construction en bois", "versao": "3"}, {"id": "69fc5ae44efe7b6962af4873", "pdf": 141, "data": "2019-04-15T12:00:00.000Z", "numero": "CTG017", "titulo": "Travaux de constructions métalliques", "versao": "3"}, {"id": "69fc5ac74efe7b6962af4870", "pdf": 140, "data": "2002-10-29T12:00:00.000Z", "numero": "CTG018", "titulo": "Travaux d'étanchéité", "versao": "2"}, {"id": "69fc5acc4efe7b6962af4871", "pdf": 139, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG020", "titulo": "Travaux de couverture et d'étanchéité de toitures", "versao": "3"}, {"id": "69fc5ad04efe7b6962af4872", "pdf": 138, "data": "2019-07-25T12:00:00.000Z", "numero": "CTG022", "titulo": "Travaux de ferblanterie", "versao": "4"}, {"id": "69fc59574efe7b6962af486a", "pdf": 137, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG023", "titulo": "Enduits intérieurs, plâtrerie et stucs", "versao": "4"}, {"id": "69fc595b4efe7b6962af486b", "pdf": 136, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG024", "titulo": "Carreaux et dalles de revêtement", "versao": "3"}, {"id": "69fc595e4efe7b6962af486c", "pdf": 135, "data": "2003-03-25T12:00:00.000Z", "numero": "CTG025", "titulo": "Chapes et sols coulés", "versao": "2"}, {"id": "69fc59624efe7b6962af486d", "pdf": 134, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG026", "titulo": "Travaux de pose de parquets massifs", "versao": "1"}, {"id": "69fc59654efe7b6962af486e", "pdf": 133, "data": "2003-03-24T12:00:00.000Z", "numero": "CTG027", "titulo": "Travaux de menuiserie", "versao": "3"}, {"id": "69fc570f4efe7b6962af4861", "pdf": 130, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG028", "titulo": "Travaux de quincaillerie", "versao": "1.1"}, {"id": "69fc55f94efe7b6962af485f", "pdf": 129, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG031", "titulo": "Menuiserie métallique: fenêtres en aluminium et fenêtres en acier", "versao": "3"}, {"id": "69fc56954efe7b6962af4860", "pdf": 128, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG032", "titulo": "\\tMétallerie et serrurerie", "versao": "3"}, {"id": "69fc55f14efe7b6962af485e", "pdf": 127, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG034", "titulo": "Travaux de peinture", "versao": "4"}, {"id": "69fc55e04efe7b6962af485d", "pdf": 126, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG035", "titulo": "Travaux de tapisserie", "versao": "3"}, {"id": "69fc55624efe7b6962af485c", "pdf": 125, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG036", "titulo": "Travaux de revêtements de sol", "versao": "3"}, {"id": "69fc551e4efe7b6962af485b", "pdf": 124, "data": "2003-03-27T12:00:00.000Z", "numero": "CTG037", "titulo": "Travaux de vitrerie", "versao": "2"}, {"id": "69fc54ce4efe7b6962af485a", "pdf": 123, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG038", "titulo": "Travaux de façades ventilées", "versao": "1"}, {"id": "69fc54754efe7b6962af4859", "pdf": 122, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG039", "titulo": "Ouvrages secs", "versao": "3"}, {"id": "69fc52164efe7b6962af4857", "pdf": 121, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude", "versao": "6"}, {"id": "69fc51c54efe7b6962af4856", "pdf": 120, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires", "versao": "6"}, {"id": "69fc51924efe7b6962af4855", "pdf": 119, "data": "2022-05-23T12:00:00.000Z", "numero": "CTG047", "titulo": "Travaux d'isolation et de coupe-feu des installations techniques", "versao": "2"}, {"id": "69fc505f4efe7b6962af4854", "pdf": 118, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG049", "titulo": "Travaux d'installations sprinkler", "versao": "3"}, {"id": "69fc50204efe7b6962af4853", "pdf": 117, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG052", "titulo": "Travaux d'installations électriques à moyenne tension", "versao": "4"}, {"id": "69fc4fec4efe7b6962af4852", "pdf": 116, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG053", "titulo": "Travaux d'installations électriques à basse tension", "versao": "4"}, {"id": "69fc4f5f4efe7b6962af4851", "pdf": 115, "data": "2019-12-20T12:00:00.000Z", "numero": "CTG061", "titulo": "Travaux d'installations électriques, courant faible", "versao": "1"}, {"id": "69fc4efc4efe7b6962af4850", "pdf": 114, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG069", "titulo": "Ascenseurs, escaliers mécaniques, trottoirs roulants et installations de levage", "versao": "5"}, {"id": "69fc4dc54efe7b6962af484d", "pdf": 111, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG176", "titulo": "Cogénération/Procédure de sélection", "versao": "1"}, {"id": "69fc4e414efe7b6962af484e", "pdf": 112, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG175", "titulo": "Cogénération/Vademecum", "versao": "1"}, {"id": "69fc4eb34efe7b6962af484f", "pdf": 113, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation", "versao": "5"}, {"id": "69fc4d874efe7b6962af484c", "pdf": 110, "data": "2002-07-17T12:00:00.000Z", "numero": "CTG177", "titulo": "Cogénération/Dossier de soumission pour fourniture de chaleur", "versao": "2"}, {"id": "69fc4d2a4efe7b6962af484b", "pdf": 109, "data": "2010-03-26T12:00:00.000Z", "numero": "CTG178", "titulo": "Cogénération/Contrat-type de fourniture de chaleur", "versao": "3"}, {"id": "69fc4bb44efe7b6962af4848", "pdf": 107, "data": "2002-06-26T12:00:00.000Z", "numero": "CTG179", "titulo": "Dossier de soumission pour construction et exploitation", "versao": "2"}, {"id": "69d65784104c1147367b3e4c", "pdf": 106, "data": "2009-12-22T12:00:00.000Z", "numero": "CTG180", "titulo": "Cogénération - Etablissement de formules de révision du prix de vente de la chaleur", "versao": "2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.42+01	2026-06-09 22:39:33.42+01	published	2026-06-09 22:39:33.43+01	2026-06-09 22:39:33.43+01	f	f
44	5	Formation 	formation mpu	7	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.988+01	2026-06-09 22:39:32.916+01	published	2026-06-09 22:39:34+01	2026-06-09 22:39:34+01	f	f
42	3	Formation 	formation bim	34	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.896+01	2026-06-09 22:39:32.873+01	published	2026-06-09 22:39:33.907+01	2026-06-09 22:39:33.907+01	f	f
48	11	Performance énergétique du bâtiment	performance-energetique-bâtiment	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "6a0acb00276c287ad62ce8a4", "slides": [{"id": "6a0acb089a9a9576a3484c29", "image": 194, "title": "-"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article couts des mesures énergétiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Gebäudetyp E", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article VNC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Simulateur tec-éco PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Facteur de dégradation des PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Batteries électriques, amortisation écono-écolo émer", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article  Étanchéité à l’air", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article EE et qualité architecturale", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Influence EE sur la valeur immo", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.189+01	2026-06-09 22:39:33.072+01	published	2026-06-09 22:39:34.198+01	2026-06-09 22:39:34.198+01	t	f
11	11	Performance énergétique du bâtiment	performance-energetique-bâtiment	\N	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "6a0acb00276c287ad62ce8a4", "slides": [{"id": "6a0acb089a9a9576a3484c29", "image": 194, "title": "-"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article couts des mesures énergétiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Gebäudetyp E", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article VNC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Simulateur tec-éco PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Facteur de dégradation des PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Batteries électriques, amortisation écono-écolo émer", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article  Étanchéité à l’air", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article EE et qualité architecturale", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Influence EE sur la valeur immo", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.072+01	2026-06-09 22:39:33.072+01	published	2026-06-09 22:39:33.081+01	2026-06-09 22:39:33.081+01	f	f
49	12	Performance énergétique EU 	performance-energetique-eu	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Tour européen des exigences minimales EE,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Objectifs des EM", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Ressources énergétiques, locales, UE", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article UE 2026 -2070 prévisions évolution Meeting Days et Cooling Days", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article indépendance énergétique (MHI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique du bâtiment", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.231+01	2026-06-09 22:39:33.094+01	published	2026-06-09 22:39:34.24+01	2026-06-09 22:39:34.24+01	t	f
50	13	Performance énergétique LU 	performance-energetique-lu-	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance vs Efficacité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Bâtiments autonomes – influences réseau", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Indépendance énergétique Merfindahl Hirschmann Index", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Eff énergétique et la productivité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance énergétique et coûts d’externalités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article incidences territoriales des émissions de polluants liées à la production chaleur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique EU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.274+01	2026-06-09 22:39:33.112+01	published	2026-06-09 22:39:34.285+01	2026-06-09 22:39:34.285+01	t	f
51	15	Soumission public	soumission-public	7	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les marchés publics jouent un rôle central dans le secteur de la construction. Leur cadre réglementaire peut s’avérer complexe.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B accompagne les acteurs dans la compréhension des procédures, des obligations légales et des bonnes pratiques liées aux marchés publics. Notre objectif est de rendre l’information accessible, claire et structurée, afin de faciliter la participation et l’exécution des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À travers des ressources, des formations et des échanges, le CRTI-B contribue à des marchés publics plus transparents, plus efficaces et mieux maîtrisés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lois et règlements grand-ducaux", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les lois et règlements en vigueur pour le traitement des marchés publics sont rassemblés sur le site internet ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d68", "type": "link", "fields": {"url": "https://marches.public.lu/fr/legislation.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/legislation.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation des avis de marché", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les avis de marché en cours et les dossiers de soumissions à télécharger  peuvent être consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d69", "type": "link", "fields": {"url": "http://www.marches.public.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise des offres de prix", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les dispositions de remise des offres de prix peuvent être  consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6a", "type": "link", "fields": {"url": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques dans le cadre de la nouvelle loi sur les marchés publics La législation sur les marchés publics permet la remise de documents électroniques. Pour le moment, aucun système électronique validé luxembourgeois n'est opérationnel pour réaliser le transfert des données sécurisées depuis l'annonce de la demande d'offre dans la presse jusqu'à l'ouverture électronique de la soumission et au-delà. De ce fait, la nouvelle réglementation prévoit que la passation électronique des marchés publics se fera en plusieurs étapes. Dès à présent, les soumissionnaires peuvent remettre un résumé du bordereau de soumission sur support électronique. Le dépôt d'une telle offre se fera de la même façon que le dépôt d'une offre papier (envoi recommandé ou remise en mains propres). La procédure de remise d'une offre sur support électronique est déterminée à l'article 51 (2) du règlement grand-ducal du 3 août 2009.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cet article stipule que « les soumissionnaires sont autorisés à utiliser pour la remise de leur offre un résumé du bordereau de soumission à condition qu'ils reconnaissent dans une déclaration écrite que seul le texte du bordereau de soumission original imprimé établi par le pouvoir adjudicateur fait foi. Lesdits résumés doivent obligatoirement reprendre dans le même ordre, munis de la même numérotation, toutes les informations demandées telles que fabricants, types, etc., pour toutes les positions du bordereau original en vue d'assurer le contrôle qualitatif et technique. Le résumé peut être remis par le soumissionnaire sous forme électronique. Tout support informatique doit être accompagné d'une version imprimée, laquelle sera marquée à titre de pièce de soumission et laquelle fera foi en cas de divergence ».", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise électronique des offres obligatoire pour les marchés publics au-dessus des seuils européens et DUME", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La loi sur les marches publics du 8 avril 2018 prévoit qu’au-dessus des seuils européens (Livres II et III) la communication électronique devienne obligatoire pour les marchés publics, y compris pour les questions/réponses et le dépôt/ouverture des offres. Un guide technique est disponible sur le portail des marchés publics pour aider les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le DUME (Document Unique de Marché Européen) est une déclaration sur l’honneur créée dans le cadre du plan d’action européen eGovernment 2016-2020, selon le principe « once only ». Il vise à réduire la charge administrative et à faciliter la participation des entreprises, notamment pour les marchés transfrontaliers. Par ce document, l’opérateur économique atteste qu’il ne se trouve pas dans une situation d’exclusion et qu’il respecte les critères de sélection. Le DUME remplace provisoirement les certificats officiels, qui ne seront demandés qu’au soumissionnaire retenu, sauf exception.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Plus d'informations sous le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6b", "type": "link", "fields": {"url": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.319+01	2026-06-09 22:39:33.16+01	published	2026-06-09 22:39:34.33+01	2026-06-09 22:39:34.33+01	t	f
52	16	BIM IDS 	bim-ids-	34	100	external-link	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "BIM IDS ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le secteur de la construction est en forte croissance mais souffre de problèmes de rentabilité liés aux erreurs de processus et à la fragmentation des échanges. La numérisation, notamment via la technologie BIM, apporte une solution en permettant de modéliser les projets en 3D avec des données géométriques et alphanumériques. Les analyses automatisées des maquettes BIM (détection de clash, vérifications, substitutions graphiques suivant propriétés) réduisent les erreurs de conception et facilitent la compréhension des projets sur chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cependant, malgré ces avantages, des ambiguïtés apparaissent fréquemment dans les échanges d’informations entre partenaires. Chaque acteur utilise le BIM selon ses propres conventions, ce qui complique la collaboration. Les modèles sont parfois incompatibles, incomplets ou structurés différemment, rendant leur réutilisation difficile et entraînant souvent une re-modélisation complète. À cela s’ajoutent les différences de logiciels et de formats de fichiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le format IFC, standard ouvert et normé ISO, permet en théorie un échange universel des maquettes. En pratique, sa mise en œuvre reste complexe : gestion des propriétés, mapping IFC et règles spécifiques demandent un investissement important en configuration, souvent à répéter pour chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Face à ces difficultés, il est nécessaire de disposer d’une référence commune pour tous les acteurs. C’est dans cette optique que Buildwise (Belgique) et le CRTI-B (Luxembourg) ont collaboré afin de définir des règles d’échange harmonisées, basées sur la norme européenne ISO 7817-1:2024. La plateforme BIMids propose ces exigences sous forme de fiches claires et accessibles, facilitant leur compréhension par l’ensemble des professionnels.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"id": "69faed823910505f885ca5fb", "type": "link", "fields": {"url": "http://www.bimids.eu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.bimids.eu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.366+01	2026-06-09 22:39:33.186+01	published	2026-06-09 22:39:34.377+01	2026-06-09 22:39:34.377+01	t	f
53	17	Guide de Formation 	guide-de-formation-	34	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les formations BIM au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’objectif du volet « formation » est de référencer et centraliser les formations BIM disponibles au Luxembourg. Ce référencement se développe autour d’un cycle de formation modulaire BIM de base mis au point par le CRTI-B et ses partenaires. Les autres formations référencées permettent de compléter le cycle de base. Ceci permettra à terme d’obtenir un catalogue formation couvrant le maximum des besoins en BIM pour le Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules de base CRTI-B", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page reprend en détail chaque module proposé dans le cycle de formation modulaire BIM.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules Outils", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les formations complémentaires organisées ou validées par le CRTI-B dont notamment « prise en main logiciel », ce module est par exemple requis avant de participer à « BIM modeleur ». Et est proposé par différents revendeurs logiciels. Cette page regroupe aussi les formations proposées par des prestataires de service externes (éditeurs et revendeurs logiciels, centres de formation…) qui proposent des formations complémentaires au cycle de base BIM, Au Luxembourg ou sous forme de formation à distance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Equivalence", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les équivalences entre formations académiques / professionnelles et certifications professionnelles BIM du CRTI-B.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Satisfaction des participants", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La qualité des formations est notre priorité. Nous monitorons en permanence les formations dispensées et les retours des participants de manière à pouvoir améliorer de manière continue la qualité des modules proposés. Cette approche nous a permis d’obtenir des évaluations élevées de la part des participants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h6", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Schéma du parcours", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f6", "type": "upload", "value": 81, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Parcours formation BIM par métier et profil professionnel", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"id": "69faebf93910505f885ca5f7", "type": "upload", "value": 82, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f8", "type": "upload", "value": 83, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5f9", "type": "upload", "value": 84, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5fa", "type": "upload", "value": 85, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:34.411+01	2026-06-09 22:39:33.209+01	published	2026-06-09 22:39:34.422+01	2026-06-09 22:39:34.422+01	t	f
54	18	Guide d'application	guide-dapplication	34	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Guide d’application", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ère de la digitalisation est en plein essor et a désormais pénétrée l’ensemble de nos secteurs d’activités, parmi lesquels celui de la construction. Cette évolution constitue un défi non négligeable que le secteur de la construction est prêt à relever ; et c’est une réelle chance pour ce secteur d’avancer davantage dans l’intégration du numérique dans ses démarches. Si on parle de « digitalisation » et de « construction », un sujet-clé est incontournable : le « Building Information Modeling », couramment appelé « BIM » qui révolutionnera notre métier, la manière de concevoir un projet et les habitudes de travail d’une manière comparable voire supérieure à ce que fût l’introduction du « dessin assisté par ordinateur » à partir des années ’80.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En effet, le procédé BIM c’est la capacité de créer des plus-values aux différentes étapes d’un projet de construction et d’en optimiser les processus. De cette manière nous arrivons à améliorer la qualité du bâti tout en augmentant l’effectivité des acteurs de la construction et la productivité de tout le secteur. De plus, avec le BIM nous atteindrons à moyen et long terme les objectifs fixés dans le cadre de la Troisième Révolution industrielle, notamment en évoluant vers des bâtiments répondant aux impératifs d’une économie circulaire. Voilà pourquoi, dans le cadre de l’étude Rifkin publié fin 2016, le BIM est désigné comme étant l’un des principaux piliers des futures évolutions dans le domaine de la construction. La transition vers l’ère du « Digital Lëtzebuerg » présente donc de grandes opportunités qu’il s’agira de saisir. Je suis persuadé que la bonne collaboration entre tous les acteurs constituera un atout majeur et profitera pleinement au développement du secteur de la construction et à plus forte raison à notre pays. Cependant, il ne faut pas perdre de vue qu’une telle évolution technologique ne peut réussir que si elle intègre toutes les parties concernées et pas uniquement la maîtrise d’ouvrage et la maîtrise d’œuvre, mais aussi les entreprises et en particulier les PME.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "C’est pourquoi le CRTI-B (Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment) a créé en 2015 un groupe de travail réunissant l’ensemble des acteurs luxembourgeois de la construction avec pour objectif d’élaborer, dans un travail collaboratif, un document de référence pour la collaboration BIM au Luxembourg. Ce « Guide d’application BIM », proposé au secteur luxembourgeois de la construction, constitue la première étape d’un accompagnement dans l’implémentation du BIM et la transition des entreprises vers le numérique. Nous aimerions enfin en profiter pour remercier tous les partenaires, les institutions et fédérations ainsi que toutes les personnes impliquées dans ce projet pour leur apport, leur travail précieux et leurs efforts qui ont permis de faire du projet « BIM au Luxembourg » un véritable travail collaboratif entre tous les acteurs du secteur, ce qui correspond pleinement à l’esprit du CRTI-B ! Aussi, ce Guide est la preuve que le travail collaboratif, le partage et l’échange des compétences permettent d’avancer de manière optimisée en intégrant un haut degré de qualité et à terme de faire évoluer le secteur dans sa globalité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.458+01	2026-06-09 22:39:33.236+01	published	2026-06-09 22:39:34.469+01	2026-06-09 22:39:34.469+01	t	f
55	19	Equipe 	equipe-	32	100	\N	\N	\N	\N	\N	2026-06-09 22:39:34.508+01	2026-06-09 22:39:33.265+01	published	2026-06-09 22:39:34.519+01	2026-06-09 22:39:34.519+01	t	f
56	22	grandchild page	grandchild-page	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "quote", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "block", "fields": {"id": "69d873eb6019d85c589241df", "root": {"name": "person 1", "role": "admin", "photo": 71, "children": [{"id": "69d873f91955713af1612233", "name": "person 2", "role": "subordinate", "photo": 71}]}, "blockName": "", "blockType": "organogram"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.554+01	2026-06-09 22:39:33.34+01	published	2026-06-09 22:39:34.564+01	2026-06-09 22:39:34.564+01	t	f
22	22	grandchild page	grandchild-page	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "quote", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "block", "fields": {"id": "69d873eb6019d85c589241df", "root": {"name": "person 1", "role": "admin", "photo": 71, "children": [{"id": "69d873f91955713af1612233", "name": "person 2", "role": "subordinate", "photo": 71}]}, "blockName": "", "blockType": "organogram"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.34+01	2026-06-09 22:39:33.34+01	published	2026-06-09 22:39:33.348+01	2026-06-09 22:39:33.348+01	f	f
57	23	Modèles de contrats	contrats type	7	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bienvenue dans la bibliothèque officielle des contrats types destinés aux marchés publics. L'utilisation de ces modèles standardisés est fondamentale pour garantir la conformité de vos engagements et assurer une sécurité juridique optimale à toutes les parties (pouvoir adjudicateur et entreprises).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En vous appuyant sur ces documents officiels préétablis, vous facilitez la préparation de vos procédures, réduisez les risques de litiges liés à la rédaction contractuelle et sécurisez la gestion de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d6638ac0dbbd0b7752bfb4", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d6638d104c1147367b3e53", "pdf": 170, "data": "1996-01-21T12:00:00.000Z", "numero": "DNO001", "titulo": "Contrat de coordination", "versao": "1"}, {"id": "69fd90e8b3250ff904d64fac", "pdf": 171, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO002", "titulo": "\\tContrat de sous-traitance", "versao": "1"}, {"id": "69fd9121b3250ff904d64fae", "pdf": 172, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO003", "titulo": "Contrat-type d'association momentanée", "versao": "1"}]}, "format": "", "version": 2}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Conseils d'utilisation et Bonnes Pratiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Afin d'optimiser l'utilisation de ces contrats types, nous vous recommandons de suivre ces quelques directives :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Vérification de la version :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Assurez-vous toujours de télécharger la version la plus récente du contrat sur cette page avant de finaliser vos dossiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnalisation :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Bien que ces contrats soient standardisés, chaque projet est unique. Prêtez une attention particulière au remplissage des annexes et des clauses spécifiques liées à votre marché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Besoin d'aide ?", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " En cas de doute sur l'application juridique d'un modèle précis, référez-vous à nos guides d'accompagnement ou aux circulaires ministérielles en vigueur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:34.601+01	2026-06-09 22:39:33.363+01	published	2026-06-09 22:39:34.612+01	2026-06-09 22:39:34.612+01	t	f
63	29	Conditions minima de participation à la soumission	conditions-minima-de-participation-a-la-soumission	7	100	settings	\N	\N	\N	\N	2026-06-09 22:39:34.888+01	2026-06-09 22:39:33.513+01	published	2026-06-09 22:39:34.898+01	2026-06-09 22:39:34.898+01	t	f
64	30	Révision des prix des matériaux pour les marchés publics	revision-des-prix-des-materiaux-pour-les-marches-publics	7	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des Prix dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Un guide pratique pour comprendre et appliquer correctement les mécanismes de révision des prix des matériaux de construction dans le cadre de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La formule de la \\"révision des prix des matériaux\\", développée par l'Administration des Bâtiments Publics du Luxembourg, permet aux maîtres d'ouvrage de prendre en considération l'évolution des prix des matières premières entre la date de la soumission et celle de la facturation. Pour les marchés publics de travaux, et à la demande de l'entreprise, le maître d'ouvrage procède à cette révision des prix lors du décompte final.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis 2016, le CRTI-B a été mandaté par le Ministère de tutelle pour la mise à jour de la banque de données, la publication des valeurs-seuils et l'assistance aux utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix (dite 'de base')", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Points d'attention :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les valeurs-seuils par corps de métier sont mises à jour ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "tous les trimestres", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lors de l'élaboration de votre offre, veillez à toujours considérer les valeurs-seuils applicables à la date exacte de la soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B met en plus à disposition un simulateur en-ligne du calcul de la révision des prix accessible à tous les acteurs sous", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "autolink", "fields": {"url": "http://revprix.crtib.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "http://revprix.crtib.lu", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "6a0ac9c9276c287ad62ce8a3", "slides": [{"id": "6a0ac9cb9a9a9576a3484c28", "image": 193, "title": "Révision des prix"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "center", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64a7cc0dbbd0b7752bfa1", "rows": [{"id": "69d647e1104c1147367b3e42", "values": {"69d6476b104c1147367b3e3e": "Aménagement extérieur - Ensemble des prestations de construction", "69d64793104c1147367b3e3f": "40", "69d64795104c1147367b3e40": "60", "69d64799104c1147367b3e41": "4.826"}}], "title": "Valeurs-seuils actuels par corps de métier", "columns": [{"id": "69d6476b104c1147367b3e3e", "type": "text", "label": "Nom", "precision": 2}, {"id": "69d64793104c1147367b3e3f", "type": "number", "label": "Main d'oeuvre", "precision": 2}, {"id": "69d64795104c1147367b3e40", "type": "number", "label": "Matériaux", "precision": 2}, {"id": "69d64799104c1147367b3e41", "type": "percentage", "label": "Seuil Spécifique", "precision": 2}], "blockName": "", "blockType": "dynamicGrid"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64b47c0dbbd0b7752bfa2", "items": [{"id": "69d64b4b104c1147367b3e43", "file": 73, "label": "Explication simplifiée de la méthodolohie (Présentation - Démo)"}], "title": "Documents complémentaires", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix extraordinaire (conformément au communiqué ministériel du 31 mars 2022)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Suite à la publication du ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce7", "type": "link", "fields": {"url": "https://marches.public.lu/dam-assets/fr/legislation/circulaires-communications/22-03-31-communication-v3.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "communiqué ministériel relatif à la hausse des matériaux le 31 mars 2022", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et en collaboration étroite entre les partenaires du CRTI-B, une note sur la procédure de révision de prix extraordinaire été développée pour répondre aux hausses des prix des matériaux de construction. Cette note est lié à la note descriptive du CRTI-B qui décrit la procédure de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce8", "type": "link", "fields": {"url": "http://www.crtib.lu/fr/marches-publics-contrats-types/demande-davances-en-liquidites", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "demande d'avances en liquidités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La note est une recommendation développée consensuellement entre", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdce9", "type": "link", "fields": {"url": "http://mmtp.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Ministère de la Mobilité et des Travaux publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcea", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "L’Ordre des Architectes et des Ingénieurs-Conseils", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdceb", "type": "link", "fields": {"url": "http://www.fda.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 4, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcec", "type": "link", "fields": {"url": "http://www.groupement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 5, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdced", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Chambre des Métiers", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcee", "items": [{"id": "69d501d19199ce2a83b07bf7", "file": 26, "label": "Téléchargement de la note, version 2 du 30/03/2023"}, {"id": "69d502039199ce2a83b07bf8", "file": 27, "label": "Téléchargement de l'outil de calcul EXCEL, version du 16/02/2026"}], "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcef", "items": [{"id": "69d502819199ce2a83b07bf9", "file": 28, "label": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022"}], "title": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d64cdcc0dbbd0b7752bfa4", "type": "link", "fields": {"url": "https://youtu.be/NtJjtHhtJQE", "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Lien vers l'enregistrement de la séance d'information du 27 juin 2022 (FR)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.933+01	2026-06-09 22:39:33.538+01	published	2026-06-09 22:39:34.945+01	2026-06-09 22:39:34.945+01	t	f
65	31	Normalisations au Luxembourg	normalisations-au-luxembourg	7	100	settings	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Normalisation au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au sein de l’Union européenne, les organismes nationaux de normalisation ont l’obligation de mettre en application toute norme européenne sur le plan national dans un délai généralement fixé à 6 mois et de retirer toute norme nationale qui serait éventuellement conflictuelle avec cette dernière. De même, un sujet qui a été traité au niveau européen, ne pourra faire l’objet d’une norme nationale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La transposition au niveau national d’une norme européenne consiste à procéder à l’enregistrement du texte intégral de la norme européenne au Journal officiel national. Cet acte confère ainsi aux normes européennes le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au Grand-Duché de Luxembourg, c’est l’ILNAS, respectivement l’Organisme luxembourgeois de normalisation qui se voit confier la mission de « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "publier au Mémorial les références des normes et autres documents normatifs nationaux transposant des normes et autres documents normatifs élaborés et adoptés par les organismes de normalisation européens et internationaux", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}, {"mode": "normal", "text": " ». La mise en application de nouvelles européennes au Grand-Duché de Luxembourg est promulguée par le Directeur de l’ILNAS sur base d’un relevé périodique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il est entendu que chaque organisme national de normalisation apposera son préfixe devant la référence de la norme européenne qu’il transposera au niveau national (ILNAS = Luxembourg ; NF = France ; DIN = Allemagne ; BS = Royaume-Uni, etc.). Il convient donc, au Grand-Duché de Luxembourg, de se référer aux normes « ILNAS EN » puisque celles-ci ont le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69fb027d5a0b8083b2495da0", "type": "upload", "value": 105, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "(Schéma sur la normalisation internationale, Source: ILNAS) ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A propos de l’ILNAS", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS, en sa qualité d’organisme luxembourgeois de normalisation (OLN), exerce les missions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Exécuter la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc363fd1a2563b27671946", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/strategie-normative-luxembourgeoise-2024-2030.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stratégie normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et les politiques en matière de normalisation (ICT, Construction, Aérospatial, Conformité, Développement durable et Education & Recherche) définies par le Ministre ayant l’Economie dans ses attributions ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Coordonner l'", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3674d1a2563b27671947", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/experts-normalisation.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "élaboration des norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s et autres documents normatifs nationaux avec les acteurs socio-économiques luxembourgeois ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Transposer et publier des normes et autres documents normatifs élaborés par les organismes européens de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Centraliser et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc369fd1a2563b27671948", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "mettre à disposition les norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s nationales, européennes et internationales ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Représenter le Grand-Duché de Luxembourg auprès des organismes européens (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36c7d1a2563b27671949", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CEN", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36e7d1a2563b2767194a", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CENELEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3701d1a2563b2767194b", "type": "link", "fields": {"url": "https://www.etsi.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ETSI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") et internationaux (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3727d1a2563b2767194c", "type": "link", "fields": {"url": "https://www.iso.org/fr/home.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ISO,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3761d1a2563b2767194d", "type": "link", "fields": {"url": "https://www.iec.ch/homepage", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "IEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3781d1a2563b2767194e", "type": "link", "fields": {"url": "https://www.itu.int/fr/Pages/default.aspx#/fr", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ITU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") de normalisation ainsi que dans l’association ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc379ed1a2563b2767194f", "type": "link", "fields": {"url": "https://associationrnf.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "RNF ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ";", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Créer et dissoudre des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37aed1a2563b27671950", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/normes-nationales.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "comités techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " de normalisation nationaux ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37dad1a2563b27671951", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/publications.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Promouvoir la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37f3d1a2563b27671952", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/formations.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " assurer la formation continue en matière de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Faciliter les interactions entre le monde de la", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3818d1a2563b27671953", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/education-recherche/normalisation-recherche.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " recherche", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et celui de la normalisation.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exécution de ses missions relatives à la normalisation l’ILNAS est supporté par l’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3852d1a2563b2767196c", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/acteurs/gie-anec.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Agence pour la normalisation et l’économie de la connaissance (ANEC GIE).\\n (ANEC GIE).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 8}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Achat de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS dispose d’un catalogue en ligne « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d98", "type": "link", "fields": {"url": "https://ilnas.services-publics.lu/ecnor/home.action", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "e-Shop ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "» de plus de 230 000 documents normatifs qui permet à toute personne intéressée de faire une ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "recherche détaillée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " et d’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "acheter les normes nationales ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "(ILNAS et DIN),", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " européennes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (CEN, CENELEC et ETSI) et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (ISO et IEC) au format PDF, en licence unique ou licence réseau (sauf DIN). Ce catalogue est disponible en trois langues : allemand, anglais et français.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De plus, l'ILNAS e-Shop offre la possibilité de rester informé en temps réel des changements liés à une ou plusieurs normes grâce à un système de notification personnalisable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation gratuite de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS offre aux acteurs socio-économiques la possibilité de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "consulter (gratuitement et en lecture seule)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " toutes les ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "normes nationales, européennes et internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " par l'intermédiaire de plusieurs ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38a7d1a2563b2767196d", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stations de lecture  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "(les normes DIN sont uniquement disponibles sur la station de lecture dans les locaux de l'ILNAS).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Service de veille normative ciblée", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Quelles sont les normes techniques publiées ou en développement qui concernent votre activité ? Quels sont les comités techniques de normalisation actifs dans votre secteur d’activité ? Disposez-vous des versions les plus récentes des normes utiles à votre activité ?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ILNAS, avec le support de l’ANEC GIE, propose à tout acteur économique national ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38e7d1a2563b2767196e", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/produits-et-services.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "un service de veille normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " pour répondre à ces questions.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Liens utiles en lien avec le domaine de la construction", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-      ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38fed1a2563b2767196f", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "  Analyse normative sectorielle", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-        ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3917d1a2563b27671970", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Fiches techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-       ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc392dd1a2563b27671971", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/introduction-a-la-normalisation-technique-du-secteur-de-la-construction-v1-0.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " Introduction à la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnes de contact", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Monsieur Jérôme HOEROLD, Chef de département (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9e", "type": "link", "fields": {"url": "mailto:jerome.hoerold@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "jerome.hoerold@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Madame Victoria MLETZAK, Responsable secteur « Construction & Normalisation ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "(", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9f", "type": "link", "fields": {"url": "mailto:victoria.mletzak@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "victoria.mletzak@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.985+01	2026-06-09 22:39:33.562+01	published	2026-06-09 22:39:34.995+01	2026-06-09 22:39:34.995+01	t	f
66	35	Rapport d'activité 	Rappport d activite 	32	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.031+01	2026-06-09 22:39:33.657+01	published	2026-06-09 22:39:35.044+01	2026-06-09 22:39:35.044+01	t	f
67	36	Notre histoire	notre-histoire	32	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre histoire", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE, Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment, trouve ses origines en 1990. À cette époque, le secteur luxembourgeois de la construction exprimait déjà un besoin clair : disposer d’un lieu neutre permettant aux acteurs publics et privés de travailler ensemble sur des bases communes.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pendant plus de vingt ans, le CRTI-B a fonctionné au sein du Centre de Recherche Public Henri Tudor. Cette première phase a permis de poser les fondations de son action : développer des documents de référence, structurer les marchés publics de construction et créer un langage commun entre maîtres d’ouvrage, maîtres d’œuvre et entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au fil des années, les groupes de travail du CRTI-B ont élaboré des clauses contractuelles et des clauses techniques couvrant progressivement de nombreux corps de métier du bâtiment, des installations techniques et du parachèvement. Ces documents sont devenus des références importantes pour la préparation et l’exécution des marchés publics, en apportant davantage de clarté, de cohérence et de sécurité aux projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une étape déterminante a été franchie avec le règlement grand-ducal du 24 mars 2014, qui a consacré l’importance des cahiers spéciaux des charges standardisés dans les marchés publics. Cette reconnaissance a renforcé le rôle du CRTI-B comme acteur central de la standardisation dans le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En 2015, le CRTI-B a pris une nouvelle dimension avec la création d’une structure juridique propre sous forme de groupement d’intérêt économique. Les statuts du GIE CRTI-B ont été signés le 1er avril 2015 par ses partenaires fondateurs : l’État du Grand-Duché de Luxembourg, la Chambre des Métiers, l’Ordre des Architectes et des Ingénieurs-Conseils, la Fédération des Artisans et le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics. Cette évolution a permis de doter le CRTI-B d’une gouvernance autonome, mieux adaptée à son rôle de plateforme sectorielle.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a22709c4a771e0531a99915", "type": "upload", "value": 218, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De gauche à droite :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jos DELL, Président de l’Ordre des Architectes et des Ingénieurs – Conseils,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Michel RECKINGER, Président de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean FEYEREISEN, Administrateur honoraire du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Romain SCHMIT, Directeur de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian THIRY, Président du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur François BAUSCH, Ministre du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Nico BIEVER, Vice-Président de la Chambre des Métiers,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Thierry HIRTZ, Président du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 9, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Ricky WOHL, Conseiller de direction 1ère classe, Ministère du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 10, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian REDING, Secrétaire général du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 11, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean LEYDER, Directeur de l’Administration des Bâtiments Publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une direction au service des étapes du CRTI-B GIE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La création du GIE a ouvert une nouvelle phase dans l’organisation du CRTI-B. Lors de la mise en place de cette structure autonome, le secrétariat général était assuré par Christian Reding, dans la continuité des travaux historiques du CRTI-B et de sa transition vers un modèle de gouvernance propre.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À partir de 2016, Moreno Viola a assuré la direction opérationnelle du CRTI-B GIE. Cette période a notamment accompagné la consolidation des activités de standardisation, le développement des travaux autour du BIM et l’élargissement progressif des missions vers la digitalisation et la construction durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis le 1er janvier 2025, la direction du CRTI-B GIE est assurée par Gilles Christnach. Cette nouvelle étape s’inscrit dans une phase de renforcement stratégique de l’institution, avec l’ambition de développer le CRTI-B comme centre de compétences élargi pour le secteur de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis sa transformation en GIE, le CRTI-B a poursuivi son développement en restant fidèle à son principe de base : faire avancer le secteur par la concertation. Ses travaux se sont élargis progressivement, notamment vers les bibliothèques de prestations standardisées, la coopération électronique, le BIM, la construction durable et les échanges de données entre les acteurs d’un projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’évolution du CRTI-B reflète celle du secteur. En 1990, l’enjeu principal était de mieux structurer les marchés et de créer des documents communs pour parler le même langage. Aujourd’hui, le besoin reste le même dans son principe, mais il s’exprime à une autre échelle : connecter les outils, harmoniser les données, simplifier les procédures, intégrer les exigences environnementales et accompagner la transformation numérique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette continuité fait la force du CRTI-B. Né pour standardiser et faciliter, il évolue aujourd’hui vers un centre de compétences capable d’accompagner les grands changements du secteur, tout en conservant ce qui a toujours fait sa valeur : la neutralité, le consensus et la coopération entre les acteurs de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.081+01	2026-06-09 22:39:33.684+01	published	2026-06-09 22:39:35.093+01	2026-06-09 22:39:35.093+01	t	f
68	37	Nos partenaires	nos-partenaires	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "69d500b562d9b95d18ed1568", "items": [{"id": "69d500b9ace1b61978438289", "title": "Ministère de la Mobilité et des Travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les attributions du ministère de la Mobilité et des Travaux publics (MMTP) sont définies par le  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a181196f0d011174c5a5b9d", "type": "link", "fields": {"url": "https://legilux.public.lu/eli/etat/leg/ri/2023/11/27/a779/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "règlement interne du gouvernement.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ministère est responsable de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des transports ainsi que, entre autres, de la planification de la mobilité, les services publics de transport, la circulation routière, les chemins de fer, les transports routiers ou encore la navigation intérieure et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des travaux publics dont les bâtiments de l’État et la voirie de l’État.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"tag": "h4", "type": "heading", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Deux administrations relèvent du Département des travaux publics :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des bâtiments publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'organisation de l'Administration des bâtiments publics (ABP) est déterminée par les compétences qui lui ont été attribuées par la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9e", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2017/03/08/a375/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 8 mars 2017", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " modifiant la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9f", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2004/06/15/n2/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 15 juin 2004", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle est principalement en charge de", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         l’étude et de l’exécution des bâtiments publics nouveaux financés par l’État, y compris leurs équipements et l’aménagement des alentours,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         de l’étude et de la réalisation des travaux de transformation, d’agrandissement et de réhabilitation des bâtiments publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         ainsi que de l’établissement et de la gestion des programmes de maintenance des bâtiments publics, de leurs équipements, alentours et plantations.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des ponts et chaussées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'Administration des ponts et chaussées est chargée, dans les limites fixées par les lois et règlements, de travaux de génie civil pour compte de l'Etat. L'Administration des ponts et chaussées a notamment les attributions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour compte de l'Etat", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, entretien et modernisation du réseau de la grande voirie;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "gestion du trafic sur le réseau de la grande voirie et surveillance de la sécurité dans les tunnels;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, aménagement et entretien de la voirie de l'Etat et de ses dépendances;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "établissement des permissions de voirie et exercice de la police de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "surveillance et entretien des aménagements hydroélectriques de la Haute Sûre et de la Basse Sûre ainsi que des barrages et écluses du chenal navigable;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "mise en place et entretien de l'éclairage public du réseau de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "entretien constructif et courant du chenal navigable et des berges de la Moselle canalisée et du port de Mertert;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction et entretien de certaines infrastructures de l'aéroport de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}], "direction": null}}}, {"id": "69d500fbace1b6197843828c", "title": "Chambre des Métiers", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La Chambre des Métiers est l’une des cinq chambres professionnelles patronales et salariales du Grand-Duché de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "La Chambre des Métiers est constituée en tant qu'établissement public par la loi du 4 avril 1924.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En tant qu'organisme à base élective et à affiliation obligatoire, la Chambre des Métiers est le représentant de l'ensemble des entreprises du secteur de l'Artisanat au Luxembourg. Elle sauvegarde et défend les intérêts des entreprises artisanales, participe à la procédure législative (avis sur les projets de loi et de règlement soumis par le Gouvernement), gère les contrats d'apprentissage et réalise l'organisation matérielle des examens de fin d'apprentissage, organise les cours et examens menant au Brevet de Maîtrise, mène une politique d'assistance et de conseil générale, sectorielle et individuelle au service des entreprises artisanales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par ailleurs la Chambre des Métiers réalise des études et analyses en rapport avec le secteur de l'Artisanat et des petites et moyennes entreprises (PME) en général.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5012f62d9b95d18ed1571", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.cdm.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50130ace1b6197843828d", "title": "Ordre des Architectes et Ingénieurs-conseils (OAI)", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ORDRE DES ARCHITECTES ET DES INGÉNIEURS-CONSEILS (OAI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Définie par la loi luxembourgeoise, la mission de l’Ordre des Architectes et des Ingénieurs-Conseils, consiste à garantir l’application des droits et des devoirs des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "6 professions OAI ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "d’intérêt public :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "architecte, architecte d’intérieur, ingénieur-conseil, urbaniste-aménageur, architecte-paysagiste, et géomètre.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chacun de ces professionnels, qu’il soit une personne physique ou morale, doit être inscrit au tableau de l’Ordre pour exercer sa profession à titre d’indépendant au Grand-Duché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "3 missions OAI : légale, professionnelle, culturelle.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses missions légales, d’organisation professionnelle ainsi que d’intérêt public, l’OAI valorise la véritable dimension du travail de ses membres, au niveau économique, social, artistique et culturel, pour un cadre de vie durable, intelligent et de qualité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Membres OAI = Label de qualité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’essence des professions OAI est constituée notamment de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• La qualification, la compétence, l’expertise, la créativité et l’ingéniosité,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance professionnelle et la déontologie,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• Les responsabilités professionnelles et décennales/biennales,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’obligation de contracter des assurances couvrant ces responsabilités,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance de toute activité commerciale afin d’éviter les conflits d’intérêts,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• la défense de l’intérêt public, du maître d’ouvrage et des utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a1ff9ba9d6e4de0283328b1", "type": "upload", "value": 88, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5014c62d9b95d18ed1573", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.oai.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d5014eace1b6197843828e", "title": "Fédération des Artisans", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Organisation représentative de l’artisanat luxembourgeois", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fondée en 1905, la Fédération des Artisans est l’organisation faîtière de l’artisanat au Luxembourg. Elle regroupe aujourd’hui une trentaine de fédérations professionnelles et représente près de 3.000 entreprises, constituant un acteur central du tissu économique national.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En étroite collaboration avec ses membres, la Fédération définit et porte la politique générale de l’artisanat. Elle s’engage à promouvoir activement les intérêts du secteur, tant auprès des entreprises que des décideurs politiques, des partenaires économiques et du grand public. Reconnue comme un interlocuteur de référence, elle contribue de manière structurée et proactive au débat économique et sociétal.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exercice de ses missions, la Fédération des Artisans :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "représente et défend les intérêts de l’artisanat aux niveaux national et international ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "œuvre à la mise en place de conditions-cadres favorables aux entreprises artisanales et aux indépendants ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "coordonne les actions et les positions des fédérations professionnelles affiliées ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "renforce la cohésion et la solidarité au sein du secteur ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "accompagne et conseille les entreprises dans leurs enjeux quotidiens et stratégiques. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Acteur engagé dans le secteur de la construction, la Fédération soutient activement les entreprises dans les défis liés à la transformation digitale, à l’innovation des processus et à l’amélioration de la qualité et de la productivité, notamment à travers des initiatives favorisant la collaboration entre les différents métiers et partenaires de la filière.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle agit en synergie avec les fédérations membres ainsi qu’avec les institutions partenaires, notamment la Chambre des Métiers, afin de contribuer durablement à la compétitivité, à l’innovation et à la durabilité de l’artisanat luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf1663910505f885ca61d", "type": "upload", "value": 87, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"type": "autolink", "fields": {"url": "https://www.fda.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "www.fda.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50175ace1b6197843828f", "title": "Le Groupement des entrepreneurs du bâtiment et des travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des entrepreneurs du bâtiment et des travaux publics (GEBTP)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics a été fondé en 1946 par un groupe d’entrepreneurs animés par la volonté de créer une association représentative du secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il défend et conserve les intérêts professionnels de ses membres et fait l’analyse économique et sociale des questions relatives à l’industrie de la construction. Il assiste, conseille et informe ses membres sur l’évolution du cadre législatif luxembourgeois et européen. Le Groupement est en contact permanent avec les autorités politiques et économiques ainsi qu’avec les syndicats.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il traite également toute une série de dossiers sectoriels tels que la problématique des décharges pour déchets inertes, la formation continue dans le secteur de la construction, l’amélioration de performances énergétiques et écologiques des bâtiments.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour le Groupement, il importe de soigner l’innovation nationale en mettant l’accent sur l’énorme potentiel du secteur de la construction dans un monde globalisé. Le Groupement des entrepreneurs plaide pour un marché du travail dynamique dans des conditions équitables et exige l’adoption d’un plan d’action contre le dumping social dans la construction et la fraude liée au détachement des travailleurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte du cadre réglementaire, le Groupement pousse tous les acteurs via sa collaboration active dans les groupes de travail du CRTI-B, à améliorer et accélérer les procédures d’autorisation et à simplifier la complexité des règles d’urbanisme afin d’augmenter la prévisibilité des décisions administratives. Il s’agit d’un effort essentiel et nécessaire pour pérenniser le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf17d3910505f885ca61e", "type": "upload", "value": 89, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faf00e3910505f885ca605", "type": "link", "fields": {"url": "http://www.groupement.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.groupement.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}], "blockName": "", "blockType": "accordion"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.13+01	2026-06-09 22:39:33.713+01	published	2026-06-09 22:39:35.141+01	2026-06-09 22:39:35.141+01	t	f
69	38	Organisation	organisation	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre gouvernance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE repose sur une représentation équilibrée des acteurs publics et privés du secteur luxembourgeois de la construction. Cette organisation garantit un fonctionnement neutre, transparent et concerté, dans lequel les décisions sont préparées et prises avec les partenaires concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE fonctionne autour de deux organes principaux : l’Assemblée générale et le Conseil de gérance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale réunit les membres du groupement. Elle constitue l’organe statutaire de référence et valide notamment les comptes annuels, les budgets, les conventions de financement ainsi que les grandes orientations du CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle rassemble les représentants des organismes partenaires :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : Mme Sylvie Siebenborn, représentante effective, et Mme Marie Iacovella-Muller, représentante suppléante ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, représentant effectif, et M. Marc Turpel, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Ponts et Chaussées : M. Gilles Didier, représentant effectif, et M. Frédéric de Oliveira, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Paul Nathan, représentant effectif, et M. Alex Kieffer, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Michelle Friederici, représentante effective, et M. Patrick Nosbusch, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach, représentant effectif, et M. Patrick Koehnen, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz, représentant effectif, et M. Pol Faber, représentant suppléant.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette composition permet de réunir autour d’une même table les principaux points de vue du secteur : pouvoirs publics, maîtres d’ouvrage, concepteurs, artisans et entreprises d’exécution.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance assure la gestion du CRTI-B GIE et suit la mise en œuvre des décisions prises par l’Assemblée générale. Il accompagne les priorités stratégiques, veille au bon déroulement des activités et constitue un lieu de discussion permanent entre les partenaires.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance est composé des représentants suivants :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : M. Claude Pauly et M. Ben Hubert ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, président ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Marc Gross, secrétaire général ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Corinne Stephany et M. Olivier Zirnheld ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par sa composition, le Conseil de gérance assure un lien direct entre les orientations institutionnelles du CRTI-B GIE et les réalités du secteur. Les sujets y sont abordés de manière collégiale, avec la volonté de rechercher des positions équilibrées et applicables.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une gouvernance fondée sur la neutralité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La légitimité du CRTI-B GIE tient à son positionnement unique : il n’est pas l’expression d’un seul acteur, d’une seule profession ou d’une seule administration. Il est un lieu de travail commun, dans lequel les intérêts, les contraintes et les responsabilités de chacun peuvent être mis en discussion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette neutralité est essentielle. Elle permet d’élaborer des décisions et des positions qui tiennent compte des besoins du terrain, des exigences publiques et des réalités économiques. Elle renforce également la confiance entre les partenaires et facilite l’acceptation des travaux portés par le CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une méthode de travail concertée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses organes statutaires, le CRTI-B GIE s’appuie sur des groupes de travail thématiques. Ces groupes réunissent, selon les sujets, des experts techniques, des représentants d’administrations, des concepteurs, des entreprises et des organisations professionnelles.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette méthode permet de traiter les dossiers au plus près de la pratique, avec les personnes directement concernées par leur application. Elle garantit que les décisions ne restent pas théoriques, mais qu’elles puissent être traduites en résultats concrets pour le secteur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE est ainsi à la fois institutionnelle, technique et collaborative. Elle constitue l’une des conditions essentielles pour faire avancer le secteur de manière structurée, cohérente et concertée.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:35.174+01	2026-06-09 22:39:33.74+01	published	2026-06-09 22:39:35.185+01	2026-06-09 22:39:35.185+01	t	f
70	39	home	home	39	100	\N	\N	\N	\N	\N	2026-06-09 22:39:35.219+01	2026-06-09 22:39:33.758+01	published	2026-06-09 22:39:35.231+01	2026-06-09 22:39:35.231+01	t	f
59	25	Clauses Techniques	clauses-techniques	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses techniques générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses techniques générales, ou CTG, constituent un référentiel technique commun pour les travaux de construction au Luxembourg. Elles définissent, par corps de métier, les exigences applicables à l’exécution des prestations, aux matériaux, aux méthodes de mise en œuvre, aux contrôles, aux principes de mesurage et de décompte, aux tolérances et aux conditions de réception. Elles contribuent ainsi à établir un cadre technique clair, cohérent et partagé entre les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les marchés publics, les CTG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, dont l’article 51, paragraphe (2), prévoit que des règlements grand-ducaux peuvent instituer des cahiers spéciaux des charges standardisés, publiés par voie électronique. En application de ce cadre, le règlement grand-ducal du 24 mars 2014 portant institution de cahiers spéciaux des charges standardisés en matière de marchés publics prévoit, à son article 1er, paragraphe (4), que le recours à ces cahiers spéciaux des charges standardisés est obligatoire. Les CTG constituent dès lors une référence obligatoire pour les marchés publics de travaux concernés, conformément aux règlements ministériels instituant les cahiers spéciaux des charges standardisés par corps de métier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation avec les acteurs du secteur, les CTG reflètent les pratiques reconnues, les évolutions normatives et les spécificités du contexte luxembourgeois. Depuis le 1er janvier 2026, et en collaboration avec le Ministère de la Mobilité et des Travaux publics, les CTG peuvent être révisées selon les besoins et jusqu’à deux fois par an. Cette nouvelle procédure repose notamment sur la publication d’un texte consolidé reprenant l’ensemble des CTG en vigueur, publié par règlement grand-ducal, afin d’améliorer la lisibilité du cadre applicable et de faciliter l’identification de la version en vigueur à la date de publication d’une soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette mise à jour régulière permet d’intégrer plus rapidement les développements techniques, les nouvelles exigences réglementaires, les enjeux de durabilité et les besoins exprimés par le terrain. À travers les CTG, le CRTI-B contribue à renforcer la qualité de la construction, la sécurité juridique et technique des projets, ainsi que la cohérence des pratiques dans le secteur luxembourgeois de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65782c0dbbd0b7752bfac", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69fc5e6f4efe7b6962af4881", "pdf": 151, "data": "2002-03-22T12:00:00.000Z", "numero": "CTG0", "titulo": "Clauses techniques générales applicables à tous les corps de métiers", "versao": "4"}, {"id": "69fc5d444efe7b6962af487d", "pdf": 150, "data": "2002-10-31T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage", "versao": "2"}, {"id": "69fc5d474efe7b6962af487e", "pdf": 149, "data": "2003-01-15T12:00:00.000Z", "numero": "CTG002", "titulo": "Travaux de terrassement", "versao": "3"}, {"id": "69fc5d4a4efe7b6962af487f", "pdf": 148, "data": "2007-12-07T12:00:00.000Z", "numero": "CTG009", "titulo": "Travaux de canalisation", "versao": "4"}, {"id": "69fc5d4e4efe7b6962af4880", "pdf": 147, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG010", "titulo": "Travaux d’aménagement extérieur : Pavages, dallages et bordures", "versao": "1"}, {"id": "69fc5c2c4efe7b6962af4874", "pdf": 146, "data": "2002-10-25T12:00:00.000Z", "numero": "CTG011", "titulo": "Travaux de façades", "versao": "2"}, {"id": "69fc5c374efe7b6962af4875", "pdf": 145, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie", "versao": "3"}, {"id": "69fc5c3c4efe7b6962af4876", "pdf": 144, "data": "2007-07-10T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton", "versao": "6"}, {"id": "69fc5c434efe7b6962af4877", "pdf": 143, "data": "2008-04-24T12:00:00.000Z", "numero": "CTG014", "titulo": "Travaux de pierre naturelle", "versao": "1"}, {"id": "69fc5ab74efe7b6962af486f", "pdf": 142, "data": "2019-05-25T12:00:00.000Z", "numero": "CTG016", "titulo": "Travaux de construction en bois", "versao": "3"}, {"id": "69fc5ae44efe7b6962af4873", "pdf": 141, "data": "2019-04-15T12:00:00.000Z", "numero": "CTG017", "titulo": "Travaux de constructions métalliques", "versao": "3"}, {"id": "69fc5ac74efe7b6962af4870", "pdf": 140, "data": "2002-10-29T12:00:00.000Z", "numero": "CTG018", "titulo": "Travaux d'étanchéité", "versao": "2"}, {"id": "69fc5acc4efe7b6962af4871", "pdf": 139, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG020", "titulo": "Travaux de couverture et d'étanchéité de toitures", "versao": "3"}, {"id": "69fc5ad04efe7b6962af4872", "pdf": 138, "data": "2019-07-25T12:00:00.000Z", "numero": "CTG022", "titulo": "Travaux de ferblanterie", "versao": "4"}, {"id": "69fc59574efe7b6962af486a", "pdf": 137, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG023", "titulo": "Enduits intérieurs, plâtrerie et stucs", "versao": "4"}, {"id": "69fc595b4efe7b6962af486b", "pdf": 136, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG024", "titulo": "Carreaux et dalles de revêtement", "versao": "3"}, {"id": "69fc595e4efe7b6962af486c", "pdf": 135, "data": "2003-03-25T12:00:00.000Z", "numero": "CTG025", "titulo": "Chapes et sols coulés", "versao": "2"}, {"id": "69fc59624efe7b6962af486d", "pdf": 134, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG026", "titulo": "Travaux de pose de parquets massifs", "versao": "1"}, {"id": "69fc59654efe7b6962af486e", "pdf": 133, "data": "2003-03-24T12:00:00.000Z", "numero": "CTG027", "titulo": "Travaux de menuiserie", "versao": "3"}, {"id": "69fc570f4efe7b6962af4861", "pdf": 130, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG028", "titulo": "Travaux de quincaillerie", "versao": "1.1"}, {"id": "69fc55f94efe7b6962af485f", "pdf": 129, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG031", "titulo": "Menuiserie métallique: fenêtres en aluminium et fenêtres en acier", "versao": "3"}, {"id": "69fc56954efe7b6962af4860", "pdf": 128, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG032", "titulo": "\\tMétallerie et serrurerie", "versao": "3"}, {"id": "69fc55f14efe7b6962af485e", "pdf": 127, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG034", "titulo": "Travaux de peinture", "versao": "4"}, {"id": "69fc55e04efe7b6962af485d", "pdf": 126, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG035", "titulo": "Travaux de tapisserie", "versao": "3"}, {"id": "69fc55624efe7b6962af485c", "pdf": 125, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG036", "titulo": "Travaux de revêtements de sol", "versao": "3"}, {"id": "69fc551e4efe7b6962af485b", "pdf": 124, "data": "2003-03-27T12:00:00.000Z", "numero": "CTG037", "titulo": "Travaux de vitrerie", "versao": "2"}, {"id": "69fc54ce4efe7b6962af485a", "pdf": 123, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG038", "titulo": "Travaux de façades ventilées", "versao": "1"}, {"id": "69fc54754efe7b6962af4859", "pdf": 122, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG039", "titulo": "Ouvrages secs", "versao": "3"}, {"id": "69fc52164efe7b6962af4857", "pdf": 121, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude", "versao": "6"}, {"id": "69fc51c54efe7b6962af4856", "pdf": 120, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires", "versao": "6"}, {"id": "69fc51924efe7b6962af4855", "pdf": 119, "data": "2022-05-23T12:00:00.000Z", "numero": "CTG047", "titulo": "Travaux d'isolation et de coupe-feu des installations techniques", "versao": "2"}, {"id": "69fc505f4efe7b6962af4854", "pdf": 118, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG049", "titulo": "Travaux d'installations sprinkler", "versao": "3"}, {"id": "69fc50204efe7b6962af4853", "pdf": 117, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG052", "titulo": "Travaux d'installations électriques à moyenne tension", "versao": "4"}, {"id": "69fc4fec4efe7b6962af4852", "pdf": 116, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG053", "titulo": "Travaux d'installations électriques à basse tension", "versao": "4"}, {"id": "69fc4f5f4efe7b6962af4851", "pdf": 115, "data": "2019-12-20T12:00:00.000Z", "numero": "CTG061", "titulo": "Travaux d'installations électriques, courant faible", "versao": "1"}, {"id": "69fc4efc4efe7b6962af4850", "pdf": 114, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG069", "titulo": "Ascenseurs, escaliers mécaniques, trottoirs roulants et installations de levage", "versao": "5"}, {"id": "69fc4dc54efe7b6962af484d", "pdf": 111, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG176", "titulo": "Cogénération/Procédure de sélection", "versao": "1"}, {"id": "69fc4e414efe7b6962af484e", "pdf": 112, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG175", "titulo": "Cogénération/Vademecum", "versao": "1"}, {"id": "69fc4eb34efe7b6962af484f", "pdf": 113, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation", "versao": "5"}, {"id": "69fc4d874efe7b6962af484c", "pdf": 110, "data": "2002-07-17T12:00:00.000Z", "numero": "CTG177", "titulo": "Cogénération/Dossier de soumission pour fourniture de chaleur", "versao": "2"}, {"id": "69fc4d2a4efe7b6962af484b", "pdf": 109, "data": "2010-03-26T12:00:00.000Z", "numero": "CTG178", "titulo": "Cogénération/Contrat-type de fourniture de chaleur", "versao": "3"}, {"id": "69fc4bb44efe7b6962af4848", "pdf": 107, "data": "2002-06-26T12:00:00.000Z", "numero": "CTG179", "titulo": "Dossier de soumission pour construction et exploitation", "versao": "2"}, {"id": "69d65784104c1147367b3e4c", "pdf": 106, "data": "2009-12-22T12:00:00.000Z", "numero": "CTG180", "titulo": "Cogénération - Etablissement de formules de révision du prix de vente de la chaleur", "versao": "2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.715+01	2026-06-09 22:39:33.42+01	published	2026-06-09 22:39:34.726+01	2026-06-09 22:39:34.726+01	f	f
71	25	Clauses Techniques	clauses-techniques	7	115	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses techniques générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses techniques générales, ou CTG, constituent un référentiel technique commun pour les travaux de construction au Luxembourg. Elles définissent, par corps de métier, les exigences applicables à l’exécution des prestations, aux matériaux, aux méthodes de mise en œuvre, aux contrôles, aux principes de mesurage et de décompte, aux tolérances et aux conditions de réception. Elles contribuent ainsi à établir un cadre technique clair, cohérent et partagé entre les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les marchés publics, les CTG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, dont l’article 51, paragraphe (2), prévoit que des règlements grand-ducaux peuvent instituer des cahiers spéciaux des charges standardisés, publiés par voie électronique. En application de ce cadre, le règlement grand-ducal du 24 mars 2014 portant institution de cahiers spéciaux des charges standardisés en matière de marchés publics prévoit, à son article 1er, paragraphe (4), que le recours à ces cahiers spéciaux des charges standardisés est obligatoire. Les CTG constituent dès lors une référence obligatoire pour les marchés publics de travaux concernés, conformément aux règlements ministériels instituant les cahiers spéciaux des charges standardisés par corps de métier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation avec les acteurs du secteur, les CTG reflètent les pratiques reconnues, les évolutions normatives et les spécificités du contexte luxembourgeois. Depuis le 1er janvier 2026, et en collaboration avec le Ministère de la Mobilité et des Travaux publics, les CTG peuvent être révisées selon les besoins et jusqu’à deux fois par an. Cette nouvelle procédure repose notamment sur la publication d’un texte consolidé reprenant l’ensemble des CTG en vigueur, publié par règlement grand-ducal, afin d’améliorer la lisibilité du cadre applicable et de faciliter l’identification de la version en vigueur à la date de publication d’une soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette mise à jour régulière permet d’intégrer plus rapidement les développements techniques, les nouvelles exigences réglementaires, les enjeux de durabilité et les besoins exprimés par le terrain. À travers les CTG, le CRTI-B contribue à renforcer la qualité de la construction, la sécurité juridique et technique des projets, ainsi que la cohérence des pratiques dans le secteur luxembourgeois de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65782c0dbbd0b7752bfac", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69fc5e6f4efe7b6962af4881", "pdf": 151, "data": "2002-03-22T12:00:00.000Z", "numero": "CTG0", "titulo": "Clauses techniques générales applicables à tous les corps de métiers", "versao": "4"}, {"id": "69fc5d444efe7b6962af487d", "pdf": 150, "data": "2002-10-31T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage", "versao": "2"}, {"id": "69fc5d474efe7b6962af487e", "pdf": 149, "data": "2003-01-15T12:00:00.000Z", "numero": "CTG002", "titulo": "Travaux de terrassement", "versao": "3"}, {"id": "69fc5d4a4efe7b6962af487f", "pdf": 148, "data": "2007-12-07T12:00:00.000Z", "numero": "CTG009", "titulo": "Travaux de canalisation", "versao": "4"}, {"id": "69fc5d4e4efe7b6962af4880", "pdf": 147, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG010", "titulo": "Travaux d’aménagement extérieur : Pavages, dallages et bordures", "versao": "1"}, {"id": "69fc5c2c4efe7b6962af4874", "pdf": 146, "data": "2002-10-25T12:00:00.000Z", "numero": "CTG011", "titulo": "Travaux de façades", "versao": "2"}, {"id": "69fc5c374efe7b6962af4875", "pdf": 145, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie", "versao": "3"}, {"id": "69fc5c3c4efe7b6962af4876", "pdf": 144, "data": "2007-07-10T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton", "versao": "6"}, {"id": "69fc5c434efe7b6962af4877", "pdf": 143, "data": "2008-04-24T12:00:00.000Z", "numero": "CTG014", "titulo": "Travaux de pierre naturelle", "versao": "1"}, {"id": "69fc5ab74efe7b6962af486f", "pdf": 142, "data": "2019-05-25T12:00:00.000Z", "numero": "CTG016", "titulo": "Travaux de construction en bois", "versao": "3"}, {"id": "69fc5ae44efe7b6962af4873", "pdf": 141, "data": "2019-04-15T12:00:00.000Z", "numero": "CTG017", "titulo": "Travaux de constructions métalliques", "versao": "3"}, {"id": "69fc5ac74efe7b6962af4870", "pdf": 140, "data": "2002-10-29T12:00:00.000Z", "numero": "CTG018", "titulo": "Travaux d'étanchéité", "versao": "2"}, {"id": "69fc5acc4efe7b6962af4871", "pdf": 139, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG020", "titulo": "Travaux de couverture et d'étanchéité de toitures", "versao": "3"}, {"id": "69fc5ad04efe7b6962af4872", "pdf": 138, "data": "2019-07-25T12:00:00.000Z", "numero": "CTG022", "titulo": "Travaux de ferblanterie", "versao": "4"}, {"id": "69fc59574efe7b6962af486a", "pdf": 137, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG023", "titulo": "Enduits intérieurs, plâtrerie et stucs", "versao": "4"}, {"id": "69fc595b4efe7b6962af486b", "pdf": 136, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG024", "titulo": "Carreaux et dalles de revêtement", "versao": "3"}, {"id": "69fc595e4efe7b6962af486c", "pdf": 135, "data": "2003-03-25T12:00:00.000Z", "numero": "CTG025", "titulo": "Chapes et sols coulés", "versao": "2"}, {"id": "69fc59624efe7b6962af486d", "pdf": 134, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG026", "titulo": "Travaux de pose de parquets massifs", "versao": "1"}, {"id": "69fc59654efe7b6962af486e", "pdf": 133, "data": "2003-03-24T12:00:00.000Z", "numero": "CTG027", "titulo": "Travaux de menuiserie", "versao": "3"}, {"id": "69fc570f4efe7b6962af4861", "pdf": 130, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG028", "titulo": "Travaux de quincaillerie", "versao": "1.1"}, {"id": "69fc55f94efe7b6962af485f", "pdf": 129, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG031", "titulo": "Menuiserie métallique: fenêtres en aluminium et fenêtres en acier", "versao": "3"}, {"id": "69fc56954efe7b6962af4860", "pdf": 128, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG032", "titulo": "\\tMétallerie et serrurerie", "versao": "3"}, {"id": "69fc55f14efe7b6962af485e", "pdf": 127, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG034", "titulo": "Travaux de peinture", "versao": "4"}, {"id": "69fc55e04efe7b6962af485d", "pdf": 126, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG035", "titulo": "Travaux de tapisserie", "versao": "3"}, {"id": "69fc55624efe7b6962af485c", "pdf": 125, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG036", "titulo": "Travaux de revêtements de sol", "versao": "3"}, {"id": "69fc551e4efe7b6962af485b", "pdf": 124, "data": "2003-03-27T12:00:00.000Z", "numero": "CTG037", "titulo": "Travaux de vitrerie", "versao": "2"}, {"id": "69fc54ce4efe7b6962af485a", "pdf": 123, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG038", "titulo": "Travaux de façades ventilées", "versao": "1"}, {"id": "69fc54754efe7b6962af4859", "pdf": 122, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG039", "titulo": "Ouvrages secs", "versao": "3"}, {"id": "69fc52164efe7b6962af4857", "pdf": 121, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude", "versao": "6"}, {"id": "69fc51c54efe7b6962af4856", "pdf": 120, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires", "versao": "6"}, {"id": "69fc51924efe7b6962af4855", "pdf": 119, "data": "2022-05-23T12:00:00.000Z", "numero": "CTG047", "titulo": "Travaux d'isolation et de coupe-feu des installations techniques", "versao": "2"}, {"id": "69fc505f4efe7b6962af4854", "pdf": 118, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG049", "titulo": "Travaux d'installations sprinkler", "versao": "3"}, {"id": "69fc50204efe7b6962af4853", "pdf": 117, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG052", "titulo": "Travaux d'installations électriques à moyenne tension", "versao": "4"}, {"id": "69fc4fec4efe7b6962af4852", "pdf": 116, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG053", "titulo": "Travaux d'installations électriques à basse tension", "versao": "4"}, {"id": "69fc4f5f4efe7b6962af4851", "pdf": 115, "data": "2019-12-20T12:00:00.000Z", "numero": "CTG061", "titulo": "Travaux d'installations électriques, courant faible", "versao": "1"}, {"id": "69fc4efc4efe7b6962af4850", "pdf": 114, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG069", "titulo": "Ascenseurs, escaliers mécaniques, trottoirs roulants et installations de levage", "versao": "5"}, {"id": "69fc4dc54efe7b6962af484d", "pdf": 111, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG176", "titulo": "Cogénération/Procédure de sélection", "versao": "1"}, {"id": "69fc4e414efe7b6962af484e", "pdf": 112, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG175", "titulo": "Cogénération/Vademecum", "versao": "1"}, {"id": "69fc4eb34efe7b6962af484f", "pdf": 113, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation", "versao": "5"}, {"id": "69fc4d874efe7b6962af484c", "pdf": 110, "data": "2002-07-17T12:00:00.000Z", "numero": "CTG177", "titulo": "Cogénération/Dossier de soumission pour fourniture de chaleur", "versao": "2"}, {"id": "69fc4d2a4efe7b6962af484b", "pdf": 109, "data": "2010-03-26T12:00:00.000Z", "numero": "CTG178", "titulo": "Cogénération/Contrat-type de fourniture de chaleur", "versao": "3"}, {"id": "69fc4bb44efe7b6962af4848", "pdf": 107, "data": "2002-06-26T12:00:00.000Z", "numero": "CTG179", "titulo": "Dossier de soumission pour construction et exploitation", "versao": "2"}, {"id": "69d65784104c1147367b3e4c", "pdf": 106, "data": "2009-12-22T12:00:00.000Z", "numero": "CTG180", "titulo": "Cogénération - Etablissement de formules de révision du prix de vente de la chaleur", "versao": "2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 23:00:47.583+01	2026-06-09 22:39:33.42+01	draft	2026-06-09 23:00:43.27+01	2026-06-09 23:00:47.583+01	t	t
72	40	\N	\N	\N	100	\N	\N	\N	\N	\N	2026-06-09 23:18:24.168+01	2026-06-09 23:18:24.166+01	draft	2026-06-09 23:18:24.206+01	2026-06-09 23:18:24.206+01	f	f
73	40	\N	\N	\N	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 23:18:41.361+01	2026-06-09 23:18:24.166+01	draft	2026-06-09 23:18:36.071+01	2026-06-09 23:18:41.361+01	t	t
75	5	Formation 	formation mpu	7	100	\N	\N	\N	\N	\N	2026-06-10 00:12:59.956+01	2026-06-09 22:39:32.916+01	published	2026-06-10 00:12:59.97+01	2026-06-10 00:12:59.97+01	t	f
76	8	Formation 	formation performance énergétique	14	100	\N	\N	\N	\N	\N	2026-06-10 00:13:00.024+01	2026-06-09 22:39:33.001+01	published	2026-06-10 00:13:00.04+01	2026-06-10 00:13:00.04+01	t	f
8	8	Formation 	formation performance énergétique	\N	100	\N	\N	\N	\N	\N	2026-06-09 22:39:33.002+01	2026-06-09 22:39:33.001+01	published	2026-06-09 22:39:33.012+01	2026-06-09 22:39:33.012+01	f	f
80	3	Formation 	formation-bim	34	100	calendar	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-11 23:57:21.411+01	2026-06-09 22:39:32.873+01	draft	2026-06-11 23:57:21.411+01	2026-06-11 23:57:21.411+01	t	t
74	3	Formation 	formation bim	34	100	calendar	\N	\N	\N	\N	2026-06-10 00:12:59.851+01	2026-06-09 22:39:32.873+01	published	2026-06-10 00:12:59.879+01	2026-06-10 00:12:59.879+01	f	f
81	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:25:39.202+01	2026-06-10 00:13:00.086+01	draft	2026-06-12 00:25:39.202+01	2026-06-12 00:25:39.202+01	f	t
83	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:26:04.873+01	2026-06-10 00:13:00.086+01	draft	2026-06-12 00:25:59.339+01	2026-06-12 00:26:04.873+01	f	t
86	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:26:48.573+01	2026-06-10 00:13:00.086+01	published	2026-06-12 00:26:48.609+01	2026-06-12 00:26:48.609+01	f	f
85	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:26:41.946+01	2026-06-10 00:13:00.086+01	draft	2026-06-12 00:26:41.946+01	2026-06-12 00:26:41.946+01	f	t
82	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:25:43.728+01	2026-06-10 00:13:00.086+01	published	2026-06-12 00:25:43.78+01	2026-06-12 00:25:43.78+01	f	f
84	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:26:05.543+01	2026-06-10 00:13:00.086+01	published	2026-06-12 00:26:05.574+01	2026-06-12 00:26:05.574+01	f	f
79	41	Toutes les formations	toutes-les-formations	\N	5	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "dddddddddddddddddddezjjjjjjjjjjjjjjjfzef", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-10 01:17:12.936+01	2026-06-10 00:13:00.086+01	published	2026-06-10 01:17:12.975+01	2026-06-10 01:17:12.975+01	f	f
88	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:46:56.177+01	2026-06-10 00:13:00.086+01	published	2026-06-12 00:46:56.214+01	2026-06-12 00:46:56.214+01	t	f
77	41	Toutes les formations	toutes-les-formations	\N	5	\N	\N	\N	\N	\N	2026-06-10 00:13:00.086+01	2026-06-10 00:13:00.086+01	published	2026-06-10 00:13:00.096+01	2026-06-10 00:13:00.096+01	f	f
87	41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:46:54.8+01	2026-06-10 00:13:00.086+01	draft	2026-06-12 00:46:54.8+01	2026-06-12 00:46:54.8+01	f	t
78	41	Toutes les formations	toutes-les-formations	\N	5	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "dddddddddddddddddddezjjjjjjjjjjjjjjjfzef", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-10 01:17:11.506+01	2026-06-10 00:13:00.086+01	draft	2026-06-10 01:17:11.506+01	2026-06-10 01:17:11.506+01	f	t
\.


--
-- Data for Name: _pages_v_blocks_accordion_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_accordion_block (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_accordion_block_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_accordion_block_items (_order, _parent_id, id, title, content, _uuid) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_activity_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_activity_reports (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
2	35	version.layout	1	Selection années 	6a28881545538453afe00fcc	\N
2	66	version.layout	2	Selection années 	6a28881545538453afe00fcc	\N
\.


--
-- Data for Name: _pages_v_blocks_activity_reports_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_activity_reports_reports (_order, _parent_id, id, year, pdf_id, _uuid) FROM stdin;
1	1	1	2020	69	6a28881545538453afe00fc9
2	1	2	2021	69	6a28881545538453afe00fca
3	1	3	2022	69	6a28881545538453afe00fcb
1	2	4	2020	69	6a28881545538453afe00fc9
2	2	5	2021	69	6a28881545538453afe00fca
3	2	6	2022	69	6a28881545538453afe00fcb
\.


--
-- Data for Name: _pages_v_blocks_calculator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_calculator (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
2	29	version.layout	1	Calculateur	6a28881545538453afe00fab	\N
2	63	version.layout	2	Calculateur	6a28881545538453afe00fab	\N
2	87	version.layout	3	Calculateur	6a2b48ecf8a4cdb597e3c02a	\N
2	88	version.layout	4	Calculateur	6a2b48ecf8a4cdb597e3c02a	\N
\.


--
-- Data for Name: _pages_v_blocks_clauses_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_clauses_grid (_order, _parent_id, _path, id, title, redirect_label, redirect_href, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_contact_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_contact_block (_order, _parent_id, _path, id, phone, email, address, hours, maps_embed_url, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_documents_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_documents_section (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
2	17	version.layout	1	PDF	6a28881545538453afe00f4f	\N
1	18	version.layout	2	Guide d'application 	6a28881545538453afe00f5b	\N
2	53	version.layout	3	PDF	6a28881545538453afe00f4f	\N
1	54	version.layout	4	Guide d'application 	6a28881545538453afe00f5b	\N
\.


--
-- Data for Name: _pages_v_blocks_documents_section_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_documents_section_items (_order, _parent_id, id, type, title, trigger_label, file_id, video_url, _uuid) FROM stdin;
1	1	1	pdf	Guide de formation 	PDF Guide de formation 	86	\N	6a28881545538453afe00f4e
1	2	2	pdf	Guide d'application FR	PDF Guide d'application FR	78	\N	6a28881545538453afe00f50
2	2	3	pdf	Guide d'application DE 	PDF Guide d'application DE 	79	\N	6a28881545538453afe00f51
3	2	4	pdf	Guide d'application EN	PDF Guide d'application EN	80	\N	6a28881545538453afe00f52
4	2	5	pdf	Annexes au guide 	PDF Guide BIM Bonnes pratiques FR 	91	\N	6a28881545538453afe00f53
5	2	6	pdf	PDF Guide BIM Bonnes pratiques EN	PDF Guide BIM Bonnes pratiques EN	92	\N	6a28881545538453afe00f54
6	2	7	pdf	PDF Guide BIM Bonnes pratiques ALL	PDF Guide BIM Bonnes pratiques ALL	93	\N	6a28881545538453afe00f55
7	2	8	pdf	Modèle BEP 	DOC Modèle BEP 	94	\N	6a28881545538453afe00f56
8	2	9	pdf	DOC Modèle Fiches de suivi	DOC Modèle Fiches de suivi	95	\N	6a28881545538453afe00f57
9	2	10	pdf	DOC Modèle PBB	DOC Modèle PBB	96	\N	6a28881545538453afe00f58
10	2	11	pdf	Matrice responsabilités 	PDF Matrice responsabilités 	97	\N	6a28881545538453afe00f59
11	2	12	pdf	DOC Matrice responsabilités 	DOC Matrice responsabilités 	98	\N	6a28881545538453afe00f5a
1	3	13	pdf	Guide de formation 	PDF Guide de formation 	86	\N	6a28881545538453afe00f4e
1	4	14	pdf	Guide d'application FR	PDF Guide d'application FR	78	\N	6a28881545538453afe00f50
2	4	15	pdf	Guide d'application DE 	PDF Guide d'application DE 	79	\N	6a28881545538453afe00f51
3	4	16	pdf	Guide d'application EN	PDF Guide d'application EN	80	\N	6a28881545538453afe00f52
4	4	17	pdf	Annexes au guide 	PDF Guide BIM Bonnes pratiques FR 	91	\N	6a28881545538453afe00f53
5	4	18	pdf	PDF Guide BIM Bonnes pratiques EN	PDF Guide BIM Bonnes pratiques EN	92	\N	6a28881545538453afe00f54
6	4	19	pdf	PDF Guide BIM Bonnes pratiques ALL	PDF Guide BIM Bonnes pratiques ALL	93	\N	6a28881545538453afe00f55
7	4	20	pdf	Modèle BEP 	DOC Modèle BEP 	94	\N	6a28881545538453afe00f56
8	4	21	pdf	DOC Modèle Fiches de suivi	DOC Modèle Fiches de suivi	95	\N	6a28881545538453afe00f57
9	4	22	pdf	DOC Modèle PBB	DOC Modèle PBB	96	\N	6a28881545538453afe00f58
10	4	23	pdf	Matrice responsabilités 	PDF Matrice responsabilités 	97	\N	6a28881545538453afe00f59
11	4	24	pdf	DOC Matrice responsabilités 	DOC Matrice responsabilités 	98	\N	6a28881545538453afe00f5a
\.


--
-- Data for Name: _pages_v_blocks_download_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_download_grid (_order, _parent_id, _path, id, page_size, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_download_grid_documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_download_grid_documents (_order, _parent_id, id, numero, titulo, data, versao, pdf_id, rtf_id, doc_id, xls_id, zip_id, _uuid) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_download_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_download_links (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_download_links_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_download_links_items (_order, _parent_id, id, label, file_id, _uuid) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_dynamic_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_dynamic_grid (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_dynamic_grid_columns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_dynamic_grid_columns (_order, _parent_id, id, _uuid, label, type, "precision", currency) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_dynamic_grid_rows; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_dynamic_grid_rows (_order, _parent_id, id, "values", _uuid) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_formations_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_formations_section (_order, _parent_id, _path, id, title, category, show_filters, "limit", _uuid, block_name) FROM stdin;
2	74	version.layout	1	Nos formations BIM & Digitalisation	digitalisation-bim	f	20	6a289dfb5b57487faba98367	\N
2	75	version.layout	2	Nos formations Marchés publics	marches-publics	f	20	6a289dfb5b57487faba98368	\N
2	76	version.layout	3	Nos formations Performance énergétique	performance-energetique	f	20	6a289dfc5b57487faba98369	\N
1	77	version.layout	4	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	78	version.layout	5	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	79	version.layout	6	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
2	80	version.layout	7	Nos formations BIM & Digitalisation	digitalisation-bim	f	20	6a289dfb5b57487faba98367	\N
1	81	version.layout	8	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	82	version.layout	9	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	83	version.layout	12	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
2	83	version.layout	13	Formations	construction-durable	t	12	6a2b4404cabe27c8301789fd	\N
1	84	version.layout	14	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
2	84	version.layout	15	Formations	construction-durable	t	12	6a2b4404cabe27c8301789fd	\N
1	85	version.layout	16	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	86	version.layout	17	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	87	version.layout	18	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
1	88	version.layout	19	Toutes les formations	\N	t	50	6a289dfc5b57487faba9836a	\N
\.


--
-- Data for Name: _pages_v_blocks_news_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_news_section (_order, _parent_id, _path, id, title, max_items, variant, cta_href, _uuid, block_name) FROM stdin;
1	2	version.layout	1	Actualités	3	default	/actualites	6a28881445538453afe00f2a	\N
1	4	version.layout	2	Actualités	3	default	/actualites	6a28881445538453afe00f2d	\N
1	9	version.layout	3	Actualités	3	default	/actualites	6a28881545538453afe00f3f	\N
3	39	version.layout	4	Actualités	3	default	/actualites	6a28881545538453afe00fdb	\N
1	41	version.layout	5	Actualités	3	default	/actualites	6a28881445538453afe00f2a	\N
1	43	version.layout	6	Actualités	3	default	/actualites	6a28881445538453afe00f2d	\N
1	47	version.layout	7	Actualités	3	default	/actualites	6a28881545538453afe00f3f	\N
3	70	version.layout	8	Actualités	3	default	/actualites	6a28881545538453afe00fdb	\N
\.


--
-- Data for Name: _pages_v_blocks_newsletter_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_newsletter_block (_order, _parent_id, _path, id, heading, description, button_label, _uuid, block_name) FROM stdin;
3	7	version.layout	1	Incrivez-vous à la newsletter!	\N	S'abonner	6a28881445538453afe00f3c	\N
3	14	version.layout	2	Inscrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00f48	\N
3	19	version.layout	3	Incrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00f65	\N
2	30	version.layout	4	Inscrivez-vous à la newsletter! 	\N	S'abonner	6a28881545538453afe00fae	\N
3	34	version.layout	5	Inscrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00fc4	\N
5	39	version.layout	6	Inscrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00fe0	\N
3	55	version.layout	7	Incrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00f65	\N
2	64	version.layout	8	Inscrivez-vous à la newsletter! 	\N	S'abonner	6a28881545538453afe00fae	\N
5	70	version.layout	9	Inscrivez-vous à la newsletter!	\N	S'abonner	6a28881545538453afe00fe0	\N
\.


--
-- Data for Name: _pages_v_blocks_organogram; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_organogram (_order, _parent_id, _path, id, root_name, root_role, root_photo_id, _uuid, block_name) FROM stdin;
2	19	version.layout	1	Gilles Christnach 	Directeur - Département marché public	100	6a28881545538453afe00f64	\N
2	55	version.layout	2	Gilles Christnach 	Directeur - Département marché public	100	6a28881545538453afe00f64	\N
\.


--
-- Data for Name: _pages_v_blocks_organogram_root_children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_organogram_root_children (_order, _parent_id, id, name, role, photo_id, _uuid, department, phone, email) FROM stdin;
1	1	1	Jael Redinha	assistante de direction 	101	6a28881545538453afe00f5e	\N	\N	\N
2	1	2	Catherine Brand	Chargée de mission - Département marché public	102	6a28881545538453afe00f5f	\N	\N	\N
3	1	3	Charlie Boon Bellinaso	Chargé de mission - Département Digitalisation	103	6a28881545538453afe00f60	\N	\N	\N
4	1	4	Amin Hamidizadeh	Chargé de mission - Département Digitalisation 	104	6a28881545538453afe00f61	\N	\N	\N
5	1	5	Valérie Marx	Chargée de mission - Département Construction durable 	\N	6a28881545538453afe00f62	\N	\N	\N
6	1	6	George Jacquot 	Chargé de mission - Département Perfomance énergétique 	\N	6a28881545538453afe00f63	\N	\N	\N
1	2	7	Jael Redinha	assistante de direction 	101	6a28881545538453afe00f5e	\N	\N	\N
2	2	8	Catherine Brand	Chargée de mission - Département marché public	102	6a28881545538453afe00f5f	\N	\N	\N
3	2	9	Charlie Boon Bellinaso	Chargé de mission - Département Digitalisation	103	6a28881545538453afe00f60	\N	\N	\N
4	2	10	Amin Hamidizadeh	Chargé de mission - Département Digitalisation 	104	6a28881545538453afe00f61	\N	\N	\N
5	2	11	Valérie Marx	Chargée de mission - Département Construction durable 	\N	6a28881545538453afe00f62	\N	\N	\N
6	2	12	George Jacquot 	Chargé de mission - Département Perfomance énergétique 	\N	6a28881545538453afe00f63	\N	\N	\N
\.


--
-- Data for Name: _pages_v_blocks_organogram_root_children_children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_organogram_root_children_children (_order, _parent_id, id, name, role, photo_id, _uuid, department, phone, email) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_partners (_order, _parent_id, _path, id, title, associations_title, _uuid, block_name) FROM stdin;
3	32	version.layout	1	Partenaires	En association	6a28881545538453afe00fbb	\N
4	39	version.layout	2	Partenaires	En association	6a28881545538453afe00fdf	\N
4	70	version.layout	3	Partenaires	En association	6a28881545538453afe00fdf	\N
\.


--
-- Data for Name: _pages_v_blocks_partners_associations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_partners_associations (_order, _parent_id, id, name, logo_id, href, _uuid) FROM stdin;
1	1	1	Association 1	72	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fba
\.


--
-- Data for Name: _pages_v_blocks_partners_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_partners_partners (_order, _parent_id, id, name, logo_id, href, _uuid) FROM stdin;
1	1	1	OAI	88	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fb8
2	1	2	Chambre des métiers 	99	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fb9
1	2	3	OAI	88	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fdc
2	2	4	Chambre des métiers 	99	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fdd
3	2	5	Fédération des artisants 	87	\N	6a28881545538453afe00fde
1	3	6	OAI	88	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fdc
2	3	7	Chambre des métiers 	99	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	6a28881545538453afe00fdd
3	3	8	Fédération des artisants 	87	\N	6a28881545538453afe00fde
\.


--
-- Data for Name: _pages_v_blocks_photo_hero_carousel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_photo_hero_carousel (_order, _parent_id, _path, id, auto_play_ms, _uuid, block_name) FROM stdin;
1	1	version.layout	1	5000	6a28881445538453afe00f29	\N
1	3	version.layout	2	5000	6a28881445538453afe00f2c	\N
1	5	version.layout	3	5000	6a28881445538453afe00f2f	\N
2	7	version.layout	4	5000	6a28881445538453afe00f3b	\N
1	8	version.layout	5	5000	6a28881545538453afe00f3e	\N
2	14	version.layout	6	5000	6a28881545538453afe00f47	\N
1	15	version.layout	7	5000	6a28881545538453afe00f4a	\N
1	17	version.layout	8	5000	6a28881545538453afe00f4d	\N
1	19	version.layout	9	5000	6a28881545538453afe00f5d	\N
1	23	version.layout	10	5000	6a28881545538453afe00fa2	\N
1	24	version.layout	11	5000	6a28881545538453afe00fa4	\N
1	25	version.layout	12	5000	6a28881545538453afe00fa6	\N
1	28	version.layout	13	5000	6a28881545538453afe00fa8	\N
1	29	version.layout	14	5000	6a28881545538453afe00faa	\N
1	30	version.layout	15	5000	6a28881545538453afe00fad	\N
1	31	version.layout	16	5000	6a28881545538453afe00fb0	\N
2	34	version.layout	17	5000	6a28881545538453afe00fc3	\N
3	35	version.layout	18	5000	6a28881545538453afe00fce	\N
2	36	version.layout	19	5000	6a28881545538453afe00fd4	\N
1	40	version.layout	20	5000	6a28881445538453afe00f29	\N
1	42	version.layout	21	5000	6a28881445538453afe00f2c	\N
1	44	version.layout	22	5000	6a28881445538453afe00f2f	\N
1	46	version.layout	23	5000	6a28881545538453afe00f3e	\N
1	51	version.layout	24	5000	6a28881545538453afe00f4a	\N
1	53	version.layout	25	5000	6a28881545538453afe00f4d	\N
1	55	version.layout	26	5000	6a28881545538453afe00f5d	\N
1	57	version.layout	27	5000	6a28881545538453afe00fa2	\N
1	58	version.layout	28	5000	6a28881545538453afe00fa4	\N
1	59	version.layout	29	5000	6a28881545538453afe00fa6	\N
1	62	version.layout	30	5000	6a28881545538453afe00fa8	\N
1	63	version.layout	31	5000	6a28881545538453afe00faa	\N
1	64	version.layout	32	5000	6a28881545538453afe00fad	\N
1	65	version.layout	33	5000	6a28881545538453afe00fb0	\N
3	66	version.layout	34	5000	6a28881545538453afe00fce	\N
2	67	version.layout	35	5000	6a28881545538453afe00fd4	\N
1	71	version.layout	37	5000	6a28881545538453afe00fa6	\N
1	74	version.layout	38	5000	6a28881445538453afe00f2c	\N
1	75	version.layout	39	5000	6a28881445538453afe00f2f	\N
1	76	version.layout	40	5000	6a28881545538453afe00f3e	\N
1	80	version.layout	41	5000	6a28881445538453afe00f2c	\N
\.


--
-- Data for Name: _pages_v_blocks_photo_hero_carousel_slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_photo_hero_carousel_slides (_order, _parent_id, id, image_id, alt, eyebrow, title, _uuid) FROM stdin;
1	1	1	202	\N	\N	Indémnités	6a28881445538453afe00f28
1	2	2	205	\N	\N	Formation	6a28881445538453afe00f2b
1	3	3	206	\N	\N	Formation	6a28881445538453afe00f2e
1	4	4	191	\N	\N	MARCHES PUBLICS	6a28881445538453afe00f3a
1	5	5	207	\N	\N	Formation	6a28881545538453afe00f3d
1	6	6	195	\N	\N	Perfomance enérgetique 	6a28881545538453afe00f46
1	7	7	203	\N	\N	Soumission public 	6a28881545538453afe00f49
1	8	8	208	\N	\N	Guide de formation	6a28881545538453afe00f4c
1	9	9	215	\N	\N	Equipe	6a28881545538453afe00f5c
1	10	10	211	\N	\N	Modèles de contrats	6a28881545538453afe00fa1
1	11	11	204	\N	\N	Prestations Standardisées	6a28881545538453afe00fa3
1	12	12	209	\N	\N	Clauses techniques	6a28881545538453afe00fa5
1	13	13	210	\N	\N	Clauses contractuelles 	6a28881545538453afe00fa7
1	14	14	212	\N	\N	Conditions minima de participation 	6a28881545538453afe00fa9
1	15	15	213	\N	\N	Révision des prix	6a28881545538453afe00fac
1	16	16	197	\N	\N	Normalisation	6a28881545538453afe00faf
1	17	17	196	\N	\N	DIGITALISATION	6a28881545538453afe00fc2
1	18	18	216	\N	\N	Rapport d'activité	6a28881545538453afe00fcd
1	19	19	214	\N	\N	Notre histoire 	6a28881545538453afe00fd3
1	20	20	202	\N	\N	Indémnités	6a28881445538453afe00f28
1	21	21	205	\N	\N	Formation	6a28881445538453afe00f2b
1	22	22	206	\N	\N	Formation	6a28881445538453afe00f2e
1	23	23	207	\N	\N	Formation	6a28881545538453afe00f3d
1	24	24	203	\N	\N	Soumission public 	6a28881545538453afe00f49
1	25	25	208	\N	\N	Guide de formation	6a28881545538453afe00f4c
1	26	26	215	\N	\N	Equipe	6a28881545538453afe00f5c
1	27	27	211	\N	\N	Modèles de contrats	6a28881545538453afe00fa1
1	28	28	204	\N	\N	Prestations Standardisées	6a28881545538453afe00fa3
1	29	29	209	\N	\N	Clauses techniques	6a28881545538453afe00fa5
1	30	30	210	\N	\N	Clauses contractuelles 	6a28881545538453afe00fa7
1	31	31	212	\N	\N	Conditions minima de participation 	6a28881545538453afe00fa9
1	32	32	213	\N	\N	Révision des prix	6a28881545538453afe00fac
1	33	33	197	\N	\N	Normalisation	6a28881545538453afe00faf
1	34	34	216	\N	\N	Rapport d'activité	6a28881545538453afe00fcd
1	35	35	214	\N	\N	Notre histoire 	6a28881545538453afe00fd3
1	37	37	209	\N	\N	Clauses techniques	6a28881545538453afe00fa5
1	38	38	205	\N	\N	Formation	6a28881445538453afe00f2b
1	39	39	206	\N	\N	Formation	6a28881445538453afe00f2e
1	40	40	207	\N	\N	Formation	6a28881545538453afe00f3d
1	41	41	205	\N	\N	Formation	6a28881445538453afe00f2b
\.


--
-- Data for Name: _pages_v_blocks_quick_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_quick_links (_order, _parent_id, _path, id, _uuid, block_name) FROM stdin;
1	7	version.layout	1	6a28881445538453afe00f39	\N
1	14	version.layout	2	6a28881545538453afe00f45	\N
1	22	version.layout	3	6a28881545538453afe00fa0	\N
2	32	version.layout	4	6a28881545538453afe00fb7	\N
1	34	version.layout	5	6a28881545538453afe00fc1	\N
1	35	version.layout	6	6a28881545538453afe00fc8	\N
2	39	version.layout	7	6a28881545538453afe00fda	\N
1	56	version.layout	8	6a28881545538453afe00fa0	\N
1	66	version.layout	9	6a28881545538453afe00fc8	\N
2	70	version.layout	10	6a28881545538453afe00fda	\N
\.


--
-- Data for Name: _pages_v_blocks_quick_links_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_quick_links_items (_order, _parent_id, id, title, href, icon, _uuid) FROM stdin;
1	1	1	Soumission publique 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881445538453afe00f30
2	1	2	CCG	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881445538453afe00f31
3	1	3	CTG	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881445538453afe00f32
4	1	4	Bibliotèque prestations standardisées	www.crtib.lu	s	6a28881445538453afe00f33
5	1	5	Révision des prix 	www.crtib.lu	s	6a28881445538453afe00f34
6	1	6	Condition minima	www.crtib.lu	M	6a28881445538453afe00f35
7	1	7	Indemnités 	www.crtib.lu	M	6a28881445538453afe00f36
8	1	8	Actualité	www.crtib.lu	M 	6a28881445538453afe00f37
9	1	9	Formation	www.crtib.lu	M	6a28881445538453afe00f38
1	2	10	Perfomance enérgetique LU	www.crtib.lu	PE	6a28881545538453afe00f40
2	2	11	Perfomance enérgetique EU	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00f41
3	2	12	Perfomance enérgetique du bâtiment 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00f42
4	2	13	Actualités 	www.crtib.lu	PE	6a28881545538453afe00f43
5	2	14	Formation	www.crtib.lu	PE	6a28881545538453afe00f44
1	3	15	Titre 1	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+	6a28881545538453afe00f9d
2	3	16	Titre 2	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	-	6a28881545538453afe00f9e
3	3	17	Titre 3	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+	6a28881545538453afe00f9f
1	4	18	Notre histoire 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fb2
2	4	19	Organisation 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fb3
3	4	20	Equipe 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fb4
4	4	21	Nos partenaires 	www.crtib.lu	D	6a28881545538453afe00fb5
5	4	22	Rapports d'activité 	www.crtib.lu	A	6a28881545538453afe00fb6
1	5	23	Guide d'application 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fbc
2	5	24	Guide de formation 	www.digitalbuilding.lu 	@	6a28881545538453afe00fbd
3	5	25	BIM IDS	www.digitalbuilding.lu 	s	6a28881545538453afe00fbe
4	5	26	Actualités	www.digitalbuilding.lu	D	6a28881545538453afe00fbf
5	5	27	Formation	www.digitalbuilding.lu	@	6a28881545538453afe00fc0
1	6	28	Page 1	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc5
2	6	29	Page 2	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc6
3	6	30	Page 3	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc7
1	7	31	Marche Public	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd6
2	7	32	Digitalisation	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd7
3	7	33	Construction Durable	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd8
4	7	34	Performance enérgetique 	www.crtib.lu	#	6a28881545538453afe00fd9
1	8	35	Titre 1	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+	6a28881545538453afe00f9d
2	8	36	Titre 2	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	-	6a28881545538453afe00f9e
3	8	37	Titre 3	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+	6a28881545538453afe00f9f
1	9	38	Page 1	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc5
2	9	39	Page 2	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc6
3	9	40	Page 3	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fc7
1	10	41	Marche Public	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd6
2	10	42	Digitalisation	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd7
3	10	43	Construction Durable	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△	6a28881545538453afe00fd8
4	10	44	Performance enérgetique 	www.crtib.lu	#	6a28881545538453afe00fd9
\.


--
-- Data for Name: _pages_v_blocks_text_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_text_block (_order, _parent_id, _path, id, content, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_timeline; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_timeline (_order, _parent_id, _path, id, highlight_last, _uuid, block_name) FROM stdin;
1	36	version.layout	1	t	6a28881545538453afe00fd2	\N
1	67	version.layout	2	t	6a28881545538453afe00fd2	\N
\.


--
-- Data for Name: _pages_v_blocks_timeline_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_timeline_items (_order, _parent_id, id, year, title, _uuid) FROM stdin;
1	1	1	1999	Année de cération 	6a28881545538453afe00fcf
2	1	2	2015	Création de la GIE 	6a28881545538453afe00fd0
3	1	3	2026	Création du département performance enérgetique 	6a28881545538453afe00fd1
1	2	4	1999	Année de cération 	6a28881545538453afe00fcf
2	2	5	2015	Création de la GIE 	6a28881545538453afe00fd0
3	2	6	2026	Création du département performance enérgetique 	6a28881545538453afe00fd1
\.


--
-- Data for Name: _pages_v_blocks_video_cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_video_cards (_order, _parent_id, _path, id, title, _uuid, block_name) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_video_cards_videos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_video_cards_videos (_order, _parent_id, id, title, type, src, _uuid) FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_video_embed; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_blocks_video_embed (_order, _parent_id, _path, id, title, type, src, _uuid, block_name) FROM stdin;
1	16	version.layout	1	BIM IDS 	youtube	https://youtu.be/XnQYmbZCxVw?si=IPlG6Y-OKiJR5ZxG	6a28881545538453afe00f4b	\N
1	32	version.layout	2	Video de apresentação	youtube	https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=0gcJCdkKAYcqIYzv	6a28881545538453afe00fb1	\N
1	39	version.layout	3	video de presentation	youtube	https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=0gcJCdkKAYcqIYzv	6a28881545538453afe00fd5	\N
1	52	version.layout	4	BIM IDS 	youtube	https://youtu.be/XnQYmbZCxVw?si=IPlG6Y-OKiJR5ZxG	6a28881545538453afe00f4b	\N
1	70	version.layout	5	video de presentation	youtube	https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=0gcJCdkKAYcqIYzv	6a28881545538453afe00fd5	\N
\.


--
-- Data for Name: _pages_v_rels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._pages_v_rels (id, "order", parent_id, path, clauses_id) FROM stdin;
\.


--
-- Data for Name: activity_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.activity_reports (id, year, pdf_id, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: clauses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clauses (id, number, title, date, version, pdf_id, rtf_id, doc_id, updated_at, created_at) FROM stdin;
1	CTG-888	Titre 1	2026-02-13 13:00:00+01	V5	75	\N	\N	2026-06-09 22:39:32.132+01	2026-06-09 22:39:32.132+01
2	CTG 020.	Titre Document	2003-01-01 13:00:00+01	4	74	70	\N	2026-06-09 22:39:32.143+01	2026-06-09 22:39:32.143+01
3	CTG 028	Travaux de quincaillerie	2025-04-01 13:00:00+01	1.1	68	\N	\N	2026-06-09 22:39:32.152+01	2026-06-09 22:39:32.152+01
4	CTG 027.	Travaux de menuiserie	2003-03-24 13:00:00+01	3	67	66	\N	2026-06-09 22:39:32.159+01	2026-06-09 22:39:32.159+01
5	CTG 026	Travaux de pose de parquets massifs	2025-04-01 13:00:00+01	1	65	\N	\N	2026-06-09 22:39:32.165+01	2026-06-09 22:39:32.165+01
6	CTG 025.	Chapes et sols coulés	2003-03-25 13:00:00+01	2	64	63	\N	2026-06-09 22:39:32.169+01	2026-06-09 22:39:32.169+01
7	CTG 024	Carreaux et dalles de revêtement	2018-08-14 13:00:00+01	3	61	62	\N	2026-06-09 22:39:32.172+01	2026-06-09 22:39:32.172+01
8	CTG 023.	Enduits intérieurs, plâtrerie et stucs	2015-11-04 13:00:00+01	4	60	59	\N	2026-06-09 22:39:32.174+01	2026-06-09 22:39:32.174+01
9	CTG 022	Travaux de ferblanterie	2019-07-25 13:00:00+01	4	58	\N	\N	2026-06-09 22:39:32.178+01	2026-06-09 22:39:32.178+01
10	CTG 020	Travaux de couverture et d'étanchéité de toitures	2018-08-14 13:00:00+01	3	57	56	\N	2026-06-09 22:39:32.181+01	2026-06-09 22:39:32.181+01
11	CTG 018.	Travaux d'étanchéité	2002-10-29 13:00:00+01	2	55	54	\N	2026-06-09 22:39:32.184+01	2026-06-09 22:39:32.184+01
12	CTG 017	Travaux de constructions métalliques	2019-04-15 13:00:00+01	3	53	52	\N	2026-06-09 22:39:32.187+01	2026-06-09 22:39:32.187+01
13	CTG 016	Travaux de construction en bois	2019-12-20 13:00:00+01	3	51	\N	\N	2026-06-09 22:39:32.191+01	2026-06-09 22:39:32.191+01
14	CTG 014.	Travaux de pierre naturelle	2008-04-24 14:00:00+02	1	49	50	\N	2026-06-09 22:39:32.194+01	2026-06-09 22:39:32.194+01
15	CTG 013.	Travaux de béton	2007-07-10 14:00:00+02	6	47	48	\N	2026-06-09 22:39:32.198+01	2026-06-09 22:39:32.198+01
16	CTG 012.	Travaux de maçonnerie	2003-02-14 13:00:00+01	3	45	46	\N	2026-06-09 22:39:32.201+01	2026-06-09 22:39:32.201+01
17	CTG 011.	Travaux de façades	2002-10-25 13:00:00+01	2	43	44	\N	2026-06-09 22:39:32.204+01	2026-06-09 22:39:32.204+01
18	CTG 010	Travaux d’aménagement extérieur : Pavages, dallages et bordures	2025-04-01 13:00:00+01	1	42	\N	\N	2026-06-09 22:39:32.208+01	2026-06-09 22:39:32.208+01
19	CTG 009.	Travaux de canalisation	2007-12-07 13:00:00+01	4	40	41	\N	2026-06-09 22:39:32.213+01	2026-06-09 22:39:32.213+01
20	CTG 002.	Travaux de terrassement	2003-01-15 13:00:00+01	3	38	39	\N	2026-06-09 22:39:32.218+01	2026-06-09 22:39:32.218+01
21	CTG 001.	Travaux d'échafaudage	2002-10-31 13:00:00+01	2	36	37	\N	2026-06-09 22:39:32.221+01	2026-06-09 22:39:32.221+01
22	CTG 0.	Clauses techniques générales applicables à tous les corps de métiers	2002-03-22 13:00:00+01	4	34	35	\N	2026-06-09 22:39:32.224+01	2026-06-09 22:39:32.224+01
23	CCG 100.	Clauses contractuelles	2018-10-17 13:00:00+01	10.2	32	33	\N	2026-06-09 22:39:32.228+01	2026-06-09 22:39:32.228+01
\.


--
-- Data for Name: formations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.formations (id, title, slug, image_id, category, start_date, end_date, duration, location, price, max_participants, description, registration_url, registration_email, updated_at, created_at, _status) FROM stdin;
16	BIM Bases	bim-bases	\N	digitalisation-bim	\N	\N	1 jour, 7 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Introduction aux concepts fondamentaux du Building Information Modeling et à son potentiel collaboratif. Couvre les principes BIM, la stratégie de mise en œuvre au Luxembourg, les échanges de données, l'interopérabilité, les cas d'usage et les rôles dans l'industrie.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Aucun", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Public cible :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Architectes, ingénieurs, géomètres, gestionnaires de patrimoine, entreprises de construction, administrateurs gouvernementaux", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation – House of Training & CRTI-B", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	https://www.houseoftraining.lu/training/bim-bases-10591	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
17	BIM Référent	bim-referent	\N	digitalisation-bim	\N	\N	2 jours, 14 heures + travail personnel sur projet	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Approfondissement des fondements théoriques et des principes d'utilisation des maquettes numériques dans les processus BIM. Développe les compétences pour participer à des projets BIM via consultation de maquettes IFC et utilisation de plateformes collaboratives, sans nécessiter de compétences en modélisation 3D.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " BIM Bases ou équivalent académique reconnu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation + Certificat de réussite sur examen (70/100) – House of Training & CRTI-B", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	https://www.houseoftraining.lu/en_GB/training/bim-referent-10592	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
18	BIM Modeleur	bim-modeleur	\N	digitalisation-bim	\N	\N	45 heures sur environ 6 semaines	IFSB Bettembourg + Chambre de Commerce (mixte présentiel/e-learning)	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Couvre la méthodologie de modélisation pour garantir la qualité des maquettes livrées (graphique, informationnel, documentation) en respectant les exigences contractuelles. Disponible avec Revit, Archicad, Allplan ou Vectorworks.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " BIM Bases + maîtrise du logiciel ou expérience équivalente", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation + Certificat sur réussite de l'examen (70/100) – House of Training & CRTI-B", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	https://www.houseoftraining.lu/training/bim-modeleur-revit-archicad-allplan-vectorworks-autres-logiciels-10606	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
19	BIM Coordinateur	bim-coordinateur	\N	digitalisation-bim	\N	\N	4 jours, 32 heures + travail personnel sur projet	IFSB – Institut de Formation Sectoriel du Bâtiment, 445 ZAE Krakelshaff, L-3290 Bettembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Formation complète couvrant la méthodologie d'implémentation BIM, le contrôle qualité, les standards IFC, l'extraction de quantités et un travail collaboratif en équipe interdisciplinaire.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " BIM Bases + Outils de modélisation Mise en route + BIM Référent + BIM Modeleur", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat 'BIM coordinateur' sur réussite de l'examen (70/100) – House of Training & CRTI-B", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	https://www.houseoftraining.lu/training/bim-coordinateur-10589	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
20	BIM – IFC Avancé	bim-ifc-avance	\N	digitalisation-bim	\N	\N	2 jours, 12 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Analyse des défis pratiques d'interopérabilité avec le format IFC. Les participants apprennent à lire le contenu d'un fichier IFC dans un éditeur de texte, à comprendre la structure du fichier et à appliquer les bonnes pratiques (structure spatiale, positionnement, géométrie, extraction de données). Atelier pratique avec les propres fichiers IFC des participants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Expérience des échanges au format IFC OU formation BIM Référent OU formation outils de modélisation", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation – House of Training & CRTI-B", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	https://www.houseoftraining.lu/training/ifc-avance-10598	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
21	BIM Maître d'ouvrage & Facility Management	bim-maitrise-ouvrage-fm	\N	digitalisation-bim	\N	\N	3 jours, 24 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Apprentissage de la gestion de l'information tout au long du cycle de vie d'un bâtiment. Compréhension des rôles des parties prenantes dans un projet BIM, développement des objectifs BIM, maîtrise de la gestion collaborative de projet selon ISO 19650.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " BIM Bases ou équivalent académique reconnu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Public cible :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Maîtres d'ouvrage publics/privés, gestionnaires de patrimoine, property managers, opérateurs, administrations gouvernementales", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	\N	customer@houseoftraining.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
22	Outils de modélisation – Mise en route	outils-modelisation-mise-en-route	\N	digitalisation-bim	\N	\N	3 jours minimum, 21 heures recommandées	Variable selon le partenaire de formation et le logiciel choisi	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Formation aux outils de modélisation 3D et d'annotation 2D. Objectif : produire des livrables (plans, élévations, coupes, vues 3D, nomenclatures). Les connaissances sont validées par l'examen BIM Modeleur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Logiciels disponibles :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Autodesk Revit (Arkance Systems, TASE Solutions), Graphisoft Archicad (Modena Group), Nemetschek Allplan (HENINLAURENT), Vectorworks (Design Express belux), Bentley Open Building Designer (beCAD), Cadwork, Strakon", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Aucun", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	\N	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
23	Outils & Méthodes – Gestion des réservations grâce au BIM	outils-methodes-gestion-reservations	\N	digitalisation-bim	\N	\N	1 jour, 4 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Outils et méthodes pour aborder techniquement le BIM dans des cas d'application spécifiques liés à la gestion des réservations. Couvre les rôles et échanges dans le processus, la modélisation BIM des demandes de réservations, exercices pratiques Open BIM et Closed BIM.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Avoir suivi une formation sur au moins un outil de modélisation BIM", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation – House of Training & OAI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	\N	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
24	Outils & Méthodes – Modélisation paramétrique	outils-methodes-modelisation-parametrique	\N	digitalisation-bim	\N	\N	1 jour, 7 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Couvre les bases de la modélisation paramétrique et démontre ses avantages : génération de variantes de conception multiples, création de géométries complexes. Développement d'algorithmes pour la génération de projets, intégration avec ArchiCAD.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Maîtrise du dessin ArchiCAD", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation – House of Training & OAI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	\N	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
25	Outils & Méthodes – Le BIM en phase soumission	outils-methodes-bim-phase-soumission	\N	digitalisation-bim	\N	\N	1 jour, 4 heures	Chambre de Commerce Luxembourg, 7 rue Alcide de Gasperi, L-1615 Luxembourg	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Démontre comment extraire des quantités depuis des maquettes BIM 3D (Revit, Archicad ou IFC) à différentes phases de projet. À l'aide du logiciel BIMoffice, les participants apprennent à générer automatiquement des métrés et à explorer les applications de gestion financière en phases de soumission, attribution et chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Prérequis :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Formation intermédiaire avec maîtrise des outils de modélisation BIM + notions de base en préparation de métrés", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Certificat :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Certificat de participation – House of Training & OAI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}]}]}}	\N	contact@crtib.lu	2026-06-11 21:39:17.508+01	2026-06-11 21:39:17.508+01	published
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.media (id, alt, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y) FROM stdin;
218	\N	2026-06-09 22:39:30.646+01	2026-06-09 22:39:30.646+01	/api/media/file/signature-statuts-nouveau-gie-crti-b.jpg	\N	signature-statuts-nouveau-gie-crti-b.jpg	image/jpeg	39845	450	337	50	50
217	\N	2026-06-09 22:39:30.647+01	2026-06-09 22:39:30.647+01	/api/media/file/pasted-image-1.jpeg	\N	pasted-image-1.jpeg	image/jpeg	9043	239	179	50	50
216	\N	2026-06-09 22:39:30.648+01	2026-06-09 22:39:30.648+01	/api/media/file/jakub-zerdzicki-9PwLeZA-RGc-unsplash.jpg	\N	jakub-zerdzicki-9PwLeZA-RGc-unsplash.jpg	image/jpeg	475173	3000	2001	50	50
215	\N	2026-06-09 22:39:30.649+01	2026-06-09 22:39:30.649+01	/api/media/file/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg	\N	vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg	image/jpeg	3070722	6000	4000	50	50
214	\N	2026-06-09 22:39:30.65+01	2026-06-09 22:39:30.65+01	/api/media/file/florian-klauer-mk7D-4UCfmg-unsplash.jpg	\N	florian-klauer-mk7D-4UCfmg-unsplash.jpg	image/jpeg	8573813	7500	11000	50	50
213	\N	2026-06-09 22:39:30.651+01	2026-06-09 22:39:30.651+01	/api/media/file/jakub-zerdzicki-LNnmSumlwO4-unsplash.jpg	\N	jakub-zerdzicki-LNnmSumlwO4-unsplash.jpg	image/jpeg	535661	3073	2050	50	50
212	\N	2026-06-09 22:39:30.652+01	2026-06-09 22:39:30.652+01	/api/media/file/nina-pascal-6SZLqm3f2rc-unsplash.jpg	\N	nina-pascal-6SZLqm3f2rc-unsplash.jpg	image/jpeg	3963967	5184	3456	50	50
211	\N	2026-06-09 22:39:30.652+01	2026-06-09 22:39:30.652+01	/api/media/file/cytonn-photography-GJao3ZTX9gU-unsplash-1.jpg	\N	cytonn-photography-GJao3ZTX9gU-unsplash-1.jpg	image/jpeg	1609454	6016	4016	50	50
210	\N	2026-06-09 22:39:30.653+01	2026-06-09 22:39:30.653+01	/api/media/file/cytonn-photography-GJao3ZTX9gU-unsplash.jpg	\N	cytonn-photography-GJao3ZTX9gU-unsplash.jpg	image/jpeg	1609454	6016	4016	50	50
209	\N	2026-06-09 22:39:30.654+01	2026-06-09 22:39:30.654+01	/api/media/file/tim-wildsmith-o2fc-C-Uotw-unsplash.jpg	\N	tim-wildsmith-o2fc-C-Uotw-unsplash.jpg	image/jpeg	2057670	3999	2771	50	50
208	\N	2026-06-09 22:39:30.654+01	2026-06-09 22:39:30.654+01	/api/media/file/element5-digital-OyCl7Y4y0Bk-unsplash.jpg	\N	element5-digital-OyCl7Y4y0Bk-unsplash.jpg	image/jpeg	424296	3953	2791	50	50
207	\N	2026-06-09 22:39:30.655+01	2026-06-09 22:39:30.655+01	/api/media/file/sincerely-media-dGxOgeXAXm8-unsplash%20(1)-2.jpg	\N	sincerely-media-dGxOgeXAXm8-unsplash (1)-2.jpg	image/jpeg	1173281	5184	3456	50	50
206	\N	2026-06-09 22:39:30.656+01	2026-06-09 22:39:30.656+01	/api/media/file/sincerely-media-dGxOgeXAXm8-unsplash%20(1)-1.jpg	\N	sincerely-media-dGxOgeXAXm8-unsplash (1)-1.jpg	image/jpeg	1173281	5184	3456	50	50
205	\N	2026-06-09 22:39:30.656+01	2026-06-09 22:39:30.656+01	/api/media/file/sincerely-media-dGxOgeXAXm8-unsplash%20(1).jpg	\N	sincerely-media-dGxOgeXAXm8-unsplash (1).jpg	image/jpeg	1173281	5184	3456	50	50
204	\N	2026-06-09 22:39:30.657+01	2026-06-09 22:39:30.657+01	/api/media/file/jacek-dylag-nhCPOp4A2Xo-unsplash.jpg	\N	jacek-dylag-nhCPOp4A2Xo-unsplash.jpg	image/jpeg	3815136	3593	5389	50	50
203	\N	2026-06-09 22:39:30.658+01	2026-06-09 22:39:30.658+01	/api/media/file/beatriz-perez-moya-XN4T2PVUUgk-unsplash.jpg	\N	beatriz-perez-moya-XN4T2PVUUgk-unsplash.jpg	image/jpeg	1505735	4928	2677	50	50
202	\N	2026-06-09 22:39:30.658+01	2026-06-09 22:39:30.658+01	/api/media/file/ashraf-ali-JLW-T4LiJCw-unsplash.jpg	\N	ashraf-ali-JLW-T4LiJCw-unsplash.jpg	image/jpeg	2291380	6000	4000	50	50
201	Relatório de stack	2026-06-09 22:39:30.659+01	2026-06-09 22:39:30.659+01	/api/media/file/Relatorio_Infraestrutura_cep-stross-1.docx	\N	Relatorio_Infraestrutura_cep-stross-1.docx	application/vnd.openxmlformats-officedocument.wordprocessingml.document	28634	\N	\N	50	50
200	\N	2026-06-09 22:39:30.66+01	2026-06-09 22:39:30.66+01	/api/media/file/Relatorio_Infraestrutura_cep-stross.docx	\N	Relatorio_Infraestrutura_cep-stross.docx	application/vnd.openxmlformats-officedocument.wordprocessingml.document	28634	\N	\N	50	50
197	\N	2026-06-09 22:39:30.661+01	2026-06-09 22:39:30.661+01	/api/media/file/Untitled%20design.jpg	\N	Untitled design.jpg	image/jpeg	391579	1920	1080	50	50
196	\N	2026-06-09 22:39:30.661+01	2026-06-09 22:39:30.661+01	/api/media/file/Untitled%20design%20(1).jpg	\N	Untitled design (1).jpg	image/jpeg	236086	1920	1080	50	50
195	\N	2026-06-09 22:39:30.662+01	2026-06-09 22:39:30.662+01	/api/media/file/iStock-1277686250%20copy.jpg	\N	iStock-1277686250 copy.jpg	image/jpeg	9477585	6000	4000	50	50
194	\N	2026-06-09 22:39:30.663+01	2026-06-09 22:39:30.663+01	/api/media/file/Image4.jpg	\N	Image4.jpg	image/jpeg	406973	2145	1207	50	50
193	\N	2026-06-09 22:39:30.664+01	2026-06-09 22:39:30.664+01	/api/media/file/button.png	\N	button.png	image/png	22632	1000	400	50	50
192	\N	2026-06-09 22:39:30.665+01	2026-06-09 22:39:30.665+01	/api/media/file/Image2.png	\N	Image2.png	image/png	347499	860	621	50	50
191	\N	2026-06-09 22:39:30.666+01	2026-06-09 22:39:30.666+01	/api/media/file/scott-blake-x-ghf9LjrVg-unsplash-1.jpg	\N	scott-blake-x-ghf9LjrVg-unsplash-1.jpg	image/jpeg	1669701	5472	1891	50	50
190	\N	2026-06-09 22:39:30.667+01	2026-06-09 22:39:30.667+01	/api/media/file/2025-11-12%20LIST-1.jpg	\N	2025-11-12 LIST-1.jpg	image/jpeg	2436494	1901	2851	50	50
189	\N	2026-06-09 22:39:30.667+01	2026-06-09 22:39:30.667+01	/api/media/file/CTG074_Commentaire%20des%20articles.pdf	\N	CTG074_Commentaire des articles.pdf	application/pdf	85833	\N	\N	50	50
188	\N	2026-06-09 22:39:30.668+01	2026-06-09 22:39:30.668+01	/api/media/file/CTG042_Commentaire%20des%20articles.pdf	\N	CTG042_Commentaire des articles.pdf	application/pdf	85156	\N	\N	50	50
187	\N	2026-06-09 22:39:30.669+01	2026-06-09 22:39:30.669+01	/api/media/file/CTG040_Commentaire%20des%20articles.pdf	\N	CTG040_Commentaire des articles.pdf	application/pdf	85647	\N	\N	50	50
186	\N	2026-06-09 22:39:30.67+01	2026-06-09 22:39:30.67+01	/api/media/file/CTG013_Commentaire%20des%20articles.pdf	\N	CTG013_Commentaire des articles.pdf	application/pdf	59813	\N	\N	50	50
185	\N	2026-06-09 22:39:30.671+01	2026-06-09 22:39:30.671+01	/api/media/file/CTG012_Commentaire%20des%20articles.pdf	\N	CTG012_Commentaire des articles.pdf	application/pdf	59665	\N	\N	50	50
184	\N	2026-06-09 22:39:30.672+01	2026-06-09 22:39:30.672+01	/api/media/file/CTG001_Commentaire%20des%20articles.pdf	\N	CTG001_Commentaire des articles.pdf	application/pdf	67766	\N	\N	50	50
183	\N	2026-06-09 22:39:30.673+01	2026-06-09 22:39:30.673+01	/api/media/file/CTG0_Commentaire%20des%20articles-2.pdf	\N	CTG0_Commentaire des articles-2.pdf	application/pdf	63573	\N	\N	50	50
182	\N	2026-06-09 22:39:30.674+01	2026-06-09 22:39:30.674+01	/api/media/file/CTG0_%20Expos%C3%A9%20des%20motifs-1.pdf	\N	CTG0_ Exposé des motifs-1.pdf	application/pdf	62327	\N	\N	50	50
181	\N	2026-06-09 22:39:30.675+01	2026-06-09 22:39:30.675+01	/api/media/file/CTG0_Commentaire%20des%20articles-1.pdf	\N	CTG0_Commentaire des articles-1.pdf	application/pdf	63573	\N	\N	50	50
180	\N	2026-06-09 22:39:30.676+01	2026-06-09 22:39:30.676+01	/api/media/file/cdc_bet_MTP-2.pdf	\N	cdc_bet_MTP-2.pdf	application/pdf	1130490	\N	\N	50	50
179	\N	2026-06-09 22:39:30.676+01	2026-06-09 22:39:30.676+01	/api/media/file/CTG0_%20Expos%C3%A9%20des%20motifs.pdf	\N	CTG0_ Exposé des motifs.pdf	application/pdf	62327	\N	\N	50	50
178	\N	2026-06-09 22:39:30.677+01	2026-06-09 22:39:30.677+01	/api/media/file/CCG100_Clauses%20contractuelles-1.pdf	\N	CCG100_Clauses contractuelles-1.pdf	application/pdf	596571	\N	\N	50	50
177	\N	2026-06-09 22:39:30.678+01	2026-06-09 22:39:30.678+01	/api/media/file/cdc_bet_MTP-1.pdf	\N	cdc_bet_MTP-1.pdf	application/pdf	1130490	\N	\N	50	50
176	\N	2026-06-09 22:39:30.679+01	2026-06-09 22:39:30.679+01	/api/media/file/CCG100_Clauses%20contractuelles.pdf	\N	CCG100_Clauses contractuelles.pdf	application/pdf	596571	\N	\N	50	50
175	\N	2026-06-09 22:39:30.68+01	2026-06-09 22:39:30.68+01	/api/media/file/CCG100_%20Expos%C3%A9%20des%20motifs.pdf	\N	CCG100_ Exposé des motifs.pdf	application/pdf	83525	\N	\N	50	50
174	\N	2026-06-09 22:39:30.681+01	2026-06-09 22:39:30.681+01	/api/media/file/CTG0_Commentaire%20des%20articles.pdf	\N	CTG0_Commentaire des articles.pdf	application/pdf	63573	\N	\N	50	50
173	\N	2026-06-09 22:39:30.682+01	2026-06-09 22:39:30.682+01	/api/media/file/cdc_bet_MTP.pdf	\N	cdc_bet_MTP.pdf	application/pdf	1130490	\N	\N	50	50
172	\N	2026-06-09 22:39:30.684+01	2026-06-09 22:39:30.684+01	/api/media/file/DNO_003_fr.pdf	\N	DNO_003_fr.pdf	application/pdf	93353	\N	\N	50	50
171	\N	2026-06-09 22:39:30.685+01	2026-06-09 22:39:30.685+01	/api/media/file/DNO_002_fr.pdf	\N	DNO_002_fr.pdf	application/pdf	102400	\N	\N	50	50
170	\N	2026-06-09 22:39:30.686+01	2026-06-09 22:39:30.686+01	/api/media/file/DNO_001_fr-2.pdf	\N	DNO_001_fr-2.pdf	application/pdf	132705	\N	\N	50	50
169	\N	2026-06-09 22:39:30.687+01	2026-06-09 22:39:30.687+01	/api/media/file/CCG100_%20Expos%C3%A9%20des%20motifs-2.pdf	\N	CCG100_ Exposé des motifs-2.pdf	application/pdf	83525	\N	\N	50	50
168	\N	2026-06-09 22:39:30.689+01	2026-06-09 22:39:30.689+01	/api/media/file/catalogue_crtib_22juin2012_pdf%20(1).zip	\N	catalogue_crtib_22juin2012_pdf (1).zip	application/x-zip-compressed	485822	\N	\N	50	50
167	\N	2026-06-09 22:39:30.69+01	2026-06-09 22:39:30.69+01	/api/media/file/catalogue_crtib_22juin2012%20(1)-1.zip	\N	catalogue_crtib_22juin2012 (1)-1.zip	application/x-zip-compressed	85974	\N	\N	50	50
166	\N	2026-06-09 22:39:30.691+01	2026-06-09 22:39:30.691+01	/api/media/file/notes_explicatives-1.zip	\N	notes_explicatives-1.zip	application/x-zip-compressed	71667	\N	\N	50	50
165	\N	2026-06-09 22:39:30.692+01	2026-06-09 22:39:30.692+01	/api/media/file/notes_explicatives.zip	\N	notes_explicatives.zip	application/x-zip-compressed	71667	\N	\N	50	50
164	\N	2026-06-09 22:39:30.693+01	2026-06-09 22:39:30.693+01	/api/media/file/catalogue_crtib_22juin2012%20(1).zip	\N	catalogue_crtib_22juin2012 (1).zip	application/x-zip-compressed	85974	\N	\N	50	50
163	\N	2026-06-09 22:39:30.694+01	2026-06-09 22:39:30.694+01	/api/media/file/catalogue_crtib_22juin2012_txt.zip	\N	catalogue_crtib_22juin2012_txt.zip	application/x-zip-compressed	158572	\N	\N	50	50
162	\N	2026-06-09 22:39:30.695+01	2026-06-09 22:39:30.695+01	/api/media/file/catalogue_crtib_22juin2012_texte_dans_autre_colonne.slk_.zip	\N	catalogue_crtib_22juin2012_texte_dans_autre_colonne.slk_.zip	application/x-zip-compressed	512577	\N	\N	50	50
161	\N	2026-06-09 22:39:30.697+01	2026-06-09 22:39:30.697+01	/api/media/file/catalogue_crtib_22juin2012_texte_en_dessous_titre.slk_.zip	\N	catalogue_crtib_22juin2012_texte_en_dessous_titre.slk_.zip	application/x-zip-compressed	573638	\N	\N	50	50
160	\N	2026-06-09 22:39:30.698+01	2026-06-09 22:39:30.698+01	/api/media/file/catalogue_crtib_22juin2012_texte_en_dessous_titre.csv_.zip	\N	catalogue_crtib_22juin2012_texte_en_dessous_titre.csv_.zip	application/x-zip-compressed	160304	\N	\N	50	50
159	\N	2026-06-09 22:39:30.699+01	2026-06-09 22:39:30.699+01	/api/media/file/catalogue_crtib_22juin2012_texte_dans_autre_colonne.csv_.zip	\N	catalogue_crtib_22juin2012_texte_dans_autre_colonne.csv_.zip	application/x-zip-compressed	732981	\N	\N	50	50
158	\N	2026-06-09 22:39:30.7+01	2026-06-09 22:39:30.7+01	/api/media/file/catalogue_crtib_22juin2012_rtf-1.zip	\N	catalogue_crtib_22juin2012_rtf-1.zip	application/x-zip-compressed	161608	\N	\N	50	50
157	\N	2026-06-09 22:39:30.701+01	2026-06-09 22:39:30.701+01	/api/media/file/catalogue_crtib_22juin2012_gaeb_xml-2.zip	\N	catalogue_crtib_22juin2012_gaeb_xml-2.zip	application/x-zip-compressed	157512	\N	\N	50	50
156	\N	2026-06-09 22:39:30.702+01	2026-06-09 22:39:30.702+01	/api/media/file/catalogue_crtib_22juin2012_rtf.zip	\N	catalogue_crtib_22juin2012_rtf.zip	application/x-zip-compressed	161608	\N	\N	50	50
155	\N	2026-06-09 22:39:30.703+01	2026-06-09 22:39:30.703+01	/api/media/file/catalogue_crtib_22juin2012_gaeb_xml-1.zip	\N	catalogue_crtib_22juin2012_gaeb_xml-1.zip	application/x-zip-compressed	157512	\N	\N	50	50
154	\N	2026-06-09 22:39:30.704+01	2026-06-09 22:39:30.704+01	/api/media/file/catalogue_crtib_22juin2012_html.zip	\N	catalogue_crtib_22juin2012_html.zip	application/x-zip-compressed	273650	\N	\N	50	50
153	\N	2026-06-09 22:39:30.706+01	2026-06-09 22:39:30.706+01	/api/media/file/catalogue_crtib_22juin2012_gaeb_xml.zip	\N	catalogue_crtib_22juin2012_gaeb_xml.zip	application/x-zip-compressed	157512	\N	\N	50	50
152	\N	2026-06-09 22:39:30.707+01	2026-06-09 22:39:30.707+01	/api/media/file/Clauses-contractuelles-v10.pdf	\N	Clauses-contractuelles-v10.pdf	application/pdf	332674	\N	\N	50	50
151	\N	2026-06-09 22:39:30.708+01	2026-06-09 22:39:30.708+01	/api/media/file/CTG0_fr-1.pdf	\N	CTG0_fr-1.pdf	application/pdf	79693	\N	\N	50	50
150	\N	2026-06-09 22:39:30.71+01	2026-06-09 22:39:30.71+01	/api/media/file/CTG001_fr-1.pdf	\N	CTG001_fr-1.pdf	application/pdf	125616	\N	\N	50	50
149	\N	2026-06-09 22:39:30.711+01	2026-06-09 22:39:30.711+01	/api/media/file/CTG002_fr-1.pdf	\N	CTG002_fr-1.pdf	application/pdf	127514	\N	\N	50	50
148	\N	2026-06-09 22:39:30.713+01	2026-06-09 22:39:30.713+01	/api/media/file/Ctg009fr-1.pdf	\N	Ctg009fr-1.pdf	application/pdf	76039	\N	\N	50	50
147	\N	2026-06-09 22:39:30.714+01	2026-06-09 22:39:30.714+01	/api/media/file/CTG010_fr_AMENAGEMENT_EXT_V1.1-1.pdf	\N	CTG010_fr_AMENAGEMENT_EXT_V1.1-1.pdf	application/pdf	1672565	\N	\N	50	50
146	\N	2026-06-09 22:39:30.715+01	2026-06-09 22:39:30.715+01	/api/media/file/CTG011_fr-1.pdf	\N	CTG011_fr-1.pdf	application/pdf	108727	\N	\N	50	50
145	\N	2026-06-09 22:39:30.717+01	2026-06-09 22:39:30.717+01	/api/media/file/CTG012_fr-1.pdf	\N	CTG012_fr-1.pdf	application/pdf	101092	\N	\N	50	50
144	\N	2026-06-09 22:39:30.718+01	2026-06-09 22:39:30.718+01	/api/media/file/CTG013_vers_6_0-1.pdf	\N	CTG013_vers_6_0-1.pdf	application/pdf	129351	\N	\N	50	50
143	\N	2026-06-09 22:39:30.719+01	2026-06-09 22:39:30.719+01	/api/media/file/Ctg014_fr_1.0-1.pdf	\N	Ctg014_fr_1.0-1.pdf	application/pdf	791124	\N	\N	50	50
142	\N	2026-06-09 22:39:30.72+01	2026-06-09 22:39:30.72+01	/api/media/file/CTG-016_fr_0-1.pdf	\N	CTG-016_fr_0-1.pdf	application/pdf	1357080	\N	\N	50	50
141	\N	2026-06-09 22:39:30.722+01	2026-06-09 22:39:30.722+01	/api/media/file/CTG017-V3_FR-1.pdf	\N	CTG017-V3_FR-1.pdf	application/pdf	159588	\N	\N	50	50
140	\N	2026-06-09 22:39:30.723+01	2026-06-09 22:39:30.723+01	/api/media/file/CTG018_fr-1.pdf	\N	CTG018_fr-1.pdf	application/pdf	102530	\N	\N	50	50
139	\N	2026-06-09 22:39:30.724+01	2026-06-09 22:39:30.724+01	/api/media/file/CTG020-V3_FR-1.pdf	\N	CTG020-V3_FR-1.pdf	application/pdf	190456	\N	\N	50	50
138	\N	2026-06-09 22:39:30.726+01	2026-06-09 22:39:30.726+01	/api/media/file/CTG022-V4_FR-1.pdf	\N	CTG022-V4_FR-1.pdf	application/pdf	464796	\N	\N	50	50
137	\N	2026-06-09 22:39:30.727+01	2026-06-09 22:39:30.727+01	/api/media/file/CTG023_fr_4.0-1.pdf	\N	CTG023_fr_4.0-1.pdf	application/pdf	636674	\N	\N	50	50
136	\N	2026-06-09 22:39:30.728+01	2026-06-09 22:39:30.728+01	/api/media/file/CTG024-V3_FR-1.pdf	\N	CTG024-V3_FR-1.pdf	application/pdf	146043	\N	\N	50	50
135	\N	2026-06-09 22:39:30.729+01	2026-06-09 22:39:30.729+01	/api/media/file/CTG025_fr-1.pdf	\N	CTG025_fr-1.pdf	application/pdf	102973	\N	\N	50	50
134	\N	2026-06-09 22:39:30.73+01	2026-06-09 22:39:30.73+01	/api/media/file/CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes-2.pdf	\N	CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes-2.pdf	application/pdf	4492823	\N	\N	50	50
133	\N	2026-06-09 22:39:30.731+01	2026-06-09 22:39:30.731+01	/api/media/file/CTG027_fr-2.pdf	\N	CTG027_fr-2.pdf	application/pdf	121691	\N	\N	50	50
132	\N	2026-06-09 22:39:30.733+01	2026-06-09 22:39:30.733+01	/api/media/file/CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes-1.pdf	\N	CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes-1.pdf	application/pdf	4492823	\N	\N	50	50
131	\N	2026-06-09 22:39:30.734+01	2026-06-09 22:39:30.734+01	/api/media/file/CTG027_fr-1.pdf	\N	CTG027_fr-1.pdf	application/pdf	121691	\N	\N	50	50
130	\N	2026-06-09 22:39:30.735+01	2026-06-09 22:39:30.735+01	/api/media/file/CTG028_Beschlagsarbeiten_fr_v1.1-1.pdf	\N	CTG028_Beschlagsarbeiten_fr_v1.1-1.pdf	application/pdf	1032693	\N	\N	50	50
129	\N	2026-06-09 22:39:30.736+01	2026-06-09 22:39:30.736+01	/api/media/file/CTG031_fr_3.0.pdf	\N	CTG031_fr_3.0.pdf	application/pdf	889159	\N	\N	50	50
128	\N	2026-06-09 22:39:30.737+01	2026-06-09 22:39:30.737+01	/api/media/file/CTG032_fr_3.0.pdf	\N	CTG032_fr_3.0.pdf	application/pdf	657543	\N	\N	50	50
127	\N	2026-06-09 22:39:30.738+01	2026-06-09 22:39:30.738+01	/api/media/file/Ctg034.pdf	\N	Ctg034.pdf	application/pdf	120895	\N	\N	50	50
126	\N	2026-06-09 22:39:30.738+01	2026-06-09 22:39:30.738+01	/api/media/file/Ctg035.pdf	\N	Ctg035.pdf	application/pdf	102445	\N	\N	50	50
125	\N	2026-06-09 22:39:30.74+01	2026-06-09 22:39:30.74+01	/api/media/file/CTG036-V3_FR.pdf	\N	CTG036-V3_FR.pdf	application/pdf	120982	\N	\N	50	50
124	\N	2026-06-09 22:39:30.741+01	2026-06-09 22:39:30.741+01	/api/media/file/CTG037_fr.pdf	\N	CTG037_fr.pdf	application/pdf	103906	\N	\N	50	50
123	\N	2026-06-09 22:39:30.742+01	2026-06-09 22:39:30.742+01	/api/media/file/CTG_038_facades_ventilees_fr_V05.pdf	\N	CTG_038_facades_ventilees_fr_V05.pdf	application/pdf	1413765	\N	\N	50	50
122	\N	2026-06-09 22:39:30.743+01	2026-06-09 22:39:30.743+01	/api/media/file/CTG039-V3_fr.pdf	\N	CTG039-V3_fr.pdf	application/pdf	1537000	\N	\N	50	50
121	\N	2026-06-09 22:39:30.744+01	2026-06-09 22:39:30.744+01	/api/media/file/CTG040-V6_FR_0.pdf	\N	CTG040-V6_FR_0.pdf	application/pdf	397962	\N	\N	50	50
120	\N	2026-06-09 22:39:30.745+01	2026-06-09 22:39:30.745+01	/api/media/file/CTG042-V6_FR.pdf	\N	CTG042-V6_FR.pdf	application/pdf	324751	\N	\N	50	50
119	\N	2026-06-09 22:39:30.747+01	2026-06-09 22:39:30.747+01	/api/media/file/CTG047-V2_fr.pdf	\N	CTG047-V2_fr.pdf	application/pdf	1458633	\N	\N	50	50
118	\N	2026-06-09 22:39:30.748+01	2026-06-09 22:39:30.748+01	/api/media/file/CTG049-V3_FR.pdf	\N	CTG049-V3_FR.pdf	application/pdf	203377	\N	\N	50	50
117	\N	2026-06-09 22:39:30.749+01	2026-06-09 22:39:30.749+01	/api/media/file/CTG052-V4_FR.pdf	\N	CTG052-V4_FR.pdf	application/pdf	118357	\N	\N	50	50
116	\N	2026-06-09 22:39:30.75+01	2026-06-09 22:39:30.75+01	/api/media/file/CTG053-V4_FR.pdf	\N	CTG053-V4_FR.pdf	application/pdf	121880	\N	\N	50	50
115	\N	2026-06-09 22:39:30.752+01	2026-06-09 22:39:30.752+01	/api/media/file/CTG-061_fr.pdf	\N	CTG-061_fr.pdf	application/pdf	387391	\N	\N	50	50
114	\N	2026-06-09 22:39:30.754+01	2026-06-09 22:39:30.754+01	/api/media/file/CTG-069_fr_0.pdf	\N	CTG-069_fr_0.pdf	application/pdf	191861	\N	\N	50	50
113	\N	2026-06-09 22:39:30.756+01	2026-06-09 22:39:30.756+01	/api/media/file/CTG074-V5_FR_0.pdf	\N	CTG074-V5_FR_0.pdf	application/pdf	925049	\N	\N	50	50
112	\N	2026-06-09 22:39:30.757+01	2026-06-09 22:39:30.757+01	/api/media/file/CTG175_fr.pdf	\N	CTG175_fr.pdf	application/pdf	36037	\N	\N	50	50
111	\N	2026-06-09 22:39:30.758+01	2026-06-09 22:39:30.758+01	/api/media/file/CTG176_fr.pdf	\N	CTG176_fr.pdf	application/pdf	14155	\N	\N	50	50
110	\N	2026-06-09 22:39:30.759+01	2026-06-09 22:39:30.759+01	/api/media/file/CTG177_fr.pdf	\N	CTG177_fr.pdf	application/pdf	146872	\N	\N	50	50
109	\N	2026-06-09 22:39:30.761+01	2026-06-09 22:39:30.761+01	/api/media/file/Ctg178fr_3_0-1.pdf	\N	Ctg178fr_3_0-1.pdf	application/pdf	78118	\N	\N	50	50
108	\N	2026-06-09 22:39:30.762+01	2026-06-09 22:39:30.762+01	/api/media/file/Ctg178fr_3_0.pdf	\N	Ctg178fr_3_0.pdf	application/pdf	78118	\N	\N	50	50
107	\N	2026-06-09 22:39:30.763+01	2026-06-09 22:39:30.763+01	/api/media/file/CTG179_fr.pdf	\N	CTG179_fr.pdf	application/pdf	158816	\N	\N	50	50
106	\N	2026-06-09 22:39:30.765+01	2026-06-09 22:39:30.765+01	/api/media/file/Ctg180fr2.pdf	\N	Ctg180fr2.pdf	application/pdf	82826	\N	\N	50	50
105	\N	2026-06-09 22:39:30.766+01	2026-06-09 22:39:30.766+01	/api/media/file/pasted-image-4.png	\N	pasted-image-4.png	image/png	118123	624	424	50	50
104	\N	2026-06-09 22:39:30.767+01	2026-06-09 22:39:30.767+01	/api/media/file/Amin_Hamidizadeh%20(1).jpg	\N	Amin_Hamidizadeh (1).jpg	image/jpeg	4280538	3016	4528	50	50
103	\N	2026-06-09 22:39:30.769+01	2026-06-09 22:39:30.769+01	/api/media/file/Charlie_Boon%20(1).jpg	\N	Charlie_Boon (1).jpg	image/jpeg	598727	3106	2959	50	50
102	\N	2026-06-09 22:39:30.77+01	2026-06-09 22:39:30.77+01	/api/media/file/Catherine_Brand%20(1).jpg	\N	Catherine_Brand (1).jpg	image/jpeg	4235968	3016	4528	50	50
101	\N	2026-06-09 22:39:30.771+01	2026-06-09 22:39:30.771+01	/api/media/file/Jael_Redinha.jpg	\N	Jael_Redinha.jpg	image/jpeg	4481954	3016	4528	50	50
100	\N	2026-06-09 22:39:30.772+01	2026-06-09 22:39:30.772+01	/api/media/file/Gilles_Christnach%20(6).jpg	\N	Gilles_Christnach (6).jpg	image/jpeg	3829008	4528	3016	50	50
99	\N	2026-06-09 22:39:30.773+01	2026-06-09 22:39:30.773+01	/api/media/file/CDM%20Logo%20horizontal%20quadri%205mm.png	\N	CDM Logo horizontal quadri 5mm.png	image/png	8008	555	168	50	50
98	\N	2026-06-09 22:39:30.774+01	2026-06-09 22:39:30.774+01	/api/media/file/guide-bim-luxembourg_matrice-responsabilites__v1-0.xlsx	\N	guide-bim-luxembourg_matrice-responsabilites__v1-0.xlsx	application/vnd.openxmlformats-officedocument.spreadsheetml.sheet	36554	\N	\N	50	50
97	\N	2026-06-09 22:39:30.775+01	2026-06-09 22:39:30.775+01	/api/media/file/Guide-BIM-Luxembourg_Matrice-responsabilites__v1-0.pdf	\N	Guide-BIM-Luxembourg_Matrice-responsabilites__v1-0.pdf	application/pdf	214416	\N	\N	50	50
96	\N	2026-06-09 22:39:30.776+01	2026-06-09 22:39:30.776+01	/api/media/file/Guide-BIM-Luxembourg_Modele-PBB__V1-0-1%20(1).docx	\N	Guide-BIM-Luxembourg_Modele-PBB__V1-0-1 (1).docx	application/vnd.openxmlformats-officedocument.wordprocessingml.document	48737	\N	\N	50	50
95	\N	2026-06-09 22:39:30.777+01	2026-06-09 22:39:30.777+01	/api/media/file/Guide-BIM-Luxembourg_Modele-Fiches-suivi__V1-0%20(1).docx	\N	Guide-BIM-Luxembourg_Modele-Fiches-suivi__V1-0 (1).docx	application/vnd.openxmlformats-officedocument.wordprocessingml.document	45774	\N	\N	50	50
94	\N	2026-06-09 22:39:30.778+01	2026-06-09 22:39:30.778+01	/api/media/file/Guide-BIM-Luxembourg_Modele-BEP__V1-0%20(4).docx	\N	Guide-BIM-Luxembourg_Modele-BEP__V1-0 (4).docx	application/vnd.openxmlformats-officedocument.wordprocessingml.document	46692	\N	\N	50	50
93	\N	2026-06-09 22:39:30.78+01	2026-06-09 22:39:30.78+01	/api/media/file/Guide-BIM-Luxembourg_Gute-Vorgehensweisen__V1-0-DE.pdf	\N	Guide-BIM-Luxembourg_Gute-Vorgehensweisen__V1-0-DE.pdf	application/pdf	154003	\N	\N	50	50
92	\N	2026-06-09 22:39:30.781+01	2026-06-09 22:39:30.781+01	/api/media/file/Guide-BIM-Luxembourg_Good-Practice__V1-0-EN-1.pdf	\N	Guide-BIM-Luxembourg_Good-Practice__V1-0-EN-1.pdf	application/pdf	146036	\N	\N	50	50
91	\N	2026-06-09 22:39:30.783+01	2026-06-09 22:39:30.783+01	/api/media/file/Guide-BIM-Luxembourg_Bonnes-Pratiques__V1-0-1.pdf	\N	Guide-BIM-Luxembourg_Bonnes-Pratiques__V1-0-1.pdf	application/pdf	208962	\N	\N	50	50
90	\N	2026-06-09 22:39:30.784+01	2026-06-09 22:39:30.784+01	/api/media/file/administration-ponts-chaussees.png	\N	administration-ponts-chaussees.png	image/png	16321	260	74	50	50
89	\N	2026-06-09 22:39:30.786+01	2026-06-09 22:39:30.786+01	/api/media/file/GDE_CMYK_Logo_yellow_grey_02.png	\N	GDE_CMYK_Logo_yellow_grey_02.png	image/png	32680	945	591	50	50
88	\N	2026-06-09 22:39:30.787+01	2026-06-09 22:39:30.787+01	/api/media/file/oai.png	\N	oai.png	image/png	385429	1456	564	50	50
87	\N	2026-06-09 22:39:30.788+01	2026-06-09 22:39:30.788+01	/api/media/file/FDA_logo-horizontal_RGB%20-%20Copie.png	\N	FDA_logo-horizontal_RGB - Copie.png	image/png	103845	3034	974	50	50
86	\N	2026-06-09 22:39:30.789+01	2026-06-09 22:39:30.789+01	/api/media/file/rubrique_3%20guide%20de%20formation.pdf	\N	rubrique_3 guide de formation.pdf	application/pdf	351627	\N	\N	50	50
85	\N	2026-06-09 22:39:30.791+01	2026-06-09 22:39:30.791+01	/api/media/file/pasted-image-3.png	\N	pasted-image-3.png	image/png	51178	624	322	50	50
84	\N	2026-06-09 22:39:30.793+01	2026-06-09 22:39:30.793+01	/api/media/file/pasted-image-2.png	\N	pasted-image-2.png	image/png	61246	624	309	50	50
83	\N	2026-06-09 22:39:30.794+01	2026-06-09 22:39:30.794+01	/api/media/file/pasted-image-1.png	\N	pasted-image-1.png	image/png	104263	883	459	50	50
82	\N	2026-06-09 22:39:30.795+01	2026-06-09 22:39:30.795+01	/api/media/file/pasted-image.png	\N	pasted-image.png	image/png	91176	837	432	50	50
81	\N	2026-06-09 22:39:30.796+01	2026-06-09 22:39:30.796+01	/api/media/file/pasted-image.jpeg	\N	pasted-image.jpeg	image/jpeg	18704	624	333	50	50
80	\N	2026-06-09 22:39:30.798+01	2026-06-09 22:39:30.798+01	/api/media/file/Guide-BIM-Luxembourg__V1-0-EN-1.pdf	\N	Guide-BIM-Luxembourg__V1-0-EN-1.pdf	application/pdf	1237826	\N	\N	50	50
79	\N	2026-06-09 22:39:30.8+01	2026-06-09 22:39:30.8+01	/api/media/file/Guide-BIM-Luxembourg__V1-0-DE.pdf	\N	Guide-BIM-Luxembourg__V1-0-DE.pdf	application/pdf	1305498	\N	\N	50	50
78	\N	2026-06-09 22:39:30.801+01	2026-06-09 22:39:30.801+01	/api/media/file/Guide-BIM-Luxembourg__V1-0.pdf	\N	Guide-BIM-Luxembourg__V1-0.pdf	application/pdf	2130381	\N	\N	50	50
77	\N	2026-06-09 22:39:30.803+01	2026-06-09 22:39:30.803+01	/api/media/file/%C3%A7ux-1.png	\N	çux-1.png	image/png	1985	435	116	50	50
76	Text 1	2026-06-09 22:39:30.804+01	2026-06-09 22:39:30.804+01	/api/media/file/person-1.jpeg	\N	person-1.jpeg	image/jpeg	12099	225	225	50	50
75	\N	2026-06-09 22:39:30.805+01	2026-06-09 22:39:30.805+01	/api/media/file/DNO_001_fr-1.pdf	\N	DNO_001_fr-1.pdf	application/pdf	132705	\N	\N	50	50
74	\N	2026-06-09 22:39:30.806+01	2026-06-09 22:39:30.806+01	/api/media/file/Page%20Marche%CC%81%20public.pdf	\N	Page Marché public.pdf	application/pdf	309437	\N	\N	50	50
73	\N	2026-06-09 22:39:30.807+01	2026-06-09 22:39:30.807+01	/api/media/file/REVPRIX_2018-10-22.pdf	\N	REVPRIX_2018-10-22.pdf	application/pdf	757779	\N	\N	50	50
72	\N	2026-06-09 22:39:30.809+01	2026-06-09 22:39:30.809+01	/api/media/file/%C3%A7ux.png	\N	çux.png	image/png	1985	435	116	50	50
71	\N	2026-06-09 22:39:30.81+01	2026-06-09 22:39:30.81+01	/api/media/file/person.jpeg	\N	person.jpeg	image/jpeg	6854	225	100	50	50
70	\N	2026-06-09 22:39:30.812+01	2026-06-09 22:39:30.812+01	/api/media/file/DNO_001_fr.rtf	\N	DNO_001_fr.rtf	application/msword	110296	\N	\N	50	50
69	\N	2026-06-09 22:39:30.813+01	2026-06-09 22:39:30.813+01	/api/media/file/DNO_001_fr.pdf	\N	DNO_001_fr.pdf	application/pdf	132705	\N	\N	50	50
68	\N	2026-06-09 22:39:30.815+01	2026-06-09 22:39:30.815+01	/api/media/file/CTG028_Beschlagsarbeiten_fr_v1.1.pdf	\N	CTG028_Beschlagsarbeiten_fr_v1.1.pdf	application/pdf	1032693	\N	\N	50	50
67	\N	2026-06-09 22:39:30.816+01	2026-06-09 22:39:30.816+01	/api/media/file/CTG027_fr.pdf	\N	CTG027_fr.pdf	application/pdf	121691	\N	\N	50	50
66	\N	2026-06-09 22:39:30.818+01	2026-06-09 22:39:30.818+01	/api/media/file/CTG027_fr.rtf	\N	CTG027_fr.rtf	application/msword	189105	\N	\N	50	50
65	\N	2026-06-09 22:39:30.82+01	2026-06-09 22:39:30.82+01	/api/media/file/CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes.pdf	\N	CTG_026-Parkettarbeiten_fr_2023_PUBLI_V03-avec-annexes.pdf	application/pdf	4492823	\N	\N	50	50
64	\N	2026-06-09 22:39:30.821+01	2026-06-09 22:39:30.821+01	/api/media/file/CTG025_fr.pdf	\N	CTG025_fr.pdf	application/pdf	102973	\N	\N	50	50
63	\N	2026-06-09 22:39:30.822+01	2026-06-09 22:39:30.822+01	/api/media/file/CTG025_fr.rtf	\N	CTG025_fr.rtf	application/msword	137435	\N	\N	50	50
62	\N	2026-06-09 22:39:30.823+01	2026-06-09 22:39:30.823+01	/api/media/file/CTG024-V3_FR.rtf	\N	CTG024-V3_FR.rtf	application/msword	644312	\N	\N	50	50
61	\N	2026-06-09 22:39:30.825+01	2026-06-09 22:39:30.825+01	/api/media/file/CTG024-V3_FR.pdf	\N	CTG024-V3_FR.pdf	application/pdf	146043	\N	\N	50	50
60	\N	2026-06-09 22:39:30.826+01	2026-06-09 22:39:30.826+01	/api/media/file/CTG023_fr_4.0.pdf	\N	CTG023_fr_4.0.pdf	application/pdf	636674	\N	\N	50	50
59	\N	2026-06-09 22:39:30.828+01	2026-06-09 22:39:30.828+01	/api/media/file/CTG023_fr_4.0.rtf	\N	CTG023_fr_4.0.rtf	application/msword	1948885	\N	\N	50	50
58	\N	2026-06-09 22:39:30.829+01	2026-06-09 22:39:30.829+01	/api/media/file/CTG022-V4_FR.pdf	\N	CTG022-V4_FR.pdf	application/pdf	464796	\N	\N	50	50
57	\N	2026-06-09 22:39:30.83+01	2026-06-09 22:39:30.83+01	/api/media/file/CTG020-V3_FR.pdf	\N	CTG020-V3_FR.pdf	application/pdf	190456	\N	\N	50	50
56	\N	2026-06-09 22:39:30.832+01	2026-06-09 22:39:30.832+01	/api/media/file/CTG020-V3_FR.rtf	\N	CTG020-V3_FR.rtf	application/msword	581163	\N	\N	50	50
55	\N	2026-06-09 22:39:30.834+01	2026-06-09 22:39:30.834+01	/api/media/file/CTG018_fr.pdf	\N	CTG018_fr.pdf	application/pdf	102530	\N	\N	50	50
54	\N	2026-06-09 22:39:30.835+01	2026-06-09 22:39:30.835+01	/api/media/file/CTG018_fr.rtf	\N	CTG018_fr.rtf	application/msword	136420	\N	\N	50	50
53	\N	2026-06-09 22:39:30.837+01	2026-06-09 22:39:30.837+01	/api/media/file/CTG017-V3_FR.pdf	\N	CTG017-V3_FR.pdf	application/pdf	159588	\N	\N	50	50
52	\N	2026-06-09 22:39:30.838+01	2026-06-09 22:39:30.838+01	/api/media/file/CTG017-V3_FR.rtf	\N	CTG017-V3_FR.rtf	application/msword	629812	\N	\N	50	50
51	\N	2026-06-09 22:39:30.839+01	2026-06-09 22:39:30.839+01	/api/media/file/CTG-016_fr_0.pdf	\N	CTG-016_fr_0.pdf	application/pdf	1357080	\N	\N	50	50
50	\N	2026-06-09 22:39:30.841+01	2026-06-09 22:39:30.841+01	/api/media/file/Ctg014_fr_1.0.rtf	\N	Ctg014_fr_1.0.rtf	application/msword	1370961	\N	\N	50	50
49	\N	2026-06-09 22:39:30.842+01	2026-06-09 22:39:30.842+01	/api/media/file/Ctg014_fr_1.0.pdf	\N	Ctg014_fr_1.0.pdf	application/pdf	791124	\N	\N	50	50
48	\N	2026-06-09 22:39:30.844+01	2026-06-09 22:39:30.844+01	/api/media/file/CTG013_vers_6_0.rtf	\N	CTG013_vers_6_0.rtf	application/msword	1105584	\N	\N	50	50
47	\N	2026-06-09 22:39:30.845+01	2026-06-09 22:39:30.845+01	/api/media/file/CTG013_vers_6_0.pdf	\N	CTG013_vers_6_0.pdf	application/pdf	129351	\N	\N	50	50
46	\N	2026-06-09 22:39:30.846+01	2026-06-09 22:39:30.846+01	/api/media/file/CTG012_fr.rtf	\N	CTG012_fr.rtf	application/msword	144555	\N	\N	50	50
45	\N	2026-06-09 22:39:30.848+01	2026-06-09 22:39:30.848+01	/api/media/file/CTG012_fr.pdf	\N	CTG012_fr.pdf	application/pdf	101092	\N	\N	50	50
44	\N	2026-06-09 22:39:30.849+01	2026-06-09 22:39:30.849+01	/api/media/file/CTG011_fr.rtf	\N	CTG011_fr.rtf	application/msword	152649	\N	\N	50	50
43	\N	2026-06-09 22:39:30.851+01	2026-06-09 22:39:30.851+01	/api/media/file/CTG011_fr.pdf	\N	CTG011_fr.pdf	application/pdf	108727	\N	\N	50	50
42	\N	2026-06-09 22:39:30.853+01	2026-06-09 22:39:30.853+01	/api/media/file/CTG010_fr_AMENAGEMENT_EXT_V1.1.pdf	\N	CTG010_fr_AMENAGEMENT_EXT_V1.1.pdf	application/pdf	1672565	\N	\N	50	50
41	\N	2026-06-09 22:39:30.855+01	2026-06-09 22:39:30.855+01	/api/media/file/Ctg009fr.rtf	\N	Ctg009fr.rtf	application/msword	344612	\N	\N	50	50
40	\N	2026-06-09 22:39:30.856+01	2026-06-09 22:39:30.856+01	/api/media/file/Ctg009fr.pdf	\N	Ctg009fr.pdf	application/pdf	76039	\N	\N	50	50
39	\N	2026-06-09 22:39:30.857+01	2026-06-09 22:39:30.857+01	/api/media/file/CTG002_fr.rtf	\N	CTG002_fr.rtf	application/msword	193898	\N	\N	50	50
38	\N	2026-06-09 22:39:30.859+01	2026-06-09 22:39:30.859+01	/api/media/file/CTG002_fr.pdf	\N	CTG002_fr.pdf	application/pdf	127514	\N	\N	50	50
37	\N	2026-06-09 22:39:30.86+01	2026-06-09 22:39:30.86+01	/api/media/file/CTG001_fr.rtf	\N	CTG001_fr.rtf	application/msword	222923	\N	\N	50	50
36	\N	2026-06-09 22:39:30.862+01	2026-06-09 22:39:30.862+01	/api/media/file/CTG001_fr.pdf	\N	CTG001_fr.pdf	application/pdf	125616	\N	\N	50	50
35	\N	2026-06-09 22:39:30.864+01	2026-06-09 22:39:30.864+01	/api/media/file/CTG0_fr.rtf	\N	CTG0_fr.rtf	application/msword	99449	\N	\N	50	50
34	\N	2026-06-09 22:39:30.865+01	2026-06-09 22:39:30.865+01	/api/media/file/CTG0_fr.pdf	\N	CTG0_fr.pdf	application/pdf	79693	\N	\N	50	50
33	\N	2026-06-09 22:39:30.867+01	2026-06-09 22:39:30.867+01	/api/media/file/crtib_Clauses-contractuelles-v10-2_2018-10-11.rtf	\N	crtib_Clauses-contractuelles-v10-2_2018-10-11.rtf	application/msword	731592	\N	\N	50	50
32	\N	2026-06-09 22:39:30.868+01	2026-06-09 22:39:30.868+01	/api/media/file/crtib_Clauses-contractuelles-v10-2_2018-10-11.pdf	\N	crtib_Clauses-contractuelles-v10-2_2018-10-11.pdf	application/pdf	332674	\N	\N	50	50
31	https://www.digitalbuilding.lu/fr/	2026-06-09 22:39:30.869+01	2026-06-09 22:39:30.869+01	/api/media/file/crtib-webs.png	\N	crtib-webs.png	image/png	340789	1200	720	50	50
30	\N	2026-06-09 22:39:30.871+01	2026-06-09 22:39:30.871+01	/api/media/file/crtib-web.png	\N	crtib-web.png	image/png	340789	1200	720	50	50
29	\N	2026-06-09 22:39:30.872+01	2026-06-09 22:39:30.872+01	/api/media/file/Le%20systeme%20international	\N	Le systeme international	image/png	185735	952	645	50	50
28	\N	2026-06-09 22:39:30.874+01	2026-06-09 22:39:30.874+01	/api/media/file/TF-REVPRIX_Note-explicative_2022-06_0.pdf	\N	TF-REVPRIX_Note-explicative_2022-06_0.pdf	application/pdf	190392	\N	\N	50	50
27	\N	2026-06-09 22:39:30.875+01	2026-06-09 22:39:30.875+01	/api/media/file/TF-REVPRIX_Calculateur-Hausses-extraordinaires_V1-20260216.zip	\N	TF-REVPRIX_Calculateur-Hausses-extraordinaires_V1-20260216.zip	application/x-zip-compressed	1222315	\N	\N	50	50
26	\N	2026-06-09 22:39:30.876+01	2026-06-09 22:39:30.876+01	/api/media/file/TF-REVPRIX_Note-explicative_2023-4.pdf	\N	TF-REVPRIX_Note-explicative_2023-4.pdf	application/pdf	250525	\N	\N	50	50
25	\N	2026-06-09 22:39:30.878+01	2026-06-09 22:39:30.878+01	/api/media/file/groupement.jpg	\N	groupement.jpg	image/jpeg	1850	129	28	50	50
24	\N	2026-06-09 22:39:30.879+01	2026-06-09 22:39:30.879+01	/api/media/file/federations%20des%20artisans.jpg	\N	federations des artisans.jpg	image/jpeg	2799	185	81	50	50
23	\N	2026-06-09 22:39:30.88+01	2026-06-09 22:39:30.88+01	/api/media/file/TF-REVPRIX_Note-explicative_2023-03.pdf	\N	TF-REVPRIX_Note-explicative_2023-03.pdf	application/pdf	250525	\N	\N	50	50
22	\N	2026-06-09 22:39:30.882+01	2026-06-09 22:39:30.882+01	/api/media/file/OAI.jpg	\N	OAI.jpg	image/jpeg	6106	249	85	50	50
21	\N	2026-06-09 22:39:30.883+01	2026-06-09 22:39:30.883+01	/api/media/file/chambre%20des%20metiers%20lux.jpg	\N	chambre des metiers lux.jpg	image/jpeg	3611	209	76	50	50
20	\N	2026-06-09 22:39:30.884+01	2026-06-09 22:39:30.884+01	/api/media/file/Government.png	\N	Government.png	image/png	14159	220	69	50	50
19	\N	2026-06-09 22:39:30.885+01	2026-06-09 22:39:30.885+01	/api/media/file/xm%20txt.jpg	\N	xm txt.jpg	image/jpeg	4944	179	101	50	50
18	\N	2026-06-09 22:39:30.886+01	2026-06-09 22:39:30.886+01	/api/media/file/xl%20-%20rtf.jpg	\N	xl - rtf.jpg	image/jpeg	4945	179	101	50	50
17	\N	2026-06-09 22:39:30.887+01	2026-06-09 22:39:30.887+01	/api/media/file/xml%20-%20html.jpg	\N	xml - html.jpg	image/jpeg	5507	200	100	50	50
16	\N	2026-06-09 22:39:30.889+01	2026-06-09 22:39:30.889+01	/api/media/file/xml%20-%20sylk-1.jpg	\N	xml - sylk-1.jpg	image/jpeg	13758	199	208	50	50
15	\N	2026-06-09 22:39:30.89+01	2026-06-09 22:39:30.89+01	/api/media/file/xml%20-%20sylk.jpg	\N	xml - sylk.jpg	image/jpeg	13758	199	208	50	50
14	\N	2026-06-09 22:39:30.891+01	2026-06-09 22:39:30.891+01	/api/media/file/utilisation-3.jpg	\N	utilisation-3.jpg	image/jpeg	34109	665	320	50	50
13	\N	2026-06-09 22:39:30.892+01	2026-06-09 22:39:30.892+01	/api/media/file/gaeb.jpg	\N	gaeb.jpg	image/jpeg	7829	341	86	50	50
12	\N	2026-06-09 22:39:30.894+01	2026-06-09 22:39:30.894+01	/api/media/file/txt.jpg	\N	txt.jpg	image/jpeg	4946	179	101	50	50
11	\N	2026-06-09 22:39:30.894+01	2026-06-09 22:39:30.894+01	/api/media/file/csv.jpg	\N	csv.jpg	image/jpeg	9435	179	179	50	50
10	\N	2026-06-09 22:39:30.895+01	2026-06-09 22:39:30.895+01	/api/media/file/rtf-1.jpg	\N	rtf-1.jpg	image/jpeg	4929	179	101	50	50
9	\N	2026-06-09 22:39:30.897+01	2026-06-09 22:39:30.897+01	/api/media/file/rtf.jpg	\N	rtf.jpg	image/jpeg	4929	179	101	50	50
8	\N	2026-06-09 22:39:30.898+01	2026-06-09 22:39:30.898+01	/api/media/file/html.jpg	\N	html.jpg	image/jpeg	7802	179	156	50	50
7	\N	2026-06-09 22:39:30.899+01	2026-06-09 22:39:30.899+01	/api/media/file/sylk	\N	sylk	image/jpeg	9510	179	179	50	50
6	\N	2026-06-09 22:39:30.901+01	2026-06-09 22:39:30.901+01	/api/media/file/utilisation-1	\N	utilisation-1	image/png	211610	938	351	50	50
5	\N	2026-06-09 22:39:30.902+01	2026-06-09 22:39:30.902+01	/api/media/file/rapports-activites-2021.jpg	\N	rapports-activites-2021.jpg	image/jpeg	359603	626	886	50	50
4	\N	2026-06-09 22:39:30.904+01	2026-06-09 22:39:30.904+01	/api/media/file/rapports-activites-2022.jpg	\N	rapports-activites-2022.jpg	image/jpeg	160929	627	885	50	50
3	\N	2026-06-09 22:39:30.906+01	2026-06-09 22:39:30.906+01	/api/media/file/rapports-activites-2023.jpg	\N	rapports-activites-2023.jpg	image/jpeg	349706	627	885	50	50
2	\N	2026-06-09 22:39:30.907+01	2026-06-09 22:39:30.907+01	/api/media/file/notre-hist.jpg	\N	notre-hist.jpg	image/jpeg	39845	450	337	50	50
1	\N	2026-06-09 22:39:30.908+01	2026-06-09 22:39:30.908+01	/api/media/file/1-barra-25-g-barra-de-cereal-banana-e-mel.jpg	\N	1-barra-25-g-barra-de-cereal-banana-e-mel.jpg	image/jpeg	8271	300	144	50	50
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (id, title, slug, category, published_at, featured_image_id, excerpt, content, seo_meta_title, seo_meta_description, updated_at, created_at, _status, newsletter_sent_at, rubrique) FROM stdin;
1	Titre 3 Act	titre-3-act	actualite	2026-04-29 16:48:06.263+01	77	flksdfmlksd	\N	\N	\N	2026-06-09 22:39:32.321+01	2026-06-09 22:39:32.321+01	published	\N	marches-publics
2	Actualité 2	actualite-2	actualite	2026-04-29 16:47:20.609+01	77	resume resume tesume	\N	\N	\N	2026-06-09 22:39:32.353+01	2026-06-09 22:39:32.353+01	published	\N	performance-energetique
3	Actualité 1	actualite-1	actualite	2026-04-29 16:46:22.888+01	76	Resume resume resume	\N	\N	\N	2026-06-09 22:39:32.363+01	2026-06-09 22:39:32.363+01	published	\N	construction-durable
4	\N	\N	actualite	2026-06-12 00:26:54.287+01	\N	\N	\N	\N	\N	2026-06-12 00:26:54.287+01	2026-06-12 00:26:54.287+01	draft	\N	\N
\.


--
-- Data for Name: newsletter_subscribers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.newsletter_subscribers (id, email, status, unsubscribe_token, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages (id, title, slug, parent_id, menu_order, icon, content, seo_meta_title, seo_meta_description, seo_meta_image_id, updated_at, created_at, _status) FROM stdin;
12	Performance énergétique EU 	performance-energetique-eu	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Tour européen des exigences minimales EE,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Objectifs des EM", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Ressources énergétiques, locales, UE", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article UE 2026 -2070 prévisions évolution Meeting Days et Cooling Days", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article indépendance énergétique (MHI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique du bâtiment", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.231+01	2026-06-09 22:39:33.094+01	published
15	Soumission public	soumission-public	7	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les marchés publics jouent un rôle central dans le secteur de la construction. Leur cadre réglementaire peut s’avérer complexe.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B accompagne les acteurs dans la compréhension des procédures, des obligations légales et des bonnes pratiques liées aux marchés publics. Notre objectif est de rendre l’information accessible, claire et structurée, afin de faciliter la participation et l’exécution des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À travers des ressources, des formations et des échanges, le CRTI-B contribue à des marchés publics plus transparents, plus efficaces et mieux maîtrisés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lois et règlements grand-ducaux", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les lois et règlements en vigueur pour le traitement des marchés publics sont rassemblés sur le site internet ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d68", "type": "link", "fields": {"url": "https://marches.public.lu/fr/legislation.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/legislation.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation des avis de marché", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les avis de marché en cours et les dossiers de soumissions à télécharger  peuvent être consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d69", "type": "link", "fields": {"url": "http://www.marches.public.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise des offres de prix", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les dispositions de remise des offres de prix peuvent être  consultées sur le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6a", "type": "link", "fields": {"url": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "https://marches.public.lu/fr/procedures/dossier-soumission/remise-offres.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise de documents électroniques dans le cadre de la nouvelle loi sur les marchés publics La législation sur les marchés publics permet la remise de documents électroniques. Pour le moment, aucun système électronique validé luxembourgeois n'est opérationnel pour réaliser le transfert des données sécurisées depuis l'annonce de la demande d'offre dans la presse jusqu'à l'ouverture électronique de la soumission et au-delà. De ce fait, la nouvelle réglementation prévoit que la passation électronique des marchés publics se fera en plusieurs étapes. Dès à présent, les soumissionnaires peuvent remettre un résumé du bordereau de soumission sur support électronique. Le dépôt d'une telle offre se fera de la même façon que le dépôt d'une offre papier (envoi recommandé ou remise en mains propres). La procédure de remise d'une offre sur support électronique est déterminée à l'article 51 (2) du règlement grand-ducal du 3 août 2009.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cet article stipule que « les soumissionnaires sont autorisés à utiliser pour la remise de leur offre un résumé du bordereau de soumission à condition qu'ils reconnaissent dans une déclaration écrite que seul le texte du bordereau de soumission original imprimé établi par le pouvoir adjudicateur fait foi. Lesdits résumés doivent obligatoirement reprendre dans le même ordre, munis de la même numérotation, toutes les informations demandées telles que fabricants, types, etc., pour toutes les positions du bordereau original en vue d'assurer le contrôle qualitatif et technique. Le résumé peut être remis par le soumissionnaire sous forme électronique. Tout support informatique doit être accompagné d'une version imprimée, laquelle sera marquée à titre de pièce de soumission et laquelle fera foi en cas de divergence ».", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Remise électronique des offres obligatoire pour les marchés publics au-dessus des seuils européens et DUME", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La loi sur les marches publics du 8 avril 2018 prévoit qu’au-dessus des seuils européens (Livres II et III) la communication électronique devienne obligatoire pour les marchés publics, y compris pour les questions/réponses et le dépôt/ouverture des offres. Un guide technique est disponible sur le portail des marchés publics pour aider les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le DUME (Document Unique de Marché Européen) est une déclaration sur l’honneur créée dans le cadre du plan d’action européen eGovernment 2016-2020, selon le principe « once only ». Il vise à réduire la charge administrative et à faciliter la participation des entreprises, notamment pour les marchés transfrontaliers. Par ce document, l’opérateur économique atteste qu’il ne se trouve pas dans une situation d’exclusion et qu’il respecte les critères de sélection. Le DUME remplace provisoirement les certificats officiels, qui ne seront demandés qu’au soumissionnaire retenu, sauf exception.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Plus d'informations sous le portail des marchés publics : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fafd095a0b8083b2495d6b", "type": "link", "fields": {"url": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.marches.public.lu/fr/procedures/dossier-soumission/dume.html", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.319+01	2026-06-09 22:39:33.16+01	published
30	Révision des prix des matériaux pour les marchés publics	revision-des-prix-des-materiaux-pour-les-marches-publics	7	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des Prix dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Un guide pratique pour comprendre et appliquer correctement les mécanismes de révision des prix des matériaux de construction dans le cadre de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La formule de la \\"révision des prix des matériaux\\", développée par l'Administration des Bâtiments Publics du Luxembourg, permet aux maîtres d'ouvrage de prendre en considération l'évolution des prix des matières premières entre la date de la soumission et celle de la facturation. Pour les marchés publics de travaux, et à la demande de l'entreprise, le maître d'ouvrage procède à cette révision des prix lors du décompte final.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis 2016, le CRTI-B a été mandaté par le Ministère de tutelle pour la mise à jour de la banque de données, la publication des valeurs-seuils et l'assistance aux utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix (dite 'de base')", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Points d'attention :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les valeurs-seuils par corps de métier sont mises à jour ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "tous les trimestres", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lors de l'élaboration de votre offre, veillez à toujours considérer les valeurs-seuils applicables à la date exacte de la soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B met en plus à disposition un simulateur en-ligne du calcul de la révision des prix accessible à tous les acteurs sous", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "autolink", "fields": {"url": "http://revprix.crtib.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "http://revprix.crtib.lu", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "6a0ac9c9276c287ad62ce8a3", "slides": [{"id": "6a0ac9cb9a9a9576a3484c28", "image": 193, "title": "Révision des prix"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "center", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64a7cc0dbbd0b7752bfa1", "rows": [{"id": "69d647e1104c1147367b3e42", "values": {"69d6476b104c1147367b3e3e": "Aménagement extérieur - Ensemble des prestations de construction", "69d64793104c1147367b3e3f": "40", "69d64795104c1147367b3e40": "60", "69d64799104c1147367b3e41": "4.826"}}], "title": "Valeurs-seuils actuels par corps de métier", "columns": [{"id": "69d6476b104c1147367b3e3e", "type": "text", "label": "Nom", "precision": 2}, {"id": "69d64793104c1147367b3e3f", "type": "number", "label": "Main d'oeuvre", "precision": 2}, {"id": "69d64795104c1147367b3e40", "type": "number", "label": "Matériaux", "precision": 2}, {"id": "69d64799104c1147367b3e41", "type": "percentage", "label": "Seuil Spécifique", "precision": 2}], "blockName": "", "blockType": "dynamicGrid"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d64b47c0dbbd0b7752bfa2", "items": [{"id": "69d64b4b104c1147367b3e43", "file": 73, "label": "Explication simplifiée de la méthodolohie (Présentation - Démo)"}], "title": "Documents complémentaires", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Révision des prix extraordinaire (conformément au communiqué ministériel du 31 mars 2022)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Suite à la publication du ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce7", "type": "link", "fields": {"url": "https://marches.public.lu/dam-assets/fr/legislation/circulaires-communications/22-03-31-communication-v3.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "communiqué ministériel relatif à la hausse des matériaux le 31 mars 2022", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et en collaboration étroite entre les partenaires du CRTI-B, une note sur la procédure de révision de prix extraordinaire été développée pour répondre aux hausses des prix des matériaux de construction. Cette note est lié à la note descriptive du CRTI-B qui décrit la procédure de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5066962026669fdbfdce8", "type": "link", "fields": {"url": "http://www.crtib.lu/fr/marches-publics-contrats-types/demande-davances-en-liquidites", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "demande d'avances en liquidités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La note est une recommendation développée consensuellement entre", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdce9", "type": "link", "fields": {"url": "http://mmtp.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Ministère de la Mobilité et des Travaux publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcea", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "L’Ordre des Architectes et des Ingénieurs-Conseils", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdceb", "type": "link", "fields": {"url": "http://www.fda.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 4, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdcec", "type": "link", "fields": {"url": "http://www.groupement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 5, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d5066962026669fdbfdced", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "La Chambre des Métiers", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcee", "items": [{"id": "69d501d19199ce2a83b07bf7", "file": 26, "label": "Téléchargement de la note, version 2 du 30/03/2023"}, {"id": "69d502039199ce2a83b07bf8", "file": 27, "label": "Téléchargement de l'outil de calcul EXCEL, version du 16/02/2026"}], "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d5066962026669fdbfdcef", "items": [{"id": "69d502819199ce2a83b07bf9", "file": 28, "label": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022"}], "title": "Téléchargement des slides explicatifs de la séance d'information tenue les 22 et 27 juin 2022", "blockName": "", "blockType": "downloadLinks"}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d64cdcc0dbbd0b7752bfa4", "type": "link", "fields": {"url": "https://youtu.be/NtJjtHhtJQE", "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Lien vers l'enregistrement de la séance d'information du 27 juin 2022 (FR)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.933+01	2026-06-09 22:39:33.538+01	published
31	Normalisations au Luxembourg	normalisations-au-luxembourg	7	100	settings	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Normalisation au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au sein de l’Union européenne, les organismes nationaux de normalisation ont l’obligation de mettre en application toute norme européenne sur le plan national dans un délai généralement fixé à 6 mois et de retirer toute norme nationale qui serait éventuellement conflictuelle avec cette dernière. De même, un sujet qui a été traité au niveau européen, ne pourra faire l’objet d’une norme nationale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La transposition au niveau national d’une norme européenne consiste à procéder à l’enregistrement du texte intégral de la norme européenne au Journal officiel national. Cet acte confère ainsi aux normes européennes le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au Grand-Duché de Luxembourg, c’est l’ILNAS, respectivement l’Organisme luxembourgeois de normalisation qui se voit confier la mission de « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "publier au Mémorial les références des normes et autres documents normatifs nationaux transposant des normes et autres documents normatifs élaborés et adoptés par les organismes de normalisation européens et internationaux", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}, {"mode": "normal", "text": " ». La mise en application de nouvelles européennes au Grand-Duché de Luxembourg est promulguée par le Directeur de l’ILNAS sur base d’un relevé périodique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il est entendu que chaque organisme national de normalisation apposera son préfixe devant la référence de la norme européenne qu’il transposera au niveau national (ILNAS = Luxembourg ; NF = France ; DIN = Allemagne ; BS = Royaume-Uni, etc.). Il convient donc, au Grand-Duché de Luxembourg, de se référer aux normes « ILNAS EN » puisque celles-ci ont le statut de normes nationales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69fb027d5a0b8083b2495da0", "type": "upload", "value": 105, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "(Schéma sur la normalisation internationale, Source: ILNAS) ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A propos de l’ILNAS", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS, en sa qualité d’organisme luxembourgeois de normalisation (OLN), exerce les missions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Exécuter la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc363fd1a2563b27671946", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/strategie-normative-luxembourgeoise-2024-2030.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stratégie normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et les politiques en matière de normalisation (ICT, Construction, Aérospatial, Conformité, Développement durable et Education & Recherche) définies par le Ministre ayant l’Economie dans ses attributions ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Coordonner l'", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3674d1a2563b27671947", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/experts-normalisation.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "élaboration des norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s et autres documents normatifs nationaux avec les acteurs socio-économiques luxembourgeois ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Transposer et publier des normes et autres documents normatifs élaborés par les organismes européens de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Centraliser et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc369fd1a2563b27671948", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "mettre à disposition les norme", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "s nationales, européennes et internationales ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Représenter le Grand-Duché de Luxembourg auprès des organismes européens (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36c7d1a2563b27671949", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CEN", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc36e7d1a2563b2767194a", "type": "link", "fields": {"url": "https://www.cencenelec.eu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "CENELEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3701d1a2563b2767194b", "type": "link", "fields": {"url": "https://www.etsi.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ETSI", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") et internationaux (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3727d1a2563b2767194c", "type": "link", "fields": {"url": "https://www.iso.org/fr/home.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ISO,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3761d1a2563b2767194d", "type": "link", "fields": {"url": "https://www.iec.ch/homepage", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "IEC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3781d1a2563b2767194e", "type": "link", "fields": {"url": "https://www.itu.int/fr/Pages/default.aspx#/fr", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "ITU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ") de normalisation ainsi que dans l’association ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc379ed1a2563b2767194f", "type": "link", "fields": {"url": "https://associationrnf.org/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "RNF ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ";", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Créer et dissoudre des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37aed1a2563b27671950", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/participer-normalisation/normes-nationales.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "comités techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " de normalisation nationaux ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37dad1a2563b27671951", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/publications.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Promouvoir la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc37f3d1a2563b27671952", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/formations.html?r=f%2Faem_theme%2Ftags_theme%3Aqualite%5Cnormes_normalisation&", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " assurer la formation continue en matière de normalisation ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Faciliter les interactions entre le monde de la", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3818d1a2563b27671953", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/education-recherche/normalisation-recherche.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " recherche", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et celui de la normalisation.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exécution de ses missions relatives à la normalisation l’ILNAS est supporté par l’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3852d1a2563b2767196c", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/acteurs/gie-anec.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Agence pour la normalisation et l’économie de la connaissance (ANEC GIE).\\n (ANEC GIE).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 8}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Achat de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS dispose d’un catalogue en ligne « ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d98", "type": "link", "fields": {"url": "https://ilnas.services-publics.lu/ecnor/home.action", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "e-Shop ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "» de plus de 230 000 documents normatifs qui permet à toute personne intéressée de faire une ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "recherche détaillée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " et d’", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "acheter les normes nationales ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "(ILNAS et DIN),", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": " européennes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (CEN, CENELEC et ETSI) et ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " (ISO et IEC) au format PDF, en licence unique ou licence réseau (sauf DIN). Ce catalogue est disponible en trois langues : allemand, anglais et français.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De plus, l'ILNAS e-Shop offre la possibilité de rester informé en temps réel des changements liés à une ou plusieurs normes grâce à un système de notification personnalisable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Consultation gratuite de normes", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "L’ILNAS offre aux acteurs socio-économiques la possibilité de ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "consulter (gratuitement et en lecture seule)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " toutes les ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "normes nationales, européennes et internationales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " par l'intermédiaire de plusieurs ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38a7d1a2563b2767196d", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/achat-consultation-normes.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "stations de lecture  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": "(les normes DIN sont uniquement disponibles sur la station de lecture dans les locaux de l'ILNAS).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Service de veille normative ciblée", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Quelles sont les normes techniques publiées ou en développement qui concernent votre activité ? Quels sont les comités techniques de normalisation actifs dans votre secteur d’activité ? Disposez-vous des versions les plus récentes des normes utiles à votre activité ?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ILNAS, avec le support de l’ANEC GIE, propose à tout acteur économique national ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38e7d1a2563b2767196e", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/produits-et-services.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "un service de veille normative", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " pour répondre à ces questions.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Liens utiles en lien avec le domaine de la construction", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-      ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc38fed1a2563b2767196f", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "  Analyse normative sectorielle", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-        ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc3917d1a2563b27671970", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/fr/normes-normalisation/secteurs/construction.html", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Fiches techniques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-       ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fc392dd1a2563b27671971", "type": "link", "fields": {"url": "https://portail-qualite.public.lu/dam-assets/publications/normalisation/2024/introduction-a-la-normalisation-technique-du-secteur-de-la-construction-v1-0.pdf", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": " Introduction à la normalisation technique", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnes de contact", "type": "text", "style": "", "detail": 0, "format": 9, "version": 1}], "direction": null, "textStyle": "", "textFormat": 9}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Monsieur Jérôme HOEROLD, Chef de département (", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9e", "type": "link", "fields": {"url": "mailto:jerome.hoerold@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "jerome.hoerold@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "-         Madame Victoria MLETZAK, Responsable secteur « Construction & Normalisation ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "(", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69fb027a5a0b8083b2495d9f", "type": "link", "fields": {"url": "mailto:victoria.mletzak@ilnas.etat.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "victoria.mletzak@ilnas.etat.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ")", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.985+01	2026-06-09 22:39:33.562+01	published
7	Marchés publics	mpu	\N	10	building	\N	\N	\N	\N	2026-06-09 22:39:32.97+01	2026-06-09 22:39:32.969+01	published
33	CONSTRUCTION DURABLE	construction-durable	\N	30	leaf	\N	\N	\N	\N	2026-06-09 22:39:33.614+01	2026-06-09 22:39:33.614+01	published
10	Dictionnaire 	dictionnaire-	\N	50	book	\N	\N	\N	\N	2026-06-09 22:39:33.05+01	2026-06-09 22:39:33.05+01	published
32	Qui sommes nous ? 	le-crtib-b	\N	60	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre mission ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "CRTI-B – Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": ", accompagne l’évolution du secteur de la construction au Luxembourg. Plateforme neutre, ouverte et concertée, il réunit les acteurs publics et privés autour d’un objectif commun : construire mieux, plus efficacement et de manière plus durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre rôle est de créer des bases communes. Dans un secteur où de nombreux intervenants travaillent ensemble — maîtres d’ouvrage, administrations, architectes, ingénieurs-conseils, entreprises, artisans et experts techniques — la clarté des règles, des standards et des processus est essentielle. Le CRTI-B développe et met à jour des documents de référence, notamment les clauses contractuelles et les clauses techniques, afin de faciliter les marchés publics et d’améliorer la qualité des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Mais notre mission ne s’arrête pas à la standardisation. Le secteur de la construction évolue rapidement : digitalisation, performance énergétique, économie circulaire, réemploi des matériaux, simplification administrative et interopérabilité des données deviennent des enjeux incontournables. Le CRTI-B aide à transformer ces défis en solutions concrètes, adaptées au contexte luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La digitalisation constitue un levier majeur. Le CRTI-B contribue à la mise en place de méthodes et d’outils permettant de mieux partager les données, de simplifier les démarches et de soutenir le principe du « once only » dans la construction. L’objectif est clair : une information fournie une fois doit pouvoir être réutilisée de manière fiable par les acteurs autorisés, sans multiplication inutile des saisies, documents ou interfaces. L’interopérabilité des données et la coordination entre plateformes, administrations et acteurs privés peut de cette façon éviter la fragmentation des initiatives, réduire les doublons et faciliter les démarches pour tous les intervenants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Nous travaillons avec tous les acteurs du terrain pour identifier les besoins réels et construire des solutions applicables. Cette approche concertée permet de développer des standards acceptés par le secteur et réellement utilisables dans les projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La construction durable est un autre axe fort de notre action. Le CRTI-B soutient le développement de pratiques plus circulaires, notamment la structuration de la filière du réemploi. Mieux valoriser les matériaux existants, réduire les déchets et renforcer l’indépendance du secteur face aux tensions internationales sur les ressources font partie des priorités des années à venir.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Concrètement, le CRTI-B agit pour :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "élaborer et mettre à jour les clauses contractuelles et techniques ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "développer des standards communs pour les marchés, les données et les processus ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "accompagner la digitalisation du secteur, notamment à travers le BIM et les outils collaboratifs ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "favoriser la simplification administrative et l’interopérabilité ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "soutenir la construction durable, l’économie circulaire et le réemploi ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "contribuer aux réflexions sur la performance énergétique des bâtiments ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "organiser des groupes de travail réunissant experts publics et privés ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "informer, former et assister les utilisateurs des documents et outils du CRTI-B.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B est avant tout un espace de travail commun. Sa valeur ajoutée réside dans sa neutralité, sa capacité à fédérer et sa proximité avec les besoins du secteur. En rassemblant les compétences et en facilitant le consensus, il contribue à rendre la construction au Luxembourg plus cohérente, plus efficace, plus résiliente et mieux préparée aux défis de demain.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.587+01	2026-06-09 22:39:33.587+01	published
2	Actualités	actualites-bim	34	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.849+01	2026-06-09 22:39:32.842+01	published
4	Actualités	actualites-mpu	7	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:33.943+01	2026-06-09 22:39:32.895+01	published
9	Actualités	actualites-performance-energetique	14	100	calendar	\N	\N	\N	\N	2026-06-09 22:39:34.143+01	2026-06-09 22:39:33.026+01	published
3	Formation 	formation-bim	34	100	calendar	\N	\N	\N	\N	2026-06-10 00:12:59.851+01	2026-06-09 22:39:32.873+01	published
5	Formation 	formation-mpu	7	100	\N	\N	\N	\N	\N	2026-06-10 00:12:59.956+01	2026-06-09 22:39:32.916+01	published
8	Formation 	formation-performance-energetique	14	100	\N	\N	\N	\N	\N	2026-06-10 00:13:00.024+01	2026-06-09 22:39:33.001+01	published
11	Performance énergétique du bâtiment	performance-energetique-batiment	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "6a0acb00276c287ad62ce8a4", "slides": [{"id": "6a0acb089a9a9576a3484c29", "image": 194, "title": "-"}], "blockName": "", "blockType": "photoHeroCarousel", "autoPlayMs": 5000}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article couts des mesures énergétiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Gebäudetyp E", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article VNC", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Simulateur tec-éco PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Facteur de dégradation des PV", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Batteries électriques, amortisation écono-écolo émer", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article  Étanchéité à l’air", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article EE et qualité architecturale", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Influence EE sur la valeur immo", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.189+01	2026-06-09 22:39:33.072+01	published
13	Performance énergétique LU 	performance-energetique-lu	14	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance vs Efficacité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Bâtiments autonomes – influences réseau", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Indépendance énergétique Merfindahl Hirschmann Index", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Eff énergétique et la productivité", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article Performance énergétique et coûts d’externalités", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Article incidences territoriales des émissions de polluants liées à la production chaleur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Performance énergétique EU", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.274+01	2026-06-09 22:39:33.112+01	published
18	Guide d'application	guide-dapplication	34	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Guide d’application", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ère de la digitalisation est en plein essor et a désormais pénétrée l’ensemble de nos secteurs d’activités, parmi lesquels celui de la construction. Cette évolution constitue un défi non négligeable que le secteur de la construction est prêt à relever ; et c’est une réelle chance pour ce secteur d’avancer davantage dans l’intégration du numérique dans ses démarches. Si on parle de « digitalisation » et de « construction », un sujet-clé est incontournable : le « Building Information Modeling », couramment appelé « BIM » qui révolutionnera notre métier, la manière de concevoir un projet et les habitudes de travail d’une manière comparable voire supérieure à ce que fût l’introduction du « dessin assisté par ordinateur » à partir des années ’80.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En effet, le procédé BIM c’est la capacité de créer des plus-values aux différentes étapes d’un projet de construction et d’en optimiser les processus. De cette manière nous arrivons à améliorer la qualité du bâti tout en augmentant l’effectivité des acteurs de la construction et la productivité de tout le secteur. De plus, avec le BIM nous atteindrons à moyen et long terme les objectifs fixés dans le cadre de la Troisième Révolution industrielle, notamment en évoluant vers des bâtiments répondant aux impératifs d’une économie circulaire. Voilà pourquoi, dans le cadre de l’étude Rifkin publié fin 2016, le BIM est désigné comme étant l’un des principaux piliers des futures évolutions dans le domaine de la construction. La transition vers l’ère du « Digital Lëtzebuerg » présente donc de grandes opportunités qu’il s’agira de saisir. Je suis persuadé que la bonne collaboration entre tous les acteurs constituera un atout majeur et profitera pleinement au développement du secteur de la construction et à plus forte raison à notre pays. Cependant, il ne faut pas perdre de vue qu’une telle évolution technologique ne peut réussir que si elle intègre toutes les parties concernées et pas uniquement la maîtrise d’ouvrage et la maîtrise d’œuvre, mais aussi les entreprises et en particulier les PME.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "C’est pourquoi le CRTI-B (Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment) a créé en 2015 un groupe de travail réunissant l’ensemble des acteurs luxembourgeois de la construction avec pour objectif d’élaborer, dans un travail collaboratif, un document de référence pour la collaboration BIM au Luxembourg. Ce « Guide d’application BIM », proposé au secteur luxembourgeois de la construction, constitue la première étape d’un accompagnement dans l’implémentation du BIM et la transition des entreprises vers le numérique. Nous aimerions enfin en profiter pour remercier tous les partenaires, les institutions et fédérations ainsi que toutes les personnes impliquées dans ce projet pour leur apport, leur travail précieux et leurs efforts qui ont permis de faire du projet « BIM au Luxembourg » un véritable travail collaboratif entre tous les acteurs du secteur, ce qui correspond pleinement à l’esprit du CRTI-B ! Aussi, ce Guide est la preuve que le travail collaboratif, le partage et l’échange des compétences permettent d’avancer de manière optimisée en intégrant un haut degré de qualité et à terme de faire évoluer le secteur dans sa globalité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.458+01	2026-06-09 22:39:33.236+01	published
22	grandchild page	grandchild-page	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "quote", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Text text", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "block", "fields": {"id": "69d873eb6019d85c589241df", "root": {"name": "person 1", "role": "admin", "photo": 71, "children": [{"id": "69d873f91955713af1612233", "name": "person 2", "role": "subordinate", "photo": 71}]}, "blockName": "", "blockType": "organogram"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.554+01	2026-06-09 22:39:33.34+01	published
24	Prestations Standardisées	prestations-standardisees	7	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bibliothèque des prestations standardisées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La bibliothèque des prestations standardisées du CRTI-B met à disposition des acteurs du secteur de la construction des documents de référence destinés à faciliter l’élaboration, l’analyse et la comparaison des bordereaux. En proposant des descriptions harmonisées et reconnues par le secteur, elle constitue un gain concret pour les concepteurs comme pour les entreprises : les concepteurs disposent d’une base commune pour structurer leurs dossiers de soumission, tandis que les entreprises peuvent répondre plus efficacement sans devoir réanalyser en détail, d’un bordereau à l’autre et d’un concepteur à l’autre, des positions susceptibles de varier dans leur formulation, leur contenu ou leur niveau d’exigence. Cette standardisation favorise ainsi une meilleure lisibilité des prestations, réduit les risques d’interprétation divergente et améliore la qualité des offres remises. In fine, elle crée une valeur ajoutée pour les trois grandes catégories d’acteurs réunies au sein du CRTI-B : les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les documents publiés dans cette bibliothèque s’inscrivent dans la mission du CRTI-B de promouvoir la standardisation, la transparence et la simplification des procédures dans le secteur de la construction luxembourgeois. Ils ont vocation à servir de base de travail pour les marchés publics et privés, tout en pouvant être adaptés aux spécificités de chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les positions actuellement disponibles, relatives au gros œuvre et aux infrastructures, sont en cours de mise à jour. Cette révision vise notamment à mieux intégrer les principes de l’économie circulaire, les exigences liées à la réutilisation et à la gestion responsable des ressources, ainsi que l’interopérabilité avec les maquettes BIM. Les travaux en cours porteront également sur l’intégration progressive des prestations standardisées dans la gestion digitale des bordereaux, afin de soutenir la digitalisation des processus et d’améliorer la continuité des données tout au long du cycle de vie des projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les prochaines années, la bibliothèque des positions standardisées sera progressivement complétée par des contenus couvrant les métiers du parachèvement et de la finition, ainsi que les installations techniques. Cette extension permettra de renforcer la cohérence des documents de soumission et d’offrir au secteur un référentiel plus complet, couvrant un champ élargi de prestations de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65ce7c0dbbd0b7752bfaf", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d65db2104c1147367b3e4e", "zip": 157, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format GAEB XML", "versao": "5"}, {"id": "69fd86cfb3250ff904d64fa2", "zip": 154, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format HTML", "versao": "5"}, {"id": "69fd86ecb3250ff904d64fa3", "zip": 158, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format RTF", "versao": "5"}, {"id": "69fd872bb3250ff904d64fa4", "zip": 159, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte dans autre colonne", "versao": "5"}, {"id": "69fd875bb3250ff904d64fa5", "zip": 161, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format SYLK Texte en dessous titre", "versao": "5"}, {"id": "69fd8783b3250ff904d64fa6", "zip": 162, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format SYLK Texte dans autre colonne", "versao": "5"}, {"id": "69fd87b8b3250ff904d64fa7", "zip": 163, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format TXT", "versao": "5"}, {"id": "69fd87ebb3250ff904d64fa8", "zip": 168, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format PDF", "versao": "5"}, {"id": "69fd8814b3250ff904d64fa9", "zip": 160, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "Catalogue complet Format CSV Texte en dessous titre", "versao": "5"}, {"id": "69fd884ab3250ff904d64faa", "xls": null, "zip": 166, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tNotes explicatives: Evolution par rapport à la version du 25.04.2008", "versao": "5"}, {"id": "69fd887eb3250ff904d64fab", "xls": null, "zip": 167, "data": "2012-06-22T12:00:00.000Z", "numero": "BIBL", "titulo": "\\tCatalogue complet Format XML", "versao": "5"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.649+01	2026-06-09 22:39:33.389+01	published
25	Clauses Techniques	clauses-techniques	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses techniques générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses techniques générales, ou CTG, constituent un référentiel technique commun pour les travaux de construction au Luxembourg. Elles définissent, par corps de métier, les exigences applicables à l’exécution des prestations, aux matériaux, aux méthodes de mise en œuvre, aux contrôles, aux principes de mesurage et de décompte, aux tolérances et aux conditions de réception. Elles contribuent ainsi à établir un cadre technique clair, cohérent et partagé entre les maîtres d’ouvrage, les concepteurs et les entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans les marchés publics, les CTG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, dont l’article 51, paragraphe (2), prévoit que des règlements grand-ducaux peuvent instituer des cahiers spéciaux des charges standardisés, publiés par voie électronique. En application de ce cadre, le règlement grand-ducal du 24 mars 2014 portant institution de cahiers spéciaux des charges standardisés en matière de marchés publics prévoit, à son article 1er, paragraphe (4), que le recours à ces cahiers spéciaux des charges standardisés est obligatoire. Les CTG constituent dès lors une référence obligatoire pour les marchés publics de travaux concernés, conformément aux règlements ministériels instituant les cahiers spéciaux des charges standardisés par corps de métier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation avec les acteurs du secteur, les CTG reflètent les pratiques reconnues, les évolutions normatives et les spécificités du contexte luxembourgeois. Depuis le 1er janvier 2026, et en collaboration avec le Ministère de la Mobilité et des Travaux publics, les CTG peuvent être révisées selon les besoins et jusqu’à deux fois par an. Cette nouvelle procédure repose notamment sur la publication d’un texte consolidé reprenant l’ensemble des CTG en vigueur, publié par règlement grand-ducal, afin d’améliorer la lisibilité du cadre applicable et de faciliter l’identification de la version en vigueur à la date de publication d’une soumission.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette mise à jour régulière permet d’intégrer plus rapidement les développements techniques, les nouvelles exigences réglementaires, les enjeux de durabilité et les besoins exprimés par le terrain. À travers les CTG, le CRTI-B contribue à renforcer la qualité de la construction, la sécurité juridique et technique des projets, ainsi que la cohérence des pratiques dans le secteur luxembourgeois de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65782c0dbbd0b7752bfac", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69fc5e6f4efe7b6962af4881", "pdf": 151, "data": "2002-03-22T12:00:00.000Z", "numero": "CTG0", "titulo": "Clauses techniques générales applicables à tous les corps de métiers", "versao": "4"}, {"id": "69fc5d444efe7b6962af487d", "pdf": 150, "data": "2002-10-31T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage", "versao": "2"}, {"id": "69fc5d474efe7b6962af487e", "pdf": 149, "data": "2003-01-15T12:00:00.000Z", "numero": "CTG002", "titulo": "Travaux de terrassement", "versao": "3"}, {"id": "69fc5d4a4efe7b6962af487f", "pdf": 148, "data": "2007-12-07T12:00:00.000Z", "numero": "CTG009", "titulo": "Travaux de canalisation", "versao": "4"}, {"id": "69fc5d4e4efe7b6962af4880", "pdf": 147, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG010", "titulo": "Travaux d’aménagement extérieur : Pavages, dallages et bordures", "versao": "1"}, {"id": "69fc5c2c4efe7b6962af4874", "pdf": 146, "data": "2002-10-25T12:00:00.000Z", "numero": "CTG011", "titulo": "Travaux de façades", "versao": "2"}, {"id": "69fc5c374efe7b6962af4875", "pdf": 145, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie", "versao": "3"}, {"id": "69fc5c3c4efe7b6962af4876", "pdf": 144, "data": "2007-07-10T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton", "versao": "6"}, {"id": "69fc5c434efe7b6962af4877", "pdf": 143, "data": "2008-04-24T12:00:00.000Z", "numero": "CTG014", "titulo": "Travaux de pierre naturelle", "versao": "1"}, {"id": "69fc5ab74efe7b6962af486f", "pdf": 142, "data": "2019-05-25T12:00:00.000Z", "numero": "CTG016", "titulo": "Travaux de construction en bois", "versao": "3"}, {"id": "69fc5ae44efe7b6962af4873", "pdf": 141, "data": "2019-04-15T12:00:00.000Z", "numero": "CTG017", "titulo": "Travaux de constructions métalliques", "versao": "3"}, {"id": "69fc5ac74efe7b6962af4870", "pdf": 140, "data": "2002-10-29T12:00:00.000Z", "numero": "CTG018", "titulo": "Travaux d'étanchéité", "versao": "2"}, {"id": "69fc5acc4efe7b6962af4871", "pdf": 139, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG020", "titulo": "Travaux de couverture et d'étanchéité de toitures", "versao": "3"}, {"id": "69fc5ad04efe7b6962af4872", "pdf": 138, "data": "2019-07-25T12:00:00.000Z", "numero": "CTG022", "titulo": "Travaux de ferblanterie", "versao": "4"}, {"id": "69fc59574efe7b6962af486a", "pdf": 137, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG023", "titulo": "Enduits intérieurs, plâtrerie et stucs", "versao": "4"}, {"id": "69fc595b4efe7b6962af486b", "pdf": 136, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG024", "titulo": "Carreaux et dalles de revêtement", "versao": "3"}, {"id": "69fc595e4efe7b6962af486c", "pdf": 135, "data": "2003-03-25T12:00:00.000Z", "numero": "CTG025", "titulo": "Chapes et sols coulés", "versao": "2"}, {"id": "69fc59624efe7b6962af486d", "pdf": 134, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG026", "titulo": "Travaux de pose de parquets massifs", "versao": "1"}, {"id": "69fc59654efe7b6962af486e", "pdf": 133, "data": "2003-03-24T12:00:00.000Z", "numero": "CTG027", "titulo": "Travaux de menuiserie", "versao": "3"}, {"id": "69fc570f4efe7b6962af4861", "pdf": 130, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG028", "titulo": "Travaux de quincaillerie", "versao": "1.1"}, {"id": "69fc55f94efe7b6962af485f", "pdf": 129, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG031", "titulo": "Menuiserie métallique: fenêtres en aluminium et fenêtres en acier", "versao": "3"}, {"id": "69fc56954efe7b6962af4860", "pdf": 128, "data": "2015-11-04T12:00:00.000Z", "numero": "CTG032", "titulo": "\\tMétallerie et serrurerie", "versao": "3"}, {"id": "69fc55f14efe7b6962af485e", "pdf": 127, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG034", "titulo": "Travaux de peinture", "versao": "4"}, {"id": "69fc55e04efe7b6962af485d", "pdf": 126, "data": "2007-06-18T12:00:00.000Z", "numero": "CTG035", "titulo": "Travaux de tapisserie", "versao": "3"}, {"id": "69fc55624efe7b6962af485c", "pdf": 125, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG036", "titulo": "Travaux de revêtements de sol", "versao": "3"}, {"id": "69fc551e4efe7b6962af485b", "pdf": 124, "data": "2003-03-27T12:00:00.000Z", "numero": "CTG037", "titulo": "Travaux de vitrerie", "versao": "2"}, {"id": "69fc54ce4efe7b6962af485a", "pdf": 123, "data": "2025-04-01T12:00:00.000Z", "numero": "CTG038", "titulo": "Travaux de façades ventilées", "versao": "1"}, {"id": "69fc54754efe7b6962af4859", "pdf": 122, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG039", "titulo": "Ouvrages secs", "versao": "3"}, {"id": "69fc52164efe7b6962af4857", "pdf": 121, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude", "versao": "6"}, {"id": "69fc51c54efe7b6962af4856", "pdf": 120, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires", "versao": "6"}, {"id": "69fc51924efe7b6962af4855", "pdf": 119, "data": "2022-05-23T12:00:00.000Z", "numero": "CTG047", "titulo": "Travaux d'isolation et de coupe-feu des installations techniques", "versao": "2"}, {"id": "69fc505f4efe7b6962af4854", "pdf": 118, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG049", "titulo": "Travaux d'installations sprinkler", "versao": "3"}, {"id": "69fc50204efe7b6962af4853", "pdf": 117, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG052", "titulo": "Travaux d'installations électriques à moyenne tension", "versao": "4"}, {"id": "69fc4fec4efe7b6962af4852", "pdf": 116, "data": "2018-08-14T12:00:00.000Z", "numero": "CTG053", "titulo": "Travaux d'installations électriques à basse tension", "versao": "4"}, {"id": "69fc4f5f4efe7b6962af4851", "pdf": 115, "data": "2019-12-20T12:00:00.000Z", "numero": "CTG061", "titulo": "Travaux d'installations électriques, courant faible", "versao": "1"}, {"id": "69fc4efc4efe7b6962af4850", "pdf": 114, "data": "2022-01-31T12:00:00.000Z", "numero": "CTG069", "titulo": "Ascenseurs, escaliers mécaniques, trottoirs roulants et installations de levage", "versao": "5"}, {"id": "69fc4dc54efe7b6962af484d", "pdf": 111, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG176", "titulo": "Cogénération/Procédure de sélection", "versao": "1"}, {"id": "69fc4e414efe7b6962af484e", "pdf": 112, "data": "2003-03-31T12:00:00.000Z", "numero": "CTG175", "titulo": "Cogénération/Vademecum", "versao": "1"}, {"id": "69fc4eb34efe7b6962af484f", "pdf": 113, "data": "2021-07-06T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation", "versao": "5"}, {"id": "69fc4d874efe7b6962af484c", "pdf": 110, "data": "2002-07-17T12:00:00.000Z", "numero": "CTG177", "titulo": "Cogénération/Dossier de soumission pour fourniture de chaleur", "versao": "2"}, {"id": "69fc4d2a4efe7b6962af484b", "pdf": 109, "data": "2010-03-26T12:00:00.000Z", "numero": "CTG178", "titulo": "Cogénération/Contrat-type de fourniture de chaleur", "versao": "3"}, {"id": "69fc4bb44efe7b6962af4848", "pdf": 107, "data": "2002-06-26T12:00:00.000Z", "numero": "CTG179", "titulo": "Dossier de soumission pour construction et exploitation", "versao": "2"}, {"id": "69d65784104c1147367b3e4c", "pdf": 106, "data": "2009-12-22T12:00:00.000Z", "numero": "CTG180", "titulo": "Cogénération - Etablissement de formules de révision du prix de vente de la chaleur", "versao": "2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.715+01	2026-06-09 22:39:33.42+01	published
26	Guide de la Construction durable	guide-de-la-construction-durable	33	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "S'inscrire dans une perspective de développement durable signifie répondre aux besoins des générations actuelles sans compromettre les capacités des générations futures à répondre à leurs propres besoins. Cette approche résulte de la reconnaissance qu'un équilibre écologique ne peut être obtenu qu'en intégrant au même titre l’efficacité économique et l'équité sociale.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "Guide de la construction durable", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " s'adresse en premier lieu aux maîtres d'ouvrage et aux maîtres d'oeuvre. Il se veut un outil d'aide destiné à permettre l'intégration des principes du développement durable dès les premiers stades des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Télécharger le guide en version imprimable (PDF, 2 300 Ko)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.763+01	2026-06-09 22:39:33.447+01	published
27	Projet de CTG: Déconstruction et démolition	projet-de-ctg-deconstruction-et-demolition	33	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En collaboration étroite entre les partenaires du CRTI-B, le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9e", "type": "link", "fields": {"url": "http://www.list.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "LIST ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ", le ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdd9f", "type": "link", "fields": {"url": "https://mecdd.gouvernement.lu/", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Ministère de l’Environnement, du Climat et du Développement durable", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " et une multitude d'opérateurs économique du métier, un 'projet de CTG' a été développé pour structurer et harmoniser les projets de déconstruction et de démolition dans le contexte de marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document s'inscrit dans l'initiative de mieux répondre aux besoins de la législation luxembourgeoise relative aux déchets qui vise non seulement la prévention de ces déchets mais privilégie aussi la considération du réemploi de matériaux .", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le document est publié sous forme de 'projet de CTG' et n'a pas de caractère obligatoire.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l'objectif de vouloir améliorer le document de manière constante, le CRTI-B remercie tous les acteurs du secteur de bien vouloir nous faire part des retours pratiques (avec ou sans l'utilisation du projet de CTG).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda0", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_fr_0.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version FR", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"id": "69d519da62026669fdbfdda1", "type": "link", "fields": {"url": "https://www.crtib.lu/sites/crtib/files/inline-files/CTG003-V1Projet_de.pdf", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "Télécharger le projet de CTG003: Décontruction et démolition en version DE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte de la déconstruction, de la démolition et du réemploi des matériaux s'inscrit aussi le 'Guide de la déconstruction', publié par le Ministère de l’Environnement, du Climat et du Développement durable en partenariat avec le LIST. Il peut être téléchargé sur ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d519da62026669fdbfdda2", "type": "link", "fields": {"url": "https://environnement.public.lu/fr/offall-ressourcen/types-de-dechets/dechets-construction-demolition-dcd/guide-deconstruction.html", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "emwelt.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.803+01	2026-06-09 22:39:33.469+01	published
28	Clauses Contractuelles 	contrats-types	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Clauses contractuelles générales", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les clauses contractuelles générales, ou CCG, constituent le document contractuel de référence pour les marchés publics de travaux. Elles fixent les règles qui organisent la relation entre le maître d’ouvrage et l’entreprise, depuis la remise de l’offre jusqu’à la clôture du marché. Elles encadrent notamment les modalités d’exécution, les délais, les paiements, les modifications de prestations, les décomptes, les pénalités, la réception, les garanties et le traitement des éventuels différends.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Leur importance tient au fait qu’elles traduisent les principes généraux des marchés publics dans un cadre opérationnel directement applicable aux projets de construction. Elles permettent de définir, dès le lancement du marché, les responsabilités de chacun, les procédures à respecter et les conséquences contractuelles des décisions prises en cours d’exécution. À ce titre, les CCG constituent l’un des outils les plus importants pour assurer la bonne gestion administrative, financière et contractuelle d’un marché de travaux.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG s’inscrivent dans le cadre de la loi modifiée du 8 avril 2018 sur les marchés publics, notamment son article 51, paragraphe (2), qui prévoit la possibilité d’instituer des cahiers spéciaux des charges standardisés. En application de ce cadre, le règlement ministériel du 20 avril 2018 institue le cahier spécial des charges standardisé relatif aux clauses contractuelles générales applicables à tous les marchés publics de travaux relatifs au secteur du bâtiment. Ces clauses doivent être intégrées dans le dossier de soumission et s’imposent comme référence contractuelle pour les marchés concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour les maîtres d’ouvrage, les CCG offrent un cadre de pilotage fiable pour suivre l’exécution du marché, traiter les adaptations nécessaires et sécuriser les décisions prises tout au long du projet. Pour les concepteurs et les gestionnaires de projets, elles facilitent la préparation des dossiers, l’analyse des situations contractuelles et l’accompagnement du maître d’ouvrage pendant l’exécution. Pour les entreprises, elles apportent une meilleure visibilité sur les conditions dans lesquelles les travaux seront commandés, exécutés, rémunérés, modifiés, contrôlés et réceptionnés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les CCG contribuent ainsi à renforcer la prévisibilité des marchés et à réduire les zones d’incertitude susceptibles de générer des désaccords. En définissant des règles communes et équilibrées, elles favorisent une gestion plus transparente des projets, une meilleure compréhension des droits et obligations de chaque partie et une résolution plus structurée des difficultés pouvant apparaître en cours de chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Élaborées dans un esprit de concertation entre les représentants des maîtres d’ouvrage, des concepteurs et des entreprises, les CCG reflètent la mission du CRTI-B de produire des documents contractuels équilibrés, adaptés aux pratiques luxembourgeoises et utilisables par l’ensemble du secteur. Elles constituent un instrument essentiel pour renforcer la confiance entre les acteurs, améliorer la qualité des marchés publics de travaux et soutenir une exécution plus efficace et mieux maîtrisée des projets de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2018-10-17T12:00:00.000Z", "numero": "CCG", "titulo": "Clauses contractuelles ", "versao": "10.2"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.844+01	2026-06-09 22:39:33.49+01	published
29	Conditions minima de participation à la soumission	conditions-minima-de-participation-a-la-soumission	7	100	settings	\N	\N	\N	\N	2026-06-09 22:39:34.888+01	2026-06-09 22:39:33.513+01	published
21	Edition Father Page 	father-page-1	\N	998	\N	\N	\N	\N	\N	2026-06-09 22:39:33.319+01	2026-06-09 22:39:33.319+01	published
20	Grandchild page 1	grandchild-page-1	\N	997	\N	\N	\N	\N	\N	2026-06-09 22:39:33.294+01	2026-06-09 22:39:33.294+01	published
23	Modèles de contrats	contrats-type	7	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bienvenue dans la bibliothèque officielle des contrats types destinés aux marchés publics. L'utilisation de ces modèles standardisés est fondamentale pour garantir la conformité de vos engagements et assurer une sécurité juridique optimale à toutes les parties (pouvoir adjudicateur et entreprises).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En vous appuyant sur ces documents officiels préétablis, vous facilitez la préparation de vos procédures, réduisez les risques de litiges liés à la rédaction contractuelle et sécurisez la gestion de vos marchés publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d6638ac0dbbd0b7752bfb4", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d6638d104c1147367b3e53", "pdf": 170, "data": "1996-01-21T12:00:00.000Z", "numero": "DNO001", "titulo": "Contrat de coordination", "versao": "1"}, {"id": "69fd90e8b3250ff904d64fac", "pdf": 171, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO002", "titulo": "\\tContrat de sous-traitance", "versao": "1"}, {"id": "69fd9121b3250ff904d64fae", "pdf": 172, "data": "2000-06-13T12:00:00.000Z", "numero": "DNO003", "titulo": "Contrat-type d'association momentanée", "versao": "1"}]}, "format": "", "version": 2}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Conseils d'utilisation et Bonnes Pratiques", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Afin d'optimiser l'utilisation de ces contrats types, nous vous recommandons de suivre ces quelques directives :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Vérification de la version :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Assurez-vous toujours de télécharger la version la plus récente du contrat sur cette page avant de finaliser vos dossiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Personnalisation :", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " Bien que ces contrats soient standardisés, chaque projet est unique. Prêtez une attention particulière au remplissage des annexes et des clauses spécifiques liées à votre marché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Besoin d'aide ?", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": " En cas de doute sur l'application juridique d'un modèle précis, référez-vous à nos guides d'accompagnement ou aux circulaires ministérielles en vigueur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:34.601+01	2026-06-09 22:39:33.363+01	published
19	Equipe 	equipe	32	100	\N	\N	\N	\N	\N	2026-06-09 22:39:34.508+01	2026-06-09 22:39:33.265+01	published
1	Indemnités	indemnites	7	100	star	\N	\N	\N	\N	2026-06-09 22:39:33.798+01	2026-06-09 22:39:32.765+01	published
16	BIM IDS 	bim-ids-	34	100	external-link	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "BIM IDS ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le secteur de la construction est en forte croissance mais souffre de problèmes de rentabilité liés aux erreurs de processus et à la fragmentation des échanges. La numérisation, notamment via la technologie BIM, apporte une solution en permettant de modéliser les projets en 3D avec des données géométriques et alphanumériques. Les analyses automatisées des maquettes BIM (détection de clash, vérifications, substitutions graphiques suivant propriétés) réduisent les erreurs de conception et facilitent la compréhension des projets sur chantier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cependant, malgré ces avantages, des ambiguïtés apparaissent fréquemment dans les échanges d’informations entre partenaires. Chaque acteur utilise le BIM selon ses propres conventions, ce qui complique la collaboration. Les modèles sont parfois incompatibles, incomplets ou structurés différemment, rendant leur réutilisation difficile et entraînant souvent une re-modélisation complète. À cela s’ajoutent les différences de logiciels et de formats de fichiers.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le format IFC, standard ouvert et normé ISO, permet en théorie un échange universel des maquettes. En pratique, sa mise en œuvre reste complexe : gestion des propriétés, mapping IFC et règles spécifiques demandent un investissement important en configuration, souvent à répéter pour chaque projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Face à ces difficultés, il est nécessaire de disposer d’une référence commune pour tous les acteurs. C’est dans cette optique que Buildwise (Belgique) et le CRTI-B (Luxembourg) ont collaboré afin de définir des règles d’échange harmonisées, basées sur la norme européenne ISO 7817-1:2024. La plateforme BIMids propose ces exigences sous forme de fiches claires et accessibles, facilitant leur compréhension par l’ensemble des professionnels.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"id": "69faed823910505f885ca5fb", "type": "link", "fields": {"url": "http://www.bimids.eu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.bimids.eu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.366+01	2026-06-09 22:39:33.186+01	published
36	Notre histoire	notre-histoire	32	100	building	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre histoire", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE, Centre de Ressources des Technologies et de l’Innovation pour le Bâtiment, trouve ses origines en 1990. À cette époque, le secteur luxembourgeois de la construction exprimait déjà un besoin clair : disposer d’un lieu neutre permettant aux acteurs publics et privés de travailler ensemble sur des bases communes.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pendant plus de vingt ans, le CRTI-B a fonctionné au sein du Centre de Recherche Public Henri Tudor. Cette première phase a permis de poser les fondations de son action : développer des documents de référence, structurer les marchés publics de construction et créer un langage commun entre maîtres d’ouvrage, maîtres d’œuvre et entreprises.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au fil des années, les groupes de travail du CRTI-B ont élaboré des clauses contractuelles et des clauses techniques couvrant progressivement de nombreux corps de métier du bâtiment, des installations techniques et du parachèvement. Ces documents sont devenus des références importantes pour la préparation et l’exécution des marchés publics, en apportant davantage de clarté, de cohérence et de sécurité aux projets.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une étape déterminante a été franchie avec le règlement grand-ducal du 24 mars 2014, qui a consacré l’importance des cahiers spéciaux des charges standardisés dans les marchés publics. Cette reconnaissance a renforcé le rôle du CRTI-B comme acteur central de la standardisation dans le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En 2015, le CRTI-B a pris une nouvelle dimension avec la création d’une structure juridique propre sous forme de groupement d’intérêt économique. Les statuts du GIE CRTI-B ont été signés le 1er avril 2015 par ses partenaires fondateurs : l’État du Grand-Duché de Luxembourg, la Chambre des Métiers, l’Ordre des Architectes et des Ingénieurs-Conseils, la Fédération des Artisans et le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics. Cette évolution a permis de doter le CRTI-B d’une gouvernance autonome, mieux adaptée à son rôle de plateforme sectorielle.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a22709c4a771e0531a99915", "type": "upload", "value": 218, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "De gauche à droite :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jos DELL, Président de l’Ordre des Architectes et des Ingénieurs – Conseils,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Michel RECKINGER, Président de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean FEYEREISEN, Administrateur honoraire du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Romain SCHMIT, Directeur de la Fédération des Artisans,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian THIRY, Président du Groupement des Entrepreneurs du Bâtiment et des Travaux Publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur François BAUSCH, Ministre du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Nico BIEVER, Vice-Président de la Chambre des Métiers,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Thierry HIRTZ, Président du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 9, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Ricky WOHL, Conseiller de direction 1ère classe, Ministère du Développement durable et des Infrastructures,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 10, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Christian REDING, Secrétaire général du CRTI-B,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 11, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Monsieur Jean LEYDER, Directeur de l’Administration des Bâtiments Publics.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une direction au service des étapes du CRTI-B GIE", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La création du GIE a ouvert une nouvelle phase dans l’organisation du CRTI-B. Lors de la mise en place de cette structure autonome, le secrétariat général était assuré par Christian Reding, dans la continuité des travaux historiques du CRTI-B et de sa transition vers un modèle de gouvernance propre.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "À partir de 2016, Moreno Viola a assuré la direction opérationnelle du CRTI-B GIE. Cette période a notamment accompagné la consolidation des activités de standardisation, le développement des travaux autour du BIM et l’élargissement progressif des missions vers la digitalisation et la construction durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis le 1er janvier 2025, la direction du CRTI-B GIE est assurée par Gilles Christnach. Cette nouvelle étape s’inscrit dans une phase de renforcement stratégique de l’institution, avec l’ambition de développer le CRTI-B comme centre de compétences élargi pour le secteur de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Depuis sa transformation en GIE, le CRTI-B a poursuivi son développement en restant fidèle à son principe de base : faire avancer le secteur par la concertation. Ses travaux se sont élargis progressivement, notamment vers les bibliothèques de prestations standardisées, la coopération électronique, le BIM, la construction durable et les échanges de données entre les acteurs d’un projet.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’évolution du CRTI-B reflète celle du secteur. En 1990, l’enjeu principal était de mieux structurer les marchés et de créer des documents communs pour parler le même langage. Aujourd’hui, le besoin reste le même dans son principe, mais il s’exprime à une autre échelle : connecter les outils, harmoniser les données, simplifier les procédures, intégrer les exigences environnementales et accompagner la transformation numérique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette continuité fait la force du CRTI-B. Né pour standardiser et faciliter, il évolue aujourd’hui vers un centre de compétences capable d’accompagner les grands changements du secteur, tout en conservant ce qui a toujours fait sa valeur : la neutralité, le consensus et la coopération entre les acteurs de la construction au Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.081+01	2026-06-09 22:39:33.684+01	published
37	Nos partenaires	nos-partenaires	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "block", "fields": {"id": "69d500b562d9b95d18ed1568", "items": [{"id": "69d500b9ace1b61978438289", "title": "Ministère de la Mobilité et des Travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les attributions du ministère de la Mobilité et des Travaux publics (MMTP) sont définies par le  ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a181196f0d011174c5a5b9d", "type": "link", "fields": {"url": "https://legilux.public.lu/eli/etat/leg/ri/2023/11/27/a779/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "règlement interne du gouvernement.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le ministère est responsable de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des transports ainsi que, entre autres, de la planification de la mobilité, les services publics de transport, la circulation routière, les chemins de fer, les transports routiers ou encore la navigation intérieure et", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "la politique générale des travaux publics dont les bâtiments de l’État et la voirie de l’État.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"tag": "h4", "type": "heading", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Deux administrations relèvent du Département des travaux publics :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des bâtiments publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'organisation de l'Administration des bâtiments publics (ABP) est déterminée par les compétences qui lui ont été attribuées par la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9e", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2017/03/08/a375/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 8 mars 2017", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": " modifiant la ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "6a1811b7f0d011174c5a5b9f", "type": "link", "fields": {"url": "http://legilux.public.lu/eli/etat/leg/loi/2004/06/15/n2/jo", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "loi du 15 juin 2004", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"mode": "normal", "text": ".", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle est principalement en charge de", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         l’étude et de l’exécution des bâtiments publics nouveaux financés par l’État, y compris leurs équipements et l’aménagement des alentours,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         de l’étude et de la réalisation des travaux de transformation, d’agrandissement et de réhabilitation des bâtiments publics,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "·         ainsi que de l’établissement et de la gestion des programmes de maintenance des bâtiments publics, de leurs équipements, alentours et plantations.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'administration des ponts et chaussées", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L'Administration des ponts et chaussées est chargée, dans les limites fixées par les lois et règlements, de travaux de génie civil pour compte de l'Etat. L'Administration des ponts et chaussées a notamment les attributions suivantes:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour compte de l'Etat", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, entretien et modernisation du réseau de la grande voirie;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "gestion du trafic sur le réseau de la grande voirie et surveillance de la sécurité dans les tunnels;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction, aménagement et entretien de la voirie de l'Etat et de ses dépendances;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "établissement des permissions de voirie et exercice de la police de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "surveillance et entretien des aménagements hydroélectriques de la Haute Sûre et de la Basse Sûre ainsi que des barrages et écluses du chenal navigable;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "mise en place et entretien de l'éclairage public du réseau de la voirie de l'Etat;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "entretien constructif et courant du chenal navigable et des berges de la Moselle canalisée et du port de Mertert;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 8, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "construction et entretien de certaines infrastructures de l'aéroport de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}], "direction": null}}}, {"id": "69d500fbace1b6197843828c", "title": "Chambre des Métiers", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La Chambre des Métiers est l’une des cinq chambres professionnelles patronales et salariales du Grand-Duché de Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "La Chambre des Métiers est constituée en tant qu'établissement public par la loi du 4 avril 1924.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En tant qu'organisme à base élective et à affiliation obligatoire, la Chambre des Métiers est le représentant de l'ensemble des entreprises du secteur de l'Artisanat au Luxembourg. Elle sauvegarde et défend les intérêts des entreprises artisanales, participe à la procédure législative (avis sur les projets de loi et de règlement soumis par le Gouvernement), gère les contrats d'apprentissage et réalise l'organisation matérielle des examens de fin d'apprentissage, organise les cours et examens menant au Brevet de Maîtrise, mène une politique d'assistance et de conseil générale, sectorielle et individuelle au service des entreprises artisanales.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "left", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par ailleurs la Chambre des Métiers réalise des études et analyses en rapport avec le secteur de l'Artisanat et des petites et moyennes entreprises (PME) en général.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5012f62d9b95d18ed1571", "type": "link", "fields": {"url": "http://www.cdm.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.cdm.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50130ace1b6197843828d", "title": "Ordre des Architectes et Ingénieurs-conseils (OAI)", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ORDRE DES ARCHITECTES ET DES INGÉNIEURS-CONSEILS (OAI)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Définie par la loi luxembourgeoise, la mission de l’Ordre des Architectes et des Ingénieurs-Conseils, consiste à garantir l’application des droits et des devoirs des ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "6 professions OAI ", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"mode": "normal", "text": "d’intérêt public :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "architecte, architecte d’intérieur, ingénieur-conseil, urbaniste-aménageur, architecte-paysagiste, et géomètre.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chacun de ces professionnels, qu’il soit une personne physique ou morale, doit être inscrit au tableau de l’Ordre pour exercer sa profession à titre d’indépendant au Grand-Duché.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "3 missions OAI : légale, professionnelle, culturelle.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses missions légales, d’organisation professionnelle ainsi que d’intérêt public, l’OAI valorise la véritable dimension du travail de ses membres, au niveau économique, social, artistique et culturel, pour un cadre de vie durable, intelligent et de qualité.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Membres OAI = Label de qualité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’essence des professions OAI est constituée notamment de :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• La qualification, la compétence, l’expertise, la créativité et l’ingéniosité,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance professionnelle et la déontologie,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• Les responsabilités professionnelles et décennales/biennales,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’obligation de contracter des assurances couvrant ces responsabilités,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• L’indépendance de toute activité commerciale afin d’éviter les conflits d’intérêts,", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "• la défense de l’intérêt public, du maître d’ouvrage et des utilisateurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "6a1ff9ba9d6e4de0283328b1", "type": "upload", "value": 88, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lien : ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"id": "69d5014c62d9b95d18ed1573", "type": "link", "fields": {"url": "http://www.oai.lu/", "newTab": true, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "http://www.oai.lu/", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d5014eace1b6197843828e", "title": "Fédération des Artisans", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Organisation représentative de l’artisanat luxembourgeois", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fondée en 1905, la Fédération des Artisans est l’organisation faîtière de l’artisanat au Luxembourg. Elle regroupe aujourd’hui une trentaine de fédérations professionnelles et représente près de 3.000 entreprises, constituant un acteur central du tissu économique national.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "En étroite collaboration avec ses membres, la Fédération définit et porte la politique générale de l’artisanat. Elle s’engage à promouvoir activement les intérêts du secteur, tant auprès des entreprises que des décideurs politiques, des partenaires économiques et du grand public. Reconnue comme un interlocuteur de référence, elle contribue de manière structurée et proactive au débat économique et sociétal.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans l’exercice de ses missions, la Fédération des Artisans :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "représente et défend les intérêts de l’artisanat aux niveaux national et international ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "œuvre à la mise en place de conditions-cadres favorables aux entreprises artisanales et aux indépendants ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "coordonne les actions et les positions des fédérations professionnelles affiliées ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "renforce la cohésion et la solidarité au sein du secteur ; ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "accompagne et conseille les entreprises dans leurs enjeux quotidiens et stratégiques. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Acteur engagé dans le secteur de la construction, la Fédération soutient activement les entreprises dans les défis liés à la transformation digitale, à l’innovation des processus et à l’amélioration de la qualité et de la productivité, notamment à travers des initiatives favorisant la collaboration entre les différents métiers et partenaires de la filière.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle agit en synergie avec les fédérations membres ainsi qu’avec les institutions partenaires, notamment la Chambre des Métiers, afin de contribuer durablement à la compétitivité, à l’innovation et à la durabilité de l’artisanat luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf1663910505f885ca61d", "type": "upload", "value": 87, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"type": "autolink", "fields": {"url": "https://www.fda.lu", "linkType": "custom"}, "format": "", "indent": 0, "version": 2, "children": [{"mode": "normal", "text": "www.fda.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}, {"id": "69d50175ace1b6197843828f", "title": "Le Groupement des entrepreneurs du bâtiment et des travaux publics", "content": {"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des entrepreneurs du bâtiment et des travaux publics (GEBTP)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Groupement des Entrepreneurs du Bâtiment et des Travaux Publics a été fondé en 1946 par un groupe d’entrepreneurs animés par la volonté de créer une association représentative du secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il défend et conserve les intérêts professionnels de ses membres et fait l’analyse économique et sociale des questions relatives à l’industrie de la construction. Il assiste, conseille et informe ses membres sur l’évolution du cadre législatif luxembourgeois et européen. Le Groupement est en contact permanent avec les autorités politiques et économiques ainsi qu’avec les syndicats.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Il traite également toute une série de dossiers sectoriels tels que la problématique des décharges pour déchets inertes, la formation continue dans le secteur de la construction, l’amélioration de performances énergétiques et écologiques des bâtiments.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Pour le Groupement, il importe de soigner l’innovation nationale en mettant l’accent sur l’énorme potentiel du secteur de la construction dans un monde globalisé. Le Groupement des entrepreneurs plaide pour un marché du travail dynamique dans des conditions équitables et exige l’adoption d’un plan d’action contre le dumping social dans la construction et la fraude liée au détachement des travailleurs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans le contexte du cadre réglementaire, le Groupement pousse tous les acteurs via sa collaboration active dans les groupes de travail du CRTI-B, à améliorer et accélérer les procédures d’autorisation et à simplifier la complexité des règles d’urbanisme afin d’augmenter la prévisibilité des décisions administratives. Il s’agit d’un effort essentiel et nécessaire pour pérenniser le secteur de la construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"id": "69faf17d3910505f885ca61e", "type": "upload", "value": 89, "fields": null, "format": "", "version": 3, "relationTo": "media"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faf00e3910505f885ca605", "type": "link", "fields": {"url": "http://www.groupement.lu", "newTab": false, "linkType": "custom"}, "format": "", "indent": 0, "version": 3, "children": [{"mode": "normal", "text": "www.groupement.lu", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}}], "blockName": "", "blockType": "accordion"}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.13+01	2026-06-09 22:39:33.713+01	published
38	Organisation	organisation	32	100	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Notre gouvernance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE repose sur une représentation équilibrée des acteurs publics et privés du secteur luxembourgeois de la construction. Cette organisation garantit un fonctionnement neutre, transparent et concerté, dans lequel les décisions sont préparées et prises avec les partenaires concernés.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B GIE fonctionne autour de deux organes principaux : l’Assemblée générale et le Conseil de gérance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’Assemblée générale réunit les membres du groupement. Elle constitue l’organe statutaire de référence et valide notamment les comptes annuels, les budgets, les conventions de financement ainsi que les grandes orientations du CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Elle rassemble les représentants des organismes partenaires :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : Mme Sylvie Siebenborn, représentante effective, et Mme Marie Iacovella-Muller, représentante suppléante ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, représentant effectif, et M. Marc Turpel, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Ponts et Chaussées : M. Gilles Didier, représentant effectif, et M. Frédéric de Oliveira, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Paul Nathan, représentant effectif, et M. Alex Kieffer, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Michelle Friederici, représentante effective, et M. Patrick Nosbusch, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach, représentant effectif, et M. Patrick Koehnen, représentant suppléant ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 7, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz, représentant effectif, et M. Pol Faber, représentant suppléant.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette composition permet de réunir autour d’une même table les principaux points de vue du secteur : pouvoirs publics, maîtres d’ouvrage, concepteurs, artisans et entreprises d’exécution.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance assure la gestion du CRTI-B GIE et suit la mise en œuvre des décisions prises par l’Assemblée générale. Il accompagne les priorités stratégiques, veille au bon déroulement des activités et constitue un lieu de discussion permanent entre les partenaires.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le Conseil de gérance est composé des représentants suivants :", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ministère de la Mobilité et des Travaux publics : M. Claude Pauly et M. Ben Hubert ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Administration des Bâtiments publics : M. Thierry Hirtz, président ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Chambre des Métiers : M. Marc Gross, secrétaire général ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ordre des Architectes et Ingénieurs-Conseils : Mme Corinne Stephany et M. Olivier Zirnheld ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 5, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Fédération des Artisans : M. Marcel Colbach ;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 6, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Groupement des Entrepreneurs du Bâtiment et des Travaux Publics : M. Alain Pütz.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par sa composition, le Conseil de gérance assure un lien direct entre les orientations institutionnelles du CRTI-B GIE et les réalités du secteur. Les sujets y sont abordés de manière collégiale, avec la volonté de rechercher des positions équilibrées et applicables.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une gouvernance fondée sur la neutralité", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La légitimité du CRTI-B GIE tient à son positionnement unique : il n’est pas l’expression d’un seul acteur, d’une seule profession ou d’une seule administration. Il est un lieu de travail commun, dans lequel les intérêts, les contraintes et les responsabilités de chacun peuvent être mis en discussion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette neutralité est essentielle. Elle permet d’élaborer des décisions et des positions qui tiennent compte des besoins du terrain, des exigences publiques et des réalités économiques. Elle renforce également la confiance entre les partenaires et facilite l’acceptation des travaux portés par le CRTI-B GIE.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une méthode de travail concertée", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Au-delà de ses organes statutaires, le CRTI-B GIE s’appuie sur des groupes de travail thématiques. Ces groupes réunissent, selon les sujets, des experts techniques, des représentants d’administrations, des concepteurs, des entreprises et des organisations professionnelles.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette méthode permet de traiter les dossiers au plus près de la pratique, avec les personnes directement concernées par leur application. Elle garantit que les décisions ne restent pas théoriques, mais qu’elles puissent être traduites en résultats concrets pour le secteur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La gouvernance du CRTI-B GIE est ainsi à la fois institutionnelle, technique et collaborative. Elle constitue l’une des conditions essentielles pour faire avancer le secteur de manière structurée, cohérente et concertée.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:35.174+01	2026-06-09 22:39:33.74+01	published
39	home	home	39	999	\N	\N	\N	\N	\N	2026-06-09 22:39:35.219+01	2026-06-09 22:39:33.758+01	published
6	Documents explicatifs 	documents-explicatifs	7	100	book	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Comprendre les Clauses Contractuelles", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " L'Essentiel des Clauses Contractuelles dans les Marchés Publics", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " Les clauses contractuelles constituent le fondement de toute relation dans le cadre de la commande publique. Elles définissent avec précision les droits, les obligations et les responsabilités de chaque partie impliquée (pouvoir adjudicateur et entreprise).", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Une bonne compréhension et une application rigoureuse de ces clauses sont essentielles pour garantir la bonne exécution des contrats, minimiser les litiges et assurer une collaboration transparente. Vous trouverez ci-dessous notre catalogue de clauses répertoriées par thématique.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "block", "fields": {"id": "69d65297c0dbbd0b7752bfa8", "pageSize": 10, "blockName": "", "blockType": "downloadGrid", "documents": [{"id": "69d5154c9199ce2a83b07c1d", "doc": null, "pdf": 169, "rtf": null, "xls": null, "zip": null, "data": "2003-09-01T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles - Exposé des motifs", "versao": "4"}, {"id": "69fd978bb3250ff904d64fb4", "pdf": 178, "data": "2012-07-12T12:00:00.000Z", "numero": "CCG100", "titulo": "Clauses contractuelles version 10 - Modifications par rapport à la version 9", "versao": "10"}, {"id": "69fd97dab3250ff904d64fb5", "pdf": 180, "data": "2007-01-19T12:00:00.000Z", "numero": "CDC-BET", "titulo": "\\tCahier des charges concernant les travaux de bétonnage", "versao": "10"}, {"id": "69fd9865b3250ff904d64fb6", "pdf": 182, "data": "2004-03-12T12:00:00.000Z", "numero": "CTG0", "titulo": "\\tCTG applicables à tous les corps de métiers - Exposé des motifs", "versao": "3"}, {"id": "69fd98b6b3250ff904d64fb7", "pdf": 183, "data": "2002-05-22T12:00:00.000Z", "numero": "CTG0", "titulo": "CTG applicables à tous les corps de métiers - Commentaire des articles", "versao": "4"}, {"id": "69fd992fb3250ff904d64fb8", "pdf": 184, "data": "2002-06-27T12:00:00.000Z", "numero": "CTG001", "titulo": "Travaux d'échafaudage - Commentaire des articles", "versao": "2"}, {"id": "69fd996bb3250ff904d64fb9", "pdf": 185, "data": "2003-02-14T12:00:00.000Z", "numero": "CTG012", "titulo": "Travaux de maçonnerie - Commentaire des articles", "versao": "3"}, {"id": "69fd99b3b3250ff904d64fba", "pdf": 186, "data": "2002-10-30T12:00:00.000Z", "numero": "CTG013", "titulo": "Travaux de béton - Commentaire des articles", "versao": "4"}, {"id": "69fd99e9b3250ff904d64fbb", "pdf": 187, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG040", "titulo": "Installations de chauffage et de préparation d'eau chaude - Commentaire des articles", "versao": "3"}, {"id": "69fd9a34b3250ff904d64fbc", "pdf": 188, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG042", "titulo": "Installations sanitaires - Commentaire des articles", "versao": "3"}, {"id": "69fd9a6bb3250ff904d64fbd", "pdf": 189, "data": "2002-03-21T12:00:00.000Z", "numero": "CTG074", "titulo": "Installations de ventilation et de climatisation - Commentaire des articles", "versao": "3"}]}, "format": "", "version": 2}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:34.038+01	2026-06-09 22:39:32.945+01	published
35	Rapport d'activité 	rapport-dactivite	32	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:35.031+01	2026-06-09 22:39:33.657+01	published
14	Performance énergétique 	performance-energetique	\N	20	list	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le département de la performance énergétique du CRTI-B accompagne les acteurs publics et privés dans la transition énergétique du secteur de la construction au Luxembourg, tant pour les bâtiments existants que pour les nouvelles constructions. En lien étroit avec le Ministère de l’Économie, et plus particulièrement la Direction Générale de l’Énergie, il contribue à l’élaboration de solutions concrètes permettant de répondre aux objectifs nationaux et européens de décarbonation, d’efficacité énergétique et de réduction des émissions de CO₂.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Ses missions portent notamment sur l’analyse technico-économique des bâtiments et des systèmes énergétiques, l’évaluation du coût optimal des niveaux de performance énergétique au sens de la directive européenne 2024/1275, ainsi que la construction de scénarios intégrant les technologies, les coûts de cycle de vie, la performance énergétique et l’impact carbone. Le département participe également à la définition des hypothèses de calcul, à la rédaction de rapports nationaux et à la traduction des résultats en recommandations destinées à faire évoluer les réglementations, les outils d’aide et les pratiques du secteur.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Dans ce cadre, le département joue un rôle d’interface entre les administrations, les professionnels de la construction et les experts spécialisés. Il anime et coordonne des groupes de travail sur des thématiques émergentes liées à la performance énergétique des bâtiments. Parmi celles-ci figure notamment la ventilation naturelle contrôlée, pour laquelle le CRTI-B souhaite développer des méthodologies, des outils et des références afin d’accompagner l’intégration de concepts innovants dans le cadre réglementaire luxembourgeois.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Par son approche transversale, sa neutralité et sa capacité à mobiliser les compétences de son réseau de partenaires, le département de la performance énergétique contribue à pérenniser l’innovation et à accompagner l’évolution du secteur de la construction vers un bâti plus sobre, plus performant et plus durable.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-09 22:39:33.133+01	2026-06-09 22:39:33.132+01	published
34	DIGITATLISATION	bim-au-luxembourg	\N	40	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le BIM (Building Information Modeling)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’ère de la digitalisation est en plein essor et a désormais pénétrée l’ensemble de nos secteurs d’activités, parmi lesquels celui de la construction. Cette évolution constitue un défi non négligeable que le secteur de la construction est prêt à relever ; et c’est une réelle chance pour ce secteur d’avancer davantage dans l’intégration du numérique dans ses démarches. Si on parle de « digitalisation » et de « construction », un sujet-clé est incontournable : le « Building Information Modeling », couramment appelé « BIM » qui révolutionnera notre métier et la manière de concevoir un projet de construction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les groupes de travail", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Le CRTI-B a lancé en 2015 les premières démarches pour le développement et l’implémentation d’une stratégie nationale pour le « Building Information Modeling ». Les groupes de travail BIM au Luxembourg sont sous le guidage du CRTI-B, qui - en tant que plateforme neutre de la construction au Luxembourg - a regroupé une table d'experts composée d'acteurs différents de la construction. L'intention était de créer un groupe de travail trans-sectoriel entre maîtres d'ouvrage, architectes, ingénieurs-conseils, entrepreneurs, artisans, chercheurs scientifiques et projet managers. Au vu du grand intérêt envers le sujet, et compte tenu des différents acteurs économiques impliqués, différents « sous-groupes de travail » ont été créés pour organiser les travaux de développement de manière plus efficiente. Tous les sous-groupes reportent directement au groupe de travail principal.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:33.633+01	2026-06-09 22:39:33.633+01	published
40	\N	\N	\N	100	\N	\N	\N	\N	\N	2026-06-09 23:18:24.168+01	2026-06-09 23:18:24.166+01	draft
17	Guide de Formation 	guide-de-formation	34	100	document	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Les formations BIM au Luxembourg", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "L’objectif du volet « formation » est de référencer et centraliser les formations BIM disponibles au Luxembourg. Ce référencement se développe autour d’un cycle de formation modulaire BIM de base mis au point par le CRTI-B et ses partenaires. Les autres formations référencées permettent de compléter le cycle de base. Ceci permettra à terme d’obtenir un catalogue formation couvrant le maximum des besoins en BIM pour le Luxembourg.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules de base CRTI-B", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page reprend en détail chaque module proposé dans le cycle de formation modulaire BIM.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Modules Outils", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les formations complémentaires organisées ou validées par le CRTI-B dont notamment « prise en main logiciel », ce module est par exemple requis avant de participer à « BIM modeleur ». Et est proposé par différents revendeurs logiciels. Cette page regroupe aussi les formations proposées par des prestataires de service externes (éditeurs et revendeurs logiciels, centres de formation…) qui proposent des formations complémentaires au cycle de base BIM, Au Luxembourg ou sous forme de formation à distance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Equivalence", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Cette page détaille les équivalences entre formations académiques / professionnelles et certifications professionnelles BIM du CRTI-B.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Satisfaction des participants", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "justify", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "La qualité des formations est notre priorité. Nous monitorons en permanence les formations dispensées et les retours des participants de manière à pouvoir améliorer de manière continue la qualité des modules proposés. Cette approche nous a permis d’obtenir des évaluations élevées de la part des participants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h6", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Schéma du parcours", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f6", "type": "upload", "value": 81, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Parcours formation BIM par métier et profil professionnel", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}, {"id": "69faebf93910505f885ca5f7", "type": "upload", "value": 82, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"id": "69faebf93910505f885ca5f8", "type": "upload", "value": 83, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5f9", "type": "upload", "value": 84, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}, {"id": "69faebf93910505f885ca5fa", "type": "upload", "value": 85, "fields": {"position": "center"}, "format": "", "version": 3, "relationTo": "media"}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": " ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null, "textFormat": 1}}	\N	\N	\N	2026-06-09 22:39:34.411+01	2026-06-09 22:39:33.209+01	published
42	Contact	contact	\N	999	\N	\N	\N	\N	\N	2026-06-12 00:40:55.597+01	2026-06-12 00:40:55.597+01	published
41	Toutes les formations	toutes-les-formations	\N	999	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	2026-06-12 00:46:56.177+01	2026-06-10 00:13:00.086+01	published
\.


--
-- Data for Name: pages_blocks_accordion_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_accordion_block (_order, _parent_id, _path, id, title, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_accordion_block_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_accordion_block_items (_order, _parent_id, id, title, content) FROM stdin;
\.


--
-- Data for Name: pages_blocks_activity_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_activity_reports (_order, _parent_id, _path, id, title, block_name) FROM stdin;
2	35	layout	6a28881545538453afe00fcc	Selection années 	\N
\.


--
-- Data for Name: pages_blocks_activity_reports_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_activity_reports_reports (_order, _parent_id, id, year, pdf_id) FROM stdin;
1	6a28881545538453afe00fcc	6a28881545538453afe00fc9	2020	69
2	6a28881545538453afe00fcc	6a28881545538453afe00fca	2021	69
3	6a28881545538453afe00fcc	6a28881545538453afe00fcb	2022	69
\.


--
-- Data for Name: pages_blocks_calculator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_calculator (_order, _parent_id, _path, id, title, block_name) FROM stdin;
2	29	layout	6a28881545538453afe00fab	Calculateur	\N
2	41	layout	6a2b48ecf8a4cdb597e3c02a	Calculateur	\N
\.


--
-- Data for Name: pages_blocks_clauses_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_clauses_grid (_order, _parent_id, _path, id, title, redirect_label, redirect_href, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_contact_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_contact_block (_order, _parent_id, _path, id, phone, email, address, hours, maps_embed_url, block_name) FROM stdin;
1	42	layout	b4251c0b-6416-4fd4-a3de-e071153c3752	+352 24 52 73 11	contact@crtib.lu	2, Circuit de la Foire Internationale\nL-1347 Luxembourg\nBP 1604 – L-1016 Luxembourg	Lundi – Vendredi · 8h30 – 17h30	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.8!2d6.1296!3d49.6116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f2d49c5d6e3%3A0x1a!2s2%20Circuit%20de%20la%20Foire%20Internationale%2C%201347%20Luxembourg!5e0!3m2!1sfr!2slu!4v1	\N
\.


--
-- Data for Name: pages_blocks_documents_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_documents_section (_order, _parent_id, _path, id, title, block_name) FROM stdin;
2	17	layout	6a28881545538453afe00f4f	PDF	\N
1	18	layout	6a28881545538453afe00f5b	Guide d'application 	\N
\.


--
-- Data for Name: pages_blocks_documents_section_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_documents_section_items (_order, _parent_id, id, type, title, trigger_label, file_id, video_url) FROM stdin;
1	6a28881545538453afe00f4f	6a28881545538453afe00f4e	pdf	Guide de formation 	PDF Guide de formation 	86	\N
1	6a28881545538453afe00f5b	6a28881545538453afe00f50	pdf	Guide d'application FR	PDF Guide d'application FR	78	\N
2	6a28881545538453afe00f5b	6a28881545538453afe00f51	pdf	Guide d'application DE 	PDF Guide d'application DE 	79	\N
3	6a28881545538453afe00f5b	6a28881545538453afe00f52	pdf	Guide d'application EN	PDF Guide d'application EN	80	\N
4	6a28881545538453afe00f5b	6a28881545538453afe00f53	pdf	Annexes au guide 	PDF Guide BIM Bonnes pratiques FR 	91	\N
5	6a28881545538453afe00f5b	6a28881545538453afe00f54	pdf	PDF Guide BIM Bonnes pratiques EN	PDF Guide BIM Bonnes pratiques EN	92	\N
6	6a28881545538453afe00f5b	6a28881545538453afe00f55	pdf	PDF Guide BIM Bonnes pratiques ALL	PDF Guide BIM Bonnes pratiques ALL	93	\N
7	6a28881545538453afe00f5b	6a28881545538453afe00f56	pdf	Modèle BEP 	DOC Modèle BEP 	94	\N
8	6a28881545538453afe00f5b	6a28881545538453afe00f57	pdf	DOC Modèle Fiches de suivi	DOC Modèle Fiches de suivi	95	\N
9	6a28881545538453afe00f5b	6a28881545538453afe00f58	pdf	DOC Modèle PBB	DOC Modèle PBB	96	\N
10	6a28881545538453afe00f5b	6a28881545538453afe00f59	pdf	Matrice responsabilités 	PDF Matrice responsabilités 	97	\N
11	6a28881545538453afe00f5b	6a28881545538453afe00f5a	pdf	DOC Matrice responsabilités 	DOC Matrice responsabilités 	98	\N
\.


--
-- Data for Name: pages_blocks_download_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_download_grid (_order, _parent_id, _path, id, page_size, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_download_grid_documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_download_grid_documents (_order, _parent_id, id, numero, titulo, data, versao, pdf_id, rtf_id, doc_id, xls_id, zip_id) FROM stdin;
\.


--
-- Data for Name: pages_blocks_download_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_download_links (_order, _parent_id, _path, id, title, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_download_links_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_download_links_items (_order, _parent_id, id, label, file_id) FROM stdin;
\.


--
-- Data for Name: pages_blocks_dynamic_grid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_dynamic_grid (_order, _parent_id, _path, id, title, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_dynamic_grid_columns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_dynamic_grid_columns (_order, _parent_id, id, label, type, "precision", currency) FROM stdin;
\.


--
-- Data for Name: pages_blocks_dynamic_grid_rows; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_dynamic_grid_rows (_order, _parent_id, id, "values") FROM stdin;
\.


--
-- Data for Name: pages_blocks_formations_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_formations_section (_order, _parent_id, _path, id, title, category, show_filters, "limit", block_name) FROM stdin;
2	3	layout	6a289dfb5b57487faba98367	Nos formations BIM & Digitalisation	digitalisation-bim	f	20	\N
1	5	layout	75473168-e990-4342-9b2b-6b81f2e1b1d0	Formations disponibles	\N	t	12	\N
2	8	layout	6a289dfc5b57487faba98369	Formations disponibles	\N	f	20	\N
1	41	layout	6a289dfc5b57487faba9836a	Toutes les formations	\N	t	50	\N
\.


--
-- Data for Name: pages_blocks_news_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_news_section (_order, _parent_id, _path, id, title, max_items, variant, cta_href, block_name) FROM stdin;
1	2	layout	6a28881445538453afe00f2a	Actualités	3	default	/actualites	\N
1	4	layout	6a28881445538453afe00f2d	Actualités	3	default	/actualites	\N
1	9	layout	6a28881545538453afe00f3f	Actualités	3	default	/actualites	\N
3	39	layout	6a28881545538453afe00fdb	Actualités	3	default	/actualites	\N
\.


--
-- Data for Name: pages_blocks_newsletter_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_newsletter_block (_order, _parent_id, _path, id, heading, description, button_label, block_name) FROM stdin;
3	7	layout	6a28881445538453afe00f3c	Incrivez-vous à la newsletter!	\N	S'abonner	\N
3	14	layout	6a28881545538453afe00f48	Inscrivez-vous à la newsletter!	\N	S'abonner	\N
3	34	layout	6a28881545538453afe00fc4	Inscrivez-vous à la newsletter!	\N	S'abonner	\N
3	19	layout	6a28881545538453afe00f65	Incrivez-vous à la newsletter!	\N	S'abonner	\N
2	30	layout	6a28881545538453afe00fae	Inscrivez-vous à la newsletter! 	\N	S'abonner	\N
5	39	layout	6a28881545538453afe00fe0	Inscrivez-vous à la newsletter!	\N	S'abonner	\N
\.


--
-- Data for Name: pages_blocks_organogram; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_organogram (_order, _parent_id, _path, id, root_name, root_role, root_photo_id, block_name) FROM stdin;
2	19	layout	6a28881545538453afe00f64	Gilles Christnach 	Directeur - Département marché public	100	\N
\.


--
-- Data for Name: pages_blocks_organogram_root_children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_organogram_root_children (_order, _parent_id, id, name, role, photo_id, department, phone, email) FROM stdin;
1	6a28881545538453afe00f64	6a28881545538453afe00f5e	Jael Redinha	assistante de direction 	101	\N	\N	\N
2	6a28881545538453afe00f64	6a28881545538453afe00f5f	Catherine Brand	Chargée de mission - Département marché public	102	\N	\N	\N
3	6a28881545538453afe00f64	6a28881545538453afe00f60	Charlie Boon Bellinaso	Chargé de mission - Département Digitalisation	103	\N	\N	\N
4	6a28881545538453afe00f64	6a28881545538453afe00f61	Amin Hamidizadeh	Chargé de mission - Département Digitalisation 	104	\N	\N	\N
5	6a28881545538453afe00f64	6a28881545538453afe00f62	Valérie Marx	Chargée de mission - Département Construction durable 	\N	\N	\N	\N
6	6a28881545538453afe00f64	6a28881545538453afe00f63	George Jacquot 	Chargé de mission - Département Perfomance énergétique 	\N	\N	\N	\N
\.


--
-- Data for Name: pages_blocks_organogram_root_children_children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_organogram_root_children_children (_order, _parent_id, id, name, role, photo_id, department, phone, email) FROM stdin;
\.


--
-- Data for Name: pages_blocks_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_partners (_order, _parent_id, _path, id, title, associations_title, block_name) FROM stdin;
3	32	layout	6a28881545538453afe00fbb	Partenaires	En association	\N
4	39	layout	6a28881545538453afe00fdf	Partenaires	En association	\N
\.


--
-- Data for Name: pages_blocks_partners_associations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_partners_associations (_order, _parent_id, id, name, logo_id, href) FROM stdin;
1	6a28881545538453afe00fbb	6a28881545538453afe00fba	Association 1	72	https://www.crtib.lu/fr/crti-b/qui-sommes-nous
\.


--
-- Data for Name: pages_blocks_partners_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_partners_partners (_order, _parent_id, id, name, logo_id, href) FROM stdin;
1	6a28881545538453afe00fbb	6a28881545538453afe00fb8	OAI	88	https://www.crtib.lu/fr/crti-b/qui-sommes-nous
2	6a28881545538453afe00fbb	6a28881545538453afe00fb9	Chambre des métiers 	99	https://www.crtib.lu/fr/crti-b/qui-sommes-nous
1	6a28881545538453afe00fdf	6a28881545538453afe00fdc	OAI	88	https://www.crtib.lu/fr/crti-b/qui-sommes-nous
2	6a28881545538453afe00fdf	6a28881545538453afe00fdd	Chambre des métiers 	99	https://www.crtib.lu/fr/crti-b/qui-sommes-nous
3	6a28881545538453afe00fdf	6a28881545538453afe00fde	Fédération des artisants 	87	\N
\.


--
-- Data for Name: pages_blocks_photo_hero_carousel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_photo_hero_carousel (_order, _parent_id, _path, id, auto_play_ms, block_name) FROM stdin;
2	7	layout	6a28881445538453afe00f3b	5000	\N
2	14	layout	6a28881545538453afe00f47	5000	\N
2	34	layout	6a28881545538453afe00fc3	5000	\N
1	1	layout	6a28881445538453afe00f29	5000	\N
1	15	layout	6a28881545538453afe00f4a	5000	\N
1	17	layout	6a28881545538453afe00f4d	5000	\N
1	19	layout	6a28881545538453afe00f5d	5000	\N
1	23	layout	6a28881545538453afe00fa2	5000	\N
1	24	layout	6a28881545538453afe00fa4	5000	\N
1	25	layout	6a28881545538453afe00fa6	5000	\N
1	28	layout	6a28881545538453afe00fa8	5000	\N
1	29	layout	6a28881545538453afe00faa	5000	\N
1	30	layout	6a28881545538453afe00fad	5000	\N
1	31	layout	6a28881545538453afe00fb0	5000	\N
3	35	layout	6a28881545538453afe00fce	5000	\N
2	36	layout	6a28881545538453afe00fd4	5000	\N
1	3	layout	6a28881445538453afe00f2c	5000	\N
1	5	layout	6a28881445538453afe00f2f	5000	\N
1	8	layout	6a28881545538453afe00f3e	5000	\N
\.


--
-- Data for Name: pages_blocks_photo_hero_carousel_slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_photo_hero_carousel_slides (_order, _parent_id, id, image_id, alt, eyebrow, title) FROM stdin;
1	6a28881445538453afe00f3b	6a28881445538453afe00f3a	191	\N	\N	MARCHES PUBLICS
1	6a28881545538453afe00f47	6a28881545538453afe00f46	195	\N	\N	Perfomance enérgetique 
1	6a28881545538453afe00fc3	6a28881545538453afe00fc2	196	\N	\N	DIGITALISATION
1	6a28881445538453afe00f29	6a28881445538453afe00f28	202	\N	\N	Indémnités
1	6a28881545538453afe00f4a	6a28881545538453afe00f49	203	\N	\N	Soumission public 
1	6a28881545538453afe00f4d	6a28881545538453afe00f4c	208	\N	\N	Guide de formation
1	6a28881545538453afe00f5d	6a28881545538453afe00f5c	215	\N	\N	Equipe
1	6a28881545538453afe00fa2	6a28881545538453afe00fa1	211	\N	\N	Modèles de contrats
1	6a28881545538453afe00fa4	6a28881545538453afe00fa3	204	\N	\N	Prestations Standardisées
1	6a28881545538453afe00fa6	6a28881545538453afe00fa5	209	\N	\N	Clauses techniques
1	6a28881545538453afe00fa8	6a28881545538453afe00fa7	210	\N	\N	Clauses contractuelles 
1	6a28881545538453afe00faa	6a28881545538453afe00fa9	212	\N	\N	Conditions minima de participation 
1	6a28881545538453afe00fad	6a28881545538453afe00fac	213	\N	\N	Révision des prix
1	6a28881545538453afe00fb0	6a28881545538453afe00faf	197	\N	\N	Normalisation
1	6a28881545538453afe00fce	6a28881545538453afe00fcd	216	\N	\N	Rapport d'activité
1	6a28881545538453afe00fd4	6a28881545538453afe00fd3	214	\N	\N	Notre histoire 
1	6a28881445538453afe00f2c	6a28881445538453afe00f2b	205	\N	\N	Formation
1	6a28881445538453afe00f2f	6a28881445538453afe00f2e	206	\N	\N	Formation
1	6a28881545538453afe00f3e	6a28881545538453afe00f3d	207	\N	\N	Formation
\.


--
-- Data for Name: pages_blocks_quick_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_quick_links (_order, _parent_id, _path, id, block_name) FROM stdin;
1	7	layout	6a28881445538453afe00f39	\N
1	14	layout	6a28881545538453afe00f45	\N
2	32	layout	6a28881545538453afe00fb7	\N
1	34	layout	6a28881545538453afe00fc1	\N
1	22	layout	6a28881545538453afe00fa0	\N
1	35	layout	6a28881545538453afe00fc8	\N
2	39	layout	6a28881545538453afe00fda	\N
\.


--
-- Data for Name: pages_blocks_quick_links_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_quick_links_items (_order, _parent_id, id, title, href, icon) FROM stdin;
1	6a28881445538453afe00f39	6a28881445538453afe00f30	Soumission publique 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
2	6a28881445538453afe00f39	6a28881445538453afe00f31	CCG	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
3	6a28881445538453afe00f39	6a28881445538453afe00f32	CTG	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
4	6a28881445538453afe00f39	6a28881445538453afe00f33	Bibliotèque prestations standardisées	www.crtib.lu	s
5	6a28881445538453afe00f39	6a28881445538453afe00f34	Révision des prix 	www.crtib.lu	s
6	6a28881445538453afe00f39	6a28881445538453afe00f35	Condition minima	www.crtib.lu	M
7	6a28881445538453afe00f39	6a28881445538453afe00f36	Indemnités 	www.crtib.lu	M
8	6a28881445538453afe00f39	6a28881445538453afe00f37	Actualité	www.crtib.lu	M 
9	6a28881445538453afe00f39	6a28881445538453afe00f38	Formation	www.crtib.lu	M
1	6a28881545538453afe00f45	6a28881545538453afe00f40	Perfomance enérgetique LU	www.crtib.lu	PE
2	6a28881545538453afe00f45	6a28881545538453afe00f41	Perfomance enérgetique EU	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
3	6a28881545538453afe00f45	6a28881545538453afe00f42	Perfomance enérgetique du bâtiment 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
4	6a28881545538453afe00f45	6a28881545538453afe00f43	Actualités 	www.crtib.lu	PE
5	6a28881545538453afe00f45	6a28881545538453afe00f44	Formation	www.crtib.lu	PE
1	6a28881545538453afe00fb7	6a28881545538453afe00fb2	Notre histoire 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
2	6a28881545538453afe00fb7	6a28881545538453afe00fb3	Organisation 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
3	6a28881545538453afe00fb7	6a28881545538453afe00fb4	Equipe 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
4	6a28881545538453afe00fb7	6a28881545538453afe00fb5	Nos partenaires 	www.crtib.lu	D
5	6a28881545538453afe00fb7	6a28881545538453afe00fb6	Rapports d'activité 	www.crtib.lu	A
1	6a28881545538453afe00fc1	6a28881545538453afe00fbc	Guide d'application 	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
2	6a28881545538453afe00fc1	6a28881545538453afe00fbd	Guide de formation 	www.digitalbuilding.lu 	@
3	6a28881545538453afe00fc1	6a28881545538453afe00fbe	BIM IDS	www.digitalbuilding.lu 	s
4	6a28881545538453afe00fc1	6a28881545538453afe00fbf	Actualités	www.digitalbuilding.lu	D
5	6a28881545538453afe00fc1	6a28881545538453afe00fc0	Formation	www.digitalbuilding.lu	@
1	6a28881545538453afe00fa0	6a28881545538453afe00f9d	Titre 1	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+
2	6a28881545538453afe00fa0	6a28881545538453afe00f9e	Titre 2	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	-
3	6a28881545538453afe00fa0	6a28881545538453afe00f9f	Titre 3	https://drive.google.com/drive/folders/15dEtWv5Hzk3S7PoZeALWFY8fjzBJYj4w	+
1	6a28881545538453afe00fc8	6a28881545538453afe00fc5	Page 1	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
2	6a28881545538453afe00fc8	6a28881545538453afe00fc6	Page 2	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
3	6a28881545538453afe00fc8	6a28881545538453afe00fc7	Page 3	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
1	6a28881545538453afe00fda	6a28881545538453afe00fd6	Marche Public	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
2	6a28881545538453afe00fda	6a28881545538453afe00fd7	Digitalisation	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
3	6a28881545538453afe00fda	6a28881545538453afe00fd8	Construction Durable	https://www.crtib.lu/fr/crti-b/qui-sommes-nous	△
4	6a28881545538453afe00fda	6a28881545538453afe00fd9	Performance enérgetique 	www.crtib.lu	#
\.


--
-- Data for Name: pages_blocks_text_block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_text_block (_order, _parent_id, _path, id, content, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_timeline; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_timeline (_order, _parent_id, _path, id, highlight_last, block_name) FROM stdin;
1	36	layout	6a28881545538453afe00fd2	t	\N
\.


--
-- Data for Name: pages_blocks_timeline_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_timeline_items (_order, _parent_id, id, year, title) FROM stdin;
1	6a28881545538453afe00fd2	6a28881545538453afe00fcf	1999	Année de cération 
2	6a28881545538453afe00fd2	6a28881545538453afe00fd0	2015	Création de la GIE 
3	6a28881545538453afe00fd2	6a28881545538453afe00fd1	2026	Création du département performance enérgetique 
\.


--
-- Data for Name: pages_blocks_video_cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_video_cards (_order, _parent_id, _path, id, title, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_video_cards_videos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_video_cards_videos (_order, _parent_id, id, title, type, src) FROM stdin;
\.


--
-- Data for Name: pages_blocks_video_embed; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_blocks_video_embed (_order, _parent_id, _path, id, title, type, src, block_name) FROM stdin;
1	32	layout	6a28881545538453afe00fb1	Video de apresentação	youtube	https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=0gcJCdkKAYcqIYzv	\N
1	16	layout	6a28881545538453afe00f4b	BIM IDS 	youtube	https://youtu.be/XnQYmbZCxVw?si=IPlG6Y-OKiJR5ZxG	\N
1	39	layout	6a28881545538453afe00fd5	video de presentation	youtube	https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=0gcJCdkKAYcqIYzv	\N
\.


--
-- Data for Name: pages_rels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_rels (id, "order", parent_id, path, clauses_id) FROM stdin;
\.


--
-- Data for Name: partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partners (id, name, type, logo_id, href, "order", updated_at, created_at) FROM stdin;
1	OAI	partner	88	https://crtib-front.zfpyy7.easypanel.host/nos-partenaires	1	2026-06-09 22:39:31.839+01	2026-06-09 22:39:31.837+01
2	Groupement des entrepreneurs 	partner	89	https://crtib-front.zfpyy7.easypanel.host/nos-partenaires	2	2026-06-09 22:39:31.853+01	2026-06-09 22:39:31.853+01
3	Chambre des métiers 	partner	99	https://crtib-front.zfpyy7.easypanel.host/nos-partenaires	3	2026-06-09 22:39:31.858+01	2026-06-09 22:39:31.858+01
4	Fedération des artisants 	partner	87	https://crtib-front.zfpyy7.easypanel.host/nos-partenaires	4	2026-06-09 22:39:31.862+01	2026-06-09 22:39:31.862+01
\.


--
-- Data for Name: payload_kv; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_kv (id, key, data) FROM stdin;
\.


--
-- Data for Name: payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_locked_documents (id, global_slug, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_locked_documents_rels (id, "order", parent_id, path, users_id, media_id, pages_id, news_id, partners_id, videos_id, activity_reports_id, timeline_items_id, clauses_id, newsletter_subscribers_id, formations_id) FROM stdin;
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	20260407_033503	1	2026-06-09 22:36:55.938+01	2026-06-09 22:36:55.937+01
2	20260415_144446	1	2026-06-09 22:36:55.986+01	2026-06-09 22:36:55.986+01
3	dev	-1	2026-06-12 00:42:03.285+01	2026-06-09 22:37:26.772+01
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
5	collection-users	{"limit": 10}	2026-06-09 22:51:47.448+01	2026-06-09 22:51:43.935+01
10	collection-activity-reports	{}	2026-06-09 22:52:12.737+01	2026-06-09 22:52:12.737+01
11	collection-partners	{}	2026-06-09 22:52:13.823+01	2026-06-09 22:52:13.823+01
2	collection-pages	{"limit": 10, "editViewType": "default"}	2026-06-09 23:00:29.289+01	2026-06-09 22:44:21.126+01
4	collection-media	{"limit": 10, "editViewType": "default"}	2026-06-09 23:57:44.2+01	2026-06-09 22:50:41.912+01
7	collection-news	{"editViewType": "default"}	2026-06-10 01:31:25.112+01	2026-06-09 22:51:55.652+01
6	collection-videos	{"editViewType": "default"}	2026-06-10 01:45:56.668+01	2026-06-09 22:51:51.359+01
9	collection-timeline-items	{"editViewType": "default"}	2026-06-10 01:47:05.879+01	2026-06-09 22:52:09.023+01
1	nav	{"groups": {"Collections": {"open": true}}}	2026-06-10 18:14:15.537+01	2026-06-09 22:44:19.906+01
12	collection-formations	{"limit": 10, "editViewType": "default"}	2026-06-10 18:14:53.064+01	2026-06-10 00:10:33.11+01
8	collection-clauses	{"limit": 10, "editViewType": "default"}	2026-06-10 18:31:24.338+01	2026-06-09 22:51:59.239+01
3	collection-newsletter-subscribers	{"editViewType": "default"}	2026-06-10 18:32:24.289+01	2026-06-09 22:50:39.219+01
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
9	\N	5	user	1
18	\N	10	user	1
19	\N	11	user	1
28	\N	2	user	1
30	\N	4	user	1
38	\N	7	user	1
46	\N	6	user	1
50	\N	9	user	1
52	\N	1	user	1
53	\N	12	user	1
54	\N	8	user	1
55	\N	3	user	1
\.


--
-- Data for Name: timeline_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.timeline_items (id, year, title, "order", updated_at, created_at) FROM stdin;
1	2026	Copa de software	1	2026-06-09 22:39:32.036+01	2026-06-09 22:39:32.035+01
2	test	vhjkbncbjhsbdvd	1	2026-06-10 01:47:21.915+01	2026-06-10 01:47:21.915+01
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
1	2026-06-09 22:44:14.543+01	2026-06-09 22:44:14.541+01	staghassen1@gmail.com	\N	\N	881cb09dfb3f43f2f79214483bee849ce1dd17cd89d65a90caefd4fe592fd7c2	2965c97e76432dc5bea067e42bc13619dc38e2ecddf7ef65c871beff4a909193f1231e5319dbefe916c0b2951be69658974b330fcaa8723f6bc181a9d919e5e96f14bd0402ff27eb4694dfe358682086e60ed0a9374b213b90583a2d90345f40028ab9909c33b80855d5badca94be812719d461a0a7879822252eab4011fef5b50ccb84c48cf0a1274c40ab6e4e854d3448a69be34586513509878684da84dbc29d872219f53c0eefdc954013526eb2f4310bfa6af85c75e8418f4a4a4f24ba7a36b896b4a0291be730617cecfe680645b67ed393250a9e9557de08597cddb3230c0ac1d6880ac807107557a44dbe9c9371970a0690ecfc79595abd85ce6e7423cce79d74c48eca6bf2a824674616d64e1b54d5e33e8f512321705a0922f814836e442eab757b50e5f985fcab935adbabb0e55f2a777b0e1de4649a3832b0170ffd9d74e76a5c983265dcf879bcec82336c617f25985e00a8d097b817c2b032c11fbbbfeb2e04e059369e921b7530b12320c50ebe0e960cca4bd05a7ae04d114bc9da839495663735df1c25e417e82f061342a482646126c01ef09907b72d9eb7f1f2cc42b9fdebf02311a6b6c4bfb0455d784b0f43cde9104903f1ea04676a361b70d23b75c274de3bf567403d2d6278f95c7347765c5ee7aa61ae1db13b701b27d6bd7e4a9caac650da1e89028b6ce822727a12fc0e6365d8f5668df2b331d	0	\N
\.


--
-- Data for Name: users_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	687474bc-86c2-406c-b53d-14d777cd1fae	2026-06-11 23:56:17.976+01	2026-06-12 01:56:17.976+01
\.


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.videos (id, title, type, src, "order", updated_at, created_at) FROM stdin;
1	Ancelloti sobre copa do mundo	youtube	https://www.youtube.com/watch?v=GX48gapmyho	1	2026-06-09 22:39:31.949+01	2026-06-09 22:39:31.949+01
\.


--
-- Name: _formations_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._formations_v_id_seq', 17, true);


--
-- Name: _news_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._news_v_id_seq', 4, true);


--
-- Name: _pages_v_blocks_accordion_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_accordion_block_id_seq', 1, false);


--
-- Name: _pages_v_blocks_accordion_block_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_accordion_block_items_id_seq', 1, false);


--
-- Name: _pages_v_blocks_activity_reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_activity_reports_id_seq', 2, true);


--
-- Name: _pages_v_blocks_activity_reports_reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_activity_reports_reports_id_seq', 6, true);


--
-- Name: _pages_v_blocks_calculator_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_calculator_id_seq', 4, true);


--
-- Name: _pages_v_blocks_clauses_grid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_clauses_grid_id_seq', 1, false);


--
-- Name: _pages_v_blocks_contact_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_contact_block_id_seq', 1, false);


--
-- Name: _pages_v_blocks_documents_section_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_documents_section_id_seq', 4, true);


--
-- Name: _pages_v_blocks_documents_section_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_documents_section_items_id_seq', 24, true);


--
-- Name: _pages_v_blocks_download_grid_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_download_grid_documents_id_seq', 1, false);


--
-- Name: _pages_v_blocks_download_grid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_download_grid_id_seq', 1, false);


--
-- Name: _pages_v_blocks_download_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_download_links_id_seq', 1, false);


--
-- Name: _pages_v_blocks_download_links_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_download_links_items_id_seq', 1, false);


--
-- Name: _pages_v_blocks_dynamic_grid_columns_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_dynamic_grid_columns_id_seq', 1, false);


--
-- Name: _pages_v_blocks_dynamic_grid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_dynamic_grid_id_seq', 1, false);


--
-- Name: _pages_v_blocks_dynamic_grid_rows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_dynamic_grid_rows_id_seq', 1, false);


--
-- Name: _pages_v_blocks_formations_section_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_formations_section_id_seq', 19, true);


--
-- Name: _pages_v_blocks_news_section_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_news_section_id_seq', 8, true);


--
-- Name: _pages_v_blocks_newsletter_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_newsletter_block_id_seq', 9, true);


--
-- Name: _pages_v_blocks_organogram_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_organogram_id_seq', 2, true);


--
-- Name: _pages_v_blocks_organogram_root_children_children_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_organogram_root_children_children_id_seq', 1, false);


--
-- Name: _pages_v_blocks_organogram_root_children_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_organogram_root_children_id_seq', 12, true);


--
-- Name: _pages_v_blocks_partners_associations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_partners_associations_id_seq', 1, true);


--
-- Name: _pages_v_blocks_partners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_partners_id_seq', 3, true);


--
-- Name: _pages_v_blocks_partners_partners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_partners_partners_id_seq', 8, true);


--
-- Name: _pages_v_blocks_photo_hero_carousel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_photo_hero_carousel_id_seq', 41, true);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_photo_hero_carousel_slides_id_seq', 41, true);


--
-- Name: _pages_v_blocks_quick_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_quick_links_id_seq', 10, true);


--
-- Name: _pages_v_blocks_quick_links_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_quick_links_items_id_seq', 44, true);


--
-- Name: _pages_v_blocks_text_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_text_block_id_seq', 1, false);


--
-- Name: _pages_v_blocks_timeline_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_timeline_id_seq', 2, true);


--
-- Name: _pages_v_blocks_timeline_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_timeline_items_id_seq', 6, true);


--
-- Name: _pages_v_blocks_video_cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_video_cards_id_seq', 1, false);


--
-- Name: _pages_v_blocks_video_cards_videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_video_cards_videos_id_seq', 1, false);


--
-- Name: _pages_v_blocks_video_embed_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_blocks_video_embed_id_seq', 5, true);


--
-- Name: _pages_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_id_seq', 88, true);


--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public._pages_v_rels_id_seq', 1, false);


--
-- Name: activity_reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.activity_reports_id_seq', 1, false);


--
-- Name: clauses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clauses_id_seq', 23, true);


--
-- Name: formations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.formations_id_seq', 25, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.media_id_seq', 220, true);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 4, true);


--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.newsletter_subscribers_id_seq', 1, false);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_id_seq', 42, true);


--
-- Name: pages_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_rels_id_seq', 1, false);


--
-- Name: partners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.partners_id_seq', 4, true);


--
-- Name: payload_kv_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_kv_id_seq', 1, false);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_locked_documents_id_seq', 15, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_locked_documents_rels_id_seq', 30, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_migrations_id_seq', 3, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_preferences_id_seq', 12, true);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payload_preferences_rels_id_seq', 55, true);


--
-- Name: timeline_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.timeline_items_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.videos_id_seq', 1, true);


--
-- Name: _formations_v _formations_v_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._formations_v
    ADD CONSTRAINT _formations_v_pkey PRIMARY KEY (id);


--
-- Name: _news_v _news_v_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._news_v
    ADD CONSTRAINT _news_v_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_accordion_block_items _pages_v_blocks_accordion_block_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block_items
    ADD CONSTRAINT _pages_v_blocks_accordion_block_items_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_accordion_block _pages_v_blocks_accordion_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block
    ADD CONSTRAINT _pages_v_blocks_accordion_block_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_activity_reports _pages_v_blocks_activity_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports
    ADD CONSTRAINT _pages_v_blocks_activity_reports_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_activity_reports_reports _pages_v_blocks_activity_reports_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports_reports
    ADD CONSTRAINT _pages_v_blocks_activity_reports_reports_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_calculator _pages_v_blocks_calculator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_calculator
    ADD CONSTRAINT _pages_v_blocks_calculator_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_clauses_grid _pages_v_blocks_clauses_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_clauses_grid
    ADD CONSTRAINT _pages_v_blocks_clauses_grid_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_contact_block _pages_v_blocks_contact_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_contact_block
    ADD CONSTRAINT _pages_v_blocks_contact_block_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_documents_section_items _pages_v_blocks_documents_section_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section_items
    ADD CONSTRAINT _pages_v_blocks_documents_section_items_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_documents_section _pages_v_blocks_documents_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section
    ADD CONSTRAINT _pages_v_blocks_documents_section_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_download_grid _pages_v_blocks_download_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid
    ADD CONSTRAINT _pages_v_blocks_download_grid_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_download_links_items _pages_v_blocks_download_links_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links_items
    ADD CONSTRAINT _pages_v_blocks_download_links_items_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_download_links _pages_v_blocks_download_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links
    ADD CONSTRAINT _pages_v_blocks_download_links_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_dynamic_grid_columns _pages_v_blocks_dynamic_grid_columns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_columns
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_columns_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_dynamic_grid _pages_v_blocks_dynamic_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_dynamic_grid_rows _pages_v_blocks_dynamic_grid_rows_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_rows
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_rows_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_formations_section _pages_v_blocks_formations_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_formations_section
    ADD CONSTRAINT _pages_v_blocks_formations_section_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_news_section _pages_v_blocks_news_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_news_section
    ADD CONSTRAINT _pages_v_blocks_news_section_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_newsletter_block _pages_v_blocks_newsletter_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_newsletter_block
    ADD CONSTRAINT _pages_v_blocks_newsletter_block_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_organogram _pages_v_blocks_organogram_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram
    ADD CONSTRAINT _pages_v_blocks_organogram_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_organogram_root_children_children _pages_v_blocks_organogram_root_children_children_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_children_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_organogram_root_children _pages_v_blocks_organogram_root_children_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_partners_associations _pages_v_blocks_partners_associations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_associations
    ADD CONSTRAINT _pages_v_blocks_partners_associations_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_partners_partners _pages_v_blocks_partners_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_partners
    ADD CONSTRAINT _pages_v_blocks_partners_partners_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_partners _pages_v_blocks_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners
    ADD CONSTRAINT _pages_v_blocks_partners_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_photo_hero_carousel _pages_v_blocks_photo_hero_carousel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel
    ADD CONSTRAINT _pages_v_blocks_photo_hero_carousel_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides _pages_v_blocks_photo_hero_carousel_slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT _pages_v_blocks_photo_hero_carousel_slides_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_quick_links_items _pages_v_blocks_quick_links_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links_items
    ADD CONSTRAINT _pages_v_blocks_quick_links_items_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_quick_links _pages_v_blocks_quick_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links
    ADD CONSTRAINT _pages_v_blocks_quick_links_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_text_block _pages_v_blocks_text_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_text_block
    ADD CONSTRAINT _pages_v_blocks_text_block_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_timeline_items _pages_v_blocks_timeline_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline_items
    ADD CONSTRAINT _pages_v_blocks_timeline_items_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_timeline _pages_v_blocks_timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline
    ADD CONSTRAINT _pages_v_blocks_timeline_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_video_cards _pages_v_blocks_video_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards
    ADD CONSTRAINT _pages_v_blocks_video_cards_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_video_cards_videos _pages_v_blocks_video_cards_videos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards_videos
    ADD CONSTRAINT _pages_v_blocks_video_cards_videos_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_blocks_video_embed _pages_v_blocks_video_embed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_embed
    ADD CONSTRAINT _pages_v_blocks_video_embed_pkey PRIMARY KEY (id);


--
-- Name: _pages_v _pages_v_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v
    ADD CONSTRAINT _pages_v_pkey PRIMARY KEY (id);


--
-- Name: _pages_v_rels _pages_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_rels
    ADD CONSTRAINT _pages_v_rels_pkey PRIMARY KEY (id);


--
-- Name: activity_reports activity_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_reports
    ADD CONSTRAINT activity_reports_pkey PRIMARY KEY (id);


--
-- Name: clauses clauses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clauses
    ADD CONSTRAINT clauses_pkey PRIMARY KEY (id);


--
-- Name: formations formations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formations
    ADD CONSTRAINT formations_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: newsletter_subscribers newsletter_subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsletter_subscribers
    ADD CONSTRAINT newsletter_subscribers_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_accordion_block_items pages_blocks_accordion_block_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_accordion_block_items
    ADD CONSTRAINT pages_blocks_accordion_block_items_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_accordion_block pages_blocks_accordion_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_accordion_block
    ADD CONSTRAINT pages_blocks_accordion_block_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_activity_reports pages_blocks_activity_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_activity_reports
    ADD CONSTRAINT pages_blocks_activity_reports_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_activity_reports_reports pages_blocks_activity_reports_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_activity_reports_reports
    ADD CONSTRAINT pages_blocks_activity_reports_reports_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_calculator pages_blocks_calculator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_calculator
    ADD CONSTRAINT pages_blocks_calculator_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_clauses_grid pages_blocks_clauses_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_clauses_grid
    ADD CONSTRAINT pages_blocks_clauses_grid_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_contact_block pages_blocks_contact_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_contact_block
    ADD CONSTRAINT pages_blocks_contact_block_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_documents_section_items pages_blocks_documents_section_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_documents_section_items
    ADD CONSTRAINT pages_blocks_documents_section_items_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_documents_section pages_blocks_documents_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_documents_section
    ADD CONSTRAINT pages_blocks_documents_section_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_download_grid pages_blocks_download_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid
    ADD CONSTRAINT pages_blocks_download_grid_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_download_links_items pages_blocks_download_links_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_links_items
    ADD CONSTRAINT pages_blocks_download_links_items_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_download_links pages_blocks_download_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_links
    ADD CONSTRAINT pages_blocks_download_links_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_dynamic_grid_columns pages_blocks_dynamic_grid_columns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid_columns
    ADD CONSTRAINT pages_blocks_dynamic_grid_columns_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_dynamic_grid pages_blocks_dynamic_grid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid
    ADD CONSTRAINT pages_blocks_dynamic_grid_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_dynamic_grid_rows pages_blocks_dynamic_grid_rows_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid_rows
    ADD CONSTRAINT pages_blocks_dynamic_grid_rows_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_formations_section pages_blocks_formations_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_formations_section
    ADD CONSTRAINT pages_blocks_formations_section_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_news_section pages_blocks_news_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_news_section
    ADD CONSTRAINT pages_blocks_news_section_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_newsletter_block pages_blocks_newsletter_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_newsletter_block
    ADD CONSTRAINT pages_blocks_newsletter_block_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_organogram pages_blocks_organogram_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram
    ADD CONSTRAINT pages_blocks_organogram_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_organogram_root_children_children pages_blocks_organogram_root_children_children_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_children_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_organogram_root_children pages_blocks_organogram_root_children_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_partners_associations pages_blocks_partners_associations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_associations
    ADD CONSTRAINT pages_blocks_partners_associations_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_partners_partners pages_blocks_partners_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_partners
    ADD CONSTRAINT pages_blocks_partners_partners_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_partners pages_blocks_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners
    ADD CONSTRAINT pages_blocks_partners_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_photo_hero_carousel pages_blocks_photo_hero_carousel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_photo_hero_carousel
    ADD CONSTRAINT pages_blocks_photo_hero_carousel_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_photo_hero_carousel_slides pages_blocks_photo_hero_carousel_slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT pages_blocks_photo_hero_carousel_slides_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_quick_links_items pages_blocks_quick_links_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_quick_links_items
    ADD CONSTRAINT pages_blocks_quick_links_items_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_quick_links pages_blocks_quick_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_quick_links
    ADD CONSTRAINT pages_blocks_quick_links_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_text_block pages_blocks_text_block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_text_block
    ADD CONSTRAINT pages_blocks_text_block_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_timeline_items pages_blocks_timeline_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_timeline_items
    ADD CONSTRAINT pages_blocks_timeline_items_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_timeline pages_blocks_timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_timeline
    ADD CONSTRAINT pages_blocks_timeline_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_video_cards pages_blocks_video_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_cards
    ADD CONSTRAINT pages_blocks_video_cards_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_video_cards_videos pages_blocks_video_cards_videos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_cards_videos
    ADD CONSTRAINT pages_blocks_video_cards_videos_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_video_embed pages_blocks_video_embed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_embed
    ADD CONSTRAINT pages_blocks_video_embed_pkey PRIMARY KEY (id);


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);


--
-- Name: pages_rels pages_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_rels
    ADD CONSTRAINT pages_rels_pkey PRIMARY KEY (id);


--
-- Name: partners partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);


--
-- Name: payload_kv payload_kv_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_kv
    ADD CONSTRAINT payload_kv_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents
    ADD CONSTRAINT payload_locked_documents_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pkey PRIMARY KEY (id);


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_migrations
    ADD CONSTRAINT payload_migrations_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences
    ADD CONSTRAINT payload_preferences_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_pkey PRIMARY KEY (id);


--
-- Name: timeline_items timeline_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timeline_items
    ADD CONSTRAINT timeline_items_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_sessions users_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_pkey PRIMARY KEY (id);


--
-- Name: videos videos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);


--
-- Name: _formations_v_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_created_at_idx ON public._formations_v USING btree (created_at);


--
-- Name: _formations_v_latest_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_latest_idx ON public._formations_v USING btree (latest);


--
-- Name: _formations_v_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_parent_idx ON public._formations_v USING btree (parent_id);


--
-- Name: _formations_v_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_updated_at_idx ON public._formations_v USING btree (updated_at);


--
-- Name: _formations_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_version_version__status_idx ON public._formations_v USING btree (version__status);


--
-- Name: _formations_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_version_version_created_at_idx ON public._formations_v USING btree (version_created_at);


--
-- Name: _formations_v_version_version_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_version_version_image_idx ON public._formations_v USING btree (version_image_id);


--
-- Name: _formations_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_version_version_slug_idx ON public._formations_v USING btree (version_slug);


--
-- Name: _formations_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _formations_v_version_version_updated_at_idx ON public._formations_v USING btree (version_updated_at);


--
-- Name: _news_v_autosave_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_autosave_idx ON public._news_v USING btree (autosave);


--
-- Name: _news_v_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_created_at_idx ON public._news_v USING btree (created_at);


--
-- Name: _news_v_latest_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_latest_idx ON public._news_v USING btree (latest);


--
-- Name: _news_v_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_parent_idx ON public._news_v USING btree (parent_id);


--
-- Name: _news_v_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_updated_at_idx ON public._news_v USING btree (updated_at);


--
-- Name: _news_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_version_version__status_idx ON public._news_v USING btree (version__status);


--
-- Name: _news_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_version_version_created_at_idx ON public._news_v USING btree (version_created_at);


--
-- Name: _news_v_version_version_featured_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_version_version_featured_image_idx ON public._news_v USING btree (version_featured_image_id);


--
-- Name: _news_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_version_version_slug_idx ON public._news_v USING btree (version_slug);


--
-- Name: _news_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _news_v_version_version_updated_at_idx ON public._news_v USING btree (version_updated_at);


--
-- Name: _pages_v_autosave_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_autosave_idx ON public._pages_v USING btree (autosave);


--
-- Name: _pages_v_blocks_accordion_block_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_accordion_block_items_order_idx ON public._pages_v_blocks_accordion_block_items USING btree (_order);


--
-- Name: _pages_v_blocks_accordion_block_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_accordion_block_items_parent_id_idx ON public._pages_v_blocks_accordion_block_items USING btree (_parent_id);


--
-- Name: _pages_v_blocks_accordion_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_accordion_block_order_idx ON public._pages_v_blocks_accordion_block USING btree (_order);


--
-- Name: _pages_v_blocks_accordion_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_accordion_block_parent_id_idx ON public._pages_v_blocks_accordion_block USING btree (_parent_id);


--
-- Name: _pages_v_blocks_accordion_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_accordion_block_path_idx ON public._pages_v_blocks_accordion_block USING btree (_path);


--
-- Name: _pages_v_blocks_activity_reports_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_order_idx ON public._pages_v_blocks_activity_reports USING btree (_order);


--
-- Name: _pages_v_blocks_activity_reports_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_parent_id_idx ON public._pages_v_blocks_activity_reports USING btree (_parent_id);


--
-- Name: _pages_v_blocks_activity_reports_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_path_idx ON public._pages_v_blocks_activity_reports USING btree (_path);


--
-- Name: _pages_v_blocks_activity_reports_reports_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_reports_order_idx ON public._pages_v_blocks_activity_reports_reports USING btree (_order);


--
-- Name: _pages_v_blocks_activity_reports_reports_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_reports_parent_id_idx ON public._pages_v_blocks_activity_reports_reports USING btree (_parent_id);


--
-- Name: _pages_v_blocks_activity_reports_reports_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_activity_reports_reports_pdf_idx ON public._pages_v_blocks_activity_reports_reports USING btree (pdf_id);


--
-- Name: _pages_v_blocks_calculator_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_calculator_order_idx ON public._pages_v_blocks_calculator USING btree (_order);


--
-- Name: _pages_v_blocks_calculator_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_calculator_parent_id_idx ON public._pages_v_blocks_calculator USING btree (_parent_id);


--
-- Name: _pages_v_blocks_calculator_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_calculator_path_idx ON public._pages_v_blocks_calculator USING btree (_path);


--
-- Name: _pages_v_blocks_clauses_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_clauses_grid_order_idx ON public._pages_v_blocks_clauses_grid USING btree (_order);


--
-- Name: _pages_v_blocks_clauses_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_clauses_grid_parent_id_idx ON public._pages_v_blocks_clauses_grid USING btree (_parent_id);


--
-- Name: _pages_v_blocks_clauses_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_clauses_grid_path_idx ON public._pages_v_blocks_clauses_grid USING btree (_path);


--
-- Name: _pages_v_blocks_contact_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_contact_block_order_idx ON public._pages_v_blocks_contact_block USING btree (_order);


--
-- Name: _pages_v_blocks_contact_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_contact_block_parent_id_idx ON public._pages_v_blocks_contact_block USING btree (_parent_id);


--
-- Name: _pages_v_blocks_contact_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_contact_block_path_idx ON public._pages_v_blocks_contact_block USING btree (_path);


--
-- Name: _pages_v_blocks_documents_section_items_file_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_items_file_idx ON public._pages_v_blocks_documents_section_items USING btree (file_id);


--
-- Name: _pages_v_blocks_documents_section_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_items_order_idx ON public._pages_v_blocks_documents_section_items USING btree (_order);


--
-- Name: _pages_v_blocks_documents_section_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_items_parent_id_idx ON public._pages_v_blocks_documents_section_items USING btree (_parent_id);


--
-- Name: _pages_v_blocks_documents_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_order_idx ON public._pages_v_blocks_documents_section USING btree (_order);


--
-- Name: _pages_v_blocks_documents_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_parent_id_idx ON public._pages_v_blocks_documents_section USING btree (_parent_id);


--
-- Name: _pages_v_blocks_documents_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_documents_section_path_idx ON public._pages_v_blocks_documents_section USING btree (_path);


--
-- Name: _pages_v_blocks_download_grid_documents_doc_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_doc_idx ON public._pages_v_blocks_download_grid_documents USING btree (doc_id);


--
-- Name: _pages_v_blocks_download_grid_documents_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_order_idx ON public._pages_v_blocks_download_grid_documents USING btree (_order);


--
-- Name: _pages_v_blocks_download_grid_documents_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_parent_id_idx ON public._pages_v_blocks_download_grid_documents USING btree (_parent_id);


--
-- Name: _pages_v_blocks_download_grid_documents_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_pdf_idx ON public._pages_v_blocks_download_grid_documents USING btree (pdf_id);


--
-- Name: _pages_v_blocks_download_grid_documents_rtf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_rtf_idx ON public._pages_v_blocks_download_grid_documents USING btree (rtf_id);


--
-- Name: _pages_v_blocks_download_grid_documents_xls_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_xls_idx ON public._pages_v_blocks_download_grid_documents USING btree (xls_id);


--
-- Name: _pages_v_blocks_download_grid_documents_zip_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_documents_zip_idx ON public._pages_v_blocks_download_grid_documents USING btree (zip_id);


--
-- Name: _pages_v_blocks_download_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_order_idx ON public._pages_v_blocks_download_grid USING btree (_order);


--
-- Name: _pages_v_blocks_download_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_parent_id_idx ON public._pages_v_blocks_download_grid USING btree (_parent_id);


--
-- Name: _pages_v_blocks_download_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_grid_path_idx ON public._pages_v_blocks_download_grid USING btree (_path);


--
-- Name: _pages_v_blocks_download_links_items_file_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_items_file_idx ON public._pages_v_blocks_download_links_items USING btree (file_id);


--
-- Name: _pages_v_blocks_download_links_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_items_order_idx ON public._pages_v_blocks_download_links_items USING btree (_order);


--
-- Name: _pages_v_blocks_download_links_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_items_parent_id_idx ON public._pages_v_blocks_download_links_items USING btree (_parent_id);


--
-- Name: _pages_v_blocks_download_links_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_order_idx ON public._pages_v_blocks_download_links USING btree (_order);


--
-- Name: _pages_v_blocks_download_links_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_parent_id_idx ON public._pages_v_blocks_download_links USING btree (_parent_id);


--
-- Name: _pages_v_blocks_download_links_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_download_links_path_idx ON public._pages_v_blocks_download_links USING btree (_path);


--
-- Name: _pages_v_blocks_dynamic_grid_columns_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_columns_order_idx ON public._pages_v_blocks_dynamic_grid_columns USING btree (_order);


--
-- Name: _pages_v_blocks_dynamic_grid_columns_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_columns_parent_id_idx ON public._pages_v_blocks_dynamic_grid_columns USING btree (_parent_id);


--
-- Name: _pages_v_blocks_dynamic_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_order_idx ON public._pages_v_blocks_dynamic_grid USING btree (_order);


--
-- Name: _pages_v_blocks_dynamic_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_parent_id_idx ON public._pages_v_blocks_dynamic_grid USING btree (_parent_id);


--
-- Name: _pages_v_blocks_dynamic_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_path_idx ON public._pages_v_blocks_dynamic_grid USING btree (_path);


--
-- Name: _pages_v_blocks_dynamic_grid_rows_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_rows_order_idx ON public._pages_v_blocks_dynamic_grid_rows USING btree (_order);


--
-- Name: _pages_v_blocks_dynamic_grid_rows_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_dynamic_grid_rows_parent_id_idx ON public._pages_v_blocks_dynamic_grid_rows USING btree (_parent_id);


--
-- Name: _pages_v_blocks_formations_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_formations_section_order_idx ON public._pages_v_blocks_formations_section USING btree (_order);


--
-- Name: _pages_v_blocks_formations_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_formations_section_parent_id_idx ON public._pages_v_blocks_formations_section USING btree (_parent_id);


--
-- Name: _pages_v_blocks_formations_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_formations_section_path_idx ON public._pages_v_blocks_formations_section USING btree (_path);


--
-- Name: _pages_v_blocks_news_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_news_section_order_idx ON public._pages_v_blocks_news_section USING btree (_order);


--
-- Name: _pages_v_blocks_news_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_news_section_parent_id_idx ON public._pages_v_blocks_news_section USING btree (_parent_id);


--
-- Name: _pages_v_blocks_news_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_news_section_path_idx ON public._pages_v_blocks_news_section USING btree (_path);


--
-- Name: _pages_v_blocks_newsletter_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_newsletter_block_order_idx ON public._pages_v_blocks_newsletter_block USING btree (_order);


--
-- Name: _pages_v_blocks_newsletter_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_newsletter_block_parent_id_idx ON public._pages_v_blocks_newsletter_block USING btree (_parent_id);


--
-- Name: _pages_v_blocks_newsletter_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_newsletter_block_path_idx ON public._pages_v_blocks_newsletter_block USING btree (_path);


--
-- Name: _pages_v_blocks_organogram_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_order_idx ON public._pages_v_blocks_organogram USING btree (_order);


--
-- Name: _pages_v_blocks_organogram_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_parent_id_idx ON public._pages_v_blocks_organogram USING btree (_parent_id);


--
-- Name: _pages_v_blocks_organogram_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_path_idx ON public._pages_v_blocks_organogram USING btree (_path);


--
-- Name: _pages_v_blocks_organogram_root_children_children_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_children_order_idx ON public._pages_v_blocks_organogram_root_children_children USING btree (_order);


--
-- Name: _pages_v_blocks_organogram_root_children_children_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_children_parent_id_idx ON public._pages_v_blocks_organogram_root_children_children USING btree (_parent_id);


--
-- Name: _pages_v_blocks_organogram_root_children_children_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_children_photo_idx ON public._pages_v_blocks_organogram_root_children_children USING btree (photo_id);


--
-- Name: _pages_v_blocks_organogram_root_children_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_order_idx ON public._pages_v_blocks_organogram_root_children USING btree (_order);


--
-- Name: _pages_v_blocks_organogram_root_children_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_parent_id_idx ON public._pages_v_blocks_organogram_root_children USING btree (_parent_id);


--
-- Name: _pages_v_blocks_organogram_root_children_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_children_photo_idx ON public._pages_v_blocks_organogram_root_children USING btree (photo_id);


--
-- Name: _pages_v_blocks_organogram_root_root_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_organogram_root_root_photo_idx ON public._pages_v_blocks_organogram USING btree (root_photo_id);


--
-- Name: _pages_v_blocks_partners_associations_logo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_associations_logo_idx ON public._pages_v_blocks_partners_associations USING btree (logo_id);


--
-- Name: _pages_v_blocks_partners_associations_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_associations_order_idx ON public._pages_v_blocks_partners_associations USING btree (_order);


--
-- Name: _pages_v_blocks_partners_associations_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_associations_parent_id_idx ON public._pages_v_blocks_partners_associations USING btree (_parent_id);


--
-- Name: _pages_v_blocks_partners_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_order_idx ON public._pages_v_blocks_partners USING btree (_order);


--
-- Name: _pages_v_blocks_partners_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_parent_id_idx ON public._pages_v_blocks_partners USING btree (_parent_id);


--
-- Name: _pages_v_blocks_partners_partners_logo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_partners_logo_idx ON public._pages_v_blocks_partners_partners USING btree (logo_id);


--
-- Name: _pages_v_blocks_partners_partners_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_partners_order_idx ON public._pages_v_blocks_partners_partners USING btree (_order);


--
-- Name: _pages_v_blocks_partners_partners_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_partners_parent_id_idx ON public._pages_v_blocks_partners_partners USING btree (_parent_id);


--
-- Name: _pages_v_blocks_partners_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_partners_path_idx ON public._pages_v_blocks_partners USING btree (_path);


--
-- Name: _pages_v_blocks_photo_hero_carousel_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_order_idx ON public._pages_v_blocks_photo_hero_carousel USING btree (_order);


--
-- Name: _pages_v_blocks_photo_hero_carousel_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_parent_id_idx ON public._pages_v_blocks_photo_hero_carousel USING btree (_parent_id);


--
-- Name: _pages_v_blocks_photo_hero_carousel_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_path_idx ON public._pages_v_blocks_photo_hero_carousel USING btree (_path);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_slides_image_idx ON public._pages_v_blocks_photo_hero_carousel_slides USING btree (image_id);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_slides_order_idx ON public._pages_v_blocks_photo_hero_carousel_slides USING btree (_order);


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_photo_hero_carousel_slides_parent_id_idx ON public._pages_v_blocks_photo_hero_carousel_slides USING btree (_parent_id);


--
-- Name: _pages_v_blocks_quick_links_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_quick_links_items_order_idx ON public._pages_v_blocks_quick_links_items USING btree (_order);


--
-- Name: _pages_v_blocks_quick_links_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_quick_links_items_parent_id_idx ON public._pages_v_blocks_quick_links_items USING btree (_parent_id);


--
-- Name: _pages_v_blocks_quick_links_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_quick_links_order_idx ON public._pages_v_blocks_quick_links USING btree (_order);


--
-- Name: _pages_v_blocks_quick_links_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_quick_links_parent_id_idx ON public._pages_v_blocks_quick_links USING btree (_parent_id);


--
-- Name: _pages_v_blocks_quick_links_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_quick_links_path_idx ON public._pages_v_blocks_quick_links USING btree (_path);


--
-- Name: _pages_v_blocks_text_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_text_block_order_idx ON public._pages_v_blocks_text_block USING btree (_order);


--
-- Name: _pages_v_blocks_text_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_text_block_parent_id_idx ON public._pages_v_blocks_text_block USING btree (_parent_id);


--
-- Name: _pages_v_blocks_text_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_text_block_path_idx ON public._pages_v_blocks_text_block USING btree (_path);


--
-- Name: _pages_v_blocks_timeline_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_timeline_items_order_idx ON public._pages_v_blocks_timeline_items USING btree (_order);


--
-- Name: _pages_v_blocks_timeline_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_timeline_items_parent_id_idx ON public._pages_v_blocks_timeline_items USING btree (_parent_id);


--
-- Name: _pages_v_blocks_timeline_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_timeline_order_idx ON public._pages_v_blocks_timeline USING btree (_order);


--
-- Name: _pages_v_blocks_timeline_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_timeline_parent_id_idx ON public._pages_v_blocks_timeline USING btree (_parent_id);


--
-- Name: _pages_v_blocks_timeline_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_timeline_path_idx ON public._pages_v_blocks_timeline USING btree (_path);


--
-- Name: _pages_v_blocks_video_cards_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_cards_order_idx ON public._pages_v_blocks_video_cards USING btree (_order);


--
-- Name: _pages_v_blocks_video_cards_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_cards_parent_id_idx ON public._pages_v_blocks_video_cards USING btree (_parent_id);


--
-- Name: _pages_v_blocks_video_cards_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_cards_path_idx ON public._pages_v_blocks_video_cards USING btree (_path);


--
-- Name: _pages_v_blocks_video_cards_videos_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_cards_videos_order_idx ON public._pages_v_blocks_video_cards_videos USING btree (_order);


--
-- Name: _pages_v_blocks_video_cards_videos_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_cards_videos_parent_id_idx ON public._pages_v_blocks_video_cards_videos USING btree (_parent_id);


--
-- Name: _pages_v_blocks_video_embed_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_embed_order_idx ON public._pages_v_blocks_video_embed USING btree (_order);


--
-- Name: _pages_v_blocks_video_embed_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_embed_parent_id_idx ON public._pages_v_blocks_video_embed USING btree (_parent_id);


--
-- Name: _pages_v_blocks_video_embed_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_blocks_video_embed_path_idx ON public._pages_v_blocks_video_embed USING btree (_path);


--
-- Name: _pages_v_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_created_at_idx ON public._pages_v USING btree (created_at);


--
-- Name: _pages_v_latest_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_latest_idx ON public._pages_v USING btree (latest);


--
-- Name: _pages_v_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_parent_idx ON public._pages_v USING btree (parent_id);


--
-- Name: _pages_v_rels_clauses_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_rels_clauses_id_idx ON public._pages_v_rels USING btree (clauses_id);


--
-- Name: _pages_v_rels_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_rels_order_idx ON public._pages_v_rels USING btree ("order");


--
-- Name: _pages_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_rels_parent_idx ON public._pages_v_rels USING btree (parent_id);


--
-- Name: _pages_v_rels_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_rels_path_idx ON public._pages_v_rels USING btree (path);


--
-- Name: _pages_v_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_updated_at_idx ON public._pages_v USING btree (updated_at);


--
-- Name: _pages_v_version_seo_version_seo_meta_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_seo_version_seo_meta_image_idx ON public._pages_v USING btree (version_seo_meta_image_id);


--
-- Name: _pages_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_version__status_idx ON public._pages_v USING btree (version__status);


--
-- Name: _pages_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_version_created_at_idx ON public._pages_v USING btree (version_created_at);


--
-- Name: _pages_v_version_version_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_version_parent_idx ON public._pages_v USING btree (version_parent_id);


--
-- Name: _pages_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_version_slug_idx ON public._pages_v USING btree (version_slug);


--
-- Name: _pages_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX _pages_v_version_version_updated_at_idx ON public._pages_v USING btree (version_updated_at);


--
-- Name: activity_reports_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX activity_reports_created_at_idx ON public.activity_reports USING btree (created_at);


--
-- Name: activity_reports_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX activity_reports_pdf_idx ON public.activity_reports USING btree (pdf_id);


--
-- Name: activity_reports_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX activity_reports_updated_at_idx ON public.activity_reports USING btree (updated_at);


--
-- Name: activity_reports_year_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX activity_reports_year_idx ON public.activity_reports USING btree (year);


--
-- Name: clauses_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_created_at_idx ON public.clauses USING btree (created_at);


--
-- Name: clauses_doc_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_doc_idx ON public.clauses USING btree (doc_id);


--
-- Name: clauses_number_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX clauses_number_idx ON public.clauses USING btree (number);


--
-- Name: clauses_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_pdf_idx ON public.clauses USING btree (pdf_id);


--
-- Name: clauses_rtf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_rtf_idx ON public.clauses USING btree (rtf_id);


--
-- Name: clauses_title_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_title_idx ON public.clauses USING btree (title);


--
-- Name: clauses_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX clauses_updated_at_idx ON public.clauses USING btree (updated_at);


--
-- Name: formations__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX formations__status_idx ON public.formations USING btree (_status);


--
-- Name: formations_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX formations_created_at_idx ON public.formations USING btree (created_at);


--
-- Name: formations_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX formations_image_idx ON public.formations USING btree (image_id);


--
-- Name: formations_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX formations_slug_idx ON public.formations USING btree (slug);


--
-- Name: formations_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX formations_updated_at_idx ON public.formations USING btree (updated_at);


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX media_created_at_idx ON public.media USING btree (created_at);


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX media_filename_idx ON public.media USING btree (filename);


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX media_updated_at_idx ON public.media USING btree (updated_at);


--
-- Name: news__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news__status_idx ON public.news USING btree (_status);


--
-- Name: news_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news_created_at_idx ON public.news USING btree (created_at);


--
-- Name: news_featured_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news_featured_image_idx ON public.news USING btree (featured_image_id);


--
-- Name: news_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX news_slug_idx ON public.news USING btree (slug);


--
-- Name: news_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news_updated_at_idx ON public.news USING btree (updated_at);


--
-- Name: newsletter_subscribers_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX newsletter_subscribers_created_at_idx ON public.newsletter_subscribers USING btree (created_at);


--
-- Name: newsletter_subscribers_email_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX newsletter_subscribers_email_idx ON public.newsletter_subscribers USING btree (email);


--
-- Name: newsletter_subscribers_unsubscribe_token_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX newsletter_subscribers_unsubscribe_token_idx ON public.newsletter_subscribers USING btree (unsubscribe_token);


--
-- Name: newsletter_subscribers_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX newsletter_subscribers_updated_at_idx ON public.newsletter_subscribers USING btree (updated_at);


--
-- Name: pages__status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages__status_idx ON public.pages USING btree (_status);


--
-- Name: pages_blocks_accordion_block_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_accordion_block_items_order_idx ON public.pages_blocks_accordion_block_items USING btree (_order);


--
-- Name: pages_blocks_accordion_block_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_accordion_block_items_parent_id_idx ON public.pages_blocks_accordion_block_items USING btree (_parent_id);


--
-- Name: pages_blocks_accordion_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_accordion_block_order_idx ON public.pages_blocks_accordion_block USING btree (_order);


--
-- Name: pages_blocks_accordion_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_accordion_block_parent_id_idx ON public.pages_blocks_accordion_block USING btree (_parent_id);


--
-- Name: pages_blocks_accordion_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_accordion_block_path_idx ON public.pages_blocks_accordion_block USING btree (_path);


--
-- Name: pages_blocks_activity_reports_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_order_idx ON public.pages_blocks_activity_reports USING btree (_order);


--
-- Name: pages_blocks_activity_reports_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_parent_id_idx ON public.pages_blocks_activity_reports USING btree (_parent_id);


--
-- Name: pages_blocks_activity_reports_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_path_idx ON public.pages_blocks_activity_reports USING btree (_path);


--
-- Name: pages_blocks_activity_reports_reports_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_reports_order_idx ON public.pages_blocks_activity_reports_reports USING btree (_order);


--
-- Name: pages_blocks_activity_reports_reports_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_reports_parent_id_idx ON public.pages_blocks_activity_reports_reports USING btree (_parent_id);


--
-- Name: pages_blocks_activity_reports_reports_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_activity_reports_reports_pdf_idx ON public.pages_blocks_activity_reports_reports USING btree (pdf_id);


--
-- Name: pages_blocks_calculator_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_calculator_order_idx ON public.pages_blocks_calculator USING btree (_order);


--
-- Name: pages_blocks_calculator_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_calculator_parent_id_idx ON public.pages_blocks_calculator USING btree (_parent_id);


--
-- Name: pages_blocks_calculator_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_calculator_path_idx ON public.pages_blocks_calculator USING btree (_path);


--
-- Name: pages_blocks_clauses_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_clauses_grid_order_idx ON public.pages_blocks_clauses_grid USING btree (_order);


--
-- Name: pages_blocks_clauses_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_clauses_grid_parent_id_idx ON public.pages_blocks_clauses_grid USING btree (_parent_id);


--
-- Name: pages_blocks_clauses_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_clauses_grid_path_idx ON public.pages_blocks_clauses_grid USING btree (_path);


--
-- Name: pages_blocks_contact_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_contact_block_order_idx ON public.pages_blocks_contact_block USING btree (_order);


--
-- Name: pages_blocks_contact_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_contact_block_parent_id_idx ON public.pages_blocks_contact_block USING btree (_parent_id);


--
-- Name: pages_blocks_contact_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_contact_block_path_idx ON public.pages_blocks_contact_block USING btree (_path);


--
-- Name: pages_blocks_documents_section_items_file_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_items_file_idx ON public.pages_blocks_documents_section_items USING btree (file_id);


--
-- Name: pages_blocks_documents_section_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_items_order_idx ON public.pages_blocks_documents_section_items USING btree (_order);


--
-- Name: pages_blocks_documents_section_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_items_parent_id_idx ON public.pages_blocks_documents_section_items USING btree (_parent_id);


--
-- Name: pages_blocks_documents_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_order_idx ON public.pages_blocks_documents_section USING btree (_order);


--
-- Name: pages_blocks_documents_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_parent_id_idx ON public.pages_blocks_documents_section USING btree (_parent_id);


--
-- Name: pages_blocks_documents_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_documents_section_path_idx ON public.pages_blocks_documents_section USING btree (_path);


--
-- Name: pages_blocks_download_grid_documents_doc_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_doc_idx ON public.pages_blocks_download_grid_documents USING btree (doc_id);


--
-- Name: pages_blocks_download_grid_documents_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_order_idx ON public.pages_blocks_download_grid_documents USING btree (_order);


--
-- Name: pages_blocks_download_grid_documents_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_parent_id_idx ON public.pages_blocks_download_grid_documents USING btree (_parent_id);


--
-- Name: pages_blocks_download_grid_documents_pdf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_pdf_idx ON public.pages_blocks_download_grid_documents USING btree (pdf_id);


--
-- Name: pages_blocks_download_grid_documents_rtf_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_rtf_idx ON public.pages_blocks_download_grid_documents USING btree (rtf_id);


--
-- Name: pages_blocks_download_grid_documents_xls_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_xls_idx ON public.pages_blocks_download_grid_documents USING btree (xls_id);


--
-- Name: pages_blocks_download_grid_documents_zip_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_documents_zip_idx ON public.pages_blocks_download_grid_documents USING btree (zip_id);


--
-- Name: pages_blocks_download_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_order_idx ON public.pages_blocks_download_grid USING btree (_order);


--
-- Name: pages_blocks_download_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_parent_id_idx ON public.pages_blocks_download_grid USING btree (_parent_id);


--
-- Name: pages_blocks_download_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_grid_path_idx ON public.pages_blocks_download_grid USING btree (_path);


--
-- Name: pages_blocks_download_links_items_file_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_items_file_idx ON public.pages_blocks_download_links_items USING btree (file_id);


--
-- Name: pages_blocks_download_links_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_items_order_idx ON public.pages_blocks_download_links_items USING btree (_order);


--
-- Name: pages_blocks_download_links_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_items_parent_id_idx ON public.pages_blocks_download_links_items USING btree (_parent_id);


--
-- Name: pages_blocks_download_links_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_order_idx ON public.pages_blocks_download_links USING btree (_order);


--
-- Name: pages_blocks_download_links_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_parent_id_idx ON public.pages_blocks_download_links USING btree (_parent_id);


--
-- Name: pages_blocks_download_links_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_download_links_path_idx ON public.pages_blocks_download_links USING btree (_path);


--
-- Name: pages_blocks_dynamic_grid_columns_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_columns_order_idx ON public.pages_blocks_dynamic_grid_columns USING btree (_order);


--
-- Name: pages_blocks_dynamic_grid_columns_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_columns_parent_id_idx ON public.pages_blocks_dynamic_grid_columns USING btree (_parent_id);


--
-- Name: pages_blocks_dynamic_grid_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_order_idx ON public.pages_blocks_dynamic_grid USING btree (_order);


--
-- Name: pages_blocks_dynamic_grid_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_parent_id_idx ON public.pages_blocks_dynamic_grid USING btree (_parent_id);


--
-- Name: pages_blocks_dynamic_grid_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_path_idx ON public.pages_blocks_dynamic_grid USING btree (_path);


--
-- Name: pages_blocks_dynamic_grid_rows_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_rows_order_idx ON public.pages_blocks_dynamic_grid_rows USING btree (_order);


--
-- Name: pages_blocks_dynamic_grid_rows_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_dynamic_grid_rows_parent_id_idx ON public.pages_blocks_dynamic_grid_rows USING btree (_parent_id);


--
-- Name: pages_blocks_formations_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_formations_section_order_idx ON public.pages_blocks_formations_section USING btree (_order);


--
-- Name: pages_blocks_formations_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_formations_section_parent_id_idx ON public.pages_blocks_formations_section USING btree (_parent_id);


--
-- Name: pages_blocks_formations_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_formations_section_path_idx ON public.pages_blocks_formations_section USING btree (_path);


--
-- Name: pages_blocks_news_section_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_news_section_order_idx ON public.pages_blocks_news_section USING btree (_order);


--
-- Name: pages_blocks_news_section_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_news_section_parent_id_idx ON public.pages_blocks_news_section USING btree (_parent_id);


--
-- Name: pages_blocks_news_section_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_news_section_path_idx ON public.pages_blocks_news_section USING btree (_path);


--
-- Name: pages_blocks_newsletter_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_newsletter_block_order_idx ON public.pages_blocks_newsletter_block USING btree (_order);


--
-- Name: pages_blocks_newsletter_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_newsletter_block_parent_id_idx ON public.pages_blocks_newsletter_block USING btree (_parent_id);


--
-- Name: pages_blocks_newsletter_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_newsletter_block_path_idx ON public.pages_blocks_newsletter_block USING btree (_path);


--
-- Name: pages_blocks_organogram_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_order_idx ON public.pages_blocks_organogram USING btree (_order);


--
-- Name: pages_blocks_organogram_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_parent_id_idx ON public.pages_blocks_organogram USING btree (_parent_id);


--
-- Name: pages_blocks_organogram_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_path_idx ON public.pages_blocks_organogram USING btree (_path);


--
-- Name: pages_blocks_organogram_root_children_children_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_children_order_idx ON public.pages_blocks_organogram_root_children_children USING btree (_order);


--
-- Name: pages_blocks_organogram_root_children_children_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_children_parent_id_idx ON public.pages_blocks_organogram_root_children_children USING btree (_parent_id);


--
-- Name: pages_blocks_organogram_root_children_children_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_children_photo_idx ON public.pages_blocks_organogram_root_children_children USING btree (photo_id);


--
-- Name: pages_blocks_organogram_root_children_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_order_idx ON public.pages_blocks_organogram_root_children USING btree (_order);


--
-- Name: pages_blocks_organogram_root_children_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_parent_id_idx ON public.pages_blocks_organogram_root_children USING btree (_parent_id);


--
-- Name: pages_blocks_organogram_root_children_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_children_photo_idx ON public.pages_blocks_organogram_root_children USING btree (photo_id);


--
-- Name: pages_blocks_organogram_root_root_photo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_organogram_root_root_photo_idx ON public.pages_blocks_organogram USING btree (root_photo_id);


--
-- Name: pages_blocks_partners_associations_logo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_associations_logo_idx ON public.pages_blocks_partners_associations USING btree (logo_id);


--
-- Name: pages_blocks_partners_associations_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_associations_order_idx ON public.pages_blocks_partners_associations USING btree (_order);


--
-- Name: pages_blocks_partners_associations_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_associations_parent_id_idx ON public.pages_blocks_partners_associations USING btree (_parent_id);


--
-- Name: pages_blocks_partners_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_order_idx ON public.pages_blocks_partners USING btree (_order);


--
-- Name: pages_blocks_partners_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_parent_id_idx ON public.pages_blocks_partners USING btree (_parent_id);


--
-- Name: pages_blocks_partners_partners_logo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_partners_logo_idx ON public.pages_blocks_partners_partners USING btree (logo_id);


--
-- Name: pages_blocks_partners_partners_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_partners_order_idx ON public.pages_blocks_partners_partners USING btree (_order);


--
-- Name: pages_blocks_partners_partners_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_partners_parent_id_idx ON public.pages_blocks_partners_partners USING btree (_parent_id);


--
-- Name: pages_blocks_partners_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_partners_path_idx ON public.pages_blocks_partners USING btree (_path);


--
-- Name: pages_blocks_photo_hero_carousel_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_order_idx ON public.pages_blocks_photo_hero_carousel USING btree (_order);


--
-- Name: pages_blocks_photo_hero_carousel_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_parent_id_idx ON public.pages_blocks_photo_hero_carousel USING btree (_parent_id);


--
-- Name: pages_blocks_photo_hero_carousel_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_path_idx ON public.pages_blocks_photo_hero_carousel USING btree (_path);


--
-- Name: pages_blocks_photo_hero_carousel_slides_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_slides_image_idx ON public.pages_blocks_photo_hero_carousel_slides USING btree (image_id);


--
-- Name: pages_blocks_photo_hero_carousel_slides_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_slides_order_idx ON public.pages_blocks_photo_hero_carousel_slides USING btree (_order);


--
-- Name: pages_blocks_photo_hero_carousel_slides_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_photo_hero_carousel_slides_parent_id_idx ON public.pages_blocks_photo_hero_carousel_slides USING btree (_parent_id);


--
-- Name: pages_blocks_quick_links_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_quick_links_items_order_idx ON public.pages_blocks_quick_links_items USING btree (_order);


--
-- Name: pages_blocks_quick_links_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_quick_links_items_parent_id_idx ON public.pages_blocks_quick_links_items USING btree (_parent_id);


--
-- Name: pages_blocks_quick_links_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_quick_links_order_idx ON public.pages_blocks_quick_links USING btree (_order);


--
-- Name: pages_blocks_quick_links_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_quick_links_parent_id_idx ON public.pages_blocks_quick_links USING btree (_parent_id);


--
-- Name: pages_blocks_quick_links_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_quick_links_path_idx ON public.pages_blocks_quick_links USING btree (_path);


--
-- Name: pages_blocks_text_block_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_text_block_order_idx ON public.pages_blocks_text_block USING btree (_order);


--
-- Name: pages_blocks_text_block_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_text_block_parent_id_idx ON public.pages_blocks_text_block USING btree (_parent_id);


--
-- Name: pages_blocks_text_block_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_text_block_path_idx ON public.pages_blocks_text_block USING btree (_path);


--
-- Name: pages_blocks_timeline_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_timeline_items_order_idx ON public.pages_blocks_timeline_items USING btree (_order);


--
-- Name: pages_blocks_timeline_items_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_timeline_items_parent_id_idx ON public.pages_blocks_timeline_items USING btree (_parent_id);


--
-- Name: pages_blocks_timeline_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_timeline_order_idx ON public.pages_blocks_timeline USING btree (_order);


--
-- Name: pages_blocks_timeline_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_timeline_parent_id_idx ON public.pages_blocks_timeline USING btree (_parent_id);


--
-- Name: pages_blocks_timeline_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_timeline_path_idx ON public.pages_blocks_timeline USING btree (_path);


--
-- Name: pages_blocks_video_cards_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_cards_order_idx ON public.pages_blocks_video_cards USING btree (_order);


--
-- Name: pages_blocks_video_cards_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_cards_parent_id_idx ON public.pages_blocks_video_cards USING btree (_parent_id);


--
-- Name: pages_blocks_video_cards_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_cards_path_idx ON public.pages_blocks_video_cards USING btree (_path);


--
-- Name: pages_blocks_video_cards_videos_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_cards_videos_order_idx ON public.pages_blocks_video_cards_videos USING btree (_order);


--
-- Name: pages_blocks_video_cards_videos_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_cards_videos_parent_id_idx ON public.pages_blocks_video_cards_videos USING btree (_parent_id);


--
-- Name: pages_blocks_video_embed_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_embed_order_idx ON public.pages_blocks_video_embed USING btree (_order);


--
-- Name: pages_blocks_video_embed_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_embed_parent_id_idx ON public.pages_blocks_video_embed USING btree (_parent_id);


--
-- Name: pages_blocks_video_embed_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_blocks_video_embed_path_idx ON public.pages_blocks_video_embed USING btree (_path);


--
-- Name: pages_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_created_at_idx ON public.pages USING btree (created_at);


--
-- Name: pages_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_parent_idx ON public.pages USING btree (parent_id);


--
-- Name: pages_rels_clauses_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_rels_clauses_id_idx ON public.pages_rels USING btree (clauses_id);


--
-- Name: pages_rels_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_rels_order_idx ON public.pages_rels USING btree ("order");


--
-- Name: pages_rels_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_rels_parent_idx ON public.pages_rels USING btree (parent_id);


--
-- Name: pages_rels_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_rels_path_idx ON public.pages_rels USING btree (path);


--
-- Name: pages_seo_seo_meta_image_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_seo_seo_meta_image_idx ON public.pages USING btree (seo_meta_image_id);


--
-- Name: pages_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pages_slug_idx ON public.pages USING btree (slug);


--
-- Name: pages_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_updated_at_idx ON public.pages USING btree (updated_at);


--
-- Name: partners_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX partners_created_at_idx ON public.partners USING btree (created_at);


--
-- Name: partners_logo_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX partners_logo_idx ON public.partners USING btree (logo_id);


--
-- Name: partners_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX partners_updated_at_idx ON public.partners USING btree (updated_at);


--
-- Name: payload_kv_key_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX payload_kv_key_idx ON public.payload_kv USING btree (key);


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_created_at_idx ON public.payload_locked_documents USING btree (created_at);


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_global_slug_idx ON public.payload_locked_documents USING btree (global_slug);


--
-- Name: payload_locked_documents_rels_activity_reports_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_activity_reports_id_idx ON public.payload_locked_documents_rels USING btree (activity_reports_id);


--
-- Name: payload_locked_documents_rels_clauses_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_clauses_id_idx ON public.payload_locked_documents_rels USING btree (clauses_id);


--
-- Name: payload_locked_documents_rels_formations_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_formations_id_idx ON public.payload_locked_documents_rels USING btree (formations_id);


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_media_id_idx ON public.payload_locked_documents_rels USING btree (media_id);


--
-- Name: payload_locked_documents_rels_news_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_news_id_idx ON public.payload_locked_documents_rels USING btree (news_id);


--
-- Name: payload_locked_documents_rels_newsletter_subscribers_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_newsletter_subscribers_id_idx ON public.payload_locked_documents_rels USING btree (newsletter_subscribers_id);


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_order_idx ON public.payload_locked_documents_rels USING btree ("order");


--
-- Name: payload_locked_documents_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_pages_id_idx ON public.payload_locked_documents_rels USING btree (pages_id);


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_parent_idx ON public.payload_locked_documents_rels USING btree (parent_id);


--
-- Name: payload_locked_documents_rels_partners_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_partners_id_idx ON public.payload_locked_documents_rels USING btree (partners_id);


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_path_idx ON public.payload_locked_documents_rels USING btree (path);


--
-- Name: payload_locked_documents_rels_timeline_items_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_timeline_items_id_idx ON public.payload_locked_documents_rels USING btree (timeline_items_id);


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_users_id_idx ON public.payload_locked_documents_rels USING btree (users_id);


--
-- Name: payload_locked_documents_rels_videos_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_rels_videos_id_idx ON public.payload_locked_documents_rels USING btree (videos_id);


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_locked_documents_updated_at_idx ON public.payload_locked_documents USING btree (updated_at);


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_migrations_created_at_idx ON public.payload_migrations USING btree (created_at);


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_migrations_updated_at_idx ON public.payload_migrations USING btree (updated_at);


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_created_at_idx ON public.payload_preferences USING btree (created_at);


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_key_idx ON public.payload_preferences USING btree (key);


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_rels_order_idx ON public.payload_preferences_rels USING btree ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_rels_parent_idx ON public.payload_preferences_rels USING btree (parent_id);


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_rels_path_idx ON public.payload_preferences_rels USING btree (path);


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_rels_users_id_idx ON public.payload_preferences_rels USING btree (users_id);


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX payload_preferences_updated_at_idx ON public.payload_preferences USING btree (updated_at);


--
-- Name: timeline_items_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX timeline_items_created_at_idx ON public.timeline_items USING btree (created_at);


--
-- Name: timeline_items_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX timeline_items_order_idx ON public.timeline_items USING btree ("order");


--
-- Name: timeline_items_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX timeline_items_updated_at_idx ON public.timeline_items USING btree (updated_at);


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX users_created_at_idx ON public.users USING btree (created_at);


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_sessions_order_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX users_sessions_order_idx ON public.users_sessions USING btree (_order);


--
-- Name: users_sessions_parent_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX users_sessions_parent_id_idx ON public.users_sessions USING btree (_parent_id);


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX users_updated_at_idx ON public.users USING btree (updated_at);


--
-- Name: videos_created_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX videos_created_at_idx ON public.videos USING btree (created_at);


--
-- Name: videos_updated_at_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX videos_updated_at_idx ON public.videos USING btree (updated_at);


--
-- Name: _formations_v _formations_v_parent_id_formations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._formations_v
    ADD CONSTRAINT _formations_v_parent_id_formations_id_fk FOREIGN KEY (parent_id) REFERENCES public.formations(id) ON DELETE SET NULL;


--
-- Name: _formations_v _formations_v_version_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._formations_v
    ADD CONSTRAINT _formations_v_version_image_id_media_id_fk FOREIGN KEY (version_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _news_v _news_v_parent_id_news_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._news_v
    ADD CONSTRAINT _news_v_parent_id_news_id_fk FOREIGN KEY (parent_id) REFERENCES public.news(id) ON DELETE SET NULL;


--
-- Name: _news_v _news_v_version_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._news_v
    ADD CONSTRAINT _news_v_version_featured_image_id_media_id_fk FOREIGN KEY (version_featured_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_accordion_block_items _pages_v_blocks_accordion_block_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block_items
    ADD CONSTRAINT _pages_v_blocks_accordion_block_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_accordion_block(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_accordion_block _pages_v_blocks_accordion_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_accordion_block
    ADD CONSTRAINT _pages_v_blocks_accordion_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_activity_reports _pages_v_blocks_activity_reports_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports
    ADD CONSTRAINT _pages_v_blocks_activity_reports_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_activity_reports_reports _pages_v_blocks_activity_reports_reports_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports_reports
    ADD CONSTRAINT _pages_v_blocks_activity_reports_reports_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_activity_reports(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_activity_reports_reports _pages_v_blocks_activity_reports_reports_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_activity_reports_reports
    ADD CONSTRAINT _pages_v_blocks_activity_reports_reports_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_calculator _pages_v_blocks_calculator_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_calculator
    ADD CONSTRAINT _pages_v_blocks_calculator_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_clauses_grid _pages_v_blocks_clauses_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_clauses_grid
    ADD CONSTRAINT _pages_v_blocks_clauses_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_contact_block _pages_v_blocks_contact_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_contact_block
    ADD CONSTRAINT _pages_v_blocks_contact_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_documents_section_items _pages_v_blocks_documents_section_items_file_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section_items
    ADD CONSTRAINT _pages_v_blocks_documents_section_items_file_id_media_id_fk FOREIGN KEY (file_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_documents_section_items _pages_v_blocks_documents_section_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section_items
    ADD CONSTRAINT _pages_v_blocks_documents_section_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_documents_section(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_documents_section _pages_v_blocks_documents_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_documents_section
    ADD CONSTRAINT _pages_v_blocks_documents_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_doc_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_doc_id_media_id_fk FOREIGN KEY (doc_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_download_grid(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_rtf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_rtf_id_media_id_fk FOREIGN KEY (rtf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_xls_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_xls_id_media_id_fk FOREIGN KEY (xls_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_grid_documents _pages_v_blocks_download_grid_documents_zip_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid_documents
    ADD CONSTRAINT _pages_v_blocks_download_grid_documents_zip_id_media_id_fk FOREIGN KEY (zip_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_grid _pages_v_blocks_download_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_grid
    ADD CONSTRAINT _pages_v_blocks_download_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_download_links_items _pages_v_blocks_download_links_items_file_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links_items
    ADD CONSTRAINT _pages_v_blocks_download_links_items_file_id_media_id_fk FOREIGN KEY (file_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_download_links_items _pages_v_blocks_download_links_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links_items
    ADD CONSTRAINT _pages_v_blocks_download_links_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_download_links(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_download_links _pages_v_blocks_download_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_download_links
    ADD CONSTRAINT _pages_v_blocks_download_links_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_dynamic_grid_columns _pages_v_blocks_dynamic_grid_columns_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_columns
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_columns_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_dynamic_grid(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_dynamic_grid _pages_v_blocks_dynamic_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_dynamic_grid_rows _pages_v_blocks_dynamic_grid_rows_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_dynamic_grid_rows
    ADD CONSTRAINT _pages_v_blocks_dynamic_grid_rows_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_dynamic_grid(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_formations_section _pages_v_blocks_formations_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_formations_section
    ADD CONSTRAINT _pages_v_blocks_formations_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_news_section _pages_v_blocks_news_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_news_section
    ADD CONSTRAINT _pages_v_blocks_news_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_newsletter_block _pages_v_blocks_newsletter_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_newsletter_block
    ADD CONSTRAINT _pages_v_blocks_newsletter_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_organogram _pages_v_blocks_organogram_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram
    ADD CONSTRAINT _pages_v_blocks_organogram_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_organogram_root_children_children _pages_v_blocks_organogram_root_children_children_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_children_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_organogram_root_children(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_organogram_root_children_children _pages_v_blocks_organogram_root_children_children_photo_id_medi; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_children_photo_id_medi FOREIGN KEY (photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_organogram_root_children _pages_v_blocks_organogram_root_children_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_organogram(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_organogram_root_children _pages_v_blocks_organogram_root_children_photo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram_root_children
    ADD CONSTRAINT _pages_v_blocks_organogram_root_children_photo_id_media_id_fk FOREIGN KEY (photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_organogram _pages_v_blocks_organogram_root_photo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_organogram
    ADD CONSTRAINT _pages_v_blocks_organogram_root_photo_id_media_id_fk FOREIGN KEY (root_photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_partners_associations _pages_v_blocks_partners_associations_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_associations
    ADD CONSTRAINT _pages_v_blocks_partners_associations_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_partners_associations _pages_v_blocks_partners_associations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_associations
    ADD CONSTRAINT _pages_v_blocks_partners_associations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_partners(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_partners _pages_v_blocks_partners_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners
    ADD CONSTRAINT _pages_v_blocks_partners_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_partners_partners _pages_v_blocks_partners_partners_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_partners
    ADD CONSTRAINT _pages_v_blocks_partners_partners_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_partners_partners _pages_v_blocks_partners_partners_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_partners_partners
    ADD CONSTRAINT _pages_v_blocks_partners_partners_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_partners(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_photo_hero_carousel _pages_v_blocks_photo_hero_carousel_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel
    ADD CONSTRAINT _pages_v_blocks_photo_hero_carousel_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides _pages_v_blocks_photo_hero_carousel_slides_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT _pages_v_blocks_photo_hero_carousel_slides_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_photo_hero_carousel_slides _pages_v_blocks_photo_hero_carousel_slides_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT _pages_v_blocks_photo_hero_carousel_slides_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_photo_hero_carousel(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_quick_links_items _pages_v_blocks_quick_links_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links_items
    ADD CONSTRAINT _pages_v_blocks_quick_links_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_quick_links(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_quick_links _pages_v_blocks_quick_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_quick_links
    ADD CONSTRAINT _pages_v_blocks_quick_links_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_text_block _pages_v_blocks_text_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_text_block
    ADD CONSTRAINT _pages_v_blocks_text_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_timeline_items _pages_v_blocks_timeline_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline_items
    ADD CONSTRAINT _pages_v_blocks_timeline_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_timeline(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_timeline _pages_v_blocks_timeline_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_timeline
    ADD CONSTRAINT _pages_v_blocks_timeline_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_video_cards _pages_v_blocks_video_cards_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards
    ADD CONSTRAINT _pages_v_blocks_video_cards_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_video_cards_videos _pages_v_blocks_video_cards_videos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_cards_videos
    ADD CONSTRAINT _pages_v_blocks_video_cards_videos_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v_blocks_video_cards(id) ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_video_embed _pages_v_blocks_video_embed_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_blocks_video_embed
    ADD CONSTRAINT _pages_v_blocks_video_embed_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v _pages_v_parent_id_pages_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v
    ADD CONSTRAINT _pages_v_parent_id_pages_id_fk FOREIGN KEY (parent_id) REFERENCES public.pages(id) ON DELETE SET NULL;


--
-- Name: _pages_v_rels _pages_v_rels_clauses_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_rels
    ADD CONSTRAINT _pages_v_rels_clauses_fk FOREIGN KEY (clauses_id) REFERENCES public.clauses(id) ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v_rels
    ADD CONSTRAINT _pages_v_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public._pages_v(id) ON DELETE CASCADE;


--
-- Name: _pages_v _pages_v_version_parent_id_pages_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v
    ADD CONSTRAINT _pages_v_version_parent_id_pages_id_fk FOREIGN KEY (version_parent_id) REFERENCES public.pages(id) ON DELETE SET NULL;


--
-- Name: _pages_v _pages_v_version_seo_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._pages_v
    ADD CONSTRAINT _pages_v_version_seo_meta_image_id_media_id_fk FOREIGN KEY (version_seo_meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: activity_reports activity_reports_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_reports
    ADD CONSTRAINT activity_reports_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: clauses clauses_doc_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clauses
    ADD CONSTRAINT clauses_doc_id_media_id_fk FOREIGN KEY (doc_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: clauses clauses_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clauses
    ADD CONSTRAINT clauses_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: clauses clauses_rtf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clauses
    ADD CONSTRAINT clauses_rtf_id_media_id_fk FOREIGN KEY (rtf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: formations formations_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formations
    ADD CONSTRAINT formations_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: news news_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_featured_image_id_media_id_fk FOREIGN KEY (featured_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_accordion_block_items pages_blocks_accordion_block_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_accordion_block_items
    ADD CONSTRAINT pages_blocks_accordion_block_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_accordion_block(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_accordion_block pages_blocks_accordion_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_accordion_block
    ADD CONSTRAINT pages_blocks_accordion_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_activity_reports pages_blocks_activity_reports_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_activity_reports
    ADD CONSTRAINT pages_blocks_activity_reports_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_activity_reports_reports pages_blocks_activity_reports_reports_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_activity_reports_reports
    ADD CONSTRAINT pages_blocks_activity_reports_reports_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_activity_reports(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_activity_reports_reports pages_blocks_activity_reports_reports_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_activity_reports_reports
    ADD CONSTRAINT pages_blocks_activity_reports_reports_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_calculator pages_blocks_calculator_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_calculator
    ADD CONSTRAINT pages_blocks_calculator_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_clauses_grid pages_blocks_clauses_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_clauses_grid
    ADD CONSTRAINT pages_blocks_clauses_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_contact_block pages_blocks_contact_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_contact_block
    ADD CONSTRAINT pages_blocks_contact_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_documents_section_items pages_blocks_documents_section_items_file_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_documents_section_items
    ADD CONSTRAINT pages_blocks_documents_section_items_file_id_media_id_fk FOREIGN KEY (file_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_documents_section_items pages_blocks_documents_section_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_documents_section_items
    ADD CONSTRAINT pages_blocks_documents_section_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_documents_section(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_documents_section pages_blocks_documents_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_documents_section
    ADD CONSTRAINT pages_blocks_documents_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_doc_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_doc_id_media_id_fk FOREIGN KEY (doc_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_download_grid(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_pdf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_pdf_id_media_id_fk FOREIGN KEY (pdf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_rtf_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_rtf_id_media_id_fk FOREIGN KEY (rtf_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_xls_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_xls_id_media_id_fk FOREIGN KEY (xls_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_grid_documents pages_blocks_download_grid_documents_zip_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid_documents
    ADD CONSTRAINT pages_blocks_download_grid_documents_zip_id_media_id_fk FOREIGN KEY (zip_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_grid pages_blocks_download_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_grid
    ADD CONSTRAINT pages_blocks_download_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_download_links_items pages_blocks_download_links_items_file_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_links_items
    ADD CONSTRAINT pages_blocks_download_links_items_file_id_media_id_fk FOREIGN KEY (file_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_download_links_items pages_blocks_download_links_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_links_items
    ADD CONSTRAINT pages_blocks_download_links_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_download_links(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_download_links pages_blocks_download_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_download_links
    ADD CONSTRAINT pages_blocks_download_links_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_dynamic_grid_columns pages_blocks_dynamic_grid_columns_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid_columns
    ADD CONSTRAINT pages_blocks_dynamic_grid_columns_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_dynamic_grid(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_dynamic_grid pages_blocks_dynamic_grid_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid
    ADD CONSTRAINT pages_blocks_dynamic_grid_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_dynamic_grid_rows pages_blocks_dynamic_grid_rows_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_dynamic_grid_rows
    ADD CONSTRAINT pages_blocks_dynamic_grid_rows_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_dynamic_grid(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_formations_section pages_blocks_formations_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_formations_section
    ADD CONSTRAINT pages_blocks_formations_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_news_section pages_blocks_news_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_news_section
    ADD CONSTRAINT pages_blocks_news_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_newsletter_block pages_blocks_newsletter_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_newsletter_block
    ADD CONSTRAINT pages_blocks_newsletter_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_organogram pages_blocks_organogram_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram
    ADD CONSTRAINT pages_blocks_organogram_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_organogram_root_children_children pages_blocks_organogram_root_children_children_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_children_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_organogram_root_children(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_organogram_root_children_children pages_blocks_organogram_root_children_children_photo_id_media_i; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_children_photo_id_media_i FOREIGN KEY (photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_organogram_root_children pages_blocks_organogram_root_children_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_organogram(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_organogram_root_children pages_blocks_organogram_root_children_photo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram_root_children
    ADD CONSTRAINT pages_blocks_organogram_root_children_photo_id_media_id_fk FOREIGN KEY (photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_organogram pages_blocks_organogram_root_photo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_organogram
    ADD CONSTRAINT pages_blocks_organogram_root_photo_id_media_id_fk FOREIGN KEY (root_photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_partners_associations pages_blocks_partners_associations_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_associations
    ADD CONSTRAINT pages_blocks_partners_associations_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_partners_associations pages_blocks_partners_associations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_associations
    ADD CONSTRAINT pages_blocks_partners_associations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_partners(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_partners pages_blocks_partners_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners
    ADD CONSTRAINT pages_blocks_partners_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_partners_partners pages_blocks_partners_partners_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_partners
    ADD CONSTRAINT pages_blocks_partners_partners_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_partners_partners pages_blocks_partners_partners_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_partners_partners
    ADD CONSTRAINT pages_blocks_partners_partners_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_partners(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_photo_hero_carousel pages_blocks_photo_hero_carousel_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_photo_hero_carousel
    ADD CONSTRAINT pages_blocks_photo_hero_carousel_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_photo_hero_carousel_slides pages_blocks_photo_hero_carousel_slides_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT pages_blocks_photo_hero_carousel_slides_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_blocks_photo_hero_carousel_slides pages_blocks_photo_hero_carousel_slides_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_photo_hero_carousel_slides
    ADD CONSTRAINT pages_blocks_photo_hero_carousel_slides_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_photo_hero_carousel(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_quick_links_items pages_blocks_quick_links_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_quick_links_items
    ADD CONSTRAINT pages_blocks_quick_links_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_quick_links(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_quick_links pages_blocks_quick_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_quick_links
    ADD CONSTRAINT pages_blocks_quick_links_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_text_block pages_blocks_text_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_text_block
    ADD CONSTRAINT pages_blocks_text_block_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_timeline_items pages_blocks_timeline_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_timeline_items
    ADD CONSTRAINT pages_blocks_timeline_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_timeline(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_timeline pages_blocks_timeline_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_timeline
    ADD CONSTRAINT pages_blocks_timeline_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_video_cards pages_blocks_video_cards_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_cards
    ADD CONSTRAINT pages_blocks_video_cards_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_video_cards_videos pages_blocks_video_cards_videos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_cards_videos
    ADD CONSTRAINT pages_blocks_video_cards_videos_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages_blocks_video_cards(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_video_embed pages_blocks_video_embed_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_blocks_video_embed
    ADD CONSTRAINT pages_blocks_video_embed_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages pages_parent_id_pages_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_parent_id_pages_id_fk FOREIGN KEY (parent_id) REFERENCES public.pages(id) ON DELETE SET NULL;


--
-- Name: pages_rels pages_rels_clauses_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_rels
    ADD CONSTRAINT pages_rels_clauses_fk FOREIGN KEY (clauses_id) REFERENCES public.clauses(id) ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_rels
    ADD CONSTRAINT pages_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages pages_seo_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_seo_meta_image_id_media_id_fk FOREIGN KEY (seo_meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: partners partners_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_activity_reports_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_activity_reports_fk FOREIGN KEY (activity_reports_id) REFERENCES public.activity_reports(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_clauses_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_clauses_fk FOREIGN KEY (clauses_id) REFERENCES public.clauses(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_formations_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_formations_fk FOREIGN KEY (formations_id) REFERENCES public.formations(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_news_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_news_fk FOREIGN KEY (news_id) REFERENCES public.news(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_newsletter_subscribers_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_newsletter_subscribers_fk FOREIGN KEY (newsletter_subscribers_id) REFERENCES public.newsletter_subscribers(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pages_fk FOREIGN KEY (pages_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_locked_documents(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_partners_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_partners_fk FOREIGN KEY (partners_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_timeline_items_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_timeline_items_fk FOREIGN KEY (timeline_items_id) REFERENCES public.timeline_items(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_videos_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_videos_fk FOREIGN KEY (videos_id) REFERENCES public.videos(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_preferences(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: users_sessions users_sessions_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict G2H13OjjpCppjjSSkMQ9N5f7fXPS25J5VlEBOBTYOdPXaJYvhG7i8fELXKUr8No

