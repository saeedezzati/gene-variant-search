// process.env.API_URL = 'localhost:8000';
var webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Production'
    // }),
    new webpack.DefinePlugin({
      process:{
        env:{
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('127.0.0.1:8000/api')
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  devtool: 'hidden-source-map'
})

