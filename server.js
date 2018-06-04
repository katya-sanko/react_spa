const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.js');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

app.use(middleware(compiler, {}));

app.use(hotMiddleware(compiler, {}));

app.use(express.static(__dirname));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));