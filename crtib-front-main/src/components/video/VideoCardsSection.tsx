type VideoItem = {
  id: string;
  title: string;
  src: string;
  type: "youtube" | "internal";
};

type VideoCardsSectionProps = {
  title?: string;
  videos: VideoItem[];
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

function VideoCard({ item }: { item: VideoItem }) {
  return (
    <div className="w-[200px]">
      <div className="overflow-hidden rounded-md border border-[#E4E4E4] bg-white shadow-sm">
        <div className="aspect-video bg-black">
          {item.type === "youtube" ? (
            <iframe
              src={getYoutubeEmbedUrl(item.src)}
              title={item.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={item.src}
              controls
              className="h-full w-full"
              preload="metadata"
            />
          )}
        </div>
        <div className="px-3 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-crtib-gray-dark">
          {item.title}
        </div>
      </div>
      <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#37C2A2]" />
    </div>
  );
}

export function VideoCardsSection({
  title = "Vidéos",
  videos,
}: VideoCardsSectionProps) {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark">
          {title}
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {videos.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
