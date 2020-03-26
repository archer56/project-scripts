module.exports = ({ sourceMap } = {}) => {
  const devtool = sourceMap && 'source-map';
  return { mode: 'production', devtool };
};
