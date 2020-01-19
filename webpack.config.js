const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const clientConfig = {
  mode: 'production',
  entry: './src/client.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'public/client.[chunkhash].js'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
            test: /\.css$/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'/public'
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
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new StatsWriterPlugin({
        // filename: 'stats.json',
        stats: {
          all: false,
          assets: true
        }
      }),
    new MiniCssExtractPlugin({
        filename:'public/style.[chunkhash].css'
    }),
    
  ]
};

const serverConfig = {
  mode: 'production',
  entry: './src/server.js',
  target: "node",
  devtool: "source-map",
  externals: [nodeExternals({
      whitelist:[/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
            test:/\.css$/,
            use:'null-loader'
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{loader:'file-loader'}]
          }
      ]
  },
  plugins: [
      
        new CleanWebpackPlugin(),
      new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
          entryOnly: false
      }),
      
  ]
};

module.exports = [clientConfig, serverConfig];