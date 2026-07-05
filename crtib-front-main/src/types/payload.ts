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

export interface SiteLanguageRef {
  id: string;
  name: string;
  slug: string;
  isDefault: boolean;
  isActive: boolean;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  parent?: Page | string | null;
  menuOrder?: number | null;
  isHidden?: boolean | null;
  icon?: PageIcon | null;
  headerImage?: PayloadMedia | string | null;
  /** Populated at depth ≥ 1 */
  language?: SiteLanguageRef | string | null;
  layout?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: PayloadMedia | string;
  };
  status?: "draft" | "published";
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export interface PageWithChildren extends Page {
  children?: PageWithChildren[];
  /** Computed by GlobalLayout: /{lang}/{slug} */
  href?: string;
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

export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsRubrique {
  id: number;
  name: string;
  slug: string;
}

// Collection - News
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category?: NewsCategory | string | null;
  rubrique?: NewsRubrique | string | null;
  language?: SiteLanguageRef | string | null;
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

export type WhereOperator = {
  equals?: string | number | boolean | null;
  not_equals?: string | number | boolean | null;
  like?: string;
  contains?: string;
  in?: (string | number | boolean)[];
  not_in?: (string | number | boolean)[];
  exists?: boolean;
  greater_than?: string | number;
  less_than?: string | number;
};

export type WhereClause = {
  and?: WhereClause[];
  or?: WhereClause[];
  [field: string]: WhereOperator | WhereClause[] | undefined;
};

// Parâmetros de query para buscar dados
export interface PayloadQueryParams {
  depth?: number;
  limit?: number;
  page?: number;
  sort?: string;
  where?: WhereClause;
  locale?: string;
  draft?: boolean;
}
