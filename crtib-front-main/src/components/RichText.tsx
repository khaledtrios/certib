"use client";

import React from "react";
import Accordion from "./Accordion";
import { CalculatorSection } from "./calculator/CalculatorSection";
import { NewsSectionClient } from "./news/NewsSectionClient";
import { PartnersSection } from "./partners/PartnersSection";
import { ActivityReportsSection } from "./reports/ActivityReportsSection";
import { VideoCardsSection } from "./video/VideoCardsSection";
import { Timeline } from "./timeline/Timeline";
import { DynamicGrid } from "./blocks/DynamicGrid/DynamicGrid";
import { ClausesGrid } from "./blocks/ClausesGrid/ClausesGrid";
import { DataGridDownloads } from "./DataGridDownloads";
import { DownloadLinks } from "./blocks/DownloadLinks/DownloadLinks";
import { OrganogramChart } from "./organogram/OrganogramChart";
import { serializeLexical } from "@/lib/serializeLexical";
import { PhotoHeroCarousel } from "@/components/home/PhotoHeroCarousel";

interface RichTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  className?: string;
}

const CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

function absUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    // Reescreve URLs de mídia do CMS para usar o proxy Next.js (/api/media/...)
    // evitando que o browser tente resolver o domínio interno do CMS.
    if (CMS_URL && url.startsWith(CMS_URL)) {
      return url.slice(CMS_URL.length);
    }
    return url;
  }
  // URL já é relativa — usável diretamente
  return url;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUploadUrl(value: unknown): string {
  if (!value || typeof value !== "object") return "";
  const v = value as { url?: string; value?: { url?: string } };
  if (v.url) return absUrl(v.url);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((v as any).value?.url) return absUrl((v as any).value.url);
  return "";
}

function applyFormat(text: string, format: number): React.ReactNode {
  let node: React.ReactNode = text;
  if (format & 1) node = <strong>{node}</strong>;
  if (format & 2) node = <em>{node}</em>;
  if (format & 4) node = <s>{node}</s>;
  if (format & 8) node = <u>{node}</u>;
  if (format & 16) node = <code>{node}</code>;
  if (format & 32) node = <sub>{node}</sub>;
  if (format & 64) node = <sup>{node}</sup>;
  return node;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderNodes(nodes: any[]): React.ReactNode {
  if (!Array.isArray(nodes)) return null;
  return nodes.map((node, i) => renderNode(node, i));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderNode(node: any, key: number): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case "text": {
      if (!node.text) return null;
      return (
        <React.Fragment key={key}>
          {applyFormat(node.text, node.format || 0)}
        </React.Fragment>
      );
    }

    case "paragraph": {
      const hasBlockChild = Array.isArray(node.children) &&
        node.children.some((c: any) => c?.type === "upload" || c?.type === "block");
      const children = renderNodes(node.children);
      return hasBlockChild
        ? <div key={key} className="paragraph">{children}</div>
        : <p key={key}>{children}</p>;
    }

    case "heading": {
      const Tag = (node.tag || "h2") as React.ElementType;
      return <Tag key={key}>{renderNodes(node.children)}</Tag>;
    }

    case "list": {
      const L = (node.tag === "ol" ? "ol" : "ul") as React.ElementType;
      return <L key={key}>{renderNodes(node.children)}</L>;
    }

    case "listitem":
      return <li key={key}>{renderNodes(node.children)}</li>;

    case "link": {
      const rel = node.rel ?? undefined;
      const target = node.target ?? undefined;
      return (
        <a key={key} href={node.url || ""} rel={rel} target={target}>
          {renderNodes(node.children)}
        </a>
      );
    }

    case "quote":
      return <blockquote key={key}>{renderNodes(node.children)}</blockquote>;

    case "code":
      return (
        <pre key={key}>
          <code>{node.value || ""}</code>
        </pre>
      );

    case "horizontalrule":
      return <hr key={key} />;

    case "linebreak":
      return <br key={key} />;

    case "upload": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const v = node.value as any;
      if (!v?.url) return null;
      const imageUrl = absUrl(v.url);
      const alt = v.alt || "";
      const caption = node.fields?.caption || "";
      const pos = node.fields?.position || "center";
      const href = node.fields?.href || "";
      const posClass =
        (
          {
            left: "float-left mr-6 mb-4",
            center: "mx-auto block",
            right: "float-right ml-6 mb-4",
          } as Record<string, string>
        )[pos] ?? "mx-auto block";

      const imgEl = <img src={imageUrl} alt={alt} />;
      const linked = href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {imgEl}
        </a>
      ) : (
        imgEl
      );

      if (caption) {
        return (
          <figure key={key} className={posClass}>
            {linked}
            <figcaption className="text-sm text-gray-600 italic mt-2">
              {caption}
            </figcaption>
          </figure>
        );
      }
      return (
        <div key={key} className={posClass}>
          {linked}
        </div>
      );
    }

    case "block": {
      const blockType = node.fields?.blockType;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = node.fields ?? ({} as any);
      return renderBlock(blockType, f, key);
    }

    default:
      if (Array.isArray(node.children)) {
        return (
          <React.Fragment key={key}>
            {renderNodes(node.children)}
          </React.Fragment>
        );
      }
      return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(blockType: string, f: any, key: number): React.ReactNode {
  switch (blockType) {
    case "callout": {
      const typeClasses: Record<string, string> = {
        info: "bg-blue-50 border-blue-500 text-blue-900",
        warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
        success: "bg-green-50 border-green-500 text-green-900",
        error: "bg-red-50 border-red-500 text-red-900",
      };
      const typeIcons: Record<string, string> = {
        info: "â„¹ï¸",
        warning: "âš ï¸",
        success: "âœ…",
        error: "âŒ",
      };
      const t = (f.type || "info") as string;
      const html = f.content ? serializeLexical(f.content) : "";
      return (
        <div
          key={key}
          className={`border-l-4 p-4 my-6 rounded-r-lg ${typeClasses[t] ?? typeClasses.info}`}
        >
          <div className="flex items-start">
            <span className="text-2xl mr-3">{typeIcons[t] ?? "â„¹ï¸"}</span>
            <div
              className="flex-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      );
    }

    case "accordion": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const items = (f.items || []).map((item: any, i: number) => ({
        id: `accordion-item-${i}`,
        title: item.title || "",
        content: item.content ? serializeLexical(item.content) : "",
      }));
      return <Accordion key={key} items={items} />;
    }

    case "photoHeroCarousel": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const slides = (f.slides || []).map((slide: any, i: number) => ({
        id: String(slide.id ?? `slide-${i}`),
        imageUrl: getUploadUrl(slide.image),
        alt: slide.alt || slide.title || "Slide",
        eyebrow: slide.eyebrow || undefined,
        title: slide.title || "",
      }));
      return (
        <PhotoHeroCarousel
          key={key}
          slides={slides}
          autoPlayMs={f.autoPlayMs ?? 5000}
        />
      );
    }

    case "videoCards": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const videos = (f.videos || []).map((v: any, i: number) => ({
        id: `video-${i}`,
        title: v.title || "",
        type: v.type || "youtube",
        src: absUrl(v.src || ""),
      }));
      return (
        <VideoCardsSection key={key} title={f.title || ""} videos={videos} />
      );
    }

    case "activityReports": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const reports = (f.reports || []).map((r: any, i: number) => ({
        id: `report-${i}`,
        year: r.year || "",
        pdfUrl: getUploadUrl(r.pdf),
      }));
      return (
        <ActivityReportsSection
          key={key}
          title={f.title || ""}
          reports={reports}
        />
      );
    }

    case "partners": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mapItem = (item: any, i: number) => ({
        id: `partner-${i}`,
        name: item.name || "",
        logoUrl: getUploadUrl(item.logo) || undefined,
        href: item.href || undefined,
      });
      return (
        <PartnersSection
          key={key}
          title={f.title || ""}
          associationsTitle={f.associationsTitle || ""}
          partners={(f.partners || []).map(mapItem)}
          associations={(f.associations || []).map(mapItem)}
        />
      );
    }

    case "newsSection":
      return (
        <NewsSectionClient
          key={key}
          title={f.title || ""}
          maxItems={f.maxItems || 2}
          variant={f.variant || "default"}
          ctaHref={f.ctaHref || "/actualites"}
        />
      );

    case "calculator": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options = (f.options || []).map((o: any) => o.label || "");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = (f.results || []).map((r: any) => ({
        label: r.label || "",
        value: r.value || "",
      }));
      return (
        <CalculatorSection
          key={key}
          title={f.title || ""}
          options={options}
          results={results}
        />
      );
    }

    case "htmlBlock":
      return (
        <div
          key={key}
          className="html-block my-6"
          dangerouslySetInnerHTML={{ __html: f.html || "" }}
        />
      );

    case "timeline": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const items = (f.items || []).map((item: any, i: number) => ({
        id: `timeline-item-${i}`,
        year: item.year || "",
        title: item.title || "",
      }));
      return (
        <Timeline
          key={key}
          items={items}
          highlightLast={f.highlightLast ?? true}
        />
      );
    }

    case "dynamicGrid": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const columns = (f.columns || []).map((col: any) => ({
        id: col.id,
        label: col.label,
        type: col.type,
        config: {
          precision: col.precision,
          currency: col.currency || undefined,
        },
      }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rows = (f.rows || []).map((row: any, i: number) => ({
        id: `row-${i}`,
        values: row.values || {},
      }));
      return (
        <DynamicGrid
          key={key}
          columns={columns}
          rows={rows}
          title={f.title || ""}
        />
      );
    }

    case "clausesGrid": {
      const rows = (f.clauses ?? []).map((c: any) => ({
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
        pdfUrl: c.pdf ? getUploadUrl(c.pdf) : undefined,
        rtfUrl: c.rtf ? getUploadUrl(c.rtf) : undefined,
        docUrl: c.doc ? getUploadUrl(c.doc) : undefined,
      }));
      return (
        <ClausesGrid
          key={key}
          title={f.title || ""}
          rows={rows}
          redirectLabel={f.redirectLabel}
          redirectHref={f.redirectHref}
        />
      );
    }

    case "downloadGrid": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const documents = (f.documents || []).map((doc: any, i: number) => ({
        id: `doc-${i}`,
        numero: doc.numero || "",
        titulo: doc.titulo || "",
        data: doc.data || "",
        versao: doc.versao || "",
        links: {
          ...(doc.pdf?.url ? { pdf: absUrl(doc.pdf.url) } : {}),
          ...(doc.rtf?.url ? { rtf: absUrl(doc.rtf.url) } : {}),
          ...(doc.doc?.url ? { doc: absUrl(doc.doc.url) } : {}),
          ...(doc.xls?.url ? { xls: absUrl(doc.xls.url) } : {}),
          ...(doc.zip?.url ? { zip: absUrl(doc.zip.url) } : {}),
        },
      }));
      return (
        <DataGridDownloads
          key={key}
          documents={documents}
          pageSize={f.pageSize || 10}
        />
      );
    }

    case "downloadLinks": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const items = (f.items || []).map((item: any, i: number) => ({
        id: `dl-${i}`,
        label: item.label || "",
        fileUrl: getUploadUrl(item.file),
        extension: item.file?.mimeType?.includes("pdf")
          ? "pdf"
          : item.file?.filename?.split(".").pop() || "pdf",
      }));
      return <DownloadLinks key={key} title={f.title || ""} items={items} />;
    }

    case "organogram": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mapOrgNode = (n: any, prefix: string): any => ({
        id: `${prefix}-${n.name}`.replace(/\s/g, "-").toLowerCase(),
        name: n.name || "",
        role: n.role || undefined,
        photoUrl: getUploadUrl(n.photo),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children: (n.children || []).map((child: any, i: number) =>
          mapOrgNode(child, `${prefix}-child-${i}`),
        ),
      });
      return (
        <OrganogramChart key={key} root={mapOrgNode(f.root || {}, "org")} />
      );
    }

    default:
      return null;
  }
}

export default function RichText({ content, className = "" }: RichTextProps) {
  if (!content) return null;

  // Legacy: content is already an HTML string
  if (typeof content === "string") {
    return (
      <div
        className={`rich-text ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  if (!content.root?.children) return null;

  return (
    <div className={`rich-text ${className}`}>
      {renderNodes(content.root.children)}
    </div>
  );
}
