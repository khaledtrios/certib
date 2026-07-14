import { permanentRedirect } from "next/navigation";
import { getSiteLanguages } from "@/lib/payload";

export const dynamic = "force-dynamic";

// Legacy route: /downloads → redirect to /{defaultLang}/downloads
// The page is now served by app/[...slug]/page.tsx at /fr/downloads
export default async function DownloadsPage() {
  let defaultLang = "fr";
  try {
    const langs = await getSiteLanguages();
    defaultLang = langs.docs.find((l) => l.isDefault)?.slug ?? "fr";
  } catch {
    // CMS unavailable — fall back to "fr"
  }
  permanentRedirect(`/${defaultLang}/downloads`);
}
