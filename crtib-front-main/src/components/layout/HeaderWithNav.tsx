"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { SearchModal } from "@/components/layout/SearchModal";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { SiteLanguage } from "@/components/layout/LanguageSwitcher";
import type { PageWithChildren } from "@/types/payload";

// --- Desktop Dropdown Child (com suporte a netos via flyout) -----------------

function DropdownChildDesktop({
  child,
  onCloseAll,
}: {
  child: PageWithChildren;
  onCloseAll: () => void;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const hasGrandchildren = !!child.children?.length;

  if (!hasGrandchildren) {
    return (
      <Link
        key={child.id}
        href={child.href ?? `/${child.slug}`}
        onClick={onCloseAll}
        className="flex items-center px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-200 transition-colors group/item"
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors">
          {child.title}
        </span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}
    >
      <Link
        href={child.href ?? `/${child.slug}`}
        onClick={onCloseAll}
        className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-200 transition-colors group/item"
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors">
          {child.title}
        </span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 -rotate-90 text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors ml-4" />
      </Link>

      {subOpen && (
        <div className="absolute left-full top-0 min-w-[260px] bg-white border border-gray-200 shadow-xl z-50 rounded-r-md">
          {child.children!.map((grandchild: PageWithChildren) => (
            <Link
              key={grandchild.id}
              href={grandchild.href ?? `/${grandchild.slug}`}
              onClick={onCloseAll}
              className="flex items-center px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-200 transition-colors group/gc"
            >
              <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover/gc:text-[#068a6c] transition-colors">
                {grandchild.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Desktop Nav Item --------------------------------------------------------

function NavItemDesktop({ page }: { page: PageWithChildren }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasChildren = !!page.children?.length;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const itemContent = (
    <span className="flex items-center gap-2 text-[13.5px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover:text-[#068a6c] transition-colors">
      <span>{page.title}</span>
      {hasChildren && (
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      )}
    </span>
  );

  if (!hasChildren) {
    return (
      <Link
        href={page.href ?? `/${page.slug}`}
        className="group px-5 py-3 flex items-center border-l border-gray-200 first:border-l-0 h-full hover:bg-gray-200 transition-colors"
      >
        {itemContent}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={page.href ?? `/${page.slug}`}
        className="px-5 py-3 flex items-center border-l border-gray-200 first:border-l-0 h-full hover:bg-gray-200 transition-colors"
      >
        {itemContent}
      </Link>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full mt-0 min-w-[260px] bg-white border border-gray-200 shadow-xl z-50 rounded-b-md"
        >
          {page.children!.map((child: PageWithChildren) => (
            <DropdownChildDesktop
              key={child.id}
              child={child}
              onCloseAll={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// --- Mobile Nav Item ---------------------------------------------------------

function MobileChildItem({
  child,
  onClose,
}: {
  child: PageWithChildren;
  onClose: () => void;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const hasGrandchildren = !!child.children?.length;

  if (!hasGrandchildren) {
    return (
      <Link
        href={child.href ?? `/${child.slug}`}
        onClick={onClose}
        className="flex items-center pl-12 pr-6 py-4 border-b border-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span className="text-[12px] font-semibold tracking-wide uppercase text-[#08AA86]">
          {child.title}
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 hover:bg-gray-200 transition-colors">
        <Link
          href={child.href ?? `/${child.slug}`}
          onClick={onClose}
          className="flex-1 pl-12 pr-2 py-4"
        >
          <span className="text-[12px] font-semibold tracking-wide uppercase text-[#08AA86]">
            {child.title}
          </span>
        </Link>
        <button
          onClick={() => setSubOpen((v) => !v)}
          className="pr-6 py-4 text-[#08AA86]"
          aria-label="Expandir"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {subOpen && (
        <div className="bg-[#f0fdf9]">
          {child.children!.map((grandchild: PageWithChildren) => (
            <Link
              key={grandchild.id}
              href={grandchild.href ?? `/${grandchild.slug}`}
              onClick={onClose}
              className="flex items-center pl-16 pr-6 py-3.5 border-b border-gray-200 hover:bg-gray-200 transition-colors"
            >
              <span className="text-[12px] font-semibold tracking-wide uppercase text-[#08AA86]">
                {grandchild.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function NavItemMobile({
  page,
  onClose,
}: {
  page: PageWithChildren;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!page.children?.length;

  if (!hasChildren) {
    return (
      <Link
        href={page.href ?? `/${page.slug}`}
        onClick={onClose}
        className="flex items-center px-6 py-5 border-b border-gray-100 hover:bg-gray-200 transition-colors group"
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86]">
          {page.title}
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 hover:bg-gray-200 transition-colors">
        <Link
          href={page.href ?? `/${page.slug}`}
          onClick={onClose}
          className="flex-1 px-6 py-5"
        >
          <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86]">
            {page.title}
          </span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="px-5 py-5 text-[#08AA86]"
          aria-label="Expandir"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="bg-[#f0fdf9]">
          {page.children!.map((child: PageWithChildren) => (
            <MobileChildItem key={child.id} child={child} onClose={onClose} />
          ))}
        </div>
      )}
    </>
  );
}

// --- Mobile Language Section -------------------------------------------------

function MobileLangSection({
  languages,
  onClose,
}: {
  languages: SiteLanguage[];
  onClose: () => void;
}) {
  const [availableLangs, setAvailableLangs] = useState<string[] | null>(null);

  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const segments = pathname.split("/").filter(Boolean);
  const allCodes = languages.map((l) => l.slug);
  const isLangPrefix = allCodes.includes(segments[0] ?? "");
  const defaultLang = languages.find((l) => l.isDefault)?.slug ?? "fr";
  const currentLang = isLangPrefix ? segments[0] : defaultLang;
  const pageSlug = isLangPrefix ? segments.slice(1).join("/") : segments.join("/");
  const effectiveSlug = pageSlug || "home";

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/translations?slug=${encodeURIComponent(effectiveSlug)}`)
      .then((r) => r.json())
      .then((data: { langs: string[] }) => { if (!cancelled) setAvailableLangs(data.langs); })
      .catch(() => { if (!cancelled) setAvailableLangs(null); });
    return () => { cancelled = true; };
  }, [effectiveSlug]);

  function saveLangPreference(slug: string) {
    try { localStorage.setItem("preferred_lang", slug); } catch {}
    document.cookie = `preferred_lang=${slug};path=/;max-age=31536000;SameSite=Lax`;
  }

  function buildUrl(slug: string) {
    return pageSlug ? `/${slug}/${pageSlug}` : `/${slug}`;
  }

  return (
    <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
        Langue
      </p>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => {
          const isActive = lang.slug === currentLang;
          const hasTranslation =
            isActive || availableLangs === null || availableLangs.includes(lang.slug);
          const href = buildUrl(lang.slug);

          if (isActive) {
            return (
              <a
                key={lang.slug}
                href={href}
                onClick={() => { saveLangPreference(lang.slug); onClose(); }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#08AA86] text-white text-[12px] font-bold uppercase tracking-wider"
              >
                {lang.slug}
                <span className="font-normal normal-case tracking-normal text-white/80 text-[11px]">{lang.name}</span>
              </a>
            );
          }

          if (!hasTranslation) {
            return (
              <span
                key={lang.slug}
                title={`${lang.name} – pas de traduction disponible`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-gray-300 text-[12px] font-bold uppercase tracking-wider cursor-not-allowed"
              >
                {lang.slug}
                <span className="font-normal normal-case tracking-normal text-[11px]">{lang.name}</span>
              </span>
            );
          }

          return (
            <a
              key={lang.slug}
              href={href}
              onClick={() => { saveLangPreference(lang.slug); onClose(); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#08AA86]/30 text-[#08AA86] text-[12px] font-bold uppercase tracking-wider hover:bg-[#08AA86]/10 transition-colors"
            >
              {lang.slug}
              <span className="font-normal normal-case tracking-normal text-[11px]">{lang.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// --- Header Principal (Logo centralizada em cima, menu embaixo) --------------

interface HeaderWithNavProps {
  pages: PageWithChildren[];
  languages?: SiteLanguage[];
}

export function HeaderWithNav({ pages, languages = [] }: HeaderWithNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        {/* Logo centralizada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center py-5">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="CRTI-B"
                width={260}
                height={62}
                priority
                className="h-10 w-auto lg:h-16"
              />
            </Link>
          </div>

          {/* Sélecteur de langue desktop (top-right) */}
          {languages.length > 1 && (
            <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2">
              <LanguageSwitcher languages={languages} />
            </div>
          )}

          {/* Hamburger mobile + lupa (sans langue ici → dans le drawer) */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-[#08AA86] hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2.5 text-[#08AA86] hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Barre de navigation desktop */}
        <nav className="hidden lg:flex items-center justify-center border-t border-gray-100 bg-gray-50/60 px-4">
          <div className="flex items-stretch flex-wrap justify-center divide-x divide-gray-200">
            {pages.map((page) => (
              <NavItemDesktop key={page.id} page={page} />
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              className="px-5 py-3 flex items-center border-l border-gray-200 h-full hover:bg-gray-200 transition-colors group"
              aria-label="Rechercher"
            >
              <Search className="w-[18px] h-[18px] text-[#08AA86] group-hover:text-[#068a6c] transition-colors" />
            </button>
          </div>
        </nav>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Drawer mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[340px] bg-white flex flex-col shadow-2xl">
            {/* En-tête du drawer */}
            <div className="flex items-center justify-end px-6 py-5 border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-gray-400 hover:text-[#08AA86] hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Itens do menu */}
            <nav className="flex-1 overflow-y-auto">
              {pages.map((page) => (
                <NavItemMobile
                  key={page.id}
                  page={page}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </nav>

            {/* Langue — en bas du drawer */}
            {languages.length > 1 && (
              <MobileLangSection
                languages={languages}
                onClose={() => setMobileOpen(false)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
