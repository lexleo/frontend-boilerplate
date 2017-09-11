const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "eslint-loader"
        ]
      }
    ]
  }
};

module.exports = config;