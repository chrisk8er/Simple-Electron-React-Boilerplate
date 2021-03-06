const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app')
  },

  module: {
    rules: [
        { test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["react", 
                        "es2015"]
            }
          }
        },
        { 
          test: /\.css$/,
          use: [
            { loader: "style-loader" }, // creates style nodes from JS strings
            { loader: "css-loader" }, // translates CSS into CommonJS
            { loader: "postcss-loader"} // post process CSS
          ]
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: "file-loader?name=[name].[ext]&outputPath=fonts/"
        }
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'Electron Boilerplate',
    filename: 'index.html',
    template: 'src/index.ejs'
  })],

  devServer: {
    contentBase: path.join(__dirname, "app"),
    watchContentBase: true,
    compress: true,
    port: 9000
  }
};