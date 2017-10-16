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
 *organization/organizationByMedicalId 套餐里面的机构详情
 */

export const mechanismDetail = (mechanismId) => fetch('organization/organizationByMedicalId', {
        id: mechanismId


    })
    /**
     *organization/getById  机构详情id
     */

export const organizationDetailId = (organizationId) => fetch('organization/getById ', {
        id: organizationId


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
    /**
     * 获取验证码
     */
export const getCode = (phone) => fetch('user/sendCode', {
        type: 'post',
        phone: phone


    })
    /****
     * 验证码是否正确
     */
export const VerificationCode = (code) => fetch('user/checkCode', {
        type: 'post',
        code: code


    })
    /****params={"phone":_phone,"password":jQuery.md5(_pass),"code":_code};
     * 注册
     */
export const register = (phone, password, code) => fetch('user/insert', {
        type: 'post',
        phone: phone,
        password: password,
        code: code


    })
    /**
     * 修改手机号
     */
export const revisePhone = (phone, code) => fetch('selfCenter/changePhone', {
        type: 'post',
        phone: phone,
        code: code



})
    /****
     * 注册
     */
    /* 提交订单  */
export const submitOrderNow = (orderRequest) => fetch('selfCenter/submitOrderNow', {
    type: 'post',
    /*people: contactName,
	phone: contactPhone,
	details: details*/
    orderRequest: orderRequest
})

/* 个人中心  getOpenId  */ 
/*export const getOpenId = () => fetch('selfCenter/api/weixin/getOpenId', {
    type: 'get' ,
    withCredentials:true 
}) */


/* 个人中心  个人信息 */ 
export const userId = () => fetch('selfCenter/userInfoById', { }) 

/* 个人中心  修改个人信息 */
export const upDateUser = (name, sex, birthday, maritalStatus) => fetch('center/editUserCenter', {  
	type: 'post', 
	name: name,
	sex: sex,
	birthday: birthday,
	maritalStatus: maritalStatus
}) 

/* 档案  */ 
export const Management = () => fetch('selfCenter/fileManagement/selectUserAllFile', {
	
})



