"use client";

import Image from "next/image";

export type OrganogramNodeProps = {
  name: string;
  photoUrl?: string | null;
  role?: string;
};

const PHOTO_SIZE = 64;

export function OrganogramNode({ name, photoUrl, role }: OrganogramNodeProps) {
  return (
    <div
      className="flex flex-col items-center rounded-lg border border-crtib-gray-dark/15 bg-crtib-white p-3 shadow-sm transition-shadow hover:shadow-md min-w-[110px] max-w-[140px]"
      data-organogram-node
    >
      <div
        className="relative shrink-0 overflow-hidden rounded-full bg-crtib-gray-light ring-2 ring-crtib-green-blue/30"
        style={{ width: PHOTO_SIZE, height: PHOTO_SIZE }}
      >
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt=""
            fill
            sizes={`${PHOTO_SIZE}px`}
            className="object-cover object-center"
            unoptimized
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-lg font-semibold text-crtib-green-blue/70"
            aria-hidden
          >
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wide text-crtib-gray-dark leading-tight">
        {name}
      </p>
      {role ? (
        <p className="mt-0.5 text-center text-[9px] text-crtib-gray-dark/70 leading-tight">
          {role}
        </p>
      ) : null}
    </div>
  );
}
