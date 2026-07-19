import Image from "next/image";
import type { Page } from "@/types/payload";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";
import { BlockRenderer } from "@/components/home/BlockRenderer";
import { getMediaUrl } from "@/lib/payload";
import { getLabels } from "@/lib/labels";

interface PageLayoutProps {
  page: Page;
  searchParams?: { page?: string; category?: string };
}

function getLangSlug(page: Page): string {
  if (page.language && typeof page.language === "object") {
    return (page.language as any).slug ?? "fr";
  }
  return "fr";
}

function buildBreadcrumbItems(page: Page): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];
  const lang = getLangSlug(page);

  if (page.parent && typeof page.parent === "object") {
    const parent = page.parent as Page;
    const parentLang = getLangSlug(parent) || lang;
    if (parent.slug && parent.title && parent.slug !== page.slug) {
      items.push({ href: `/${parentLang}/${parent.slug}`, title: parent.title });
    }
  }

  items.push({ href: `/${lang}/${page.slug}`, title: page.title });
  return items;
}

export default async function PageLayout({ page, searchParams = {} }: PageLayoutProps) {
  const { title, layout } = page;
  const lang = getLangSlug(page);
  const pageSlug = (page.slug && page.slug !== "home") ? page.slug : "";
  const labels = await getLabels(lang);
  const breadcrumbItems = buildBreadcrumbItems(page);

  const headerImage = (page as any).headerImage;
  const imageUrl = headerImage ? getMediaUrl(headerImage) : null;

  return (
    <div className="h-full bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} homeLabel={labels.breadcrumb_home} />
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
          {imageUrl ? (
            <div className="bg-white px-3 py-2">
              <Image
                src={imageUrl}
                alt={title}
                width={120}
                height={64}
                className="object-contain w-auto h-auto max-h-16 max-w-[120px]"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-6 h-6 bg-[#08AA86] rounded-full" />
            </div>
          )}
        </div>
      </section>

      {/* Sections de la page */}
      {layout && layout.length > 0 && (
        <div className="pt-12 md:pt-14">
          <BlockRenderer blocks={layout} labels={labels} lang={lang} pageSlug={pageSlug} searchParams={searchParams} />
        </div>
      )}
    </div>
  );
}
