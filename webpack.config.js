const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app-client.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: __dirname + 'src' + 'static' + 'js',
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "src/static/",
    hot: true,
    historyApiFallback: {
      index: '/index-static.html'
    }
  }
};
