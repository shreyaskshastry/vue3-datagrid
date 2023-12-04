import { createRouter, createWebHistory } from 'vue-router'

import Grid from '../components/DataGrid.vue'

const routes = [
  {
    route: "/",
    name: "Home",
    component: Grid,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
