import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './style.css'

// Prevent the browser from restoring scroll position on page refresh.
// This lets Vue Router's scrollBehavior manage scroll position exclusively.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')
