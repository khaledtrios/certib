import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ClickableCardProps = {
  title: string;
  href: string;
  Icon?: LucideIcon;
  className?: string;
};

export function ClickableCard({
  title,
  href,
  Icon,
  className = "",
}: ClickableCardProps) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={[
        "group flex min-h-[160px] w-[170px] min-w-[150px] flex-col items-center justify-center",
        "border border-[#E4E4E4] bg-white shadow-sm transition-all duration-200 px-5 py-6",
        "hover:border-[#08AA86] hover:shadow-lg hover:-translate-y-1",
        className,
      ].join(" ")}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Icône dans un cercle coloré */}
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0fdf9] border border-[#08AA86]/20 transition-all duration-200 group-hover:bg-[#08AA86] group-hover:border-[#08AA86]"
        >
          {Icon && (
            <Icon
              className="w-7 h-7 text-[#08AA86] transition-colors duration-200 group-hover:text-white"
              strokeWidth={1.5}
            />
          )}
        </div>

        {/* Titre */}
        <div className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2F2F2F] leading-snug transition-colors duration-200 group-hover:text-[#08AA86]">
          {title}
        </div>

        {/* Trait décoratif */}
        <span className="h-[2px] w-8 bg-[#E86E7A] transition-all duration-200 group-hover:w-12" />
      </div>
    </Link>
  );
}
