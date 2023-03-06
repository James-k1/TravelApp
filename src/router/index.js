import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/protected",
      name: 'protected',
      component: () => import('@/views/Protected.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/invoices",
      name: 'invoices',
      component: () => import('@/views/Invoices.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: () => import('@/views/DestinationView.vue'),
      props: router => ({...router.params, id: parseInt(router.params.id)}),
      beforeEnter(to, from){
        const exists = sourceData.destinations.find(destination => parseInt(to.params.id) == destination.id)
        if (!exists) return {
          name: 'NotFound',
          params: {pathMatch: to.path.split('/').slice(1)},
          query: to.query,
          hash: to.hash
      }
      },
      children: [
        {
        path: ":experienceSlug",
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: router => ({...router.params, id: parseInt(router.params.id)})
      }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }

  ],
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({top: 0}), 300)
    })
  }
})
router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    return {name: 'login', query: {redirect: to.fullPath}}
  }
})
export default router
