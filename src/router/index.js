import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/HomeView.vue"
import Brazil from "@/views/Brazil.vue"
import Hawaii from "@/views/Hawaii.vue"
import Jamaica from "@/views/Jamaica.vue"
import Panama from "@/views/Panama.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Brazil",
      name: "Brazil",
      component: Brazil,
    },
    {
      path: "/Hawaii",
      name: "Hawaii",
      component: Hawaii,
    },
    {
      path: "/Jamaica",
      name: "Jamaica",
      component: Jamaica,
    },
    {
      path: "/Panama",
      name: "Panama",
      component: Panama,
    },
  ],
})

export default router
