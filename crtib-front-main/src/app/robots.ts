import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SERVER_URL ?? "https://crtib.lu";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/newsletter/unsubscribed"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
