import type { Page } from "@/types/payload";
import RichText from "./RichText";
import Breadcrumb from "./Breadcrumb";
import { BlockRenderer } from "@/components/home/BlockRenderer";

interface PageLayoutProps {
  page: Page;
}

export default function PageLayout({ page }: PageLayoutProps) {
  const { title, content, layout, slug } = page;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Breadcrumb slug={slug} currentTitle={title} />
        </div>
      </div>

      {/* Hero Section com Título */}
      <section className="bg-white relative pb-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-8 md:py-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-800 uppercase">
            {title}
          </h1>
        </div>

        {/* Bolinha decorativa de transição */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Blocos de layout (page builder) */}
      {layout && layout.length > 0 && (
        <div className="pt-12 md:pt-14">
          <BlockRenderer blocks={layout} />
        </div>
      )}

      {/* Conteúdo Principal (RichText) */}
      {content && (
        <section className="pt-12 md:pt-14 pb-12 md:pb-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="page-content">
              <RichText content={content} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
