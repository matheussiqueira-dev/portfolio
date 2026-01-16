import type { Project } from "./projects.types";

export const projectsEn: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    tagline: "Gesture-controlled web interface for touchless navigation.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl: "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    problem: [
      "Touch-restricted environments required hands-free control.",
      "Non-technical users needed a simple interaction model.",
      "Low latency was required for live dashboards.",
    ],
    solution: [
      "Hand tracking pipeline with MediaPipe and OpenCV.",
      "FastAPI service translating gestures into UI events.",
      "React frontend with visual feedback and action mapping.",
    ],
    features: [
      "Configurable gesture-to-action map.",
      "Calibration mode with sensitivity tuning.",
      "Real-time visual feedback for each gesture.",
    ],
    howToRun: [
      "Clone the repo and set up the Python environment.",
      "Install dependencies and run the FastAPI service.",
      "Install frontend dependencies and start the app.",
      "Open http://localhost:3000 and enable the camera.",
    ],
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.png",
        alt: "Cover for Touchless Web Gesture Interface",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.png",
        alt: "Main screen of Touchless Web Gesture Interface",
      },
    ],
  },
  {
    slug: "chatbot-ia-api",
    title: "AI Chatbot API",
    tagline: "Chatbot API for contextual answers and faster support.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    problem: [
      "Standardized answers were slow and spread across channels.",
      "There was no unified conversation history.",
      "The team needed to reduce response time with quality.",
    ],
    solution: [
      "Prompt flow with session-level context.",
      "Structured knowledge base with fast retrieval.",
      "Cache and logs for performance and traceability.",
    ],
    features: [
      "Intent fallback for safe responses.",
      "Session history with topic classification.",
      "Usage metrics to evolve content.",
    ],
    howToRun: [
      "Provision the database and environment variables.",
      "Run the FastAPI backend.",
      "Optional: connect the chat frontend.",
    ],
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.png",
        alt: "Cover for AI Chatbot API",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.png",
        alt: "Conversation flow for AI Chatbot API",
      },
    ],
  },
  {
    slug: "self-drive-car",
    title: "Self-Drive Car",
    tagline: "Autonomous driving simulator with computer vision.",
    role: "Analyst/Developer",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    problem: [
      "Models needed safe testing without physical risk.",
      "Lane and obstacle detection had to run in real time.",
      "Processing needed to stay lightweight.",
    ],
    solution: [
      "Vision pipeline with optimized preprocessing.",
      "Model trained with synthetic and real data.",
      "Simulator with inference feedback and telemetry.",
    ],
    features: [
      "Lane detection with trajectory correction.",
      "Speed control based on obstacles.",
      "Inference visualization for debugging.",
    ],
    howToRun: [
      "Install Python dependencies and required drivers.",
      "Download the trained model and run the simulator.",
      "Tune sensor parameters for the scenario.",
    ],
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.png",
        alt: "Cover for Self-Drive Car",
      },
      {
        src: "/projects/self-drive-car/shot-1.png",
        alt: "Simulation screen for Self-Drive Car",
      },
    ],
  },
  {
    slug: "library-api-advanced",
    title: "Library API Advanced",
    tagline: "Library API with authentication and lending rules.",
    role: "Developer",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    problem: [
      "Catalog and lending required centralized control.",
      "Permissions and authentication were inconsistent.",
      "Manual reports slowed auditing.",
    ],
    solution: [
      "REST API with JWT, roles, and business rules.",
      "Relational modeling for books, users, and loans.",
      "Reports and logs for auditability.",
    ],
    features: [
      "Full lending and return flow.",
      "Advanced search by category, author, and status.",
      "Operational logs with audit trail.",
    ],
    howToRun: [
      "Configure PostgreSQL and environment variables.",
      "Run migrations and start the server.",
      "Test endpoints with Postman or Insomnia.",
    ],
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.png",
        alt: "Cover for Library API Advanced",
      },
      {
        src: "/projects/library-api-advanced/shot-1.png",
        alt: "Technical dashboard for Library API Advanced",
      },
    ],
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Commercial Data Hub",
    tagline: "Fiscal dashboards and indicators for a commercial hub.",
    role: "Data Analyst",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    problem: [
      "Fiscal data was scattered across multiple sources.",
      "Manual reports delayed commercial decisions.",
      "There was no consolidated view of municipal revenue.",
    ],
    solution: [
      "ETL with Python and Power Query to consolidate sources.",
      "Data model focused on fiscal indicators.",
      "Strategic dashboards with executive and operational views.",
    ],
    features: [
      "Revenue indicators by period and municipality.",
      "Visual alerts for anomalies and variation.",
      "Monitoring panel with dynamic filters.",
    ],
    howToRun: [
      "Connect fiscal sources and configure the ETL pipeline.",
      "Refresh the dataset and publish the Power BI report.",
      "Share the dashboard with access profiles.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.png",
        alt: "Cover for Commercial Data Hub",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.png",
        alt: "Dashboard for Commercial Data Hub",
      },
    ],
  },
];

export const projectSlugsEn = projectsEn.map((project) => project.slug);

export const getProjectBySlugEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);
