const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'bin')
};

module.exports = {
    entry: path.join(PATHS.source, 'index.js'),
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
}