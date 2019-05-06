import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city.vue'
import Home from '@/components/index.vue'
import Detail from '@/components/detail.vue'

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'qneCity',
      component: City
    },
    {
      path: '/detail',
      name: 'qneDetail',
      component: Detail
    }


  ]

})
