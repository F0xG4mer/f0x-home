<script setup>
import Cover from './components/Cover.vue';
import IntroductionSection from './components/Sections/IntroductionSection.vue';
import NaviagtionBar from './components/NaviagtionBar.vue';
import ProjectSection from './components/Sections/ProjectSection.vue';
import HighlightSection from './components/Sections/HighlightSection.vue';
import ShopSection from './components/Sections/ShopSection.vue'
import NoiseOverlay from './components/NoiseOverlay.vue';
import Footer from './components/Footer.vue';

window.scrollTo(0, 2);


import { onMounted } from 'vue'

onMounted(() => {
  // Disable scrolling (but keep scrollbar visible)
  const disableScroll = (e) => {
    e.preventDefault()
  }

  // Add event listener to block scroll wheel, touch, and key scrolls
  window.addEventListener('wheel', disableScroll, { passive: false })
  window.addEventListener('touchmove', disableScroll, { passive: false })
  window.addEventListener('keydown', disableScroll, { passive: false })

  // After 2 seconds, remove listeners to re-enable scroll
  setTimeout(() => {
    window.removeEventListener('wheel', disableScroll)
    window.removeEventListener('touchmove', disableScroll)
    window.removeEventListener('keydown', disableScroll)
  }, 2000)
})
</script>

<template>
  <NoiseOverlay/>
  <NaviagtionBar />
  <Cover />
  <IntroductionSection />
  <HighlightSection />
  <ProjectSection />
  <ShopSection />
  <Footer />
</template>
