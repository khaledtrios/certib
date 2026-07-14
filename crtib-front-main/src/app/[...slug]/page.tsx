import { notFound, permanentRedirect } from "next/navigation";
import { getPageBySlug, getSiteLanguages } from "@/lib/payload";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import type { Page } from "@/types/payload";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// Always-recognised lang codes (fallback when DB is empty)
const BUILTIN_LANG_CODES = ["fr", "de", "en", "lu", "pt", "es", "it", "nl"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface Resolved {
  page: Page | null;
  langSlug: string;
  rawSlug: string; // page slug WITHOUT lang prefix (empty string for home)
  defaultLang: string;
  allLangDocs: Array<{ name: string; slug: string; isDefault: boolean; isActive: boolean }>;
  /** true when first segment is not a recognised lang code → should redirect */
  isLegacy: boolean;
  legacyRedirectTo?: string;
}

async function resolvePage(slug: string[]): Promise<Resolved> {
  const languages = await getSiteLanguages();
  const docs =
    languages.docs.length > 0
      ? languages.docs
      : [{ name: "Français", slug: "fr", isDefault: true, isActive: true }];

  const langCodes = [...new Set([...docs.map((l) => l.slug), ...BUILTIN_LANG_CODES])];
  const defaultLang = docs.find((l) => l.isDefault)?.slug ?? "fr";
  const firstSegment = slug[0] ?? "";

  // First segment is NOT a known lang code → legacy URL (e.g. /mpu instead of /fr/mpu)
  if (firstSegment && !langCodes.includes(firstSegment)) {
    return {
      page: null,
      langSlug: defaultLang,
      rawSlug: slug.join("/"),
      defaultLang,
      allLangDocs: docs,
      isLegacy: true,
      legacyRedirectTo: `/${defaultLang}/${slug.join("/")}`,
    };
  }

  // No first segment at all → handled by app/page.tsx redirect; shouldn't reach here
  if (!firstSegment) {
    return { page: null, langSlug: defaultLang, rawSlug: "", defaultLang, allLangDocs: docs, isLegacy: false };
  }

  const langSlug = firstSegment;
  const rawSlug = slug.slice(1).join("/"); // "" means home
  const pageSlug = rawSlug || "home";

  const page = (await getPageBySlug(pageSlug, langSlug)) as Page | null;

  return { page, langSlug, rawSlug, defaultLang, allLangDocs: docs, isLegacy: false };
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const resolved = await resolvePage(slug);
    if (resolved.isLegacy || !resolved.page) return { title: "Page non trouvée" };

    const { page, langSlug, rawSlug, defaultLang, allLangDocs } = resolved;

    // Page's own language (may differ from URL if fallback kicked in)
    const pageLanguage =
      page.language && typeof page.language === "object"
        ? (page.language as any).slug
        : langSlug;

    // canonical: /fr/ma-page  or  /fr  (home)
    const canonicalPath = rawSlug
      ? `/${langSlug}/${rawSlug}`
      : `/${langSlug}`;

    // hreflang: every active language gets a prefixed alternate
    const hreflangAlternates: Record<string, string> = {};
    for (const lang of allLangDocs) {
      hreflangAlternates[lang.slug] = rawSlug
        ? `/${lang.slug}/${rawSlug}`
        : `/${lang.slug}`;
    }
    // x-default → default language URL
    hreflangAlternates["x-default"] = rawSlug
      ? `/${defaultLang}/${rawSlug}`
      : `/${defaultLang}`;

    return {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || undefined,
      openGraph: {
        title: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription || undefined,
        url: absoluteUrl(canonicalPath),
        locale: pageLanguage === "fr" ? "fr_LU" : pageLanguage,
        images:
          page.seo?.metaImage && typeof page.seo.metaImage === "object"
            ? [(page.seo.metaImage as any).url || ""]
            : undefined,
      },
      alternates: {
        canonical: absoluteUrl(canonicalPath),
        languages: Object.keys(hreflangAlternates).length > 0
          ? Object.fromEntries(
              Object.entries(hreflangAlternates).map(([lang, path]) => [
                lang,
                absoluteUrl(path),
              ]),
            )
          : undefined,
      },
    };
  } catch {
    return { title: "Erreur de chargement" };
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  let resolved: Resolved;
  try {
    resolved = await resolvePage(slug);
  } catch {
    notFound();
    return;
  }

  // Legacy URL (no lang prefix) → permanent redirect to prefixed URL
  if (resolved.isLegacy && resolved.legacyRedirectTo) {
    permanentRedirect(resolved.legacyRedirectTo);
  }

  if (!resolved.page) notFound();

  return <PageLayout page={resolved.page!} />;
}
