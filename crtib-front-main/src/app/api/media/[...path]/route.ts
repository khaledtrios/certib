import { type NextRequest } from "next/server";

// Use a URL interna do CMS (server-side apenas), com fallback para a URL pública.
// PAYLOAD_API_URL é a URL da API (ex: http://cms-internal/api).
// NEXT_PUBLIC_PAYLOAD_URL é a origem pública do CMS (ex: https://crtib-cms.dominio.com).
const CMS_ORIGIN =
  process.env.PAYLOAD_API_URL?.replace(/\/api\/?$/, "") ||
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  "http://localhost:3000";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const mediaPath = path.join("/");
  const url = `${CMS_ORIGIN}/api/media/${mediaPath}`;

  try {
    const response = await fetch(url, {
      // Cache de 1 hora; ativos de mídia raramente mudam
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return new Response("Not found", { status: response.status });
    }

    const contentType =
      response.headers.get("content-type") || "application/octet-stream";
    const body = await response.arrayBuffer();

    return new Response(body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("Failed to fetch media", { status: 502 });
  }
}
