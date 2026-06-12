"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, Euro, Mail, ExternalLink } from "lucide-react";

interface Formation {
  id: string;
  title: string;
  slug?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  location?: string;
  price?: string;
  maxParticipants?: number;
  description?: any;
  registrationUrl?: string;
  registrationEmail?: string;
  image?: { url?: string; filename?: string };
}

const CATEGORY_LABELS: Record<string, string> = {
  "all": "Toutes",
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

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("fr-LU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function FormationCard({ formation }: { formation: Formation }) {
  const imageUrl = formation.image?.url
    ? formation.image.url.startsWith("http")
      ? formation.image.url
      : `http://localhost:3000${formation.image.url}`
    : null;

  const categoryLabel = formation.category ? CATEGORY_LABELS[formation.category] : null;
  const categoryColor = formation.category ? CATEGORY_COLORS[formation.category] ?? "bg-gray-100 text-gray-600" : "";

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      {imageUrl ? (
        <div className="relative w-full h-44 bg-gray-100">
          <Image src={imageUrl} alt={formation.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        </div>
      ) : (
        <div className="w-full h-44 bg-gradient-to-br from-[#08AA86]/10 to-[#08AA86]/20 flex items-center justify-center">
          <span className="text-4xl">🎓</span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Catégorie */}
        {categoryLabel && (
          <span className={`self-start text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${categoryColor}`}>
            {categoryLabel}
          </span>
        )}

        {/* Titre */}
        <h3 className="text-[15px] font-bold text-[#2F2F2F] leading-snug">{formation.title}</h3>

        {/* Infos */}
        <div className="flex flex-col gap-1.5 text-[12px] text-gray-500">
          {formation.startDate && (
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#08AA86] flex-shrink-0" />
              {formatDate(formation.startDate)}
              {formation.endDate && formation.endDate !== formation.startDate && (
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

        {/* Boutons inscription */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          {formation.registrationUrl && (
            <a
              href={formation.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#08AA86] text-white text-[12px] font-semibold px-4 py-2 rounded hover:bg-[#068a6c] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              S'inscrire
            </a>
          )}
          {formation.registrationEmail && (
            <a
              href={`mailto:${formation.registrationEmail}`}
              className="flex items-center gap-1.5 border border-[#08AA86] text-[#08AA86] text-[12px] font-semibold px-4 py-2 rounded hover:bg-[#f0fdf9] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Contacter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface FormationsSectionProps {
  title?: string | null;
  category?: string | null;
  showFilters?: boolean;
  limit?: number;
}

export function FormationsSection({ title, category, showFilters = true, limit = 12 }: FormationsSectionProps) {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>(category && category !== "all" ? category : "all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormations = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ limit: String(limit), sort: "startDate" });
        if (activeFilter !== "all") params.set("where[category][equals]", activeFilter);
        params.set("where[_status][equals]", "published");
        const res = await fetch(`/api/cms/formations?${params}`);
        const data = await res.json();
        setFormations(data.docs ?? []);
      } catch {
        setFormations([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFormations();
  }, [activeFilter, limit]);

  const categories = ["all", "marches-publics", "performance-energetique", "construction-durable", "digitalisation-bim", "autre"];

  return (
    <section className="w-full bg-[#F5F5F5] py-12">
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.2em] text-[#2F2F2F]">
            {title}
          </h2>
        )}

        {/* Filtres */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={[
                  "text-[12px] font-semibold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors",
                  activeFilter === cat
                    ? "bg-[#08AA86] border-[#08AA86] text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-[#08AA86] hover:text-[#08AA86]",
                ].join(" ")}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        )}

        {/* Grille */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-[#08AA86] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : formations.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <span className="text-5xl mb-4 block">📚</span>
            <p className="text-sm">Aucune formation disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((f) => (
              <FormationCard key={f.id} formation={f} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
