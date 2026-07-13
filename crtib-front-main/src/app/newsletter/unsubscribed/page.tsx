import Link from "next/link";
import { headers } from "next/headers";
import { getLabels } from "@/lib/labels";

interface Props {
  searchParams: Promise<{ error?: string }>;
}

export default async function NewsletterUnsubscribedPage({
  searchParams,
}: Props) {
  const { error } = await searchParams;
  const isError = Boolean(error);

  const headersList = await headers();
  const lang = headersList.get("x-lang") ?? "fr";
  const labels = await getLabels(lang);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        {isError ? (
          <>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mx-auto">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">{labels.unsub_error_heading}</h1>
            <p className="mb-8 text-gray-600">{labels.unsub_error_body}</p>
          </>
        ) : (
          <>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">{labels.unsub_success_heading}</h1>
            <p className="mb-8 text-gray-600">{labels.unsub_success_body}</p>
          </>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-[#1a365d] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {labels.unsub_back_home}
        </Link>
      </div>
    </main>
  );
}
