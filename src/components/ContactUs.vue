<template>
  <v-parallax height="auto" dark id="team">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 md12 order-lg2 lg12>
          <v-card-text>
            <h1>UNI SEARCH NOW DEV TEAM</h1>
            <br>
            <p>Insert story about how cool the dev team is here</p>
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
          Story: 'default and default for now modify later',
          Image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-1/p960x960/60944195_2235549079862350_7903288996338335744_o.jpg?_nc_cat=102&_nc_oc=AQkxQJoBboh2THj2F2h42V9WdnX35ygpbRx-UXULJRLEiJDoFleSi6BwtvhSEfFHKtPZDkHieu96XiM_vO_2VNan&_nc_ht=scontent-yyz1-1.xx&oh=8428fce75103152e27cb2e4dcb1b4860&oe=5E4F8EBE'
        },
        {
          Name: 'King Abe',
          Title: 'Quality Assurance Officer ',
          Story: 'default and default for now modify later',
          Image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/p960x960/46778427_958398391018197_8561265711069003776_o.jpg?_nc_cat=105&_nc_oc=AQkhc7Uhio2_a1QrCPWy6n8XVyJyfqw2Q5ccoHUgP2bM1aqe9r2DVYpoD9j5MhhETMg4RQGr1rPpVF_VNaQJ7Q7I&_nc_ht=scontent-yyz1-1.xx&oh=e68f482a7cd43ebf459e82a071ba6b14&oe=5E88CD7D'
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
