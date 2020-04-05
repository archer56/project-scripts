module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
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
    "import/prefer-default-export": "off"
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'prettier/prettier': ['error'],
  },
};
