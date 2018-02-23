const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'bin')
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('pug');


const compiledFunction = pug.compileFile(path.join(PATHS.source, 'index.pug'));

module.exports = {
    entry: path.join(PATHS.source, 'index.js'),
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: path.join(PATHS.source, './index.pug')
        })
    ]
}