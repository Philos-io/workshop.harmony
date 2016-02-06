module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: 'bookstore.js',
    path: __dirname
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
      }
    ]
  }
};

