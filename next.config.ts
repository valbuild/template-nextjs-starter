import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      // Val serves draft (uncommitted) files from this route with a
      // `?patch_id=...` query string. Omitting `search` allows any query.
      {
        pathname: "/api/val/files/**",
      },
      // Configuring `localPatterns` replaces Next's implicit default, so
      // restore it: any local path, but only without a query string.
      // Keeps committed Val images (/val/**) and other /public images working.
      {
        pathname: "**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "remote.val.build",
      },
    ],
  },
};

export default nextConfig;
