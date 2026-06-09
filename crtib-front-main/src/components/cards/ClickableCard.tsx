import Link from "next/link";

type ClickableCardProps = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
};

export function ClickableCard({
  title,
  href,
  icon,
  className = "",
}: ClickableCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group flex h-[150px] w-[180px] flex-col items-center justify-center",
        "border border-[#E4E4E4] bg-white shadow-sm transition-all",
        "hover:border-[#37C2A2] hover:shadow-md",
        className,
      ].join(" ")}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-[#2F2F2F]">{icon}</div>
        <div className="text-center text-[14px] font-semibold uppercase tracking-[0.08em] text-crtib-gray-dark">
          {title}
        </div>
        <span className="h-[2px] w-10 bg-[#E86E7A]" />
      </div>
    </Link>
  );
}
