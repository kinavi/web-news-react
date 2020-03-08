const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/server.js',
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals({
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
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
        use: 'null-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{loader: 'file-loader'}],
      },
    ],
  },
  plugins: [


    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),

  ],
};

// const path = require('path');
// const merge = require('webpack-merge');
// const webpackNodeExternals = require('webpack-node-externals')

// const baseConfig = require('./webpack.config.base');

// module.exports = merge(baseConfig,{
//   mode:'production',
//   target:'node',
//   entry:'./src/server.js',
//   externals:[webpackNodeExternals()],
//   output:{
//     filename:'server.js',
//     path:path.resolve(__dirname,'dist')
//   },
//   module:{
//     rules:[
//       {
//         test:/\.css$/,
//         use:'null-loader'
//       }
//     ]
//   }
// });
