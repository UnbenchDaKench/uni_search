import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    SIGNUP(state, user) {
      console.log(user)
    },
    LOGIN(state, res) {
      if (res.message === "Auth successful") {
        state.login = true
        console.log(res.message)
      }
      else {
        state.login = false
        console.log(res.message)

      }
    }
  },
  actions: {
    signup({ commit }, user) {
      axios.post('/api/user/signup', user).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      commit('SIGNUP', user)
    },
    login({ commit }, user) {
      axios.post('/api/user/login', user).then(res => {
        commit('LOGIN', res.data)
      }).catch(err => {
        console.log(err)
      })

    }

  }
})
