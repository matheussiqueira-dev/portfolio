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
      {
        source: "/hire",
        destination: "/contrate",
        permanent: true,
      },
      {
        source: "/en/academico",
        destination: "/en/academic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
