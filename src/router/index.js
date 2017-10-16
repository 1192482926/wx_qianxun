import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import packageList from '@/components/Package/PackageList'
import healthProduct from '@/components/healthProduct/healthProduct'
import personalCenter from '@/components/personalCenter/index'
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
import userinfo from '@/components/personalCenter/userinfo'
import safe from '@/components/personalCenter/safe'
import addArchives from '@/components/archives/addArchives'
import updateName from '@/components/personalCenter/updateName'
import archivesDetail from '@/components/archives/archivesDetail'
import updatePhoneNum from '@/components/personalCenter/updatePhoneNum'
import updatePassword from '@/components/personalCenter/updatePassword'
import packL from '@/components/Package/packsList'

Vue.use(Router)

let router = new Router({
    mode: 'hash',
    linkActiveClass: 'active',

    routes: [{
            path: '/',
            component: index,
            meta: { keepAlive: true }
        }, {
            path: '/myorder',
            name: 'myorder',
            component: myorder,
            meta: { keepAlive: true }
        }, {
            path: '/findPassword',
            name: 'findPassword',
            component: findPassword
        },
        {
            path: '/login',
            name: 'login',
            component: login
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
            component: personalCenter,
            meta: {
                me: true,
                requireAuth: true
            }
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
            path: '/PackageDetail/:id',
            name: 'PackageDetail',
            component: PackageDetail,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/organizationDetail/:id',
            name: 'organizationDetail',
            component: organizationDetail,
            meta: {
                requireAuth: true
            }
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
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo
        }, {
            path: '/safe',
            name: 'safe',
            component: safe
        }, {
            path: '/addArchives',
            name: 'addArchives',
            component: addArchives
        }, {
            path: '/updateName',
            name: 'updateName',
            component: updateName
        }, {
            path: '/archivesDetail',
            name: 'archivesDetail',
            component: archivesDetail
        }, {
            path: '/updatePhoneNum',
            name: 'updatePhoneNum',
            component: updatePhoneNum
        }, {
            path: '/updatePassword',
            name: 'updatePassword',
            component: updatePassword
        },
        {
            path: '/packL',
            name: 'packL',
            component: packL
        }
    ]
})
//router.push({ 'path': '/packL' });
// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
        if (sessionStorage.getItem('user')) { // 判断是否登录
            next()
        } else { // 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router;