import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
import authLayout from '../layout/auth/Authlayout'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/login",
    name: "login",
    meta: {
        isPublic: true,
        title: "Login",
        layout: authLayout,
    },
    component: () => import("../views/auth/login"),
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
