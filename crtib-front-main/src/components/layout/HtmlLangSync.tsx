"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BUILTIN_LANG_CODES = ["fr", "de", "en", "lu", "pt", "es", "it", "nl"];

/**
 * Keeps <html lang="..."> in sync with the URL language prefix during client navigation.
 * SSR always renders lang="fr" (the default); this component corrects it after hydration.
 */
export function HtmlLangSync({
  languages,
}: {
  languages: Array<{ slug: string; isDefault: boolean }>;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const allCodes = [
      ...new Set([...languages.map((l) => l.slug), ...BUILTIN_LANG_CODES]),
    ];
    const first = pathname.split("/").filter(Boolean)[0] ?? "";
    const detected = allCodes.includes(first) ? first : null;
    const defaultLang = languages.find((l) => l.isDefault)?.slug ?? "fr";
    document.documentElement.lang = detected ?? defaultLang;
    // Only persist when there's an explicit lang prefix in the URL.
    // On prefix-less routes (/actualites, /formations) we don't overwrite
    // the user's choice — the middleware assigns a default but the user
    // didn't explicitly navigate to that language.
    if (detected) {
      try { localStorage.setItem("preferred_lang", detected); } catch {}
      document.cookie = `preferred_lang=${detected};path=/;max-age=31536000;SameSite=Lax`;
    }
  }, [pathname, languages]);

  return null;
}
