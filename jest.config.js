/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  reporters: ['default', ['./node_modules/@testomatio/reporter/lib/adapter/jest.js', { apiKey: process.env.TESTOMATIO }]],
};