import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

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
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
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
    // On fresh page load / refresh with a named section route,
    // scroll directly to that section's element.
    if (to.name === 'projects') {
      return { el: '#projects', behavior: 'instant' }
    }
    // On fresh page load / refresh (home), scroll to top.
    // Use instant scrolling since there's no user interaction to animate.
    return { top: 0 }
  },
})

export default router
