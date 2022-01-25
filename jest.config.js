module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/tests/**', '!**/coverage/**', '!jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    "\\.(mdx)$": "<rootDir>/__mocks__/mdx.ts"
  },
  setupFiles: ['<rootDir>/tests/setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/'],
  transform: {
    "^.+\\.[jt]sx?$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
};
