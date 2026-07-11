import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // crowddirector.com (alias domain) and www variants serve this same app,
  // so Google saw duplicate sites and picked crowddirector.com as canonical —
  // hiding crowddirecting.com from search. Redirect every variant to the
  // canonical apex domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "crowddirector.com" }],
        destination: "https://crowddirecting.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.crowddirector.com" }],
        destination: "https://crowddirecting.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.crowddirecting.com" }],
        destination: "https://crowddirecting.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
