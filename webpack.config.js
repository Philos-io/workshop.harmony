var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './workshops/04_advanced_directives_filters/index.js',
  output: {
    filename: 'bookstore.js',
    path: path.join(__dirname, './workshops/04_advanced_directives_filters/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
};
