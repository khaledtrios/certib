import Link from "next/link";
import type { Metadata } from "next";
import { getNewsArticles, getMediaUrl } from "@/lib/payload";
import type { NewsArticle } from "@/types/payload";
import { NewsCard } from "@/components/news/NewsCard";
import type { NewsItem } from "@/components/news/NewsCard";
import Breadcrumb from "@/components/Breadcrumb";

const ITEMS_PER_PAGE = 10;

const CATEGORIES = [
  { value: "", label: "Tout" },
  { value: "actualite", label: "Actualité" },
  { value: "communique", label: "Communiqué" },
  { value: "evenement", label: "Événement" },
] as const;

const FOOTER_LINKS = [
  { id: "f1", label: "Accueil", href: "/" },
  { id: "f2", label: "Actualités", href: "/actualites" },
  { id: "f3", label: "Agenda", href: "/agenda" },
  { id: "f4", label: "Liens", href: "/liens" },
  { id: "f5", label: "Dictionnaire", href: "/dictionnaire" },
  { id: "f6", label: "Contact", href: "/contact" },
  { id: "f7", label: "Construction durable", href: "/construction-durable" },
];

const FOOTER_SECONDARY = [
  { id: "f8", label: "Plan du site", href: "/plan-du-site" },
  { id: "f9", label: "Mentions légales", href: "/mentions-legales" },
];

interface PageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export const metadata: Metadata = {
  title: "Actualités | CRTI-B",
  description:
    "Retrouvez toutes les actualités, communiqués et événements du CRTI-B",
};

function buildUrl(page: number, category?: string): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return `/actualites${qs ? `?${qs}` : ""}`;
}

export default async function ActualitesPage({ searchParams }: PageProps) {
  const { page: pageParam, category } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  const where = category
    ? {
        and: [
          { _status: { equals: "published" } },
          { category: { equals: category } },
        ],
      }
    : { _status: { equals: "published" } };

  let result;
  try {
    result = await getNewsArticles({
      limit: ITEMS_PER_PAGE,
      page: currentPage,
      where,
    });
  } catch {
    result = {
      docs: [],
      totalPages: 0,
      totalDocs: 0,
      page: 1,
      hasPrevPage: false,
      hasNextPage: false,
    };
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
      imageUrl: image ? getMediaUrl(image) : undefined,
      imageAlt: image?.alt || article.title,
    };
  });

  const totalPages = result.totalPages ?? 0;
  const totalDocs = result.totalDocs ?? 0;
  const hasPrevPage = result.hasPrevPage ?? false;
  const hasNextPage = result.hasNextPage ?? false;

  const rangeStart = Math.max(1, currentPage - 2);
  const rangeEnd = Math.min(totalPages, rangeStart + 4);
  const pageRange: number[] = [];
  for (let p = rangeStart; p <= rangeEnd; p++) pageRange.push(p);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white py-4">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Breadcrumb slug="actualites" currentTitle="Actualités" />
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-white pb-10 pt-12 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="font-sans text-[28px] font-light uppercase tracking-[0.12em] text-crtib-gray-dark md:text-[36px]">
            Actualités
          </h1>
          <p className="mt-3 font-sans text-[14px] text-[#6B6B6B]">
            Retrouvez toutes les actualités, communiqués et événements du CRTI-B
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="h-6 w-6 rounded-full bg-[#37C2A2]" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="pb-6 pt-16">
        <div className="mx-auto w-full max-w-[1320px] px-8">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = (cat.value || "") === (category || "");
              return (
                <Link
                  key={cat.value}
                  href={buildUrl(1, cat.value)}
                  className={[
                    "inline-flex h-10 items-center justify-center rounded-[2px] border px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150",
                    isActive
                      ? "border-[#37C2A2] bg-[#37C2A2] text-white"
                      : "border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]",
                  ].join(" ")}
                >
                  {cat.label}
                </Link>
              );
            })}
            {totalDocs > 0 && (
              <span className="ml-auto font-sans text-[13px] text-[#6B6B6B]">
                {totalDocs} article{totalDocs > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="flex-1 pb-20">
        <div className="mx-auto w-full max-w-[1320px] px-8">
          {items.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-sans text-[15px] uppercase tracking-[0.08em] text-[#6B6B6B]">
                Aucun article trouvé
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
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
                  href={buildUrl(currentPage - 1, category)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-gray-300 bg-white font-sans text-[14px] font-semibold text-crtib-gray-dark transition-colors hover:border-[#37C2A2] hover:text-[#37C2A2]"
                  aria-label="Page précédente"
                >
                  ‹
                </Link>
              )}

              {rangeStart > 1 && (
                <>
                  <Link
                    href={buildUrl(1, category)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-gray-300 bg-white font-sans text-[13px] font-semibold text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]"
                  >
                    1
                  </Link>
                  {rangeStart > 2 && (
                    <span className="px-1 text-[#6B6B6B]">…</span>
                  )}
                </>
              )}

              {pageRange.map((p) => (
                <Link
                  key={p}
                  href={buildUrl(p, category)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-[2px] border font-sans text-[13px] font-semibold transition-colors",
                    p === currentPage
                      ? "border-[#37C2A2] bg-[#37C2A2] text-white"
                      : "border-gray-300 bg-white text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]",
                  ].join(" ")}
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
                    href={buildUrl(totalPages, category)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-gray-300 bg-white font-sans text-[13px] font-semibold text-crtib-gray-dark hover:border-[#37C2A2] hover:text-[#37C2A2]"
                  >
                    {totalPages}
                  </Link>
                </>
              )}

              {hasNextPage && (
                <Link
                  href={buildUrl(currentPage + 1, category)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-gray-300 bg-white font-sans text-[14px] font-semibold text-crtib-gray-dark transition-colors hover:border-[#37C2A2] hover:text-[#37C2A2]"
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
