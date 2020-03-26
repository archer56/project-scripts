module.exports = ({ sourceMap } = {}) => {
  const devtool = sourceMap && 'inline-source-map';
  return { mode: 'development', devtool };
};
