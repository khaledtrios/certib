import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getNewsBySlug, getMediaUrl } from "@/lib/payload";
import type { NewsArticle } from "@/types/payload";
import type { PayloadMedia } from "@/types/payload";
import RichText from "@/components/RichText";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsSectionLoader } from "@/components/news/NewsSectionLoader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_LABELS: Record<NewsArticle["category"], string> = {
  actualite: "Actualité",
  communique: "Communiqué",
  evenement: "Événement",
};

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = (await getNewsBySlug(slug)) as NewsArticle | null;
    if (!article) return { title: "Actualité introuvable" };

    const image =
      article.featuredImage && typeof article.featuredImage === "object"
        ? (article.featuredImage as PayloadMedia)
        : undefined;

    return {
      title: article.seo?.metaTitle || article.title,
      description: article.seo?.metaDescription || article.excerpt || undefined,
      openGraph: {
        title: article.seo?.metaTitle || article.title,
        description:
          article.seo?.metaDescription || article.excerpt || undefined,
        images: image?.url ? [getMediaUrl(image)] : undefined,
      },
    };
  } catch {
    return { title: "Actualité" };
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let article: NewsArticle | null = null;
  try {
    article = (await getNewsBySlug(slug)) as NewsArticle | null;
  } catch {
    notFound();
  }

  if (!article) notFound();

  const image =
    article.featuredImage && typeof article.featuredImage === "object"
      ? (article.featuredImage as PayloadMedia)
      : undefined;

  const imageUrl = image ? getMediaUrl(image) : undefined;
  const categoryLabel = CATEGORY_LABELS[article.category] ?? article.category;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Breadcrumb
            slug={`actualites/${slug}`}
            currentTitle={article.title}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white relative pb-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-8 md:py-12 text-center">
          <span className="inline-block mb-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-crtib-green-blue">
            {categoryLabel}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-800">
            {article.title}
          </h1>
          <p className="mt-4 font-sans text-[14px] text-[#6B6B6B]">
            {formatDate(article.publishedAt)}
          </p>
        </div>

        {/* Bolinha decorativa */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-teal-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Imagem destacada */}
      {imageUrl && (
        <div className="mx-auto mt-14 w-full max-w-4xl px-4 md:px-8">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src={imageUrl}
              alt={image?.alt || article.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <section className="pt-10 pb-12 md:pb-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {article.excerpt && (
            <p className="mb-8 text-[17px] font-medium leading-relaxed text-crtib-gray-dark">
              {article.excerpt}
            </p>
          )}
          {article.content && (
            <div className="page-content">
              <RichText content={article.content} />
            </div>
          )}
        </div>
      </section>

      {/* Outras notícias */}
      <NewsSectionLoader
        title="AUTRES ACTUALITÉS"
        maxItems={2}
        variant="block"
        ctaHref="/actualites"
        excludeSlug={slug}
      />
    </div>
  );
}
