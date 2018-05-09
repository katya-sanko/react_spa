const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true,
    mode: 'development',
    node: {
        console: false,
        global: true,
        process: true,
        __filename: false,
        __dirname: false,
        Buffer: true,
        setImmediate: true
    }
});