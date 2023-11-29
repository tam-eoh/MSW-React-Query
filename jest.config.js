module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  verbose: false,
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "json", "node", "tsx", "ts", "mjs"],

  transformIgnorePatterns: ["node_modules/(?!react\b)\bw+\b"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  setupFiles: ["<rootDir>/jest.polyfills.js"],
};
