import { headers } from "next/headers";
import { getPages, getSiteLanguages } from "@/lib/payload";
import { HeaderWithNav } from "./HeaderWithNav";
import { Footer } from "./Footer";
import type { Page, PageWithChildren } from "@/types/payload";
import type { SiteLanguage } from "./LanguageSwitcher";

/**
 * Organise les pages en hiérarchie parent-enfant.
 * Calcule href = /{lang}/{slug} pour chaque page.
 */
function organizePageHierarchy(pages: Page[], defaultLang: string): PageWithChildren[] {
  const pagesMap = new Map<string, PageWithChildren>();
  const rootPages: PageWithChildren[] = [];

  pages.forEach((page) => {
    const lang =
      page.language && typeof page.language === "object"
        ? (page.language as any).slug
        : typeof page.language === "string"
        ? page.language
        : null;
    const effectiveLang = lang ?? defaultLang;

    pagesMap.set(page.id, {
      ...page,
      children: [],
      href: `/${effectiveLang}/${page.slug}`,
    });
  });

  pages.forEach((page) => {
    const pageWithChildren = pagesMap.get(page.id)!;

    if (page.parent) {
      const parentId =
        typeof page.parent === "object" ? page.parent.id : page.parent;
      const parentPage = pagesMap.get(parentId);

      if (parentPage) {
        parentPage.children = parentPage.children || [];
        parentPage.children.push(pageWithChildren);
      } else {
        // Parent exists in DB but is not in the filtered set (different language).
        // Promote to root so the page is not silently lost from the menu.
        rootPages.push(pageWithChildren);
      }
    } else {
      rootPages.push(pageWithChildren);
    }
  });

  const byOrder = (a: PageWithChildren, b: PageWithChildren) =>
    (a.menuOrder ?? 9999) - (b.menuOrder ?? 9999);

  const filterVisible = (items: PageWithChildren[]): PageWithChildren[] =>
    items
      .filter((p) => !p.isHidden)
      .map((p) => ({ ...p, children: filterVisible(p.children ?? []) }));

  const sortRecursive = (items: PageWithChildren[]) => {
    items.sort(byOrder);
    items.forEach((p) => {
      if (p.children?.length) sortRecursive(p.children);
    });
  };

  sortRecursive(rootPages);
  return filterVisible(rootPages).filter((p) => (p.menuOrder ?? 0) < 900);
}

/**
 * Layout global — Server Component.
 * Reads x-lang from middleware to show only the current language's pages in nav.
 */
export async function GlobalLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const currentLang = headersList.get("x-lang") ?? "fr";

  try {

    // Fetch languages first so we know the default before fetching pages
    const languagesResponse = await getSiteLanguages();
    const languages = (languagesResponse.docs ?? []) as SiteLanguage[];
    const defaultLang = languages.find((l) => l.isDefault)?.slug ?? "fr";

    const pagesResponse = await getPages({
      depth: 1,
      limit: 1000,
      sort: "menuOrder",
      where: buildPagesWhere(currentLang),
    });

    const pages = pagesResponse.docs as Page[];
    const hierarchyPages = organizePageHierarchy(pages, defaultLang);

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <HeaderWithNav pages={hierarchyPages} languages={languages} />
        <main className="flex-1">{children}</main>
        <Footer lang={currentLang} />
      </div>
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    if (process.env.NODE_ENV === "development") {
      console.warn("[GlobalLayout] CMS unreachable:", msg);
    }
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">{children}</main>
        <Footer lang={currentLang} />
      </div>
    );
  }
}

/**
 * Builds the Payload where-clause for fetching nav pages in the current language.
 * Strict match: only pages explicitly tagged with the current language slug.
 */
function buildPagesWhere(lang: string) {
  return {
    and: [
      { _status: { equals: "published" } },
      { "language.slug": { equals: lang } },
    ],
  };
}
