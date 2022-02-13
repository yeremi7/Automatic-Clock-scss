const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        contentBase: '../dist',
        port: 8080,
        open: 'chrome'
    },
    target: 'web',
    devtool: 'eval-source-map',
    module:{
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
            },
        ],
    },
};

module.exports = merge(common, devConfig);