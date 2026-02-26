import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// ============================================================================
// SECURITY HEADERS CONFIGURATION
// Implementa headers HTTP de segurança recomendados pela OWASP
// Compatível com Vercel Edge/Node runtimes
// ============================================================================

/**
 * Content-Security-Policy em modo Report-Only
 * - Não bloqueia recursos, apenas reporta violações
 * - Configuração conservadora para portfólio com analytics
 * 
 * Fontes permitidas:
 * - 'self': recursos do próprio domínio
 * - fonts.googleapis.com / fonts.gstatic.com: Google Fonts (fallback)
 * - *.google-analytics.com / *.googletagmanager.com: Google Analytics
 * - vitals.vercel-insights.com / va.vercel-scripts.com: Vercel Speed Insights
 * - 'unsafe-inline' para styles: necessário para Tailwind e estilos inline do Next.js
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com;
  font-src 'self' data:;
  connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://region1.google-analytics.com https://*.googletagmanager.com https://vitals.vercel-insights.com;
  frame-ancestors 'none';
  form-action 'self';
  base-uri 'self';
  object-src 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

/**
 * Security Headers aplicados a todas as rotas
 * Cada header tem um propósito específico de proteção
 */
const securityHeaders = [
  // ─────────────────────────────────────────────────────────────────────────
  // CSP em Report-Only: monitora violações sem bloquear
  // PRÓXIMO PASSO: migrar para Content-Security-Policy após validar logs
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "Content-Security-Policy-Report-Only",
    value: ContentSecurityPolicy,
  },
  // ─────────────────────────────────────────────────────────────────────────
  // Previne MIME type sniffing (ataques de tipo de conteúdo)
  // Força o browser a respeitar o Content-Type declarado
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // ─────────────────────────────────────────────────────────────────────────
  // Controla informações enviadas no header Referer
  // strict-origin-when-cross-origin: envia origin em cross-origin, URL completa same-origin
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // ─────────────────────────────────────────────────────────────────────────
  // Permissions Policy (antigo Feature-Policy)
  // Desabilita APIs sensíveis não utilizadas pelo portfólio
  // Reduz superfície de ataque e fingerprinting
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // ─────────────────────────────────────────────────────────────────────────
  // Previne clickjacking - bloqueia embedding em iframes
  // DENY é mais restritivo que SAMEORIGIN
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // ─────────────────────────────────────────────────────────────────────────
  // HSTS: força HTTPS por 1 ano
  // Sem includeSubDomains para evitar risco com subdomínios não controlados
  // Vercel já aplica HTTPS, mas este header reforça no browser
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  // ─────────────────────────────────────────────────────────────────────────
  // X-DNS-Prefetch-Control: permite prefetch de DNS para performance
  // Seguro para portfólio público
  // ─────────────────────────────────────────────────────────────────────────
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const withNextIntl = createNextIntlPlugin("./core/i18n/request.ts");

const nextConfig: NextConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // SECURITY HEADERS - Aplicados a todas as rotas via async headers()
  // Compatível com Vercel Edge Runtime e Node.js Runtime
  // ═══════════════════════════════════════════════════════════════════════════
  async headers() {
    return [
      {
        // Aplica a todas as rotas (incluindo assets estáticos)
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // GSC fixes: tracked legacy paths
      {
        source: "/matheussiqueira-dev",
        destination: "/",
        permanent: true,
      },
      // Legacy aliases that don't collide with next-intl localized routes
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
      // Projects legacy path
      {
        source: "/projects/self-drive-car",
        destination: "/projetos/self-drive-car",
        permanent: true,
      },
      // Profile aliases
      {
        source: "/profile",
        destination: "/resume",
        permanent: true,
      },
      // Certificates alias
      {
        source: "/certificados",
        destination: "/certificates",
        permanent: true,
      },
      // Demo alias
      {
        source: "/demo",
        destination: "/demos",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(withNextIntl(nextConfig), {
 // For all available options, see:
 // https://www.npmjs.com/package/@sentry/webpack-plugin#options

 org: "matheus-siqueira-dev",

 project: "sentry-gray-chair",

 // Only print logs for uploading source maps in CI
 silent: !process.env.CI,

 // For all available options, see:
 // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

 // Upload a larger set of source maps for prettier stack traces (increases build time)
 widenClientFileUpload: true,

 // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
 // This can increase your server load as well as your hosting bill.
 // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
 // side errors will fail.
 tunnelRoute: "/monitoring",

 webpack: {
   // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
   // See the following for more information:
   // https://docs.sentry.io/product/crons/
   // https://vercel.com/docs/cron-jobs
   automaticVercelMonitors: true,

   // Tree-shaking options for reducing bundle size
   treeshake: {
     // Automatically tree-shake Sentry logger statements to reduce bundle size
     removeDebugLogging: true,
   },
 },
});
