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
    demo: {
      kind: "video",
      src: "/touchless-web-gesture-interface.mp4",
      poster: "/projects/touchless-web-gesture-interface/cover.svg",
      caption: "Quick walkthrough of the touchless interface in action.",
    },
    intro: {
      title: "Touchless Web Gesture Interface - Real-time Gesture Control for the Web",
      paragraphs: [
        "Touchless Web Gesture Interface is an innovative web application that lets users interact with digital interfaces without touching the mouse or keyboard, using only hand gestures captured by the webcam, directly in the browser.",
        "This project was built with a focus on innovation, user experience, and practical computer vision, exploring how modern technologies can transform the way people interact with web systems.",
        "More than a proof of concept, it showcases real skills in modern frontend development, application architecture, real-time video processing, and integration of advanced computer vision libraries.",
      ],
      sections: [
        {
          title: "What is Touchless Web Gesture Interface?",
          paragraphs: [
            "Touchless Web Gesture Interface is a gesture-controlled web interface where the user's hand movements are recognized in real time and converted into actions inside the application.",
            "The solution uses computer vision in the browser, eliminating the need for additional hardware or external software. All you need is a webcam and a modern browser.",
            "The main goal is to show how the web can be used as a platform for advanced interactive solutions, applicable in areas such as:",
          ],
          items: [
            "Accessible interfaces",
            "Immersive experiences",
            "Touchless systems",
            "Prototypes for innovative digital products",
          ],
        },
        {
          title: "Key Features",
          paragraphs: [
            "The application offers a set of features that demonstrate both technical mastery and a strong focus on usability:",
          ],
          items: [
            "Real-time hand tracking using MediaPipe Hands",
            "Natural gesture recognition, such as pinch and continuous motion",
            "Hand-controlled virtual cursor, simulating traditional interactions",
            "Interaction with visual elements without any physical contact",
            "Smooth and responsive updates, even with real-time processing",
          ],
          footer: [
            "These features show the feasibility of touchless interfaces in modern web environments while maintaining solid performance and user experience.",
          ],
        },
        {
          title: "Technologies Used in the Project",
          paragraphs: [
            "This project was built using a modern stack widely adopted in the industry:",
          ],
          subSections: [
            {
              title: "Frontend and Architecture",
              items: [
                "React for building reactive, component-based interfaces",
                "TypeScript for strong typing, organization, and scalability",
                "Vite as a modern bundler with fast load times and efficient DX",
              ],
            },
            {
              title: "Computer Vision",
              items: [
                "Google MediaPipe Hands for hand detection and tracking",
                "Video processing directly in the browser",
                "Conversion of hand landmarks into interactive actions",
              ],
            },
            {
              title: "Style and Interface",
              items: [
                "Modern CSS with a focus on responsiveness",
                "Clean and intuitive interface",
                "Experimental UX concepts exploring new interaction patterns",
              ],
            },
          ],
          footer: [
            "This technology mix reflects real-world practices and demonstrates the ability to work on complex, high-performance projects.",
          ],
        },
        {
          title: "Why is this project relevant?",
          paragraphs: [
            "Touchless Web Gesture Interface goes beyond a simple technical experiment.",
          ],
          subSections: [
            {
              title: "It demonstrates core competencies such as:",
              items: [
                "Advanced web development",
                "Motion and interaction data analysis",
                "Integration between frontend and real-time processing",
                "Building innovative, user-centered solutions",
              ],
            },
            {
              title: "Projects like this are especially relevant when:",
              items: [
                "Accessibility is a priority",
                "Touchless interfaces are desired",
                "User experience needs to go beyond the conventional",
              ],
            },
          ],
          footer: [
            "It also highlights the ability to research, implement, and adapt emerging technologies to solve real problems.",
          ],
        },
        {
          title: "Architecture and Code Organization",
          paragraphs: [
            "The codebase was structured following good development practices:",
          ],
          items: [
            "Clear separation of responsibilities",
            "Reusable components",
            "Strong typing with TypeScript",
            "Ease of maintenance and project evolution",
          ],
          footer: [
            "This organization supports scalability and makes the project easier to understand for other developers, which is essential in collaborative and professional environments.",
          ],
        },
        {
          title: "Practical Applications of Touchless Web Gesture Interface",
          paragraphs: [
            "This type of solution can be applied in several contexts, such as:",
          ],
          items: [
            "Gesture-controlled interactive dashboards",
            "Corporate environments and touchless presentations",
            "Educational and demo experiences",
            "Prototypes for innovative digital products",
            "Accessible interfaces for people with reduced mobility",
          ],
          footer: [
            "All of this reinforces the application's potential in the technology, data, and web development ecosystem.",
          ],
        },
        {
          title: "Source Code and Demo",
          paragraphs: [
            "The full source code is available on GitHub, allowing a detailed review of the implementation, architecture, and technical decisions made during development.",
          ],
          footer: ["Repository:"],
          link: {
            label: "github.com/matheussiqueira-dev/touchless-web-gesture-interface",
            href: "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
          },
        },
        {
          title: "Conclusion",
          paragraphs: [
            "Touchless Web Gesture Interface is a project that brings together modern technology, creativity, and practical application, showing how the web can go beyond traditional interactions.",
            "It represents an innovative approach to web development, reinforcing skills in React, TypeScript, computer vision, frontend architecture, and user experience - all highly valued competencies in today's tech market.",
            "If you are looking for real examples of innovation applied to the web, this project is a clear demonstration of the potential of touchless interfaces in the browser.",
          ],
        },
      ],
      video: {
        src: "/touchless-web-gesture-interface.mp4",
        poster: "/projects/touchless-web-gesture-interface/cover.svg",
        caption: "Touchless Web Gesture Interface demo in action.",
      },
    },
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
    longDescription: [
      "This project was built to solve a practical constraint in environments where touch is limited: control rooms, industrial operations, and live BI presentations. The goal was to create an interaction layer that lets users navigate dashboards without a mouse or keyboard while keeping precision, low latency, and a short learning curve. The solution is a lightweight ecosystem with edge video capture, real-time gesture interpretation, and a web UI that provides immediate visual feedback. The focus is on reducing friction and making the system usable by non-technical teams.",
      "Architecturally, the pipeline combines Python computer vision with MediaPipe/OpenCV and a FastAPI service that normalizes signals, applies thresholds, and debounces gestures to prevent false positives. Each gesture is translated into semantic commands (next, back, focus, open) that can be mapped per context, making the interface adaptable to different dashboards. On the React front end, the presentation layer shows status, confirmations, and visual hints to increase user confidence. Calibration flows address lighting changes and camera distance to improve robustness.",
      "Beyond technical viability, the case demonstrates how natural interfaces can improve accessibility and efficiency in analytical routines. The REST integration simplifies coupling with existing systems, and the modular design leaves room for new gestures, shortcuts, and automation. The work consolidated best practices around latency optimization, noise handling, and real-time feedback design. It connects data, UX, and engineering, with clear potential for corporate environments that rely on critical dashboards.",
      "Validation included tests with different users and noisy environments, tracking gesture stability and perceived response time. Even without specialized hardware, the flow kept interactions consistent, which supports deployment in teams with simple infrastructure. Next steps include compound gesture recognition, per-profile personalization, and integration with Power BI events via API. This path moves the work from a functional prototype to a solution applicable in real operations, even in daily workflows.",
    ],
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
    demo: {
      kind: "internal",
      path: "/demos/chatbot-ia-api",
      title: "Open interactive demo",
      description:
        "Lightweight playground to simulate requests and view mock responses.",
    },
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
    longDescription: [
      "This case was designed to standardize support and create a reliable data foundation for quality analysis. In high-volume operations, inconsistent replies lead to rework and reduced trust. The proposal was to build a chatbot backend that keeps session context, responds quickly, and logs interactions in an auditable way. The API was planned to be pluggable across channels (web, WhatsApp, internal systems) and to serve as a metric source for BI.",
      "Technically, the solution uses FastAPI for REST endpoints, PostgreSQL for conversation history, and Redis for caching and temporary context. The data model prioritizes traceability: each message produces structured logs with timestamps, intent, response, and status. This enables KPIs such as average response time, resolution rate, and most frequent topics. The stack includes versioned routes, automatic documentation, and validation layers to guarantee consistency from input to storage.",
      "Beyond operational gains, the project strengthens governance and continuous improvement. With consistent data, teams can review scripts, adjust flows, and evolve the knowledge base without guesswork. The API design also leaves room for future AI integrations, processing queues, or a dedicated analytics dashboard. The result is a service that reduces friction in support, generates actionable insights, and demonstrates data-driven backend architecture.",
      "Another focus was scalability without losing operational clarity. Logging was designed from day one to feed dashboards and audits, and caching was tuned to preserve consistency while keeping context. There is clear room to evolve with intent classification, generative AI integrations, and smart routing to human agents. These extensions build on a solid backend foundation while keeping the traceability that quality and compliance teams require. As a next step, the foundation can support A/B testing of answer strategies and feedback loops for continuous tuning without sacrificing auditability at scale. This balance is essential for support teams handling regulated customer data. It keeps decisions transparent and outcomes measurable.",
    ],
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
    demo: {
      kind: "video",
      src: "/projects/self-drive-car/demo.mp4",
      poster: "/projects/self-drive-car/cover.svg",
      caption: "Autonomous driving simulator running in real time.",
    },
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
    slug: "driver-monitoring-system",
    title: "Driver Monitoring System",
    headline: "Driver Monitoring System | Attention and fatigue monitoring",
    tagline:
      "Driver monitoring system using computer vision to detect attention and fatigue.",
    role: "Analyst/Developer",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    repoUrl: "https://github.com/matheussiqueira-dev/Driver-Monitoring-System",
    demo: {
      kind: "video",
      src: "/driver-monitoring-system.mp4",
      poster: "/projects/driver-monitoring-system/cover.svg",
      caption: "Attention and fatigue detection with computer vision.",
    },
    context:
      "Vehicle safety applications require real-time detection of driver fatigue and distraction to reduce risks on long trips.",
    problem: [
      "Monitor attention and drowsiness with low latency.",
      "Detect facial cues under varying lighting conditions.",
      "Reduce false positives during natural movements.",
      "Deliver clear alerts without interrupting driving.",
    ],
    dataUsed: [
      "Front camera video frames.",
      "Facial landmarks and eye openness metrics.",
      "Yawning events and eye-closure duration.",
      "Attention scores and alert logs.",
    ],
    solution: [
      "Computer vision pipeline with face detection and landmarks.",
      "EAR (Eye Aspect Ratio) and fatigue signal analysis.",
      "Threshold and time-window logic to reduce noise.",
      "Visual alert layer for immediate feedback.",
    ],
    features: [
      "Continuous attention and drowsiness detection.",
      "Blink, yawn, and eye-closure metrics.",
      "Configurable real-time alerts.",
      "Simple UI for validation and tests.",
    ],
    highlights: [
      "Real-time monitoring with low latency.",
      "Consistent fatigue signal detection.",
      "Reusable base for automotive prototypes.",
      "Clear pipeline for future model upgrades.",
    ],
    demonstrates: [
      "Computer vision applied to automotive safety.",
      "Facial signal processing on video streams.",
      "Alert and threshold modeling.",
      "Rapid validation-focused prototyping.",
    ],
    techSummary:
      "Python with OpenCV and MediaPipe for facial tracking, plus TensorFlow support for visual signal analysis.",
    conclusion: [
      "Built a low-latency visual pipeline.",
      "Applied facial metrics to detect fatigue.",
      "Created a base ready for future model evolution.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+ and a webcam.",
      "Clone the repository and create a virtual environment.",
      "Install dependencies listed in requirements.txt.",
      "Run the main script to start detection.",
      "Validate alerts in real time via the UI.",
    ],
    screenshots: [
      {
        src: "/projects/driver-monitoring-system/cover.svg",
        alt: "Cover of Driver Monitoring System",
      },
      {
        src: "/driver-monitoring-system.mp4",
        alt: "Driver Monitoring System demo",
        type: "video",
      },
    ],
    seo: {
      title: "Driver Monitoring System | Attention and fatigue monitoring",
      description:
        "Driver monitoring system using computer vision to detect attention and fatigue in real time with Python, OpenCV, and MediaPipe.",
    },
  },
  {
    slug: "subway-surf",
    title: "Subway Surf",
    headline: "Subway Surf | 2D game in HTML5 Canvas",
    tagline:
      "Game inspired by Subway Surfers built to practice game logic and development.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Subway-Surf",
    demo: {
      kind: "video",
      src: "/Subway Surf.mp4",
      poster: "/projects/subway-surf/cover.svg",
      caption: "Gameplay from the Subway Surfers-inspired prototype.",
    },
    context:
      "Project created to practice game loop, collision, and character control in a 2D environment.",
    problem: [
      "Build a smooth browser-based game loop.",
      "Handle collisions and obstacles in real time.",
      "Scale difficulty without breaking gameplay.",
      "Organize code for new levels and assets.",
    ],
    dataUsed: [
      "Keyboard input for movement.",
      "Game state (speed, score, collisions).",
      "Obstacle spawn timers.",
      "Sprite positions on screen.",
    ],
    solution: [
      "Canvas rendering with a continuous update loop.",
      "Simple collision system and obstacle reset.",
      "Gradual speed increase for challenge.",
      "Modular structure for game logic and UI.",
    ],
    features: [
      "Smooth character movement.",
      "Dynamic obstacles with collision detection.",
      "Real-time score tracking.",
      "Base ready for new levels and skins.",
    ],
    highlights: [
      "Responsive gameplay with solid performance.",
      "Consistent controls and collisions.",
      "Clear structure for project evolution.",
      "Hands-on game design practice.",
    ],
    demonstrates: [
      "Game loop and Canvas rendering.",
      "Collision logic and state handling.",
      "Modular front-end structure.",
      "Rapid 2D game prototyping.",
    ],
    techSummary:
      "JavaScript and HTML5 Canvas for rendering, with CSS for layout and HUD.",
    conclusion: [
      "Consolidated JS game loop fundamentals.",
      "Implemented real-time collision and scoring.",
      "Built an extensible base for future mechanics.",
    ],
    howToRun: [
      "Clone the repository.",
      "Open index.html in a browser.",
      "Use the keyboard to control the character.",
      "Track the score and avoid obstacles.",
    ],
    screenshots: [
      {
        src: "/projects/subway-surf/cover.svg",
        alt: "Cover of Subway Surf",
      },
      {
        src: "/Subway Surf.mp4",
        alt: "Subway Surf gameplay demo",
        type: "video",
      },
    ],
  },
  {
    slug: "gestor-de-notas",
    title: "Gestor de Notas",
    headline: "Gestor de Notas | Notes management app",
    tagline:
      "Notes management app to create, edit, and organize information quickly.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    repoUrl: "https://github.com/matheussiqueira-dev/Gestor_de_Notas",
    demo: {
      kind: "video",
      src: "/Gestor de Notas.mp4",
      poster: "/projects/gestor-de-notas/cover.svg",
      caption: "Note creation and organization flow.",
    },
    context:
      "The goal was to build a lightweight way to record and organize personal notes without relying on external tools.",
    problem: [
      "Organize notes quickly and clearly.",
      "Allow edits without losing history.",
      "Ensure local persistence without a backend.",
      "Keep a simple and direct interface.",
    ],
    dataUsed: [
      "Note text and local categories.",
      "Creation and update timestamps.",
      "Priority status and visual organization.",
      "Browser-persisted state.",
    ],
    solution: [
      "Simple web UI with notes CRUD.",
      "LocalStorage persistence for offline use.",
      "Organization by tags and dates.",
      "Visual feedback for user actions.",
    ],
    features: [
      "Create, edit, and delete notes.",
      "Fast keyword search.",
      "Local persistence in the browser.",
      "Responsive layout for desktop and mobile.",
    ],
    highlights: [
      "Direct, low-friction flow.",
      "Offline persistence without a backend.",
      "Base ready for authentication later.",
      "Lean and maintainable code.",
    ],
    demonstrates: [
      "Front-end CRUD fundamentals.",
      "Local data persistence.",
      "UI organization focused on productivity.",
      "Solid JavaScript basics.",
    ],
    techSummary:
      "Pure JavaScript web app with HTML and CSS, using LocalStorage for persistence.",
    conclusion: [
      "Implemented a simple, functional CRUD flow.",
      "Ensured local persistence without an API.",
      "Built a lightweight foundation for future upgrades.",
    ],
    howToRun: [
      "Clone the repository.",
      "Open index.html in a browser.",
      "Create and organize notes.",
      "Changes are saved locally.",
    ],
    screenshots: [
      {
        src: "/projects/gestor-de-notas/cover.svg",
        alt: "Cover of Gestor de Notas",
      },
      {
        src: "/Gestor de Notas.mp4",
        alt: "Gestor de Notas demo",
        type: "video",
      },
    ],
  },
  {
    slug: "sistema-analise-emocoes-ia",
    title: "AI Emotion Analysis System",
    headline: "Emotion Analysis System with AI | Data Science and Full Stack",
    tagline:
      "Full stack facial emotion analysis system with AI, REST APIs, and data visualization.",
    role: "Analyst/Developer",
    stack: [
      "Python",
      "Pandas",
      "Machine Learning",
      "MLOps",
      "REST API",
      "Node.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Dash",
      "SQL",
      "MongoDB",
      "Git",
      "GitHub",
      "ETL",
      "Data Warehouse",
      "Power BI",
      "Power Query",
      "DAX",
      "Statistics",
      "Data Analysis",
    ],
    repoUrl: "https://github.com/matheussiqueira-dev/sistema-analise-emocoes-ia",
    context:
      "Interpreting human emotions in digital environments is a recurring challenge in modern UX, behavior analysis, and data-driven decision-making. Manual methods are subjective, not scalable, and unable to process large volumes in real time, requiring an automated solution with strong performance.",
    problem: [
      "Manual analysis is subjective, inconsistent, and hard to scale.",
      "Real-time processing requires low latency and strong performance.",
      "Large volumes of images and video overwhelm manual workflows.",
      "Lack of structured metrics limits BI and decision-making.",
    ],
    dataUsed: [
      "Images and videos with faces for emotion classification.",
      "Real-time frames with inference timestamps.",
      "Emotion probabilities and model performance metrics.",
      "API logs and structured data for dashboards and BI.",
    ],
    solution: [
      "Data collection, cleaning, and standardization pipeline with Python and Pandas.",
      "Machine learning model for emotion classification with metric evaluation.",
      "REST API in Python/Node.js integrated with SQL and NoSQL databases and security.",
      "React.js and Dash front-end for analytical visualization and usability.",
    ],
    features: [
      "Emotion identification from images and video.",
      "Real-time processing with low latency.",
      "Analytical dashboards with KPIs and clear visualization.",
      "Intuitive, responsive web interface for decision support.",
      "Structured data for future analytics and a Data Warehouse layer.",
    ],
    highlights: [
      "Automated emotion analysis with reduced manual effort.",
      "Efficient processing at scale with an optimized pipeline.",
      "Clear visualizations to support analysis and decisions.",
      "Modular architecture ready for expansion and SaaS.",
    ],
    demonstrates: [
      "Full stack integration with REST APIs and SQL/NoSQL databases.",
      "Applied data science with statistics, ML, and metric evaluation.",
      "ETL, Data Warehouse, and BI for reliable indicators.",
      "Initial MLOps practices, versioning, and security.",
    ],
    techSummary:
      "Python, Pandas, machine learning, and MLOps integrated with a REST API, SQL/NoSQL databases, React, and Dash for a full emotion analytics system.",
    conclusion: [
      "Integrated data science, AI, and full stack development into a scalable flow.",
      "Structured data pipelines and visualizations for metric-driven decisions.",
      "Consolidated performance, security, and product evolution practices.",
    ],
    howToRun: [
      "Prerequisites: Python 3.10+, Node 18+, and configured SQL/NoSQL databases.",
      "Clone the repository and set up Python and Node environments.",
      "Run the ETL pipeline and prepare datasets for training.",
      "Start the REST API and the model inference service.",
      "Launch the front-end and access the analytics dashboards.",
    ],
    screenshots: [
      {
        src: "/projects/sistema-analise-emocoes-ia/cover.svg",
        alt: "Cover of the AI Emotion Analysis System project",
      },
      {
        src: "/projects/sistema-analise-emocoes-ia/shot-1.svg",
        alt: "Analytics dashboard for the AI Emotion Analysis System",
      },
    ],
    seo: {
      title: "AI Emotion Analysis System | Data Science and Full Stack",
      description:
        "Emotion analysis project using AI with Python, machine learning, REST APIs, data visualization, and full stack development for decision support.",
    },
  },
];

export const projectSlugsEn = projectsEn.map((project) => project.slug);

export const getProjectBySlugEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);
