const path = require('path');
const { getWebpackConfig } = require('./webpack');

const webpackConfig = getWebpackConfig({
  isLocal: true,
  isUnitTest: true,
});

const karmaConfig = {
  browsers: ['ChromeHeadlessNoSandbox'],
  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox'],
    },
  },
  reporters: ['mocha', 'coverage-istanbul'],
  frameworks: ['mocha'],
  files: [
    {
      pattern: path.join(__dirname, 'test/testHelper.js'),
      watched: true,
      included: true,
      served: true,
    },
  ],
  plugins: [
    'karma-mocha',
    'karma-chrome-launcher',
    'karma-webpack',
    'karma-mocha-reporter',
    'karma-coverage-istanbul-reporter',
  ],
  preprocessors: {
    'test/testHelper.js': ['webpack'],
  },
  coverageIstanbulReporter: {
    reports: ['html'],
    dir: path.join(__dirname, 'coverage/'),
  },
  webpackMiddleware: {
    noInfo: true,
  },
  webpack: webpackConfig,
};

module.exports = function exports(config) {
  config.set(karmaConfig);
};
