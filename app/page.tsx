import type { Metadata } from "next";
import ProfileCard from "@/components/ProfileCard";
import { baseUrl } from "@/core/seo";

const landingTitle =
  "Matheus Siqueira | Infraestrutura, Full Stack e Análise de Dados";
const landingDescription =
  "Landing page pessoal de Matheus Siqueira com foco em engenharia de software, infraestrutura e análise de dados.";

const topNavItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/resume" },
  { label: "Serviços", href: "/contrate" },
  { label: "Projetos", href: "/projetos" },
  { label: "Currículo", href: "/resume" },
  { label: "Acadêmico", href: "/academico" },
  { label: "Certificados", href: "/certificates" },
  { label: "Contrate", href: "/contrate" },
  { label: "Contato", href: "/contrate" },
];

export const metadata: Metadata = {
  title: landingTitle,
  description: landingDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: landingTitle,
    description: landingDescription,
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Landing page de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingTitle,
    description: landingDescription,
    images: ["/og.png"],
  },
};

export default function LandingPage() {
  return (
    <ProfileCard
      subtitle="Infraestrutura | Desenvolvedor Full Stack | Analista de Dados Júnior"
      photoAlt="Foto de Matheus Siqueira"
      resumeHref="/resume"
      resumeLabel="Ver currículo"
      projectsHref="/projetos"
      projectsLabel="Ver projetos"
      whatsappHref="https://wa.me/5581999203683"
      contactLabel="Entrar em contato"
      contactAriaLabel="Entrar em contato pelo WhatsApp"
      trackingContext="landing_root"
      topNavItems={topNavItems}
      navigationAriaLabel="Navegação principal"
      ptHref="/pt-BR"
      enHref="/en"
      activeLocale="pt-BR"
    />
  );
}
