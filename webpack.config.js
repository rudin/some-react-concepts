var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'src/components'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },



      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&importLoaders=1&localIdentName=[local]_[hash:base64:5]')
      }




    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],



  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
