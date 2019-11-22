<template>
  <div v-if="usersChoice.length < 1">
    <v-flex md6 sm12 xs12 lg6 class="center">
      <v-card elevation="15" min-height="200">
        <v-card-title class="justify-center">Your backpack is empty</v-card-title>
        <v-card-text style="text-align: center;">
          <router-link to="/swipe">Click here to add schools</router-link>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
  <div v-else>
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in usersChoice" :key="index">
        <SchoolCard
          :key="key"
          :title="item.name"
          :domain="item.web_pages[0]"
          :country="item.country"
          :image="imageSrc(item.country)"
          :showButton="showForm"
        />
        <v-btn @click="popForm(index)" text color="green">delete</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SchoolCard from "./SchoolCard";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showForm: false,
      key: 0
    };
  },
  components: {
    SchoolCard
  },
  computed: {
    ...mapState(["usersChoice"])
  },
  created() {
    this.$store.dispatch("loadCollections");
  },
  methods: {
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    },
    forceRender() {
      this.key += 1;
    },
    popForm(index) {
      this.$store.dispatch("removeCollection", index);
      this.forceRender();
    }
  }
};
</script>

<style scoped>
.center {
  position: relative;
  top: 15vw;
  left: 25vw;
}
</style>
