import Mock from 'mockjs'
import userAPI from './user'


// 用户数据
Mock.mock('/user/mane', 'post', userAPI.userInfo)

//体检项目
export const API_URL = 'http: //www.yeafon.com/';



export default Mock