const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template:"./index.html"
    }),
    new MiniCssExtractPlugin({
        filename: "style.css"
    })
  ]
};