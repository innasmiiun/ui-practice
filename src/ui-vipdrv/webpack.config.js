const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
                    from: './src/assets/img/*.png',
                    to: './assets',
                    flatten: true
                },
                {
                    from: './src/assets/img/*.jpg',
                    to: './assets',
                    flatten: true
                },
                {
                    from: './src/assets/icons/*.svg',
                    to: './assets',
                    flatten: true
                },
                {
                    from: './src/assets/icons/*.png',
                    to: './assets',
                    flatten: true
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
        ]
    }
}