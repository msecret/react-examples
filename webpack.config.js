
module.exports = {
  entry: "./src/js/init.js",
  output: {
    path: __dirname + './public/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style!css" }
    ]
  }
};
