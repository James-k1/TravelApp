import { createApp } from "vue"
import router from "@/router"

import App from "./App.vue"

import "@/assets/main.css"
import AppLink from "@/components/AppLink.vue"

const app = createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount("#app")
