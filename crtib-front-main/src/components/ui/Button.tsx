"use client";

import Link from "next/link";
import { buttonBase, buttonSizes, buttonVariants } from "./buttonStyles";

type ButtonAsLink = {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonProps = {
  children?: React.ReactNode;
  label?: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
} & (ButtonAsLink | ButtonAsButton);

export function Button({
  children,
  label,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const content = children ?? label;
  const classes = `${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
