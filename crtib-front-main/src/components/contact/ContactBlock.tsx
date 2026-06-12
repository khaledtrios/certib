"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface ContactBlockProps {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  hours?: string | null;
  mapsEmbedUrl?: string | null;
}

export function ContactBlock({ phone, email, address, hours, mapsEmbedUrl }: ContactBlockProps) {
  const addressLines = (address ?? "").split("\n").filter(Boolean);

  return (
    <section className="w-full bg-[#f5f5f5] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Coordonnées + carte */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="mb-5 text-[13px] font-bold uppercase tracking-[0.2em] text-[#2F2F2F]">
                Nos coordonnées
              </h2>
              <ul className="flex flex-col gap-4">
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {addressLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </li>
                )}
                {phone && (
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#08AA86] flex-shrink-0" />
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm text-gray-700 hover:text-[#08AA86] transition-colors">
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#08AA86] flex-shrink-0" />
                    <a href={`mailto:${email}`} className="text-sm text-gray-700 hover:text-[#08AA86] transition-colors">
                      {email}
                    </a>
                  </li>
                )}
                {hours && (
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#08AA86] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {hours.split("·").map((part, i) => (
                        <span key={i}>
                          {part.trim()}
                          {i === 0 && <br />}
                        </span>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {mapsEmbedUrl && (
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="CRTI-B sur Google Maps"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="mb-5 text-[13px] font-bold uppercase tracking-[0.2em] text-[#2F2F2F]">
              Envoyer un message
            </h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
