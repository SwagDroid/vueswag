import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import { auth } from '../firebase'
import Login from '../views/Login.vue'
import Profile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// router.beforeEach((to, from,  next) => {
//   console.log('hi', auth)
//   console.log('Path', to.path)
//   if(to.path === '/login' && auth.currentUser) {
//     next('/')
//     return;
//   }

//   if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
//     next('/login')
//     return;
//   }

//   next();
// })

export default router
