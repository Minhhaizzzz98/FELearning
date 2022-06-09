

<script lang="ts">
import { defineComponent } from "vue";

// Components
import FormBase from "@/components/Form/FormBase.vue";
import Logo from "@/assets/global/images/logo.png";

export default defineComponent({
  data() {
    return {
      container: {
        title: "Welcome to Monchi",
        detail: "Đăng nhập để tiếp tục truy cập",
      },
    };
  },
  name: "Register",
  components: {
    FormBase,
  },
});
</script>
<template>
  <div class="login">
    <div class="login-header">
      <a href="" title="logo">
        <img src="@/assets/global/images/logo.png" alt="" width="300" />
      </a>
    </div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col xs="12" sm="8" class="login-sibar text-center">
          <h3 class="login-sibar__title">{{container.title || "" }}</h3>
          <span class="login-sibar__info"> {{container.detail || "" }}</span>
        </v-col>
        <v-col xs="12" sm="4" class="login-form">
          <FormBase />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>