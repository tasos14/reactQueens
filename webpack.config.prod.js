require('@babel/polyfill');
const webpack = require('webpack');
const path = require('path'); // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]); // eslint-disable-line
    return prev;
  }, {});
  envKeys['process.env.NODE_ENV'] = JSON.stringify('production');

  return {
    entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.js'],
    resolve: {
      modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                envName: 'production',
              },
            },
            'eslint-loader',
          ],
        },
      ],
    },
    output: {
      path: path.join(__dirname, 'src', 'static', 'js'),
      publicPath: '/js/',
      filename: 'bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'src', 'static', 'js', 'bundle.js')],
      }),
      new UglifyJSPlugin(),
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
