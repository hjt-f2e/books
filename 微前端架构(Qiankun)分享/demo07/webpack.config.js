const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve('./dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        contentBase: path.resolve('./dist'),
        host: 'localhost',
        port: 9999,
        compress: true,
        open: false
    }
};
