import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    // 设置vuex的token
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {

  },
    // 类似vue组件中的计算属性
    getters:{

    }
})
