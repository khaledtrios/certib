import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/payload";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import type { Page } from "@/types/payload";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = (await getPageBySlug("downloads")) as Page | null;
    if (!page) return { title: "Téléchargements" };
    return {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || undefined,
    };
  } catch {
    return { title: "Téléchargements" };
  }
}

export default async function DownloadsPage() {
  let page: Page | null = null;
  try {
    page = (await getPageBySlug("downloads")) as Page | null;
  } catch (error) {
    console.error("Error fetching downloads page:", error);
    notFound();
  }
  if (!page) notFound();
  return <PageLayout page={page} />;
}
