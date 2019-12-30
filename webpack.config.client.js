const path = require('path');
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const {StatsWriterPlugin} = require('webpack-stats-plugin')


const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig,{
    mode:'production',
    entry:'./src/client.js',
    output:{
        filename:'bundle.[chunkhash].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions:{
                    compress:false,
                    ecma:6,
                    mangle:true
                },
                sourceMap:false
            })
        ],
    },
    plugins:[
        new CompressionPlugin(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new StatsWriterPlugin({
            stats:{
                all:false,
                assets:true
            }
        }),
        new MiniCssExtractPlugin({
            filename:'style.[chunkhash].css'
        })
    ],
    devtool:'inline-source-map'
})