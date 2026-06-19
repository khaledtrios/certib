import { getPages } from "@/lib/payload";
import { HeaderWithNav } from "./HeaderWithNav";
import { Footer } from "./Footer";
import type { Page, PageWithChildren } from "@/types/payload";

/**
 * Organiza páginas em hierarquia pai-filho
 */
function organizePageHierarchy(pages: Page[]): PageWithChildren[] {
  const pagesMap = new Map<string, PageWithChildren>();
  const rootPages: PageWithChildren[] = [];

  // Primeiro passa: cria map de todas as páginas
  pages.forEach((page) => {
    pagesMap.set(page.id, {
      ...page,
      children: [],
    });
  });

  // Segundo passa: organiza em hierarquia
  pages.forEach((page) => {
    const pageWithChildren = pagesMap.get(page.id)!;

    if (page.parent) {
      const parentId =
        typeof page.parent === "object" ? page.parent.id : page.parent;
      const parentPage = pagesMap.get(parentId);

      if (parentPage) {
        parentPage.children = parentPage.children || [];
        parentPage.children.push(pageWithChildren);
      }
    } else {
      // Página raiz
      rootPages.push(pageWithChildren);
    }
  });
  // Ordena pelo campo menuOrder (menor = primeiro); sem valor vai para o final
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
 * Layout global com header e navegação
 * Server Component que busca as páginas e passa ao Header
 */
export async function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    // Busca todas as páginas
    const response = await getPages({
      depth: 1,
      limit: 1000,
      sort: "menuOrder",
      where: { _status: { equals: "published" } },
    });

    const pages = response.docs as Page[];
    const hierarchyPages = organizePageHierarchy(pages);

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <HeaderWithNav pages={hierarchyPages} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    if (process.env.NODE_ENV === "development") {
      console.warn("[GlobalLayout] CMS unreachable — rendering without nav:", msg);
    }

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }
}
