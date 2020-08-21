import Vue from 'vue'
import VueRouter from 'vue-router'
import Level_1 from '../views/Level-1.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Level 1',
    component: Level_1
  },
  {
    path: '/level-2',
    name: 'Level 2',
    component: () => import( '../views/Level-2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
