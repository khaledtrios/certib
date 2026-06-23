import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const cmsUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "http://localhost:3000";
const cmsHostname = new URL(cmsUrl).hostname;
const cmsProtocol = new URL(cmsUrl).protocol.replace(":", "") as
  | "http"
  | "https";
const cmsPort = new URL(cmsUrl).port || undefined;

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "images.unsplash.com",
  },
  {
    protocol: cmsProtocol,
    hostname: cmsHostname,
    ...(cmsPort ? { port: cmsPort } : {}),
    pathname: "/api/media/**",
  },
];

if (cmsHostname !== "localhost") {
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
    pathname: "/api/media/**",
  });
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns,
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Disable client-side router cache for all pages
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // Send no-cache headers on every response so browsers and proxies never cache pages
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
