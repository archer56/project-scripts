const path = require('path');

module.exports = ({ sourceMap, devServerOptions = {} } = {}) => {
  const devtool = sourceMap && 'inline-source-map';

  return {
    mode: 'development',
    devtool,
    devServer: {
      compress: true,
      port: 9000,
      historyApiFallback: true,
      ...devServerOptions,
    },
  };
};
