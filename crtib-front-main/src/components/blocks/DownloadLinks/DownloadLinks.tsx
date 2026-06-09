"use client";

import { DownloadLink as TextDownloadLink } from "@/components/ui/DownloadLink";

export interface DownloadLinkItem {
  id: string;
  label: string;
  fileUrl?: string;
  extension?: string;
}

export interface DownloadLinksProps {
  title?: string;
  items: DownloadLinkItem[];
}

export function DownloadLinks({ title, items }: DownloadLinksProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full rounded-lg bg-crtib-gray-light p-6">
      {title && (
        <h2 className="mb-4 text-lg font-light uppercase tracking-tight text-crtib-gray-dark">
          {title}
        </h2>
      )}

      <div className="rounded-md bg-white px-4 py-3 shadow-sm">
        <div className="flex flex-col gap-2">
          {items.map((item) =>
            item.fileUrl ? (
              <TextDownloadLink
                key={item.id}
                variant="custom"
                href={item.fileUrl}
                title={item.label}
                target="_blank"
              />
            ) : (
              <span key={item.id} className="text-sm text-crtib-gray-dark">
                {item.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
