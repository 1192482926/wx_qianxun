//检查node和npm版本
require('./check-versions')()
    /* 
     ** 如果 Node 的环境无法判断当前是 dev / product 环境
     ** 使用 config.dev.env.NODE_ENV 作为当前的环境
     */
    //引入相关配置
var config = require('../config')
    //检查node的环境变量，如果没有则使用配置文件中设置的环境
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

//引入配置文件
//引入相关插件
//创建express实例
//配置webpack-dev-middleware和webpack-hot-middleware
//配置静态资源路径，并挂到express服务上
//启动浏览器，并判断是否自动打开默认浏览器
//监听端口

var opn = require('opn') //打开浏览器或者打开文件模块
var path = require('path') //使用node自带的文件路径工具
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware') //express中间件，用于HTTP请求代理到其他服务器
var webpackConfig = process.env.NODE_ENV === 'testing' ?
    require('./webpack.prod.conf') :
    require('./webpack.dev.conf')

//判断当前环境，选择导入的webpack配置

// default port where dev server listens for incoming traffic
//默认的dev-server的监听端口
var port = process.env.PORT || config.dev.port
    //是否自动打开浏览器，默认是false
    // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
    //定义HTTP代理到你的自定义api后端
var proxyTable = config.dev.proxyTable
    //创建express实例
var app = express()
    //根据webpack的config创建Compiler对象
var compiler = webpack(webpackConfig)
    //使用compiler相应的文件进行编译和绑定，编译后的内容将放在内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: true
    })
    //用于实现热重载
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: false,
        heartbeat: 2000
    })
    // force page reload when html-webpack-plugin template changes
    //当HTML-webpack-plugin提交页面之后，使用热重载强制页面重载
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
//在express上使用代理表中的配置
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
//一个解决单页面的重定向错误的插件
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//使用devMiddleware，webpack编译后的文件将挂到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
//使用热重载中间件
app.use(hotMiddleware)

// serve pure static assets
//配置静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
    //将静态文件挂到express服务器上
app.use(staticPath, express.static('./static'))
    //设置应用的url
var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
    //devMiddleware valid之后，启动服务
devMiddleware.waitUntilValid(() => {
        console.log('> Listening at ' + uri + '\n')
            // when env is testing, don't need open it
            //如果设置为自动打开浏览器，通过opn打开uri
        if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
            opn(uri)
        }
        _resolve()
    })
    //监听配置的端口
var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}