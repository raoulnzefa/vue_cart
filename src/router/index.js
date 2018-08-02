import Vue from 'vue'
import Router from 'vue-router'
import PageProducts from '../components/pages/PageProducts'
import PageCart from '../components/pages/PageCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'products' }
    },
    {
      path: '/products',
      name: 'products',
      component: PageProducts
    },
    {
      path: '/cart',
      name: 'cart',
      component: PageCart
    }
  ]
})
