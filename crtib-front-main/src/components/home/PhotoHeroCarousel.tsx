"use client";

import { useEffect, useMemo, useState } from "react";

export type PhotoSlide = {
  id: string;
  imageUrl: string;
  alt: string;
  eyebrow?: string;
  title: string;
  imagePosition?: "center" | "top" | "bottom" | "left" | "right";
};

type PhotoHeroCarouselProps = {
  slides: PhotoSlide[];
  className?: string;
  autoPlayMs?: number;
};

export function PhotoHeroCarousel({
  slides,
  className = "",
  autoPlayMs = 5000,
}: PhotoHeroCarouselProps) {
  const safeSlides = useMemo(
    () => slides.filter((slide) => slide.imageUrl),
    [slides]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, autoPlayMs);

    return () => clearInterval(timer);
  }, [autoPlayMs, safeSlides.length]);

  if (safeSlides.length === 0) return null;

  const activeSlide = safeSlides[activeIndex];

  function getObjectPosition(pos?: PhotoSlide["imagePosition"]): string {
    switch (pos) {
      case "top":
        return "object-top";
      case "bottom":
        return "object-bottom";
      case "left":
        return "object-left";
      case "right":
        return "object-right";
      case "center":
      default:
        return "object-center";
    }
  }

  return (
    <section
      className={[
        "relative h-[300px] w-full overflow-hidden",
        className,
      ].join(" ")}
      aria-label="Galeria de fotos em destaque"
    >
      {safeSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={[
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-hidden={index !== activeIndex}
        >
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className={[
              "absolute inset-0 h-full w-full object-cover",
              getObjectPosition(slide.imagePosition),
            ].join(" ")}
          />
        </div>
      ))}

      {/* conteúdo */}
      <div className="relative z-10 h-full w-full">
        <div className="absolute left-[17.2%] top-[39.5%] -translate-y-1/2 text-left">
          {activeSlide.eyebrow ? (
            <p className="mb-[4px] text-[26px] font-[300] uppercase leading-[1] tracking-[-0.03em] text-white">
              {activeSlide.eyebrow}
            </p>
          ) : null}

          <h1 className="max-w-[980px] text-[46px] font-[300] uppercase leading-[0.98] tracking-[-0.04em] text-white">
            {activeSlide.title}
          </h1>
        </div>
      </div>

      {safeSlides.length > 1 ? (
        <div className="absolute bottom-[22px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-[10px]">
          {safeSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                "h-[14px] w-[14px] rounded-full transition-all duration-200",
                index === activeIndex ? "bg-[#37C2A2]" : "bg-white",
              ].join(" ")}
              aria-label={`Ir para slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
