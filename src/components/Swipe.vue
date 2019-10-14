<template>
  <div>
    <Vue2InteractDraggable
      v-for="(item, index) in topRatedSchools.slice({listNumber},10)"
      :key="index"
      :interact-out-of-sight-x-cordinate="800"
      :interact-max-rotation="15"
      :interact-x-treshold="400"
      :interact-y-treshold="400"
      @draggedRight="right(index)"
      @draggedLeft="left(index)"
    >
      <v-container>
        <v-layout justify-center mt-10 pt-10 class="stackedcard-container">
          <v-flex md6>
            <SchoolCard :title="item.name" :image="imageSrc(item.country)" />
          </v-flex>
        </v-layout>
        <v-icon color="green" @click="right(index)" x-large class="stackedcard-containers">fas fa-heart</v-icon>
        <v-icon color="red" @click="left(index)" x-large class="stackedcard-containers2">fas fa-window-close</v-icon>
      </v-container>
    </Vue2InteractDraggable>
  </div>
</template>

<script>
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
import SchoolCard from "./SwipeCard";
import { mapState } from "vuex";

export default {
  data() {
    return {
      isVisible: true,
      listNumber: 0
    };
  },
  name: "SwipeableCards",
  components: {
    Vue2InteractDraggable,
    SchoolCard
  },
  computed: {
    ...mapState(["topRatedSchools"])
  },
  methods: {
    right(index) {
      this.listNumber += 1;

      console.log(this.listNumber);
      this.$store.dispatch("addUsersChoice", index);
      this.$store.dispatch("deleteSchool", index);
    },
    left(index) {
      this.listNumber += 1;
      this.$store.dispatch("deleteSchool", index);
    },
    imageSrc(count) {
      return require("../assets/flags/" + count + ".jpg");
    }
  }
};
</script>

<style scoped>
.stackedcard-container {
  position: absolute;
  width: 100%; /* set 100% */
  will-change: transform, opacity;
  top: 0;
  border-radius: 200px;
}
.stackedcard-containers {
  position: absolute;
  width: 50%; /* set 100% */
  height: 300px; /* set 100% */
  top: 70%;
  right: 1%;
}
.stackedcard-containers2 {
  position: absolute;
  width: 50%; /* set 100% */
  height: 300px; /* set 100% */
  top: 70%;
  left: 10%
}
</style>