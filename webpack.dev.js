const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: ['babel-polyfill','./src/index.js']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [ 'file-loader']
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        disableHostCheck: true
    }
};