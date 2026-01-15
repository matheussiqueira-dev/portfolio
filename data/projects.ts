export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  impact: string[];
  stack: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "dashboard-dados-publicos",
    title: "Dashboard de Dados Públicos",
    summary:
      "Plataforma web para visualizar indicadores públicos com filtros rápidos e navegação intuitiva.",
    description:
      "Aplicação web construída para centralizar dados públicos em um painel responsivo, com filtros avançados, paginação e integração com API REST.",
    impact: [
      "Modelei a estrutura dos dados e organizei a camada de consumo da API.",
      "Criei visualizações claras para apoiar decisões com base em indicadores.",
      "Entreguei interface acessível, responsiva e pronta para uso institucional.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "API REST"],
    github: "https://github.com/seu-usuario/dashboard-dados",
    demo: "https://demo-url.vercel.app",
  },
  {
    slug: "sistema-crud-autenticacao",
    title: "Sistema CRUD com Autenticação",
    summary:
      "Sistema completo com autenticação, perfis de acesso e operações CRUD seguras.",
    description:
      "Projeto full stack com controle de acesso, operações CRUD e persistência em banco de dados, focado em segurança e boas práticas.",
    impact: [
      "Implementei fluxo de autenticação e autorização por perfil.",
      "Estruturei o banco e os endpoints para operações seguras e escaláveis.",
      "Documentei a API para facilitar manutenção e evolução do sistema.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/seu-usuario/sistema-crud",
  },
];
