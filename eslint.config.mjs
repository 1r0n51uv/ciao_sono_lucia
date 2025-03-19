/* eslint-disable import/no-anonymous-default-export */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslint from "@eslint/js";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("next", "next/core-web-vitals", "prettier"),
  ...compat.extends("plugin:@typescript-eslint/recommended").map((config) => ({
    ...config,
    files: ["**/*.+(ts|tsx)"],
  })),

  {
    plugins: {
      prettier,
      eslint,
      tseslint,
      react,
      typescriptEslintEslintPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ["**/*.{ts,tsx,js,jsx,mts,cts}"],
    rules: {
      // React
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "error",
      "react/no-unused-prop-types": "error",
      "react/require-default-props": "error",
      "react/no-unescaped-entities": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/jsx-closing-tag-location": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-boolean-value": "error",
      "react/destructuring-assignment": "error",

      // Next rules
      "@next/next/no-img-element": "error",
      "@next/next/no-html-link-for-pages": "error",

      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "no-use-before-define": [0],
      "@typescript-eslint/no-use-before-define": [1],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "Story" }],
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-non-null-assertion": "error",

      "import/prefer-default-export": "error",
      "no-console": ["error", { allow: ["error"] }],
      "no-trailing-spaces": "error",
      "no-duplicate-imports": "error",
      "no-multiple-empty-lines": "error",
      "no-unused-labels": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-destructuring": "error",
      quotes: ["error", "double"],
      "prettier/prettier": "error",
      camelcase: "off",

      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
    },
  },
];
