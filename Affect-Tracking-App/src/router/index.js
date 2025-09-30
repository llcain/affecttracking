import { createRouter, createWebHistory } from 'vue-router'

// Import the pages
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import MoodChart from '../pages/MoodChart.vue'
import Food from '../pages/Food.vue'
import Journal from '../pages/Journal.vue'

// Define the routes
const routes = [
  { path: '/', component: Home },   // Home page shows all sections
  { path: '/about', component: About },
  { path: '/chart', component: MoodChart },
  { path: '/food', component: Food },
  { path: '/journal', component: Journal }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
