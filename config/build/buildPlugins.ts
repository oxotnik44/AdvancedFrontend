import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; //to access built-in plugins
import { BuildOptions } from "./types/config";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: isDev ? "[name].css" : "css/[name].[contenthash:8].css",
    }),
  ];
}
