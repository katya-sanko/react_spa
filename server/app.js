const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    // const webpackConfig = require('./webpack.dev.js');
    const webpackConfig = require('../webpack.dev.js');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));

} else {
    const serverRenderer = require('../dist/js/serverRenderer').default;

    app.use(express.static(path.join(__dirname, '/dist')));
    app.use(serverRenderer());
}

module.exports = app;
