const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // running from root directory always
  context: __dirname,
  // front door to project
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      // tool that webpack will use on code
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
};
