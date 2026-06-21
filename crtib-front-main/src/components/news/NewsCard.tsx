import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  href: string;
  excerpt?: string;
  imageUrl?: string;
  imageAlt?: string;
  rubrique?: { id: number; name: string; slug: string } | string | null;
};

const RUBRIQUE_LABELS: Record<string, string> = {
  "marches-publics": "Marchés publics",
  "performance-energetique": "Performance énergétique",
  "construction-durable": "Construction durable",
  "digitalisation-bim": "Digitalisation / BIM",
  general: "Général",
};

type NewsCardProps = {
  item?: NewsItem;
  variant?: "default" | "block";
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

export function NewsCard({ item, variant = "default" }: NewsCardProps) {
  const isPlaceholder = !item;
  const isBlock = variant === "block";

  const rubriqueLabel = item?.rubrique
    ? typeof item.rubrique === "object"
      ? item.rubrique.name
      : (RUBRIQUE_LABELS[item.rubrique as string] ?? null)
    : null;

  return (
    <article
      className={[
        "flex flex-col gap-6 transition-transform duration-200 hover:-translate-y-0.5",
        "lg:flex-row lg:items-start lg:gap-10",
        isPlaceholder ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden={isPlaceholder}
    >
      {/* ── IMAGE ───────────────────────────────────────────── */}
      <div className="relative shrink-0 w-full h-[220px] lg:w-[260px] lg:h-[260px]">
        {/* Offset accent — léger, construction-industry shadow */}
        <div
          className={`absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-sm ${
            isBlock ? "bg-white/20" : "bg-crtib-green-blue/20"
          }`}
        />
        <Link
          href={item?.href || "#"}
          aria-label={item?.title ? `Lire la suite : ${item.title}` : "Lire la suite"}
          className={`absolute inset-0 overflow-hidden rounded-sm border shadow-lg ${
            isBlock
              ? "border-white/20 bg-white/10"
              : "border-crtib-green-blue/30 bg-crtib-gray-light"
          }`}
        >
          {item?.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.imageAlt || item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 260px"
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority
            />
          )}
        </Link>
      </div>

      {/* ── TEXTE — barre d'accent gauche : joint I-beam ──────── */}
      <div
        className={`min-w-0 font-sans border-l-[3px] pl-4 ${
          isBlock ? "border-white/60" : "border-crtib-green-blue"
        }`}
      >
        {/* Métadonnées : rubrique · date */}
        <div
          className={`flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] ${
            isBlock ? "text-white/65" : "text-crtib-green-blue"
          }`}
        >
          {rubriqueLabel && <span>{rubriqueLabel}</span>}
          {rubriqueLabel && item?.date && (
            <span aria-hidden="true" className="opacity-40">·</span>
          )}
          {item?.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
        </div>

        {/* Titre */}
        <Link
          href={item?.href || "#"}
          className={`block text-[18px] font-bold uppercase leading-[1.2] tracking-[0.03em] hover:underline sm:text-[20px] ${
            isBlock ? "text-white" : "text-crtib-gray-dark"
          }`}
        >
          {item?.title || " "}
        </Link>

        {/* Résumé */}
        {item?.excerpt && (
          <p
            className={`mt-3 text-[14px] leading-[1.7] sm:text-[15px] ${
              isBlock ? "text-white/75" : "text-[#6B6B6B]"
            }`}
          >
            {item.excerpt}
          </p>
        )}

        {/* CTA */}
        {item && (
          <div className="mt-4">
            <ButtonLink
              href={item.href}
              label="LIRE L'ARTICLE"
              size="sm"
              variant={isBlock ? "ghost" : "primary"}
              className={
                isBlock
                  ? "border-white text-white bg-crtib-green-back hover:bg-crtib-green-back/90"
                  : ""
              }
            />
          </div>
        )}
      </div>
    </article>
  );
}
