// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    //打包时使用的配置
    build: {
        //webpack的环境
        env: require('./prod.env'),
        //输入的index.html路径
        index: path.resolve(__dirname, '../dist/index.html'),
        //输出的目标文件夹路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        //输出的子文件夹路径
        assetsSubDirectory: 'static',
        //发布路径
        assetsPublicPath: './',
        //是否使用sourcemap，生产环境下，必须为false
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        //是否开启gzip
        productionGzip: false,
        //gzip的压缩文件类型
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    //开发时使用的配置
    dev: {
        //webpack环境
        env: require('./dev.env'),
        //端口号
        port: 8088,
        //是否自动打开浏览器
        autoOpenBrowser: true,
        //输出的子文件夹路径
        assetsSubDirectory: 'static',
        //发布路径
        assetsPublicPath: '/',
        //配置代理表
        proxyTable: {
            'api': {
                target: 'http://192.168.0.116:8088/yftj-web/',
                changeOrigin: true,
                　pathRewrite: { '^/api': '/api' } //这里重写路径/run就代理到对应地址
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}