"use client";

export type TimelineItem = {
  id: string;
  year: string;
  title?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
  /** Se true, destaca o último ponto com um círculo no fim da linha. */
  highlightLast?: boolean;
};

export function Timeline({
  items,
  className = "",
  highlightLast = true,
}: TimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative mx-auto max-w-5xl">
        {/* Linha base da timeline */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-crtib-green-blue"
          aria-hidden
        />

        {/* Marcadores */}
        <div className="relative flex items-center justify-between gap-4">
          {items.map((item, index) => {
            const isLast = highlightLast && index === items.length - 1;

            return (
              <div
                key={item.id}
                className="flex min-w-0 flex-1 flex-col items-center text-center"
              >
                {/* Traço vertical ou, no último, apenas a bolinha final */}
                <div className="relative flex h-8 items-center justify-center">
                  {!isLast && (
                    <div
                      className="h-4 w-px bg-crtib-green-blue"
                      aria-hidden
                    />
                  )}

                  {isLast && (
                    <div
                      className="h-4 w-4 rounded-full border border-crtib-green-blue bg-crtib-white"
                      aria-hidden
                    />
                  )}
                </div>

                {/* Ano e título */}
                <span className="mt-1 text-sm font-semibold text-crtib-gray-dark">
                  {item.year}
                </span>
                {item.title ? (
                  <span className="mt-0.5 line-clamp-2 text-xs text-crtib-gray-dark/80">
                    {item.title}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

