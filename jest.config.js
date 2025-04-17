module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/array.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};