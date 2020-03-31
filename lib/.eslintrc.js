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
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'global-require': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'prettier/prettier': ['error'],
  },
};
