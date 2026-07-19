import { NewsSectionLoader } from "@/components/news/NewsSectionLoader";
import { NewsSectionAllLoader } from "@/components/news/NewsSectionAllLoader";
import { PdfViewerModal } from "@/components/pdf/PdfViewerModal";
import { VideoViewerModal } from "@/components/video/VideoViewerModal";
import { VideoEmbedSection } from "@/components/video/VideoEmbedSection";
import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { ClickableCard } from "@/components/cards/ClickableCard";
import {
  Scale, Monitor, Zap, BookOpen, Building2, Users,
  FileText, BarChart3, Cpu, Sprout, type LucideIcon,
  HardHat, Hammer, Ruler, Wrench, Factory, Clipboard, Award, GraduationCap,
  Briefcase, Globe, Database, Server, Leaf, Wind, Thermometer, Droplets, Sun,
  Handshake, PieChart, TrendingUp, Activity, Search, MapPin, Calendar, Phone,
  Mail, Home, Download, Shield, Target, Lightbulb, Video, File, Folder, Flag,
  Clock, CheckCircle, ArrowRight, Star, ExternalLink,
} from "lucide-react";

// Map icon name (stored in CMS) → Lucide component
const ICON_MAP: Record<string, LucideIcon> = {
  Building2, HardHat, Hammer, Ruler, Wrench, Factory,
  Scale, FileText, Clipboard, BookOpen, Award, GraduationCap, Briefcase,
  Cpu, Monitor, Globe, Database, Server,
  Sprout, Leaf, Zap, Wind, Thermometer, Droplets, Sun,
  Users, Handshake, BarChart3, PieChart, TrendingUp, Activity,
  Search, MapPin, Calendar, Phone, Mail, Home, Download, Shield,
  Target, Lightbulb, Video, File, Folder, Flag,
  Clock, CheckCircle, ArrowRight, Star, ExternalLink,
};

// Fallback: resolve icon from title text when no icon is stored in CMS
const CATEGORY_ICONS: Array<{ patterns: RegExp; Icon: LucideIcon }> = [
  { patterns: /march[eé]|public|appel.offre|soumission/i,    Icon: Scale     },
  { patterns: /digital|bim|num[eé]rique|informatique|cloud/i, Icon: Cpu      },
  { patterns: /construc.*durable|durable|[eé]colog|vert/i,    Icon: Sprout   },
  { patterns: /[eé]nerg[eé]tique|[eé]nergie|performance/i,   Icon: Zap       },
  { patterns: /dictionnaire|glossaire/i,                      Icon: BookOpen  },
  { patterns: /partenaire|partner/i,                          Icon: Users     },
  { patterns: /qui sommes|[àa] propos|crti/i,                 Icon: Building2 },
  { patterns: /rapport|activit[eé]/i,                         Icon: BarChart3 },
  { patterns: /formation|training/i,                          Icon: Monitor   },
];

function resolveIcon(iconName: string | undefined, title: string): LucideIcon {
  if (iconName && ICON_MAP[iconName]) return ICON_MAP[iconName];
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
import { getMediaUrl } from "@/lib/payload";
import { PhotoHeroCarousel } from "@/components/home/PhotoHeroCarousel";
import { NewsletterBlock } from "@/components/blocks/NewsletterBlock";
import { AccordionBlock } from "@/components/blocks/AccordionBlock";
import { TeamGrid } from "@/components/team/TeamGrid";
import { FormationsSection } from "@/components/formations/FormationsSection";
import { ContactBlock } from "@/components/contact/ContactBlock";
import RichText from "@/components/RichText";
import React from "react";
import { type Labels, DEFAULT_LABELS } from "@/lib/labels";


// ─── Renderizador de blocos ────────────────────────────────────────────────────

interface BlockContext {
  lang: string;
  pageSlug: string;
  searchParams: { page?: string; category?: string };
}

function renderBlockContent(block: any, labels: Labels, ctx: BlockContext = { lang: "fr", pageSlug: "", searchParams: {} }): React.ReactNode {
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
          slides={slides}
          autoPlayMs={block.autoPlayMs ?? 5000}
        />
      );
    }
    case "newsSection": {
      if (block.showAll) {
        const basePath = ctx.pageSlug && ctx.pageSlug !== "home"
          ? `/${ctx.lang}/${ctx.pageSlug}`
          : `/${ctx.lang}`;
        const currentPage = Number(ctx.searchParams.page) || 1;
        return (
            <NewsSectionAllLoader
            lang={ctx.lang}
            basePath={basePath}
            page={currentPage}
            category={ctx.searchParams.category}
          />
        );
      }
      return (
        <NewsSectionLoader
          title={block.title}
          maxItems={block.maxItems ?? 3}
          variant={block.variant}
          ctaHref={block.ctaHref}
          filterCategories={block.filterCategories ?? null}
          filterRubriques={block.filterRubriques ?? null}
        />
      );
    }

    case "documentsSection": {
      const items: any[] = block.items ?? [];
      return (
        <section className="w-full bg-[#F5F5F5]">
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
                    triggerLabel={item.triggerLabel ?? labels.see_pdf}
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
      return <CalculatorSection />;

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
        <section className="w-full bg-[#F5F5F5]">
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
        <section className="w-full bg-white">
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
        <section className="w-full bg-[#F5F5F5]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            {block.title && (
              <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                {block.title}
              </h2>
            )}
            <DataGridDownloads
              documents={documents}
              pageSize={block.pageSize ?? 10}
              labels={labels}
            />
          </div>
        </section>
      );
    }

    case "downloadLinks": {
      const items: any[] = (block.items ?? []).filter((i: any) => i.label);
      if (items.length === 0) return null;
      return (
        <section className="w-full bg-[#F5F5F5]">
          <div className="mx-auto w-full max-w-4xl px-6 py-12">
            {block.title && (
              <h2 className="mb-8 text-center text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                {block.title}
              </h2>
            )}
            <ul className="flex flex-col gap-3">
              {items.map((item, j) => {
                const url = getMediaUrl(item.file);
                const ext = (item.file?.filename ?? item.file ?? "").split(".").pop()?.toUpperCase() || "PDF";
                return (
                  <li key={j}>
                    <a
                      href={url || "#"}
                      download={!!url}
                      target={url ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:border-[#08AA86]/40 hover:shadow-md"
                    >
                      {/* Badge extension */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#08AA86]/10 text-[10px] font-extrabold uppercase tracking-wider text-[#08AA86]">
                        {ext}
                      </span>

                      {/* Label */}
                      <span className="flex-1 text-[14px] font-semibold text-gray-700 group-hover:text-[#08AA86] transition-colors leading-snug">
                        {item.label}
                      </span>

                      {/* Icône téléchargement */}
                      <Download className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-[#08AA86]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      );
    }

    case "quickLinks": {
      const items: any[] = (block.items ?? []).filter((i: any) => i.title && i.href);
      return (
        <section className="w-full bg-[#F5F5F5]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="flex flex-wrap items-stretch justify-center gap-6">
              {items.map((item, j) => (
                <ClickableCard
                  key={j}
                  title={item.title}
                  href={item.href}
                  Icon={resolveIcon(item.icon, item.title ?? "")}
                />
              ))}
            </div>
          </div>
        </section>
      );
    }

    case "organogram": {
      if (!block.members?.length) return null;
      return <TeamGrid members={block.members} />;
    }

    case "timeline": {
      const items = (block.items ?? []).map((t: any, j: number) => ({
        id: t.id ?? `t-${j}`,
        year: t.year,
        title: t.title,
      }));
      return (
        <section className="w-full bg-[#F5F5F5]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            {block.title && (
              <h2 className="mb-8 text-lg font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark">
                {block.title}
              </h2>
            )}
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
          title={block.title}
          reports={reports}
        />
      );
    }

    case "newsletterBlock":
      return (
        <NewsletterBlock
          heading={block.heading}
          description={block.description}
          buttonLabel={block.buttonLabel}
          labels={labels}
        />
      );

    case "formationsSection":
      return (
        <FormationsSection
          title={block.title}
          category={block.category}
          showFilters={block.showFilters !== false}
          limit={block.limit ?? 12}
          labels={labels}
        />
      );

    case "textBlock":
      if (!block.content) return null;
      return (
        <section className="w-full bg-white py-8">
          <div className="mx-auto max-w-3xl px-6">
            <RichText content={block.content} />
          </div>
        </section>
      );

    case "accordionBlock":
      return (
        <AccordionBlock
          title={block.title}
          items={block.items ?? []}
        />
      );

    case "contactBlock":
      return (
        <ContactBlock
          phone={block.phone}
          email={block.email}
          address={block.address}
          hours={block.hours}
          mapsEmbedUrl={block.mapsEmbedUrl}
        />
      );

    default:
      return null;
  }
}

export function BlockRenderer({
  blocks,
  labels = DEFAULT_LABELS,
  lang = "fr",
  pageSlug = "",
  searchParams = {},
}: {
  blocks: any[];
  labels?: Labels;
  lang?: string;
  pageSlug?: string;
  searchParams?: { page?: string; category?: string };
}) {
  if (!blocks?.length) return null;
  const ctx: BlockContext = { lang, pageSlug, searchParams };

  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? i;
        const hideOnMobile = block.visibility?.hideOnMobile;
        const hideOnDesktop = block.visibility?.hideOnDesktop;

        let visibilityClass = "";
        if (hideOnMobile && hideOnDesktop) visibilityClass = "hidden";
        else if (hideOnMobile) visibilityClass = "hidden lg:block";
        else if (hideOnDesktop) visibilityClass = "lg:hidden";

        const content = renderBlockContent(block, labels, ctx);
        if (!content) return null;

        if (!visibilityClass) return <React.Fragment key={key}>{content}</React.Fragment>;
        return <div key={key} className={visibilityClass}>{content}</div>;
      })}
    </>
  );
}
