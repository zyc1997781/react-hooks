/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const APP_DIR = path.resolve(__dirname, '../src');
const APP_DIR = "../src/";

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      // entry: ['@babel/polyfill', APP_DIR],
      entry: {
        index: path.resolve(__dirname, APP_DIR + "index.jsx")
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }, 
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
              loader: "file-loader",
              options: {
                publicPath: "",
                name: "images/[name].[hash].[ext]"
              }
            }]
          }
        ]
      },
      resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".json"]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: 'src/static' }]),
      ],
      // output: {
      //   filename: '[name].bundle.js',
      //   chunkFilename: '[name].chunk.bundle.js',
      //   path: path.resolve(__dirname, '..', 'dist'),
      //   publicPath: '/',
      // },
    }
  ])
};
