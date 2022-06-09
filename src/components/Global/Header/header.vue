<template>
  <div class="header ">
    <div class="header-list d-flex">
      <div class="header-tab d-flex align-center">
        <a class="header-logo">
          <img src="@/assets/global/images/logo.png" alt="" width="200" />
        </a>
      </div>
      <div class="header-nav">
        <a class="header-nav-item" href="" title="Về chúng tôi">
          Về chúng tôi
        </a>
        <a class="header-nav-item" href="" title="Phương pháp đào tạo">
          Lịch khai giảng
        </a>
        <a class="header-nav-item" href="" title="Phương pháp đào tạo">
          Khóa học
        </a>
        <a class="header-nav-item" href="" title="Phương pháp đào tạo">
          Tự học online
        </a>
        <a class="header-nav-item" href="" title="Phương pháp đào tạo">
          Dành cho học viên
        </a>
        <a class="header-nav-item" href="" title="Phương pháp đào tạo">
          Liên hệ
        </a>
      </div>
      <div class="header-search d-flex align-center">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="header-login">
          <router-link to="/register">  <v-btn depressed color="primary"> Đăng nhập </v-btn></router-link>
      
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderLayout",
  data: () => ({
    drawer: false,
    group: null,
  }),
});
</script>
