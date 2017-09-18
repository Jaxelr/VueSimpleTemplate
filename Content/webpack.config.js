const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = (env) => {
    const config = () => ({
        output: {
            publicPath: '/dist/',
            filename: '[name].js'
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
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: "file-loader?name=assets/[name].[ext]"
                },
                {
                    test: /\.ico$/i,
                    loader: "file-loader?name=favicon.[ext]"
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader?fonts/[name].[hash:7].[ext]',
                    options: {
                      limit: 10000
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              '@': resolve('ClientApp')
            }
        },
        devtool: '#eval-source-map'
    });

    const clientOutputDir = './wwwroot/dist';
    const clientConfig = merge(config(), {
        entry: { 'main-client': './ClientApp/build/client.js' },
        output: {
            path: resolve(clientOutputDir)
        }
    });

    const serverConfig = merge(config(), {
        target: 'node',
        entry: { 'main-server': './ClientApp/build/server.js' },
        output: {
            libraryTarget: 'commonjs2',
            path: resolve('wwwroot/dist')
        },
        module: {
            rules: [
                {
                    test: /\.json?$/,
                    loader: 'json-loader'
                }
            ]
        },
    });

    return [clientConfig, serverConfig];
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
}
