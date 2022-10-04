import { createRouter, createWebHistory } from 'vue-router'

/*const userAge = 18*/

const routes = []

const router = createRouter({
    history: createWebHistory('/library/'),
    routes
})

/* router.beforeEach((to, from, next) => {
	next()
}) */

export default router