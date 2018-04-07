require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'src', 'static', 'js', 'bundle.js')]),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  devServer: {
    contentBase: 'src/static/',
    hot: true,
    historyApiFallback: {
      index: '/index-static.html',
    },
  },
};
