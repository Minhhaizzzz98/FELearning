<script lang="ts">
import { defineComponent } from "vue";
import FieldInput from "@/components/Form/Input.vue";

export default defineComponent({
  name: "FormBase",
  components: {
    FieldInput,
  },
});
</script>


<template>
  <v-card class="mx-auto" max-width="400" variant="outlined" rounded>
    <v-card-header class="login-form-head">
      <div>
        <div class="mb-1 text-red login-form-head__title">Đăng nhập</div>
        <div class="text-caption login-form-head__caption">
          Bạn chưa có tài khoản<span> tạo mới</span>
        </div>
      </div>
    </v-card-header>

    <!-- form field -->
    <div class="login-form-content">
      <v-card-text>
        <FieldInput label="Email" />
      </v-card-text>
      <v-card-text class="login-form-input">
        <FieldInput label="Mật khẩu" />
      </v-card-text>
    </div>
    <!-- end form field -->
    <v-card-actions class="login-form-action">
      <v-btn depressed color="primary" blocked> Đăng nhập </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
