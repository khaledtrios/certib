"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { SearchModal } from "@/components/layout/SearchModal";
import type { PageWithChildren, PageIcon } from "@/types/payload";

// --- Icones dinamicos (configurados no CMS) ---------------------------------

const ICON_PATHS: Record<string, string> = {
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  document:
    "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  globe:
    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  leaf: "M15 12a9.004 9.004 0 0 0-4.563-7.834A9.004 9.004 0 0 0 3 12a9.004 9.004 0 0 0 7.437 8.834A9.004 9.004 0 0 0 15 12Zm0 0a3 3 0 1 1-6 0m6 0H9m3-9v3m0 12v3",
  calendar:
    "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  building:
    "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  graduation:
    "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c-.327.17-.65.348-.969.532m2.98-5.966L12 3.75l7.74 6.397",
  "external-link":
    "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
  star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  settings:
    "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.431.992a7.723 7.723 0 0 1 0 .255c-.007.378.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.212-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  list: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
};

function PageIconSvg({
  icon,
  className = "w-5 h-5",
}: {
  icon?: PageIcon | null;
  className?: string;
}) {
  const path = icon ? ICON_PATHS[icon] : ICON_PATHS.list;
  return (
    <svg
      className={`${className} flex-shrink-0`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

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
        href={`/${child.slug}`}
        onClick={onCloseAll}
        className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-200 transition-colors group/item"
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors">
          {child.title}
        </span>
        <span className="text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors ml-4">
          <PageIconSvg icon={child.icon} className="w-[18px] h-[18px]" />
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
        href={`/${child.slug}`}
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
              href={`/${grandchild.slug}`}
              onClick={onCloseAll}
              className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-200 transition-colors group/gc"
            >
              <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86] group-hover/gc:text-[#068a6c] transition-colors">
                {grandchild.title}
              </span>
              <span className="text-[#08AA86] group-hover/gc:text-[#068a6c] transition-colors ml-4">
                <PageIconSvg icon={grandchild.icon} className="w-[18px] h-[18px]" />
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
      {hasChildren ? (
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      ) : (
        <PageIconSvg icon={page.icon} className="w-[18px] h-[18px]" />
      )}
    </span>
  );

  if (!hasChildren) {
    return (
      <Link
        href={`/${page.slug}`}
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
        href={`/${page.slug}`}
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
        href={`/${child.slug}`}
        onClick={onClose}
        className="flex items-center justify-between pl-12 pr-6 py-4 border-b border-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span className="text-[12px] font-semibold tracking-wide uppercase text-[#08AA86]">
          {child.title}
        </span>
        <span className="text-[#08AA86]">
          <PageIconSvg icon={child.icon} className="w-[18px] h-[18px]" />
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 hover:bg-gray-200 transition-colors">
        <Link
          href={`/${child.slug}`}
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
              href={`/${grandchild.slug}`}
              onClick={onClose}
              className="flex items-center justify-between pl-16 pr-6 py-3.5 border-b border-gray-200 hover:bg-gray-200 transition-colors"
            >
              <span className="text-[12px] font-semibold tracking-wide uppercase text-[#08AA86]">
                {grandchild.title}
              </span>
              <span className="text-[#08AA86]">
                <PageIconSvg icon={grandchild.icon} className="w-[18px] h-[18px]" />
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
        href={`/${page.slug}`}
        onClick={onClose}
        className="flex items-center justify-between px-6 py-5 border-b border-gray-100 hover:bg-gray-200 transition-colors group"
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-[#08AA86]">
          {page.title}
        </span>
        <span className="text-[#08AA86]">
          <PageIconSvg icon={page.icon} className="w-5 h-5" />
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 hover:bg-gray-200 transition-colors">
        <Link
          href={`/${page.slug}`}
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

// --- Header Principal (Logo centralizada em cima, menu embaixo) --------------

interface HeaderWithNavProps {
  pages: PageWithChildren[];
}

export function HeaderWithNav({ pages }: HeaderWithNavProps) {
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
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Hamburger mobile + lupa */}
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
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gray-50">
              <Image
                src="/logo.svg"
                alt="CRTI-B"
                width={160}
                height={38}
                className="h-10 w-auto"
              />
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
          </div>
        </div>
      )}
    </>
  );
}
