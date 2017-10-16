let baseUrl = 'http://192.168.0.116:8080/yftj-web/';
   //let baseUrl = 'http://www.yeafon.com/';
let routerMode = 'history';
let imgBaseUrl = 'http://img.yeafon.com';


if (process.env.NODE_ENV == 'development') {

} else if (process.env.NODE_ENV == 'production') {

    // baseUrl = 'http://192.168.0.116:8080/yftj-web/';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}

//公共定义的东西