var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/init.js",

  output: {
    path: path.resolve('./public'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [ require('postcss-local-scope') ],

  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
