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
