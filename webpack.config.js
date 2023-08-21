const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const Copy = require('copy-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const config = {
    entry: {
        index: path.resolve('src/index.js'),
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: 'chunk.[contentHash].[ext]',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/images/[name].[hash].[ext]',
                        },
                    },
                ],
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
        new MiniCssPlugin(),
        new Dotenv(),
        new Copy({
            patterns: [
                {
                    from: 'service-worker.js',
                    to: ''
                },
                {
                    from: 'public/offline.png',
                    to: ''
                },
            ],
        }),
    ],
};

module.exports = config;