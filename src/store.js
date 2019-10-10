import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    token: localStorage.getItem('token') || null,
    all_universities: [],
    canada: [],
    usa: [],
    china: [],
    load_number: 3
  },
  mutations: {
    LOAD_UNIVERSITIES (state) {
      state.all_universities = require('./data/NewUni.json')
    },
    SIGNUP (state, user) {
      state.login = true
    },
    LOGIN (state, res) {
      if (res.message === 'Auth successful') {
        state.login = true
        state.token = res.token
        console.log(res.token)
      } else {
        state.login = false
        console.log(res.message)
      }
    },
    LOGOUT (state) {
      state.login = false
    },
    LOAD_BY_COUNTRY (state) {
      for (var i = 0; i < 9000; i++) {
        if (state.all_universities[i].country === 'Canada') {
          console.log('Canada found')
          state.canada.push(state.all_universities[i])
        }
      }
    },
    LOAD_MORE_UNIS (state) {
      state.load_number += 6
    },
    LOAD_LESS_UNIS (state) {
      state.load_number -= 6
    }
  },

  getters: {
    loggedIn (state) {
      return state.token !== null
    }
  },

  actions: {
    signup ({ commit }, user) {
      axios.post('/api/user/signup', user).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      commit('SIGNUP', user)
    },
    login ({ commit }, user) {
      axios.post('/api/user/login', user).then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        commit('LOGIN', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    logout ({ commit }) {
      commit('LOGOUT')
      localStorage.removeItem('token')
    },
    loadUniversities ({ commit }) {
      commit('LOAD_UNIVERSITIES')
    },
    loadByCountry ({ commit }) {
      commit('LOAD_BY_COUNTRY')
    },
    loadMore ({ commit }) {
      commit('LOAD_MORE_UNIS')
    },
    loadLess ({ commit }) {
      commit('LOAD_LESS_UNIS')
    }

  }
})
