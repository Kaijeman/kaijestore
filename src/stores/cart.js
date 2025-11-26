import { reactive, computed } from 'vue'
import { products } from '../data/products'

const state = reactive({
  marketItems: [],
  auctionItems: [],
  shippingCost: 50_000,
})

function addMarketProduct(productId) {
  const product = products.find((p) => p.id === productId && p.type === 'Market')
  if (!product) return

  const existing = state.marketItems.find((item) => item.id === productId)
  if (existing) {
    existing.quantity++
  } else {
    state.marketItems.push({
      ...product,
      quantity: 1,
    })
  }
}

function addAuctionBid(productId, bidAmount, endText) {
  const product = products.find((p) => p.id === productId && p.type === 'Lelang')
  if (!product) return

  const existing = state.auctionItems.find((item) => item.id === productId)
  if (existing) {
    existing.bidAmount = bidAmount
    existing.endText = endText ?? product.endText
  } else {
    state.auctionItems.push({
      ...product,
      bidAmount,
      endText: endText ?? product.endText,
    })
  }
}

function increaseQty(item) {
  item.quantity++
}

function decreaseQty(item) {
  if (item.quantity > 1) item.quantity--
}

function removeMarketItem(id) {
  state.marketItems = state.marketItems.filter((item) => item.id !== id)
}

function removeAuctionItem(id) {
  state.auctionItems = state.auctionItems.filter((item) => item.id !== id)
}

const isEmpty = computed(() => state.marketItems.length === 0 && state.auctionItems.length === 0)

const subtotalMarket = computed(() =>
  state.marketItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
)

const subtotalAuction = computed(() =>
  state.auctionItems.reduce((sum, item) => sum + item.bidAmount, 0),
)

const total = computed(() => subtotalMarket.value + subtotalAuction.value + state.shippingCost)

export function useCart() {
  return {
    state,
    isEmpty,
    subtotalMarket,
    subtotalAuction,
    total,
    addMarketProduct,
    addAuctionBid,
    increaseQty,
    decreaseQty,
    removeMarketItem,
    removeAuctionItem,
  }
}
