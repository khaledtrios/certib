import { type NextRequest, NextResponse } from "next/server";
import { getCollection, getSiteLanguages } from "@/lib/payload";

/**
 * GET /api/translations?slug=<page-slug>&lang=<current-lang>
 *
 * Returns:
 *  - langs:     language codes that have a published page for this slug
 *  - overrides: { [langSlug]: href } — explicit translation links set by the
 *               admin via the linkedTranslations field (WordPress/Polylang style).
 *               When an override exists, the LanguageSwitcher navigates to that
 *               specific URL instead of building /{lang}/{sameSlug}.
 */

// Virtual routes always available in all languages (rendered client-side with lang filter).
const VIRTUAL_SLUGS = ["actualites", "formations"];

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const currentLang = req.nextUrl.searchParams.get("lang") ?? "fr";
  if (!slug) return NextResponse.json({ langs: [], overrides: {} });

  // Virtual routes: always enabled in all languages, no overrides needed.
  if (VIRTUAL_SLUGS.includes(slug) || VIRTUAL_SLUGS.some((v) => slug.startsWith(`${v}/`))) {
    try {
      const langsRes = await getSiteLanguages();
      return NextResponse.json({ langs: langsRes.docs.map((l) => l.slug), overrides: {} });
    } catch {
      return NextResponse.json({ langs: [], overrides: {} });
    }
  }

  try {
    const langsRes = await getSiteLanguages();
    if (langsRes.docs.length === 0) return NextResponse.json({ langs: [], overrides: {} });

    // ── Step 1: fetch the current page with depth:1 to get linkedTranslations ──
    const currentPageRes = await getCollection<any>("pages", {
      where: {
        and: [
          { slug: { equals: slug } },
          { "language.slug": { equals: currentLang } },
        ],
      },
      limit: 1,
      depth: 1,
    });

    const currentPage = currentPageRes.docs[0] ?? null;
    const linkedTranslations: Array<{ language: any; page: any }> =
      currentPage?.linkedTranslations ?? [];

    // Build overrides map from explicit translation links.
    // Each entry: { language: {slug, ...}, page: {slug, language: {slug,...}, ...} }
    const overrides: Record<string, string> = {};
    for (const link of linkedTranslations) {
      const langSlug =
        typeof link.language === "object" ? link.language?.slug : link.language;
      const linkedPage = link.page;
      if (!langSlug || !linkedPage) continue;

      // Determine the linked page's language prefix
      const linkedLangSlug =
        typeof linkedPage.language === "object"
          ? linkedPage.language?.slug
          : typeof linkedPage.language === "string"
          ? linkedPage.language
          : langSlug;

      const linkedSlug = linkedPage.slug ?? "";
      if (linkedSlug) {
        overrides[langSlug] = `/${linkedLangSlug}/${linkedSlug}`;
      }
    }

    // ── Step 2: determine which languages are available ──
    // Languages with an explicit link are always "available".
    // For others, check if a page with the same slug exists in that language (fallback).
    const overriddenLangs = new Set(Object.keys(overrides));

    const fallbackChecks = await Promise.all(
      langsRes.docs
        .filter((l) => !overriddenLangs.has(l.slug) && l.slug !== currentLang)
        .map(async (lang) => {
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

    const langs = [
      currentLang,
      ...Array.from(overriddenLangs),
      ...fallbackChecks.filter((s): s is string => s !== null),
    ];

    return NextResponse.json({ langs: [...new Set(langs)], overrides });
  } catch {
    return NextResponse.json({ langs: [], overrides: {} });
  }
}
