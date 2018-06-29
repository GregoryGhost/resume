const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const stylus = require('./webpack/stylus');
const images = require('./webpack/images');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'bin')
};

const common = merge([{
        entry: {
            'index': path.join(PATHS.source, './pages/index/index.js')
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: path.join(PATHS.source, './pages/index/index.pug')
            })
        ],
    },
    pug(),
    stylus(),
    images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ])
    }
    if (env === 'develop') {
        return merge([
            common,
            css()
        ])
    }
}