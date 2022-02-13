const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'img/[name].[ext]'
                        },
                    },
                ],
            },
        ],
    },

    entry: './src/index.js',
    output: {  
        path: path.resolve(__dirname, '../dist'),
        filename: '[bundle].[contenthash].js',
        publicPath: '', 
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new CleanWebpackPlugin(),

        new MinifyPlugin(),

        new CopyWebpackPlugin({
            patterns: [{
              from: path.resolve(__dirname, '../src/images'),
              to: 'images',
            }],
          }),
    ],
    
};