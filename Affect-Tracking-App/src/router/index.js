import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../pages/DashboardView.vue'
import MoodChart from '../pages/MoodChart.vue'
import Food from '../pages/Food.vue'
import Journal from '../pages/Journal.vue'
import Supplement from '../pages/Supplement.vue'
import Water from '../pages/Water.vue'
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
      path: '/chart',
      name: 'chart',
      component: MoodChart
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/water',
      name: 'water',
      component: Water
    },
    {
      path: '/supplement',
      name: 'supplement',
      component: Supplement
    },
    {
      path: '/journal',
      name: 'journal',
      component: Journal
    },
  ]
})

export default router