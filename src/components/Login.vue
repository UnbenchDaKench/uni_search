<template>
  <v-container>
    <v-layout justify-center="">
      <v-flex md4>
        <v-form>
          <v-alert :value="errorLogin" type="error">Password or Email is incorrect</v-alert>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" :error="error" required></v-text-field>

          <v-text-field :type="'password'" v-model="password" label="Password"></v-text-field>
          <div class="text-center">
            <v-btn color="green" mt-3 @click="login()">Log in</v-btn>
          </div>
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
          window.history.go()
        })
        .catch(errorLogin => {
          this.errorLogin = true;
        });
    }
  }
};
</script>
