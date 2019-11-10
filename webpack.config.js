const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './example/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [ MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test:  [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: ['url-loader']
      },
      {
        test:  [/\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/ ],
        loader: ['url-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({template: "example/index.html"}),
    new MiniCssExtractPlugin()
  ]
}
