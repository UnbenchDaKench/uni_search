<template>
  <div>
    <Canada />
    <v-divider></v-divider>
    <Usa />
    <v-divider></v-divider>

    <China />
  </div>
</template>

<script>
import Canada from "./Canada";
import Usa from "./Usa";
import China from "./China";
export default {
  components: {
    Canada,
    Usa,
    China
  }
};
</script>