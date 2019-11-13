<template>
  <div>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list class="pa-1">

        <v-list-item v-for="(route, index) in routes" :key="index" :to="route.path">
          <v-list-item-content>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  <span v-if="loggedIn">
        <v-list-item>
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on">Logout</v-list-item-title>
            </template>
            <v-card>
              <v-card-title>Are you sure you want to Logout?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="green darken-1" text @click="logout">Confirm</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
        </span>
         <span v-else>
           <v-list-item to="/login">
             <v-list-item-title>Login</v-list-item-title>
           </v-list-item>
        </span>
        <v-list-item @click="lightSwitch">
          <v-switch class="pt-0" :label="themeState"></v-switch>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar app>
      <router-link to="/">

        <v-toolbar-title class="headline text-uppercase">
          <v-avatar >
            <img
        src="../assets/Uni_Search_Logo.png"
        alt="Logo"
      >
    </v-avatar>
      </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
       <v-row class="hidden-md-and-down mt-2">
          <v-col md="12">
            <SearchBox />
          </v-col>
        </v-row>
      <v-toolbar-items class="hidden-md-and-down">

        <v-btn text to="/collection">Backpack</v-btn>
        <v-btn text to="/swipe">Swipe</v-btn>
        <v-btn text to="/contactus">About Us</v-btn>
        <v-btn text to="/profile">Profile</v-btn>
        <span class="mt-2" @click="lightSwitch">
          <v-btn class disabled text>
            <v-switch class="pt-3" v-model="darkstate" :label="themeState"></v-switch>
          </v-btn>
        </span>
        <span v-if="loggedIn" class="mt-4 ml-5">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">Logout</v-btn>
            </template>
            <v-card>
              <v-card-title>Are you sure you want to Logout?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="green darken-1" text @click="logout">Confirm</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </span>
        <span v-else class="mt-4 ml-5">
          <v-btn text to="/login">Login</v-btn>
        </span>
      </v-toolbar-items>
  <!-- <v-layout row> -->

      <v-flex md6 sm4 class="mt-4 mr-10 hidden-lg-and-up">
        <SearchBox />
      </v-flex>
  <!-- </v-layout> -->

      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBox from './SearchBox'

export default {
  data () {
    return {
      school: '',
      dialog: false,
      drawer: false
    }
  },
  components: {
    SearchBox
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    },
    themeState () {
      return this.$vuetify.theme.dark ? 'Dark Mode' : 'Light Mode'
    },
    darkstate () {
      return this.$vuetify.theme.dark
    },
    routes () {
      return require('../data/routes.json')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(this.$router.push('/'))
    },
    lightSwitch () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
