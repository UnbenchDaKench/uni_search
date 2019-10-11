<template>
  <div class="justify-center">
    <h1 class="text-center">Welcome {{username}}</h1>
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in userBasedCountry.slice(0, 9)" :key="index">
        <SchoolCard :title="item.name" :domain="item.web_pages[0]" :country="item.country" :image="flagNation" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SchoolCard from "../components/SchoolCard";
import { mapState, mapActions } from "vuex";

export default {
    data(){
        return{
            nation: this.nationality
        }

    },
  components: {
    SchoolCard
  },
  created() {
    this.loadUniversities()
    this.loadFlags()
      
  },
  mounted() {
    this.loadByCountryUser();
  },
  computed: {
    ...mapState(["userBasedCountry", "username", "nationality", "flagNation"]),
  },
  methods: {
    ...mapActions(["loadUniversities","loadFlags"]),
   
    loadByCountryUser() {
      this.$store.dispatch("loadByCountryUser", "Nigeria");
    }
  }
};
</script>