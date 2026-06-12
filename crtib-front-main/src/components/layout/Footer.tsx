import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#2F3E46] text-white">
      {/* Corps du footer */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <Image src="/logo.svg" alt="CRTI-B" width={160} height={38} className="h-10 w-auto brightness-0 invert" />
            <p className="text-[12px] text-white/60 leading-relaxed">
              Centre de Ressources des Technologies<br />et de l'Innovation pour le Bâtiment
            </p>
          </div>

          {/* Coordonnées */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Contact</h3>
            <a href="https://maps.google.com/?q=2+Circuit+de+la+Foire+Internationale+L-1347+Luxembourg"
              target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-[#08AA86] flex-shrink-0 mt-0.5" />
              <span>2, Circuit de la Foire Internationale<br />L-1347 Luxembourg</span>
            </a>
            <a href="tel:+35224527311" className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
              +352 24 52 73 11
            </a>
            <a href="mailto:contact@crtib.lu" className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-[#08AA86] flex-shrink-0" />
              contact@crtib.lu
            </a>
          </div>

          {/* Liens utiles */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Liens utiles</h3>
            {[
              { href: "/contact", label: "Contact" },
              { href: "/toutes-les-formations", label: "Formations" },
              { href: "/mentions-legales", label: "Mentions légales" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[13px] text-white/80 hover:text-white hover:underline transition-colors w-fit">
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Barre basse */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[12px] text-white/40">© {new Date().getFullYear()} CRTI-B – Tous droits réservés</span>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
