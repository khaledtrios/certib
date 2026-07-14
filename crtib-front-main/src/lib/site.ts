/**
 * URL canonique du site, centralisée pour metadataBase, canonicals, OG/Twitter,
 * sitemap.xml, robots.txt et JSON-LD. Toujours sans slash final.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://crtib.lu"
).replace(/\/$/, "");

/**
 * Construit une URL absolue à partir d'un chemin (avec ou sans "/" initial).
 */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
