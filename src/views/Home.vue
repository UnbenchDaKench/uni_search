<template>
  <div v-if="loggedIn">
    Logged in
  </div>
  <div v-else>
    <DefaultLandingPage />
  </div>
</template>

<script>
import DefaultLandingPage from '../components/DefaultLandingPage'
import { mapState } from 'vuex'
export default {
  components: {
    DefaultLandingPage
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  }
}
</script>
