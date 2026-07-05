"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getNewsArticles, getMediaUrl } from "@/lib/payload";
import { NewsSection } from "./NewsSection";
import type { NewsItem } from "./NewsCard";
import type { NewsArticle } from "@/types/payload";

const BUILTIN_LANG_CODES = ["fr", "de", "en", "lu", "pt", "es", "it", "nl"];

type Props = {
  title?: string;
  maxItems?: number;
  variant?: "default" | "block";
  ctaHref?: string;
};

export function NewsSectionClient({ maxItems = 2, ...props }: Props) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Extract lang from URL (first segment)
  const segments = pathname.split("/").filter(Boolean);
  const lang = BUILTIN_LANG_CODES.includes(segments[0] ?? "") ? segments[0] : "fr";

  useEffect(() => {
    const limit = Math.max(2, Math.min(maxItems, 6));
    // Filter by current language (simple slug filter — works after seed runs)
    getNewsArticles({
      limit: 50,
      where: { "language.slug": { equals: lang } },
    })
      .then((result) => {
        const allDocs = (result.docs as NewsArticle[]) || [];
        const shuffled = [...allDocs].sort(() => Math.random() - 0.5);
        const groups = new Map<string, NewsArticle[]>();
        for (const doc of shuffled) {
          const r = (doc as any).rubrique;
          const key = (r && typeof r === "object" ? r.slug : r) || "general";
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
  }, [maxItems, lang]);

  if (loading) return <div className="py-16" />;

  return <NewsSection {...props} maxItems={maxItems} items={items} />;
}
