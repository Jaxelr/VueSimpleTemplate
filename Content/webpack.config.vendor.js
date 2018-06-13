const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const clientOutputDir = './wwwroot/dist';

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
const extractCSS = new ExtractTextPlugin('vendor.css')

module.exports = () => {
 
  return [{
    stats: { modules: false },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css(\?|$)/, use: extractCSS.extract(['css-loader']) }
      ]
    },
    entry: {
      vendor: ['vue', 'vuex', 'axios', 'vue-router']
    },
    output: {
      path: resolve(clientOutputDir),
      publicPath: '/dist/',
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
        name: '[name]_[hash]'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
      })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin(),
        extractCSS,
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        })
    ])
  }]
}
