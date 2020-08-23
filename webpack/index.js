const { buildConfig } = require('./build');

function getWebpackConfig(options) {
  const defaults = {
    isUnitTest: false,
    isLocal: true,
    port: 3010,
    host: 'localhost',
    dirname: __dirname,
    siteName: 'app-name',
    appVersion: '0.0.0.0',
    assetsPath: '',
  };

  return buildConfig(Object.assign({}, defaults, options));
}

module.exports = {
  getWebpackConfig,
};
