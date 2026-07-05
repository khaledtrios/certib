import { type NextRequest, NextResponse } from "next/server";
import { getCollection, getSiteLanguages } from "@/lib/payload";

/**
 * GET /api/translations?slug=<page-slug>
 * Returns the language codes that have a published page with this exact slug.
 * Uses the same "language.slug" dot-notation filter as getPageBySlug so the
 * result is guaranteed to be consistent with what the routing actually resolves.
 */
// Slugs that are virtual routes (not CMS pages) — always available in all languages.
// The page renders an empty-state message if no content exists in that language.
const VIRTUAL_SLUGS = ["actualites", "formations"];

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ langs: [] });

  // Virtual routes: always enabled in all languages
  if (VIRTUAL_SLUGS.includes(slug) || VIRTUAL_SLUGS.some((v) => slug.startsWith(`${v}/`))) {
    try {
      const langsRes = await getSiteLanguages();
      return NextResponse.json({ langs: langsRes.docs.map((l) => l.slug) });
    } catch {
      return NextResponse.json({ langs: [] });
    }
  }

  try {
    // 1. Get all active languages from the CMS
    const langsRes = await getSiteLanguages();
    if (langsRes.docs.length === 0) return NextResponse.json({ langs: [] });

    // 2. For each language, check whether a page with this slug + language exists.
    //    We use depth:0 + "language.slug" filter — same approach as getPageBySlug —
    //    so we never depend on depth-1 population of the relationship field.
    const checks = await Promise.all(
      langsRes.docs.map(async (lang) => {
        try {
          const res = await getCollection("pages", {
            where: {
              and: [
                { slug: { equals: slug } },
                { "language.slug": { equals: lang.slug } },
              ],
            },
            limit: 1,
            depth: 0,
          });
          return res.docs.length > 0 ? lang.slug : null;
        } catch {
          return null;
        }
      }),
    );

    const langs = checks.filter((s): s is string => s !== null);
    return NextResponse.json({ langs });
  } catch {
    return NextResponse.json({ langs: [] });
  }
}
