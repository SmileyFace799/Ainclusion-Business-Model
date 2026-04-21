import { createRouter, createWebHistory } from 'vue-router'

import MoreInfo from '../components/MoreInfo.vue'
import Main from '../components/Main.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Main },
		{ path: '/:slug', component: MoreInfo, props: true },
	],
	scrollBehavior() {
		return {top: 0};
	}
})