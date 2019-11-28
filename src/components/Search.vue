<template>
  <div>
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in resultArray.slice(0,incrementor)" :key="index">
        <SchoolCard
          :title="item.name"
          :domain="item.web_pages[0]"
          :country="item.country"
          :image="imageSrc(item.country)"
        />
        <v-btn @click="addtoBackpack(index)" color="green" text>
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-icon class="mr-5" @click="increaseIncrementor()" size="80">fas fa-chevron-down</v-icon>
      <v-icon @click="decreaseIncrementor()" size="80">fas fa-chevron-up</v-icon>
    </v-layout>
  </div>
</template>
<script>
import SchoolCard from "../components/SchoolCard";
import { mapState } from "vuex";
export default {
  data() {
    return {
      incrementor: 6
    };
  },
  components: {
    SchoolCard
  },
  computed: {
    ...mapState(["school", "flags", "resultArray"])
  },
  methods: {
    increaseIncrementor() {
      this.incrementor += 6;
    },
    decreaseIncrementor() {
      if (this.incrementor === 6) {
        this.incrementor = 6;
      } else {
        this.incrementor -= 6;
      }
    },
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    },
    addtoBackpack(index) {
      if (this.$store.state.token === null) {
        this.$router.push("/login");
      } else {
        this.$store.dispatch("addUsersChoiceFromSearch", index);
      }
    }
  }
};
</script>
