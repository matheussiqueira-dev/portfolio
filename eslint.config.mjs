import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Custom rules for stricter code quality
  {
    rules: {
      // Warn on unused variables, but allow unused args with underscore prefix
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],

      // Error on explicit any types - encourages proper typing
      "@typescript-eslint/no-explicit-any": "error",

      // Warn on missing dependencies in React hooks
      "react-hooks/exhaustive-deps": "warn",

      // Warn on console statements, but allow warn and error
      "no-console": ["warn", {
        allow: ["warn", "error"]
      }],

      // Prefer const over let when possible
      "prefer-const": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
