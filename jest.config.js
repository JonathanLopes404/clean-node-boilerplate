const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig")

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: false,
  coverageDirectory: "tests/coverage",
  coverageProvider: "v8",
  coverageReporters: ["lcov"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  rootDir: ".",
  roots: ["./src", "<rootDir>/tests"],
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  setupFilesAfterEnv: ["<rootDir>/testSetupFile.js"],
}
