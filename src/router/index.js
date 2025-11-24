import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import HelpView from '../views/HelpView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/kontak', name: 'Contact', component: ContactView },
  { path: '/bantuan', name: 'Help', component: HelpView },
  { path: '/tentang-kami', name: 'About', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
