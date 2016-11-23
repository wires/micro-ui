const path = require('path')
const pkg = require('./package.json')

module.exports = {
  entry: path.join(__dirname, pkg.main),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
	// use this to expose a variable from the main JS
	// libraryTarget: 'var', library: 'Q'
  },
  devtool: 'source-map',
  externals: {
    // 'd3': 'd3',
    // 'ramda': 'R',
    // 'moment': 'moment'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(jade|pug)$/,
        loader: 'virtual-jade',
      }
    ]
  }
}
