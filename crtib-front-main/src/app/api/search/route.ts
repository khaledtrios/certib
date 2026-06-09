import { type NextRequest, NextResponse } from "next/server";
import qs from "qs";

const CMS_API_URL =
  process.env.PAYLOAD_API_URL ||
  `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api`;

async function queryCMS(
  collection: string,
  where: Record<string, unknown>,
  limit: number,
  depth = 0,
): Promise<unknown[]> {
  const query = qs.stringify(
    { where, limit, depth },
    { encodeValuesOnly: true },
  );
  const url = `${CMS_API_URL}/${collection}?${query}`;

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { docs?: unknown[] };
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({
      pages: [],
      news: [],
      clauses: [],
      videos: [],
    });
  }

  const [pages, news, clauses, videos] = await Promise.all([
    // Pages: busca por título
    queryCMS("pages", { title: { contains: q } }, 5, 0),

    // News: busca por título OU excerpt (publicadas)
    queryCMS(
      "news",
      {
        and: [
          { _status: { equals: "published" } },
          {
            or: [{ title: { contains: q } }, { excerpt: { contains: q } }],
          },
        ],
      },
      5,
      0,
    ),

    // Clauses: busca por número (ex: "CTG 013") OU título, depth=1 para resolver PDFs
    queryCMS(
      "clauses",
      { or: [{ number: { contains: q } }, { title: { contains: q } }] },
      5,
      1,
    ),

    // Videos: busca por título
    queryCMS("videos", { title: { contains: q } }, 4, 0),
  ]);

  return NextResponse.json({ pages, news, clauses, videos });
}
