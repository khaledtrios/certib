import { type NextRequest, NextResponse } from "next/server";

// URL interna da API do CMS (server-side apenas)
const CMS_API_URL =
  process.env.PAYLOAD_API_URL ||
  `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api`;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const endpoint = path.join("/");
  const searchParams = request.nextUrl.searchParams.toString();
  const query = searchParams ? `?${searchParams}` : "";
  const url = `${CMS_API_URL}/${endpoint}${query}`;

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream error" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 502 });
  }
}
