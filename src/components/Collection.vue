<template>
  <div>
    <v-layout row wrap justify-center>
      <v-flex md3 ma-10 pa-6 v-for="(item,index) in usersChoice.slice(0, 12)" :key="index">
        <SchoolCard
          :title="item.name"
          :domain="item.web_pages[0]"
          :country="item.country"
          :image="imageSrc(item.country)"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SchoolCard from "./SchoolCard";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    SchoolCard
  },
  computed: {
    ...mapState(["usersChoice"])
  },
  methods: {
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    }
  }
};
</script>