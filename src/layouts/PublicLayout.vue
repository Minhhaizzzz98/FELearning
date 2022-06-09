<template>
  <v-app>
    <div>
      <router-view  />
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Publiclayout",

  data() {
    return {
      //
    };
  },
});
</script>

<style >
  @import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&display=swap");
</style>