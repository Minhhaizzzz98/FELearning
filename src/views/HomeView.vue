<template>
  home nè
  newCount{{count}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import {mapState} from "vuex"
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
  computed: mapState(['count'])
});
</script>
