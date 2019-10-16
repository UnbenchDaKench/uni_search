<template>
  <div :key="key">
    <v-layout ma-5>
      <v-flex md2>
        <v-select
          @input="filterCountry"
          v-model="nation"
          :items="states"
          :error="error"
          menu-props="auto"
          hide-details
          label="Please select a country"
          single-line
        ></v-select>
      </v-flex>
    </v-layout>
    <Vue2InteractDraggable
      v-for="(item, index) in filteredCountry.slice({listNumber},maxNum)"
      :key="index"
      :interact-out-of-sight-x-cordinate="500"
      :interact-max-rotation="15"
      :interact-x-treshold="400"
      :interact-y-treshold="400"
      @draggedRight="right(index)"
      @draggedLeft="left(index)"
    >
      <v-container  class="stackedcard-container">
        <v-layout justify-center ma-10 pa-10>
          <v-flex md6 sm6>
            <SchoolCard
              :title="item.name"
              :domain="item.web_pages[0]"
              :country="item.country"
              :image="imageSrc(item.country)"
            />
          </v-flex>
        </v-layout>
        <v-icon
          color="green"
          @click="right(index)"
          x-large
          class="stackedcard-containers"
        >fas fa-heart</v-icon>
        <v-icon
          color="red"
          @click="left(index)"
          x-large
          class="stackedcard-containers2"
        >fas fa-window-close</v-icon>
      </v-container>
    </Vue2InteractDraggable>
  </div>
</template>

<script>
let timeout = null;
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
import SchoolCard from "./SwipeCard";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isVisible: true,
      showRight: false,
      key: 0,
      listNumber: 0,
      maxNum: 10,
      nation: "",
      error: false,
      states: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina_Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Ivorycoast",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "Saint and Kitts and Nevis",
        "Saint Vincent",
        "Saint Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "East Timor",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      items: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" }
      ]
    };
  },
  name: "SwipeableCards",
  components: {
    Vue2InteractDraggable,
    SchoolCard
  },
  computed: {
    ...mapState(["filteredCountry"])
  },
  watch: {
    nation: function(nation) {
      timeout = setTimeout(() => {
        this.forceRender();
      }, 800);
    }
  },
  created(){
  },
  methods: {
    right(index) {
      this.showRight = true
      this.listNumber += 1;
      this.maxNum += 1
      this.forceRender();
      this.$store.dispatch("addUsersChoice", index);
      this.$store.dispatch("deleteSchool", index);
    },
    forceRender() {
      this.key += 1;
    },
    left(index) {
      this.listNumber += 1;
      this.maxNum += 1;
      this.$store.dispatch("deleteSchool", index);
      this.forceRender();
    },
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    },
    filterCountry() {
      this.listNumber = 0;
      this.$store.dispatch("filterCountry", this.nation);
    }
  }
};
</script>

<style scoped>
.stackedcard-container {
  position: absolute;
  width: 100%; /* set 100% */
  will-change: transform, opacity;
  top: 0;
  border-radius: 200px;
}
.stackedcard-containers {
  position: absolute;
  width: 50%; /* set 100% */
  height: 300px; /* set 100% */
  top: 80%;
  right: 5%;
}
.stackedcard-containers2 {
  position: absolute;
  width: 50%; /* set 100% */
  height: 300px; /* set 100% */
  top: 80%;
  left: 5%;
}
</style>