// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'

import App from './App'
import router from './router' //路由
import VueLazyload from 'vue-lazyload' //图片懒加载
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios' //ajax
import VeeValidate, { Validator } from 'vee-validate' // 表单验证
import zhMessages from 'vee-validate/dist/locale/zh_CN' //中文验证
import VueCookie from 'vue-cookie' // cookie
import BackToTop from 'vue-backtotop' //回到顶部
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
    //提示
import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant/dist/vue-instant.common'
Vue.use(VueInstant)
Vue.use(VueCookie)
Vue.use(BackToTop)
Vue.use(ElementUI)
    // 添加中文提示
Validator.addLocale(zhMessages)
    //公共定义的东西
Vue.prototype.imgUrlS = "http://img.yeafon.com"
    // Vue.prototype.fytjURL = "http://www.yeafon.com/"
Vue.prototype.fytjURL = "http://192.168.0.116:8080/yftj-web/"
    //配置
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.silent = false
Vue.prototype.$http = axios

//  扩展
const veeConfig = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    dictionary: {
        zh_CN: {
            zhMessages
        }
    },
    messages: null,
    strict: true
}

const isMobile = {
    messages: {
        zh_CN: (field, args) => {
            return field + '格式不正确'
        }
    },
    validate: (value, args) => {
        return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}


const isName = {
    messages: {
        zh_CN: (field, args) => {
            return field + '格式不正确'
        }
    },
    validate: (value, args) => {
        return value.length > 0 && /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(value)
    }
}

const miam = {
    messages: {
        zh_CN: (field, args) => {
            return field + '格式不正确'
        }
    },
    validate: (value, args) => {
        return value.length > 0 && /^[A-Za-z0-9]+$/.test(value)
    }
}

Validator.extend('mobile', isMobile)
Validator.extend('name', isName)
Validator.extend('password', miam)

// 表单验证
Vue.use(VeeValidate, veeConfig)
    //图片懒加载
Vue.use(Element)
Vue.use(VueLazyload, {
    error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2154282658,1509265881&fm=26&gp=0.jpg', //这个是请求失败后显示的图片
    loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503986217203&di=bd834008e6f4d93c6bb53ba6130f2128&imgtype=0&src=http%3A%2F%2Fwww.xjsheying.com%2Fqqwebhimgs%2Fuploads%2Fbd4321249.jpg', //这个是加载的loading过渡效果
    try: 2 // 这个是加载图片数量
})
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})