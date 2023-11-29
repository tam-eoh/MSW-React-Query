module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "no-unused-vars": "warn",
    "react/no-unknown-property": ["warn", { ignore: ["testid"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
