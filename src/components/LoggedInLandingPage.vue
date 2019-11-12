<template>
  <div>
    <div v-if="school.length > 1">
      <v-flex md6 class="center" v-if="resultArray.length <= 0">
        <v-card elevation="15" min-height="200">
          <v-card-title class="justify-center">There are no match for the search</v-card-title>
          <v-card-text style="text-align: center;">
            <router-link>Reset filter</router-link>
          </v-card-text>
        </v-card>
      </v-flex>
      <Search :key="componentKey" v-else />
    </div>
    <div v-else>
       <v-parallax
    dark
    src="https://i.ytimg.com/vi/mRMDkaozI2Q/maxresdefault.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight mb-4">Uni Search Now</h1>
        <h4 class="subheading">High School to University Transition made easy!</h4>
      </v-col>
    </v-row>
  </v-parallax>
      <v-divider></v-divider>

      <!-- <h1 class="text-center">Welcome {{username}}</h1> -->
      <v-layout row wrap justify-center>
        <v-flex
          lg3
          md3
          sm12
          xs12
          ma-5
          pa-5
          v-for="(item,index) in userBasedCountry.slice(0, 6)"
          :key="index"
        >
          <SchoolCard
            :title="item.name"
            :domain="item.web_pages[0]"
            :country="item.country"
            :image="flagNation"
          />
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <team />
    </div>
  </div>
</template>

<script>
import SchoolCard from '../components/SchoolCard'
import Search from '../components/Search'
import team from '../components/team'

import { mapState, mapActions } from 'vuex'
let timeout = null

export default {
  data () {
    return {
      nation: '',
      componentKey: 0
    }
  },
  components: {
    SchoolCard,
    Search,
    team
  },
  created () {
    this.loadUniversities()
    this.loadFlags()
    this.getSchool()
  },
  watch: {
    school: function (school) {
      timeout = setTimeout(() => {
        this.forceRender()
      }, 0)
    }
  },
  mounted () {
    this.loadByCountryUser()
  },
  computed: {
    ...mapState([
      'userBasedCountry',
      'username',
      'nationality',
      'flagNation',
      'school',
      'resultArray',
      'flags'
    ])
  },
  methods: {
    ...mapActions(['loadUniversities', 'loadFlags']),

    loadByCountryUser () {
      this.$store.dispatch('loadByCountryUser', 'Nigeria')
    },
    getSchool () {
      this.$store.state.school
    },
    forceRender () {
      this.componentKey += 1
    }
  }
}
</script>

<style scoped>
.text-div {
  position: absolute;
  background-size: auto;
  top: 20vw;
  left: 50%;
  color: white;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  /* width: 40%; */
  text-align: center;
}
.blurred {
  /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */
  /* background: rgb(0,0,0) !important;
    background: rgba(0,0,0, 0.9) !important;  Black w/opacity/see-through */
  /* src="https://www.stevenson.edu/sebin/r/q/video-bg.jpg" */
}
.center {
  position: relative;
  top: 15vw;
  left: 25vw;
}
</style>
