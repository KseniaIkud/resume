module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  'transform': {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  }
};