<template>
  <v-app >
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer class="hidden-md-and-down"/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
