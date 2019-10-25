<template>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 md12 order-lg2 lg12 offset-md5>
          <v-card-text>
          <h1>UNI SEARCH TEAM</h1>
          </v-card-text>
        </v-flex>
      </v-layout>
      <br />
      <br />
      <v-layout row wrap justify-center align-center class="mb-10">
        <v-flex v-for="item in teamInfo" :key="item" xs12 order-md1 order-xs1 md6 lg4 class="ma-3">
          <TeamPerson
            :Name="item.Name"
            :Image="item.Image"
            :Title="item.Title"
            :Description="item.Story"
          />
        </v-flex>
      </v-layout>
    </v-container>
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
          Title: 'Software Developer',
          Story: 'default and default for now modify later',
          Image:
            'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-1/p160x160/54517657_980114635517316_5297639892426162176_n.jpg?_nc_cat=104&_nc_oc=AQla1_sd-tpLqEs25bl-QhPAmmPbsb5HMCjxaX_FjElqaOZ-Izs_yttVSU2GgC8vB94o-f5kulRgHfJu1OiDzZ5W&_nc_ht=scontent-yyz1-1.xx&oh=da0d6657c59e591727b8f75ca2f03987&oe=5DF1EDDA'
        },
        {
          Name: 'Kassim Izuagbe',
          Title: 'Idea man',
          Story: 'default and default for now modify later'
        },
        {
          Name: 'King Abe',
          Title: 'Story teller',
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
