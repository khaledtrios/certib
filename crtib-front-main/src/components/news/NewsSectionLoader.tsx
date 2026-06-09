import { getNewsArticles, getMediaUrl } from "@/lib/payload";
import { NewsSection } from "./NewsSection";
import type { NewsItem } from "./NewsCard";
import type { NewsArticle } from "@/types/payload";

type Props = {
  title?: string;
  maxItems?: number;
  variant?: "default" | "block";
  ctaHref?: string;
  excludeSlug?: string;
};

export async function NewsSectionLoader({
  maxItems = 2,
  excludeSlug,
  ...props
}: Props) {
  const limit = Math.max(2, Math.min(maxItems, 6));
  const fetchLimit = excludeSlug ? limit + 1 : limit;

  let items: NewsItem[] = [];

  try {
    const result = await getNewsArticles({ limit: fetchLimit });
    const docs = (result.docs as NewsArticle[]) || [];

    items = docs
      .filter((doc) => !excludeSlug || doc.slug !== excludeSlug)
      .slice(0, limit)
      .map((article) => {
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
      });
  } catch (error) {
    console.error("Error loading news section items:", error);
    items = [];
  }

  return <NewsSection {...props} maxItems={maxItems} items={items} />;
}
