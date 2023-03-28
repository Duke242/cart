const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  transform: { "^.+\\.json5?$": "json5-jest-new" },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: 'jsdom',
};
module.exports = createJestConfig(customJestConfig);
