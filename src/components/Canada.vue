<template>
  <div class="justify-center">
    <v-layout row wrap justify-center>
      <v-flex md3 ma-2 pa-4 v-for="(item,index) in topRatedSchools" :key="index">
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
import { mapState, mapActions } from "vuex";
import SchoolCard from "../components/SchoolCard";
export default {
  data() {
    return {
      flag: ''
    };
  },
  components: {
    SchoolCard
  },

  computed: {
    ...mapState(["topRatedSchools"])
  },
  methods: {
    imageSrc(count) {
      return (require('../assets/flags/' +count+ '.jpg'));
    }
  }
};
</script>
