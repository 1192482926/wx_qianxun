import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import packageList from '@/components/Package/PackageList'
import healthProduct from '@/components/healthProduct/healthProduct'
import personalCenter from '@/components/personalCenter/index'
import detail from '@/components/Package/detail'
import SubmitOrder from '@/components/order/SubmitOrder'
import FillOrder from '@/components/order/FillOrder'
import organizationDetail from '@/components/detail/organizationDetail'
import PackageDetail from '@/components/detail/PackageDetail'
import login from '@/components/login/login'
import findPassword from '@/components/findPassword/findPassword'
import register from '@/components/register/register'
import myorder from '@/components/myorder/myorder'
import archives from '@/components/archives/archives'
import about from '@/components/about/about'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'myorder',
            component: myorder
        }, {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/packageList',
            name: 'packageList',
            component: packageList
        },

        {
            path: '/healthProduct',
            name: 'healthProduct',
            component: healthProduct
        },
        {
            path: '/personalCenter',
            name: 'personalCenter',
            component: personalCenter
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: detail
        },
        {
            path: '/SubmitOrder',
            name: 'SubmitOrder',
            component: SubmitOrder
        },
        {
            path: '/FillOrder',
            name: 'FillOrder',
            component: FillOrder
        },
        {
            path: '/PackageDetail',
            name: 'PackageDetail',
            component: PackageDetail
        },
        {
            path: '/organizationDetail',
            name: 'organizationDetail',
            component: organizationDetail
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
        	path: '/archives',
            name: 'archives',
            component: archives
        },
        {
        	path: '/about',
            name: 'about',
            component: about
        }
    ]
})

// 判断是否需要登录权限 以及是否登录
// Router.beforeEach((to, from, next) => {
//     if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
//         if (localStorage.getItem('username')) { // 判断是否登录
//             next()
//         } else { // 没登录则跳转到登录界面
//             next({
//                 path: '/Register',
//                 query: { redirect: to.fullPath }
//             })
//         }
//     } else {
//         next()
//     }
// })