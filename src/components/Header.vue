<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <v-btn text to="/">Uni Search</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span v-if="loggedIn">
      <v-btn @click="logout">Logout</v-btn>
    </span>
    <span v-else>
      <v-btn to="/login">Login</v-btn>
    <v-btn to="/signup">Sign up</v-btn>
    </span>


    <v-btn to="/about">Collection</v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
      loggedIn(){
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    }
  }
};
</script>