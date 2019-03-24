import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Todo from '../views/Todo.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
            title: 'home'
        }
    },
    {
        path: '/Todo',
        component: Todo,
        name: 'Todo',
        meta: {
            title: 'Todo'
        }
    }
]

const router = new Router(
    {
        mode: 'history',
        routes
    }
)

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'web'
    next()
})

export default router