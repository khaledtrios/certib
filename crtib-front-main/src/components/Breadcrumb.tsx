import Link from "next/link";

interface BreadcrumbProps {
  slug: string;
  currentTitle: string;
}

export default function Breadcrumb({ slug, currentTitle }: BreadcrumbProps) {
  // Função para transformar slug em título legível
  const slugToTitle = (slug: string): string => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Divide o slug em partes para criar o breadcrumb
  const parts = slug.split("/").filter(Boolean);

  // Cria os itens do breadcrumb
  const breadcrumbItems = parts.map((part, index) => {
    const path = "/" + parts.slice(0, index + 1).join("/");
    const title = slugToTitle(part);
    const isLast = index === parts.length - 1;

    return {
      path,
      title: isLast ? currentTitle : title,
      isLast,
    };
  });

  return (
    <nav className="text-sm text-gray-600">
      <Link href="/" className="hover:text-gray-900">
        Accueil
      </Link>

      {breadcrumbItems.map((item, index) => (
        <span key={item.path}>
          <span className="mx-2">›</span>
          {item.isLast ? (
            <span className="text-gray-900">{item.title}</span>
          ) : (
            <Link href={item.path} className="hover:text-gray-900">
              {item.title}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
