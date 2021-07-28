const defaultOptions = {
  assetsDir: 'assets',
  relativeModulesPath: './node_modules',
  sourceMap: false,
  sourceDir: './src',
};

module.exports = (options = {}) => {
  const optionsWithDefault = { ...defaultOptions, ...options };

  return {
    rules: require('./rules')(optionsWithDefault),
    optimization: require('./optimization')(optionsWithDefault),
    resolve: require('./resolve')(optionsWithDefault),
  };
};
