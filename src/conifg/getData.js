import fetch from './fetch'
import { getStore } from './common'

/**
 * 获取类别项目
 */
export const packageTypes = () => fetch('medicalplan/codeValues', {
    type: 'post'
});

/**
 * 获取热门套餐和列表
 */
export const hotPackage = (page, pageNum) => fetch('medicalplan/rows', {

});
/**
 *  获取热门机构和列表
 */
export const hotMechanism = () => fetch('organization/getList', {

});

/**
 *medicalplan/findById  套餐详情
 */

export const packageDetail = (packageId) => fetch('medicalplan/findById', {
    id: packageId


})

/**
 *organization/organizationByMedicalId 机构详情
 */

export const mechanismDetail = (mechanismId) => fetch('organization/organizationByMedicalId', {
        id: mechanismId


    })
    /**
     * 获取地区
     */

export const region = () => fetch('city/cityCountryList', {


})


/****
 * 获取性质
 */
export const organization = () => fetch('organization/value', {

 
})
 
    /**
     * 登录
     */
export const login = (ph, pass, flag) => fetch('user/login', {
        type: 'post',
        phone: ph,
        password: pass,
        flag: false
            // params={"name":$.cookie("name"),"phone":$.cookie("name"),"password":$.cookie("pwd"),"flag":"false"};
    })
    /**
     * 判断手机是否已经注册
     *
     */
export const BooleanLogin = (ph) => fetch('user/checkPhone', {
    type: 'post',
    phone: ph

    // params={"name":$.cookie("name"),"phone":$.cookie("name"),"password":$.cookie("pwd"),"flag":"false"};
})

/* 提交订单  */
export const submitOrderNow = () => fetch('selfCenter/submitOrderNow', {
    type: 'post' 
})







