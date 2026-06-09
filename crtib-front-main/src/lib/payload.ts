import qs from "qs";
import type { PayloadQueryParams, PayloadResponse } from "@/types/payload";

const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

// No browser, usa a rota proxy do Next.js (/api/cms) para evitar chamadas diretas
// ao CMS (que pode ser inacessível publicamente). No servidor, usa a URL interna.
const API_URL =
  typeof window !== "undefined"
    ? "/api/cms"
    : process.env.PAYLOAD_API_URL || `${PAYLOAD_URL}/api`;

const API_TOKEN = process.env.PAYLOAD_API_TOKEN;

/**
 * Opções de configuração para requisições ao Payload
 */
interface FetchOptions extends RequestInit {
  auth?: boolean;
}

/**
 * Função base para fazer requisições ao Payload CMS
 */
async function fetchPayload<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { auth = false, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Adiciona token de autenticação se necessário
  if (auth && API_TOKEN) {
    headers["Authorization"] = `Bearer ${API_TOKEN}`;
  }

  // Merge com headers do fetchOptions
  if (fetchOptions.headers) {
    Object.assign(headers, fetchOptions.headers);
  }

  const url = endpoint.startsWith("http") ? endpoint : `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      // Next.js 15+ cache control
      next: {
        revalidate: process.env.NODE_ENV === "development" ? 0 : 60, // Sem cache em dev
        ...fetchOptions.next,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Payload API error: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching from Payload:", error);
    throw error;
  }
}

/**
 * Busca documentos de uma collection com parâmetros de query
 */
export async function getCollection<T>(
  collection: string,
  params: PayloadQueryParams = {},
  options: FetchOptions = {},
): Promise<PayloadResponse<T>> {
  const queryString = qs.stringify(params, {
    addQueryPrefix: true,
    encode: false,
  });

  return fetchPayload<PayloadResponse<T>>(
    `/${collection}${queryString}`,
    options,
  );
}

/**
 * Busca um documento específico por ID
 */
export async function getDocumentById<T>(
  collection: string,
  id: string,
  params: PayloadQueryParams = {},
  options: FetchOptions = {},
): Promise<T> {
  const queryString = qs.stringify(params, {
    addQueryPrefix: true,
    encode: false,
  });

  return fetchPayload<T>(`/${collection}/${id}${queryString}`, options);
}

/**
 * Busca um documento por slug
 */
export async function getDocumentBySlug<T>(
  collection: string,
  slug: string,
  params: Omit<PayloadQueryParams, "where"> = {},
  options: FetchOptions = {},
): Promise<T | null> {
  const queryParams: PayloadQueryParams = {
    ...params,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  };

  const response = await getCollection<T>(collection, queryParams, options);

  return response.docs[0] || null;
}

/**
 * Busca um Global do Payload
 */
export async function getGlobal<T>(
  slug: string,
  params: PayloadQueryParams = {},
  options: FetchOptions = {},
): Promise<T> {
  const queryString = qs.stringify(params, {
    addQueryPrefix: true,
    encode: false,
  });

  return fetchPayload<T>(`/globals/${slug}${queryString}`, options);
}

/**
 * Busca páginas
 */
export async function getPages(params: PayloadQueryParams = {}) {
  return getCollection("pages", {
    depth: 2,
    limit: 10,
    ...params,
  });
}

/**
 * Busca uma página por slug (apenas publicadas)
 */
export async function getPageBySlug(slug: string) {
  const response = await getCollection("pages", {
    depth: 2,
    limit: 1,
    where: { slug: { equals: slug }, _status: { equals: "published" } },
  });
  return response.docs[0] || null;
}

/**
 * Busca notícias publicadas
 */
export async function getNewsArticles(params: PayloadQueryParams = {}) {
  return getCollection("news", {
    depth: 1,
    limit: 10,
    sort: "-publishedAt",
    where: { _status: { equals: "published" } },
    ...params,
  });
}

/**
 * Busca uma notícia por slug (apenas publicadas)
 */
export async function getNewsBySlug(slug: string) {
  const response = await getCollection("news", {
    depth: 1,
    limit: 1,
    where: { slug: { equals: slug }, _status: { equals: "published" } },
  });
  return response.docs[0] || null;
}

/**
 * Helper para gerar URL de mídia.
 * Retorna uma URL relativa (/api/media/...) quando a mídia está hospedada
 * no CMS, de modo que o browser acesse pelo proxy Next.js em vez de
 * tentar resolver o domínio interno do CMS diretamente.
 */
export function getMediaUrl(media: any): string {
  let url = "";

  if (typeof media === "string") {
    url = media.startsWith("http") ? media : `${PAYLOAD_URL}${media}`;
  } else if (media?.url) {
    url = media.url.startsWith("http")
      ? media.url
      : `${PAYLOAD_URL}${media.url}`;
  }

  if (!url) return "";

  // Reescreve URLs do CMS para usar o proxy Next.js (/api/media/...)
  // A checagem usa PAYLOAD_URL que é a origem pública configurada.
  if (
    PAYLOAD_URL &&
    url.startsWith(PAYLOAD_URL) &&
    url.includes("/api/media/")
  ) {
    return url.slice(PAYLOAD_URL.length);
  }

  return url;
}

/**
 * Busca parceiros e associações ordenados
 */
export async function getPartners(params: PayloadQueryParams = {}) {
  return getCollection("partners", {
    depth: 1,
    limit: 100,
    sort: "order",
    ...params,
  });
}

/**
 * Busca vídeos ordenados
 */
export async function getVideos(params: PayloadQueryParams = {}) {
  return getCollection("videos", {
    depth: 0,
    limit: 100,
    sort: "order",
    ...params,
  });
}

/**
 * Busca relatórios de atividade ordenados por ano desc
 */
export async function getActivityReports(params: PayloadQueryParams = {}) {
  return getCollection("activity-reports", {
    depth: 1,
    limit: 100,
    sort: "-year",
    ...params,
  });
}

/**
 * Busca itens da linha do tempo ordenados
 */
export async function getTimelineItems(params: PayloadQueryParams = {}) {
  return getCollection("timeline-items", {
    depth: 0,
    limit: 100,
    sort: "order",
    ...params,
  });
}
