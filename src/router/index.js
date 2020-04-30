import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products'
import About from '../views/About'
import Cart from '../views/Cart'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
