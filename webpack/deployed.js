const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function getDeployedConfig(options) {
  return {
    mode: options.mode,
    entry: {
      bundle: [
        '@babel/polyfill',
        path.join(options.dirname, 'src/index'),
      ],
    },
    output: {
      path: path.join(options.dirname, 'dist'),
      publicPath: options.appUrl || `http://${options.host}:${options.serverPort}/`,
      filename: '[name].js',
    },
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
      minimizer: [ new TerserPlugin() ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  };
}

module.exports = {
  getDeployedConfig,
};
