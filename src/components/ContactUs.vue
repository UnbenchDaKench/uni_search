<template>
  <v-parallax height="auto" dark id="team">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 md12 order-lg2 lg12>
          <v-card-text>
            <h1>UNI SEARCH TEAM</h1>
          </v-card-text>
        </v-flex>
      </v-layout>
      <br />
      <br />
      <v-layout row wrap justify-center align-center>
        <v-flex v-for="item in teamInfo" :key="item" xs12 order-md1 order-xs1 md6 lg4 class="ma-3 pa-3">
          <TeamPerson
            :Name="item.Name"
            :Image="item.Image"
            :Title="item.Title"
            :Description="item.Story"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>
<script>
import TeamPerson from './teamCard'
import axios from 'axios'
export default {
  components: {
    TeamPerson
  },
  data () {
    return {
      teamInfo: [
        {
          Name: 'Kingsley Ayabazu',
          Title: 'Head Developer',
          Story: 'default and default for now modify later',
          Image: 'https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/54517657_980114635517316_5297639892426162176_n.jpg?_nc_cat=104&_nc_oc=AQlnvUCoSpNRzBMNQPlQX9KtgvWqw3kOy2CQEJBzepH-M6P3Yi8Sy0jjsWAn_gVrdZ4&_nc_ht=scontent.fyaw1-1.fna&oh=83aea29e13d75fbceb82b17271c58f72&oe=5E428A9B'

        },
        {
          Name: 'Kassim Izuagbe',
          Title: 'Chief Executive',
          Story: 'default and default for now modify later'
        },
        {
          Name: 'King Abe',
          Title: 'Quality Assurance Officer ',
          Story: 'default and default for now modify later'
        }
      ]
    }
  },
  mounted () {
    // axios.get('/api/team/data.json').then(res => {
    //   this.teamInfo = res.data.team
    //   console.log(this.teamInfo)
    // })
  }
}
</script>
