const path = require("path");

const config = {
  mode: "production",
  entry: "./src/js/index.js",
  devtool: "sourcemap",
  output: {
    path: path.resolve(__dirname, "build", "js"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = config;
