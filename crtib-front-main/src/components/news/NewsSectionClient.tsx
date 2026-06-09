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
    getNewsArticles({ limit })
      .then((result) => {
        const docs = (result.docs as NewsArticle[]) || [];
        setItems(
          docs.slice(0, limit).map((article) => {
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
