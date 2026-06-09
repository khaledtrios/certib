"use client";

import { useMemo, useState } from "react";
import { DownloadFormatButton } from "@/components/DownloadFormatButton";
import type { DownloadDocument } from "@/types/downloads";

type DownloadDocumentWithId = DownloadDocument & { id?: string | number };

type SortField = "numero" | "titulo" | "data";
type SortDirection = "asc" | "desc";

type DataGridDownloadsProps = {
  documents: DownloadDocumentWithId[];
  pageSize?: number;
  onDownload?: (
    doc: DownloadDocumentWithId,
    extension: string,
    url: string,
  ) => void;
};

function formatDate(value: string | Date): string {
  if (value instanceof Date) return value.toLocaleDateString("pt-BR");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-BR");
}

export function DataGridDownloads({
  documents,
  pageSize: rawPageSize = 10,
}: DataGridDownloadsProps) {
  const pageSize = Math.max(1, Math.floor(Number(rawPageSize) || 10));
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredAndSorted = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let result = [...documents];

    if (term) {
      result = result.filter((doc) => {
        const numero = String(doc.numero ?? "").toLowerCase();
        const titulo = String(doc.titulo ?? "").toLowerCase();
        return numero.includes(term) || titulo.includes(term);
      });
    }

    if (sortField) {
      result.sort((a, b) => {
        if (sortField === "data") {
          const aTime = new Date(a.data).getTime() || 0;
          const bTime = new Date(b.data).getTime() || 0;
          return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
        }

        const aStr =
          sortField === "numero"
            ? String(a.numero ?? "")
            : String(a.titulo ?? "");
        const bStr =
          sortField === "numero"
            ? String(b.numero ?? "")
            : String(b.titulo ?? "");

        const compare = aStr.localeCompare(bStr, "pt-BR", { numeric: true });
        return sortDirection === "asc" ? compare : -compare;
      });
    }

    return result;
  }, [documents, searchTerm, sortField, sortDirection]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSorted.length / pageSize),
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageItems = filteredAndSorted.slice(startIndex, endIndex);

  const showingFrom = filteredAndSorted.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredAndSorted.length);

  const handleChangePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const renderSortIcon = (field: SortField) => {
    const isActive = sortField === field;

    return (
      <span className="flex flex-col leading-none">
        <span
          className={`text-[10px] ${isActive && sortDirection === "asc" ? "opacity-100" : "opacity-60"}`}
        >
          ▲
        </span>
        <span
          className={`text-[10px] ${isActive && sortDirection === "desc" ? "opacity-100" : "opacity-60"}`}
        >
          ▼
        </span>
      </span>
    );
  };

  return (
    <section className="w-full rounded-md border border-gray-200 bg-crtib-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[140rem] flex-col items-center gap-4 border-b border-gray-200 p-4 sm:flex-row sm:justify-center">
        <span className="text-xs font-semibold text-crtib-gray-dark sm:whitespace-nowrap">
          Rechercher un document
        </span>

        <div className="w-full sm:max-w-xs sm:ml-4">
          <label className="relative block">
            <span className="sr-only">Rechercher un document</span>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-crtib-gray-dark placeholder:text-gray-400 focus:border-crtib-green focus:outline-none focus:ring-1 focus:ring-crtib-green"
              placeholder="N° ou titre du document..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setCurrentPage(1);
              }}
            />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white">
                <button
                  type="button"
                  onClick={() => handleSort("numero")}
                  className="flex w-full items-center justify-between"
                >
                  <span>N°</span>
                  {renderSortIcon("numero")}
                </button>
              </th>
              <th className="bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white">
                <button
                  type="button"
                  onClick={() => handleSort("titulo")}
                  className="flex w-full items-center justify-between"
                >
                  <span>Titre</span>
                  {renderSortIcon("titulo")}
                </button>
              </th>
              <th className="bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white">
                <button
                  type="button"
                  onClick={() => handleSort("data")}
                  className="flex w-full items-center justify-between"
                >
                  <span>Date</span>
                  {renderSortIcon("data")}
                </button>
              </th>
              <th className="bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white">
                Version
              </th>
              <th className="bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white">
                Télécharger
              </th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-sm text-gray-600"
                >
                  Nenhum documento encontrado.
                </td>
              </tr>
            ) : (
              pageItems.map((doc) => {
                const key = doc.id ?? `${doc.numero}-${doc.versao}`;
                const linksEntries = Object.entries(doc.links ?? {}).filter(
                  ([, url]) => Boolean(url),
                );

                return (
                  <tr
                    key={key}
                    className="odd:bg-white even:bg-crtib-gray-light/40"
                  >
                    <td className="px-4 py-3 text-sm text-black">
                      {doc.numero}
                    </td>
                    <td className="px-4 py-3 text-sm text-black">
                      {doc.titulo}
                    </td>
                    <td className="px-4 py-3 text-sm text-black">
                      {formatDate(doc.data)}
                    </td>
                    <td className="px-4 py-3 text-sm text-black">
                      {doc.versao}
                    </td>
                    <td className="px-4 py-3 text-sm text-black">
                      <div className="flex flex-wrap items-center gap-2">
                        {linksEntries.map(([ext, url]) => (
                          <DownloadFormatButton
                            key={ext}
                            extension={ext}
                            url={url ?? ""}
                            ariaLabel={`Télécharger ${ext.toUpperCase()} de ${doc.titulo}`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-crtib-gray-dark">
          {showingFrom}-{showingTo} sur {filteredAndSorted.length} documents
        </span>

        {totalPages > 1 && (
          <div className="flex items-center justify-end gap-3">
            <span className="text-sm text-crtib-gray-dark">
              Página <span className="font-semibold">{safePage}</span> /{" "}
              <span className="font-semibold">{totalPages}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleChangePage(safePage - 1)}
                disabled={safePage <= 1}
                className="rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#303e48] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anterior
              </button>

              <button
                type="button"
                onClick={() => handleChangePage(safePage + 1)}
                disabled={safePage >= totalPages}
                className="rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#303e48] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
