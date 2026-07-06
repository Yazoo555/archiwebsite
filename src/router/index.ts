import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView,
    },
    // Catch-all: redirect unknown paths to home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // On back/forward navigation, restore the saved scroll position
    if (savedPosition) {
      return savedPosition
    }
    // On hash navigation (e.g. /#projects), scroll to the element
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // On fresh page load / refresh, always scroll to top (Home).
    // Use instant scrolling since there's no user interaction to animate.
    return { top: 0 }
  },
})

export default router
