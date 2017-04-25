import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import French from '@/components/subject/french'
import Math from '@/components/subject/math'
import World from '@/components/subject/world'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
      path: '/francais',
      name: 'French',
      component: French
    },
    {
      path: '/math',
      name: 'Math',
      component: Math
    },
    {
      path: '/monde',
      name: 'World',
      component: World
    }
  ]
})
