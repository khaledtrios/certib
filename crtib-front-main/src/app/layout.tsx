import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import { Providers } from "@/lib/providers";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import { HtmlLangSync } from "@/components/layout/HtmlLangSync";
import { getSiteLanguages } from "@/lib/payload";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import "./globals.css";

export const dynamic = "force-dynamic";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment au Luxembourg. Marchés publics, Performance énergétique, Construction durable, Digitalisation BIM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
    template: "%s – CRTI-B",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    siteName: "CRTI-B",
    locale: "fr_LU",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CRTI-B",
      url: SITE_URL,
      logo: absoluteUrl("/logo.svg"),
      email: "contact@crtib.lu",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "CRTI-B",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let languages: Array<{ slug: string; isDefault: boolean }> = [];
  try {
    const res = await getSiteLanguages();
    languages = res.docs;
  } catch {
    languages = [{ slug: "fr", isDefault: true }];
  }

  return (
    <html lang="fr">
      <body className={`${dosis.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          {/* Syncs <html lang> on client navigation. SSR default = "fr". */}
          <HtmlLangSync languages={languages} />
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
