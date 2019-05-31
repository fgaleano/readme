const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  generateWebpackConfig: function generateWebpackConfig(
    entryFiles,
    aliasObject
  ) {
    return {
      mode: "development",
      entry: { test: entryFiles },
      devtool: "eval-source-map",
      output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
      },
      devServer: {
        contentBase: "./"
      },
      resolve: {
        alias: aliasObject
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "index.ejs")
        })
      ],
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }
    };
  },
  port: 1111,
  renderOptions: {
    viewport: { deviceScaleFactor: 2 }
  }
};
