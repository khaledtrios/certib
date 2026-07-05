import { getSiteLanguages } from "@/lib/payload";
import { LangRedirectClient } from "@/components/LangRedirectClient";

export const dynamic = "force-dynamic";

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
export default async function Home() {
  let defaultLang = "fr";
  let activeLangs: string[] = ["fr"];

  try {
    const languages = await getSiteLanguages();
    const def = languages.docs.find((l) => l.isDefault);
    if (def) defaultLang = def.slug;
    activeLangs = languages.docs
      .filter((l) => l.isActive)
      .map((l) => l.slug);
    // Always include the default even if isActive is missing
    if (!activeLangs.includes(defaultLang)) activeLangs.push(defaultLang);
  } catch {
    // CMS unavailable — fall back to "fr"
  }

  return (
    <>
      {/* No-JS / bot fallback: hard redirect to default language */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <meta httpEquiv="refresh" content={`0;url=/${defaultLang}`} />
      </noscript>
      <LangRedirectClient defaultLang={defaultLang} activeLangs={activeLangs} />
    </>
  );
}
