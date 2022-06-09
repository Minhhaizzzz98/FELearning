<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: String,
  },
  name: "FieldInput",
});
</script>


<template>
  <v-text-field
    counter="25"
    :label="label || ''"
    outlined
    dense
    clearable
  ></v-text-field>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
