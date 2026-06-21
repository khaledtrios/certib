import { getNewsArticles, getMediaUrl } from "@/lib/payload";
import { NewsSection } from "./NewsSection";
import type { NewsItem } from "./NewsCard";
import type { NewsArticle, WhereClause } from "@/types/payload";

type RelationRef = { id: string | number } | string | number;

type Props = {
  title?: string;
  maxItems?: number;
  variant?: "default" | "block";
  ctaHref?: string;
  excludeSlug?: string;
  filterCategories?: RelationRef[] | null;
  filterRubriques?: RelationRef[] | null;
};

function shuffleSeed<T>(arr: T[]): T[] {
  // Mélange déterministe basé sur l'heure courante (change toutes les heures)
  const seed = Math.floor(Date.now() / 3_600_000);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = ((seed * 2654435761 + i * 40503) >>> 0) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mixByRubrique(docs: NewsArticle[], limit: number): NewsArticle[] {
  // Regroupe par rubrique, puis pioche en round-robin pour assurer la diversité
  const groups = new Map<string, NewsArticle[]>();
  for (const doc of docs) {
    const r = (doc as any).rubrique;
    const key = (r && typeof r === 'object' ? r.slug : r) || "general";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(doc);
  }
  const buckets = Array.from(groups.values());
  const result: NewsArticle[] = [];
  let round = 0;
  while (result.length < limit) {
    let added = false;
    for (const bucket of buckets) {
      if (bucket[round]) { result.push(bucket[round]); added = true; }
      if (result.length >= limit) break;
    }
    if (!added) break;
    round++;
  }
  return result;
}

function extractIds(refs: RelationRef[] | null | undefined): string[] {
  if (!refs?.length) return [];
  return refs
    .map((r) => (typeof r === "object" && "id" in r ? String(r.id) : String(r)))
    .filter(Boolean);
}

export async function NewsSectionLoader({
  maxItems = 2,
  excludeSlug,
  filterCategories,
  filterRubriques,
  ...props
}: Props) {
  const limit = Math.max(2, Math.min(maxItems, 6));

  let items: NewsItem[] = [];

  try {
    // Build where clause — only filter when selections are non-empty
    const catIds = extractIds(filterCategories);
    const rubIds = extractIds(filterRubriques);

    const conditions: WhereClause[] = [{ _status: { equals: "published" } }];
    if (catIds.length > 0) conditions.push({ category: { in: catIds } });
    if (rubIds.length > 0) conditions.push({ rubrique: { in: rubIds } });

    const where: WhereClause =
      conditions.length > 1 ? { and: conditions } : conditions[0];

    // Fetch a pool large enough for rubrique diversity mixing
    const result = await getNewsArticles({
      limit: Math.max(limit * 4, 12),
      where,
    });
    const allDocs = (result.docs as NewsArticle[])
      .filter((doc) => !excludeSlug || doc.slug !== excludeSlug);

    // Mélange aléatoire puis sélection équilibrée par rubrique
    const shuffled = shuffleSeed(allDocs);
    const selected = mixByRubrique(shuffled, limit);

    items = selected.map((article) => {
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
        rubrique: (article as any).rubrique ?? null,  // object {id,name,slug} or null
      };
    });
  } catch (error) {
    console.error("Error loading news section items:", error);
    items = [];
  }

  return <NewsSection {...props} maxItems={maxItems} items={items} />;
}
