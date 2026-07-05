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

  const controller = new AbortController();
  const timeoutMs = process.env.NODE_ENV === "development" ? 3000 : 8000;
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      signal: fetchOptions.signal ?? controller.signal,
      cache: "no-store",
    });

    clearTimeout(timer);

    if (!response.ok) {
      throw new Error(
        `Payload API error: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timer);
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
 * Builds a Payload where-clause for filtering content by language.
 * For the default language, also includes legacy docs without a language set.
 */
export function buildContentLangWhere(lang: string, defaultLang: string) {
  if (lang === defaultLang) {
    return {
      or: [
        { "language.slug": { equals: lang } },
        { language: { exists: false } },
      ],
    };
  }
  return { "language.slug": { equals: lang } };
}

export async function getFooterSettings(lang?: string) {
  try {
    const data = await getGlobal<any>("footer-settings");
    if (!lang || !data?.translations?.length) return data;
    const translation = data.translations.find((t: any) => {
      const tLang = t.language;
      if (!tLang) return false;
      const tSlug = typeof tLang === "object" ? tLang.slug : tLang;
      return tSlug === lang;
    });
    if (!translation) return data;
    return {
      ...data,
      description: translation.description || data.description,
      links: translation.links?.length ? translation.links : data.links,
    };
  } catch {
    return null;
  }
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
 * Busca uma página por slug + langue (toujours requis).
 * Fallback : pages legacy sans langue assignée (pour la compatibilité ascendante).
 */
export async function getPageBySlug(slug: string, langSlug: string) {
  const normalized = decodeURIComponent(slug).trim().replace(/\s+/g, "-");

  // 1. Correspondance exacte (slug + langue)
  const exact = await getCollection("pages", {
    depth: 1,
    limit: 1,
    where: {
      and: [
        { slug: { equals: normalized } },
        { "language.slug": { equals: langSlug } },
      ],
    },
  });
  if (exact.docs[0]) return exact.docs[0];

  // 2. Fallback : pages sans langue assignée (contenu existant avant le système multilingue)
  const legacy = await getCollection("pages", {
    depth: 1,
    limit: 1,
    where: {
      and: [
        { slug: { equals: normalized } },
        { language: { exists: false } },
      ],
    },
  });
  return legacy.docs[0] ?? null;
}

/**
 * Busca as línguas activas du site configuradas no CMS
 */
export async function getSiteLanguages(): Promise<{ docs: Array<{ name: string; slug: string; isDefault: boolean; isActive: boolean }> }> {
  try {
    return await getCollection("site-languages", {
      limit: 20,
      sort: "name",
      where: { isActive: { equals: true } },
    }) as any;
  } catch {
    return { docs: [] };
  }
}

/**
 * Busca notícias publicadas, filtradas par langue si fournie.
 */
export async function getNewsArticles(
  params: PayloadQueryParams = {},
  langFilter?: { lang: string; defaultLang: string },
) {
  let finalParams = { ...params };
  if (langFilter) {
    const lf = buildContentLangWhere(langFilter.lang, langFilter.defaultLang);
    finalParams.where = finalParams.where
      ? { and: [finalParams.where, lf] }
      : lf;
  }
  return getCollection("news", {
    depth: 1,
    limit: 10,
    sort: "-publishedAt",
    ...finalParams,
  });
}

/**
 * Busca uma notícia por slug, filtrée par langue si fournie.
 * Fallback legacy (sans langue) si lang = defaultLang.
 */
export async function getNewsBySlug(
  slug: string,
  langFilter?: { lang: string; defaultLang: string },
) {
  const conditions: any[] = [{ slug: { equals: slug } }];
  if (langFilter) {
    conditions.push(buildContentLangWhere(langFilter.lang, langFilter.defaultLang));
  }
  const response = await getCollection("news", {
    depth: 1,
    limit: 1,
    where: conditions.length > 1 ? { and: conditions } : conditions[0],
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
 * Busca itens da linha do tempo ordenados, filtrés par langue si fournie.
 */
export async function getTimelineItems(
  params: PayloadQueryParams = {},
  langFilter?: { lang: string; defaultLang: string },
) {
  let finalParams = { ...params };
  if (langFilter) {
    const lf = buildContentLangWhere(langFilter.lang, langFilter.defaultLang);
    finalParams.where = finalParams.where
      ? { and: [finalParams.where, lf] }
      : lf;
  }
  return getCollection("timeline-items", {
    depth: 0,
    limit: 100,
    sort: "order",
    ...finalParams,
  });
}

/**
 * Busca formations publiées triées par titre, filtrées par langue si fournie.
 */
export async function getFormations(
  params: PayloadQueryParams = {},
  langFilter?: { lang: string; defaultLang: string },
) {
  let finalParams = { ...params };
  if (langFilter) {
    const lf = buildContentLangWhere(langFilter.lang, langFilter.defaultLang);
    finalParams.where = finalParams.where
      ? { and: [finalParams.where, lf] }
      : lf;
  }
  return getCollection("formations", {
    depth: 1,
    limit: 100,
    sort: "title",
    ...finalParams,
  });
}

/**
 * Busca une formation par slug, filtrée par langue si fournie.
 */
export async function getFormationBySlug(
  slug: string,
  langFilter?: { lang: string; defaultLang: string },
) {
  const conditions: any[] = [{ slug: { equals: slug } }];
  if (langFilter) {
    conditions.push(buildContentLangWhere(langFilter.lang, langFilter.defaultLang));
  }
  const response = await getCollection("formations", {
    depth: 1,
    limit: 1,
    where: conditions.length > 1 ? { and: conditions } : conditions[0],
  });
  return response.docs[0] || null;
}
