const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const clientOutputDir = './wwwroot/dist';

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')

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
                    use: isDevBuild ? ['style-loader', 'css-loader'] 
                    : ExtractTextPlugin.extract({ use: 'css-loader' }) 
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
            new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
          ].concat(isDevBuild ? [
            new webpack.SourceMapDevToolPlugin({
              filename: '[file].map', 
              moduleFilenameTemplate: path.relative(clientOutputDir, '[resourcePath]')
            })
          ] : [
            new webpack.optimize.UglifyJsPlugin(),
            extractCSS,
            new OptimizeCSSPlugin({
              cssProcessorOptions: {
                safe: true
              }
            })
      ])
    });

    const clientConfig = merge(config(), {
        entry: { 'client': './ClientApp/build/build.js' },
        output: {
            path: resolve(clientOutputDir)
        }
    });

    return clientConfig;
}
