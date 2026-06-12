"use client";

import { useState, useEffect } from "react";
import { getNewsArticles, getMediaUrl } from "@/lib/payload";
import { NewsSection } from "./NewsSection";
import type { NewsItem } from "./NewsCard";
import type { NewsArticle } from "@/types/payload";

type Props = {
  title?: string;
  maxItems?: number;
  variant?: "default" | "block";
  ctaHref?: string;
};

export function NewsSectionClient({ maxItems = 2, ...props }: Props) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const limit = Math.max(2, Math.min(maxItems, 6));
    getNewsArticles({ limit: 50 })
      .then((result) => {
        const allDocs = (result.docs as NewsArticle[]) || [];
        // Mélange côté client (Math.random = vrai aléatoire)
        const shuffled = [...allDocs].sort(() => Math.random() - 0.5);
        // Round-robin par rubrique
        const groups = new Map<string, NewsArticle[]>();
        for (const doc of shuffled) {
          const key = (doc as any).rubrique || "general";
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key)!.push(doc);
        }
        const buckets = Array.from(groups.values());
        const selected: NewsArticle[] = [];
        let round = 0;
        while (selected.length < limit) {
          let added = false;
          for (const b of buckets) {
            if (b[round]) { selected.push(b[round]); added = true; }
            if (selected.length >= limit) break;
          }
          if (!added) break;
          round++;
        }
        setItems(
          selected.map((article) => {
            const image =
              article.featuredImage && typeof article.featuredImage === "object"
                ? article.featuredImage
                : undefined;
            return {
              id: article.id,
              title: article.title,
              date: article.publishedAt,
              href: `/actualites/${article.slug}`,
              excerpt: article.excerpt,
              imageUrl: image ? getMediaUrl(image) : undefined,
              imageAlt: image?.alt || article.title,
              rubrique: (article as any).rubrique ?? null,
            };
          }),
        );
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [maxItems]);

  if (loading) return <div className="py-16" />;

  return <NewsSection {...props} maxItems={maxItems} items={items} />;
}
