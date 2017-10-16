var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack') // 引入webpack
    //绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    //webpack的入口文件
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot, //webpack输出文件的路径
        filename: '[name].js', //webpack输出的文件命名格式
        //webpack编译输出的发布路径，根据环境选择路径
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    //模块resolve的规则
    resolve: {
        //resolve的后缀名
        extensions: ['.js', '.vue', '.json'],
        //配置路径别名，比如import Vue from "vue/dist/vue.common.js" --> import Vue from "vue"
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    //配置不同类型模块的处理规则
    module: {
        rules: [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }, //src和test文件夹下的.js和.vue文件使用eslint-loader
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }, //所有的.vue文件使用vue-loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            }, //src和test下的.js文件使用babel-loader编译成ES5语法
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, //所有的图片文件使用url-loader
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            }, //所有的音频文件使用url-loader
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            } //所有的字体文件使用url-loader
        ]
    },
    // 增加一个plugins
    plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
   ]
}