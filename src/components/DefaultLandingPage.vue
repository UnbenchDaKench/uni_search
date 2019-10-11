<template>
  <div>
    <v-parallax
      class="blurred mb-10"
      src="https://www.stevenson.edu/sebin/r/q/video-bg.jpg"
      height="1000"
    ></v-parallax>
    <v-divider></v-divider>
    <div class="text-div">
      <h1>Lorem Ipsul</h1>
      <p>lorem ipsul lorem ipsul lorem ipsul</p>
      <v-btn x-large color="green" block to="signup">Sign up</v-btn>
    </div>
    <Canada />
  </div>
</template>

<script>
import Canada from "./Canada";
export default {
  components: {
    Canada
  }
};
</script>

<style scoped>
.text-div {
  position: absolute;
  background-size: auto;
  top: 10%;
  left: 40%;
  color: white;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  text-align: center;
}
.blurred {
  filter: blur(2px);
  -webkit-filter: blur(2px);
  /* background: rgb(0,0,0) !important;
    background: rgba(0,0,0, 0.9) !important;  Black w/opacity/see-through */
}
</style>