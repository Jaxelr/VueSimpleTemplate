const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const clientOutputDir = './wwwroot/dist'

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = (env) => {

    const isDevBuild = !(env && env.prod);

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
                    use:  [{ loader: MiniCssExtractTextPlugin.loader }, "css-loader" ]
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
        devtool: '#eval-source-map',
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DllReferencePlugin({
                context: clientOutputDir,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
          ].concat(isDevBuild ? [
            new webpack.SourceMapDevToolPlugin({
              filename: '[file].map', 
              moduleFilenameTemplate: path.relative(clientOutputDir, '[resourcePath]')
            })
          ] : [
            new MiniCssExtractTextPlugin({ filename : "site.css"}),
            new webpack.optimize.UglifyJsPlugin(),
            new OptimizeCSSPlugin({
              cssProcessorOptions: {
                safe: true
              }
            })
          ])
    });

    const clientConfig = merge(config(), {
        entry: { 'client': './ClientApp/build/client.js' },
        output: {
            path: resolve(clientOutputDir)
        }
    });

    const serverConfig = merge(config(), {
        target: 'node',
        entry: { 'server': './ClientApp/build/server.js' },
        output: {
            libraryTarget: 'commonjs2',
            path: resolve(clientOutputDir)
        }
});

    return [clientConfig, serverConfig];
}
