const baseConfig = {
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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prettier/prettier': ['error'],
    'react/forbid-prop-types': 0,
  },
};

const mergedConfig = {
  javascript: {
    ...baseConfig,
  },
  typescript: {
    ...baseConfig,
    parser: '@typescript-eslint/parser',
    plugins: [...baseConfig.plugins, '@typescript-eslint'],
    rules: {
      ...baseConfig.rules,
      '@typescript-eslint/rule-name': 'error',

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
    settings: {
      'import/resolver': ['.js', '.jsx', '.ts', '.tsx'],
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
};

module.exports = ({ language = 'javascript' } = {}) => {
  return mergedConfig[language];
};
