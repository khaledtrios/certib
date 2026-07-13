import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { getFooterSettings } from "@/lib/payload";
import { getLabels } from "@/lib/labels";

const FALLBACK = {
  description: "Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
  phone: "+352 24 52 73 11",
  email: "contact@crtib.lu",
  address: "2, Circuit de la Foire Internationale\nL-1347 Luxembourg",
  addressUrl: "https://maps.google.com/?q=2+Circuit+de+la+Foire+Internationale+L-1347+Luxembourg",
  links: [
    { label: "Contact", href: "/contact" },
    { label: "Formations", href: "/toutes-les-formations" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ],
  copyrightName: "CRTI-B",
};

export async function Footer({ lang }: { lang?: string } = {}) {
  const [data, labels] = await Promise.all([
    getFooterSettings(lang),
    getLabels(lang ?? "fr"),
  ]);

  const description = data?.description || FALLBACK.description;
  const phone = data?.phone || FALLBACK.phone;
  const email = data?.email || FALLBACK.email;
  const address = data?.address || FALLBACK.address;
  const addressUrl = data?.addressUrl || FALLBACK.addressUrl;
  const links: { label: string; href: string }[] =
    data?.links?.length ? data.links : FALLBACK.links;
  const copyrightName = data?.copyrightName || FALLBACK.copyrightName;

  return (
    <footer className="w-full bg-[#2F3E46] text-white">
      {/* Corps du footer */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <Image src="/logo.svg" alt="CRTI-B" width={160} height={38} className="h-10 w-auto brightness-0 invert" />
            <p className="text-[12px] text-white/60 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Coordonnées */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">{labels.footer_contact_heading}</h3>
            {address && (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#08AA86] flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{address}</span>
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
                {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
                {email}
              </a>
            )}
          </div>

          {/* Liens utiles */}
          {links.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">{labels.footer_links_heading}</h3>
              {links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="text-[13px] text-white/80 hover:text-white hover:underline transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Barre basse */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[12px] text-white/40">
            © {new Date().getFullYear()} {copyrightName} – {labels.footer_rights}
          </span>
          <div className="flex items-center gap-4">
            {links.slice(0, 3).map((l, i) => (
              <Link key={i} href={l.href} className="text-[12px] text-white/50 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
