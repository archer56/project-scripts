const jsConfig = {
  parser: '@babel/eslint-parser',
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
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts'] }],
    'prettier/prettier': ['error'],
    'react/forbid-prop-types': 0,
  },
};

const tsConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-console': 2,
    'react/prop-types': 0,
  },
};

module.exports = ({ language = 'javascript' } = {}) => {
  switch (language) {
    case 'javascript':
      return jsConfig;

    case 'typescript':
      return tsConfig;

    default:
      return jsConfig;
  }
};
