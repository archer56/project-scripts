const { NODE_ENV = 'production' } = process.env;

const presetsMap = {
  common: [
    [
      require('@babel/preset-env'),
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    require('@babel/preset-react'),
    require("@babel/preset-typescript"),
  ],
};

const pluginsMap = {
  common: [
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-class-properties'),
    require('react-hot-loader/babel'),
    require('@babel/plugin-transform-runtime'),
    require('babel-plugin-lodash'),
    require('babel-plugin-styled-components'),
  ],
  production: [require('babel-plugin-transform-react-remove-prop-types')],
};

module.exports = (api) => {
  api.cache(false);
  const presets = [...presetsMap.common, ...(presetsMap[NODE_ENV] || [])];

  const plugins = [...pluginsMap.common, ...(pluginsMap[NODE_ENV] || [])];

  return {
    presets,
    plugins,
  };
};
