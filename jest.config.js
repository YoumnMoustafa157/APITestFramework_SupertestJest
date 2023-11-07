/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["./specs/*.spec.ts"],
  reporters: [
    "default",
    ["jest-html-reporters",
  {outputPath: './reports',
  testResultsProcessor: "./node_modules/jest-html-reporter"}
]
  ],
  testLocationInResults: true,
  
};