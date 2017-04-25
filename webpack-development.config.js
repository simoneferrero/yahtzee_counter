var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:   __dirname + '/app/index.html',
    filename:   'index.html',
    inject:     'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");

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
        filename:   'transformed.js',
        path:       __dirname + '/build'
    },
    sassLoader: {
        includePaths: ['app/style']
    },
    plugins: [
        HTMLWebpackPluginConfig,
        ExtractTextPluginConfig
    ]
};
