import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    head: localStorage.getItem('head'),
    token: localStorage.getItem('token'),
    status: localStorage.getItem('status'),
    uuid: localStorage.getItem('uuid')
  },
  mutations: {
    setHead (state, head) {
      state.head = head
      localStorage.setItem('head', head)
    },
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setStatus (state, status) {
      state.status = status
      localStorage.setItem('status', status)
    },
    setUuid (state, uuid) {
      state.uuid = uuid
      localStorage.setItem('uuid', uuid)
    }
  },
  actions: {
  },
  modules: {
  }
})
