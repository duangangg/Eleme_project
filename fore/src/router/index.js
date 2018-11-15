import Vue from 'vue'
import Router from 'vue-router'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Order from '@/views/Order.vue'
import ShowYe from '@/views/ShowYe.vue'
import address from '@/views/address.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'

import vueResource from 'vue-resource'

import csqFood from '@/views/csqFood'
import csqEasyFood from '@/views/csqEasyFood'
import csqRestaurantMain from '@/views/csqRestaurantMain'

import seladdress from '@/views/seladdress'
import address2 from '@/views/address2'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShowYe
    },
    {
      path: '/Find',
      component: Find
    },
    {
      path: '/ShowYe',
      component: ShowYe
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path: '/My',
      component: My
    },
    {
      path: '/address',
      component: address
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/csqRestaurantMain',
      name: 'csqRestaurantMain',
      component: csqRestaurantMain
    },
    {
      path: '/csqEasyFood',
      name: 'csqEasyFood',
      component: csqEasyFood
    },
    {
      path: '/csqFood',
      name: 'csqFood',
      component: csqFood
    },
    {
      path: '/select',
      component: seladdress
    },
    {
      path: '/address2',
      component: address2
    }
  ]
})
