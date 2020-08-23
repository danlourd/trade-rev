const webpack = require('webpack');

function getUnitTestConfig() {
  return {
    mode: 'development',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('unitTest'),
        },
      }),
    ],
  };
}

function getPreLoaders() {
  return {
    test: /\.jsx?$/,
    enforce: 'pre',
    exclude: [
      /node_modules/,
      /test/,
    ],
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
  };
}

module.exports = {
  getUnitTestConfig,
  getPreLoaders,
};
