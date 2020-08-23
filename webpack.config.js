const { getWebpackConfig } = require('./webpack');
const config = require('./config');

function getLocalConfig() {
  const options = {
    port: '3010',
    siteName: 'TradeRev Coding Challenge',
    dirname: __dirname,
    mode: 'development',
    apiKey: config.unsplashApiKey,
  }

  return getWebpackConfig(options);
}

module.exports = () => getLocalConfig();
