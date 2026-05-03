export type StackIconAsset = {
  src: string;
  label: string;
};

export const localStackIcons = {
  ".NET": "/icones/net-framework.png",
  "Adobe Photoshop": "/icones/adobe-photoshop.png",
  AWS: "/icones/amazon-web-services-%20AWS.png",
  Azure: "/icones/azure.png",
  Canva: "/icones/canva.png",
  ChatGPT: "/icones/chatgpt.png",
  Claude: "/icones/claude-ai.png",
  CSS: "/icones/css.png",
  Docker: "/icones/docker.png",
  Excel: "/icones/excel.png",
  Figma: "/icones/figma.png",
  Gemini: "/icones/gemini-ai.png",
  "GitHub Copilot": "/icones/github-copilot.png",
  GitHub: "/icones/github.png",
  "Google Ads": "/icones/google-ads.png",
  HTML: "/icones/html.png",
  "Hugging Face": "/icones/hugging-face.png",
  Java: "/icones/java.png",
  JavaScript: "/icones/javascript.gif",
  "Machine Learning": "/icones/machine-learning.png",
  "Microsoft Power Apps": "/icones/microsoft-power-apps.png",
  "Power Automate": "/icones/microsoft-power-automate.png",
  MySQL: "/icones/mysql.png",
  "Next.js": "/icones/icons8-next.js-48.png",
  "Node.js": "/icones/icons8-nodejs-50.png",
  NumPy: "/icones/numpy.png",
  OpenCV: "/icones/opencv.png",
  Pandas: "/icones/pandas.png",
  Perplexity: "/icones/perplexity.png",
  PostgreSQL: "/icones/postgre.png",
  "Power BI": "/icones/power-bi.png",
  Python: "/icones/python.png",
  PyTorch: "/icones/icons8-pytorch-48.png",
  React: "/icones/react.png",
  SQL: "/icones/sql.png",
  "Tailwind CSS": "/icones/tailwind-css.png",
  TypeScript: "/icones/typescript.png",
  "Visual Studio Code": "/icones/visual-studio-code.png",
  Vite: "/icones/vite.png",
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
  java: "Java",
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
