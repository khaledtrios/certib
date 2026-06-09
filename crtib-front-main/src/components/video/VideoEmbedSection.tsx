type VideoEmbedSectionProps = {
  title?: string;
  type: "youtube" | "internal";
  src: string;
};

function getYoutubeEmbedUrl(src: string): string {
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : src;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.includes("/embed/")) return src;
      const videoId = url.searchParams.get("v");
      if (!videoId) return src;
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return src;
  } catch {
    return src;
  }
}

export function VideoEmbedSection({
  title,
  type,
  src,
}: VideoEmbedSectionProps) {
  const embedSrc = type === "youtube" ? getYoutubeEmbedUrl(src) : src;

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {title && (
          <h2 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark">
            {title}
          </h2>
        )}
        <div className="w-full overflow-hidden rounded-lg border border-black/10 bg-black shadow-lg">
          <div className="aspect-video w-full bg-black">
            {type === "internal" ? (
              <video
                src={embedSrc}
                controls
                className="h-full w-full"
                preload="metadata"
              />
            ) : (
              <iframe
                src={embedSrc}
                title={title ?? "Vidéo"}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
