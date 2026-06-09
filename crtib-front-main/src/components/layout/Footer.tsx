import Link from "next/link";

type FooterLink = {
  id: string;
  label: string;
  href: string;
};

type FooterProps = {
  links: FooterLink[];
  secondaryLinks?: FooterLink[];
  copyright?: string;
  activeHref?: string;
};

export function Footer({
  links,
  secondaryLinks = [],
  copyright = "© 2016 CRTI-B",
  activeHref,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#2F3E46] text-white">
      <div className="mx-auto w-full max-w-none px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[17px] font-normal">
          <nav className="flex flex-wrap items-center gap-0">
            {links.map((link) => (
              <div key={link.id} className="flex items-center">
                <Link
                  href={link.href}
                  className={`px-3 text-white/90 hover:text-white hover:underline ${
                    activeHref === link.href ? "text-[#A8B6C0]" : ""
                  }`}
                >
                  {link.label}
                </Link>
                <span className="h-4 w-px bg-white/35" />
              </div>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-0 text-white/90">
            {secondaryLinks.map((link, index) => (
              <div key={link.id} className="flex items-center">
                <Link
                  href={link.href}
                  className={`px-3 hover:text-white hover:underline ${
                    activeHref === link.href ? "text-[#A8B6C0]" : ""
                  }`}
                >
                  {link.label}
                </Link>
                {index < secondaryLinks.length - 1 ? (
                  <span className="h-4 w-px bg-white/35" />
                ) : null}
              </div>
            ))}
            <span className="px-3 text-white/70">{copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
