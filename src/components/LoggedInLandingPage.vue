<template>
  <div>
   <div v-if="school.length > 1">
      <Search :key="componentKey" />
    </div>
    <div v-else>
      <v-parallax
        class="blurred"
        src="https://www.stevenson.edu/sebin/r/q/video-bg.jpg"
        height="1000"
      >
        <v-row align="center" justify="center">
          <div class="text-div">
            <h1>Welcome</h1>
            <p>{{username}}</p>
            <v-btn x-large color="green" block to="/swipe">Explore</v-btn>
          </div>
        </v-row>
      </v-parallax>
      <v-divider></v-divider>

      <!-- <h1 class="text-center">Welcome {{username}}</h1> -->
      <v-layout row wrap justify-center>
        <v-flex md3 ma-10 pa-6 v-for="(item,index) in userBasedCountry.slice(0, 3)" :key="index">
          <SchoolCard
            :title="item.name"
            :domain="item.web_pages[0]"
            :country="item.country"
            :image="flagNation"
          />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
let timeout = null
import SchoolCard from "../components/SchoolCard";
import Search from "../components/Search";

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      nation: "",
      componentKey: 0
    };
  },
  components: {
    SchoolCard,
    Search
  },
  created() {
    this.loadUniversities();
    this.loadFlags();
    this.getSchool();
  },
    watch: {
    school: function(school){
      timeout = setTimeout(() => {

        this.forceRender()
      }, 0)
    }
  },
  mounted() {
    this.loadByCountryUser();
  },
  computed: {
    ...mapState([
      "userBasedCountry",
      "username",
      "nationality",
      "flagNation",
      "school",
      "resultArray",
      "flags"
    ])
  },
  methods: {
    ...mapActions(["loadUniversities", "loadFlags"]),

    loadByCountryUser() {
      this.$store.dispatch("loadByCountryUser", "Nigeria");
    },
    getSchool() {
      this.$store.state.school;
    },
    forceRender() {
      this.componentKey += 1
    }
  }
};
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
}
</style>