<template>
  <div>
    <div v-if="school.length > 1">
      <Search :key="componentKey" />
    </div>
    <div v-else>
      <v-parallax
        class="blurred mb-10"
        height="800"
        src="https://i.ytimg.com/vi/mRMDkaozI2Q/maxresdefault.jpg"
      >
        <v-row align="center" justify="center">
          <div class="text-div">
            <h1>Uni Search</h1>
            <p>High School to University Transition Made Easy</p>
            <v-btn x-large color="green" block to="signup">Sign up</v-btn>
          </div>
        </v-row>
      </v-parallax>
      <v-divider></v-divider>

      <Canada />
      <v-divider></v-divider>
      <team/>
    </div>
     <v-flex md6 sm12 xs12 lg6 class="center" v-if="resultArray.length< 1 && school.length > 2">
        <v-card elevation="15" min-height="200">
          <v-card-title class="justify-center">There are no match for the search</v-card-title>
          <v-card-text style="text-align: center;">
            <router-link>Reset filter</router-link>
          </v-card-text>
        </v-card>
      </v-flex>
  </div>
</template>

<script>
import Canada from './Canada'
import SchoolCard from '../components/SchoolCard'
import Search from '../components/Search'
import team from '../components/team'

import { mapState, mapActions } from 'vuex'

let timeout = null
export default {
  data () {
    return {
      componentKey: 0
    }
  },
  components: {
    Canada,
    SchoolCard,
    Search,
    team
  },
  computed: {
    ...mapState(['school', 'flags', 'resultArray'])
  },
  watch: {
    school: function (school) {
      timeout = setTimeout(() => {
        this.forceRender()
      }, 0)
    }
  },
  methods: {
    ...mapActions(['loadUniversities', 'loadFlags']),
    forceRender () {
      this.componentKey += 1
    }
  },
  created () {
    this.loadUniversities()
  },
  mounted () {
    this.forceRender()
  }
}
</script>

<style scoped>
.text-div {
  top: 20vw;
  position: absolute;
  left: 50%;
  color: white;
  font-size: 60px;
  font-weight: bold;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  text-align: center;
}
.blurred {
  /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */
  /* background: rgb(0,0,0) !important;
    background: rgba(0,0,0, 0.9) !important;  Black w/opacity/see-through */
        /* src="https://www.stevenson.edu/sebin/r/q/video-bg.jpg" */
}
</style>
