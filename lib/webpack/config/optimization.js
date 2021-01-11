module.exports = () => ({
  concatenateModules: true,
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  providedExports: true,
  usedExports: true,
  removeAvailableModules: true,
  mergeDuplicateChunks: true,
  removeEmptyChunks: true,
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: 10,
  },
});
