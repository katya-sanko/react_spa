const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.dev.js');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));

} else {
    app.use(express.static(path.join(__dirname, '/dist')));
}

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3002, () => console.log('Example app listening on port 3002!'));