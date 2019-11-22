<template>
  <v-layout row wrap justify-center>
    <v-flex md3 ma-10 pa-6 v-for="(item,index) in resultArray.slice(0,6)" :key="index">
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
</template>
<script>
import SchoolCard from "../components/SchoolCard";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    SchoolCard
  },
  computed: {
    ...mapState(["school", "flags", "resultArray"])
  },
  methods: {
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    },
    addtoBackpack(index) {
      this.$store.dispatch("addUsersChoiceFromSearch", index);
    }
  }
};
</script>
