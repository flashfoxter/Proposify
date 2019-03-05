import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: function () { 
       // return import(/* webpackChunkName: "about" */ './views/About.vue')
      //}
    },
    {
      path: '/about/:name',
      name: 'about',
      component:About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: function () { 
       // return import(/* webpackChunkName: "about" */ './views/About.vue')
      //}
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: function () { 
       // return import(/* webpackChunkName: "about" */ './views/Login.vue')
      //}
    }

  ]
})