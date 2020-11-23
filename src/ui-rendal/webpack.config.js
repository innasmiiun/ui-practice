const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
                template: "./src/index.html"
            }
        ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img/image.jpg'),
                    to: path.resolve(__dirname, 'dist/assets')
                },
                { from: './src/assets/img/*.svg',
                    to: './assets',
                    flatten: true
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['MiniCssExtractPlugin.loader, file-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },


        ]
    }
}