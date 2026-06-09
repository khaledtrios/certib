import { NewsCard, NewsItem } from "@/components/news/NewsCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

type NewsSectionProps = {
  title?: string;
  items: NewsItem[];
  maxItems?: number;
  variant?: "default" | "block";
  ctaHref?: string;
};

export function NewsSection({
  title = "AUTRES ACTUALITÉS",
  items,
  maxItems = 2,
  variant = "default",
  ctaHref = "/actualites",
}: NewsSectionProps) {
  const displayCount = Math.max(2, Math.min(maxItems, 6));
  const visibleItems = items
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, displayCount);

  const paddedItems = [
    ...visibleItems,
    ...Array.from({ length: displayCount - visibleItems.length }, () => null),
  ];

  const isBlock = variant === "block";

  return (
    <section className="w-full">
      <div className={isBlock ? "bg-crtib-green-blue text-white" : ""}>
        <div className="mx-auto w-full max-w-[1320px] px-8 pt-8 pb-20">
          <div className="flex items-start justify-between gap-6">
            <h2
              className={[
                "font-sans text-[18px] font-medium uppercase tracking-[0.22em]",
                isBlock ? "text-white" : "text-crtib-gray-dark",
              ].join(" ")}
            >
              {title}
            </h2>

            <div className="pt-0.5">
              <ButtonLink
                href={ctaHref}
                label="LIRE TOUTE L’ACTUALITÉ ›"
                variant={isBlock ? "ghost" : "primary"}
                size="sm"
                className={
                  isBlock
                    ? "border-0 px-0 h-auto text-[12px] tracking-[0.18em] font-medium hover:bg-transparent"
                    : ""
                }
              />
            </div>
          </div>

          <div
            className={["mt-8 grid gap-16", "grid-cols-1 lg:grid-cols-2"].join(
              " ",
            )}
          >
            {paddedItems.map((item, index) => (
              <NewsCard
                key={item?.id || `placeholder-${index}`}
                item={item || undefined}
                variant={isBlock ? "block" : "default"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
