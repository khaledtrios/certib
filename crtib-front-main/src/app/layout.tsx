import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import { Providers } from "@/lib/providers";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import "./globals.css";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${dosis.variable} antialiased`}>
        <Providers>
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
