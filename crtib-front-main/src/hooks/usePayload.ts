"use client";

import { useQuery } from "@tanstack/react-query";
import type {
  Page,
  PayloadQueryParams,
  PayloadResponse,
} from "@/types/payload";

/**
 * Hook para buscar páginas
 */
export function usePages(params?: PayloadQueryParams) {
  return useQuery({
    queryKey: ["pages", params],
    queryFn: async () => {
      const queryString = new URLSearchParams();

      if (params?.limit) queryString.set("limit", params.limit.toString());
      if (params?.page) queryString.set("page", params.page.toString());

      const response = await fetch(`/api/pages?${queryString}`);
      if (!response.ok) throw new Error("Erro ao buscar páginas");

      return response.json() as Promise<PayloadResponse<Page>>;
    },
  });
}

/**
 * Hook para buscar uma página específica por slug
 */
export function usePage(slug: string, enabled = true) {
  return useQuery({
    queryKey: ["page", slug],
    queryFn: async () => {
      const response = await fetch(`/api/pages/${slug}`);
      if (!response.ok) throw new Error("Página não encontrada");

      return response.json() as Promise<Page>;
    },
    enabled: enabled && !!slug,
  });
}

/**
 * Hook para buscar configurações do site
 */
export function useSiteSettings() {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const response = await fetch("/api/globals/site-settings");
      if (!response.ok) throw new Error("Erro ao buscar configurações");

      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}
