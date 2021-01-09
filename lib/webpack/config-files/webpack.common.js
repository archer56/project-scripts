module.exports = (options = {}) => {
  const { rules, optimization, resolve } = require('../config')(options);
  return {
    module: {
      rules,
    },
    optimization,
    resolve,
  };
};
