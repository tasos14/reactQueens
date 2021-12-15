require('@babel/polyfill');
const webpack = require('webpack');
const path = require('path'); // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
    const env = dotenv.config().parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]); // eslint-disable-line
        return prev;
    }, {});

    return {
        entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.js'],
        resolve: {
            modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                envName: 'development',
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
