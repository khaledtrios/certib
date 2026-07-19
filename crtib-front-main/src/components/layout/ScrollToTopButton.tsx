"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 300;
const BUTTON_MARGIN = 24; // px — matches bottom-6 / right-6

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [footerOverlap, setFooterOverlap] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    const update = () => {
      setVisible((prev) => {
        const next = window.scrollY > SCROLL_THRESHOLD;
        return prev === next ? prev : next;
      });

      if (footer) {
        const rect = footer.getBoundingClientRect();
        const overlap = Math.max(0, Math.round(window.innerHeight - rect.top));
        setFooterOverlap((prev) => (prev === overlap ? prev : overlap));
      }

      tickingRef.current = false;
    };

    const onScrollOrResize = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Retour en haut"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{ bottom: `calc(${BUTTON_MARGIN}px + ${footerOverlap}px)` }}
      className={[
        "fixed right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center",
        "rounded-full border border-[#37C2A2] bg-[#37C2A2] text-white shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:bg-white hover:text-[#37C2A2] hover:shadow-xl",
        "active:scale-90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37C2A2] focus-visible:ring-offset-2",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
