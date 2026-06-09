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
  title: "CRTIB - Frontend",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${dosis.variable} antialiased`}>
        <Providers>
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
