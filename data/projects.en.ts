import type { Project } from "./projects.types";

export const projectsEn: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    tagline: "Gesture-controlled web interface for touchless navigation.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    problem: [
      "Touchless control was required in restricted environments.",
      "Non-technical users needed to navigate dashboards without peripherals.",
      "Low latency was critical for live interaction.",
    ],
    dataUsed: [
      "Real-time camera stream.",
      "Hand landmarks and normalized coordinates.",
      "Gesture events mapped to UI actions.",
    ],
    solution: [
      "Hand detection with MediaPipe and OpenCV.",
      "FastAPI service to translate gestures into commands.",
      "React front-end with visual feedback and action mapping.",
    ],
    features: [
      "Gesture calibration and sensitivity control.",
      "Configurable gesture-to-action map.",
      "Real-time status overlay and feedback.",
    ],
    highlights: [
      "Hands-free control for dashboards and analytical interfaces.",
      "Safer interaction in controlled or hygienic environments.",
      "Foundation for real-time commands on live panels.",
    ],
    demonstrates: [
      "Computer vision applied to data UX.",
      "Real-time pipeline with low latency focus.",
      "Ability to prototype interactive analytics products.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+, Node 18, and camera enabled.",
      "Clone the repository and create a Python virtual environment.",
      "Install API dependencies and run the FastAPI server.",
      "Install front-end dependencies and run the React app.",
      "Open http://localhost:3000 and allow camera access.",
    ],
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.webp",
        alt: "Cover of Touchless Web Gesture Interface",
      },
      {
        src: "/touchless-web-gesture-interface.mp4",
        alt: "Touchless Web Gesture Interface demo in action",
        type: "video",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.webp",
        alt: "Main screen of Touchless Web Gesture Interface",
      },
    ],
  },
  {
    slug: "chatbot-ia-api",
    title: "Chatbot IA API",
    tagline: "Chatbot API with context and logs for faster support.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    problem: [
      "Support was fragmented with no centralized history.",
      "Responses were inconsistent and hard to audit.",
      "Slow response time for recurring demands.",
    ],
    dataUsed: [
      "Messages and conversation history.",
      "Classified intents and session context.",
      "Usage logs and feedback for improvement.",
    ],
    solution: [
      "FastAPI backend with session-based context.",
      "PostgreSQL persistence and Redis caching.",
      "Structured logs for audit and metrics.",
    ],
    features: [
      "Session context and safe fallback.",
      "Conversation and intent tracking.",
      "Versioned endpoints and /docs documentation.",
    ],
    highlights: [
      "More consistent and traceable responses at scale.",
      "Foundation for service quality analytics.",
      "Infrastructure to evolve content and metrics.",
    ],
    demonstrates: [
      "Conversational data modeling and robust APIs.",
      "Focus on observability and governance.",
      "Product thinking for support automation.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+, PostgreSQL, and Redis.",
      "Clone the repository and copy .env.example to .env.",
      "Set database and cache environment variables.",
      "Install dependencies, run migrations, and start the API.",
      "Open http://localhost:8000/docs to test.",
    ],
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.webp",
        alt: "Cover of Chatbot IA API",
      },
      {
        src: "/Chatbot.mp4",
        alt: "Chatbot IA API demo",
        type: "video",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.webp",
        alt: "Conversation flow of Chatbot IA API",
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
      "Need to test models without physical risk.",
      "Lane and obstacle detection in real time.",
      "Lightweight processing for limited hardware.",
    ],
    dataUsed: [
      "Simulated camera frames and virtual sensors.",
      "Telemetry for speed, position, and trajectory.",
      "Synthetic data for training and validation.",
    ],
    solution: [
      "Vision pipeline with optimized preprocessing.",
      "Model trained with synthetic and real data.",
      "Simulator with visual feedback and telemetry.",
    ],
    features: [
      "Lane detection with ROI tuning.",
      "Steering prediction and basic speed control.",
      "Inference overlay for debugging.",
    ],
    highlights: [
      "Fast and safe testing of control logic.",
      "Visual iteration with real-time telemetry.",
      "Foundation for evolving driving models.",
    ],
    demonstrates: [
      "Work with visual data and simulations.",
      "ML pipeline applied to real-time decisions.",
      "Experimental product mindset focused on validation.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+, OpenCV, and TensorFlow.",
      "Clone the repository and install dependencies.",
      "Download model weights when applicable.",
      "Run the main simulator script.",
      "Tune parameters based on the scenario.",
    ],
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.webp",
        alt: "Cover of Self-Drive Car",
      },
      {
        src: "/projects/self-drive-car/demo.mp4",
        alt: "Self-Drive Car simulator demo in action",
        type: "video",
      },
      {
        src: "/projects/self-drive-car/shot-1.webp",
        alt: "Simulation of Self-Drive Car",
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
      "Catalog and loans had no centralized control.",
      "Permissions and authentication were inconsistent.",
      "Manual reports made audits harder.",
    ],
    dataUsed: [
      "Book catalog, users, and loans.",
      "Return status and due dates.",
      "Operational logs for auditing.",
    ],
    solution: [
      "REST API with JWT, roles, and business rules.",
      "Relational modeling for books, users, and loans.",
      "Logs and queries for auditing.",
    ],
    features: [
      "End-to-end lending and return flow with validations.",
      "Search by category, author, and status.",
      "Audit trail with structured logs.",
    ],
    highlights: [
      "Standardized processes and fewer inconsistencies.",
      "Higher trust and traceability in records.",
      "Baseline for compliance and operational reporting.",
    ],
    demonstrates: [
      "Organized and typed backend architecture.",
      "Relational modeling focused on integrity.",
      "Authentication and audit best practices.",
    ],
    howToRun: [
      "Prerequisites: Node 18+ and PostgreSQL.",
      "Clone the repository and install dependencies.",
      "Configure .env with database and JWT settings.",
      "Run migrations and start the server.",
      "Test endpoints via /docs or Postman.",
    ],
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.webp",
        alt: "Cover of Library API Advanced",
      },
      {
        src: "/library-api-advanced.png",
        alt: "Additional screen of Library API Advanced",
      },
      {
        src: "/projects/library-api-advanced/shot-1.webp",
        alt: "Technical dashboard of Library API Advanced",
      },
    ],
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Núcleo Comercial de Dados",
    tagline: "Dashboards and performance indicators for a commercial team.",
    role: "Data Analyst",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    problem: [
      "Sales and revenue data was scattered across multiple sources.",
      "Manual reports delayed commercial decisions.",
      "No consolidated view of performance by period and segment.",
    ],
    dataUsed: [
      "Sales, revenue, and target datasets.",
      "Performance indicators by period and channel.",
      "Historical series for comparison and trends.",
    ],
    solution: [
      "ETL with Python and Power Query to consolidate sources.",
      "Data model focused on commercial KPIs.",
      "Strategic dashboards with executive visibility.",
    ],
    features: [
      "Indicators by period, channel, and segment.",
      "Visual alerts for relevant variations.",
      "Dynamic filters with comparative views.",
    ],
    highlights: [
      "Consolidated view for leaders and the commercial team.",
      "Faster detection of trends and deviations.",
      "Reliable base for commercial decisions.",
    ],
    demonstrates: [
      "End-to-end BI with business data.",
      "Delivery of actionable indicators.",
      "Focus on data quality and governance.",
    ],
    howToRun: [
      "Prerequisites: Power BI Desktop and data source access.",
      "Connect sales sources and run the ETL flow.",
      "Refresh the dataset and publish the report.",
      "Share dashboards with access profiles.",
      "Document the refresh routine.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.webp",
        alt: "Cover of Nucleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.webp",
        alt: "Dashboard of Nucleo Comercial de Dados",
      },
    ],
  },
  {
    slug: "face-emotions",
    title: "Face-Emotions",
    tagline: "Real-time facial emotion recognition.",
    role: "Analyst/Developer",
    stack: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/face-emotion-recognition-realtime",
    problem: [
      "Hard to capture engagement signals in real time.",
      "Need to identify emotion patterns during interactions.",
      "Fast processing required for webcam usage.",
    ],
    dataUsed: [
      "Real-time webcam frames.",
      "Face crops detected from the stream.",
      "Emotion probabilities inferred by the model.",
    ],
    solution: [
      "Face detection with OpenCV.",
      "Emotion classification model in TensorFlow/Keras.",
      "Real-time inference pipeline with on-screen overlay.",
    ],
    features: [
      "Multi-face detection on screen.",
      "Overlay with top emotion and confidence score.",
      "Continuous execution with immediate visual feedback.",
    ],
    highlights: [
      "Low-latency emotion recognition in real time.",
      "Foundation for experience and attention analytics.",
      "Clear pipeline for signal capture and visualization.",
    ],
    demonstrates: [
      "Computer vision applied to behavioral signals.",
      "ML inference over video streams.",
      "Rapid prototyping focused on validation.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+ and an enabled webcam.",
      "Clone the repository and create a virtual environment.",
      "Install the project dependencies.",
      "Run the main script to start the camera.",
      "See detected emotions in the overlay.",
    ],
    screenshots: [
      {
        src: "/projects/placeholder.webp",
        alt: "Cover of Face-Emotions",
      },
      {
        src: "/Face-emotions.mp4",
        alt: "Face-Emotions real-time demo",
        type: "video",
      },
    ],
  },
];

export const projectSlugsEn = projectsEn.map((project) => project.slug);

export const getProjectBySlugEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);
