/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["./specs/*.spec.ts"],
  reporters: [
    'default',
    ['jest-html-reporters',
      {
        publicPath: 'reports'
      }
    ]
  ]
};