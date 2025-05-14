<script setup lang="ts">
import Introduction from '@/components/Introduction.vue';
import TwitterSection from '@/components/TwitterSection.vue';
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="mt-12">
    <img class="m-auto logo-top" src="/images/F0x-Logo.webp" draggable="false">
  </div>
  <div class="w-11/12 h-dvh m-auto mt-12 img-cover drop-shadow-2xl drop-shadow-black">

  </div>

  <div class="mt-50 h-100">
    <Introduction />
  </div>
  <div class="mt-20 h-100">
    <TwitterSection />
  </div>
  <div class="h-100"></div>
  <div class="h-100"></div>
  <Footer />
</template>

<style>
.icon-s-3-4 {
  scale: 7.5;
}

.logo-top {
  height: 175px;
}
</style>