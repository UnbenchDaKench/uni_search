<template>
  <div>
    <v-text-field
      v-model="school"
      label="Search"
      solo
      @blur="searchResultsVisible = false"
      @focus="searchResultsVisible = true"
      @keydown="performSearch(school)"
    ></v-text-field>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
let timeout = null;
export default {
  data() {
    return {
      school: "",
      all_universities: null,
      searchResultsVisible: false,
      result: [],
      option: {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["name"]
      }
    };
  },
  created() {
    this.loadUniversities();
    this.loadFlags();
    this.all_universities = require("../data/NewUni.json");
  },
  computed: {
    ...mapState(["userBasedCountry", "username", "nationality", "flagNation"])
  },
  methods: {
    ...mapActions(["loadUniversities", "loadFlags"]),
    performSearch(school) {
      clearTimeout(timeout);

      // Make a new timeout set to go off in 800ms
      timeout = setTimeout(() => {
        this.$store.dispatch("performSearch", this.school);
      }, 0);
      this.search(this.school);
    },
    search(school) {
      this.$search(this.school, this.all_universities, this.option).then(
        results => {
          this.result = results;
          this.$store.dispatch("resultarray", this.result);
        }
      );
    }
  }
};
</script>