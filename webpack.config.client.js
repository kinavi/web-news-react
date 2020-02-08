const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client.js',
  output: {
      path: path.resolve(__dirname, 'dist', 'public'),
      filename: 'client.[chunkhash].js'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader',
              
          },
          {
            test: /\.css$/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'/'
                    },
                },                
                'css-loader']
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{loader:'file-loader'}]
            
            // options:{
            //     name:'media/favicon.png',
            //     outputPath:'media'
            //   }
            
          },
          
      ]
  },
  plugins: [

    new webpack.IgnorePlugin(/jsdom$/),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new StatsWriterPlugin({
        filename: '../stats.json',
        stats: {
          all: false,
          assets: true,
          
        }
      }),
    new MiniCssExtractPlugin({
        filename:'style.[chunkhash].css' //"public/name.pp"
    }),
    
  ]
};

// const path = require('path');
// const merge = require('webpack-merge')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack')
// const {StatsWriterPlugin} = require('webpack-stats-plugin')


// const baseConfig = require('./webpack.config.base');

// module.exports = merge(baseConfig,{
//     mode:'production',
//     entry:'./src/client.js',
//     output:{
//         filename:'bundle.[chunkhash].js',
//         path:path.resolve(__dirname,'dist'),
//         publicPath:'/'
//     },
//     module:{
//         rules:[{
//             test:/\.css$/,
//             use:[MiniCssExtractPlugin.loader, 'css-loader']
//         }]
//     },
//     optimization: {
//         minimizer: [
//             new UglifyJsPlugin({
//                 cache: true,
//                 parallel: true,
//                 uglifyOptions:{
//                     compress:false,
//                     ecma:6,
//                     mangle:true
//                 },
//                 sourceMap:false
//             })
//         ],
//     },
//     plugins:[
//         new CompressionPlugin(),
//         new CleanWebpackPlugin(),
//         new webpack.DefinePlugin({
//             'process.env':{
//                 NODE_ENV: JSON.stringify('production')
//             }
//         }),
//         new StatsWriterPlugin({
//             stats:{
//                 all:false,
//                 assets:true
//             }
//         }),
//         new MiniCssExtractPlugin({
//             filename:'style.[chunkhash].css'
//         })
//     ],
//     devtool:'inline-source-map'
// })