import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CRTI-B",
    short_name: "CRTI-B",
    description:
      "Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#08AA86",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
