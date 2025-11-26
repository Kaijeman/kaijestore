<template>
  <div class="bg-slate-50">
    <section class>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <router-link
          to="/katalog"
          class="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <i class="bi bi-arrow-left"></i>
          Kembali ke Katalog
        </router-link>
      </div>
    </section>

    <section v-if="!product" class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-slate-500 text-sm">Produk tidak ditemukan.</p>
      </div>
    </section>

    <section v-else class="py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
        <div>
          <div
            class="rounded-3xl bg-slate-100 border border-slate-200 h-72 sm:h-80 md:h-[420px]"
          ></div>
        </div>

        <div class="space-y-6">
          <div class="flex items-center justify-between gap-4">
            <h1 class="text-2xl sm:text-3xl font-semibold text-slate-900">
              {{ product.name }}
            </h1>

            <span
              class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              :class="
                product.type === 'Market'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-orange-100 text-orange-700'
              "
            >
              <i class="bi mr-1" :class="product.type === 'Market' ? 'bi-bag' : 'bi-hourglass'"></i>
              {{ product.type }}
            </span>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white px-5 py-4 flex flex-col gap-3">
            <template v-if="product.type === 'Lelang'">
              <div>
                <p class="text-xs text-slate-500 mb-1">Bid Saat Ini</p>
                <p class="text-base font-semibold text-orange-600">
                  Rp {{ formatPrice(product.currentBid) }}
                </p>
              </div>

              <div class="flex items-center gap-2 text-xs text-slate-500">
                <i class="bi bi-clock-history"></i>
                <span>{{ product.endText }}</span>
              </div>
            </template>

            <template v-else>
              <div>
                <p class="text-xs text-slate-500 mb-1">Harga</p>
                <p class="text-base font-semibold text-slate-900">
                  Rp {{ formatPrice(product.price) }}
                </p>
              </div>

              <div class="flex items-center gap-2 text-xs text-slate-500">
                <i class="bi bi-box-seam"></i>
                <span>{{ product.stockText }}</span>
              </div>
            </template>
          </div>

          <div class="space-y-3">
            <template v-if="product.type === 'Lelang'">
              <div>
                <label class="block text-xs font-medium text-slate-700 mb-1">
                  Masukkan Bid Anda
                </label>
                <input
                  v-model="userBid"
                  type="number"
                  :placeholder="`Rp ${formatPrice(product.suggestedBid)}`"
                  class="w-full mt-1 px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-500 transition"
                />
                <p class="mt-1 text-[11px] text-slate-500">
                  *Berlaku kelipatan Rp {{ formatPrice(product.bidStep) }}
                </p>
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="handlePlaceBid"
                  class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 text-white text-sm font-semibold py-3 hover:bg-orange-600 transition-colors"
                >
                  <i class="bi bi-hourglass"></i>
                  Pasang Bid
                </button>

                <button
                  type="button"
                  class="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </template>

            <template v-else>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="handleAddToCart"
                  class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold py-3 hover:bg-slate-800 transition-colors"
                >
                  <i class="bi bi-cart3"></i>
                  Tambah ke Keranjang
                </button>

                <button
                  type="button"
                  class="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </template>
          </div>

          <div class="space-y-2">
            <h2 class="text-base font-semibold text-slate-900">Deskripsi Produk</h2>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ product.description }}
            </p>
          </div>

          <div class="space-y-2">
            <h2 class="text-base font-semibold text-slate-900">Informasi Produk</h2>

            <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm">
              <div class="grid grid-cols-[120px,1fr] gap-4 px-4 py-3 border-b border-slate-100">
                <span class="text-slate-500">Kategori</span>
                <span class="text-slate-800">{{ product.category }}</span>
              </div>
              <div class="grid grid-cols-[120px,1fr] gap-4 px-4 py-3">
                <span class="text-slate-500">Kondisi</span>
                <span class="text-slate-800">{{ product.condition }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { useCart } from '../stores/cart'

const route = useRoute()

const { addMarketProduct, addAuctionBid } = useCart()

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find((p) => p.id === id) || null
})

const userBid = ref('')

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}

function handleAddToCart() {
  if (!product.value || product.value.type !== 'Market') return
  addMarketProduct(product.value.id)
}

function handlePlaceBid() {
  if (!product.value || product.value.type !== 'Lelang') return

  const raw = (userBid.value ?? '').toString().trim()

  if (raw === '') {
    console.warn('Input bid kosong — tidak diproses.')
    return
  }

  const cleaned = raw.replace(/\D/g, '')
  if (cleaned === '') {
    console.warn('Bid tidak valid — hanya angka yang diterima.')
    return
  }

  const numeric = Number(cleaned)

  if (!Number.isFinite(numeric) || numeric <= 0) {
    console.warn('Nominal bid tidak valid.')
    return
  }

  const minBid = product.value.currentBid + product.value.bidStep
  if (numeric < minBid) {
    console.warn(`Bid terlalu rendah. Minimal: Rp ${minBid.toLocaleString('id-ID')}`)
    return
  }

  addAuctionBid(product.value.id, numeric, product.value.endText)

  userBid.value = ''
}
</script>
