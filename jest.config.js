module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/hashmap.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};