"use client";

export type TimelineItem = {
  id: string;
  year: string;
  title?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
  highlightLast?: boolean;
};

export function Timeline({ items, className = "", highlightLast = true }: TimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={className}>
      {/* ── Desktop : horizontal alternating ── */}
      <div className="hidden md:block">
        <HorizontalTimeline items={items} highlightLast={highlightLast} />
      </div>

      {/* ── Mobile : vertical ── */}
      <div className="md:hidden">
        <VerticalTimeline items={items} highlightLast={highlightLast} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Horizontal — desktop
   Items alternate: even → label above the line, odd → below.
───────────────────────────────────────────────────────────── */
function HorizontalTimeline({
  items,
  highlightLast,
}: {
  items: TimelineItem[];
  highlightLast?: boolean;
}) {
  const LABEL_H = "h-[96px]"; // fixed label area height — keeps dots on same axis

  return (
    <div className="relative w-full">
      {/* Labels ABOVE the line (even indices) */}
      <div className="flex">
        {items.map((item, i) => (
          <div key={`top-${item.id}`} className="flex flex-1 flex-col items-center">
            {i % 2 === 0 ? (
              <div className={`flex ${LABEL_H} flex-col items-center justify-end pb-3`}>
                <span className="text-2xl font-extrabold leading-none text-[#08AA86]">
                  {item.year}
                </span>
                {item.title && (
                  <span className="mt-1.5 text-center text-[12.5px] leading-snug text-gray-500 max-w-[130px]">
                    {item.title}
                  </span>
                )}
              </div>
            ) : (
              <div className={LABEL_H} />
            )}
          </div>
        ))}
      </div>

      {/* Dots + horizontal line */}
      <div className="relative flex items-center">
        {/* Line behind dots */}
        <div className="absolute inset-y-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[#08AA86]/25" />

        {items.map((item, i) => {
          const isLast = highlightLast && i === items.length - 1;
          return (
            <div key={`dot-${item.id}`} className="relative z-10 flex flex-1 justify-center">
              {isLast ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#08AA86] ring-[5px] ring-[#08AA86]/20" />
              ) : (
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#08AA86] bg-white" />
              )}
            </div>
          );
        })}
      </div>

      {/* Labels BELOW the line (odd indices) */}
      <div className="flex">
        {items.map((item, i) => (
          <div key={`bot-${item.id}`} className="flex flex-1 flex-col items-center">
            {i % 2 !== 0 ? (
              <div className={`flex ${LABEL_H} flex-col items-center justify-start pt-3`}>
                <span className="text-2xl font-extrabold leading-none text-[#08AA86]">
                  {item.year}
                </span>
                {item.title && (
                  <span className="mt-1.5 text-center text-[12.5px] leading-snug text-gray-500 max-w-[130px]">
                    {item.title}
                  </span>
                )}
              </div>
            ) : (
              <div className={LABEL_H} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Vertical — mobile
───────────────────────────────────────────────────────────── */
function VerticalTimeline({
  items,
  highlightLast,
}: {
  items: TimelineItem[];
  highlightLast?: boolean;
}) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-[#08AA86]/25" />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => {
          const isLast = highlightLast && i === items.length - 1;
          return (
            <div key={item.id} className="relative flex items-start gap-4">
              {/* Dot */}
              <div className="absolute -left-8 top-1">
                {isLast ? (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#08AA86] ring-[5px] ring-[#08AA86]/20" />
                ) : (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#08AA86] bg-white" />
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-2xl font-extrabold leading-none text-[#08AA86]">
                  {item.year}
                </p>
                {item.title && (
                  <p className="mt-1.5 text-[13px] leading-snug text-gray-500">
                    {item.title}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
