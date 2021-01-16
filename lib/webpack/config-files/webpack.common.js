module.exports = (options = {}) => {
  const { rules, optimization } = require('../config')(options);
  return {
    output: {
      publicPath: options.publicPath || '/',
    },
    module: {
      rules,
    },
    optimization,
  };
};
