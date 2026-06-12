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
  const inner = (
    <>
      {item.logoUrl ? (
        /* conteneur à taille fixe — le logo s'y inscrit sans déborder */
        <div className="w-[140px] h-[70px] flex items-center justify-center">
          <img
            src={item.logoUrl}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B5B5B] text-center px-2">
          {item.name}
        </span>
      )}
    </>
  );

  const baseClass =
    "flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-md border border-[#E4E4E4] bg-white overflow-hidden";

  if (item.href) {
    return (
      <a href={item.href} className={`${baseClass} transition-colors hover:border-[#37C2A2]`}>
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
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
