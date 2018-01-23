const path = require('path');
module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  watch: true,
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, './public/build'),
    inline: true,
    proxy: {
      '^*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
};
