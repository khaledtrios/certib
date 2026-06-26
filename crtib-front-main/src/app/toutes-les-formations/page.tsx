import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { getFormations } from "@/lib/payload";
import Breadcrumb from "@/components/Breadcrumb";
import { FormationCard } from "@/components/formations/FormationsSection";

export const metadata: Metadata = {
  title: "Formations | CRTI-B",
  description: "Découvrez toutes les formations proposées par le CRTI-B",
  openGraph: {
    title: "Formations | CRTI-B",
    description: "Découvrez toutes les formations proposées par le CRTI-B",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "CRTI-B Formations" }],
  },
};

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
              {formations.map((formation: any) => (
                <FormationCard key={formation.id} formation={formation} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
