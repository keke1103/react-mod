const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const cssExtractTextPlugin = new ExtractTextPlugin({ filename: 'app.css', allChunks: true }); // ������css
const antdExtractTextPlugin = new ExtractTextPlugin('antd.css'); // antd�����ʽ�� TODO: �Ժ���������������ʽ

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
                plugins: [
                    ['transform-runtime'],
                    ['import', { libraryName: 'antd', style: true }]
                ]
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
        cssExtractTextPlugin,
        antdExtractTextPlugin

    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test-ngm.intbee.com',
                onProxyReq: (proxyReq, req, res) => {
                    proxyReq.setHeader('host', 'test-ngm.intbee.com');
                }
            }
            // '/api': {
            //     target: 'http://10.0.1.39:3002'
            // }
        },
        historyApiFallback: true,
        publicPath: '/build/' 
    }
};
