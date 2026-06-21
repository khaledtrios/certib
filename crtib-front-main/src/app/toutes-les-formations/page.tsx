import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFormations, getMediaUrl } from "@/lib/payload";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, MapPin, Clock, Users, Euro } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Formations | CRTI-B",
  description: "Découvrez toutes les formations proposées par le CRTI-B",
  openGraph: {
    title: "Formations | CRTI-B",
    description: "Découvrez toutes les formations proposées par le CRTI-B",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "CRTI-B Formations" }],
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  "marches-publics": "Marchés publics",
  "performance-energetique": "Performance énergétique",
  "construction-durable": "Construction durable",
  "digitalisation-bim": "Digitalisation / BIM",
  autre: "Autre",
};

const CATEGORY_COLORS: Record<string, string> = {
  "marches-publics": "bg-blue-100 text-blue-700",
  "performance-energetique": "bg-green-100 text-green-700",
  "construction-durable": "bg-emerald-100 text-emerald-700",
  "digitalisation-bim": "bg-purple-100 text-purple-700",
  autre: "bg-gray-100 text-gray-600",
};

function formatDate(dateStr?: string | null) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("fr-LU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function sortFormations(list: any[]): any[] {
  const now = Date.now();
  const withDate = list
    .filter((f) => f.startDate)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  const upcoming = withDate.filter((f) => new Date(f.startDate).getTime() >= now);
  const past = withDate.filter((f) => new Date(f.startDate).getTime() < now);
  const noDate = list
    .filter((f) => !f.startDate)
    .sort((a, b) => (a.title ?? "").localeCompare(b.title ?? "", "fr"));
  return [...upcoming, ...noDate, ...past];
}

export default async function FormationsPage() {
  let formations: any[] = [];

  try {
    const result = await getFormations({ limit: 100 });
    formations = sortFormations((result.docs as any[]) ?? []);
  } catch {
    formations = [];
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white py-4">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Breadcrumb items={[{ href: "/toutes-les-formations", title: "Formations" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-white pb-10 pt-12 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="font-sans text-[28px] font-light uppercase tracking-[0.12em] text-[#2F2F2F] md:text-[36px]">
            Formations
          </h1>
          <p className="mt-3 font-sans text-[14px] text-[#6B6B6B]">
            Découvrez toutes les formations proposées par le CRTI-B
          </p>
          {formations.length > 0 && (
            <p className="mt-2 font-sans text-[13px] text-[#08AA86] font-semibold">
              {formations.length} formation{formations.length > 1 ? "s" : ""} disponible
              {formations.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="h-6 w-6 rounded-full bg-[#08AA86]" />
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="flex-1 pt-16 pb-20">
        <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
          {formations.length === 0 ? (
            <div className="py-24 text-center">
              <span className="text-5xl mb-4 block">📚</span>
              <p className="font-sans text-[15px] uppercase tracking-[0.08em] text-[#6B6B6B]">
                Aucune formation disponible pour le moment
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {formations.map((formation: any) => {
                const imageUrl = formation.image ? getMediaUrl(formation.image) : null;
                const catSlug = formation.category
                  ? (typeof formation.category === 'string' ? formation.category : formation.category?.slug)
                  : null;
                const catLabel = formation.category
                  ? (typeof formation.category === 'string' ? CATEGORY_LABELS[formation.category] : formation.category?.name)
                  : null;
                const catColor = catSlug
                  ? CATEGORY_COLORS[catSlug] ?? "bg-gray-100 text-gray-600"
                  : "";

                return (
                  <Link
                    key={formation.id}
                    href={`/formations/${formation.slug || formation.id}`}
                    className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    {imageUrl ? (
                      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={imageUrl}
                          alt={formation.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-[#08AA86]/10 to-[#08AA86]/20 flex items-center justify-center">
                        <span className="text-4xl">🎓</span>
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-5 gap-3">
                      {catLabel && (
                        <span
                          className={`self-start text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${catColor}`}
                        >
                          {catLabel}
                        </span>
                      )}

                      <h3 className="text-[15px] font-bold text-[#2F2F2F] leading-snug">
                        {formation.title}
                      </h3>

                      <div className="flex flex-col gap-1.5 text-[12px] text-gray-500">
                        {formation.startDate && (
                          <span className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
                            {formatDate(formation.startDate)}
                            {formation.endDate &&
                              formation.endDate !== formation.startDate && (
                                <> → {formatDate(formation.endDate)}</>
                              )}
                          </span>
                        )}
                        {formation.duration && (
                          <span className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
                            {formation.duration}
                          </span>
                        )}
                        {formation.location && (
                          <span className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
                            {formation.location}
                          </span>
                        )}
                        {formation.maxParticipants && (
                          <span className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
                            Max {formation.maxParticipants} participants
                          </span>
                        )}
                        {formation.price && (
                          <span className="flex items-center gap-2 font-semibold text-[#2F2F2F]">
                            <Euro className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
                            {formation.price}
                          </span>
                        )}
                      </div>

                      <div className="mt-auto pt-3 border-t border-gray-100">
                        <span className="text-[#08AA86] text-[12px] font-semibold">
                          Voir le détail →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
