<template>
  <div>
    <div v-if="school.length > 1">
      <Search :key="componentKey" />
    </div>
    <div v-else>
      <v-parallax
        class="blurred mb-10"
        src="https://www.stevenson.edu/sebin/r/q/video-bg.jpg"
        height="1000"
      >
        <v-row align="center" justify="center">
          <div class="text-div">
            <h1>Lorem Ipsul</h1>
            <p>lorem ipsul lorem ipsul lorem ipsul</p>
            <v-btn x-large color="green" block to="signup">Sign up</v-btn>
          </div>
        </v-row>
      </v-parallax>
      <v-divider></v-divider>

      <Canada />
    </div>
  </div>
</template>

<script>
let timeout = null;

import Canada from "./Canada";
import SchoolCard from "../components/SchoolCard";
import Search from "../components/Search";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      componentKey: 0
    };
  },
  components: {
    Canada,
    SchoolCard,
    Search
  },
  computed: {
    ...mapState(["school", "flags", "resultArray"]),
  },
  watch: {
    school: function(school){
      timeout = setTimeout(() => {

        this.forceRender()
      }, 0)
    }
  },
  methods: {
    ...mapActions(["loadUniversities", "loadFlags"]),
    forceRender() {
      this.componentKey += 1
    }
  },
  created() {
    this.loadUniversities();
  },
  mounted(){
    this.forceRender();

  }
};
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
}
</style>