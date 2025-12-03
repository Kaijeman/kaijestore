<template>
  <section class="bg-slate-50 min-h-screen">
    <section class="py-8 border-b border-slate-200 bg-white/60 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl sm:text-3xl text-slate-900 font-bold mb-2">Profil Saya</h1>
        <p class="text-sm text-slate-500 max-w-xl">
          Kelola informasi akun dan aktivitas Anda di sini.
        </p>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <aside
            class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 h-fit md:col-span-1"
          >
            <div class="flex flex-col items-center text-center space-y-3">
              <div
                class="h-20 w-20 rounded-full bg-slate-900 text-slate-100 flex items-center justify-center"
              >
                <i class="bi bi-person text-3xl"></i>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">Lucy</p>
                <p class="text-xs text-slate-500">Member sejak Desember 2025</p>
              </div>
            </div>

            <dl class="space-y-3 text-xs">
              <div class="flex gap-3">
                <i class="bi bi-envelope text-slate-400 mt-0.5"></i>
                <div>
                  <dt class="text-slate-500">Email</dt>
                  <dd class="text-slate-800">{{ profile.email }}</dd>
                </div>
              </div>

              <div class="flex gap-3">
                <i class="bi bi-telephone text-slate-400 mt-0.5"></i>
                <div>
                  <dt class="text-slate-500">Telepon</dt>
                  <dd class="text-slate-800">{{ profile.phone }}</dd>
                </div>
              </div>

              <div class="flex gap-3">
                <i class="bi bi-geo-alt text-slate-400 mt-0.5"></i>
                <div>
                  <dt class="text-slate-500">Alamat</dt>
                  <dd class="text-slate-800 whitespace-pre-line">
                    {{ profile.address }}
                  </dd>
                </div>
              </div>
            </dl>

            <div class="space-y-3">
              <button
                type="button"
                class="w-full rounded-full bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Edit Profil
              </button>
              <button
                type="button"
                class="w-full rounded-full border border-slate-300 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <i class="bi bi-box-arrow-right text-xs"></i>
                Keluar
              </button>
            </div>
          </aside>

          <div class="space-y-6 md:col-span-2">
            <section class="bg-white rounded-2xl border border-slate-200">
              <div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <i class="bi bi-receipt text-slate-700"></i>
                <h2 class="text-sm font-semibold text-slate-900">Riwayat Pembelian</h2>
              </div>

              <div v-if="orders.length === 0" class="px-6 py-5 text-xs text-slate-500">
                Belum ada riwayat pembelian.
              </div>

              <div v-else class="divide-y divide-slate-100">
                <article
                  v-for="order in orders"
                  :key="order.code"
                  class="px-6 py-4 flex flex-col gap-2 text-xs sm:text-sm"
                >
                  <div class="flex items-center justify-between gap-3">
                    <div class="space-y-0.5">
                      <p class="text-xs text-slate-500">
                        {{ order.date }}
                      </p>
                    </div>

                    <span
                      class="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium border"
                      :class="
                        order.status === 'Dikirim'
                          ? 'bg-blue-50 text-blue-700 border-blue-100'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                      "
                    >
                      {{ order.status }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between gap-3">
                    <div class="space-y-0.5">
                      <p class="text-sm font-semibold text-slate-900">
                        {{ order.product }}
                      </p>
                      <p class="text-xs text-slate-500">Rp {{ formatPrice(order.total) }}</p>
                    </div>

                    <button type="button" class="text-[11px] text-slate-500 hover:text-slate-900">
                      Lihat Detail
                    </button>
                  </div>
                </article>
              </div>
            </section>

            <section class="bg-white rounded-2xl border border-slate-200">
              <div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <i class="bi bi-hourglass text-orange-500"></i>
                <h2 class="text-sm font-semibold text-slate-900">Lelang Aktif</h2>
              </div>

              <div v-if="auctions.length === 0" class="px-6 py-5 text-xs text-slate-500">
                Belum ada lelang yang sedang diikuti.
              </div>

              <div v-else class="divide-y divide-orange-100/70">
                <article
                  v-for="auction in auctions"
                  :key="auction.code"
                  class="px-6 py-4 text-xs sm:text-sm"
                >
                  <div class="flex items-center justify-between gap-3 mb-2">
                    <div class="space-y-0.5">
                      <p class="text-xs text-slate-500">Berakhir: {{ auction.endsIn }}</p>
                    </div>

                    <span
                      class="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium border"
                      :class="
                        auction.status === 'Bid Tertinggi'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                          : 'bg-rose-50 text-rose-700 border-rose-100'
                      "
                    >
                      {{ auction.status }}
                    </span>
                  </div>

                  <p class="text-sm font-semibold text-slate-900 mb-1">
                    {{ auction.product }}
                  </p>
                  <p class="text-xs text-slate-500 mb-3">
                    {{ auction.category }}
                  </p>

                  <div
                    class="rounded-xl bg-orange-50/70 border border-orange-100 px-4 py-3 grid gap-3 sm:grid-cols-2 text-xs"
                  >
                    <div>
                      <p class="text-slate-500 mb-0.5">Bid Anda</p>
                      <p class="font-semibold text-orange-600">
                        Rp {{ formatPrice(auction.yourBid) }}
                      </p>
                    </div>
                    <div>
                      <p class="text-slate-500 mb-0.5">Bid Tertinggi</p>
                      <p class="font-semibold text-slate-900">
                        Rp {{ formatPrice(auction.topBid) }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-3">
                    <button
                      type="button"
                      class="w-full rounded-xl bg-orange-500 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                    >
                      Update Bid
                    </button>
                  </div>
                </article>
              </div>
            </section>

            <section class="bg-white rounded-2xl border border-slate-200">
              <div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <i class="bi bi-heart text-rose-500"></i>
                <h2 class="text-sm font-semibold text-slate-900">Wishlist</h2>
              </div>

              <div
                v-if="wishlist.length === 0"
                class="px-6 py-10 text-center text-xs text-slate-500"
              >
                <div
                  class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-300"
                >
                  <i class="bi bi-heart text-xl"></i>
                </div>
                Belum ada produk di wishlist.
              </div>

              <div v-else class="px-6 py-4 grid gap-4 sm:grid-cols-2">
                <article
                  v-for="item in wishlist"
                  :key="item.id"
                  class="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
                >
                  <div class="h-20 bg-slate-100 flex items-center justify-center text-slate-300">
                    <img
                      v-if="item.image"
                      :src="item.image"
                      :alt="item.name"
                      class="h-full w-full object-cover"
                    />
                    <i v-else class="bi bi-controller text-2xl"></i>
                  </div>

                  <div class="p-3 space-y-1 text-xs">
                    <p class="text-[11px] text-slate-500">{{ item.category }}</p>
                    <p class="text-sm font-semibold text-slate-900">{{ item.name }}</p>
                    <p
                      class="text-xs font-semibold"
                      :class="item.type === 'Lelang' ? 'text-orange-600' : 'text-slate-600'"
                    >
                      <template v-if="item.type === 'Lelang'">
                        Bid saat ini · Rp {{ formatPrice(item.price) }}
                      </template>

                      <template v-else> Rp {{ formatPrice(item.price) }} </template>
                    </p>

                    <div class="mt-3 flex items-center justify-between gap-2">
                      <button
                        v-if="item.type === 'Market'"
                        type="button"
                        @click.stop="handleWishlistAddToCart(item.id)"
                        class="flex-1 rounded-full bg-slate-900 py-1.5 text-[11px] font-semibold text-white hover:bg-slate-800 transition-colors"
                      >
                        Tambah ke Keranjang
                      </button>

                      <button
                        v-else
                        type="button"
                        @click.stop="handleWishlistGoToDetail(item.id)"
                        class="flex-1 rounded-full bg-orange-500 py-1.5 text-[11px] font-semibold text-white hover:bg-orange-600 transition-colors"
                      >
                        Pasang Bid
                      </button>

                      <button
                        type="button"
                        class="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors"
                        @click.stop="handleWishlistRemove(item.id)"
                      >
                        <i class="bi bi-heart-fill"></i>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWishlist } from '../stores/wishlist'
import { useCart } from '../stores/cart'

const profile = {
  email: 'lucy@example.com',
  phone: '+62 851-7670-5152',
  address: 'Jl. Soekarno Hatta, Balikpapan Utara,\nKalimantan Timur 76127',
}

const orders = [
  {
    product: 'PlayStation 5',
    total: 7_999_000,
    date: '20 Nov 2024',
    status: 'Dikirim',
  },
  {
    product: 'The Last of Us Part II',
    total: 699_000,
    date: '15 Nov 2024',
    status: 'Selesai',
  },
  {
    product: 'Xbox Series X',
    total: 7_499_000,
    date: '10 Nov 2024',
    status: 'Selesai',
  },
]

const auctions = [
  {
    product: 'Fire Emblem Fates Special Edition',
    category: 'Game',
    endsIn: '1 hari lagi',
    yourBid: 6_100_000,
    topBid: 6_100_000,
    status: 'Bid Tertinggi',
  },
  {
    product: 'Nintendo 3DS The Legend of Zelda 25th Anniversary Edition',
    category: 'Konsol',
    endsIn: '2 hari lagi',
    yourBid: 4_900_000,
    topBid: 5_000_000,
    status: 'Kalah',
  },
]

const { items, removeFromWishlist } = useWishlist()
const wishlist = computed(() => items.value)

const router = useRouter()
const { addMarketProduct } = useCart()

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}

function handleWishlistAddToCart(productId) {
  addMarketProduct(productId)
}

function handleWishlistGoToDetail(productId) {
  router.push(`/katalog/${productId}`)
}

function handleWishlistRemove(id) {
  removeFromWishlist(id)
}
</script>
