import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 路径为/重定向到login
    {
      path: '/',
      name: 'login',
      redirect:'/login'
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
