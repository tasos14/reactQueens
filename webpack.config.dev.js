require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]); // eslint-disable-line
    return prev;
  }, {});

  return {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      contentBase: 'src/static/',
      hot: true,
      historyApiFallback: {
        index: '/index-static.html',
      },
    },
  };
};
