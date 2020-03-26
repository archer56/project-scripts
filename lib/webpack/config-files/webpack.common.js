  module.exports = (options = {}) => {
  const { rules, optimization } = require('../config')(options);
  return {
    module: {
      rules,
    },
    optimization,
  };
};
