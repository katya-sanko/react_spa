const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.js');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
    // webpack-dev-middleware options
}));

app.use(hotMiddleware(compiler, {
    // webpack-hot-middleware options
}));

// app.get("/", (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     return res.sendFile(path.join(__dirname, "index.html"));
// });

app.use(express.static(__dirname));

app.listen(3002, () => console.log('Example app listening on port 3002!'))