const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

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
    devServer: {
        open: true,
        hot: true,
        port: 3000
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
    ],
};

module.exports = config;