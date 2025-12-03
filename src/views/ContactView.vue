<template>
  <div class="bg-slate-50 min-h-screen">
    <section class="py-8 border-b border-slate-200 bg-white/60 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl sm:text-3xl text-slate-900 font-bold mb-2">Hubungi Kami</h1>
        <p class="text-sm text-slate-500 max-w-xl">
          Punya pertanyaan atau butuh bantuan? Kami siap membantu Anda!
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">
      <div class="-mt-12 grid gap-6 md:grid-cols-4">
        <div class="bg-white rounded-2xl border border-slate-200 p-5">
          <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
            <span class="text-xs">
              <i class="bi bi-envelope text-xl text-slate-700"></i>
            </span>
          </div>
          <p class="text-xs text-slate-500 mb-1">Email</p>
          <p class="text-sm text-slate-800 font-medium">support@kaijestore.com</p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-5">
          <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
            <span class="text-xs">
              <i class="bi bi-telephone text-xl text-slate-700"></i>
            </span>
          </div>
          <p class="text-xs text-slate-500 mb-1">Telepon</p>
          <p class="text-sm text-slate-800 font-medium">+62 813-9402-2660</p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-5">
          <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
            <span class="text-xs">
              <i class="bi bi-geo-alt text-xl text-slate-700"></i>
            </span>
          </div>
          <p class="text-xs text-slate-500 mb-1">Alamat</p>
          <p class="text-sm text-slate-800 font-medium">
            Jl. Sepinggan Pratama,<br />
            Balikpapan Selatan, Kalimantan Timur 76115
          </p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-5">
          <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
            <span class="text-xs">
              <i class="bi bi-clock text-xl text-slate-700"></i>
            </span>
          </div>
          <p class="text-xs text-slate-500 mb-1">Jam Operasional</p>
          <p class="text-sm text-slate-800 font-medium">
            Senin - Sabtu,<br />
            09.00 - 21.00 WITA
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 class="text-lg text-slate-800 font-semibold mb-1">Kirim Pesan</h2>
        <p class="text-xs text-slate-500 mb-6">
          Isi form di bawah ini dan kami akan segera menghubungi Anda.
        </p>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs text-slate-400 mb-1">Nama Lengkap</label>
              <input
                type="text"
                class="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Email</label>
              <input
                type="email"
                class="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Subjek</label>
            <input
              type="text"
              class="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Topik pesan Anda"
            />
          </div>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Pesan</label>
            <textarea
              rows="5"
              class="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="w-full md:w-auto px-6 py-2.5 rounded-lg bg-slate-100 text-slate-900 border border-slate-900 text-sm font-semibold hover:bg-slate-900 hover:text-slate-100 transition-colors"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div class="grid md:grid-cols-2">
          <a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.906035491519!2d116.88041197448243!3d-1.2252778355614606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1460f60467709%3A0xb133c7252826968!2sJl.%20Sepinggan%20Pratama%2C%20Sepinggan%2C%20Kecamatan%20Balikpapan%20Selatan%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076115!5e0!3m2!1sen!2sid!4v1759375854096!5m2!1sen!2sid"
              class="w-full h-full border-0 rounded-none"
            ></iframe>
          </a>

          <div
            class="p-6 md:p-8 flex flex-col items-center md:items-start justify-center text-center md:text-left"
          >
            <h2 class="text-lg text-slate-800 font-semibold mb-2">Lokasi Kami</h2>

            <p class="text-xs text-slate-500 mb-4 max-w-md">
              Kunjungi toko fisik kami untuk pengalaman berbelanja langsung.
            </p>

            <div class="mt-2">
              <div class="text-2xl mb-2">
                <i class="bi bi-geo-alt text-xl text-slate-700"></i>
              </div>
              <p class="text-sm text-slate-800 font-medium mb-1">
                Jl. Sepinggan Pratama,<br />
                Balikpapan Selatan, Kalimantan Timur 76115
              </p>

              <a
                href="https://www.google.com/maps/place/Jl.+Sepinggan+Pratama,+Sepinggan,+Balikpapan"
                target="_blank"
                class="inline-block mt-3 px-4 py-2 rounded-lg border border-slate-900 text-xs font-semibold bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-colors"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
function handleSubmit() {
  alert('Pesan terkirim.')
}
</script>
