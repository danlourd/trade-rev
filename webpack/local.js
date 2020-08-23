const path = require('path');

function getLocalConfig(options) {
  return {
    mode: options.mode,
    entry: {
      bundle: [
        '@babel/polyfill',
        `webpack-dev-server/client?http://${options.host}:${options.port}`,
        'webpack/hot/only-dev-server',
        path.join(options.dirname, 'src/index'),
      ],
    },
    output: {
      path: path.join(options.dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    cache: true,
    devServer: {
      contentBase: path.join(options.dirname, 'dist'),
      hot: true,
      port: options.port,
      compress: true,
      host: options.host,
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  };
}

module.exports = {
  getLocalConfig,
};
