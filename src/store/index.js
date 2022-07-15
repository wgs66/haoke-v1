import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {}
  },
  getters: {},
  mutations: {
    SET_Token(state, token) {
      state.user = token
      setToken(token)
    }
  },
  actions: {},
  modules: {}
})
