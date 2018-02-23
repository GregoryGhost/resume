const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'bin')
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('pug');


const compiledFunction = pug.compileFile(path.join(PATHS.source, './pages/index/index.pug'));
const compiledFunction2 = pug.compileFile(path.join(PATHS.source, './pages/blog/blog.pug'));

module.exports = {
    entry: {
        'index': path.join(PATHS.source, 'pages/index/index.js'),
        'blog': path.join(PATHS.source, 'pages/blog/blog.js')
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
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
            template: path.join(PATHS.source, './pages/index/index.pug')
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: path.join(PATHS.source, './pages/blog/blog.pug')
        })
    ]
}