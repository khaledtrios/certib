const buttonClasses =
  "rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#4a5a66] hover:border-[#4a5a66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303e48] focus-visible:ring-offset-2";

export interface DownloadFormatButtonProps {
  extension: string;
  url: string;
  ariaLabel?: string;
}

export function DownloadFormatButton({
  extension,
  url,
  ariaLabel,
}: DownloadFormatButtonProps) {
  const label = extension.toUpperCase();

  return (
    <a
      href={url}
      download
      className={buttonClasses}
      aria-label={ariaLabel ?? `Télécharger ${label}`}
    >
      {label}
    </a>
  );
}
