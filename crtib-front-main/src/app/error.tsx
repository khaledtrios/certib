"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-600">
          Erreur
        </p>
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Une erreur est survenue
        </h1>
        <p className="mb-8 text-gray-600">
          {"Veuillez réessayer ou revenir à l'accueil."}
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-md border border-[#1a365d] px-6 py-3 text-sm font-semibold text-[#1a365d] transition-opacity hover:opacity-80"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#1a365d] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {"Retour à l'accueil"}
          </Link>
        </div>
      </div>
    </main>
  );
}
