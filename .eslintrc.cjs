/* eslint-disable no-undef */
export default {
  root: true,
  env: { browser: true, es2022: true },
  extends: ["eslint:recommended", "plugin:react-hooks/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh"],
  settings: {
    react: { version: "18.0" }
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
};
