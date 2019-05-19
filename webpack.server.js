const path = require("path");
const merge = require("webpack-merge");
const externals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  // To avoid node modules get bundled into bundle.js
  externals: [externals()]
};

module.exports = merge(baseConfig, config);