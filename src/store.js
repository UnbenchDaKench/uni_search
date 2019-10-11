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
    topRatedSchools: [
      {
        'web_pages': [
          'http://www.mcgill.ca/'
        ],
        'name': 'McGill University',
        'alpha_two_code': 'CA',
        'state-province': 'Quebec',
        'domains': [
          'mcgill.ca'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/Canada.jpg',

        'country': 'Canada'
      },
      {
        'web_pages': [
          'http://www.stanford.edu/'
        ],
        'name': 'Stanford University',
        'alpha_two_code': 'US',
        'state-province': 'CA',
        'domains': [
          'stanford.edu'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/United_States.jpg',
        'country': 'United States'
      },
      {
        'web_pages': [
          'http://www.aup.fr/'
        ],
        'name': 'American University of Paris',
        'alpha_two_code': 'FR',
        'state-province': null,
        'domains': [
          'aup.fr'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/France.jpg',

        'country': 'France'
      },
      {
        'web_pages': [
          'http://www.princeton.edu/'
        ],
        'name': 'Princeton University',
        'alpha_two_code': 'US',
        'state-province': 'Un',
        'domains': [
          'princeton.edu'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/United_States.jpg',

        'country': 'United States'
      },
      {
        'web_pages': [
          'http://www.up.ac.za/'
        ],
        'name': 'University of Pretoria',
        'alpha_two_code': 'ZA',
        'state-province': null,
        'domains': [
          'up.ac.za'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/South_Africa.jpg',

        'country': 'South Africa'
      },
      {
        'web_pages': [
          'http://www.ubc.ca/'
        ],
        'name': 'University of British Columbia',
        'alpha_two_code': 'CA',
        'state-province': 'BC',
        'domains': [
          'ubc.ca'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/Canada.jpg',

        'country': 'Canada'
      }

    ],
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
    }

  }
})
