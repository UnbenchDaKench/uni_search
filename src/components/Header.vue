<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <v-btn text to="/">Uni Search</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-flex md2 class="mt-5">
    <SearchBox/>
    </v-flex>
    <span v-if="loggedIn">
      <v-btn text @click="logout">Logout</v-btn>
    </span>
    <span v-else>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/signup">Sign up</v-btn>
    </span>
    <v-btn text to="/collection">Collection</v-btn>
    <v-btn text to="/swipe">Swipe</v-btn>
    <span class="pb-4" @click="lightSwitch">
      <v-btn class disabled text>
        <v-switch class="pt-3" v-model="darkstate" :label="themeState"></v-switch>
      </v-btn>
    </span>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import SearchBox from './SearchBox'

export default {
  data() {
    return {
      school: ""
    };
  },
  components: {
    SearchBox
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
     themeState() {
      return this.$vuetify.theme.dark ? "Dark Mode" : "Light Mode";
    },
    darkstate() {
      return this.$vuetify.theme.dark;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    },
     lightSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
