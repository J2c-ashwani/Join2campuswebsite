import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
