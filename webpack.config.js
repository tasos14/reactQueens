require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/app-client.js'],
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: 'src/static/',
    hot: true,
    historyApiFallback: {
      index: '/index-static.html',
    },
  },
};
