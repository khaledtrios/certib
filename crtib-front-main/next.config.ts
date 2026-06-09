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

// Em desenvolvimento, garante que localhost está permitido (caso o CMS seja externo)
if (cmsHostname !== "localhost") {
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
    pathname: "/api/media/**",
  });
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns,
    // Em desenvolvimento, desativa otimização para evitar bloqueio de IPs privados (localhost)
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
