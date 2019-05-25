const path = require("path");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: 'development',
  entry: `${src}/index.js`,
  output: {
    path: dist,
    // publicPath: '/',
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(s?)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },

  devServer: {
    contentBase: dist,
    hot: true
  },

  plugins: [
    new HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new WasmPackPlugin({
      crateDirectory: __dirname,
      // TODO
      forceMode: 'release'
    }),
  ]
};
