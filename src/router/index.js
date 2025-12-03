import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import HelpView from '../views/HelpView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/kontak', name: 'Contact', component: ContactView },
  { path: '/bantuan', name: 'Help', component: HelpView },
  { path: '/tentang-kami', name: 'About', component: AboutView },
  { path: '/katalog', name: 'Catalog', component: CatalogView },
  { path: '/katalog/:id', name: 'product-detail', component: ProductDetailView },
  { path: '/keranjang', name: 'cart', component: CartView },
  { path: '/profil', name: 'profil', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
