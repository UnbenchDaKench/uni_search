<template>
  <v-card min-height="600" hover>
    <v-img class="white--text" height="350px" :src="image"></v-img>
    <v-card-title class="justify-center">
      <span align="center">{{ title }}</span>
    </v-card-title>
    <div align="center">
      <span>{{ country }}</span>
    </div>

    <v-card-text>
      <div class="text-center">
        <a :href="domain">Visit {{title}}'s Website</a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    domain: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
