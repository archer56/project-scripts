# JavaScript Project Scripts
Common Scripts and setup files across projects

## Babel

Create a file called `babel.config.js` in the root directory. 

To use purely the default settings add:

```js 
  const babel = require('javascript-project-scripts/babel');

  module.exports = babel;
```

To add your own settings, something like this:
```js
module.exports = api => {
  const { plugins, presets } = babel(api);
  /*
  .....
  */
  return {
    plugins,
    presets,
  };
};
```

## ESLint
To use the eslint configuration create `.eslintrc.js` in your root directory then add the following:

### Options

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|`language`|`{String}`|`'javascript'`|Provides language specific linting rules|

### Example
```js
  const options = {
    language: 'javascript',
  };

  module.exports = require('javascript-project-scripts/lib/eslintrc.js')(options);
```

Secondly create `.prettierrc.js` in your root directory and add the following:

```js
  module.exports = require('javascript-project-scripts/lib/prettierrc.js');
```

## Webpack

### Required dependancies
**Remove** all references to babel and webpack that you are not actively using. (We will take care of most of the dependancies)

### Setup
- Create a file in the root directory called `webpack.config.js`
- The following are `required` fields:
  - mode - `(Required)` denotes which configuration we give you from `javascript-project-scripts`
  - config - See webpack documentation for more information, but you can add any configuration overrides here
    - entry `(Required)`
    - output `(Required)`
    - Plugins
      - MiniCssExtractPlugin `(Required)`

```js
  const webpackConfig = require('javascript-project-scripts/webpack.config');
  const path = require('path');
  const { MiniCssExtractPlugin } = require('javascript-project-scripts');

  const options = {};

  module.exports = webpackConfig({
    mode: "production",
    config: {
      entry: "./src/index.js",
      output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist")
      },
      plugins: [ 
        new MiniCssExtractPlugin({
          filename: `bundle.min.css`,
        }),
      ]
    },
    ...options,
  });
```

### Options
This applies to both the Full and Tiered setups

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|`assetsDir`|`{String}`|`'assets'`|Sets where in the distribution file defined in `output` where assets such as images and css files will be stored.|
|`relativeModulesPath`|`{String}`|`'./node_modules'`|For Projects that have non-standard setups or are mono-repos. This allows points webpack to the hoisted node_modules location.|
|`sourceMap`|`{Boolean}`|`false`|Enables source maps across, CSS and JavaScript.|
|`devServerOptions`|`{Object}`|`{}`|Overrides to the default webpack dev server settings|
|`sourceDir`|`{String}`|`./src`|Sets the source Directory|

### PostCss loader
This loader lives inside the css rules, you need to define a config that can be empty if you don't want it to do anything, but we advice you take the config from `javascript-project-scripts`.

This current setup sets up autoprefixer that matches against the current browserlist ensuring that your css is going to work across the supported browsers.

Create a file called `postcss.config.js` on your root directory.
```js
  module.exports = require('javascript-project-scripts/postcss.config');
```
  
 

### Important Notes
- `NODE_ENV` must be **explicitly** set to production when building the production bundle.

## TypeScript
### Babel
Ensure Babel language is set to `typescript`

### TS Config
Right now we unfortunately have to copy and paste the `tsconfig.json`. It can be found in the root directory of this library. Put it in the root directory of your application.