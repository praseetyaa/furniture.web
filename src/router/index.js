import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/category', name: 'Category', component: () => import('../views/Category.vue') },
  { path: '/favorite', name: 'Favorite', component: () => import('../views/Favorite.vue') },
  { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  { path: '/users', name: 'Users', component: () => import('../views/Users.vue') },
  { path: '/meal', name: 'Meal', component: () => import('../views/Page.vue') }
]

const router = new VueRouter({
  routes
})

export default router
