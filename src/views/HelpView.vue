<template>
  <div class="bg-slate-50">
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-slate-900 text-3xl sm:text-4xl font-bold mb-4">Pusat Bantuan</h1>
        <p class="text-sm text-slate-500 max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan yang sering diajukan.<br />
          Jika Anda membutuhkan bantuan tambahan, jangan ragu untuk menghubungi kami.
        </p>
      </div>
    </section>

    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <FAQItem
          icon="bi-cart3"
          question="Bagaimana cara berbelanja di KaijeStore?"
          answer="Anda dapat memilih produk, menambahkannya ke keranjang, lalu melakukan pembayaran melalui metode yang tersedia."
        />

        <FAQItem
          icon="bi-lightning"
          question="Bagaimana cara mengikuti lelang?"
          answer="Anda dapat mengikuti lelang dengan mengajukan bid selama periode lelang berlangsung."
        />

        <FAQItem
          icon="bi-credit-card"
          question="Metode pembayaran apa saja yang tersedia?"
          answer="Kami menerima transfer bank, e-wallet, dan pembayaran melalui minimarket tertentu."
        />

        <FAQItem
          icon="bi-truck"
          question="Berapa lama waktu pengiriman?"
          answer="Pengiriman membutuhkan 2-5 hari kerja tergantung lokasi Anda."
        />

        <FAQItem
          icon="bi-arrow-repeat"
          question="Bagaimana kebijakan pengembalian produk?"
          answer="Anda dapat mengajukan pengembalian dalam waktu 7 hari setelah produk diterima dengan syarat dan ketentuan berlaku."
        />

        <FAQItem
          icon="bi-question-circle"
          question="Apakah produk dijamin original?"
          answer="Semua produk di KaijeStore dijamin original 100% dan bergaransi resmi."
        />
      </div>
    </section>

    <section class>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="bg-black border border-slate-800 rounded-2xl p-12 text-center">
          <div class="text-4xl mb-4">
            <i class="bi bi-question-circle-fill text-white"></i>
          </div>

          <h2 class="text-xl font-semibold text-white mb-2">Masih Butuh Bantuan?</h2>

          <p class="text-sm text-slate-400 max-w-xl mx-auto">
            Tim customer service kami siap membantu Anda.<br />
            Hubungi kami melalui halaman kontak kami.
          </p>

          <div class="mt-10">
            <router-link
              to="/kontak"
              class="px-6 py-3 rounded-lg border hover:border-slate-900 bg-slate-900 text-slate-100 text-sm font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Hubungi Kami
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FAQItem from '../components/FAQItem.vue'
</script>
