import { NewsSectionLoader } from "@/components/news/NewsSectionLoader";
import { PdfViewerModal } from "@/components/pdf/PdfViewerModal";
import { VideoViewerModal } from "@/components/video/VideoViewerModal";
import { VideoEmbedSection } from "@/components/video/VideoEmbedSection";
import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { ClickableCard } from "@/components/cards/ClickableCard";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { VideoCardsSection } from "@/components/video/VideoCardsSection";
import { ActivityReportsSection } from "@/components/reports/ActivityReportsSection";
import { OrganogramChart } from "@/components/organogram";
import { Timeline } from "@/components/timeline/Timeline";
import { ClausesGrid } from "@/components/blocks/ClausesGrid";
import { DynamicGrid } from "@/components/blocks/DynamicGrid";
import { DataGridDownloads } from "@/components/DataGridDownloads";
import { DownloadLink } from "@/components/ui";
import { getMediaUrl } from "@/lib/payload";
import { PhotoHeroCarousel } from "@/components/home/PhotoHeroCarousel";
import { NewsletterBlock } from "@/components/blocks/NewsletterBlock";

// ─── Helpers de mapeamento ────────────────────────────────────────────────────

function mapOrganogramNode(node: any): any {
  if (!node) return null;
  return {
    id: node.id ?? node.name,
    name: node.name,
    role: node.role,
    photoUrl: node.photo ? getMediaUrl(node.photo) : undefined,
    children: Array.isArray(node.children)
      ? node.children.map(mapOrganogramNode)
      : undefined,
  };
}

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
                        icon={
                          item.icon ? (
                            <span className="text-xl">{item.icon}</span>
                          ) : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          case "organogram": {
            const root = mapOrganogramNode(block.root);
            if (!root) return null;
            return (
              <section key={key} className="w-full bg-white">
                <div className="mx-auto w-full max-w-6xl px-6 py-12">
                  <h2 className="mb-8 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                    Organigramme
                  </h2>
                  <OrganogramChart root={root} />
                </div>
              </section>
            );
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

          default:
            return null;
        }
      })}
    </>
  );
}
