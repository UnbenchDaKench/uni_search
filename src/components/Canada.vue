<template>
  <div class="justify-center">
    <v-layout row wrap justify-center>
      <v-flex md3 sm9 xs12 sm12 ma-5 pa-5 v-for="(item,index) in topRatedSchools" :key="index">
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
import { mapState } from 'vuex'
import SchoolCard from '../components/SchoolCard'
export default {
  data () {
    return {
      flag: ''
    }
  },
  components: {
    SchoolCard
  },

  computed: {
    ...mapState(['topRatedSchools'])
  },
  methods: {
    imageSrc (count) {
      return require('../assets/flags/' + count + '.jpg')
    }
  }
}
</script>
