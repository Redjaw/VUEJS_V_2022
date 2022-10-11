import { createRouter, createWebHistory } from 'vue-router'
import Libreria from './components/Library.vue'

const userAge = 22

const routes = [
    {
        "path": "/",
        "name": "libreria",
        "component" : Libreria
    },
    {
        "path": "/:isin",
        "name": "libro",
        "props": true,
        "component": () => import('./components/Book.vue'),
        "children": [
            {
                "path": "history",
                "name": "storico",
                "component": () => import('./components/History.vue'),
            },
            {
                "path": "comments",
                "name": "commenti",
                "props":true,
                "component": () => import('./components/Comments.vue'),
                "meta": {
                    "majorthan14":true
                }
            },
            {
                "path": "parental-control",
                "name": "parental-control",
                "component": () => import('./components/ParentalControl.vue'),
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory('/library/'),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.majorthan14 && userAge < 14) next({ "name": "parental-control", "params": {"isin":to.params.isin} })
	else next()
}) 

export default router