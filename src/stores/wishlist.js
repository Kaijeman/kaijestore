import { reactive, readonly, computed } from 'vue'
import { products } from '../data/products'

const state = reactive({
  items: [],
})

function addToWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const already = state.items.some((item) => item.id === productId)
  if (already) return

  state.items.push({
    id: product.id,
    type: product.type,
    name: product.name,
    category: product.category,
    price: product.price,
    image: product.image ?? null,
  })
}

function removeFromWishlist(productId) {
  const idx = state.items.findIndex((item) => item.id === productId)
  if (idx !== -1) {
    state.items.splice(idx, 1)
  }
}

function toggleWishlist(productId) {
  const exists = state.items.some((item) => item.id === productId)
  if (exists) removeFromWishlist(productId)
  else addToWishlist(productId)
}

function isInWishlist(productId) {
  return state.items.some((item) => item.id === productId)
}

export function useWishlist() {
  return {
    state: readonly(state),
    items: computed(() => state.items),
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  }
}
