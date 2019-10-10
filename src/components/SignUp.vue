<template>
  <v-container>
    <v-layout justify-center>
      <v-flex md4>
        <v-form>
          <v-alert :value="errorSignUp" type="error">This user already exists, try again</v-alert>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" :error="error" required></v-text-field>

          <v-text-field v-model="username" :rules="nameRules" :error="error" label="Username"></v-text-field>
          <v-text-field
            :type="'password'"
            name="input-10-2"
            label="password"
            v-model="password"
            hint="At least 8 characters"
            class="input-group--focused"
            :rules="passwordRules"
            :error="error"
          ></v-text-field>
          <v-text-field
            :type="'password'"
            name="input-10-2"
            label="Confirm Password"
            v-model="confirm_password"
            hint="At least 8 characters"
            class="input-group--focused"
            :rules="confirmpasswordRules"
            :error="error"
          ></v-text-field>
          <div class="text-center">
            <v-btn @click="signup">Sign up</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      nameRules: [
        v => !!v || "Username is required",
        v => v.length <= 10 || "Username must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "password is required"],
      confirmpasswordRules: [v => !!v || "password do not match"],
      error: false,
      error1: false,
      errorSignUp: false
    };
  },
  computed: {
    ...mapState(["exists"])
  },
  methods: {
    signup() {
      if (this.email !== "") {
        if (this.password !== this.confirm_password) {
          this.error1 = true;
          this.confirm_password = "";
        } else {
          this.error1 = true;

          this.$store
            .dispatch("signup", {
              email: this.email,
              username: this.username,
              password: this.password
            })
            .then(success => {
              this.$router.push("/login");
            })

            .catch(errorSignUp => {
              this.errorSignUp = true;
            });
        }
      } else {
        this.error = true;
      }
    }
  }
};
</script>
