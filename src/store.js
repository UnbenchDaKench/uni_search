import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'any-promise'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || null,
    nationality: localStorage.getItem('nationality') || null,
    token: localStorage.getItem('token') || null,
    all_universities: [],
    canada: [],
    usa: [],
    china: [],
    load_number: 3,
    load_number_usa: 3,
    load_number_china: 3,
    userBasedCountry: [],
    flags: {},
    flagNation: null
  },
  mutations: {
    LOAD_UNIVERSITIES (state) {
      state.all_universities = require('./data/NewUni.json')
    },
    LOAD_FLAG (state, nation) {
      state.flags = require('./data/flags.json')
      state.flagNation = state.flags[state.nationality]
    },
    SIGNUPERROR (state, message) {
      if (message === 'Request failed with status code 409') {
        state.exists = true
      }
    },
    LOGIN (state, res) {
      state.token = res.token
      state.username = res.username
    },
    LOGOUT (state) {
      state.login = false
      localStorage.removeItem('token')
      state.token = null
      state.username = null
      state.nationality = null
    },
    LOAD_BY_COUNTRY (state) {
      for (var i = 0; i < state.all_universities.length; i++) {
        if (state.all_universities[i].country === 'Canada') {
          state.canada.push(state.all_universities[i])
        } else if (state.all_universities[i].country === 'United States') {
          state.usa.push(state.all_universities[i])
        } else if (state.all_universities[i].country === 'China') {
          state.china.push(state.all_universities[i])
        }
      }
    },
    LOAD_BY_COUNTRY_USER (state, country) {
      for (var i = 0; i < state.all_universities.length; i++) {
        if (state.all_universities[i].country === this.state.nationality) {
          state.userBasedCountry.push(state.all_universities[i])
        }
      }
    },
    LOAD_MORE_UNIS_CANADA (state, country) {
      state.load_number += 3
    },
    LOAD_LESS_UNIS_CANADA (state) {
      state.load_number -= 3
    },
    LOAD_MORE_UNIS_USA (state, country) {
      state.load_number_usa += 3
    },
    LOAD_LESS_UNIS_USA (state) {
      state.load_number_usa -= 3
    },
    LOAD_MORE_UNIS_CHINA (state, country) {
      state.load_number_china += 3
    },
    LOAD_LESS_UNIS_CHINA (state) {
      state.load_number_china -= 3
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
            const username = res.data.username
            const nationality = res.data.nationality
            console.log(res.data)
            localStorage.setItem('nationality', nationality)
            localStorage.setItem('username', username)
            localStorage.setItem('token', token)
            commit('LOGIN', res.data)
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
    loadFlags ({ commit }, nation) {
      commit('LOAD_FLAG', nation)
    },
    loadByCountry ({ commit }) {
      commit('LOAD_BY_COUNTRY')
    },
    loadByCountryUser ({ commit }, country) {
      commit('LOAD_BY_COUNTRY_USER', country)
    },
    loadMore ({ commit, payload }) {
      commit('LOAD_MORE_UNIS_CANADA', payload)
    },
    loadLess ({ commit, payload }) {
      commit('LOAD_LESS_UNIS_CANADA', payload)
    },
    loadMoreUsa ({ commit, payload }) {
      commit('LOAD_MORE_UNIS_USA', payload)
    },
    loadLessUsa ({ commit, payload }) {
      commit('LOAD_LESS_UNIS_USA', payload)
    },
    loadMoreChina ({ commit, payload }) {
      commit('LOAD_MORE_UNIS_CHINA', payload)
    },
    loadLessChina ({ commit, payload }) {
      commit('LOAD_LESS_UNIS_CHINA', payload)
    }

  }
})
