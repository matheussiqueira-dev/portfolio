export const demoImports = {
  "chatbot-ia-api": () =>
    import("@/components/demos/interactive/ApiPlaygroundDemo").then(
      (mod) => mod.ApiPlaygroundDemo
    ),
} as const;

export const hasInlineDemo = (slug: string) =>
  Object.prototype.hasOwnProperty.call(demoImports, slug);