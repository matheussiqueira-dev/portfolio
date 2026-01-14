export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Dashboard de Dados Públicos",
    description:
      "Aplicação web para visualização de dados públicos com filtros, paginação e consumo de API REST.",
    stack: ["Next.js", "TypeScript", "Tailwind", "API REST"],
    github: "https://github.com/seu-usuario/dashboard-dados",
    demo: "https://demo-url.vercel.app",
  },
  {
    title: "Sistema CRUD com Autenticação",
    description:
      "Sistema completo com autenticação, controle de acesso e operações CRUD.",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/seu-usuario/sistema-crud",
  },
];
