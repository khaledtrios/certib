"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";

type PdfViewerModalProps = {
  title: string;
  pdfUrl: string;
  triggerLabel?: string;
  className?: string;
};

export function PdfViewerModal({
  title,
  pdfUrl,
  triggerLabel = "Voir le PDF",
  className = "",
}: PdfViewerModalProps) {
  const [open, setOpen] = useState(false);
  const headingId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      <Button 
        label={triggerLabel}
        onClick={() => setOpen(true)}
        size="sm"
        className="bg-crtib-green-blue border-crtib-green-blue text-white hover:bg-white hover:text-crtib-green-blue hover:border-[#E6E6E6] focus-visible:ring-crtib-green-blue"
      />

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          onClick={() => setOpen(false)}
        >
          <div
            className={[
              "relative w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl",
              "border border-black/10",
              className,
            ].join(" ")}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 bg-crtib-gray-light px-5 py-4">
              <div className="min-w-0">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-crtib-green-blue">
                  Actualités
                </p>
                <h2
                  id={headingId}
                  className="truncate text-[18px] font-semibold text-crtib-gray-dark"
                >
                  {title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <ButtonLink
                  href={pdfUrl}
                  label="Ouvrir"
                  size="sm"
                  className="h-10 px-5 text-[12px]"
                  ariaLabel={`Ouvrir le PDF: ${title}`}
                />

                <Button
                  label="Fermer"
                  onClick={() => setOpen(false)}
                  size="sm"
                  className="bg-crtib-gray-back border-crtib-gray-back text-white hover:bg-crtib-gray-back/90 focus-visible:ring-crtib-gray-back"
                />
              </div>
            </div>

            <div className="h-[70vh] w-full bg-white">
              <iframe src={pdfUrl} title={title} className="h-full w-full" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}