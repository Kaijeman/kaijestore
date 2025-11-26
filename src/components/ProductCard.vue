<template>
  <article
    class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    @click="goToDetail"
  >
    <div class="relative h-32 bg-slate-100">
      <span
        class="absolute top-3 right-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
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

    <div class="p-4 space-y-1">
      <h2 class="text-sm font-semibold text-slate-900">
        {{ product.name }}
      </h2>

      <p class="text-xs text-slate-500">
        {{ product.category }}
      </p>

      <p v-if="product.type === 'Lelang'" class="text-xs font-semibold text-orange-600 mt-2">
        Bid saat ini
      </p>

      <p class="text-sm font-semibold text-slate-900">Rp {{ formatPrice(product.price) }}</p>

      <p class="text-[11px] text-slate-500">
        {{ product.extra }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToDetail() {
  router.push(`/katalog/${props.product.id}`)
}

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}
</script>
