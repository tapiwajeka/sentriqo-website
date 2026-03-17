import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // emit static HTML/CSS/JS to the `out/` directory
  trailingSlash: true,    // /about → /about/index.html — avoids 404s on most static hosts
  images: {
    unoptimized: true,    // next/image optimisation requires a server; disable for static export
  },
};

export default nextConfig;
