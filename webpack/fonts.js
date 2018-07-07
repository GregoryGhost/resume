module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    }
  }
};