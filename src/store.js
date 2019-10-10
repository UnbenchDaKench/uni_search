import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'any-promise'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exists: false,
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
    SIGNUPERROR (state, message) {
      if (message === 'Request failed with status code 409') {
        state.exists = true
      }
    },
    LOGIN (state, res) {
      state.token = res.token
    },
    LOGOUT (state) {
      state.login = false
      localStorage.removeItem('token')
      state.token = null
    },
    LOAD_BY_COUNTRY (state) {
      for (var i = 0; i < state.all_universities.length; i++) {
        if (state.all_universities[i].country === 'Canada') {
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
      return new Promise((resolve, reject) => {
        axios.post('/api/user/signup', user)
          .then(({ res, status }) => {
            resolve(true)
          }).catch(err => {
            reject(err)
          })
      })
    },
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('/api/user/login', user)
          .then(res => {
            const token = res.data.token
            localStorage.setItem('token', token)
            commit("LOGIN", token)
            resolve(true)
          }).catch(err => {
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      commit('LOGOUT')
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
