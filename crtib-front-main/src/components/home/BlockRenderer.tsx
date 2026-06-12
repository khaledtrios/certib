import { NewsSectionLoader } from "@/components/news/NewsSectionLoader";
import { PdfViewerModal } from "@/components/pdf/PdfViewerModal";
import { VideoViewerModal } from "@/components/video/VideoViewerModal";
import { VideoEmbedSection } from "@/components/video/VideoEmbedSection";
import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { ClickableCard } from "@/components/cards/ClickableCard";
import {
  Scale, Monitor, Zap, BookOpen, Building2, Users,
  FileText, BarChart3, Cpu, Sprout, type LucideIcon,
} from "lucide-react";

// Mapping titre → icône Lucide (insensible à la casse et aux accents)
const CATEGORY_ICONS: Array<{ patterns: RegExp; Icon: LucideIcon }> = [
  { patterns: /march[eé]|public|appel.offre|soumission/i,    Icon: Scale        },
  { patterns: /digital|bim|num[eé]rique|informatique|cloud/i, Icon: Cpu         },
  { patterns: /construc.*durable|durable|[eé]colog|vert/i,    Icon: Sprout      },
  { patterns: /[eé]nerg[eé]tique|[eé]nergie|performance/i,   Icon: Zap          },
  { patterns: /dictionnaire|glossaire/i,                      Icon: BookOpen    },
  { patterns: /partenaire|partner/i,                          Icon: Users        },
  { patterns: /qui sommes|[àa] propos|crti/i,                 Icon: Building2   },
  { patterns: /rapport|activit[eé]/i,                         Icon: BarChart3   },
  { patterns: /formation|training/i,                          Icon: Monitor     },
];

function resolveIcon(title: string): LucideIcon {
  for (const { patterns, Icon } of CATEGORY_ICONS) {
    if (patterns.test(title)) return Icon;
  }
  return FileText;
}
import { PartnersSection } from "@/components/partners/PartnersSection";
import { VideoCardsSection } from "@/components/video/VideoCardsSection";
import { ActivityReportsSection } from "@/components/reports/ActivityReportsSection";
import { Timeline } from "@/components/timeline/Timeline";
import { ClausesGrid } from "@/components/blocks/ClausesGrid";
import { DynamicGrid } from "@/components/blocks/DynamicGrid";
import { DataGridDownloads } from "@/components/DataGridDownloads";
import { DownloadLink } from "@/components/ui";
import { getMediaUrl } from "@/lib/payload";
import { PhotoHeroCarousel } from "@/components/home/PhotoHeroCarousel";
import { NewsletterBlock } from "@/components/blocks/NewsletterBlock";
import { AccordionBlock } from "@/components/blocks/AccordionBlock";
import { TeamGrid } from "@/components/team/TeamGrid";
import { FormationsSection } from "@/components/formations/FormationsSection";
import { ContactBlock } from "@/components/contact/ContactBlock";
import RichText from "@/components/RichText";


// ─── Renderizador de blocos ────────────────────────────────────────────────────

export function BlockRenderer({ blocks }: { blocks: any[] }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? i;

        switch (block.blockType) {
          case "photoHeroCarousel": {
            const slides = (block.slides ?? []).map(
              (slide: any, j: number) => ({
                id: String(slide.id ?? `slide-${j}`),
                imageUrl: getMediaUrl(slide.image),
                alt: slide.alt || slide.title || "Slide",
                eyebrow: slide.eyebrow || undefined,
                title: slide.title || "",
              }),
            );
            return (
              <PhotoHeroCarousel
                key={key}
                slides={slides}
                autoPlayMs={block.autoPlayMs ?? 5000}
              />
            );
          }
          case "newsSection":
            return (
              <NewsSectionLoader
                key={key}
                title={block.title}
                maxItems={block.maxItems ?? 3}
                variant={block.variant}
                ctaHref={block.ctaHref}
              />
            );

          case "documentsSection": {
            const items: any[] = block.items ?? [];
            return (
              <section key={key} className="w-full bg-[#F5F5F5]">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  {block.title && (
                    <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                      {block.title}
                    </h2>
                  )}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {items.map((item, j) =>
                      item.type === "pdf" ? (
                        <PdfViewerModal
                          key={j}
                          title={item.title}
                          pdfUrl={getMediaUrl(item.file)}
                          triggerLabel={item.triggerLabel ?? "Voir le PDF"}
                        />
                      ) : (
                        <VideoViewerModal
                          key={j}
                          title={item.title}
                          videoUrl={item.videoUrl ?? ""}
                        />
                      ),
                    )}
                  </div>
                </div>
              </section>
            );
          }

          case "calculator":
            return <CalculatorSection key={key} />;

          case "clausesGrid": {
            const rows = (block.clauses ?? []).map((c: any) => ({
              number: c.number ?? "",
              title: c.title ?? "",
              date: c.date
                ? new Date(c.date).toLocaleDateString("fr-LU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "",
              version: c.version ?? undefined,
              pdfUrl: c.pdf ? getMediaUrl(c.pdf) : undefined,
              rtfUrl: c.rtf ? getMediaUrl(c.rtf) : undefined,
              docUrl: c.doc ? getMediaUrl(c.doc) : undefined,
            }));
            return (
              <section key={key} className="w-full bg-[#F5F5F5]">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <ClausesGrid
                    title={block.title}
                    rows={rows}
                    redirectLabel={block.redirectLabel}
                    redirectHref={block.redirectHref}
                  />
                </div>
              </section>
            );
          }

          case "dynamicGrid": {
            const columns = (block.columns ?? []).map((c: any) => ({
              id: c.id,
              label: c.label,
              type: c.type,
              config:
                c.precision != null || c.currency
                  ? { precision: c.precision, currency: c.currency }
                  : undefined,
            }));
            const rows = (block.rows ?? []).map((r: any, j: number) => ({
              id: r.id ?? `row-${j}`,
              values: r.values ?? {},
            }));
            return (
              <section key={key} className="w-full bg-white">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <DynamicGrid
                    title={block.title}
                    columns={columns}
                    rows={rows}
                  />
                </div>
              </section>
            );
          }

          case "downloadGrid": {
            const documents = (block.documents ?? []).map((d: any) => ({
              numero: d.numero,
              titulo: d.titulo,
              data: d.data ? new Date(d.data).toISOString().split("T")[0] : "",
              versao: d.versao,
              links: {
                pdf: d.pdf ? getMediaUrl(d.pdf) : undefined,
                rtf: d.rtf ? getMediaUrl(d.rtf) : undefined,
                doc: d.doc ? getMediaUrl(d.doc) : undefined,
                xls: d.xls ? getMediaUrl(d.xls) : undefined,
                zip: d.zip ? getMediaUrl(d.zip) : undefined,
              },
            }));
            return (
              <section key={key} className="w-full bg-[#F5F5F5]">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                    Téléchargements
                  </h2>
                  <DataGridDownloads
                    documents={documents}
                    pageSize={block.pageSize ?? 10}
                  />
                </div>
              </section>
            );
          }

          case "downloadLinks": {
            const items: any[] = block.items ?? [];
            return (
              <section key={key} className="w-full bg-white">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  {block.title && (
                    <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                      {block.title}
                    </h2>
                  )}
                  <ul className="flex flex-col gap-4">
                    {items.map((item, j) => (
                      <li key={j}>
                        <DownloadLink
                          variant="custom"
                          href={getMediaUrl(item.file)}
                          title={item.label}
                          download
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          }

          case "quickLinks": {
            const items: any[] = block.items ?? [];
            return (
              <section key={key} className="w-full bg-[#F5F5F5]">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {items.map((item, j) => (
                      <ClickableCard
                        key={j}
                        title={item.title}
                        href={item.href}
                        Icon={resolveIcon(item.title ?? "")}
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          case "organogram": {
            if (!block.root) return null;
            return <TeamGrid key={key} root={block.root} />;
          }

          case "timeline": {
            const items = (block.items ?? []).map((t: any, j: number) => ({
              id: t.id ?? `t-${j}`,
              year: t.year,
              title: t.title,
            }));
            return (
              <section key={key} className="w-full bg-[#F5F5F5]">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <h2 className="mb-8 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                    Notre histoire
                  </h2>
                  <Timeline
                    items={items}
                    highlightLast={block.highlightLast ?? true}
                  />
                </div>
              </section>
            );
          }

          case "partners": {
            const partners = (block.partners ?? []).map((p: any) => ({
              id: String(p.id ?? p.name),
              name: p.name,
              logoUrl: p.logo ? getMediaUrl(p.logo) : undefined,
              href: p.href || undefined,
            }));
            const associations = (block.associations ?? []).map((a: any) => ({
              id: String(a.id ?? a.name),
              name: a.name,
              logoUrl: a.logo ? getMediaUrl(a.logo) : undefined,
              href: a.href || undefined,
            }));
            return (
              <PartnersSection
                key={key}
                title={block.title}
                associationsTitle={block.associationsTitle}
                partners={partners}
                associations={associations}
              />
            );
          }

          case "videoEmbed":
            return (
              <VideoEmbedSection
                key={key}
                title={block.title}
                type={block.type as "youtube" | "internal"}
                src={block.src ?? ""}
              />
            );

          case "videoCards": {
            const videos = (block.videos ?? []).map((v: any) => ({
              id: String(v.id ?? v.title),
              title: v.title,
              type: v.type as "youtube" | "internal",
              src: v.src,
            }));
            return (
              <VideoCardsSection
                key={key}
                title={block.title}
                videos={videos}
              />
            );
          }

          case "activityReports": {
            const reports = (block.reports ?? []).map((r: any) => ({
              id: String(r.id ?? r.year),
              year: r.year,
              pdfUrl: getMediaUrl(r.pdf),
            }));
            return (
              <ActivityReportsSection
                key={key}
                title={block.title}
                reports={reports}
              />
            );
          }
          case "newsletterBlock": {
            return (
              <NewsletterBlock
                key={key}
                heading={block.heading}
                description={block.description}
                buttonLabel={block.buttonLabel}
              />
            );
          }

          case "formationsSection": {
            return (
              <FormationsSection
                key={key}
                title={block.title}
                category={block.category}
                showFilters={block.showFilters !== false}
                limit={block.limit ?? 12}
              />
            );
          }

          case "textBlock": {
            return (
              <section key={key} className="w-full bg-white py-8">
                <div className="mx-auto max-w-3xl px-6">
                  <RichText content={block.content} />
                </div>
              </section>
            );
          }

          case "accordionBlock": {
            return (
              <AccordionBlock
                key={key}
                title={block.title}
                items={block.items ?? []}
              />
            );
          }

          case "contactBlock": {
            return (
              <ContactBlock
                key={key}
                phone={block.phone}
                email={block.email}
                address={block.address}
                hours={block.hours}
                mapsEmbedUrl={block.mapsEmbedUrl}
              />
            );
          }

          default:
            return null;
        }
      })}
    </>
  );
}
