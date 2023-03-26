const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //* Uncomment if using multiple enty-points
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
