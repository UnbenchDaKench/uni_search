<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn  text to="/">Uni Search</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-btn to = '/login'>
         Login
     </v-btn>
     <v-btn to = '/signup'>
         Sign up
     </v-btn>
     <v-btn @click="logout">
         Logout
     </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch("logout").then(this.$router.push("/"))
    }
  }
}
</script>