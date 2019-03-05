// Core
const webpack = require('webpack');
const path = require('path');
// Css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    // publicPath: '/hero-slider/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    contentBase: './dist',
  },

  devtool: 'source-map',

  module: {
    rules: [
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // css
      {
        test: /\.pcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },

      // imgMin
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '70-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),

    new HtmlWebpackPlugin({
      // inject: false,
      // hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
