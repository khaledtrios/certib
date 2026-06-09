type PartnerLogo = {
  id: string;
  name: string;
  logoUrl?: string;
  href?: string;
};

type PartnersSectionProps = {
  partners: PartnerLogo[];
  associations: PartnerLogo[];
  title?: string;
  associationsTitle?: string;
};

function LogoItem({ item }: { item: PartnerLogo }) {
  const content = item.logoUrl ? (
    <img
      src={item.logoUrl}
      alt={item.name}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  ) : (
    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B5B5B]">
      {item.name}
    </span>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className={[
          "flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-md border border-[#E4E4E4] bg-white transition-colors hover:border-[#37C2A2]",
          item.logoUrl ? "overflow-hidden" : "px-4 py-3",
        ].join(" ")}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={[
        "flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-md border border-[#E4E4E4] bg-white",
        item.logoUrl ? "overflow-hidden" : "px-4 py-3",
      ].join(" ")}
    >
      {content}
    </div>
  );
}

export function PartnersSection({
  partners,
  associations,
  title = "Partenaires",
  associationsTitle = "En association",
}: PartnersSectionProps) {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10">
          <div className="grid gap-4">
            <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark">
              {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 pb-2">
              {partners.map((item) => (
                <LogoItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark">
              {associationsTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 pb-2">
              {associations.map((item) => (
                <LogoItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
