<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/image/Konsol.webp')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Temukan Konsol & Game yang Anda inginkan di KaijeStore
          </h1>
          <p class="mt-6 text-slate-300 text-sm sm:text-base max-w-xl">
            Toko Konsol dan Game terpercaya dengan sistem beli langsung dan lelang.
            Dapatkan konsol dan game favorit Anda dengan harga terbaik!
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              class="px-6 py-3 rounded-lg bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-slate-900 hover:text-slate-200 transition-colors"
            >
              Jelajahi Katalog
            </button>

            <router-link
              to="/kontak"
              class="px-6 py-3 rounded-lg bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-slate-900 hover:text-slate-200 transition-colors"
            >
              Hubungi Kami
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-12">
          <h2 class="text-lg font-semibold text-slate-100 mb-2">
            Mengapa Memilih KaijeStore?
          </h2>
          <p class="text-sm text-slate-400">
            Kami menyediakan berbagai fitur untuk pengalaman berbelanja yang lebih baik
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-4">
          <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
              <span class="text-xs">
                <i class="bi bi-cart-fill text-xl"></i>
              </span>
            </div>
            <h3 class="font-semibold text-sm mb-2">Beli Langsung</h3>
            <p class="text-xs text-slate-400">
              Dapatkan konsol dan game favorit Anda dengan harga tetap.
            </p>
          </div>

          <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
              <span class="text-xs">
                <i class="bi bi-hammer text-xl"></i>
              </span>
            </div>
            <h3 class="font-semibold text-sm mb-2">Sistem Lelang</h3>
            <p class="text-xs text-slate-400">
              Ikuti lelang dan dapatkan penawaran terbaik untuk item langka.
            </p>
          </div>

          <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
              <span class="text-xs">
                <i class="bi bi-cash text-xl"></i>
              </span>
            </div>
            <h3 class="font-semibold text-sm mb-2">Harga Terbaik</h3>
            <p class="text-xs text-slate-400">
              Kami menjamin harga kompetitif untuk semua produk.
            </p>
          </div>

          <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
              <span class="text-xs">
                <i class="bi bi-controller text-xl"></i>
              </span>
            </div>
            <h3 class="font-semibold text-sm mb-2">Koleksi Lengkap</h3>
            <p class="text-xs text-slate-400">
              Dari konsol klasik hingga game terbaru, semua ada di sini.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
