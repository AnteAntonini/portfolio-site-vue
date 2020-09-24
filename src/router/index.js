import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/components/AboutPage')
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: () => import('@/components/ProjectsPage')
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: () => import('@/components/ContactPage')
    }
  ]
})
