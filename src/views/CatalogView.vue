<template>
  <div class="bg-slate-50 min-h-screen">
    <section class="py-8 border-b border-slate-200 bg-white/60 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-slate-900 text-2xl sm:text-3xl font-bold mb-4">Katalog Produk</h1>

        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="flex-1">
            <div
              class="relative rounded-xl border border-slate-200 bg-slate-50 flex items-center px-3 py-2"
            >
              <i class="bi bi-search text-slate-400 mr-2"></i>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari produk..."
                class="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div class="flex items-center gap-3 text-sm text-slate-700">
            <div class="flex items-center gap-2">
              <i class="bi bi-funnel"></i>
              <span class="hidden sm:inline">Filter:</span>
            </div>

            <select
              v-model="selectedCategory"
              class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option value="all">Semua Kategori</option>
              <option value="Konsol">Konsol</option>
              <option value="Game">Game</option>
            </select>

            <select
              v-model="selectedType"
              class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option value="all">Semua Tipe</option>
              <option value="Market">Market</option>
              <option value="Lelang">Lelang</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-10 pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-sm text-slate-500 mb-4">Menampilkan {{ filteredProducts.length }} produk.</p>

        <div class="grid gap-6 md:grid-cols-3">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedType = ref('all')

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchesSearch =
      !searchQuery.value || p.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'all' || p.category === selectedCategory.value

    const matchesType = selectedType.value === 'all' || p.type === selectedType.value

    return matchesSearch && matchesCategory && matchesType
  })
})
</script>
