<template>
  <v-container>
    <v-layout>
      <v-flex md4>
        <v-form>
          <v-text-field v-model="name" label="Email" required></v-text-field>

          <v-text-field v-model="username" label="Username"></v-text-field>
          <v-text-field v-model="password" label="Password"></v-text-field>
          <v-text-field v-model="confirm_password" label="Confirm Password"></v-text-field>
          <v-btn @click="signup">Sign up</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      username: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch("signup", {
          email: this.name,
          username: this.username,
          password: this.password
        })
        .then(success => {
          this.$router.push("/");
        });
    }
  }
};
</script>