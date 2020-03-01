import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    head: localStorage.getItem('head'),
    token: localStorage.getItem('token')
  },
  mutations: {
    setHead (state, head) {
      state.head = head
      localStorage.setItem('head', head)
    },
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
  },
  modules: {
  }
})
