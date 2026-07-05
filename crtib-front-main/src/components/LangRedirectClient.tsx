"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PREF_KEY = "preferred_lang";

/**
 * Reads the user's preferred language from localStorage and redirects to
 * /{lang} immediately on mount. Falls back to defaultLang if:
 * - localStorage is unavailable (private mode, SSR)
 * - The stored value is not in the list of active languages
 *
 * The language displayed is ALWAYS decided by the URL afterward — this
 * component only handles the initial "/" redirect, never renders content.
 */
export function LangRedirectClient({
  defaultLang,
  activeLangs,
}: {
  defaultLang: string;
  activeLangs: string[];
}) {
  const router = useRouter();

  useEffect(() => {
    let preferred: string | null = null;
    try {
      preferred = localStorage.getItem(PREF_KEY);
    } catch {}

    const target =
      preferred && activeLangs.includes(preferred) ? preferred : defaultLang;

    router.replace(`/${target}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
