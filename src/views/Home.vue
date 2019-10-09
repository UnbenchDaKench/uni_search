<template>
  <div>
    <span v-if="login">
      <h1>Login Succesful</h1>
    </span>
    <span v-else>
      <h1>Email or password incorrect</h1>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["login"])
  }
};
</script>