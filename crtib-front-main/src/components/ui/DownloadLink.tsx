"use client";

import type { DownloadLinkProps } from "./DownloadLink.types";

const baseClasses =
  "font-download font-bold text-[#37c2a2] hover:underline underline-offset-2 transition-colors";

function getLabel(props: DownloadLinkProps): string {
  if (props.variant === "custom") {
    return props.title;
  }
  const { name, version, fileSize, extension } = props;
  const versionPart = version ? `, version ${version}` : "";
  return `${name}${versionPart} (${fileSize}, .${extension})`;
}

export function DownloadLink({
  href,
  download,
  target,
  rel,
  className = "",
  ...variantProps
}: DownloadLinkProps) {
  const label = getLabel({ href, ...variantProps } as DownloadLinkProps);
  const classes = `${baseClasses} ${className}`.trim();
  const linkRel = target === "_blank" ? "noopener noreferrer" : rel;

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={linkRel}
      className={classes}
    >
      {label}
    </a>
  );
}
