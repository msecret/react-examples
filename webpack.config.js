var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var postcss_local_scope = require('postcss-local-scope');

module.exports = {
  entry: "./src/init.js",

  output: {
    path: path.resolve('./public'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?localIdentName=[name]__[local]___[hash:base64:5]!cssnext-loader!postcss-loader')
      }
    ]
  },

  postcss: [ postcss_local_scope ],
  cssnext: {
    from: './src/css/main.css'
  },

  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
