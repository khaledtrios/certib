import type { MetadataRoute } from "next";
import { getNewsArticles, getFormations, getPages, getSiteLanguages } from "@/lib/payload";
import { absoluteUrl } from "@/lib/site";

// Fallback used only if the CMS is unreachable when the sitemap is generated.
const FALLBACK_DEFAULT_LANG = "fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pageRoutes: MetadataRoute.Sitemap = [];
  try {
    const languages = await getSiteLanguages();
    const defaultLang =
      languages.docs.find((l) => l.isDefault)?.slug ?? FALLBACK_DEFAULT_LANG;

    const pages = await getPages({
      depth: 0,
      limit: 1000,
      where: { _status: { equals: "published" } },
    });

    pageRoutes = (pages.docs as any[]).map((page) => {
      const lang =
        page.language && typeof page.language === "object"
          ? page.language.slug
          : page.language ?? defaultLang;
      const path = page.slug === "home" ? `/${lang}` : `/${lang}/${page.slug}`;
      return {
        url: absoluteUrl(path),
        lastModified: new Date(page.updatedAt),
        changeFrequency: "weekly" as const,
        priority: path === `/${defaultLang}` ? 1 : 0.8,
      };
    });
  } catch {
    // CMS unreachable — at least keep the default-language home indexable.
    pageRoutes = [
      {
        url: absoluteUrl(`/${FALLBACK_DEFAULT_LANG}`),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }

  const newsIndexRoute: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/actualites"), lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const news = await getNewsArticles({ limit: 200, sort: "-publishedAt" });
    newsRoutes = (news.docs as any[]).map((article) => ({
      url: absoluteUrl(`/actualites/${article.slug}`),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {}

  let formationRoutes: MetadataRoute.Sitemap = [];
  try {
    const formations = await getFormations({ limit: 200 });
    formationRoutes = (formations.docs as any[]).map((f) => ({
      url: absoluteUrl(`/formations/${f.slug ?? f.id}`),
      lastModified: new Date(f.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {}

  return [...pageRoutes, ...newsIndexRoute, ...newsRoutes, ...formationRoutes];
}
