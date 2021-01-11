const path = require('path');

module.exports = ({ sourceMap, devServerOptions = {} } = {}) => {
  const devtool = sourceMap && 'inline-source-map';

  return {
    mode: 'development',
    devtool,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      historyApiFallback: true,
      ...devServerOptions,
    },
  };
};
