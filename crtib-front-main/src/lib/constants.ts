/**
 * Constantes da aplicação
 */

export const SITE_NAME = "CRTIB";
export const SITE_DESCRIPTION = "Frontend integrado com Payload CMS";

export const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
export const API_URL = process.env.PAYLOAD_API_URL || `${PAYLOAD_URL}/api`;

// Configurações de paginação
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// Configurações de cache
export const CACHE_REVALIDATE_TIME = 60; // segundos

// Rotas da aplicação
export const ROUTES = {
  HOME: "/",
  BLOG: "/blog",
  ABOUT: "/sobre",
  POST: (slug: string) => `/blog/${slug}`,
  PAGE: (slug: string) => `/${slug}`,
} as const;

// Status de posts
export const POST_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
} as const;

// Mensagens de erro
export const ERROR_MESSAGES = {
  GENERIC: "Ocorreu um erro. Tente novamente.",
  NOT_FOUND: "Conteúdo não encontrado.",
  LOAD_POSTS: "Erro ao carregar posts.",
  PAYLOAD_NOT_RUNNING: "Certifique-se de que o Payload CMS está rodando.",
} as const;
