import type { MetadataRoute } from "next";
import { getNewsArticles, getFormations } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SERVER_URL ?? "https://crtib.lu";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/actualites`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/toutes-les-formations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/agenda`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
  ];

  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const news = await getNewsArticles({ limit: 200, sort: "-publishedAt" });
    newsRoutes = (news.docs as any[]).map((article) => ({
      url: `${base}/actualites/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {}

  let formationRoutes: MetadataRoute.Sitemap = [];
  try {
    const formations = await getFormations({ limit: 200 });
    formationRoutes = (formations.docs as any[]).map((f) => ({
      url: `${base}/formations/${f.slug ?? f.id}`,
      lastModified: new Date(f.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {}

  return [...staticRoutes, ...newsRoutes, ...formationRoutes];
}
