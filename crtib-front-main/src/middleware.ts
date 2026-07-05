import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BUILTIN_LANG_CODES = ["fr", "de", "en", "lu", "pt", "es", "it", "nl"];

/**
 * Reads the language prefix from the URL and forwards it as the x-lang header
 * so Server Components (GlobalLayout) can filter nav pages by current language.
 */
export function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";

  let lang: string;
  if (BUILTIN_LANG_CODES.includes(first)) {
    // URL has an explicit lang prefix — always use it
    lang = first;
  } else {
    // No lang prefix (e.g. /actualites, /formations/slug)
    // Fall back to the preferred_lang cookie set by the language switcher,
    // so the nav stays consistent with the user's last chosen language.
    const cookie = request.cookies.get("preferred_lang")?.value ?? "";
    lang = BUILTIN_LANG_CODES.includes(cookie) ? cookie : "fr";
  }

  // Must set on REQUEST headers — Server Components read request headers
  // via headers(). Response headers are NOT visible to Server Components.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lang", lang);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon|icon).*)"],
};
