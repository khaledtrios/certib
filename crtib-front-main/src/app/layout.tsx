import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import { Providers } from "@/lib/providers";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import { HtmlLangSync } from "@/components/layout/HtmlLangSync";
import { getSiteLanguages } from "@/lib/payload";
import "./globals.css";

export const dynamic = "force-dynamic";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "https://crtib.lu"),
  title: {
    default: "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
    template: "%s – CRTI-B",
  },
  description:
    "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment au Luxembourg. Marchés publics, Performance énergétique, Construction durable, Digitalisation BIM.",
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
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
      },
    ],
  },
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
        <Providers>
          {/* Syncs <html lang> on client navigation. SSR default = "fr". */}
          <HtmlLangSync languages={languages} />
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
