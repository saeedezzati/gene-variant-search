// process.env.API_URL = 'localhost:8000';
const path = require('path');
var webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');


// the clean options to use


module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
    // publicPath: path.join(__dirname,'/build/'),
  },
  module: {
    rules: [
      {
        exclude: path.resolve(__dirname, "node_modules/"),
        test: /\.js$/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-1']
            }
          },
        ]      
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  
  plugins: [
    new CleanWebpackPlugin(['build/*.js', 'build/*.map']),    
  ],
  
}

