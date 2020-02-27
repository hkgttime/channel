import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views'),
    children: [
      {
        path: '',
        component: () => import('@/views/body/body/home')
      },
      {
        path: '/discuss',
        component: () => import('@/views/body/body/discuss')
      },
      {
        path: '/item',
        component: () => import('@/views/body/body/item')
      },
      {
        path: '/record',
        component: () => import('@/views/body/body/record')
      },
      {
        path: '/train',
        component: () => import('@/views/body/body/train')
      },
      {
        path: '/login',
        component: () => import('@/views/body/login/login.vue')
      },
      {
        path: '/register',
        component: () => import('@/views/body/login/register.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
