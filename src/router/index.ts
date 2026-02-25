import { createRouter, createWebHistory } from 'vue-router'

import MoreInfo from '../components/MoreInfo.vue'
import Main from '../components/Main.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/:slug', component: MoreInfo, props: true },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})