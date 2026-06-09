import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint para revalidar páginas sob demanda.
 * Pode ser chamado pelo CMS após publicação.
 *
 * Uso:
 * POST /api/revalidate
 * Body: { secret: "YOUR_SECRET", path: "/slug-da-pagina" }
 * ou:   { secret: "YOUR_SECRET", paths: ["/slug1", "/slug2"] }
 * ou:   { secret: "YOUR_SECRET", tag: "nome-da-tag" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path, paths, tag } = body as {
      secret?: string;
      path?: string;
      paths?: string[];
      tag?: string;
    };

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    if (tag) {
      revalidateTag(tag, "default");
      return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    }

    if (paths && Array.isArray(paths)) {
      for (const p of paths) {
        revalidatePath(p);
      }
      return NextResponse.json({ revalidated: true, paths, now: Date.now() });
    }

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }

    return NextResponse.json(
      { message: "Missing path, paths or tag parameter" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 },
    );
  }
}
