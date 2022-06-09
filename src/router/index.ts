import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import Register from "@/views/Register.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "",
          component: HomeView
        },

      ]
    },
    {
      path: "/register",
      component: PublicLayout,
      children: [
        {
          path: "",
          component: Register
        }
      ]
    },
  ]

});

export default router;
