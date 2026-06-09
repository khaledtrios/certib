/**
 * Tipos base do Payload CMS
 * Customize estes tipos de acordo com suas collections
 */

export interface PayloadMedia {
  id: string;
  alt?: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PayloadUser {
  id: string;
  email: string;
  name?: string;
  roles?: string[];
  createdAt: string;
  updatedAt: string;
}

// Tipos genéricos para respostas da API do Payload
export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface PayloadSingleResponse<T> {
  doc: T;
}

export type PageIcon =
  | "user"
  | "document"
  | "globe"
  | "leaf"
  | "calendar"
  | "building"
  | "book"
  | "graduation"
  | "external-link"
  | "star"
  | "settings"
  | "list";

export interface Page {
  id: string;
  title: string;
  slug: string;
  parent?: Page | string | null;
  menuOrder?: number | null;
  icon?: PageIcon | null;
  layout?: any[]; // Blocos de layout (page builder)
  content?: any; // RichText do Lexical
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: PayloadMedia | string;
  };
  status?: "draft" | "published";
  _status?: "draft" | "published"; // Campo injetado quando drafts está habilitado
  createdAt: string;
  updatedAt: string;
}

export interface PageWithChildren extends Page {
  children?: PageWithChildren[];
}

// Globals - Settings
export interface SiteSettings {
  siteName: string;
  siteDescription?: string;
  logo?: PayloadMedia | string;
  favicon?: PayloadMedia | string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Collection - News
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: "actualite" | "communique" | "evenement";
  publishedAt: string;
  featuredImage?: PayloadMedia | string;
  excerpt?: string;
  content?: any; // RichText do Lexical
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

// Parâmetros de query para buscar dados
export interface PayloadQueryParams {
  depth?: number;
  limit?: number;
  page?: number;
  sort?: string;
  where?: Record<string, any>;
  locale?: string;
  draft?: boolean;
}
