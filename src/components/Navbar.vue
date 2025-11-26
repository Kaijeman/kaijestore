<template>
  <header class="w-full bg-slate-950/95 border-b border-slate-800 sticky top-0 z-30 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <router-link to="/" class="inline-flex items-center px-3 py-1"> KaijeStore </router-link>

      <div class="flex items-center gap-1 sm:gap-3 text-sm">
        <router-link
          to="/"
          class="px-3 py-1 rounded-md transition-colors hover:bg-slate-800 hover:text-white"
          :class="isActive('/') ? 'text-white' : 'text-slate-300'"
        >
          Beranda
        </router-link>

        <router-link
          to="/katalog"
          class="px-3 py-1 rounded-md transition-colors hover:bg-slate-800 hover:text-white"
          :class="isActive('/katalog') ? 'text-white' : 'text-slate-300'"
        >
          Katalog
        </router-link>

        <router-link
          to="/keranjang"
          class="px-3 py-1 rounded-md transition-colors hover:bg-slate-800 hover:text-white"
          :class="isActive('/keranjang') ? 'text-white' : 'text-slate-300'"
        >
          Keranjang
        </router-link>

        <router-link
          to="/kontak"
          class="px-3 py-1 rounded-md transition-colors hover:bg-slate-800 hover:text-white"
          :class="isActive('/kontak') ? 'text-white' : 'text-slate-300'"
        >
          Kontak
        </router-link>

        <button
          type="button"
          class="px-3 py-1 rounded-md text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
        >
          Profil
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path) {
  return route.path === path
}
</script>
