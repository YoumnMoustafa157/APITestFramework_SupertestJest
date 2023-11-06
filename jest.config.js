/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["./specs/*.spec.ts"],
  reporters: [
		'default',
		  (process.env.CI === 'true' ? [['jest-html-reporter', {
        publicPath: 'reports'
		}]] : [])
	]
};