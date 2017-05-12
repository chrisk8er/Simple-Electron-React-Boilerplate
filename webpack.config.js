// webpack.config.js
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.bundle.js'
  },
  
  output: {
    filename: '[name].js',
    path: __dirname + '/app'
  },

  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { 
          test: /\.less$/,
          exclude: /node_modules/,
          use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
    ]
  }
};