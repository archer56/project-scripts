const merge = require('webpack-merge');

module.exports = ({ mode = 'production', config: configOverrides = {}, ...options }) => {
  const commonConfig = require('./config-files/webpack.common')(options);
  const environmentConfig = require(`./config-files/webpack.${mode}`)(options);

  return merge(commonConfig, environmentConfig, configOverrides);
};
