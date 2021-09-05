import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/1',
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../components/FormPart1')
      },
      {
        path: '2',
        name: '2',
        component: () => import('../components/FormPart2')
      },
      {
        path: '3',
        name: '3',
        component: () => import('../components/FormPart3')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
