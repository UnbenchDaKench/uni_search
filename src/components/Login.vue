<template>
  <v-container>
    <v-layout>
      <v-flex md4 mr-10>
        <v-form>
          <v-text-field v-model="name" label="Username"></v-text-field>

          <v-text-field v-model="password" label="Password"></v-text-field>
          <v-btn @click="login()">Log in</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      password: ""
    }
  },
  methods: {
    login() {
      
      this.$store.dispatch('login', {
        email: this.name,
        password: this.password
      })
      .then(success => {
        this.$router.push('/')
      })
      
    }
  }
}
</script>