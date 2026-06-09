import { Footer } from "@/components/layout/Footer";
import { BlockRenderer } from "@/components/home/BlockRenderer";
import RichText from "@/components/RichText";
import { getPageBySlug } from "@/lib/payload";

export default async function Home() {
  let page: any = null;
  try {
    page = await getPageBySlug("home");
  } catch {
    // CMS unavailable — renders with empty layout
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-1">
        {/* Blocos do page builder (campo "layout") */}
        {page?.layout?.length > 0 && <BlockRenderer blocks={page.layout} />}

        {/* Conteúdo RichText (campo "conteúdo da página") */}
        {page?.content && (
          <section className="py-12 md:py-16 bg-[#f5f5f5]">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="page-content">
                <RichText content={page.content} />
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer
        links={[
          { id: "f1", label: "Accueil", href: "/" },
          { id: "f2", label: "Actualités", href: "/actualites" },
          { id: "f3", label: "Agenda", href: "/agenda" },
          { id: "f4", label: "Liens", href: "/liens" },
          { id: "f5", label: "Dictionnaire", href: "/dictionnaire" },
          { id: "f6", label: "Contact", href: "/contact" },
          {
            id: "f7",
            label: "Construction durable",
            href: "/construction-durable",
          },
        ]}
        secondaryLinks={[
          { id: "f8", label: "Plan du site", href: "/plan-du-site" },
          { id: "f9", label: "Mentions légales", href: "/mentions-legales" },
        ]}
        activeHref="/"
      />
    </div>
  );
}
