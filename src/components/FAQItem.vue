<template>
  <div>
    <button
      @click="open = !open"
      class="w-full flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-5 text-left hover:bg-slate-100 transition"
    >
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
          <i :class="`bi ${icon} text-xl text-slate-700`"></i>
        </div>
        <span class="font-medium text-slate-800 text-sm">
          {{ question }}
        </span>
      </div>

      <i class="bi text-slate-700" :class="open ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
    </button>

    <!-- Answer -->
    <div
      v-if="open"
      class="px-6 pt-3 pb-5 text-slate-600 text-sm bg-white border-x border-b border-slate-200 rounded-b-2xl"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: String,
  question: String,
  answer: String,
})

const open = ref(false)
</script>
