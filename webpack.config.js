const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'bin')
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(PATHS.source, 'index.js'),
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        })
    ]
}