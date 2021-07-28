const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin').loader;

const { appDirectory } = require('../../utils');

module.exports = ({ assetsDir, sourceMap, sourceDir }) => [
  {
    test: /\.(js|jsx)$/,
    include: [path.resolve(appDirectory, sourceDir)],
    use: 'babel-loader',
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          // configFile: '../../tsconfig.json',
        }
      }
    ]
  },
  {
    test: /\.(scss|css)$/,
    use: [
      { loader: MiniCssExtractPlugin },
      { loader: 'css-loader', options: { sourceMap } },
      { loader: 'postcss-loader', options: { sourceMap } },
      { loader: 'resolve-url-loader' },
      { loader: 'sass-loader', options: { sourceMap } },
    ],
  },
  {
    test: /\.jpe?g|png|gif$|svg/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[hash:7].[ext]',
          outputPath: `${assetsDir}`,
        },
      },
    ],
  },
];
