const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
    entry: {
        index: path.resolve('src/index.js'),
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: 'chunk.[contentHash].[ext]',
        clean: true,
        publicPath: '/',
    },
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
            }
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
    ],
};

module.exports = config;