import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Resume redirects
      {
        source: "/resume/en",
        destination: "/en/resume",
        permanent: true,
      },
      {
        source: "/en/resume/en",
        destination: "/en/resume",
        permanent: true,
      },
      {
        source: "/curriculo",
        destination: "/resume",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/resume",
        permanent: true,
      },
      // Projects redirects
      {
        source: "/projects/en",
        destination: "/en/projects",
        permanent: true,
      },
      {
        source: "/projetos",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/projetos/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
      // Hire/Contrate redirects
      {
        source: "/hire",
        destination: "/contrate",
        permanent: true,
      },
      {
        source: "/en/contrate",
        destination: "/en/hire",
        permanent: true,
      },
      // Academic redirects
      {
        source: "/en/academico",
        destination: "/en/academic",
        permanent: true,
      },
      {
        source: "/academic",
        destination: "/academico",
        permanent: true,
      },
      // Old profile/root redirects
      {
        source: "/matheussiqueira-dev",
        destination: "/",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "/resume",
        permanent: true,
      },
      {
        source: "/en/profile",
        destination: "/en/resume",
        permanent: true,
      },
      // Certificates redirects
      {
        source: "/certificados",
        destination: "/certificates",
        permanent: true,
      },
      {
        source: "/en/certificados",
        destination: "/en/certificates",
        permanent: true,
      },
      // Demo redirects
      {
        source: "/demo",
        destination: "/demos",
        permanent: true,
      },
      {
        source: "/en/demo",
        destination: "/en/demos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
