<template>
  <v-container>
    <v-layout>
      <v-flex md4 mr-10>
        <v-form>
          <v-alert :value="errorLogin"
          type="error">
            Password or Email is incorrect
          </v-alert>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" :error="error" required></v-text-field>

          <v-text-field  :type="'password'" v-model="password" label="Password"></v-text-field>
          <v-btn @click="login()">Log in</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
       emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      error: false,
      errorLogin: false
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(success => {
          this.$router.push("/");
        })
        .catch(errorLogin => {
          this.errorLogin = true
        })
    }
  }
};
</script>