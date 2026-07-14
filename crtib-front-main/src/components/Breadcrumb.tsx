import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export interface BreadcrumbItem {
  href: string;
  title: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  homeLabel?: string;
}

export default function Breadcrumb({ items, homeLabel = "Accueil" }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: absoluteUrl("/") },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.title,
        item: absoluteUrl(item.href),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-gray-600" aria-label="Fil d'Ariane">
        <Link href="/" className="hover:text-gray-900">
          {homeLabel}
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={`${item.href}-${index}`}>
              <span className="mx-2">›</span>
              {isLast ? (
                <span className="text-gray-900">{item.title}</span>
              ) : (
                <Link href={item.href} className="hover:text-gray-900">
                  {item.title}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
