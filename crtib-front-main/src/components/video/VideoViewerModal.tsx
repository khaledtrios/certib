"use client";

type VideoViewerModalProps = {
  title: string;
  videoUrl: string;
  className?: string;
};

export function VideoViewerModal({
  title,
  videoUrl,
  className = "",
}: VideoViewerModalProps) {
  return (
    <div
      className={[
        "w-full overflow-hidden rounded-lg border border-black/10 bg-black shadow-lg",
        className,
      ].join(" ")}
    >
      <div className="bg-crtib-gray-light px-5 py-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-crtib-green-blue">
          Actualités
        </p>
        <h2 className="truncate text-[18px] font-semibold text-crtib-gray-dark">
          {title}
        </h2>
      </div>
      <div className="aspect-video w-full bg-black">
        <iframe
          src={videoUrl}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
