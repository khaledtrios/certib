"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export type SiteLanguage = { name: string; slug: string; isDefault: boolean; isActive: boolean };

const BUILTIN_LANG_CODES = ["fr", "de", "en", "lu", "pt", "es", "it", "nl"];

function buildLangUrl(langSlug: string, pageSlug: string): string {
  return pageSlug ? `/${langSlug}/${pageSlug}` : `/${langSlug}`;
}

function saveLangPreference(slug: string) {
  try { localStorage.setItem("preferred_lang", slug); } catch {}
  document.cookie = `preferred_lang=${slug};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageSwitcher({ languages }: { languages: SiteLanguage[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] ?? "";
  const allCodes = [...new Set([...languages.map((l) => l.slug), ...BUILTIN_LANG_CODES])];
  const isLangPrefix = allCodes.includes(firstSegment);
  const defaultLang = languages.find((l) => l.isDefault)?.slug ?? "fr";
  const currentLang = isLangPrefix ? firstSegment : defaultLang;
  const pageSlug = isLangPrefix ? segments.slice(1).join("/") : segments.join("/");
  const effectiveSlug = pageSlug || "home";

  const [availableLangs, setAvailableLangs] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    setAvailableLangs(null);
    fetch(`/api/translations?slug=${encodeURIComponent(effectiveSlug)}`)
      .then((r) => r.json())
      .then((data: { langs: string[] }) => { if (!cancelled) setAvailableLangs(data.langs); })
      .catch(() => { if (!cancelled) setAvailableLangs(null); });
    return () => { cancelled = true; };
  }, [effectiveSlug]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (languages.length <= 1) return null;

  const currentLanguage = languages.find((l) => l.slug === currentLang);
  const otherLanguages = languages.filter((l) => l.slug !== currentLang);

  return (
    <div ref={ref} className="relative" aria-label="Sélecteur de langue">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-[#08AA86] text-white text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-[#07996f]"
      >
        <span>{currentLanguage?.slug ?? currentLang}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2 4 6 8 10 4" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 min-w-[120px] rounded-md border border-gray-100 bg-white shadow-lg py-1 z-50"
        >
          {otherLanguages.map((lang) => {
            const hasTranslation =
              availableLangs === null || availableLangs.includes(lang.slug);
            const href = buildLangUrl(lang.slug, pageSlug);

            if (!hasTranslation) {
              return (
                <span
                  key={lang.slug}
                  role="option"
                  aria-disabled="true"
                  title={`${lang.name} – pas de traduction disponible`}
                  className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-gray-300 cursor-not-allowed"
                >
                  <span className="w-5 text-center">{lang.slug}</span>
                  <span className="text-[11px] font-normal normal-case tracking-normal truncate">{lang.name}</span>
                </span>
              );
            }

            return (
              <a
                key={lang.slug}
                href={href}
                role="option"
                aria-selected={false}
                title={lang.name}
                className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:bg-[#08AA86]/8 hover:text-[#08AA86] transition-colors"
                onClick={() => { saveLangPreference(lang.slug); setOpen(false); }}
              >
                <span className="w-5 text-center">{lang.slug}</span>
                <span className="text-[11px] font-normal normal-case tracking-normal truncate">{lang.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
