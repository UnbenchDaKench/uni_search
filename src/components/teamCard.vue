<template>
  <v-card min-height="420" width="400" hover shaped>
    <v-img class="white--text" height="330px" :src="Image"></v-img>
    <v-card-title class="justify-center">
      <span align="center">{{ Name }}</span>
    </v-card-title>
    <div align="center">
      <span>{{ Title }}</span>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    Image: String,
    Name: String,
    Title: String,
    Description: String
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0 0 30px 10px rgba(123, 123, 123, 0.2);
  transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  -webkit-transition: box-shadow 1s; /* Safari */
  transition: box-shadow 1s;
}
.shadow:hover,
.team-mem-des:hover {
  box-shadow: 0 0 30px 10px rgba(223, 223, 223, 0.3);
}
.team-mem-des {
  transition: box-shadow 0.2s 2s;

  min-height: 250px;
}
</style>
