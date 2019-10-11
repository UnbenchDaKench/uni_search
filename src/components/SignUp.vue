<template>
  <v-container>
    <v-layout justify-center>
      <v-flex md4>
        <v-form>
          <v-alert :value="errorSignUp" type="error">This user already exists, try again</v-alert>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" :error="error" required></v-text-field>
          <v-text-field v-model="username" :rules="nameRules" :error="error" label="Username"></v-text-field>
            <v-select
              v-model="nationality"
              :items="states"
              :error="error"
              menu-props="auto"
              hide-details
              label="Nationality"
              single-line
            ></v-select>
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
            <v-btn color="green" @click="signup">Sign up</v-btn>
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
       states: [
          "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Cayman_Islands","Chad","Chile","China","Colombia","Congo","Cook_Islands","Costa_Rica"
	,"Ivorycoast","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican_Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New_Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda", "Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Saint and Kitts and Nevis","Saint Vincent","Saint Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","East_Timor","Togo","Tonga","Trinidad_and_Tobago","Tunisia"
	,"Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United_Kingdom","United States","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
        ],
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
      email: "",
      username: "",
      password: "",
      nationality: "",
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
              password: this.password,
              nationality: this.nationality
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
