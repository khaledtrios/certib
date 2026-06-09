"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  X,
  FileText,
  Newspaper,
  Film,
  FolderOpen,
  BookOpen,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SearchPage {
  id: string;
  title: string;
  slug: string;
}

interface SearchNews {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
}

interface SearchClause {
  id: string;
  number: string;
  title: string;
  date?: string;
  version?: string;
  pdf?: { url: string; filename: string } | null;
}

interface SearchVideo {
  id: string;
  title: string;
  src: string;
  type?: "youtube" | "internal";
}

interface SearchResults {
  pages: SearchPage[];
  news: SearchNews[];
  clauses: SearchClause[];
  videos: SearchVideo[];
}

const CATEGORY_LABELS: Record<string, string> = {
  actualite: "Actualidade",
  communique: "Comunicado",
  evenement: "Evento",
};

// ─── Result Item Components ───────────────────────────────────────────────────

function ResultGroup({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 px-4 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 bg-gray-50 border-b border-gray-100">
        {icon}
        {label}
      </div>
      <ul>{children}</ul>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Escape closes modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Debounced search
  const search = useCallback((q: string) => {
    if (abortRef.current) abortRef.current.abort();
    if (q.length < 2) {
      setResults(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    abortRef.current = controller;

    fetch(`/api/search?q=${encodeURIComponent(q)}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data: SearchResults) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setLoading(false);
      });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => search(query), 300);
    return () => clearTimeout(t);
  }, [query, search]);

  const total =
    (results?.pages.length ?? 0) +
    (results?.news.length ?? 0) +
    (results?.clauses.length ?? 0) +
    (results?.videos.length ?? 0);

  const hasResults = total > 0;
  const noResults = results !== null && !loading && !hasResults;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
          <Search className="w-5 h-5 text-[#08AA86] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar páginas, notícias, cláusulas, vídeos…"
            className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setResults(null);
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#08AA86] transition-colors ml-1"
            aria-label="Fechar"
          >
            <span className="text-[10px] font-medium tracking-wider border border-gray-200 rounded px-1.5 py-0.5">
              ESC
            </span>
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {loading && (
            <div className="flex justify-center py-8">
              <div className="w-5 h-5 border-2 border-[#08AA86] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && noResults && (
            <div className="py-10 text-center text-sm text-gray-400">
              Nenhum resultado para{" "}
              <span className="font-semibold text-gray-600">
                &ldquo;{query}&rdquo;
              </span>
            </div>
          )}

          {!loading && hasResults && (
            <div className="divide-y divide-gray-100">
              {/* Pages */}
              {results!.pages.length > 0 && (
                <ResultGroup
                  label="Páginas"
                  icon={<FolderOpen className="w-3.5 h-3.5" />}
                >
                  {results!.pages.map((page) => (
                    <li key={page.id}>
                      <Link
                        href={`/${page.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <FileText className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                          {page.title}
                        </span>
                        <span className="ml-auto text-[10px] text-gray-400 font-mono truncate max-w-[120px]">
                          /{page.slug}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ResultGroup>
              )}

              {/* News */}
              {results!.news.length > 0 && (
                <ResultGroup
                  label="Notícias"
                  icon={<Newspaper className="w-3.5 h-3.5" />}
                >
                  {results!.news.map((article) => (
                    <li key={article.id}>
                      <Link
                        href={`/actualites/${article.slug}`}
                        onClick={onClose}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <Newspaper className="w-4 h-4 text-[#08AA86] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 font-medium truncate">
                            {article.title}
                          </p>
                          {article.excerpt && (
                            <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                              {article.excerpt}
                            </p>
                          )}
                        </div>
                        {article.category && (
                          <span className="flex-shrink-0 text-[9px] font-semibold tracking-wider uppercase text-[#08AA86] border border-[#08AA86]/30 rounded px-1.5 py-0.5">
                            {CATEGORY_LABELS[article.category] ??
                              article.category}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ResultGroup>
              )}

              {/* Clauses */}
              {results!.clauses.length > 0 && (
                <ResultGroup
                  label="Clauses et CTG"
                  icon={<BookOpen className="w-3.5 h-3.5" />}
                >
                  {results!.clauses.map((clause) => (
                    <li key={clause.id}>
                      {clause.pdf?.url ? (
                        <a
                          href={`/api/media/${clause.pdf.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <BookOpen className="w-4 h-4 text-[#08AA86] flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-700 font-medium">
                              <span className="font-mono text-[#08AA86] mr-1">
                                {clause.number}
                              </span>
                              {clause.title}
                            </p>
                            {clause.version && (
                              <p className="text-[10px] text-gray-400 mt-0.5">
                                {clause.version}
                              </p>
                            )}
                          </div>
                          <span className="flex-shrink-0 text-[10px] font-semibold text-[#08AA86]">
                            PDF ↗
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-start gap-3 px-4 py-3 border-b border-gray-50 last:border-0">
                          <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-700 font-medium">
                              <span className="font-mono text-gray-500 mr-1">
                                {clause.number}
                              </span>
                              {clause.title}
                            </p>
                            {clause.version && (
                              <p className="text-[10px] text-gray-400 mt-0.5">
                                {clause.version}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ResultGroup>
              )}

              {/* Videos */}
              {results!.videos.length > 0 && (
                <ResultGroup
                  label="Vídeos"
                  icon={<Film className="w-3.5 h-3.5" />}
                >
                  {results!.videos.map((video) => (
                    <li key={video.id}>
                      <a
                        href={video.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <Film className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                          {video.title}
                        </span>
                        <span className="ml-auto text-[10px] font-semibold text-[#08AA86] uppercase tracking-wide">
                          {video.type === "youtube" ? "YouTube ↗" : "Vídeo ↗"}
                        </span>
                      </a>
                    </li>
                  ))}
                </ResultGroup>
              )}
            </div>
          )}

          {/* Hint when query is empty */}
          {!query && (
            <div className="py-8 text-center text-sm text-gray-400">
              Digite para pesquisar páginas, notícias, cláusulas e vídeos.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
