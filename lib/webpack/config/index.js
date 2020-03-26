const defaultOptions = {
  assetsDir: 'assets',
  relativeModulesPath: './node_modules',
  sourceMap: false,
};

module.exports = (options = {}) => {
  const optionsWithDefault = { ...defaultOptions, ...options };

  return {
    rules: require('./rules')(optionsWithDefault),
    optimization: require('./optimization')(optionsWithDefault),
  };
};