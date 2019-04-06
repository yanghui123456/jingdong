import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setAxios from './setaxios' // 引入自己创建的拦截的文件
setAxios() // 调用暴露的方法
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
