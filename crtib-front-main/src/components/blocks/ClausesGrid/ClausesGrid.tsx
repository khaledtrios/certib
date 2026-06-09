"use client";

import { DownloadFormatButton } from "@/components/DownloadFormatButton";
import { Button } from "@/components/ui/Button";
import type { ClausesGridProps } from "./ClausesGrid.types";

export function ClausesGrid({
  title,
  rows,
  redirectLabel,
  redirectHref,
}: ClausesGridProps) {
  return (
    <div className="w-full rounded-lg bg-crtib-gray-light p-6">
      {title && (
        <h2 className="mb-4 font-clauses text-2xl font-bold uppercase tracking-tight text-crtib-gray-dark">
          {title}
        </h2>
      )}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse" role="grid">
          <thead>
            <tr className="bg-crtib-gray-light">
              <th
                className="px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark"
                scope="col"
              >
                N°
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark"
                scope="col"
              >
                Titre
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark"
                scope="col"
              >
                Date
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark"
                scope="col"
              >
                Version
              </th>
            </tr>
          </thead>
          <tbody className="bg-crtib-gray-light">
            {rows.map((row, index) => (
              <tr
                key={`${row.number}-${index}`}
                className="group relative border-b border-crtib-gray-dark/15 last:border-b-0 transition-colors duration-150 hover:bg-crtib-gray-dark/10"
              >
                <td className="px-4 py-3 text-center text-sm text-crtib-gray-dark">
                  {row.number}
                </td>
                <td className="px-4 py-3 text-center text-sm text-crtib-gray-dark">
                  {row.title}
                </td>
                <td className="px-4 py-3 text-center text-sm text-crtib-gray-dark">
                  {row.date}
                </td>
                <td className="px-4 py-3 text-center text-sm text-crtib-gray-dark">
                  {row.version ?? "—"}
                </td>
                {(row.pdfUrl || row.rtfUrl || row.docUrl) && (
                  <td
                    className="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 bg-crtib-gray-light/98 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
                    aria-hidden
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-crtib-gray-dark/80">
                      Télécharger
                    </span>
                    {row.pdfUrl && (
                      <DownloadFormatButton
                        extension="pdf"
                        url={row.pdfUrl}
                        ariaLabel={`Télécharger ${row.number} en PDF`}
                      />
                    )}
                    {row.rtfUrl && (
                      <DownloadFormatButton
                        extension="rtf"
                        url={row.rtfUrl}
                        ariaLabel={`Télécharger ${row.number} en RTF`}
                      />
                    )}
                    {row.docUrl && (
                      <DownloadFormatButton
                        extension="doc"
                        url={row.docUrl}
                        ariaLabel={`Télécharger ${row.number} en DOC`}
                      />
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {redirectLabel && redirectHref && (
        <Button href={redirectHref} variant="gray" className="mt-4">
          {redirectLabel}
        </Button>
      )}
    </div>
  );
}
