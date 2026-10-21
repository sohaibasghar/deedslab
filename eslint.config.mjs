import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Copy uses straight apostrophes and quotes; still catch stray `>` and `}` in JSX text.
    rules: { "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }] },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Hairline drawing engine, ported verbatim from the original build.
    "lib/hairline/**",
  ]),
]);

export default eslintConfig;
