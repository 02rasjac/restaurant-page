const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: { index: './src/index.js', header: './src/header.js', start: './src/start.js' },
  devtool: 'eval',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //* Uncomment if using multiple enty-points
  optimization: {
    runtimeChunk: 'single',
  },
};
