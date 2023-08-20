const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const Copy = require('copy-webpack-plugin');

const config = {
    entry: {
        index: path.resolve('src/index.js'),
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: 'chunk.[contentHash].[ext]',
        clean: true,
        publicPath: path.resolve('dist'),
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve('public/index.html'),
        }),
        new Dotenv(),
        new Copy({
            patterns: [{
                from: 'service-worker.js',
                to: ''
            }],
        }),
    ],
};

module.exports = config;