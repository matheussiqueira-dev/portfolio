export type PortfolioProject = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
};

export type PortfolioData = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  projects: PortfolioProject[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export const DATA: PortfolioData = {
  name: "Matheus Siqueira",
  role: "Desenvolvedor Full Stack",
  bio: "Apaixonado por tecnologia e inovação. Com anos de experiência no desenvolvimento de sistemas web e aplicativos móveis, busco sempre as melhores soluções para os meus clientes.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "MySQL",
    "React",
    "Node.js",
    "Git",
    "Docker",
    "Laravel",
    "WordPress",
  ],
  projects: [
    {
      title: "UAI Commerce",
      description:
        "Uma plataforma de e-commerce completa e escalável, com foco em performance e experiência do usuário.",
      tech: ["React", "Node.js", "MySQL", "Docker"],
      link: "https://uaicommerce.com.br",
      featured: true,
    },
    {
      title: "Cozinha com Afeto",
      description:
        "Um site institucional para um restaurante, com foco em design e facilidade de uso.",
      tech: ["PHP", "Laravel", "MySQL"],
      link: "#",
      featured: false,
    },
  ],
  contact: {
    email: "contato@matheussiqueira.dev",
    github: "https://github.com/matheussiqueira",
    linkedin: "https://linkedin.com/in/matheussiqueira",
  },
};
