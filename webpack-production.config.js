var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:   __dirname + '/app/index.html',
    filename:   'index.html',
    inject:     'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");
var WebpackUglifyJsPluginConfig = new WebpackUglifyJsPlugin({
    cacheFolder: __dirname + '/build'
});
var WebpackProductionPluginConfig = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
  }
});

module.exports = {
    entry:  __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test:       /\.js$/,
                exclude:    /node_modules/,
                loader:     'babel-loader'
            },
            {
                test:       /\.scss$/,
                loader:     ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    },
    output: {
        filename:   'bundle.min.js',
        path:       __dirname + '/build'
    },
    sassLoader: {
        includePaths: ['app/style']
    },
    plugins: [
        HTMLWebpackPluginConfig,
        ExtractTextPluginConfig,
        WebpackUglifyJsPluginConfig,
        WebpackProductionPluginConfig
    ]
};
