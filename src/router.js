import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/team.vue')

    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/SignUp.vue')
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: () => import(/* webpackChunkName: "about" */ './components/LoggedInLandingPage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: () => import(/* webpackChunkName: "about" */ './components/Swipe'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import(/* webpackChunkName: "about" */ './components/Collection'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contactus',
      name: 'contactus',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/ContactUs.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './components/Profile'),
      meta: {
        requiresAuth: true
      }
    }

  ]
})
