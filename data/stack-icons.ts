export type StackIconAsset = {
  src: string;
  label: string;
};

export const localStackIcons = {
  ".NET": "/icones/icons8-.net-framework-48.png",
  "Adobe Photoshop": "/icones/icons8-adobe-photoshop-48.png",
  AWS: "/icones/icons8-amazon-web-services-48.png",
  Azure: "/icones/icons8-azure-48.png",
  Canva: "/icones/icons8-canva-48.png",
  ChatGPT: "/icones/icons8-chatgpt-100.png",
  Claude: "/icones/icons8-claude-ai-48.png",
  CSS: "/icones/icons8-css-50.png",
  Docker: "/icones/icons8-docker-48.png",
  Excel: "/icones/icons8-excel-48.png",
  Figma: "/icones/icons8-figma-48.png",
  Gemini: "/icones/icons8-gemini-ai-48.png",
  "GitHub Copilot": "/icones/icons8-github-copilot-48.png",
  GitHub: "/icones/icons8-github-logo-50.png",
  "Google Ads": "/icones/icons8-google-ads-48.png",
  HTML: "/icones/icons8-html-48.png",
  "Hugging Face": "/icones/icons8-hugging-face-48.png",
  JavaScript: "/icones/icons8-javascript-50.gif",
  "Machine Learning": "/icones/icons8-machine-learning-94.png",
  "Microsoft Power Apps": "/icones/icons8-microsoft-power-apps-80.png",
  "Power Automate": "/icones/icons8-microsoft-power-automate-2020-48.png",
  MySQL: "/icones/icons8-mysql-logo-48.png",
  "Next.js": "/icones/icons8-next.js-48.png",
  "Node.js": "/icones/icons8-nodejs-50.png",
  NumPy: "/icones/icons8-numpy-50.png",
  OpenCV: "/icones/icons8-opencv-50.png",
  Pandas: "/icones/icons8-pandas-50.png",
  Perplexity: "/icones/icons8-perplexity-ai-48.png",
  PostgreSQL: "/icones/icons8-postgresql-50.png",
  "Power BI": "/icones/icons8-power-bi-2021-50.png",
  Python: "/icones/icons8-python-48.png",
  PyTorch: "/icones/icons8-pytorch-48.png",
  React: "/icones/icons8-react-50.png",
  SQL: "/icones/icons8-sql-48.png",
  "Tailwind CSS": "/icones/icons8-tailwind-css-48.png",
  TypeScript: "/icones/icons8-typescript-48.png",
  "Visual Studio Code": "/icones/icons8-visual-studio-code-2019-48.png",
  Vite: "/icones/icons8-vite-48.png",
} as const satisfies Record<string, string>;

type CanonicalStackIcon = keyof typeof localStackIcons;

const stackAliases: Record<string, CanonicalStackIcon> = {
  ".net framework": ".NET",
  "adobe photoshop": "Adobe Photoshop",
  amazon: "AWS",
  "amazon web services": "AWS",
  aws: "AWS",
  "canvas api": "HTML",
  canvas: "HTML",
  "computer vision": "OpenCV",
  css3: "CSS",
  d3: "JavaScript",
  "d3.js": "JavaScript",
  "data analysis": "Power BI",
  dax: "Power BI",
  fastapi: "Python",
  fastify: "Node.js",
  graphql: "Node.js",
  html: "HTML",
  html5: "HTML",
  "html5 canvas": "HTML",
  ga4: "Google Ads",
  "google analytics": "Google Ads",
  "google analytics 4": "Google Ads",
  "isolation forest": "Machine Learning",
  js: "JavaScript",
  javascript: "JavaScript",
  localstorage: "JavaScript",
  "local storage": "JavaScript",
  "media pipe": "Machine Learning",
  mediapipe: "Machine Learning",
  "mediapipe hands": "Machine Learning",
  "mediapipe tasks vision": "Machine Learning",
  mysql: "MySQL",
  "next js": "Next.js",
  nextjs: "Next.js",
  node: "Node.js",
  nodejs: "Node.js",
  "node.js": "Node.js",
  opencv: "OpenCV",
  "power query": "Power BI",
  "power bi": "Power BI",
  powerbi: "Power BI",
  redis: "PostgreSQL",
  recharts: "JavaScript",
  "rest api": "Node.js",
  pytorch: "PyTorch",
  reactjs: "React",
  "react.js": "React",
  streamlit: "Python",
  tailwind: "Tailwind CSS",
  tensorflow: "Machine Learning",
  "tensorflow.js": "Machine Learning",
  "three.js": "JavaScript",
  timescaledb: "PostgreSQL",
  ts: "TypeScript",
  typescript: "TypeScript",
  vercel: "Next.js",
  vscode: "Visual Studio Code",
  webgl: "JavaScript",
  websockets: "Node.js",
  zod: "TypeScript",
  zustand: "React",
  "@react-three/fiber": "React",
};

function normalizeStackName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

const normalizedIconNames = new Map(
  Object.keys(localStackIcons).map((name) => [normalizeStackName(name), name] as const)
);

export function getStackIcon(stackName: string): StackIconAsset | null {
  const normalized = normalizeStackName(stackName);
  const canonicalName = (normalizedIconNames.get(normalized) ?? stackAliases[normalized]) as
    | CanonicalStackIcon
    | undefined;

  if (!canonicalName) {
    return null;
  }

  return {
    src: localStackIcons[canonicalName],
    label: stackName,
  };
}
