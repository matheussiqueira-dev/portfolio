import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume/en",
        destination: "/en/resume",
        permanent: true,
      },
      {
        source: "/projects/en",
        destination: "/en/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;