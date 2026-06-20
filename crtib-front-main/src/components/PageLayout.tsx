import type { Page } from "@/types/payload";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";
import { BlockRenderer } from "@/components/home/BlockRenderer";

interface PageLayoutProps {
  page: Page;
}

function buildBreadcrumbItems(page: Page): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];

  // Add parent if available (depth=1 from API)
  if (page.parent && typeof page.parent === "object") {
    const parent = page.parent as Page;
    if (parent.slug && parent.title) {
      items.push({ href: `/${parent.slug}`, title: parent.title });
    }
  }

  items.push({ href: `/${page.slug}`, title: page.title });
  return items;
}

export default function PageLayout({ page }: PageLayoutProps) {
  const { title, layout } = page;
  const breadcrumbItems = buildBreadcrumbItems(page);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white relative pb-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-8 md:py-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-800 uppercase">
            {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sections de la page (draggable dans l'admin) */}
      {layout && layout.length > 0 && (
        <div className="pt-12 md:pt-14">
          <BlockRenderer blocks={layout} />
        </div>
      )}
    </div>
  );
}
