import Link from "next/link";
import { buttonBase, buttonSizes, buttonVariants } from "./buttonStyles";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel || label}
      className={`${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}