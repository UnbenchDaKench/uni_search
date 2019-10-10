<template>
  <div class="justify-center">
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in usa.slice(0,load_number_usa)" :key="index">
        <SchoolCard
          :title="item.name"
          :domain="item.web_pages[0]"
          :country="item.country"
          :image="flags.United_States"
        />
      </v-flex>
    </v-layout>
    <div v-if="load_number_usa>=6" class="text-center mb-3 mt-3">
      <v-icon size="100" color="grey" @click="loadLessUsa">fas fa-chevron-up</v-icon>
    </div>
    <div class="text-center mb-3 mt-3">
      <v-icon size="100" color="grey" @click="loadMoreUsa">fas fa-chevron-down</v-icon>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SchoolCard from '../components/SchoolCard'
export default {
  components: {
    SchoolCard
  },
  created () {
    this.loadUniversities()
    this.loadByCountry()
  },
  computed: {
    ...mapState(['login', 'all_universities', 'usa', 'load_number_usa']),

    flags () {
      return require('../data/flags.json')
    }
  },
  methods: {
    ...mapActions(['loadUniversities', 'loadByCountry', 'loadMoreUsa', 'loadLessUsa'])
  }
}
</script>
