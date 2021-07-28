module.exports = (options = {}) => {
  const { rules, optimization, resolve } = require('../config')(options);
  return {
    output: {
      publicPath: options.publicPath || '/',
    },
    module: {
      rules,
    },
    resolve,
    optimization,
  };
};
