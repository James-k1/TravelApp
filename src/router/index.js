import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/brazil",
      name: "Brazil",
      component: () => import(/* webpackChunkname: sdfsdf */ '@/views/Brazil.vue'),
    },
    {
      path: "/hawaii",
      name: "Hawaii",
      component: () => import( /* webpackChunkname: hawaii */ '@/views/Hawaii.vue'),
    },
    {
      path: "/jamaica",
      name: "Jamaica",
      component: () => import( /* webpackChunkname: jamaica */ '@/views/Jamaica.vue'),
    },
    {
      path: "/panama",
      name: "Panama",
      component: () => import( /* webpackChunkname: panama */ '@/views/Panama.vue'),
    },
  ],
})

export default router
