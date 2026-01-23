import type { Project } from "./projects.types";

export const projectsEn: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    headline: "Touchless Web Gesture Interface | Computer vision for dashboards",
    tagline: "Touchless web interface with computer vision to navigate dashboards and data apps.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    context:
      "In touch-restricted environments (labs, control rooms, industrial ops), teams needed to navigate BI dashboards without mouse or keyboard while keeping low latency and high command accuracy.",
    problem: [
      "Mouse and keyboard interactions were not viable in hygienic or safety-restricted scenarios.",
      "Users had to operate BI dashboards during live presentations and operations.",
      "High latency and detection noise hurt UX and adoption.",
      "Gestures had to map to actions in a configurable and reliable way.",
    ],
    dataUsed: [
      "Real-time camera frames.",
      "Hand landmarks and normalized position vectors.",
      "Gesture events, timestamps, and UI state.",
      "Per-user calibration parameters.",
    ],
    solution: [
      "Computer vision pipeline in Python with MediaPipe and OpenCV to track hands.",
      "FastAPI service exposing a REST API to interpret gestures and dispatch commands.",
      "Normalization, debounce, and thresholds to reduce noise and improve accuracy.",
      "React front-end with visual feedback and context-based action mapping.",
    ],
    features: [
      "Gesture calibration and sensitivity tuning per user.",
      "Configurable gesture-to-action map for navigation.",
      "Visual overlay with detection status and command confirmation.",
      "Modular architecture to integrate with dashboards and data apps.",
    ],
    highlights: [
      "Hands-free navigation for dashboards and analytical systems with low latency.",
      "Reduced physical contact and improved accessibility in controlled environments.",
      "Smoother interaction during live demos and operations.",
      "Reusable foundation for fast UI commands and automation.",
    ],
    demonstrates: [
      "Computer vision applied to data UX and interfaces.",
      "Full stack integration with REST APIs and real-time events.",
      "Computer vision algorithms and data structures for gesture mapping.",
      "Rapid prototyping of interactive BI solutions.",
    ],
    techSummary:
      "Python with OpenCV/MediaPipe for computer vision, FastAPI for the gesture REST API, and a React.js front-end with real-time feedback.",
    conclusion: [
      "Applied performance best practices (debounce, normalization, calibration).",
      "Integrated front-end and back-end with an event-driven, low-latency flow.",
      "Validated a computer-vision solution focused on usability and data UX.",
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
        src: "/projects/touchless-web-gesture-interface/cover.svg",
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
    seo: {
      title: "Touchless Web Gesture Interface | Hands-free dashboard control",
      description:
        "Computer vision case study using Python, OpenCV, MediaPipe, and FastAPI to control dashboards with gestures, integrating a React front-end and low-latency REST API.",
    },
  },
  {
    slug: "chatbot-ia-api",
    title: "Chatbot IA API",
    headline: "Chatbot IA API | Support backend with context and logs",
    tagline: "Chatbot API with context, logs, and data for support automation.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    context:
      "Support operations needed consistent answers and reliable data for quality analysis, reducing response time for recurring requests.",
    problem: [
      "Support was fragmented with no centralized, traceable history.",
      "Inconsistent responses made governance and improvement harder.",
      "Response time was high for recurring questions.",
      "Lack of consolidated metrics limited BI and decision-making.",
    ],
    dataUsed: [
      "Messages and conversation history per session.",
      "Classified intents and support context.",
      "User feedback and usage metrics.",
      "Structured logs for audit and SQL analysis.",
    ],
    solution: [
      "FastAPI REST API with session context and safe fallback.",
      "PostgreSQL persistence for history and audit.",
      "Redis cache to reduce latency for repeated answers.",
      "Structured logs and endpoint versioning with OpenAPI docs.",
    ],
    features: [
      "Session context with configurable expiration.",
      "Conversation, intent, and feedback tracking.",
      "Versioned endpoints and /docs for fast validation.",
      "Observability layer for metrics and quality.",
    ],
    highlights: [
      "More consistent and traceable responses at scale.",
      "Ready base for support analytics and BI.",
      "Faster handling of recurring requests with cache.",
      "Infrastructure to evolve content and quality metrics.",
    ],
    demonstrates: [
      "Conversational data modeling and robust APIs.",
      "SQL database, cache, and observability practices.",
      "Support automation with product and governance mindset.",
      "Scalable and monitorable backend architecture.",
    ],
    techSummary:
      "FastAPI with PostgreSQL and Redis for a REST API, cache, and structured logs, enabling SQL-driven metrics and analysis.",
    conclusion: [
      "Applied REST API best practices with versioning and documentation.",
      "Structured data for auditing and support intelligence.",
      "Ensured scalability with caching and monitoring.",
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
        src: "/projects/chatbot-ia-api/cover.svg",
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
    seo: {
      title: "Chatbot IA API | REST API with context, logs, and data",
      description:
        "FastAPI chatbot API with PostgreSQL and Redis, session context, and structured logs for support automation and analytics.",
    },
  },
  {
    slug: "self-drive-car",
    title: "Self-Drive Car",
    headline: "Self-Drive Car | Machine learning and computer vision",
    tagline: "Autonomous driving simulator with computer vision and ML.",
    role: "Analyst/Developer",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    context:
      "Data science project to train and validate autonomous driving models in a safe environment, focused on computer vision and real-time decisions.",
    problem: [
      "Testing models in the physical world was costly and risky.",
      "Lane and obstacle detection required real-time processing.",
      "Limited hardware demanded an optimized, lightweight pipeline.",
      "Telemetry was needed for analysis and model tuning.",
    ],
    dataUsed: [
      "Simulated camera frames and virtual sensors.",
      "Telemetry for speed, position, and trajectory.",
      "Synthetic data and real samples for training.",
      "Inference logs for performance evaluation.",
    ],
    solution: [
      "Preprocessing and feature extraction with OpenCV and NumPy.",
      "TensorFlow model trained with synthetic and real data.",
      "Simulator with inference overlay and telemetry.",
      "Optimized pipeline for low latency and visual debugging.",
    ],
    features: [
      "Lane detection with ROI tuning and filters.",
      "Steering prediction and basic speed control.",
      "Inference overlay for validation and tuning.",
      "Telemetry logs for performance analysis.",
    ],
    highlights: [
      "Fast and safe testing of control logic.",
      "Visual iteration with real-time telemetry.",
      "Solid foundation for evolving driving models.",
      "Performance improvements through pipeline optimizations.",
    ],
    demonstrates: [
      "Data science and ML applied to computer vision.",
      "Real-time inference pipeline with performance focus.",
      "Predictive analytics applied to real-time decisions.",
      "Synthetic data usage to accelerate training.",
    ],
    techSummary:
      "Python, OpenCV, TensorFlow, and NumPy for an ML and computer vision pipeline, with a simulator for validation and analysis.",
    conclusion: [
      "Consolidated feature engineering and model evaluation practices.",
      "Applied optimizations to keep real-time latency low.",
      "Integrated telemetry and visualization for technical decision-making.",
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
        src: "/projects/self-drive-car/cover.svg",
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
    seo: {
      title: "Self-Drive Car | Autonomous driving simulator with ML",
      description:
        "Autonomous driving simulator using Python, OpenCV, and TensorFlow to train and validate machine learning models in real time with telemetry.",
    },
  },
  {
    slug: "library-api-advanced",
    title: "Library API Advanced",
    headline: "Library API Advanced | REST API with auth and business rules",
    tagline: "Library API with authentication, lending rules, and auditing.",
    role: "Developer",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    context:
      "Library management needed centralized catalogs and lending with data integrity and operational traceability.",
    problem: [
      "Catalogs and loans lacked centralized control.",
      "Permissions and authentication were inconsistent.",
      "Manual reporting made audits and compliance harder.",
      "Lending and return validations were unclear.",
    ],
    dataUsed: [
      "Book catalog, users, and lending transactions.",
      "Return status, due dates, and history.",
      "Operational logs for auditing.",
      "SQL queries for operational analysis.",
    ],
    solution: [
      "REST API with Node.js, TypeScript, and Fastify.",
      "JWT authentication, roles, and lending business rules.",
      "Relational modeling in PostgreSQL focused on integrity.",
      "Structured logs and validations for auditing.",
    ],
    features: [
      "End-to-end lending and return flow with validations.",
      "Search by category, author, and status.",
      "Audit trail with detailed records.",
      "Foundation for operational reporting.",
    ],
    highlights: [
      "Standardized processes and fewer inconsistencies.",
      "Higher trust and traceability in records.",
      "Baseline for compliance and operational reports.",
      "Easier integration with other systems.",
    ],
    demonstrates: [
      "Organized, typed, and scalable backend architecture.",
      "Relational modeling focused on integrity.",
      "Authentication and security best practices.",
      "REST API design for transactional data.",
    ],
    techSummary:
      "Node.js, TypeScript, and Fastify with PostgreSQL and JWT for a secure, transactional REST API.",
    conclusion: [
      "Applied security, validation, and auditing best practices.",
      "Structured relational modeling for consistency and scale.",
      "Consolidated knowledge in API design and data governance.",
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
        src: "/projects/library-api-advanced/cover.svg",
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
    seo: {
      title: "Library API Advanced | Node.js REST API with PostgreSQL",
      description:
        "Library API built with Node.js, TypeScript, Fastify, and PostgreSQL, featuring JWT authentication, lending rules, and an audit trail.",
    },
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Nucleo Comercial de Dados",
    headline: "Nucleo Comercial de Dados | Business Intelligence and Power BI",
    tagline: "BI dashboards with commercial KPIs, ETL, and analytics automation.",
    role: "Data Analyst",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    context:
      "The commercial team needed to consolidate sales and targets data for faster decisions, reducing rework and improving information quality.",
    problem: [
      "Sales and revenue data was spread across multiple sources.",
      "Manual reports delayed commercial decisions.",
      "Inconsistent indicators made comparisons difficult.",
      "Low visibility of trends by period and segment.",
    ],
    dataUsed: [
      "Sales, revenue, and commercial targets datasets.",
      "Performance indicators by period, channel, and segment.",
      "Historical series for comparisons and trends.",
      "Product, region, and portfolio dimensions.",
    ],
    solution: [
      "ETL with Python and Power Query to consolidate sources.",
      "Dimensional modeling (Data Warehouse layer) focused on KPI reliability with DAX.",
      "Strategic dashboards in Power BI with executive views.",
      "Standardized metrics and business rules.",
    ],
    features: [
      "Indicators by period, channel, and segment.",
      "Visual alerts for relevant variations.",
      "Dynamic filters with comparative views.",
      "Detail layers for tactical analysis.",
    ],
    highlights: [
      "Improved decision-making with actionable KPIs.",
      "Automation of routines and reduced rework.",
      "Higher information quality with consistent data.",
      "Scalability for new sources and metrics.",
    ],
    demonstrates: [
      "End-to-end BI with business data.",
      "Data analysis and statistics applied to commercial KPIs.",
      "Data visualization for leadership teams.",
      "Governance and data quality in reporting.",
    ],
    techSummary:
      "Power BI, DAX, Power Query, SQL, and Python/Pandas for ETL, data modeling, and KPI visualization.",
    conclusion: [
      "Applied BI, ETL, and data visualization best practices.",
      "Consolidated governance and KPI standardization.",
      "Strengthened analytical capability with actionable KPIs.",
    ],
    howToRun: [
      "Prerequisites: Power BI Desktop and access to data sources.",
      "Connect sales sources and run the ETL flow.",
      "Refresh the dataset and publish the report.",
      "Share dashboards with access profiles.",
      "Document the refresh routine.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.svg",
        alt: "Cover of Nucleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.webp",
        alt: "Dashboard of Nucleo Comercial de Dados",
      },
    ],
    seo: {
      title: "Nucleo Comercial de Dados | BI, Power BI, and commercial KPIs",
      description:
        "Business Intelligence project using Power BI, SQL, Python, and DAX for ETL, commercial KPIs, and executive dashboards focused on decision-making.",
    },
  },
  {
    slug: "face-emotions",
    title: "Face-Emotions",
    headline: "Face-Emotions | Facial emotion recognition with Machine Learning",
    tagline: "Real-time facial emotion recognition with OpenCV and TensorFlow.",
    role: "Analyst/Developer",
    stack: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/face-emotion-recognition-realtime",
    context:
      "Computer vision project to identify emotions and engagement patterns during interactions, supporting user experience analysis.",
    problem: [
      "Hard to measure visual engagement in real time.",
      "Need to detect emotions with low latency from webcam feeds.",
      "Lighting and pose variations affected accuracy.",
      "Multi-face detection required efficient processing.",
    ],
    dataUsed: [
      "Real-time webcam frames.",
      "Face crops detected from the stream.",
      "Emotion probabilities inferred by the model.",
      "Inference logs for performance evaluation.",
    ],
    solution: [
      "Face detection with OpenCV and frame preprocessing.",
      "Emotion classification model built with TensorFlow/Keras.",
      "Real-time inference pipeline with on-screen overlay.",
      "Adjustments to reduce noise and improve stability.",
    ],
    features: [
      "Multi-face detection on screen.",
      "Overlay with dominant emotion and confidence.",
      "Continuous execution with immediate visual feedback.",
      "Optimized pipeline for low latency.",
    ],
    highlights: [
      "Low-latency emotion recognition in real time.",
      "Foundation for UX and attention analytics.",
      "Clear pipeline for signal capture and visualization.",
      "Base to evolve machine learning models.",
    ],
    demonstrates: [
      "Computer vision applied to behavioral signals.",
      "ML inference over video streams.",
      "Rapid prototyping focused on validation.",
      "Visual data analysis with UX focus.",
    ],
    techSummary:
      "Python, OpenCV, TensorFlow/Keras, and NumPy for real-time emotion inference with low latency.",
    conclusion: [
      "Improved preprocessing and model inference practices.",
      "Optimized the pipeline to reduce video streaming latency.",
      "Consolidated skills in computer vision and applied ML.",
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
        src: "/projects/face-emotions/cover.svg",
        alt: "Cover of Face-Emotions",
      },
      {
        src: "/Face-emotions.mp4",
        alt: "Face-Emotions real-time demo",
        type: "video",
      },
    ],
    seo: {
      title: "Face-Emotions | Real-time facial emotion recognition",
      description:
        "Computer vision project using Python, OpenCV, and TensorFlow to recognize facial emotions in real time and support UX analysis.",
    },
  },
];

export const projectSlugsEn = projectsEn.map((project) => project.slug);

export const getProjectBySlugEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);
