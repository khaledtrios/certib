import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#08AA86]">
          Erreur 404
        </p>
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          {"Cette page n'existe pas"}
        </h1>
        <p className="mb-8 text-gray-600">
          La page que vous recherchez a peut-être été déplacée ou supprimée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-[#1a365d] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {"Retour à l'accueil"}
        </Link>
      </div>
    </main>
  );
}
