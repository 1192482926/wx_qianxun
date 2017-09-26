var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin') //生成html文件并自动注入依赖文件的插件，script & link
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') //一个输出webpack警告、错误的插件

// add hot-reload related code to entry chunks
//添加热重载相关的代码到entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
        baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
    })
    //合并webpack.base.conf
module.exports = merge(baseWebpackConfig, {
    module: {
        //使用styleLoaders处理样式文件
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    //配置source maps
    devtool: '#cheap-module-eval-source-map',
    //配置webpack插件
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        //在编译出现错误时，使用NoEmitOnErrorsPlugin来跳过输出阶段。这样可以确保输出资源不会包含错误。
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})