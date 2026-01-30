export const demoImports = {
  "chatbot-ia-api": () => import("./chatbot-ia-api"),
  "library-api-advanced": () => import("./library-api-advanced"),
} as const;

export type InlineDemoId = keyof typeof demoImports;

export const getDemoImport = (inlineId: string) => {
  if (inlineId in demoImports) {
    return demoImports[inlineId as InlineDemoId];
  }
  return null;
};
