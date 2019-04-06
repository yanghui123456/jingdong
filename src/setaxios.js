// 该文件是自己建的
import axios from 'axios'
import store from './store'
import router from './router'
// 1、http请求拦截，把token放到请求头中带给后端
// 2、把后台返回的数据进行一轮的封装
export default function setAxios() {
    //拦截的写法是固定的
    axios.interceptors.request.use(
        config=>{
            // 如果vuex中存在token，就把值放到请求头中
            if(store.state.token) {
                config.headers.token = store.stae.token
            }
            return config
        }
    )
    // 每次有返回的请求，都会先经过这里
    // 返回数据封装 少些一层
    axios.interceptors.response.use(
        response=>{
            if (response.status == 200) {
                const data = response.data;
                if(data.code == '-1') {
                    // 登录过期，清空vuex和localstorage中的token
                    store.commit('setToken', '');
                    window.localStorage.removeItem('token')
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}