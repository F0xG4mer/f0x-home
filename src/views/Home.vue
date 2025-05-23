<script setup>
import Introduction from '@/components/Introduction.vue';
import TwitterSection from '@/components/TwitterSection.vue';
import Footer from '@/components/Footer.vue'
import Projects from '@/components/Projects.vue'
import Models from '@/components/ModelsList.vue'
import { motion } from "motion-v"


import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo({
    top: 0,
  })
  setTimeout(() => {
    document.documentElement.style.overflow = 'scroll';
  }, 4000);
});
</script>


<template>
  <!-- <div class="mt-15">

  </div> -->

  <div class="m-5">
    <motion.div :animate="{
      y: [-1000, 100, 0],
      rotate: [15, 15, 0],
      scale: [3, 3, 1],
      opacity: [0, 1, 1]
    }" :transition="{
      duration: 3,
      delay: 0.25,
      ease: 'easeInOut',
      times: [0, 0.4, 1],
    }"
      class="w-full h-dvh rounded-4xl img-cover drop-shadow-2xl drop-shadow-black flex flex-column justify-content-start ">

      <div class="logo-row m-auto logo-scale">
        <motion.img src="/images/F0x-Logo_F.svg" draggable="false" />
        <motion.img src="/images/F0x-Logo_O.svg" draggable="false" />
        <motion.img src="/images/F0x-Logo_X.svg" draggable="false" />

      </div>

    </motion.div>
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