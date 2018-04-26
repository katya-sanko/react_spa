const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
       proxy: {
           "/greeting": "http://localhost:3001"
       }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    }
};