import Mock from 'mockjs'


const mane = []
const usercount = 20

// 用户数据循环
for (let i = 0; i < usercount; i++) {
    mane.push(Mock.mock({
        'id|+1': i + 1,
        'index': i,
        'name': '@cname', // 随机产生一个中文的姓名
        'email': '@email',
        'status': '@boolean',
        'img': 'images/hot-type-' + i + '.jpg',
        'parice|1-100': 10
    }))
}


// http: //www.yeafon.com/medicalplan/codeValues
export default {
    userInfo: () => mane

}