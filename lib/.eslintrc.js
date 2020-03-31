module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
