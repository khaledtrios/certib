import type { Metadata } from "next";
import { getSiteLanguages } from "@/lib/payload";
import { LangRedirectClient } from "@/components/LangRedirectClient";

export const dynamic = "force-dynamic";

// No canonical content lives at "/" (it only redirects to /{lang}) — keep it
// out of the index so it never competes with the real, canonical /{lang} page.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

/**
 * Root "/" page.
 *
 * The server fetches active languages and passes them to the client component,
 * which reads localStorage and immediately calls router.replace(/{lang}).
 *
 * - SEO: "/" is not a canonical page (all content lives under /{lang}/…).
 *   Bots that don't run JS get the <noscript> meta-refresh to the default lang.
 * - No flash: LangRedirectClient renders null and redirects synchronously in
 *   useEffect, before any visible content is painted.
 * - Server content/x-lang is never affected — language is decided by the URL
 *   after the redirect, not by this component.
 */
// ISO 639-1-ish language slugs only (as configured in the CMS) — guards the
// dangerouslySetInnerHTML below against an unexpected CMS value.
const LANG_SLUG_RE = /^[a-z]{2,5}$/i;

export default async function Home() {
  let defaultLang = "fr";
  let activeLangs: string[] = ["fr"];

  try {
    const languages = await getSiteLanguages();
    const def = languages.docs.find((l) => l.isDefault);
    if (def && LANG_SLUG_RE.test(def.slug)) defaultLang = def.slug;
    activeLangs = languages.docs
      .filter((l) => l.isActive && LANG_SLUG_RE.test(l.slug))
      .map((l) => l.slug);
    // Always include the default even if isActive is missing
    if (!activeLangs.includes(defaultLang)) activeLangs.push(defaultLang);
  } catch {
    // CMS unavailable — fall back to "fr"
  }

  return (
    <>
      {/*
        No-JS / bot fallback: hard redirect to default language.
        Content is set via dangerouslySetInnerHTML rather than JSX children:
        browsers with JS enabled parse <noscript> contents as opaque text (not
        real child elements), so a <meta> rendered as a JSX child never matches
        what the browser actually parsed, causing a hydration mismatch.
      */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta http-equiv="refresh" content="0;url=/${defaultLang}">`,
        }}
      />
      <LangRedirectClient defaultLang={defaultLang} activeLangs={activeLangs} />
    </>
  );
}
