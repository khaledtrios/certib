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
    month: "2-digit",
    year: "numeric",
  }).format(parsed);
}

export function NewsCard({ item, variant = "default" }: NewsCardProps) {
  const isPlaceholder = !item;
  const isBlock = variant === "block";

  const titleColor = isBlock ? "text-white" : "text-crtib-gray-dark";
  const dotColor = isBlock ? "bg-white" : "bg-crtib-green-blue";
  const dateColor = isBlock ? "text-white" : "text-crtib-green-blue";
  const excerptColor = isBlock ? "text-white" : "text-[#6B6B6B]";
  const buttonVariant = isBlock ? "ghost" : "primary";
  const buttonClass = isBlock
    ? "border-white text-white bg-crtib-green-back hover:bg-crtib-green-back/90"
    : "";

  return (
    <article
      className={[
        "flex flex-col gap-6",
        "lg:flex-row lg:items-start lg:gap-10",
        isPlaceholder ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden={isPlaceholder}
    >
      {/* IMAGEM */}
      <Link
        href={item?.href || "#"}
        aria-label={
          item?.title ? `Lire la suite: ${item.title}` : "Lire la suite"
        }
        className={[
          "group relative w-full overflow-hidden bg-crtib-gray-light",
          "aspect-square",
          "lg:h-[260px] lg:w-[260px] lg:shrink-0",
        ].join(" ")}
      >
        {item?.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.imageAlt || item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 260px"
            className="object-cover"
            priority
          />
        ) : null}

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute inset-0 bg-crtib-green-blue/80 ring-8 ring-white/70" />
          <div className="absolute inset-8 border border-white/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sans text-[16px] font-medium uppercase tracking-[0.08em] text-white">
              LIRE LA SUITE
            </span>
          </div>
        </div>
      </Link>

      {/* TEXTO */}
      <div className="min-w-0 font-sans">
        <div className="flex items-start gap-4">
          <span
            className={`mt-[10px] h-2 w-2 shrink-0 rounded-full ${dotColor}`}
            aria-hidden="true"
          />
          <Link
            href={item?.href || "#"}
            className={`block text-[18px] font-medium uppercase leading-[1.25] tracking-[0.02em] hover:underline sm:text-[20px] ${titleColor}`}
          >
            {item?.title || " "}
          </Link>
        </div>

        <time
          className={`mt-2 block text-[16px] font-medium sm:text-[18px] ${dateColor}`}
        >
          {item ? formatDate(item.date) : " "}
        </time>

        {item?.excerpt ? (
          <p
            className={`mt-3 text-[14px] leading-[1.65] sm:text-[15px] ${excerptColor}`}
          >
            {item.excerpt}
          </p>
        ) : null}

        {item ? (
          <div className="mt-5">
            <ButtonLink
              href={item.href}
              label="LIRE L'ARTICLE"
              size="sm"
              variant={buttonVariant}
              className={buttonClass}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
