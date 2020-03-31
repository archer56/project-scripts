module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    'no-unused-vars': 'error',
    "no-undef": "error",
    "prettier/prettier": ["error"],
  },
};
