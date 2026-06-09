const CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

/** Garante que URLs de mídia do Payload apontem para o CMS e não para o frontend. */
function mediaUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${CMS_URL}${url}`;
}

/**
 * Serializa o conteúdo do Lexical Editor para HTML
 * Esta é uma implementação básica que pode ser expandida conforme necessário
 */
export function serializeLexical(content: any): string {
  if (!content) return "";

  // Se já vier como string HTML, retorna diretamente
  if (typeof content === "string") {
    return content;
  }

  // Se for um objeto Lexical, processa os nós
  if (content.root && content.root.children) {
    return serializeNodes(content.root.children);
  }

  return "";
}

function toAbsoluteMediaUrl(url?: string): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  const payloadUrl =
    process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
  return `${payloadUrl}${url}`;
}

function getUploadUrl(value: unknown): string {
  if (!value || typeof value !== "object") return "";

  const maybeDirect = value as { url?: string; value?: { url?: string } };
  if (maybeDirect.url) return maybeDirect.url;
  if (maybeDirect.value?.url) return maybeDirect.value.url;

  return "";
}

function serializeNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return "";

  return nodes.map((node) => serializeNode(node)).join("");
}

function serializeNode(node: any): string {
  if (!node) return "";

  const { type, children, format, text, tag, value, url, rel, target } = node;

  // Nó de texto
  if (type === "text") {
    let html = text || "";

    // Aplica formatação
    if (format) {
      if (format & 1) html = `<strong>${html}</strong>`; // bold
      if (format & 2) html = `<em>${html}</em>`; // italic
      if (format & 4) html = `<s>${html}</s>`; // strikethrough
      if (format & 8) html = `<u>${html}</u>`; // underline
      if (format & 16) html = `<code>${html}</code>`; // code
      if (format & 32) html = `<sub>${html}</sub>`; // subscript
      if (format & 64) html = `<sup>${html}</sup>`; // superscript
    }

    return html;
  }

  // Nó de parágrafo
  if (type === "paragraph") {
    return `<p>${serializeNodes(children)}</p>`;
  }

  // Nó de heading
  if (type === "heading") {
    const headingTag = tag || "h2";
    return `<${headingTag}>${serializeNodes(children)}</${headingTag}>`;
  }

  // Nó de lista
  if (type === "list") {
    const listTag = tag === "ol" ? "ol" : "ul";
    return `<${listTag}>${serializeNodes(children)}</${listTag}>`;
  }

  // Nó de item de lista
  if (type === "listitem") {
    return `<li>${serializeNodes(children)}</li>`;
  }

  // Nó de link
  if (type === "link") {
    const relAttr = rel ? ` rel="${rel}"` : "";
    const targetAttr = target ? ` target="${target}"` : "";
    return `<a href="${url}"${relAttr}${targetAttr}>${serializeNodes(children)}</a>`;
  }

  // Nó de quote
  if (type === "quote") {
    return `<blockquote>${serializeNodes(children)}</blockquote>`;
  }

  // Nó de código
  if (type === "code") {
    return `<pre><code>${value || ""}</code></pre>`;
  }

  // Nó de linha horizontal
  if (type === "horizontalrule") {
    return "<hr />";
  }

  // Nó de quebra de linha
  if (type === "linebreak") {
    return "<br />";
  }

  // Upload (imagem, etc)
  if (type === "upload") {
    const { value, fields } = node;
    if (value && value.url) {
      const imageUrl = toAbsoluteMediaUrl(value.url);
      const alt = value.alt || "";
      const caption = fields?.caption || value.caption || "";
      const position = fields?.position || value.position || "center";

      const positionClasses = {
        left: "float-left mr-6 mb-4",
        center: "mx-auto block",
        right: "float-right ml-6 mb-4",
      };

      const posClass =
        positionClasses[position as keyof typeof positionClasses] ||
        positionClasses.center;

      let html = `<img src="${imageUrl}" alt="${alt}" class="${posClass}" />`;

      if (caption) {
        html = `<figure class="${posClass}">
          <img src="${imageUrl}" alt="${alt}" />
          <figcaption class="text-sm text-gray-600 italic mt-2">${caption}</figcaption>
        </figure>`;
      }

      return html;
    }
    return "";
  }

  // Block inline (componentes customizados)
  if (type === "block") {
    const blockType = node.fields?.blockType;

    // Callout block
    if (blockType === "callout") {
      const calloutType = node.fields?.type || "info";
      const content = node.fields?.content
        ? serializeLexical(node.fields.content)
        : "";

      const typeClasses = {
        info: "bg-blue-50 border-blue-500 text-blue-900",
        warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
        success: "bg-green-50 border-green-500 text-green-900",
        error: "bg-red-50 border-red-500 text-red-900",
      };

      const typeIcons = {
        info: "ℹ️",
        warning: "⚠️",
        success: "✅",
        error: "❌",
      };

      const classes =
        typeClasses[calloutType as keyof typeof typeClasses] ||
        typeClasses.info;
      const icon =
        typeIcons[calloutType as keyof typeof typeIcons] || typeIcons.info;

      return `<div class="callout ${classes} border-l-4 p-4 my-6 rounded-r-lg">
        <div class="flex items-start">
          <span class="text-2xl mr-3">${icon}</span>
          <div class="flex-1">${content}</div>
        </div>
      </div>`;
    }

    // Accordion block
    if (blockType === "accordion") {
      const items = node.fields?.items || [];
      const accordionData = items.map((item: any, index: number) => ({
        id: `accordion-item-${index}`,
        title: item.title || "",
        content: item.content ? serializeLexical(item.content) : "",
      }));

      // Renderiza o accordion como um componente especial
      return `<div class="accordion-block" data-accordion='${JSON.stringify(accordionData).replace(/'/g, "&apos;")}'></div>`;
    }

    if (blockType === "videoCards") {
      const videos = (node.fields?.videos || []).map(
        (video: any, index: number) => ({
          id: `video-${index}`,
          title: video.title || "",
          type: video.type || "youtube",
          src: toAbsoluteMediaUrl(video.src || ""),
        }),
      );

      const data = {
        title: node.fields?.title || "",
        videos,
      };

      return `<div class="video-cards-block" data-video-cards='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    if (blockType === "activityReports") {
      const reports = (node.fields?.reports || []).map(
        (report: any, index: number) => ({
          id: `report-${index}`,
          year: report.year || "",
          pdfUrl: toAbsoluteMediaUrl(getUploadUrl(report.pdf)),
        }),
      );

      const data = {
        title: node.fields?.title || "",
        reports,
      };

      return `<div class="activity-reports-block" data-activity-reports='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    if (blockType === "partners") {
      const mapPartnerItem = (item: any, index: number) => ({
        id: `partner-${index}`,
        name: item.name || "",
        logoUrl: toAbsoluteMediaUrl(getUploadUrl(item.logo)) || undefined,
        href: item.href || undefined,
      });

      const data = {
        title: node.fields?.title || "",
        associationsTitle: node.fields?.associationsTitle || "",
        partners: (node.fields?.partners || []).map(mapPartnerItem),
        associations: (node.fields?.associations || []).map(mapPartnerItem),
      };

      return `<div class="partners-block" data-partners='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    if (blockType === "newsSection") {
      const data = {
        title: node.fields?.title || "",
        maxItems: node.fields?.maxItems || 2,
        variant: node.fields?.variant || "default",
        ctaHref: node.fields?.ctaHref || "/actualites",
      };

      return `<div class="news-section-block" data-news-section='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    if (blockType === "calculator") {
      const data = {
        title: node.fields?.title || "",
        options: (node.fields?.options || []).map(
          (option: any) => option.label || "",
        ),
        results: (node.fields?.results || []).map((result: any) => ({
          label: result.label || "",
          value: result.value || "",
        })),
      };

      return `<div class="calculator-block" data-calculator='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // HTML Block
    if (blockType === "htmlBlock") {
      const html = node.fields?.html || "";
      return `<div class="html-block my-6">${html}</div>`;
    }

    // Timeline (Notre Histoire)
    if (blockType === "timeline") {
      const items = (node.fields?.items || []).map((item: any, i: number) => ({
        id: `timeline-item-${i}`,
        year: item.year || "",
        title: item.title || "",
      }));
      const data = { items, highlightLast: node.fields?.highlightLast ?? true };
      return `<div class="timeline-block" data-timeline='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // DynamicGrid (Taux et intérêts / Data Grid simplificado)
    if (blockType === "dynamicGrid") {
      const columns = (node.fields?.columns || []).map((col: any) => ({
        id: col.id,
        label: col.label,
        type: col.type,
        config: {
          precision: col.precision,
          currency: col.currency || undefined,
        },
      }));
      const rows = (node.fields?.rows || []).map((row: any, i: number) => ({
        id: `row-${i}`,
        values: row.values || {},
      }));
      const data = { columns, rows, title: node.fields?.title || "" };
      return `<div class="dynamic-grid-block" data-dynamic-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // ClausesGrid (Clauses et CTG)
    if (blockType === "clausesGrid") {
      const rows = (node.fields?.clauses || []).map((c: any) => ({
        number: c.number || "",
        title: c.title || "",
        date: c.date
          ? new Date(c.date).toLocaleDateString("fr-LU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "",
        version: c.version || "",
        pdfUrl: mediaUrl(c.pdf?.url),
        rtfUrl: mediaUrl(c.rtf?.url),
        docUrl: mediaUrl(c.doc?.url),
      }));
      const data = {
        title: node.fields?.title || "",
        rows,
        redirectLabel: node.fields?.redirectLabel || "",
        redirectHref: node.fields?.redirectHref || "",
      };
      return `<div class="clauses-grid-block" data-clauses-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // DownloadGrid (Téléchargements)
    if (blockType === "downloadGrid") {
      const documents = (node.fields?.documents || []).map(
        (doc: any, i: number) => ({
          id: `doc-${i}`,
          numero: doc.numero || "",
          titulo: doc.titulo || "",
          data: doc.data || "",
          versao: doc.versao || "",
          links: {
            ...(doc.pdf?.url ? { pdf: mediaUrl(doc.pdf.url) } : {}),
            ...(doc.rtf?.url ? { rtf: mediaUrl(doc.rtf.url) } : {}),
            ...(doc.doc?.url ? { doc: mediaUrl(doc.doc.url) } : {}),
            ...(doc.xls?.url ? { xls: mediaUrl(doc.xls.url) } : {}),
            ...(doc.zip?.url ? { zip: mediaUrl(doc.zip.url) } : {}),
          },
        }),
      );
      const data = { documents, pageSize: node.fields?.pageSize || 10 };
      return `<div class="download-grid-block" data-download-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // DownloadLinks (Liens de téléchargement)
    if (blockType === "downloadLinks") {
      const items = (node.fields?.items || []).map((item: any, i: number) => ({
        id: `dl-${i}`,
        label: item.label || "",
        fileUrl: mediaUrl(item.file?.url),
        extension: item.file?.mimeType?.includes("pdf")
          ? "pdf"
          : item.file?.filename?.split(".").pop() || "pdf",
      }));
      const data = { title: node.fields?.title || "", items };
      return `<div class="download-links-block" data-download-links='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    // Organogram (Organigramme)
    if (blockType === "organogram") {
      const mapNode = (n: any, prefix: string): any => ({
        id: `${prefix}-${n.name}`.replace(/\s/g, "-").toLowerCase(),
        name: n.name || "",
        role: n.role || undefined,
        photoUrl: mediaUrl(n.photo?.url),
        children: (n.children || []).map((child: any, i: number) =>
          mapNode(child, `${prefix}-child-${i}`),
        ),
      });
      const data = { root: mapNode(node.fields?.root || {}, "org") };
      return `<div class="organogram-block" data-organogram='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
    }

    return "";
  }

  // Para nós desconhecidos, tenta serializar os filhos
  if (children && Array.isArray(children)) {
    return serializeNodes(children);
  }

  return "";
}
