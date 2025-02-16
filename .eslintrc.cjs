module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard",
    "eslint-config-prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "json"],
  rules: {
    "json/*": ["error", { allowComments: true }],
    "react/prop-types": ["off"],
    "no-invalid-regexp": ["warm", { allowConstructorFlags: true }],
  },
}
