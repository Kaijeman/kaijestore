<template>
  <div class="bg-slate-50 min-h-screen">
    <section v-if="isEmpty" class="flex items-center justify-center py-24">
      <div class="text-center">
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
        >
          <i class="bi bi-cart3 text-4xl"></i>
        </div>
        <h1 class="text-lg font-semibold text-slate-900 mb-2">Keranjang Anda Kosong</h1>
        <p class="text-sm text-slate-500 mb-6">
          Belum ada produk di keranjang. Mulai belanja sekarang!
        </p>
        <router-link
          to="/katalog"
          class="inline-flex items-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-colors"
        >
          <i class="bi bi-arrow-left"></i>
          Kembali ke Katalog
        </router-link>
      </div>
    </section>

    <section v-else class="py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-6">
          <router-link
            to="/katalog"
            class="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <i class="bi bi-arrow-left"></i>
            Lanjut Belanja
          </router-link>
        </div>

        <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div class="space-y-6">
            <div v-if="marketItems.length > 0" class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <i class="bi bi-cart3 text-slate-700"></i>
                <h2 class="text-sm font-semibold text-slate-900">Pembelian Langsung</h2>
              </div>

              <div class="divide-y divide-slate-100">
                <div v-for="item in marketItems" :key="item.id" class="flex gap-4 px-6 py-4">
                  <div
                    class="h-20 w-20 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-300"
                  >
                    <img
                      v-if="item.image"
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                    />
                    <i v-else class="bi bi-controller text-2xl text-slate-300"></i>
                  </div>

                  <div class="flex-1 space-y-1">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-sm font-semibold text-slate-900">
                          {{ item.name }}
                        </p>
                        <p class="text-xs text-slate-500">
                          {{ item.category }}
                        </p>
                      </div>

                      <button
                        type="button"
                        class="text-slate-400 hover:text-red-500"
                        @click="removeMarketItem(item.id)"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>

                    <div class="mt-3 flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3 text-xs text-slate-600">
                        <span>Jumlah:</span>
                        <div class="inline-flex items-center rounded-full border border-slate-300">
                          <button
                            type="button"
                            class="px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
                            @click="decreaseQty(item)"
                          >
                            -
                          </button>
                          <span class="px-4 text-sm text-slate-900">
                            {{ item.quantity }}
                          </span>
                          <button
                            type="button"
                            class="px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
                            @click="increaseQty(item)"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div class="text-right">
                        <p class="text-xs text-slate-500">
                          Rp {{ formatPrice(item.price) }} x {{ item.quantity }}
                        </p>
                        <p class="text-sm font-semibold text-slate-900">
                          Rp {{ formatPrice(item.price * item.quantity) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="auctionItems.length > 0"
              class="rounded-2xl border border-orange-200 bg-orange-50/60"
            >
              <div class="flex items-center gap-2 border-b border-orange-100 px-6 py-4">
                <i class="bi bi-hourglass text-orange-500"></i>
                <h2 class="text-sm font-semibold text-slate-900">Lelang yang Diikuti</h2>
              </div>

              <div class="divide-y divide-orange-100">
                <div v-for="item in auctionItems" :key="item.id" class="flex gap-4 px-6 py-4">
                  <div
                    class="h-20 w-20 rounded-xl bg-white border border-orange-100 flex items-center justify-center text-orange-300"
                  >
                    <img
                      v-if="item.image"
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                    />
                    <i v-else class="bi bi-controller text-2xl text-orange-300"></i>
                  </div>

                  <div class="flex-1">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-sm font-semibold text-slate-900">
                          {{ item.name }}
                        </p>
                        <p class="text-xs text-slate-500">
                          {{ item.category }}
                        </p>
                      </div>

                      <button
                        type="button"
                        class="text-slate-400 hover:text-red-500"
                        @click="removeAuctionItem(item.id)"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>

                    <div class="mt-3 rounded-xl bg-orange-100/70 px-4 py-3 text-xs">
                      <p class="text-slate-700 mb-1">Bid Anda</p>
                      <p class="text-sm font-semibold text-orange-600">
                        Rp {{ formatPrice(item.bidAmount) }}
                      </p>
                      <p class="mt-1 text-[11px] text-orange-700">
                        {{ item.endText }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="rounded-2xl border border-slate-200 bg-white p-6 h-fit">
            <h2 class="text-sm font-semibold text-slate-900 mb-4">Ringkasan Pesanan</h2>

            <dl class="space-y-3 text-sm">
              <div class="flex justify-between">
                <dt class="text-slate-500">Subtotal Market ({{ marketItems.length }} item)</dt>
                <dd class="text-slate-900">Rp {{ formatPrice(subtotalMarket) }}</dd>
              </div>

              <div class="flex justify-between">
                <dt class="text-slate-500">Subtotal Lelang ({{ auctionItems.length }} item)</dt>
                <dd class="text-slate-900">Rp {{ formatPrice(subtotalAuction) }}</dd>
              </div>

              <div class="flex justify-between pb-3 border-b border-slate-100">
                <dt class="text-slate-500">Biaya Pengiriman</dt>
                <dd class="text-slate-900">Rp {{ formatPrice(shippingCost) }}</dd>
              </div>

              <div class="flex justify-between pt-1">
                <dt class="font-semibold text-slate-900">Total</dt>
                <dd class="font-semibold text-slate-900">Rp {{ formatPrice(total) }}</dd>
              </div>
            </dl>

            <div class="mt-6 space-y-3">
              <button
                v-if="marketItems.length > 0"
                type="button"
                class="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Checkout Pembelian
              </button>

              <button
                v-if="auctionItems.length > 0"
                type="button"
                class="w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Kelola Lelang
              </button>

              <p class="mt-1 text-[11px] text-center text-slate-500">Harga sudah termasuk PPN</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '../stores/cart'

const {
  state,
  isEmpty,
  subtotalMarket,
  subtotalAuction,
  total,
  increaseQty,
  decreaseQty,
  removeMarketItem,
  removeAuctionItem,
} = useCart()

const marketItems = computed(() => state.marketItems)
const auctionItems = computed(() => state.auctionItems)
const shippingCost = computed(() => state.shippingCost)

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}
</script>
