const webpack = require('webpack');
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject:   'body',
});
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: "styles.css",
});
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: 'img',
    to: 'img',
  },
]);

module.exports = (env = {}) => {
  const isProduction = env.production === true;

  return {
    context: path.resolve(__dirname, './src'),
    entry: [
      'whatwg-fetch',
      './index.js',
    ],
    output: {
      path: path.resolve(__dirname, './build'),
      filename: isProduction ? 'bundle.min.js' : 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, './src'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
          options: {
            presets: ['react', 'es2015'],
            plugins: ["transform-object-rest-spread", "transform-class-properties"],
          },
        },
        {
          test:   /\.(sass|scss)$/,
          loader: ExtractTextPluginConfig.extract({
            use: [
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
                options: {
                  includePaths: ['src/style'],
                },
              }
            ],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: (() => {
      const plugins = [
        HTMLWebpackPluginConfig,
        ExtractTextPluginConfig,
      ];
      const production = [
        ...plugins,
        CopyWebpackPluginConfig,
      ];
      const development = [
        ...plugins,
      ];

      return isProduction ? production : development;
    })(),
  };
};
