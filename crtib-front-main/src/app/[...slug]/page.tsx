import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/payload";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import type { Page } from "@/types/payload";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  try {
    const page = (await getPageBySlug(pageSlug)) as Page | null;

    if (!page) {
      return { title: "Página não encontrada" };
    }

    return {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || undefined,
      openGraph: {
        title: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription || undefined,
        images:
          page.seo?.metaImage && typeof page.seo.metaImage === "object"
            ? [page.seo.metaImage.url || ""]
            : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Erro ao carregar página" };
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  let page: Page | null = null;
  try {
    page = (await getPageBySlug(pageSlug)) as Page | null;
  } catch (error) {
    console.error("Error fetching page:", error);
    notFound();
  }

  if (!page) {
    notFound();
  }

  return <PageLayout page={page} />;
}
