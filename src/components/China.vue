<template>
  <div class="justify-center">
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in china.slice(0,load_number_china)" :key="index">
        <SchoolCard
          :title="item.name"
          :domain="item.web_pages[0]"
          :country="item.country"
          :image="flags.China"
        />
      </v-flex>
    </v-layout>
    <div v-if="load_number_china>=6" class="text-center mb-3 mt-3">
      <v-icon size="100" color="grey" @click="loadLessChina">fas fa-chevron-up</v-icon>
    </div>
    <div class="text-center mb-3 mt-3">
      <v-icon size="100" color="grey" @click="loadMoreChina">fas fa-chevron-down</v-icon>
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
    ...mapState(['login', 'all_universities', 'china', 'load_number_china']),

    flags () {
      return require('../data/flags.json')
    }
  },
  methods: {
    ...mapActions(['loadUniversities', 'loadByCountry', 'loadMoreChina', 'loadLessChina'])
  }
}
</script>
