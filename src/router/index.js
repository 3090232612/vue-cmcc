import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Lab from '@/components/Lab'
import Sms from '@/components/Sms'
import Traffic from '@/components/Traffic'
import Call from '@/components/Call'
import Station from '@/components/Station'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/lab',
      name: 'Lab',
      component: Lab
    },
    {
      path: '/sms',
      name: 'Sms',
      component: Sms
    },
    {
      path: '/traffic',
      name: 'Traffic',
      component: Traffic
    },
    {
      path: '/call',
      name: 'Call',
      component: Call
    },
    {
      path: '/station',
      name: 'Station',
      component: Station
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
