const path = require('path');
const webpack=require('webpack');

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /\/node_modules\//,
      use: {
        loader: "babel-loader",
      },
    },],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: 'production',
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril",
    }),
  ],
};
