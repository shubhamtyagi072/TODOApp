const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
//   devtool:'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js"
  }
};
