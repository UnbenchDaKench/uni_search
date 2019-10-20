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
    errorGet: 404,
    userBasedCountry: [],
    flags: {},
    flagNation: null,
    school: '',
    resultArray: [],
    usersChoice: [],
    filteredCountry: [
      {
        'web_pages': [
          'http://google.com/'
        ],
        'name': 'Default Universisity',
        'alpha_two_code': 'CA',
        'state-province': 'Quebec',
        'domains': [
          'mcgill.ca'
        ],
        'flags': 'http://sciencekids.co.nz/images/pictures/flags680/Canada.jpg',

        'country': 'Canada',
        isvisited: false
      }

    ],
    userId: localStorage.getItem('userId') || null
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
      state.userId = res.userId
      var url = '/api/collection/' + state.userId + '/'
      axios.get(url).then(res => {
        state.usersChoice = res.data.schoolChoices
      })
    },
    LOGOUT (state) {
      state.login = false
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('nationality')
      localStorage.removeItem('nation')
      localStorage.removeItem('userId')
      state.userId = null
      state.token = null
      state.username = null
      state.nationality = null
      window.history.go()
    },

    LOAD_BY_COUNTRY_USER (state, country) {
      for (var i = 0; i < state.all_universities.length; i++) {
        if (state.all_universities[i].country === this.state.nationality) {
          state.userBasedCountry.push(state.all_universities[i])
        }
      }
    },
    PERFORM_SEARCH (state, schools) {
      state.school = schools
    },
    RESULT_ARRAY (state, result) {
      state.resultArray = result
    },
    DELETE_SCHOOL (state, index) {
      state.filteredCountry[index].isvisited = true
      state.filteredCountry.splice(index, 1)
    },
    ADD_USERS_CHOICE (state, index) {
      state.filteredCountry[index].isvisited = true
      state.usersChoice.push(state.filteredCountry[index])
      var id = this.state.userId

      var url = '/api/collection/' + id
      axios.post(url, state.filteredCountry[index])
        .then(res => {
        }).catch(error => {
          console.log(error.message)
        })
    },
    FILTER_COUNTRY (state, nation) {
      state.errorGet = 0
      state.filteredCountry = []
      for (var i = 0; i < state.all_universities.length; i++) {
        if ((state.all_universities[i].country === nation)) {
          for (var j = 0; j < state.usersChoice.length; j++) {
            if (state.usersChoice[j].name === state.all_universities[i].name) {
              state.all_universities[i].isvisited = true
              console.log(state.all_universities[i].isvisited)
            }
          }
          if (state.all_universities[i].isvisited === false) {
            state.filteredCountry.push(state.all_universities[i])
          }
        }
      }
    },
    LOAD_COLLECTIONS (state) {
      var url = '/api/collection/' + state.userId + '/'
      axios.get(url).then(res => {
        state.usersChoice = res.data.schoolChoices
      })
        .catch(error => {
          console.log(error.message)
          state.errorGet = 400
        })
    },
    REMOVE_COLLECTION (state, index) {
      var collectionId = state.usersChoice[index]._id
      var url = '/api/collection/' + state.userId + '/' + collectionId
      axios.delete(url)
      state.usersChoice.splice(index, 1)
    },
    ADD_FROM_SEARCH (state, index) {
      state.resultArray[index].isvisited = true
      state.usersChoice.push(state.resultArray[index])
      var id = this.state.userId

      var url = '/api/collection/' + id
      axios.post(url, state.resultArray[index])
        .then(res => {
        }).catch(error => {
          console.log(error.message)
        })
    },
    UPDATE (state, res) {
      localStorage.setItem('username', res.username)
      localStorage.setItem('nationality', res.nationality)
      state.username = res.username
      state.nationality = res.nationality
    }

  },

  getters: {
    loggedIn (state) {
      return state.token !== null
    },
    resultArray (state) {
      return state.resultArray
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
            const userId = res.data.userId
            const username = res.data.username
            const nationality = res.data.nationality
            localStorage.setItem('nationality', nationality)
            localStorage.setItem('username', username)
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)
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
    performSearch ({ commit }, school) {
      commit('PERFORM_SEARCH', school)
    },
    resultarray ({ commit }, result) {
      commit('RESULT_ARRAY', result)
    },
    deleteSchool ({ commit }, index) {
      commit('DELETE_SCHOOL', index)
    },
    addUsersChoice ({ commit }, index) {
      commit('ADD_USERS_CHOICE', index)
    },
    filterCountry ({ commit }, nation) {
      commit('FILTER_COUNTRY', nation)
    },
    loadCollections ({ commit }) {
      commit('LOAD_COLLECTIONS')
    },
    removeCollection ({ commit }, index) {
      commit('REMOVE_COLLECTION', index)
    },
    addUsersChoiceFromSearch ({ commit }, index) {
      commit('ADD_FROM_SEARCH', index)
    },
    update ({ commit }, user) {
      var url = '/api/user/' + this.state.userId + '/'
      axios.post(url, user)
        .then(res => {
          commit('UPDATE', res.data)
          console.log(res.data)
        })
    },
    deleteUser ({ commit }) {
      var url = '/api/user/' + this.state.userId + '/'
      axios.delete(url).then(res => {
      })
      commit('LOGOUT')
    }

  }
})
