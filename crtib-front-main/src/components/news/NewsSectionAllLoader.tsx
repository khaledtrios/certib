import Link from "next/link";
import { getNewsArticles, getMediaUrl, buildContentLangWhere, getSiteLanguages } from "@/lib/payload";
import { getLabels } from "@/lib/labels";
import type { NewsArticle } from "@/types/payload";
import { NewsCard } from "@/components/news/NewsCard";
import type { NewsItem } from "@/components/news/NewsCard";

interface Props {
  lang: string;
  basePath: string;
  page?: number;
  category?: string;
}

const ITEMS_PER_PAGE = 10;

const CATEGORIES = [
  { value: "", label: "Tout" },
  { value: "actualite", label: "Actualité" },
  { value: "communique", label: "Communiqué" },
  { value: "evenement", label: "Événement" },
];

function buildUrl(basePath: string, page: number, category?: string): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return `${basePath}${qs ? `?${qs}` : ""}`;
}

export async function NewsSectionAllLoader({
  lang,
  basePath,
  page: currentPage = 1,
  category,
}: Props) {
  let defaultLang = "fr";
  try {
    const langs = await getSiteLanguages();
    defaultLang = langs.docs.find((l: any) => l.isDefault)?.slug ?? "fr";
  } catch {}

  const labels = await getLabels(lang);
  const langWhere = buildContentLangWhere(lang, defaultLang);

  const baseWhere = category
    ? { and: [{ _status: { equals: "published" } }, { "category.slug": { equals: category } }, langWhere] }
    : { and: [{ _status: { equals: "published" } }, langWhere] };

  let result: any;
  try {
    result = await getNewsArticles({ limit: ITEMS_PER_PAGE, page: currentPage, where: baseWhere });
  } catch {
    result = { docs: [], totalPages: 0, totalDocs: 0, page: 1, hasPrevPage: false, hasNextPage: false };
  }

  const items: NewsItem[] = (result.docs as NewsArticle[]).map((article) => {
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
      imageUrl: image ? getMediaUrl(image as any) : undefined,
      imageAlt: (image as any)?.alt || article.title,
    };
  });

  const {
    totalPages = 0,
    totalDocs = 0,
    hasPrevPage = false,
    hasNextPage = false,
  } = result;

  const rangeStart = Math.max(1, currentPage - 2);
  const rangeEnd = Math.min(totalPages, rangeStart + 4);
  const pageRange: number[] = [];
  for (let p = rangeStart; p <= rangeEnd; p++) pageRange.push(p);

  const btnBase =
    "inline-flex h-10 items-center justify-center rounded-[2px] border font-sans text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150";
  const btnActive = "border-[#37C2A2] bg-[#37C2A2] text-white";
  const btnInactive =
    "border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]";
  const pageBtn =
    "inline-flex h-10 w-10 items-center justify-center rounded-[2px] border font-sans text-[13px] font-semibold transition-colors";

  return (
    <div className="flex flex-col">
      {/* Category filters */}
      <div className="pb-6 pt-6">
        <div className="mx-auto w-full max-w-[1320px] px-8">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = cat.value === (category || "");
              return (
                <Link
                  key={cat.value}
                  href={buildUrl(basePath, 1, cat.value || undefined)}
                  className={`${btnBase} px-6 ${isActive ? btnActive : btnInactive}`}
                >
                  {cat.label}
                </Link>
              );
            })}
            {totalDocs > 0 && (
              <span className="ml-auto font-sans text-[13px] text-[#6B6B6B]">
                {totalDocs}{" "}
                {totalDocs > 1
                  ? labels.news_article_count_plural
                  : labels.news_article_count_single}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* News grid */}
      <section className="pb-12">
        <div className="mx-auto w-full max-w-[1320px] px-8">
          {items.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-sans text-[15px] uppercase tracking-[0.08em] text-[#6B6B6B]">
                {labels.news_empty}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {items.map((item) => (
                <NewsCard key={item.id} item={item} variant="default" />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="mt-16 flex flex-wrap items-center justify-center gap-2"
              aria-label="Pagination"
            >
              {hasPrevPage && (
                <Link
                  href={buildUrl(basePath, currentPage - 1, category)}
                  className={`${pageBtn} border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2] text-[14px]`}
                  aria-label="Page précédente"
                >
                  ‹
                </Link>
              )}
              {rangeStart > 1 && (
                <>
                  <Link
                    href={buildUrl(basePath, 1, category)}
                    className={`${pageBtn} border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]`}
                  >
                    1
                  </Link>
                  {rangeStart > 2 && <span className="px-1 text-[#6B6B6B]">…</span>}
                </>
              )}
              {pageRange.map((p) => (
                <Link
                  key={p}
                  href={buildUrl(basePath, p, category)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={`${pageBtn} ${p === currentPage ? btnActive : `border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]`}`}
                >
                  {p}
                </Link>
              ))}
              {rangeEnd < totalPages && (
                <>
                  {rangeEnd < totalPages - 1 && (
                    <span className="px-1 text-[#6B6B6B]">…</span>
                  )}
                  <Link
                    href={buildUrl(basePath, totalPages, category)}
                    className={`${pageBtn} border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]`}
                  >
                    {totalPages}
                  </Link>
                </>
              )}
              {hasNextPage && (
                <Link
                  href={buildUrl(basePath, currentPage + 1, category)}
                  className={`${pageBtn} border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2] text-[14px]`}
                  aria-label="Page suivante"
                >
                  ›
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
