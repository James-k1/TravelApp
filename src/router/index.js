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
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: () => import('@/views/DestinationView.vue'),
      props: router => ({id: parseInt(router.params.id)})
    }
  ],
})

export default router
