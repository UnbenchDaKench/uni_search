<template>
  <div>
    <div style="background:#1d1d1d; padding-top:70px; padding-bottom:70px">
      <p id="header" class="display-2 font-weight-regular text-center">{{$route.name}}</p>
      <p id="sub_header" class="subtitle-1 font-weight-light text-center">JOE'S RENTALS</p>
    </div>
    <v-container>
      <v-row align="stretch">
        <!-- Contact info -->
        <v-col cols="12" md="5">
          <v-row align="stretch">
            <!-- phone -->
            <v-col cols="12">
              <v-row>
                <v-col cols="2" sm="4" md="3" lg="2">
                  <v-icon class="contact_info">phone</v-icon>
                </v-col>
                <v-col cols="10" sm="8" md="9" lg="10">
                  <v-row>
                    <v-col cols="12">
                      <p class="subtitle-1 font-weight-bold" style="color:#bda87f;">Phone</p>
                    </v-col>
                    <v-col cols="12">
                      <p class="subtitle-2">
                        <span v-for="(item, index) in JSON_.phone" v-bind:key="index">
                          <span>{{item}}</span>
                          <br />
                        </span>
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <!-- Email -->
            <v-col cols="12">
              <v-row>
                <v-col cols="2" sm="4" md="3" lg="2">
                  <v-icon class="contact_info">email</v-icon>
                </v-col>
                <v-col cols="10" sm="8" md="9" lg="10">
                  <v-row>
                    <v-col cols="12">
                      <p class="subtitle-1 font-weight-bold" style="color:#bda87f;">Email</p>
                    </v-col>
                    <v-col cols="12" class="subtitle-2">
                      <p class="subtitle-2">
                        <span v-for="(item, index) in JSON_.email" v-bind:key="index">
                          <span>{{item}}</span>
                          <br />
                        </span>
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <!-- Address -->
            <v-col cols="12">
              <v-row>
                <v-col cols="2" sm="4" md="3" lg="2">
                  <v-icon class="contact_info">room</v-icon>
                </v-col>
                <v-col cols="10" sm="8" md="9" lg="10">
                  <v-row>
                    <v-col cols="12">
                      <p class="subtitle-1 font-weight-bold" style="color:#bda87f;">Address</p>
                    </v-col>
                    <v-col cols="12">
                      <p class="subtitle-2">
                        <span>{{address.address}},</span>
                        <span>{{address.city}}</span>
                        <br />
                        <span>{{address.province}}</span>
                        <span>{{address.postal_code}}</span>
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- Contact form -->
        <v-col cols="12" md="7">
          <v-form
            ref="form"
            v-model="valid"
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-text-field
                  label="Name"
                  :rules="rules.nameRules"
                  v-model="form.name"
                  outlined
                  name="name"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Email"
                  :rules="rules.emailRules"
                  v-model="form.email"
                  outlined
                  name="email"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Subject"
                  :rules="[v => !!v || 'Subject  is required']"
                  v-model="form.subject"
                  outlined
                  name="subject"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea outlined name="message" label="Message" v-model="form.message"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn color="#bda87f" dark width="100%" type="submit">submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <iframe
      class="map"
      :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyABGgDJqMkSmiMDNrC-j4CbGDq0kV1cs4s&q=' + address.address +','+ address.city +','+ address.province"
      frameborder="0"
      style="border:0"
      width="100%"
      height="450px"
    ></iframe>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert2";
export default {
  data() {
    return {
      JSON_: {},
      address: {},
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      valid: false,
      rules: {
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 200) || "Name must be less than 200 characters"
        ],
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        phoneRule: [
          v => !!v || "Phone number is required",
          v => (v && v.length === 14) || "Phone number is not valid"
        ]
      }
    };
  },
  mounted() {
    this.JSON_ = require("../data/contact.json");
    this.address = this.JSON_["address"];
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios
          .post(
            "/",
            this.encode({
              "form-name": "contact-form",
              ...this.form
            }),
            axiosConfig
          )
          .then(response => {
            swal
              .fire({
                title: "Email Sent",
                text: "Thank You!",
                icon: "success"
              })
              .then(this.$router.push("/"));
          })
          .catch(err => {
            swal.fire({
              title: "Sending email Failed",
              html: `Sending email failed, That might be due to server downtime or havey load on the server. `,
              confirmButtonText: "No I will try Later",
              type: "error"
            });
          });
      }
    }
  }
};
</script>
<style scoped>
.contact_info {
  border-radius: 50%;
  padding: 10px;
  border: 1px solid black;
}
#header {
  color: white;
}
#header::after {
  content: "";
  border-bottom: 2px solid white;
  width: 225px;
  height: 15px;
  margin: auto;
  top: 125px;
  display: block;
}
#sub_header {
  color: white;
}
</style>
