import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getFormationBySlug, getMediaUrl, getSiteLanguages } from "@/lib/payload";
import RichText from "@/components/RichText";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, MapPin, Clock, Users, Euro, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_LABELS: Record<string, string> = {
  "marches-publics": "Marchés publics",
  "performance-energetique": "Performance énergétique",
  "construction-durable": "Construction durable",
  "digitalisation-bim": "Digitalisation / BIM",
  "autre": "Autre",
};

const CATEGORY_COLORS: Record<string, string> = {
  "marches-publics": "bg-blue-100 text-blue-700",
  "performance-energetique": "bg-green-100 text-green-700",
  "construction-durable": "bg-emerald-100 text-emerald-700",
  "digitalisation-bim": "bg-purple-100 text-purple-700",
  "autre": "bg-gray-100 text-gray-600",
};

function formatDate(dateStr?: string | null) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("fr-LU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

async function resolveLang() {
  const headersList = await headers();
  const currentLang = headersList.get("x-lang") ?? "fr";
  let defaultLang = "fr";
  try {
    const langs = await getSiteLanguages();
    defaultLang = langs.docs.find((l) => l.isDefault)?.slug ?? "fr";
  } catch {}
  return { currentLang, defaultLang };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { currentLang, defaultLang } = await resolveLang();
  const formation = await getFormationBySlug(slug, { lang: currentLang, defaultLang }) as any;
  if (!formation) return { title: "Formation introuvable", robots: { index: false, follow: true } };

  const description = `Formation CRTI-B : ${formation.title}${formation.location ? ` — ${formation.location}` : ""}`;
  const canonicalPath = `/formations/${formation.slug ?? formation.id}`;
  const imageUrl = formation.image ? getMediaUrl(formation.image) : undefined;

  return {
    title: formation.title,
    description,
    alternates: { canonical: absoluteUrl(canonicalPath) },
    openGraph: {
      title: formation.title,
      description,
      url: absoluteUrl(canonicalPath),
      type: "website",
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const { currentLang, defaultLang } = await resolveLang();
  const formation = await getFormationBySlug(slug, { lang: currentLang, defaultLang }) as any;

  if (!formation) notFound();

  const imageUrl = formation.image ? getMediaUrl(formation.image) : null;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.title,
    description: `Formation CRTI-B : ${formation.title}${formation.location ? ` — ${formation.location}` : ""}`,
    url: absoluteUrl(`/formations/${formation.slug ?? formation.id}`),
    provider: { "@type": "Organization", name: "CRTI-B", url: SITE_URL },
    ...(formation.startDate ? { startDate: formation.startDate } : {}),
    ...(formation.endDate ? { endDate: formation.endDate } : {}),
    ...(formation.location ? { location: { "@type": "Place", name: formation.location } } : {}),
  };

  const catSlug = formation.category
    ? (typeof formation.category === "string" ? formation.category : formation.category?.slug)
    : null;
  const catLabel = formation.category
    ? (typeof formation.category === "string" ? CATEGORY_LABELS[formation.category] : formation.category?.name)
    : null;
  const catColor = catSlug ? CATEGORY_COLORS[catSlug] ?? "bg-gray-100 text-gray-600" : "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col h-full bg-[#f5f5f5]">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white py-4">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <Breadcrumb
              items={[
                { href: "/toutes-les-formations", title: "Formations" },
                { href: `/formations/${formation.slug}`, title: formation.title },
              ]}
            />
          </div>
        </div>

        {/* Hero image */}
        {imageUrl && (
          <div className="relative w-full h-64 md:h-96 bg-gray-200">
            <Image
              src={imageUrl}
              alt={formation.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Content */}
        <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-10">
          <Link
            href="/toutes-les-formations"
            className="inline-flex items-center gap-2 text-[#08AA86] text-[13px] font-semibold mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Toutes les formations
          </Link>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              {catLabel && (
                <span className={`inline-block text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${catColor}`}>
                  {catLabel}
                </span>
              )}

              <h1 className="text-[26px] md:text-[32px] font-bold text-[#2F2F2F] leading-tight mb-6">
                {formation.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-[#f8fafb] rounded-lg border border-gray-100">
                {formation.startDate && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Date</p>
                      <p className="text-[14px] text-[#2F2F2F] font-medium">
                        {formatDate(formation.startDate)}
                        {formation.endDate && formation.endDate !== formation.startDate && (
                          <><br />→ {formatDate(formation.endDate)}</>
                        )}
                      </p>
                    </div>
                  </div>
                )}
                {formation.duration && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Durée</p>
                      <p className="text-[14px] text-[#2F2F2F] font-medium">{formation.duration}</p>
                    </div>
                  </div>
                )}
                {formation.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Lieu</p>
                      <p className="text-[14px] text-[#2F2F2F] font-medium">{formation.location}</p>
                    </div>
                  </div>
                )}
                {formation.maxParticipants && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Participants</p>
                      <p className="text-[14px] text-[#2F2F2F] font-medium">Max {formation.maxParticipants} participants</p>
                    </div>
                  </div>
                )}
                {formation.price && (
                  <div className="flex items-start gap-3">
                    <Euro className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Prix</p>
                      <p className="text-[14px] text-[#2F2F2F] font-bold">{formation.price}</p>
                    </div>
                  </div>
                )}
              </div>

              {formation.description && (
                <div className="prose prose-sm max-w-none mb-8 text-[#2F2F2F]">
                  <RichText content={formation.description} />
                </div>
              )}

              {(formation.registrationUrl || formation.registrationEmail) && (
                <div className="border-t border-gray-100 pt-6 flex flex-wrap gap-3">
                  <p className="w-full text-[13px] font-semibold text-[#2F2F2F] uppercase tracking-wide mb-1">
                    S'inscrire à cette formation
                  </p>
                  {formation.registrationUrl && (
                    <a
                      href={formation.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#08AA86] text-white text-[13px] font-semibold px-6 py-3 rounded hover:bg-[#068a6c] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Inscription en ligne
                    </a>
                  )}
                  {formation.registrationEmail && (
                    <a
                      href={`mailto:${formation.registrationEmail}?subject=Inscription formation : ${formation.title}`}
                      className="inline-flex items-center gap-2 border border-[#08AA86] text-[#08AA86] text-[13px] font-semibold px-6 py-3 rounded hover:bg-[#f0fdf9] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {formation.registrationEmail}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
