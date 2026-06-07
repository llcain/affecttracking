import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../pages/DashboardView.vue'
import AboutView from '../pages/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router