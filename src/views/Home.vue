<template>
  <div v-if="loggedIn">
    <LoggedInLandingPage/>
  </div>
  <div v-else>
    <DefaultLandingPage />
  </div>
</template>

<script>
import DefaultLandingPage from '../components/DefaultLandingPage'
import LoggedInLandingPage from '../components/LoggedInLandingPage'
import { mapState } from 'vuex'
export default {
  components: {
    DefaultLandingPage,
    LoggedInLandingPage
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  }
}
</script>
