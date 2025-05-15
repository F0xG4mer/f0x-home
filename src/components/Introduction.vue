<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import introductionData from '@/data/introduction.json'

const text = introductionData.text;
</script>

<template>
   <SectionHeader title="Introduction" />
   <div class="text-center text-white text-3xl mt-20 whitespace-pre-line">
      <p>{{ text }}</p>
   </div>
</template>