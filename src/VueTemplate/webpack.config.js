var path = require('path')

module.exports = {
  entry: { 'client': './ClientApp/main.js' },
  output: {
    path: path.resolve(__dirname, './wwwroot/dist'),
    publicPath: '/dist/',
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=assets/[name].[ext]"},
    ]
  }
}