const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
    mode: 'production',
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ],
        splitChunks: {
            chunks: 'all',
        }
    },

    plugins:[new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        ignoreOrder: false
    }),],
    
    module: {
        rules:[
            {
                use: [ MiniCssExtractPlugin.loader , 'css-loader' ],  
                test: /\.css$/i,
            },
        ],
    },
};

module.exports = merge(common, prodConfig);