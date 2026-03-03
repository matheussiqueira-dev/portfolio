import type { Metadata } from "next";
import { Link } from "@/core/i18n/navigation";
import { resolveLocale, type LocaleParams } from "./_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const isPt = locale === "pt-BR";

  return {
    title: isPt ? "Inicio" : "Home",
    description: isPt
      ? "Pagina inicial com secoes sobre, servicos, projetos e contato."
      : "Home page with about, services, projects and contact sections.",
  };
}

export default async function Home({ params }: Props) {
  const locale = await resolveLocale(params);
  const isPt = locale === "pt-BR";

  const copy = {
    homeTitle: "Matheus Siqueira",
    homeText: isPt
      ? "Infraestrutura, desenvolvimento full stack e analise de dados."
      : "Infrastructure, full stack development and data analysis.",
    aboutTitle: isPt ? "Sobre" : "About",
    aboutText: isPt
      ? "Perfil hibrido com foco em dados, BI e engenharia de software."
      : "Hybrid profile focused on data, BI and software engineering.",
    servicesTitle: isPt ? "Servicos" : "Services",
    servicesText: isPt
      ? "Consultoria em dados, BI, automacoes e arquitetura."
      : "Consulting in data, BI, automation and architecture.",
    projectsTitle: isPt ? "Projetos" : "Projects",
    projectsText: isPt
      ? "Conheca os estudos de caso e entregas recentes."
      : "Check case studies and recent deliveries.",
    contactTitle: isPt ? "Contato" : "Contact",
    contactText: isPt
      ? "Vamos conversar sobre o seu projeto."
      : "Let\'s talk about your project.",
    openProjects: isPt ? "Abrir pagina de projetos" : "Open projects page",
    openHire: isPt ? "Falar sobre um projeto" : "Discuss a project",
    openResume: isPt ? "Ver curriculo" : "View resume",
  };

  return (
    <main className="layout-container page-shell">
      <section id="home" className="page-placeholder">
        <h1>{copy.homeTitle}</h1>
        <p>{copy.homeText}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/resume" className="btn-outline">
            {copy.openResume}
          </Link>
          <Link href="/projects" className="btn-outline">
            {copy.openProjects}
          </Link>
          <Link href="/hire" className="btn-outline">
            {copy.openHire}
          </Link>
        </div>
      </section>

      <section id="about" className="page-placeholder">
        <h2>{copy.aboutTitle}</h2>
        <p>{copy.aboutText}</p>
      </section>

      <section id="services" className="page-placeholder">
        <h2>{copy.servicesTitle}</h2>
        <p>{copy.servicesText}</p>
      </section>

      <section id="projects" className="page-placeholder">
        <h2>{copy.projectsTitle}</h2>
        <p>{copy.projectsText}</p>
      </section>

      <section id="contact" className="page-placeholder">
        <h2>{copy.contactTitle}</h2>
        <p>{copy.contactText}</p>
      </section>
    </main>
  );
}
