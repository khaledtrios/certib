import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_ALT =
  "CRTI-B – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment";

/** Image OG/Twitter par défaut, générée (aucun fichier statique à maintenir). */
export function renderDefaultOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #08AA86 0%, #1a365d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, color: "#ffffff", letterSpacing: 2 }}>
          CRTI-B
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {"Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment"}
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
