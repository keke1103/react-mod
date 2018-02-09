const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const cssExtractTextPlugin = new ExtractTextPlugin({ filename: 'app.css', allChunks: true }); // 开发者css
const antdExtractTextPlugin = new ExtractTextPlugin('antd.css'); // antd框架样式库 TODO: 以后可能有其他库的样式

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            options: {
                presets: ['es2015', 'react', 'stage-2'],
                plugins: [['transform-runtime'], ['import', {libraryName: 'antd', style: true}]]
            }
        }, {
            test: /\.css$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            use: cssExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[name]-[local]',
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            })
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, 'node_modules', 'antd')
            ],
            use: antdExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        sourceMap: true,
                        localIdentName: '[local]'
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            })
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'plugins.js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
        }),
        cssExtractTextPlugin,
        antdExtractTextPlugin

    ],
    devServer: {
        proxy: {
            '/api': 'http://10.0.1.140:3000'
        },
        historyApiFallback: true,
        publicPath: '/build/' // TODO: 经测试, 与1.x不同, publicPath要定义在这里, 才能触发浏览器hot reload, 其他地方不要定义, 好像跟官网给的出例子的行为略有不同
    }
};
