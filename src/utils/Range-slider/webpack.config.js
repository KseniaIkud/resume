const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => `[name].${ext}`

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config
}

const cssLoaders = (extra) => {
    const loaders = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true  
        },
    }, 
    'css-loader']

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }
    if (preset) {
        options.presets.push(preset)
    }
    return options
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }]

    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

const plugins = () => {

    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]


    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill','./index.js']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'docs')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: optimization(),
    devtool: isDev ? 'inline-source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            }, {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,  // потому что они и так скомпилированы
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,  // потому что они и так скомпилированы
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            }

        ]
    },
    devServer: {
        port: 1234,
        hot: isDev
    }
}