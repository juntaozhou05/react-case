const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'less-loader'
        ],

      },
    ]
  },
  plugins:[
      new MiniCssExtractPlugin({
          filename:'[name].[hash].css',
          chunkFilename:'[id].[hash].css'
      })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};