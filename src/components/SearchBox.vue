<template>
  <div>
    <div class="mt-6">
      <v-text-field
        v-model="school"
        label="Search by School Name/Country"
        clearable
        outlined
        @blur="searchResultsVisible = false"
        @keydown="performSearch(school)"

      ></v-text-field>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
let timeout = null
export default {
  data () {
    return {
      school: '',
      list: 1,
      all_universities: null,
      searchResultsVisible: false,
      result: [],
      option: {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [ 'name','country']
      }
    }
  },
  created () {
    this.loadUniversities()
    this.loadFlags()
    this.all_universities = require('../data/NewUni.json')
  },
  computed: {
    ...mapState(['userBasedCountry', 'username', 'nationality', 'flagNation', 'resultArray'])
  },
  methods: {
    ...mapActions(['loadUniversities', 'loadFlags']),
    performSearch (school) {
      clearTimeout(timeout)

      // Make a new timeout set to go off in 800ms
      timeout = setTimeout(() => {
        this.$store.dispatch('performSearch', this.school)
      }, 0)
      this.search()
      this.routerPush()
    },
    routerPush () {
      this.$router.push('/')
    },
    search (school) {
      this.$search(this.school, this.all_universities, this.option).then(
        results => {
          this.result = results
          this.$store.dispatch('resultarray', this.result)
        }
      )
    }
  }
}
</script>
