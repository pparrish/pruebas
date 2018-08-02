import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Test from './views/Test.vue'
import Snake from './views/Snake.vue'
import Flexbox from './views/Flexbox.vue'
import VueCourse from './views/VueCourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component:  Test
    },
    {
      path: '/snake',
      name: 'snake',
      component:  Snake
    },
    {
      path: '/Flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/vue-course',
      name: 'VueCourse',
      component: VueCourse
    }
  ]
})
