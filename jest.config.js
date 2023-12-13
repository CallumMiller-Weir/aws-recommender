module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.test.ts?$',
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    coverageReporters: ['text', 'lcov'],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}', 
        '!src/**/*.d.ts'
    ],
  };