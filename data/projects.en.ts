import type { Project } from "./projects.types";

const projectListEn: Project[] = [
  {
    slug: "capa-da-invisibilidade",
    title: "Invisibility Cloak",
    headline: "Invisibility Cloak | Real-time browser effect",
    tagline:
      "Real-time invisibility effect in the browser with fine-grained color masking controls.",
    role: "Full Stack Developer",
    stack: ["React", "TypeScript", "Vite", "Canvas API", "Node.js", "Fastify", "Zod"],
    repoUrl: "https://github.com/matheussiqueira-dev/capa-da-invisibilidade.git",
    demo: {
      kind: "video",
      src: "/Capa da Invisibilidade.mp4",
      poster: "/projects/capa-da-invisibilidade/demo.gif",
      caption: "Real-time invisibility effect with visual calibration controls.",
    },
    intro: {
      title: "Invisibility Cloak — Real-time effect in the browser",
      paragraphs: [
        "Full stack project that applies a real-time invisibility effect in the browser, with calibration controls and color masking.",
        "Processing happens locally via Canvas for low latency and privacy, with an optional backend for snapshots and metrics.",
      ],
      sections: [
        {
          title: "Differentiators",
          items: [
            "Local video processing for privacy and low latency.",
            "Visual controls for precise effect calibration.",
            "Modular, optional backend for recording results.",
            "Simple setup for demos and studies.",
          ],
        },
        {
          title: "Architecture",
          items: [
            "Frontend with a Canvas video loop and React state.",
            "Backend REST API in Fastify with validation and security.",
            "File-based JSON persistence for easy local setup.",
          ],
        },
        {
          title: "Stack and technologies",
          items: [
            "React, TypeScript, Vite, and Canvas API on the frontend.",
            "Node.js, Fastify, and Zod on the backend.",
          ],
        },
      ],
      video: {
        src: "/Capa da Invisibilidade.mp4",
        poster: "/projects/capa-da-invisibilidade/demo.gif",
        caption: "Walkthrough of the invisibility effect in real time.",
      },
    },
    context:
      "The goal was to build a real-time invisibility effect that runs in the browser with low latency, visual calibration, and an optional backend for recording results.",
    problem: [
      "Stable color masking under different lighting conditions.",
      "Maintain performance for real-time video processing.",
      "Provide visual controls to calibrate the effect.",
      "Store snapshots and metrics without complicating setup.",
    ],
    dataUsed: [
      "Webcam frames processed locally.",
      "Color masks and segmentation parameters.",
      "Optional snapshots and performance metrics.",
      "Effect calibration settings.",
    ],
    solution: [
      "Canvas processing pipeline with adjustable masking.",
      "UI controls for color and intensity calibration.",
      "Optional Fastify REST API with Zod validation and API key.",
      "Simple JSON file persistence for quick setup.",
    ],
    features: [
      "Real-time invisibility effect in the browser.",
      "Visual controls for fine-tuning the mask.",
      "Optional backend for snapshots and metrics.",
      "Environment-based configuration.",
    ],
    highlights: [
      "Local video processing for privacy and low latency.",
      "Modular backend ready to evolve.",
      "Simple setup for demos and studies.",
      "Good practices with validation, CORS, and rate limiting.",
    ],
    demonstrates: [
      "Browser computer vision with Canvas API.",
      "Full stack integration with REST APIs.",
      "Validation and security with Zod and API keys.",
      "Modular architecture with optional backend.",
    ],
    techSummary:
      "React + TypeScript + Canvas API on the frontend, and an optional Fastify + Zod backend for snapshots and metrics.",
    conclusion: [
      "Delivered a performant, calibratable invisibility effect.",
      "Preserved privacy with local processing and optional backend.",
      "Left a foundation ready for metrics and integrations.",
    ],
    howToRun: [
      "Frontend: npm install and npm run dev.",
      "Backend (optional): cd backend, npm install, cp .env.example .env, npm run dev.",
      "Set VITE_ENABLE_API, VITE_API_URL, and VITE_API_KEY if using the backend.",
    ],
    screenshots: [
      {
        src: "/projects/capa-da-invisibilidade/demo.gif",
        alt: "Invisibility Cloak GIF demo",
        type: "gif",
      },
      {
        src: "/Capa da Invisibilidade.mp4",
        alt: "Invisibility Cloak video demo",
        type: "video",
      },
    ],
    seo: {
      title: "Invisibility Cloak | Real-time browser effect",
      description:
        "Full stack real-time invisibility effect using Canvas in the browser, with an optional Fastify backend for snapshots and metrics.",
    },
  },
  {
    slug: "business-decision-simulator",
    title: "Business Decision Simulator",
    headline:
      "Business Decision Simulator | Scenarios, risk and financial impact",
    tagline:
      "Interactive simulator to compare strategies and quantify financial impact with Monte Carlo and sensitivity analysis.",
    role: "Analyst/Developer",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Simulacao-Estrategica-de-Decisao-Empresarial.git",
    demo: {
      kind: "video",
      src: "/Simulação Estratégica de Decisão Empresarial.mp4",
      poster: "/Thmbnail/Thumbnail - English/Business Decision Simulator.png",
      caption: "Side-by-side scenarios, risk distribution and live KPIs.",
    },
    intro: {
      title: "Strategic Business Decision Simulator",
      paragraphs: [
        "Interactive tool to test business strategies and visualize impact on revenue, margin and cash.",
        "Lets you compare scenarios in real time, including uncertainty through Monte Carlo and sensitivity charts.",
      ],
      sections: [
        {
          title: "What the video shows",
          items: [
            "Quick tuning of levers (price, volume, CAC, churn, capacity).",
            "Side-by-side view for base, optimistic and conservative scenarios.",
            "Risk analysis with result distributions and confidence intervals.",
          ],
        },
        {
          title: "Typical use cases",
          items: [
            "Go-to-market and product launch planning.",
            "Investment assessment and payback analysis.",
            "Quarterly target reviews with leadership teams.",
          ],
        },
      ],
      video: {
        src: "/Simulação Estratégica de Decisão Empresarial.mp4",
        poster: "/Thmbnail/Thumbnail - English/Business Decision Simulator.png",
        caption: "Walkthrough of scenarios, risk and KPI dashboards.",
      },
    },
    context:
      "Leaders needed to compare strategic decisions without fragile spreadsheets, seeing financial impact and risk in minutes.",
    problem: [
      "Hard to compare multiple scenarios while accounting for uncertainty.",
      "No clear visuals to communicate risk to the board.",
      "Dependence on complex, unauditable spreadsheets.",
      "Slow iterations when testing business hypotheses and trade-offs.",
    ],
    dataUsed: [
      "Assumptions for price, volume, CAC, churn, variable and fixed costs.",
      "Demand curves and elasticity per segment.",
      "Risk distributions for revenue and cost drivers (Monte Carlo).",
      "Financial KPIs: margin, payback, ROI and projected cash flow.",
    ],
    solution: [
      "Parameterized financial model with Monte Carlo simulation for uncertainty.",
      "Streamlit dashboard with interactive controls and scenario comparison.",
      "Plotly visuals (tornado, waterfall, violin) for sensitivity and risk.",
      "Scenario and parameter export to CSV/PDF for sharing.",
    ],
    features: [
      "Base, optimistic and conservative scenarios side by side.",
      "Stochastic simulation with thousands of runs and confidence intervals.",
      "Sensitivity charts to surface the most critical variables.",
      "Downloadable assumptions and results for reproducibility.",
    ],
    highlights: [
      "Data-driven decisions without fragile spreadsheet macros.",
      "Rapid hypothesis exploration with immediate visual feedback.",
      "Clear risk communication for executives and investors.",
      "Ready to connect to BI or a data warehouse.",
    ],
    demonstrates: [
      "Financial modeling and Monte Carlo simulation in Python.",
      "Business-focused UX built with Streamlit.",
      "Advanced Plotly visuals for sensitivity and risk.",
      "Good practices for caching and scenario parametrization.",
    ],
    techSummary:
      "Python with Streamlit, Pandas, NumPy and Plotly for an interactive financial simulator with Monte Carlo and sensitivity analysis.",
    conclusion: [
      "Delivered a simulator that reacts instantly to new assumptions.",
      "Reduced spreadsheet dependency by centralizing logic and visuals.",
      "Left hooks for integration with corporate data pipelines.",
    ],
    howToRun: [
      "Requirements: Python 3.10+.",
      "Clone the repository and create a virtualenv.",
      "Install dependencies: pip install -r requirements.txt.",
      "Run: streamlit run app.py.",
      "Tune assumptions in the UI and export scenarios as needed.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Business Decision Simulator.png",
        alt: "Business Decision Simulator cover",
      },
      {
        src: "/Simulação Estratégica de Decisão Empresarial.mp4",
        alt: "Business Decision Simulator demo",
        type: "video",
      },
    ],
    seo: {
      title: "Business Decision Simulator | Financial scenarios with Monte Carlo",
      description:
        "Interactive Python/Streamlit simulator to compare strategies, run Monte Carlo and communicate risk and financial impact.",
    },
  },
  {
    slug: "dashboard-vendas-power-bi",
    title: "Sales Dashboard - Power BI",
    headline:
      "Sales Dashboard | Power BI with KPIs, targets and regional insights",
    tagline:
      "Power BI dashboard to track sales performance, targets, and product mix with dynamic filters.",
    role: "Data Analyst",
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Dashboard-de-Vendas---Power-BI.git",
    demoUrl: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
    demo: {
      kind: "video",
      src: "/projects/dashboard-vendas-power-bi/demo.mp4",
      poster: "/Thmbnail/Thumbnail - English/Sales Dashboard - Power BI.png",
      caption: "Dashboard overview and main filters.",
    },
    intro: {
      title: "Sales Dashboard in Power BI",
      paragraphs: [
        "Dashboard focused on tracking revenue, volume, average ticket, and targets by period, channel, and region.",
        "Combines data modeling, DAX measures, and decision-focused visuals.",
      ],
      sections: [
        {
          title: "What the dashboard delivers",
          items: [
            "Sales KPIs with variance vs. target and previous period.",
            "Breakdowns by region, channel, and product line.",
            "Product and customer rankings with dynamic filters.",
          ],
        },
        {
          title: "Supporting material",
          footer: ["PDF with dashboard overview and main screens."],
          link: {
            label: "Open dashboard PDF",
            href: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
          },
        },
      ],
      video: {
        src: "/projects/dashboard-vendas-power-bi/demo.mp4",
        poster: "/Thmbnail/Thumbnail - English/Sales Dashboard - Power BI.png",
        caption: "KPIs, filters, and quick performance reading.",
      },
    },
    context:
      "The commercial team needed a single view of sales KPIs with fast filters for regions, channels, and products.",
    problem: [
      "Sales data spread across spreadsheets with inconsistent metrics.",
      "Hard to track targets and period-over-period variations.",
      "Low visibility into product mix and channel performance.",
      "High time spent preparing executive reports.",
    ],
    dataUsed: [
      "Orders and sales line items.",
      "Calendar dimension for seasonal analysis.",
      "Commercial targets by period and region.",
      "Product, channel, and location dimensions.",
    ],
    solution: [
      "Star schema with sales fact and product, channel, region, and calendar dimensions.",
      "Data cleansing and shaping in Power Query.",
      "DAX measures for KPIs, variances, and contribution analysis.",
      "Pages for executive overview and operational detail.",
    ],
    features: [
      "Revenue, volume, average ticket, and margin KPIs.",
      "Regional, channel, and product views with interactive filters.",
      "Rankings and share-of-total indicators.",
      "Target vs. actual tracking by period.",
    ],
    highlights: [
      "Executive-ready dashboard for weekly reviews.",
      "Reduced time to consolidate reporting.",
      "Scalable structure for new dimensions and targets.",
      "Fast performance reading focused on decision-making.",
    ],
    demonstrates: [
      "Data modeling in Power BI.",
      "DAX measures for KPIs and variance analysis.",
      "Decision-oriented dashboard design.",
      "Data preparation with Power Query.",
    ],
    techSummary:
      "Power BI with Power Query for ETL and DAX for commercial KPIs and indicators.",
    conclusion: [
      "Delivered a sales dashboard with clear KPIs and intuitive filters.",
      "Improved target tracking and seasonal trend analysis.",
      "Prepared a base for growth with new data sources.",
    ],
    howToRun: [
      "Clone the repository.",
      "Open Dashboard.pbit in Power BI Desktop.",
      "Point the data source to Sample data.xlsx.",
      "Refresh and use the dashboard filters.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Sales Dashboard - Power BI.png",
        alt: "Sales Dashboard cover",
      },
      {
        src: "/projects/dashboard-vendas-power-bi/demo.mp4",
        alt: "Sales Dashboard demo video",
        type: "video",
      },
    ],
    seo: {
      title: "Sales Dashboard | Power BI with KPIs and targets",
      description:
        "Power BI dashboard to monitor sales, targets, product mix, and regional performance with KPIs and dynamic filters.",
    },
  },
  {
    slug: "deteccao-de-anomalias-operacionais",
    title: "Operational Anomaly Detection",
    headline:
      "Anomaly Detection | Real-time operational radar",
    tagline:
      "System to detect operational deviations with real-time alerts and an interactive dashboard.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "Isolation Forest", "TimescaleDB", "React", "D3"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Deteccao-de-Anomalias-Operacionais.git",
    demo: {
      kind: "video",
      src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
      poster: "/Thmbnail/Thumbnail - English/Operational Anomaly Detection.png",
      caption: "Radar with anomaly alerts and metric history.",
    },
    intro: {
      title: "Operational Anomaly Radar (MVP)",
      paragraphs: [
        "Operational monitoring platform with automatic anomaly detection for time series metrics.",
        "Combines API/WS ingestion, detection models, and an interactive dashboard to prioritize critical events.",
      ],
      sections: [
        {
          title: "What the system delivers",
          items: [
            "Real-time alerts for out-of-pattern metrics.",
            "Time-series history with filters by source and metric.",
            "Interactive dashboard for fast investigation.",
          ],
        },
        {
          title: "Architecture snapshot",
          items: [
            "FastAPI with REST/WS routes for ingestion and alerts.",
            "TimescaleDB for time-series storage.",
            "React + D3 front-end for radar and timeline.",
          ],
        },
      ],
      video: {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        poster: "/Thmbnail/Thumbnail - English/Operational Anomaly Detection.png",
        caption: "Automatic detection, alerts, and investigation in one view.",
      },
    },
    context:
      "Operational teams needed fast anomaly detection without manually scanning multiple dashboards.",
    problem: [
      "Alerts were noticed late during spikes or drops.",
      "Critical metrics were scattered across views.",
      "Low traceability of anomalous events over time.",
      "Manual retraining slowed down operations.",
    ],
    dataUsed: [
      "Time series of operational metrics.",
      "Ingestion events via API and WebSocket.",
      "Source, tags, and unit metadata.",
      "Historical data for model training.",
    ],
    solution: [
      "FastAPI endpoints for ingestion, history, and WS alerts.",
      "Isolation Forest detection with optional hybrid strategy.",
      "TimescaleDB for efficient time-series retention.",
      "React + D3 front-end for radar and exploratory analysis.",
    ],
    features: [
      "Real-time WebSocket alerts.",
      "Dashboard with filters by source, metric, and time range.",
      "On-demand retraining via /train endpoint.",
      "Health checks and metrics for observability.",
    ],
    highlights: [
      "Faster incident detection and response.",
      "Layered architecture with clear domain/services split.",
      "Ready for Kafka and external pipeline integrations.",
      "Extensible base for new models and metrics.",
    ],
    demonstrates: [
      "Time-series anomaly detection.",
      "REST/WS APIs for real-time data.",
      "Time-series modeling with TimescaleDB.",
      "Advanced visualization with React and D3.",
    ],
    techSummary:
      "FastAPI + Isolation Forest with TimescaleDB and a React/D3 dashboard for real-time operational monitoring.",
    conclusion: [
      "Delivered a solid base for anomaly alerting and investigation.",
      "Integrated real-time ingestion with automatic detection.",
      "Prepared the system for observability and model evolution.",
    ],
    howToRun: [
      "Clone the repository.",
      "Copy backend/.env.example to backend/.env.",
      "Run: docker compose up --build.",
      "Open the front-end and backend at http://localhost:3000 and http://localhost:8000.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Operational Anomaly Detection.png",
        alt: "Operational Anomaly Detection cover",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.gif",
        alt: "Operational Anomaly Detection GIF demo",
        type: "gif",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        alt: "Operational Anomaly Detection demo video",
        type: "video",
      },
    ],
    seo: {
      title: "Anomaly Detection | Real-time operational monitoring",
      description:
        "Platform with FastAPI, TimescaleDB, and React/D3 to detect anomalies in operational metrics and send real-time alerts.",
    },
  },
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    headline: "Touchless Web Gesture Interface | Computer vision for dashboards",
    tagline: "Touchless web interface with computer vision to navigate dashboards and data apps.",
    role: "Analyst/Developer",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
    demo: {
      kind: "video",
      src: "/touchless-web-gesture-interface.mp4",
      poster: "/Thmbnail/Thumbnail - English/Touchless Web Gesture Interface.png",
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
            label: "github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
            href: "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
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
        poster: "/Thmbnail/Thumbnail - English/Touchless Web Gesture Interface.png",
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
        src: "/Thmbnail/Thumbnail - English/Touchless Web Gesture Interface.png",
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
    title: "AI Chatbot API",
    headline: "AI Chatbot API | Support backend with context and logs",
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
        src: "/Thmbnail/Thumbnail - English/Chatbot IA API.png",
        alt: "Cover of AI Chatbot API",
      },
      {
        src: "/Chatbot.mp4",
        alt: "AI Chatbot API demo",
        type: "video",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.webp",
        alt: "Conversation flow of AI Chatbot API",
      },
    ],
    seo: {
      title: "AI Chatbot API | REST API with context, logs, and data",
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
      poster: "/Thmbnail/Thumbnail - English/Self-Drive Car.png",
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
        src: "/Thmbnail/Thumbnail - English/Self-Drive Car.png",
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
        src: "/Thmbnail/Thumbnail - English/Library API Advanced.png",
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
      poster: "/Thmbnail/Thumbnail - English/Driver Monitoring System.png",
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
        src: "/Thmbnail/Thumbnail - English/Driver Monitoring System.png",
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
    slug: "flappy-bird-gesture-control",
    title: "Flappy Bird com Gestos",
    headline: "Flappy Bird com Gestos | Gesture control with MediaPipe and Pygame",
    tagline:
      "Flappy Bird variant controlled by webcam, combining MediaPipe Hands, OpenCV, and Pygame.",
    role: "Developer",
    stack: ["Python", "Pygame", "OpenCV", "MediaPipe", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/Flappy-Bird",
    demo: {
      kind: "video",
      src: "/Flappy-Bird.mp4",
      poster: "/Thmbnail/Thumbnail - English/Flappy Bird.png",
      caption: "Gameplay of Flappy Bird com Gestos using webcam-based gestures.",
    },
    context:
      "Project built to explore hands-free gameplay by mapping hand gestures to the classic Flappy Bird controls.",
    problem: [
      "Enable playing without keyboard or mouse, only with gestures.",
      "Detect the hand reliably in real time with a regular webcam.",
      "Keep the physics and flow of the original Flappy Bird intact.",
      "Expose tuning for sensitivity and debug to use in demos.",
    ],
    dataUsed: [
      "Webcam frames captured with OpenCV.",
      "21 hand landmarks detected by MediaPipe.",
      "Hand state (open/closed) and height in the frame.",
      "Score, speed, and pipe spacing values.",
    ],
    solution: [
      "OpenCV + MediaPipe pipeline to track the hand and smooth landmarks with a temporal filter.",
      "Gesture mapping in discrete (open/close) and continuous (hand height) modes to control the bird.",
      "Pygame game loop with simple physics, collision checks, and HUD for FPS/confidence.",
      "Centralized config.py to tweak gravity, jump force, and sensitivity.",
    ],
    features: [
      "Two gesture control modes (discrete and continuous).",
      "Score and high score with fast restart.",
      "Live mode switching plus shortcuts for debug, pause, and reset.",
      "Optional camera preview with landmarks for calibration.",
    ],
    highlights: [
      "Hands-free experience using only the webcam.",
      "Smooth movement thanks to temporal smoothing on landmarks.",
      "Modular architecture separating tracking, mapping, and game logic.",
      "Didactic code ready for demos, workshops, and experiments.",
    ],
    demonstrates: [
      "Applied computer vision for gameplay.",
      "Real-time OpenCV + MediaPipe + Pygame integration.",
      "Gesture mapping into discrete and continuous commands.",
      "Organizing a 2D Python game with clarity.",
    ],
    techSummary:
      "Python pipeline using OpenCV for capture, MediaPipe Hands for detection, and Pygame to render Flappy Bird controlled by gestures.",
    conclusion: [
      "Validated gesture control without dedicated hardware.",
      "Kept classic Flappy Bird mechanics with responsive feel.",
      "Left the project configurable for new gestures, themes, and physics tuning.",
    ],
    howToRun: [
      "Prerequisites: Python 3.8+ and a functional webcam.",
      "Clone the repository and create a virtual environment.",
      "Install dependencies: pip install -r requirements.txt",
      "Run: python main.py",
      "Use M to switch control mode and D to enable debug.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Flappy Bird.png",
        alt: "Cover of Flappy Bird com Gestos",
      },
      {
        src: "/Flappy-Bird.mp4",
        alt: "Demo of Flappy Bird com Gestos",
        type: "video",
      },
    ],
    seo: {
      title: "Flappy Bird com Gestos | Gesture Control with MediaPipe, OpenCV, and Pygame",
      description:
        "Webcam-controlled Flappy Bird using MediaPipe Hands, OpenCV, and Pygame, with discrete and continuous gesture modes.",
    },
  },
  {
    slug: "subway-surf",
    title: "Subway Surfers",
    headline: "Subway Surfers | 2D game in HTML5 Canvas",
    tagline:
      "Game inspired by Subway Surfers built to practice game logic and development.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Subway-Surf",
    demo: {
      kind: "video",
      src: "/Subway Surf.mp4",
      poster: "/Thmbnail/Thumbnail - English/Subway Surfers.png",
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
        src: "/Thmbnail/Thumbnail - English/Subway Surfers.png",
        alt: "Cover of Subway Surfers",
      },
      {
        src: "/Subway Surf.mp4",
        alt: "Subway Surfers gameplay demo",
        type: "video",
      },
    ],
  },
  {
    slug: "slingshot",
    title: "Slingshot",
    headline: "Slingshot | Bubble shooter with ricochet and tactical hints",
    tagline:
      "Canvas bubble shooter with touch/mouse aiming, wall ricochet, and local shot suggestions.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS", "Hammer.js"],
    repoUrl: "https://github.com/matheussiqueira-dev/Slingshot.git",
    demo: {
      kind: "video",
      src: "/projects/slingshot/demo.mp4",
      poster: "/Thmbnail/Thumbnail - English/Slingshot.png",
      caption: "Touch aim, ricochet shots, and real-time tactical hints.",
    },
    context:
      "The goal was to build a lightweight browser bubble shooter with smooth controls on desktop and mobile.",
    problem: [
      "Deliver precise aiming for mouse and touch.",
      "Enable advanced shots with wall ricochet.",
      "Suggest strategic shots without relying on a backend.",
      "Keep Canvas performance stable.",
    ],
    dataUsed: [
      "Mouse and touch input for aim and firing.",
      "Hex grid and bubble colors for cluster detection.",
      "Collision and wall reflection calculations.",
      "Local high score stored in the browser.",
    ],
    solution: [
      "HTML5 Canvas render loop with continuous updates.",
      "Responsive aiming system for mouse and touch via Hammer.js.",
      "Local calculation of shot hints based on visible clusters.",
      "High-score persistence via local storage.",
    ],
    features: [
      "Smooth aim with touch or mouse control.",
      "Side-wall ricochet for advanced shots.",
      "Locally computed tactical hints.",
      "Hex clusters with consistent color system.",
      "High score saved in the browser.",
      "Responsive, minimalist interface.",
    ],
    highlights: [
      "Instant gameplay without installation or backend.",
      "Strategic suggestions in real time.",
      "Solid base for levels, power-ups, and new modes.",
      "Consistent experience across desktop and mobile.",
    ],
    demonstrates: [
      "Game loop and simple physics in HTML5 Canvas.",
      "Touch gesture support with Hammer.js.",
      "Cluster logic and ricochet for a bubble shooter.",
      "Responsive UI with performance focus.",
    ],
    techSummary:
      "JavaScript game on HTML5 Canvas with Hammer.js for gestures and CSS for responsive UI.",
    conclusion: [
      "Delivered a smooth bubble shooter with local tactical hints.",
      "Implemented touch/mouse controls with consistent ricochet.",
      "Left a base ready for new levels and mechanics.",
    ],
    howToRun: [
      "Clone the repository.",
      "Open index.html in a browser.",
      "Optional: serve with python -m http.server 8000.",
      "Open http://localhost:8000 and play.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Slingshot.png",
        alt: "Slingshot cover",
      },
      {
        src: "/projects/slingshot/demo.gif",
        alt: "Slingshot demo GIF",
        type: "gif",
      },
      {
        src: "/projects/slingshot/demo.mp4",
        alt: "Slingshot gameplay demo",
        type: "video",
      },
    ],
    seo: {
      title: "Slingshot | Bubble shooter with touch aim and ricochet",
      description:
        "HTML5 Canvas bubble shooter with touch/mouse aiming, wall ricochet, and locally computed tactical shot hints.",
    },
  },
  {
    slug: "fruit-ninja",
    title: "Fruit Ninja",
    headline: "Fruit Ninja | Gesture slicing with real-time hand tracking",
    tagline:
      "Gesture slicing experience using real-time hand tracking through the camera.",
    role: "Developer",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "MediaPipe Tasks Vision",
      "HTML5 Canvas",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/matheussiqueira-dev/Clone-Fruit-Ninja.git",
    context:
      "The goal was to build a browser Fruit Ninja with gesture control and consistent performance across frame rates.",
    problem: [
      "Ensure smooth hand tracking without sending data to servers.",
      "Keep physics and collisions consistent at variable FPS.",
      "Balance visual effects with Canvas performance.",
      "Provide performance feedback without distracting the player.",
    ],
    dataUsed: [
      "Camera frames for hand detection.",
      "Index fingertip landmarks for the virtual blade.",
      "Delta time to normalize physics and collisions.",
      "Score, combos, and bomb events.",
      "Sensei messages based on performance.",
    ],
    solution: [
      "Local hand tracking with MediaPipe Tasks Vision in the browser.",
      "Delta-time game loop for stable physics.",
      "Optimized Canvas rendering with controlled particles and trails.",
      "HUD with contextual sensei feedback.",
    ],
    features: [
      "Gesture slicing using the index finger as the blade.",
      "Score and combos with bomb penalties.",
      "Real-time sensei messages.",
      "Local processing with no data upload.",
      "Optimized loop with reduced work outside the active state.",
    ],
    highlights: [
      "Smooth experience even at different FPS.",
      "Low-latency gesture control.",
      "Clean visuals with balanced effects.",
      "Base ready for new modes and challenges.",
    ],
    demonstrates: [
      "Computer vision integration in web apps.",
      "React + Canvas for real-time gameplay.",
      "Loop optimization and delta-time physics.",
      "Game feedback and HUD design.",
    ],
    techSummary:
      "React + TypeScript + Vite with MediaPipe Tasks Vision and HTML5 Canvas for real-time gesture slicing gameplay.",
    conclusion: [
      "Delivered a playable clone with stable hand tracking.",
      "Kept performance consistent with delta time and optimized loop.",
      "Left a base ready for levels and new mechanics.",
    ],
    howToRun: [
      "Clone the repository.",
      "Install dependencies: npm install.",
      "Start the dev server: npm run dev.",
      "Open the browser and allow camera access.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Fruit Ninja.png",
        alt: "Fruit Ninja cover",
      },
    ],
    seo: {
      title: "Fruit Ninja | Gesture slicing with MediaPipe in the browser",
      description:
        "Fruit Ninja clone built with React and TypeScript, using MediaPipe Tasks Vision for hand tracking and HTML5 Canvas gameplay.",
    },
  },
  {
    slug: "neon-runner-cyber-hand",
    title: "Neon Runner: Cyber Hand",
    headline: "Neon Runner | Cyberpunk infinite runner with gesture control",
    tagline:
      "Cyberpunk infinite runner with real-time hand visualization and neon atmosphere.",
    role: "Developer",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "@react-three/fiber",
      "Zustand",
      "MediaPipe Tasks Vision",
    ],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Neon-Runner-Cyber-Hand.git",
    demo: {
      kind: "video",
      src: "/projects/neon-runner-cyber-hand/demo.mp4",
      poster: "/Thmbnail/Thumbnail - English/Neon Runner Cyber Hand.png",
      caption: "Neon runner with gesture control and cyber hand overlay.",
    },
    context:
      "Author project to build a gesture-controlled 3D runner with fast response and a neon aesthetic.",
    problem: [
      "Translate gestures (jump, slide, left/right) into reliable commands.",
      "Render a 3D scene with lighting and post-effects without performance loss.",
      "Visualize the hand as a cybernetic skeleton in real time.",
      "Keep the HUD readable and responsive across screen sizes.",
    ],
    dataUsed: [
      "Camera frames and MediaPipe Tasks Vision landmarks.",
      "Hand position for gesture detection and movement.",
      "Game state (speed, obstacles, collisions).",
      "HUD events and gameplay feedback.",
    ],
    solution: [
      "Local hand detection with MediaPipe Tasks Vision in the browser.",
      "Gesture service mapping jump, slide, and lateral movement.",
      "3D scene with Three.js + R3F and stylized lighting.",
      "Zustand for global state and reactive HUD.",
    ],
    features: [
      "Gesture controls (jump, slide, left/right).",
      "Real-time cyber hand skeleton visualization.",
      "3D scene with neon lighting and post-effects.",
      "Responsive HUD overlay.",
      "Local processing with no data upload.",
    ],
    highlights: [
      "Immersive cyberpunk feel.",
      "Low-latency gesture control.",
      "Modular architecture with dedicated services and store.",
      "Base ready for new levels and challenges.",
    ],
    demonstrates: [
      "MediaPipe + React integration for real-time control.",
      "Three.js with R3F for web games.",
      "State management with Zustand.",
      "Gesture interaction and HUD design.",
    ],
    techSummary:
      "React + TypeScript + Vite with Three.js/R3F, Zustand, and MediaPipe Tasks Vision for a gesture-controlled 3D runner.",
    conclusion: [
      "Delivered a playable cyberpunk runner with gesture control.",
      "Kept stylized 3D visuals with stable performance.",
      "Built an extensible base for new mechanics.",
    ],
    howToRun: [
      "Prerequisites: Node.js 18+.",
      "Clone the repository.",
      "Install dependencies: npm install.",
      "Optional: set APP_API_KEY in .env.local.",
      "Download the model and place it in public/models/hand_landmarker.task.",
      "Run: npm run dev.",
      "Open the browser and allow camera access.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Neon Runner Cyber Hand.png",
        alt: "Neon Runner: Cyber Hand cover",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.gif",
        alt: "Neon Runner: Cyber Hand demo",
        type: "gif",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.mp4",
        alt: "Neon Runner: Cyber Hand gameplay",
        type: "video",
      },
    ],
    seo: {
      title: "Neon Runner | 3D runner with gesture control",
      description:
        "Cyberpunk infinite runner built with React and Three.js using MediaPipe Tasks Vision for hand tracking and a responsive HUD.",
    },
  },
  {
    slug: "dino-chrome",
    title: "Dino Chrome",
    headline: "Dino Chrome | 2D game in HTML5 Canvas",
    tagline:
      "Clone of the Chrome Dino game to practice collision, scoring, and progression.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Dino-Chrome.git",
    demo: {
      kind: "video",
      src: "/projects/dino-chrome/demo.mp4",
      poster: "/Thmbnail/Thumbnail - English/Dino Chrome.png",
      caption: "Gameplay of the Chrome Dino clone.",
    },
    context:
      "Project created to practice game loop, collision, and character control in a simple 2D runner.",
    problem: [
      "Build a stable browser-based game loop.",
      "Detect collisions between the dino and obstacles in real time.",
      "Scale difficulty without breaking gameplay.",
      "Organize game states for quick restarts.",
    ],
    dataUsed: [
      "Keyboard input for jump and movement.",
      "Game state (speed, score, collisions).",
      "Timers for obstacle spawn and reset.",
      "Sprites and on-screen positions.",
    ],
    solution: [
      "Canvas rendering with a continuous loop.",
      "Simple collision system and obstacle reset.",
      "Gradual speed increase for challenge.",
      "Separation between game logic and UI.",
    ],
    features: [
      "Responsive jump controls.",
      "Dynamic obstacles with progressive difficulty.",
      "Real-time scoring.",
      "Quick restart flow.",
    ],
    highlights: [
      "Lightweight and responsive browser gameplay.",
      "Consistent collision logic.",
      "Clear base for evolving mechanics and assets.",
      "Faithful recreation of the classic Dino experience.",
    ],
    demonstrates: [
      "Game loop and Canvas rendering.",
      "Collision logic and game state handling.",
      "Modular front-end structure.",
      "Rapid 2D game prototyping.",
    ],
    techSummary:
      "JavaScript and HTML5 Canvas for rendering and logic, with CSS for layout.",
    conclusion: [
      "Consolidated JS game loop fundamentals.",
      "Implemented collisions and real-time scoring.",
      "Left a solid base for future levels.",
    ],
    howToRun: [
      "Clone the repository.",
      "Open index.html in a browser.",
      "Use the keyboard to control the character.",
      "Track the score and avoid obstacles.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Dino Chrome.png",
        alt: "Cover of Dino Chrome",
      },
      {
        src: "/projects/dino-chrome/demo.mp4",
        alt: "Dino Chrome gameplay demo",
        type: "video",
      },
    ],
    seo: {
      title: "Dino Chrome | Chrome Dino clone in Canvas",
      description:
        "Chrome Dino clone built with JavaScript and HTML5 Canvas featuring game loop, collision, and real-time scoring.",
    },
  },
  {
    slug: "gestor-de-notas",
    title: "Notes Manager",
    headline: "Notes Manager | Notes management app",
    tagline:
      "Notes management app to create, edit, and organize information quickly.",
    role: "Developer",
    stack: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    repoUrl: "https://github.com/matheussiqueira-dev/Gestor_de_Notas",
    demo: {
      kind: "video",
      src: "/Gestor de Notas.mp4",
      poster: "/Thmbnail/Thumbnail - English/Gestor de Notas.png",
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
        src: "/Thmbnail/Thumbnail - English/Gestor de Notas.png",
        alt: "Cover of Notes Manager",
      },
      {
        src: "/Gestor de Notas.mp4",
        alt: "Notes Manager demo",
        type: "video",
      },
    ],
  },
  {
    slug: "hand-gesture-recognition-realtime",
    title: "Real-Time Hand Gesture Recognition",
    headline:
      "Gesture Recognition | Computer Vision with Python and MediaPipe",
    tagline:
      "Real-time computer vision system to detect hands and count fingers using webcam.",
    role: "Developer",
    stack: ["Python", "OpenCV", "MediaPipe"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
    demo: {
      kind: "video",
      src: "/Hands Gesture.mp4",
      poster: "/Thmbnail/Thumbnail - English/Real-Time Hand Gesture Recognition.png",
      caption: "Real-time gesture recognition demonstration.",
    },
    intro: {
      title: "Real-Time Hand Gesture Recognition System",
      paragraphs: [
        "This project implements a real-time computer vision system to detect hands and count fingers using the computer's webcam.",
        "Built with Python, OpenCV, and MediaPipe, the system can detect hands, extract landmarks, and identify how many fingers are raised (0 to 5) with high accuracy.",
        "More than a proof of concept, this project demonstrates skills in computer vision, real-time video processing, and machine learning library integration.",
      ],
      sections: [
        {
          title: "How Does It Work?",
          paragraphs: [
            "The system follows a well-defined processing flow to detect and analyze hand gestures:",
          ],
          items: [
            "Video Capture: OpenCV captures continuous frames from the webcam.",
            "Preprocessing: Image mirroring and BGR to RGB conversion.",
            "Detection: MediaPipe model processes the image and returns 21 landmarks per hand.",
            "Finger Counting: Heuristics based on vertical (fingers) and horizontal (thumb) position.",
          ],
        },
        {
          title: "Finger Counting Logic",
          paragraphs: [
            "The counting uses a heuristic approach based on landmark coordinates:",
          ],
          items: [
            "4 Main Fingers: Checks the fingertip height relative to the middle joint.",
            "Thumb: Checks the horizontal position of the tip relative to the base joint.",
            "Left/right hand detection to adjust thumb logic.",
          ],
        },
        {
          title: "Technologies Used",
          paragraphs: [
            "The project was built with a stack focused on computer vision:",
          ],
          subSections: [
            {
              title: "Video Processing",
              items: [
                "OpenCV for frame capture and manipulation",
                "Real-time processing with low latency",
                "Landmark rendering and visual feedback",
              ],
            },
            {
              title: "Machine Learning",
              items: [
                "MediaPipe Hands for hand detection and tracking",
                "Pre-trained model with 21 landmarks per hand",
                "Support for detecting up to 2 hands simultaneously",
              ],
            },
          ],
        },
        {
          title: "Possible Future Improvements",
          paragraphs: [
            "The project was structured to allow evolution and new features:",
          ],
          items: [
            "Specific gesture recognition (peace, rock, closed fist, etc.)",
            "PC control using pyautogui (volume, mouse, shortcuts)",
            "GUI with Streamlit or PyQt",
            "Refined counting for multiple hands simultaneously",
          ],
        },
        {
          title: "Source Code",
          paragraphs: [
            "The complete source code is available on GitHub, allowing detailed analysis of the implementation and technical decisions.",
          ],
          footer: ["Repository:"],
          link: {
            label: "github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
            href: "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
          },
        },
      ],
    },
    context:
      "Educational and portfolio project to demonstrate skills in computer vision and real-time video processing using Python.",
    problem: [
      "Need to detect hand gestures without specialized hardware.",
      "Accurate finger counting for natural interface applications.",
      "Real-time processing with low latency.",
    ],
    dataUsed: [
      "Real-time video frames from webcam.",
      "21 hand landmarks detected by MediaPipe.",
      "Normalized X, Y coordinates for gesture analysis.",
    ],
    solution: [
      "Computer vision pipeline with OpenCV for video capture.",
      "Integration with MediaPipe Hands for landmark detection.",
      "Finger counting heuristics based on landmark positions.",
      "Real-time visual feedback with hand skeleton drawing.",
    ],
    features: [
      "Real-time hand detection via webcam.",
      "Accurate counting of raised fingers (0 to 5).",
      "Support for detecting up to 2 hands simultaneously.",
      "Image mirroring for natural interaction.",
      "Hand skeleton (landmarks) visualization.",
    ],
    highlights: [
      "High accuracy in finger counting.",
      "Low latency for real-time processing.",
      "Clean and well-documented code.",
      "Solid foundation for natural interface projects.",
    ],
    demonstrates: [
      "Computer vision with OpenCV and MediaPipe.",
      "Real-time video processing with Python.",
      "Heuristics for gesture analysis.",
      "Interactive application development.",
    ],
    techSummary:
      "Python with OpenCV for video capture and MediaPipe for landmark detection, with finger counting heuristics and real-time visual feedback.",
    conclusion: [
      "Functional project demonstrating applied computer vision.",
      "Extensible base for PC control and natural interfaces.",
      "Developed for educational and portfolio purposes.",
    ],
    howToRun: [
      "Prerequisites: Python 3.7+, functional webcam.",
      "Install dependencies: pip install opencv-python mediapipe",
      "Run: python hand_gestures.py",
      "Press 'q' to close the program.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Real-Time Hand Gesture Recognition.png",
        alt: "Hand gesture recognition project cover",
      },
      {
        src: "/Hands Gesture.gif",
        alt: "Real-time gesture recognition GIF demo",
        type: "gif",
      },
      {
        src: "/Hands Gesture.mp4",
        alt: "Real-time gesture recognition demonstration",
        type: "video",
      },
    ],
    seo: {
      title:
        "Real-Time Hand Gesture Recognition | Python, OpenCV and MediaPipe",
      description:
        "Real-time computer vision system to detect hands and count fingers using Python, OpenCV, and MediaPipe. Educational project with high accuracy.",
    },
  },
  {
    slug: "detector-de-stress",
    title: "Stress Detector",
    headline: "Stress Detector | Real-time physiological score via webcam",
    tagline:
      "Modular pipeline that estimates stress level from a webcam with HUD, REST/WS broadcasting and dashboard.",
    role: "Developer/Architect",
    stack: ["Python", "OpenCV", "MediaPipe", "Streamlit", "WebSockets", "Machine Learning"],
    repoUrl: "https://github.com/matheussiqueira-dev/Detector-de-Stress",
    demo: {
      kind: "video",
      src: "/Detector de Stress.mp4",
      poster: "/Thmbnail/Thumbnail - English/Stress Detector.png",
      caption: "HUD, baseline and broadcasting in real time.",
    },
    intro: {
      title: "StressCam: continuous stress estimation with computer vision",
      paragraphs: [
        "Continuous loop pipeline to estimate physiological stress without dedicated sensors, using only a webcam and light normalization.",
        "Delivers smoothed score, trend and interpretable messages via OpenCV HUD, REST /score and a 5 Hz WebSocket feed.",
      ],
      sections: [
        {
          title: "How it works",
          items: [
            "Optional light equalization and mirroring before processing.",
            "Face detection with MediaPipe plus EAR, facial tension and pupil area extraction.",
            "Temporal buffers + EMA to smooth noise and build a person-specific baseline.",
          ],
        },
        {
          title: "Data delivery",
          items: [
            "HUD with 30s rolling history, alerts and Portuguese guidance.",
            "Optional REST/WS server to plug into external dashboards.",
            "Streamlit dashboard for quick score visualization and tuning.",
          ],
        },
      ],
      video: {
        src: "/Detector de Stress.mp4",
        poster: "/Thmbnail/Thumbnail - English/Stress Detector.png",
        caption: "Watch the video demo: score, trend and alerts in real time.",
      },
    },
    context:
      "Monitor stress signals without biometric sensors, keeping cost low and enabling easy dashboard integration or product proofs of concept.",
    problem: [
      "Provide a continuous stress score using only a webcam, no wearables.",
      "Reduce lighting noise and head movement in real time.",
      "Calibrate a personal baseline without manual intervention.",
      "Expose the score through APIs for dashboards and integrations.",
    ],
    dataUsed: [
      "Normalized webcam frames (optional mirroring and light equalization).",
      "Facial landmarks (MediaPipe) for EAR, geometric tension and pupil area.",
      "Temporal buffers with EMA to smooth score and trend.",
      "HUD events (messages, low-light/centering warnings).",
    ],
    solution: [
      "Video capture with OpenCV and CLAHE light equalization.",
      "EAR, facial tension and pupil extraction; vectorization via pack_features.",
      "Person-level baseline plus light regression (SGD/RandomForest) with 0-1 clipping.",
      "Score streaming: OpenCV HUD + REST (/score) + 5 Hz WebSocket + Streamlit dashboard.",
    ],
    features: [
      "Demo mode with high sensitivity and auto-tuned graphs.",
      "Guided baseline with HUD prompts during the first seconds.",
      "Quick shortcuts: save frames, toggle demo mode, quit with 'q'.",
      "Optional REST/WS server to expose score and trend in real time.",
    ],
    highlights: [
      "Calibratable, low-latency computer-vision pipeline.",
      "Multi-channel delivery (HUD, REST, WebSocket, dashboard).",
      "Temporal feature engineering to reduce noise and false positives.",
      "Ready to connect to dashboards or wellness analytics.",
    ],
    demonstrates: [
      "Streaming computer vision with MediaPipe + OpenCV.",
      "Feature engineering and temporal smoothing with EMA and sliding buffers.",
      "Real-time APIs via http.server and websockets for data products.",
      "Continuous monitoring UX with interpretable HUD and demo mode.",
    ],
    techSummary:
      "Python with OpenCV and MediaPipe for facial tracking, light regression (SGD/RandomForest) with personalized baseline, streaming via http.server + websockets and a Streamlit dashboard.",
    conclusion: [
      "Built a full, calibratable and observable pipeline for real-time stress scoring.",
      "Added multi-channel delivery (HUD, REST, WS) to simplify dashboards and POCs.",
      "Left clear hooks for model evolution, new features and metrics.",
    ],
    howToRun: [
      "Use Python 3.10 when possible.",
      "Setup: py -3.10 -m venv .venv && .venv\\Scripts\\activate.",
      "Install deps: pip install -r requirements.txt.",
      "Run: python -m stresscam.app (q to quit, d for demo mode).",
      "Optional dashboard: streamlit run stresscam/streamlit_app.py.",
      "For external API: enable the server and call GET /score or ws://localhost:8765/.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - English/Stress Detector.png",
        alt: "Stress Detector cover",
      },
      {
        src: "/Detector de Stress.mp4",
        alt: "Stress Detector video demo",
        type: "video",
      },
    ],
    seo: {
      title: "Stress Detector | Real-time score via webcam",
      description:
        "MediaPipe + OpenCV pipeline estimating physiological stress with personalized baseline, HUD, REST/WS and a Streamlit dashboard.",
    },
  },
];

export const projectOrderEn = [
  "capa-da-invisibilidade",
  "business-decision-simulator",
  "deteccao-de-anomalias-operacionais",
  "dashboard-vendas-power-bi",
  "detector-de-stress",
  "touchless-web-gesture-interface",
  "driver-monitoring-system",
  "self-drive-car",
  "chatbot-ia-api",
  "library-api-advanced",
  "hand-gesture-recognition-realtime",
  "flappy-bird-gesture-control",
  "subway-surf",
  "slingshot",
  "fruit-ninja",
  "neon-runner-cyber-hand",
  "dino-chrome",
  "gestor-de-notas",
];

const sortByPriority = <T extends { slug: string }>(items: T[]) => {
  const order = new Map(projectOrderEn.map((slug, index) => [slug, index]));
  return [...items].sort((a, b) => {
    const aIndex = order.get(a.slug) ?? order.size;
    const bIndex = order.get(b.slug) ?? order.size;
    return aIndex - bIndex;
  });
};

export const projectsEn = sortByPriority(projectListEn);

export const projectSlugsEn = projectsEn.map((project) => project.slug);

export const getProjectBySlugEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);


