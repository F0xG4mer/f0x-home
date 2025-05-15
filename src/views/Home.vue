<script setup lang="ts">
import Introduction from '@/components/Introduction.vue';
import TwitterSection from '@/components/TwitterSection.vue';
import Footer from '@/components/Footer.vue'
import Projects from '@/components/Projects.vue'
import Models from '@/components/ModelsList.vue'

</script>

<template>
  <div class="mt-15">
    <img class="logo-top m-auto" src="/images/F0x-Logo.webp" draggable="false">

  </div>
    <div
      class="w-11/12 h-dvh m-auto mt-10 img-cover drop-shadow-2xl drop-shadow-black flex flex-column justify-content-start">
    </div>

  <div class="mt-50 h-100">
    <Introduction />
  </div>
  <div class="mt-20 h-100">
    <TwitterSection />
  </div>
  <div class="mt-20 h-100">
    <Projects />
  </div>
  <div class="mt-20 h-100">
    <Models />
  </div>
  <Footer />
</template>

<style>
.icon-s-3-4 {
  scale: 7.5;
}


.logo-top {
  height: 250px;
}
</style>